import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { StaffPermission } from "../user_service/user_role";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { BassemLabsStaff, StaffStatus } from "./bassem_labs_staff";
export declare const protobufPackage = "organization_service";
export declare enum StaffStoreReportProvider {
    GOOGLE_PLAY = "GOOGLE_PLAY",
    APP_STORE_CONNECT = "APP_STORE_CONNECT",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function staffStoreReportProviderFromJSON(object: any): StaffStoreReportProvider;
export declare function staffStoreReportProviderToJSON(object: StaffStoreReportProvider): string;
export declare function staffStoreReportProviderToNumber(object: StaffStoreReportProvider): number;
export declare enum StaffStoreDownloadMetric {
    GOOGLE_INSTALL_EVENTS = "GOOGLE_INSTALL_EVENTS",
    APPLE_FIRST_TIME_UNITS = "APPLE_FIRST_TIME_UNITS",
    APPLE_REDOWNLOADS_RESTORES = "APPLE_REDOWNLOADS_RESTORES",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function staffStoreDownloadMetricFromJSON(object: any): StaffStoreDownloadMetric;
export declare function staffStoreDownloadMetricToJSON(object: StaffStoreDownloadMetric): string;
export declare function staffStoreDownloadMetricToNumber(object: StaffStoreDownloadMetric): number;
export declare enum StaffStoreDownloadStatus {
    STORE_DOWNLOAD_EMPTY = "STORE_DOWNLOAD_EMPTY",
    STORE_DOWNLOAD_READY = "STORE_DOWNLOAD_READY",
    STORE_DOWNLOAD_REFRESHING = "STORE_DOWNLOAD_REFRESHING",
    STORE_DOWNLOAD_FAILED = "STORE_DOWNLOAD_FAILED",
    STORE_DOWNLOAD_PARTIAL = "STORE_DOWNLOAD_PARTIAL",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function staffStoreDownloadStatusFromJSON(object: any): StaffStoreDownloadStatus;
export declare function staffStoreDownloadStatusToJSON(object: StaffStoreDownloadStatus): string;
export declare function staffStoreDownloadStatusToNumber(object: StaffStoreDownloadStatus): number;
export interface CreateUserRequest {
    /** Context of the request */
    context: RequestContext | undefined;
    /** Username */
    username?: string | undefined;
    /** First name */
    first_name?: string | undefined;
    /** Last name */
    last_name?: string | undefined;
    /** Gender */
    gender?: string | undefined;
    /** Personal email */
    personal_email?: string | undefined;
    /** Phone number */
    phone_number?: string | undefined;
    /** Date of birth */
    date_of_birth: Date | undefined;
    /** User roles */
    roles: StaffPermission[];
}
export interface UpdateProfileRequest {
    /** Context of the request */
    context: RequestContext | undefined;
    /** ID of the user to update */
    id: ObjectId | undefined;
    /** First name */
    first_name?: string | undefined;
    /** Last name */
    last_name?: string | undefined;
    /** Gender */
    gender?: string | undefined;
    /** Personal email */
    personal_email?: string | undefined;
    /** Phone number */
    phone_number?: string | undefined;
    /** Date of birth */
    date_of_birth?: Date | undefined;
}
export interface UpdateStatusRequest {
    /** Context of the request */
    context: RequestContext | undefined;
    /** ID of the user */
    id: ObjectId | undefined;
    /** New status */
    status?: StaffStatus | undefined;
}
export interface GetUserByIdRequest {
    /** Context of the request */
    context: RequestContext | undefined;
    /** ID of the user to fetch */
    id: ObjectId | undefined;
}
export interface GetUserByEmailRequest {
    /** Context of the request */
    context: RequestContext | undefined;
    /** Email of the user to fetch */
    email?: string | undefined;
}
export interface GetUsersRequest {
    /** Context of the request */
    context: RequestContext | undefined;
}
export interface GetUsersResponse {
    /** List of BassemLabsStaff users */
    users: BassemLabsStaff[];
}
export interface StaffStoreReportingRequest {
    context: RequestContext | undefined;
}
export interface StaffStoreReportingState {
    google_oauth_configured?: boolean | undefined;
    /** Present only for a usable saved Google connection. */
    google_account_email?: string | undefined;
    apple_configured?: boolean | undefined;
}
export interface StaffGooglePlayConsent {
    authorization_url?: string | undefined;
}
export interface CompleteStaffGooglePlayConsentRequest {
    context: RequestContext | undefined;
    code?: string | undefined;
    state?: string | undefined;
}
/** Public staff summary projection, independent of the User Service response. */
export interface StaffOrganizationUsage {
    organization_name?: string | undefined;
    login_id?: string | undefined;
    account_count?: number | undefined;
    active_7d_count?: number | undefined;
    active_30d_count?: number | undefined;
    parent_count?: number | undefined;
    linked_parent_count?: number | undefined;
    observed_parent_count?: number | undefined;
    active_parent_7d_count?: number | undefined;
    active_parent_30d_count?: number | undefined;
}
export interface StaffUsageSummary {
    as_of: Date | undefined;
    organizations: StaffOrganizationUsage[];
}
export interface StaffStoreReportCoverage {
    /** Inclusive provider calendar dates, ISO 8601 YYYY-MM-DD. */
    start_date?: string | undefined;
    end_date?: string | undefined;
}
export interface StaffStoreDownloadTotal {
    metric?: StaffStoreDownloadMetric | undefined;
    /** Sales and Trends units retain signed adjustments/refunds. */
    total?: number | undefined;
    coverage: StaffStoreReportCoverage[];
}
export interface StaffStoreDownloadProvider {
    provider?: StaffStoreReportProvider | undefined;
    status?: StaffStoreDownloadStatus | undefined;
    last_attempt_at?: Date | undefined;
    last_success_at?: Date | undefined;
    error_message?: string | undefined;
    metrics: StaffStoreDownloadTotal[];
}
export interface StaffStoreDownloadSummary {
    providers: StaffStoreDownloadProvider[];
}
export interface RefreshStaffStoreDownloadReportsRequest {
    context: RequestContext | undefined;
    provider?: StaffStoreReportProvider | undefined;
}
export declare const CreateUserRequest: MessageFns<CreateUserRequest>;
export declare const UpdateProfileRequest: MessageFns<UpdateProfileRequest>;
export declare const UpdateStatusRequest: MessageFns<UpdateStatusRequest>;
export declare const GetUserByIdRequest: MessageFns<GetUserByIdRequest>;
export declare const GetUserByEmailRequest: MessageFns<GetUserByEmailRequest>;
export declare const GetUsersRequest: MessageFns<GetUsersRequest>;
export declare const GetUsersResponse: MessageFns<GetUsersResponse>;
export declare const StaffStoreReportingRequest: MessageFns<StaffStoreReportingRequest>;
export declare const StaffStoreReportingState: MessageFns<StaffStoreReportingState>;
export declare const StaffGooglePlayConsent: MessageFns<StaffGooglePlayConsent>;
export declare const CompleteStaffGooglePlayConsentRequest: MessageFns<CompleteStaffGooglePlayConsentRequest>;
export declare const StaffOrganizationUsage: MessageFns<StaffOrganizationUsage>;
export declare const StaffUsageSummary: MessageFns<StaffUsageSummary>;
export declare const StaffStoreReportCoverage: MessageFns<StaffStoreReportCoverage>;
export declare const StaffStoreDownloadTotal: MessageFns<StaffStoreDownloadTotal>;
export declare const StaffStoreDownloadProvider: MessageFns<StaffStoreDownloadProvider>;
export declare const StaffStoreDownloadSummary: MessageFns<StaffStoreDownloadSummary>;
export declare const RefreshStaffStoreDownloadReportsRequest: MessageFns<RefreshStaffStoreDownloadReportsRequest>;
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
