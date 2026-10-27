import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { LmsProviderType } from "../class_service/lms_course";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { KMSKey, KMSKeyType } from "./kms_key";
export declare const protobufPackage = "organization_service";
export declare enum LmsConnectionStatus {
    LMS_CONNECTION_UNCONFIGURED = "LMS_CONNECTION_UNCONFIGURED",
    LMS_CONNECTION_READY = "LMS_CONNECTION_READY",
    LMS_CONNECTION_DISCONNECTED = "LMS_CONNECTION_DISCONNECTED",
    LMS_CONNECTION_REAUTHORIZATION_REQUIRED = "LMS_CONNECTION_REAUTHORIZATION_REQUIRED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function lmsConnectionStatusFromJSON(object: any): LmsConnectionStatus;
export declare function lmsConnectionStatusToJSON(object: LmsConnectionStatus): string;
export declare function lmsConnectionStatusToNumber(object: LmsConnectionStatus): number;
export interface GetKmsKeyRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    key_type?: KMSKeyType | undefined;
}
export interface GetOrganizationKmsKeysRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
}
export interface GetOrganizationKmsKeysResponse {
    keys: KMSKey[];
}
export interface UpdateKmsKeyRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    key_type?: KMSKeyType | undefined;
    secret_material?: string | undefined;
}
export interface GetAvailableLmsProvidersRequest {
    context: RequestContext | undefined;
}
export interface GetAvailableLmsProvidersResponse {
    providers: LmsProviderType[];
}
export interface LmsConnectionState {
    connection_id: ObjectId | undefined;
    organization_id: ObjectId | undefined;
    provider?: LmsProviderType | undefined;
    revision?: number | undefined;
    enabled?: boolean | undefined;
    status?: LmsConnectionStatus | undefined;
    base_url?: string | undefined;
    grant_subject?: string | undefined;
    event_generation?: number | undefined;
}
/**
 * Shared by GetLmsConnectionState and DisconnectLmsConnection. The school is
 * derived from context, so the request cannot target an arbitrary organization.
 * State reads return non-secret metadata and do not create a connection row.
 * The HTTP settings route additionally requires ORG_SETTINGS_FULL_ACCESS.
 *
 * Disconnect requires a teacher/organization-owner actor with that exact role,
 * retires the stored grant and advances revision/event_generation to reject old
 * work/events. It does not delete saved coursework or the Canvas key in KMS.
 */
export interface GetLmsConnectionStateRequest {
    /**
     * Authenticated school context, or organization-system context for internal reads.
     * Disconnect requires the original permitted human actor.
     */
    context: RequestContext | undefined;
    /** The school's CANVAS or GOOGLE_CLASSROOM connection. */
    provider?: LmsProviderType | undefined;
}
/**
 * Internal worker credential access requiring an organization-system context;
 * a school administrator's ordinary context cannot retrieve these secrets.
 * The connection must be enabled/ready and expected_revision must still match.
 *
 * Canvas reads its KMS token. Google may refresh an expiring token while
 * serializing grant rotation across replicas. Transient/throttle failures retain
 * the grant and return typed retry metadata; revoked authorization requires reconnect.
 * Never expose the response to frontend clients, telemetry or logs.
 */
export interface GetLmsCredentialSnapshotRequest {
    /** System context for the school owning the worker's claimed scope. */
    context: RequestContext | undefined;
    /** Selects which provider credential to load for that school. */
    provider?: LmsProviderType | undefined;
    /**
     * Revision captured in the claimed work, not event_generation. A mismatch
     * rejects stale work instead of silently switching it to a newer credential.
     */
    expected_revision?: number | undefined;
}
export interface LmsCredentialSnapshot {
    state: LmsConnectionState | undefined;
    canvas_token?: string | undefined;
    google_access_token?: string | undefined;
    expires_at?: Date | undefined;
}
/**
 * Starts retained-user Classroom OAuth consent for the context's school.
 * Requires a teacher/organization-owner actor with ORG_SETTINGS_FULL_ACCESS;
 * elevated/root authority alone does not replace that role.
 *
 * Creates random state and PKCE material bound to the actor, school, current
 * connection revision and server-derived school callback. Consent expires after
 * ten minutes; starting again retires earlier pending/exchanging consent.
 * Opening the returned URL does not enable updates: complete consent, then enable.
 */
export interface StartLmsGoogleConsentRequest {
    /** Original school administrator identity; no school/actor is accepted from OAuth parameters. */
    context: RequestContext | undefined;
}
/**
 * Used only by the central public GET callback before the school session is known.
 * Requires a global system context with no attached school or human actor.
 * Validates pending state, expiry, current connection revision and the school's
 * current sign-in address against the stored destination.
 *
 * Returns only the fixed school callback URL. It neither consumes the state nor
 * exchanges the code; grant completion still requires the initiating school/actor.
 * Unknown, used, expired or replaced state must restart the connection flow.
 */
