import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { DataExportColumnDefinition, DataExportDataset, DataExportSelection } from "./data_export";
export declare const protobufPackage = "user_service";
export declare enum DataExportRequestStatus {
    DATA_EXPORT_REQUEST_STATUS_UNSPECIFIED = "DATA_EXPORT_REQUEST_STATUS_UNSPECIFIED",
    DATA_EXPORT_REQUEST_STATUS_PENDING = "DATA_EXPORT_REQUEST_STATUS_PENDING",
    DATA_EXPORT_REQUEST_STATUS_APPROVED = "DATA_EXPORT_REQUEST_STATUS_APPROVED",
    DATA_EXPORT_REQUEST_STATUS_REJECTED = "DATA_EXPORT_REQUEST_STATUS_REJECTED",
    DATA_EXPORT_REQUEST_STATUS_CANCELLED = "DATA_EXPORT_REQUEST_STATUS_CANCELLED",
    DATA_EXPORT_REQUEST_STATUS_EXPIRED = "DATA_EXPORT_REQUEST_STATUS_EXPIRED",
    DATA_EXPORT_REQUEST_STATUS_USED = "DATA_EXPORT_REQUEST_STATUS_USED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function dataExportRequestStatusFromJSON(object: any): DataExportRequestStatus;
export declare function dataExportRequestStatusToJSON(object: DataExportRequestStatus): string;
export declare function dataExportRequestStatusToNumber(object: DataExportRequestStatus): number;
export declare enum DataExportRequestView {
    DATA_EXPORT_REQUEST_VIEW_UNSPECIFIED = "DATA_EXPORT_REQUEST_VIEW_UNSPECIFIED",
    DATA_EXPORT_REQUEST_VIEW_MINE = "DATA_EXPORT_REQUEST_VIEW_MINE",
    DATA_EXPORT_REQUEST_VIEW_ASSIGNED = "DATA_EXPORT_REQUEST_VIEW_ASSIGNED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function dataExportRequestViewFromJSON(object: any): DataExportRequestView;
export declare function dataExportRequestViewToJSON(object: DataExportRequestView): string;
export declare function dataExportRequestViewToNumber(object: DataExportRequestView): number;
export declare enum DataExportRequestDecision {
    DATA_EXPORT_REQUEST_DECISION_UNSPECIFIED = "DATA_EXPORT_REQUEST_DECISION_UNSPECIFIED",
    DATA_EXPORT_REQUEST_DECISION_APPROVE = "DATA_EXPORT_REQUEST_DECISION_APPROVE",
    DATA_EXPORT_REQUEST_DECISION_REJECT = "DATA_EXPORT_REQUEST_DECISION_REJECT",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function dataExportRequestDecisionFromJSON(object: any): DataExportRequestDecision;
export declare function dataExportRequestDecisionToJSON(object: DataExportRequestDecision): string;
export declare function dataExportRequestDecisionToNumber(object: DataExportRequestDecision): number;
export interface DataExportReviewer {
    id: ObjectId | undefined;
    name?: string | undefined;
    email?: string | undefined;
}
export interface ListDataExportReviewersRequest {
    context: RequestContext | undefined;
}
export interface ListDataExportReviewersResponse {
    reviewers: DataExportReviewer[];
}
/** Safe list metadata. No selected filter values, purpose, or sample rows. */
export interface DataExportRequestSummary {
    id: ObjectId | undefined;
    template_name?: string | undefined;
    dataset?: DataExportDataset | undefined;
    status?: DataExportRequestStatus | undefined;
    requester: DataExportReviewer | undefined;
    matching_row_count?: number | undefined;
    column_count?: number | undefined;
    created_at: Date | undefined;
    expires_at: Date | undefined;
    decided_at?: Date | undefined;
    used_at?: Date | undefined;
    decided_by?: DataExportReviewer | undefined;
}
export interface DataExportRequestDetail {
    summary: DataExportRequestSummary | undefined;
    selection: DataExportSelection | undefined;
    columns: DataExportColumnDefinition[];
    scope_summary: string[];
    purpose?: string | undefined;
    intended_use?: string | undefined;
    reviewers: DataExportReviewer[];
    decision_note?: string | undefined;
    template_id: ObjectId | undefined;
    template_updated_at: Date | undefined;
}
export interface CreateDataExportRequestRequest {
    context: RequestContext | undefined;
    template_id: ObjectId | undefined;
    reviewer_ids: ObjectId[];
    purpose?: string | undefined;
    intended_use?: string | undefined;
    /** Client-generated unique key retained across retries of the same submission. */
    submission_key?: string | undefined;
    /** Reject concurrent template edits instead of changing the scope being requested. */
    template_updated_at: Date | undefined;
}
export interface ListDataExportRequestsRequest {
    context: RequestContext | undefined;
    view?: DataExportRequestView | undefined;
    page?: number | undefined;
    page_size?: number | undefined;
}
export interface ListDataExportRequestsResponse {
    requests: DataExportRequestSummary[];
    total?: number | undefined;
}
export interface GetDataExportRequestRequest {
    context: RequestContext | undefined;
    request_id: ObjectId | undefined;
}
export interface DecideDataExportRequestRequest {
    context: RequestContext | undefined;
    request_id: ObjectId | undefined;
    decision?: DataExportRequestDecision | undefined;
    note?: string | undefined;
}
/** Internal grant. The HTTP API must never return this attempt ID. */
export interface ClaimDataExportDownloadResponse {
    attempt_id?: string | undefined;
    selection: DataExportSelection | undefined;
    columns: DataExportColumnDefinition[];
    matching_row_count?: number | undefined;
    membership_fingerprint?: string | undefined;
}
export interface GetApprovedDataExportPageRequest {
    context: RequestContext | undefined;
    request_id: ObjectId | undefined;
    attempt_id?: string | undefined;
    after_cursor?: string | undefined;
}
export declare const DataExportReviewer: MessageFns<DataExportReviewer>;
export declare const ListDataExportReviewersRequest: MessageFns<ListDataExportReviewersRequest>;
export declare const ListDataExportReviewersResponse: MessageFns<ListDataExportReviewersResponse>;
export declare const DataExportRequestSummary: MessageFns<DataExportRequestSummary>;
export declare const DataExportRequestDetail: MessageFns<DataExportRequestDetail>;
export declare const CreateDataExportRequestRequest: MessageFns<CreateDataExportRequestRequest>;
export declare const ListDataExportRequestsRequest: MessageFns<ListDataExportRequestsRequest>;
export declare const ListDataExportRequestsResponse: MessageFns<ListDataExportRequestsResponse>;
export declare const GetDataExportRequestRequest: MessageFns<GetDataExportRequestRequest>;
export declare const DecideDataExportRequestRequest: MessageFns<DecideDataExportRequestRequest>;
export declare const ClaimDataExportDownloadResponse: MessageFns<ClaimDataExportDownloadResponse>;
export declare const GetApprovedDataExportPageRequest: MessageFns<GetApprovedDataExportPageRequest>;
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
