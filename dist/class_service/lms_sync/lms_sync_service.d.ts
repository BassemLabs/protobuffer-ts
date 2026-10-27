import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../../utils/object_id";
import { RequestContext } from "../../utils/request_context";
import { LmsProviderType } from "../lms_course";
export declare const protobufPackage = "class_service.lms_sync";
export declare enum LmsSyncEventKind {
    LMS_SYNC_EVENT_ASSIGNMENT = "LMS_SYNC_EVENT_ASSIGNMENT",
    LMS_SYNC_EVENT_SUBMISSION = "LMS_SYNC_EVENT_SUBMISSION",
    LMS_SYNC_EVENT_ACCESS = "LMS_SYNC_EVENT_ACCESS",
    LMS_SYNC_EVENT_COURSE = "LMS_SYNC_EVENT_COURSE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function lmsSyncEventKindFromJSON(object: any): LmsSyncEventKind;
export declare function lmsSyncEventKindToJSON(object: LmsSyncEventKind): string;
export declare function lmsSyncEventKindToNumber(object: LmsSyncEventKind): number;
/**
 * Internal request from ingress after provider signature and source verification.
 * Requires an organization-scoped system context matching organization_id; an
 * elevated human context is insufficient. School and connection come from the
 * trusted stream binding, never from an unverified payload.
 *
 * Events are reconciliation hints, not assignment/submission records to publish.
 * Accepted events atomically record a receipt and dirty affected initialized
 * scopes. The worker fetches authoritative data later; cold scopes load on demand.
 * A successful RPC does not mean refreshed coursework is already available.
 */
export interface AcceptLmsEventRequest {
    /** Internal system identity scoped to the school selected by verified ingress. */
    context: RequestContext | undefined;
    /** Bassem Labs school ID; must match the organization in context. */
    organization_id: ObjectId | undefined;
    /**
     * Authoritative Bassem Labs connection ID from the configured stream binding.
     * A disabled, replaced or mismatched connection yields accepted=false.
     */
    connection_id: ObjectId | undefined;
    /**
     * Must match the current event_generation. Unlike revision, this stays stable
     * across pause/resume and changes on credential replacement or disconnect.
     * Canvas stream configuration must not relabel an old event with a new value.
     */
    event_generation?: number | undefined;
    /** Provider whose current school connection is checked before accepting work. */
    provider?: LmsProviderType | undefined;
    /**
     * Trusted source identifier, e.g. the configured Canvas stream ID school-a-v3.
     * Together with event_id and connection scope, identifies duplicate deliveries.
     */
    source_id?: string | undefined;
    /** Stable provider event identity; retries must reuse it rather than mint a new ID. */
    event_id?: string | undefined;
    /**
     * Provider course ID, not a local course ObjectId. Empty is allowed only for
     * Canvas ACCESS/COURSE hints that invalidate scopes across the connection.
     */
    course_id?: string | undefined;
    /** Normalized change category used to choose safe reconciliation scope. */
    kind?: LmsSyncEventKind | undefined;
    /**
     * Provider assignment ID. With a SUBMISSION hint, may narrow affected scopes;
     * unknown or group facts conservatively refresh initialized course scopes.
     */
    assignment_id?: string | undefined;
    /** Provider submission ID, used to resolve affected saved student scopes when known. */
    submission_id?: string | undefined;
    /** Provider student ID, not a local student ObjectId; an optional targeting hint. */
    student_id?: string | undefined;
    /** Gateway reception time, not the provider's update timestamp or event ordering. */
    received_at: Date | undefined;
}
export interface LmsSyncReceipt {
    /** True includes deduplicated redelivery; false means the event is no longer applicable. */
    accepted?: boolean | undefined;
    /** True when the receipt already exists; no duplicate reconciliation is enqueued. */
    duplicate?: boolean | undefined;
}
/**
 * Shared by RequestLmsRefresh (enqueue) and GetLmsSyncStatus (read only).
 * Both authorize the original caller against current local class/student access.
 * Exactly one of course_id or homeroom_id is required.
 * All IDs here are Bassem Labs IDs, unlike the provider IDs in event requests.
 *
 * Example: course_id plus student_id selects that student's connected class.
 * Teachers may omit student_id for the shared catalog; parents/students must
 * select a currently linked child/themselves. Repeated refreshes coalesce durable
 * work and do not bypass a provider cooldown. Results describe asynchronous work.
 */
export interface LmsRefreshRequest {
    /** Original authenticated caller; do not replace with a system/root context. */
    context: RequestContext | undefined;
    /** Local subject-class ID; mutually exclusive with homeroom_id. */
    course_id?: ObjectId | undefined;
    /** Local homeroom ID; mutually exclusive with course_id. */
    homeroom_id?: ObjectId | undefined;
    /**
     * Local student whose enrollment and current caller access are checked.
     * Omit only for a teacher catalog request, not to request all student submissions.
     */
    student_id?: ObjectId | undefined;
}
export interface LmsSyncStatus {
    pending?: boolean | undefined;
    last_verified_at?: Date | undefined;
    last_error?: string | undefined;
}
/**
 * Internal request after Google OIDC identity and Pub/Sub envelope verification.
 * Requires a global system context because the school is initially unknown.
 * Class Service resolves registration_id in its durable registry to obtain the
 * school, connection revision and feed; callers cannot supply those authorities.
 *
 * The subscription, provider course and event kind must match the stored feed.
 * Retired/expired registrations or obsolete connection revisions are not accepted.
 * As with AcceptLmsEvent, acceptance records durable work, not refreshed content.
 */
export interface AcceptClassroomPushRequest {
    /** Trusted ingress global system identity, with no school or human actor attached. */
    context: RequestContext | undefined;
    /**
     * Full resource name, e.g. projects/school-project/subscriptions/classroom-push.
     * Must match the configured verified subscription; a short name is insufficient.
     */
    subscription?: string | undefined;
    /**
     * Classroom registration ID carried in Pub/Sub attributes, not the subscription ID.
     * Looked up server-side; unknown IDs yield accepted=false rather than create a binding.
     */
    registration_id?: string | undefined;
    /** Pub/Sub messageId reused across redeliveries for durable deduplication. */
    event_id?: string | undefined;
    /** Google course ID; must match the course owned by registration_id. */
    course_id?: string | undefined;
    /**
     * Assignment/submission changes require a course_work feed; access changes
     * require course_roster. The gateway normalizes Google's event into this category.
     */
    kind?: LmsSyncEventKind | undefined;
    /** Google courseWork ID, when supplied by the verified notification. */
    assignment_id?: string | undefined;
    /** Google studentSubmission ID; unresolved targeting falls back to course scopes. */
    submission_id?: string | undefined;
    /** Google user ID, when available; never a Bassem Labs student ObjectId. */
    student_id?: string | undefined;
    /** Gateway reception time; does not establish provider update ordering. */
    received_at: Date | undefined;
}
export declare const AcceptLmsEventRequest: MessageFns<AcceptLmsEventRequest>;
export declare const LmsSyncReceipt: MessageFns<LmsSyncReceipt>;
export declare const LmsRefreshRequest: MessageFns<LmsRefreshRequest>;
export declare const LmsSyncStatus: MessageFns<LmsSyncStatus>;
export declare const AcceptClassroomPushRequest: MessageFns<AcceptClassroomPushRequest>;
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