export interface ResolveLmsGoogleConsentReturnRequest {
    /** Internal callback resolver identity, never a browser-supplied context. */
    context: RequestContext | undefined;
    /**
     * Exact 43-character base64url state returned through Google's callback, generated
     * in StartLmsGoogleConsent's authorization URL. Treat as a secret; never log it.
     */
    state?: string | undefined;
}
export interface LmsGoogleConsentReturn {
    return_url?: string | undefined;
}
export interface LmsGoogleConsent {
    authorization_url?: string | undefined;
    expires_at: Date | undefined;
}
/**
 * Completes the browser callback under the initiating school and administrator,
 * who must still have ORG_SETTINGS_FULL_ACCESS. The server retrieves the bound
 * PKCE verifier; the browser cannot supply a school, actor, verifier or return URL.
 * Pending consent must be unexpired and match the current connection revision.
 *
 * Concurrent exchanges are fenced. After successful completion, retrying the
 * same actor-bound state returns current connection state without re-exchanging
 * the code, allowing recovery from a lost response. Expired/failed consent needs
 * a new flow. A newly connected grant stays paused until explicitly enabled.
 */
export interface CompleteLmsGoogleConsentRequest {
    /** Original signed-in school administrator, not the public callback's system identity. */
    context: RequestContext | undefined;
    /**
     * Authorization code from the callback fragment; exchanged server-side with PKCE.
     * Never log it, put it in browser storage or retain it in client mutation caches.
     */
    code?: string | undefined;
    /** Original opaque state from the same callback; selects the stored actor-bound consent. */
    state?: string | undefined;
}
/**
 * Enables/pauses the school's synchronization, requiring a teacher/organization-owner
 * actor with ORG_SETTINGS_FULL_ACCESS and the last observed connection revision.
 * Enable requires usable Canvas KMS configuration or a ready Classroom OAuth grant.
 * This changes connection state; provider reconciliation/registration runs in the worker.
 *
 * Pause preserves credentials. A toggle advances revision to invalidate saved
 * authority/work, while event_generation stays stable for configured Canvas delivery.
 * On a revision conflict, reload state before deciding whether to retry the change.
 */
export interface SetLmsSyncEnabledRequest {
    /** Original permitted administrator in the school being managed. */
    context: RequestContext | undefined;
    /** The school's CANVAS or GOOGLE_CLASSROOM connection. */
    provider?: LmsProviderType | undefined;
    /** Pause or enable synchronization without disconnecting the provider grant. */
    enabled?: boolean | undefined;
    /**
     * Revision from GetLmsConnectionState, not event_generation. Zero is allowed
     * when enabling an initially unconfigured connection; do not use zero as a wildcard.
     */
    expected_revision?: number | undefined;
}
export declare const GetKmsKeyRequest: MessageFns<GetKmsKeyRequest>;
export declare const GetOrganizationKmsKeysRequest: MessageFns<GetOrganizationKmsKeysRequest>;
export declare const GetOrganizationKmsKeysResponse: MessageFns<GetOrganizationKmsKeysResponse>;
export declare const UpdateKmsKeyRequest: MessageFns<UpdateKmsKeyRequest>;
export declare const GetAvailableLmsProvidersRequest: MessageFns<GetAvailableLmsProvidersRequest>;
export declare const GetAvailableLmsProvidersResponse: MessageFns<GetAvailableLmsProvidersResponse>;
export declare const LmsConnectionState: MessageFns<LmsConnectionState>;
export declare const GetLmsConnectionStateRequest: MessageFns<GetLmsConnectionStateRequest>;
export declare const GetLmsCredentialSnapshotRequest: MessageFns<GetLmsCredentialSnapshotRequest>;
export declare const LmsCredentialSnapshot: MessageFns<LmsCredentialSnapshot>;
export declare const StartLmsGoogleConsentRequest: MessageFns<StartLmsGoogleConsentRequest>;
export declare const ResolveLmsGoogleConsentReturnRequest: MessageFns<ResolveLmsGoogleConsentReturnRequest>;
export declare const LmsGoogleConsentReturn: MessageFns<LmsGoogleConsentReturn>;
export declare const LmsGoogleConsent: MessageFns<LmsGoogleConsent>;
export declare const CompleteLmsGoogleConsentRequest: MessageFns<CompleteLmsGoogleConsentRequest>;
export declare const SetLmsSyncEnabledRequest: MessageFns<SetLmsSyncEnabledRequest>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
    fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
export {};
