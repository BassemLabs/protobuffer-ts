import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { GuardianSignatureSessionMetadata, ParentStudentReportSummary, ReportEntry, ReportEntryCheckBox, ReportEntryLearningSkill, ReportEntryMedian, ReportEntrySection, ReportEntryView } from "./report_entry";
import { ReportType } from "./semester";
export declare const protobufPackage = "class_service.report_entry_service";
export interface GetCourseReportEntriesRequest {
    context: RequestContext | undefined;
    course_id: ObjectId | undefined;
}
export interface GetHomeroomReportEntriesRequest {
    context: RequestContext | undefined;
    homeroom_id: ObjectId | undefined;
}
export interface GetStudentReportEntriesRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    semester_id: ObjectId | undefined;
}
export interface GetStudentReportEntriesForCourseRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    course_id: ObjectId | undefined;
}
export interface GetStudentReportEntriesForHomeroomRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    homeroom_id: ObjectId | undefined;
}
export interface GetStudentPublishedReportEntriesRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
}
export interface GetParentPublishedReportSummariesRequest {
    context: RequestContext | undefined;
    school_year_id?: ObjectId | undefined;
}
export interface GetParentPublishedReportSummariesResponse {
    summaries: ParentStudentReportSummary[];
}
export interface GetReportEntriesQueueRequest {
    context: RequestContext | undefined;
    teacher_id?: ObjectId | undefined;
    student_id?: ObjectId | undefined;
    school_year_id?: ObjectId | undefined;
    semester_id?: ObjectId | undefined;
}
export interface GetReportEntryRequest {
    context: RequestContext | undefined;
    report_entry_id: ObjectId | undefined;
}
export interface GetReportEntryResponse {
    report_entry: ReportEntry | undefined;
}
export interface GetReportEntryMedianRequest {
    context: RequestContext | undefined;
    report_entry_id: ObjectId | undefined;
}
export interface GetReportEntryMedianResponse {
    report_entry_median: ReportEntryMedian | undefined;
}
export interface GenerateReportEntrySmartCommentRequest {
    context: RequestContext | undefined;
    report_entry_id: ObjectId | undefined;
    optional_prompt?: string | undefined;
}
export interface GenerateReportEntrySmartCommentResponse {
    comment: string;
}
export interface UpdateReportEntryRequest {
    context: RequestContext | undefined;
    /** Business key fields (identify which ReportEntry to update) */
    student_id: ObjectId | undefined;
    course_id?: ObjectId | undefined;
    homeroom_id?: ObjectId | undefined;
    report_type: ReportType;
    /** Updatable fields */
    comment?: string | undefined;
    checkboxes: ReportEntryCheckBox[];
    sections: ReportEntrySection[];
    learning_skills: ReportEntryLearningSkill[];
    credit_earned?: boolean | undefined;
}
export interface ReportEntryViewResponse {
    report_entry: ReportEntryView | undefined;
}
export interface GetReportEntryViewsResponse {
    report_entries: ReportEntryView[];
}
export interface GetReportEntriesResponse {
    report_entries: ReportEntry[];
}
export interface RequestChangesReportEntryRequest {
    context: RequestContext | undefined;
    report_entry_id: ObjectId | undefined;
    requested_changes: string;
}
export interface ApproveReportEntryRequest {
    context: RequestContext | undefined;
    report_entry_id: ObjectId | undefined;
}
export interface PublishReportEntryRequest {
    context: RequestContext | undefined;
    report_entry_id: ObjectId | undefined;
}
export interface UnpublishReportEntryRequest {
    context: RequestContext | undefined;
    report_entry_id: ObjectId | undefined;
    requested_changes: string;
}
export interface GuardianSignReportCardsRequest {
    context: RequestContext | undefined;
    report_entry_ids: ObjectId[];
    session_metadata?: GuardianSignatureSessionMetadata | undefined;
}
export declare const GetCourseReportEntriesRequest: MessageFns<GetCourseReportEntriesRequest>;
export declare const GetHomeroomReportEntriesRequest: MessageFns<GetHomeroomReportEntriesRequest>;
export declare const GetStudentReportEntriesRequest: MessageFns<GetStudentReportEntriesRequest>;
export declare const GetStudentReportEntriesForCourseRequest: MessageFns<GetStudentReportEntriesForCourseRequest>;
export declare const GetStudentReportEntriesForHomeroomRequest: MessageFns<GetStudentReportEntriesForHomeroomRequest>;
export declare const GetStudentPublishedReportEntriesRequest: MessageFns<GetStudentPublishedReportEntriesRequest>;
export declare const GetParentPublishedReportSummariesRequest: MessageFns<GetParentPublishedReportSummariesRequest>;
export declare const GetParentPublishedReportSummariesResponse: MessageFns<GetParentPublishedReportSummariesResponse>;
export declare const GetReportEntriesQueueRequest: MessageFns<GetReportEntriesQueueRequest>;
export declare const GetReportEntryRequest: MessageFns<GetReportEntryRequest>;
export declare const GetReportEntryResponse: MessageFns<GetReportEntryResponse>;
export declare const GetReportEntryMedianRequest: MessageFns<GetReportEntryMedianRequest>;
export declare const GetReportEntryMedianResponse: MessageFns<GetReportEntryMedianResponse>;
export declare const GenerateReportEntrySmartCommentRequest: MessageFns<GenerateReportEntrySmartCommentRequest>;
export declare const GenerateReportEntrySmartCommentResponse: MessageFns<GenerateReportEntrySmartCommentResponse>;
export declare const UpdateReportEntryRequest: MessageFns<UpdateReportEntryRequest>;
export declare const ReportEntryViewResponse: MessageFns<ReportEntryViewResponse>;
export declare const GetReportEntryViewsResponse: MessageFns<GetReportEntryViewsResponse>;
export declare const GetReportEntriesResponse: MessageFns<GetReportEntriesResponse>;
export declare const RequestChangesReportEntryRequest: MessageFns<RequestChangesReportEntryRequest>;
export declare const ApproveReportEntryRequest: MessageFns<ApproveReportEntryRequest>;
export declare const PublishReportEntryRequest: MessageFns<PublishReportEntryRequest>;
export declare const UnpublishReportEntryRequest: MessageFns<UnpublishReportEntryRequest>;
export declare const GuardianSignReportCardsRequest: MessageFns<GuardianSignReportCardsRequest>;
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
