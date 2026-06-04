import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { ClassRef } from "./class_ref";
import { GuardianSignatureSessionMetadata, ParentStudentReportSummary, ReportEntry, ReportEntryCheckBox, ReportEntryLearningSkill, ReportEntryMedian, ReportEntrySection, ReportEntryView } from "./report_entry";
import { ReportType } from "./semester";
export declare const protobufPackage = "class_service.report_entry_service";
export declare enum TeacherReportCardHomepageUrgency {
    TEACHER_REPORT_CARD_HOMEPAGE_URGENCY_NEUTRAL = "TEACHER_REPORT_CARD_HOMEPAGE_URGENCY_NEUTRAL",
    TEACHER_REPORT_CARD_HOMEPAGE_URGENCY_YELLOW = "TEACHER_REPORT_CARD_HOMEPAGE_URGENCY_YELLOW",
    TEACHER_REPORT_CARD_HOMEPAGE_URGENCY_RED = "TEACHER_REPORT_CARD_HOMEPAGE_URGENCY_RED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function teacherReportCardHomepageUrgencyFromJSON(object: any): TeacherReportCardHomepageUrgency;
export declare function teacherReportCardHomepageUrgencyToJSON(object: TeacherReportCardHomepageUrgency): string;
export declare function teacherReportCardHomepageUrgencyToNumber(object: TeacherReportCardHomepageUrgency): number;
export declare enum ReportPublishClassType {
    /** REPORT_PUBLISH_CLASS_TYPE_COURSE - Standalone subject/course class. */
    REPORT_PUBLISH_CLASS_TYPE_COURSE = "REPORT_PUBLISH_CLASS_TYPE_COURSE",
    /** REPORT_PUBLISH_CLASS_TYPE_HOMEROOM - Homeroom aggregate class. */
    REPORT_PUBLISH_CLASS_TYPE_HOMEROOM = "REPORT_PUBLISH_CLASS_TYPE_HOMEROOM",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function reportPublishClassTypeFromJSON(object: any): ReportPublishClassType;
export declare function reportPublishClassTypeToJSON(object: ReportPublishClassType): string;
export declare function reportPublishClassTypeToNumber(object: ReportPublishClassType): number;
export declare enum SmartCommentStructure {
    SMART_COMMENT_STRUCTURE_CURRICULUM_FIRST = "SMART_COMMENT_STRUCTURE_CURRICULUM_FIRST",
    SMART_COMMENT_STRUCTURE_STUDENT_FIRST = "SMART_COMMENT_STRUCTURE_STUDENT_FIRST",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function smartCommentStructureFromJSON(object: any): SmartCommentStructure;
export declare function smartCommentStructureToJSON(object: SmartCommentStructure): string;
export declare function smartCommentStructureToNumber(object: SmartCommentStructure): number;
export declare enum SmartCommentTone {
    SMART_COMMENT_TONE_NORMAL = "SMART_COMMENT_TONE_NORMAL",
    SMART_COMMENT_TONE_WARM = "SMART_COMMENT_TONE_WARM",
    SMART_COMMENT_TONE_STRONG = "SMART_COMMENT_TONE_STRONG",
    SMART_COMMENT_TONE_GROWTH = "SMART_COMMENT_TONE_GROWTH",
    SMART_COMMENT_TONE_DIRECT = "SMART_COMMENT_TONE_DIRECT",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function smartCommentToneFromJSON(object: any): SmartCommentTone;
export declare function smartCommentToneToJSON(object: SmartCommentTone): string;
export declare function smartCommentToneToNumber(object: SmartCommentTone): number;
export declare enum SmartCommentNextStep {
    SMART_COMMENT_NEXT_STEP_SPECIFIC_PRACTICE = "SMART_COMMENT_NEXT_STEP_SPECIFIC_PRACTICE",
    SMART_COMMENT_NEXT_STEP_GENTLE = "SMART_COMMENT_NEXT_STEP_GENTLE",
    SMART_COMMENT_NEXT_STEP_DIRECT_CONCERN = "SMART_COMMENT_NEXT_STEP_DIRECT_CONCERN",
    SMART_COMMENT_NEXT_STEP_NONE = "SMART_COMMENT_NEXT_STEP_NONE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function smartCommentNextStepFromJSON(object: any): SmartCommentNextStep;
export declare function smartCommentNextStepToJSON(object: SmartCommentNextStep): string;
export declare function smartCommentNextStepToNumber(object: SmartCommentNextStep): number;
export declare enum SmartCommentLength {
    SMART_COMMENT_LENGTH_SHORT = "SMART_COMMENT_LENGTH_SHORT",
    SMART_COMMENT_LENGTH_STANDARD = "SMART_COMMENT_LENGTH_STANDARD",
    SMART_COMMENT_LENGTH_FULL = "SMART_COMMENT_LENGTH_FULL",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function smartCommentLengthFromJSON(object: any): SmartCommentLength;
export declare function smartCommentLengthToJSON(object: SmartCommentLength): string;
export declare function smartCommentLengthToNumber(object: SmartCommentLength): number;
export interface GetCourseReportEntriesRequest {
    context: RequestContext | undefined;
    course_id: ObjectId | undefined;
}
export interface SendOwnerTeacherReportCardNudgeRequest {
    context: RequestContext | undefined;
    owner_teacher_id: ObjectId | undefined;
    class_id: ObjectId | undefined;
    class_type?: ReportPublishClassType | undefined;
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
    /**
     * Optional class scope filter; when provided, results are restricted to
     * that class only. If omitted, behavior remains unchanged.
     */
    class_ref?: ClassRef | undefined;
}
export interface GetParentPublishedReportSummariesRequest {
    context: RequestContext | undefined;
    school_year_id?: ObjectId | undefined;
}
export interface GetParentPublishedReportSummariesResponse {
    summaries: ParentStudentReportSummary[];
}
export interface GetPrincipalDashboardTeacherActivitySummaryRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
    semester_id?: ObjectId | undefined;
    report_type?: ReportType | undefined;
}
export interface PrincipalDashboardTeacherPendingClass {
    class_type?: ReportPublishClassType | undefined;
    class_id: ObjectId | undefined;
    class_name?: string | undefined;
    course_code?: string | undefined;
    grades: string[];
}
export interface PrincipalDashboardTeacherActivityRow {
    teacher_id: ObjectId | undefined;
    teacher_name?: string | undefined;
    markbook_complete?: boolean | undefined;
    reports_submitted?: boolean | undefined;
    pending_markbook_classes: PrincipalDashboardTeacherPendingClass[];
    pending_report_classes: PrincipalDashboardTeacherPendingClass[];
}
export interface GetPrincipalDashboardTeacherActivitySummaryResponse {
    teachers: PrincipalDashboardTeacherActivityRow[];
}
export interface GetTeacherReportCardHomepageRequest {
    context: RequestContext | undefined;
}
export interface TeacherReportCardHomepageRow {
    class_type?: ReportPublishClassType | undefined;
    class_id: ObjectId | undefined;
    class_name?: string | undefined;
    course_code?: string | undefined;
    grades: string[];
    semester_id: ObjectId | undefined;
    semester_name?: string | undefined;
    report_type?: ReportType | undefined;
    due_date?: Date | undefined;
    distribution_date?: Date | undefined;
    counters: ReportStatusCounters | undefined;
    total_expected?: number | undefined;
    progress_completed?: number | undefined;
    urgency?: TeacherReportCardHomepageUrgency | undefined;
    /** Present for homeroom rows only: counters for holistic homeroom entries. */
    holistic_counters?: ReportStatusCounters | undefined;
    /** Present for homeroom rows only: merged counters for linked subject-course entries. */
    subject_counters?: ReportStatusCounters | undefined;
}
export interface GetTeacherReportCardHomepageResponse {
    pending: TeacherReportCardHomepageRow[];
    completed: TeacherReportCardHomepageRow[];
    has_late_report_cards?: boolean | undefined;
}
export interface GetReportEntriesQueueRequest {
    context: RequestContext | undefined;
    teacher_id?: ObjectId | undefined;
    student_id?: ObjectId | undefined;
    school_year_id?: ObjectId | undefined;
    semester_id?: ObjectId | undefined;
}
export interface ReportStatusCounters {
    /** Students with no persisted entry or a NOT_FILLED effective state. */
    not_filled?: number | undefined;
    /** Students with FILLED state awaiting approval. */
    filled?: number | undefined;
    /** Students with CHANGES_REQUESTED state. */
    changes_requested?: number | undefined;
    /** Students with APPROVED state. */
    approved?: number | undefined;
    /** Students with already PUBLISHED state. */
    published?: number | undefined;
}
export interface ReportPublishQueueClass {
    /** Class scope type (course or homeroom). */
    class_type?: ReportPublishClassType | undefined;
    /** Class identifier for this row. */
    class_id: ObjectId | undefined;
    /** Class display name. */
    class_name?: string | undefined;
    /** Status counters across expected students. */
    counters: ReportStatusCounters | undefined;
    /** Number of expected students in scope. */
    total_expected?: number | undefined;
    /** True only when scope is ready for atomic publish. */
    can_publish?: boolean | undefined;
    /** Human-readable reason when can_publish is false. */
    blocking_reason?: string | undefined;
    /** Semester display name for this class scope. */
    semester_name?: string | undefined;
    /** Course code when this row represents a standalone/subject course. */
    course_code?: string | undefined;
    /** Homeroom grades when this row represents a homeroom scope. */
    grades: string[];
    /** Owner teacher display name for this class scope. */
    owner_teacher_name?: string | undefined;
    /** Owner teacher identifier for this class scope. */
    owner_teacher_id?: ObjectId | undefined;
}
export interface GetReportPublishQueueClassesRequest {
    context: RequestContext | undefined;
    /** Queue is always computed for exactly one report type. */
    report_type?: ReportType | undefined;
    teacher_id?: ObjectId | undefined;
    student_id?: ObjectId | undefined;
    school_year_id?: ObjectId | undefined;
    semester_id?: ObjectId | undefined;
}
export interface GetReportPublishQueueClassesResponse {
    classes: ReportPublishQueueClass[];
}
export interface GetHomeroomPublishBreakdownRequest {
    context: RequestContext | undefined;
    homeroom_id: ObjectId | undefined;
    report_type?: ReportType | undefined;
}
export interface GetHomeroomPublishBreakdownResponse {
    /** Overall homeroom publish summary (holistic + subjects merged). */
    overall: ReportPublishQueueClass | undefined;
    /** Counters for homeroom holistic entries only. */
    holistic_counters: ReportStatusCounters | undefined;
    /** Expected student count for holistic entries only. */
    holistic_total_expected?: number | undefined;
    /** Per-subject counters for linked courses under the homeroom. */
    subjects: ReportPublishQueueClass[];
    /** Mirrors overall.can_publish. */
    can_publish?: boolean | undefined;
    /** Mirrors overall.blocking_reason. */
    blocking_reason?: string | undefined;
}
export interface GetClassReportEntriesByTypeRequest {
    context: RequestContext | undefined;
    /** Exactly one report type per request. */
    report_type?: ReportType | undefined;
    /** Exactly one of course_id or homeroom_id must be set. */
    course_id?: ObjectId | undefined;
    /** Exactly one of course_id or homeroom_id must be set. */
    homeroom_id?: ObjectId | undefined;
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
export interface GenerateReportEntrySmartCommentInput {
    course_learning_summary?: string | undefined;
    teacher_notes?: string | undefined;
    structure?: SmartCommentStructure | undefined;
    tone?: SmartCommentTone | undefined;
    next_step?: SmartCommentNextStep | undefined;
    length?: SmartCommentLength | undefined;
}
export interface GenerateReportEntrySmartCommentRequest {
    context: RequestContext | undefined;
    report_entry_id: ObjectId | undefined;
    optional_prompt?: string | undefined;
    smart_comment_input?: GenerateReportEntrySmartCommentInput | undefined;
}
export interface GenerateReportEntrySmartCommentResponse {
    comment?: string | undefined;
}
export interface UpdateReportEntryRequest {
    context: RequestContext | undefined;
    /** Business key fields (identify which ReportEntry to update) */
    student_id: ObjectId | undefined;
    course_id?: ObjectId | undefined;
    homeroom_id?: ObjectId | undefined;
    report_type?: ReportType | undefined;
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
    requested_changes?: string | undefined;
}
export interface ApproveReportEntryRequest {
    context: RequestContext | undefined;
    report_entry_id: ObjectId | undefined;
}
export interface PublishCourseReportTypeRequest {
    context: RequestContext | undefined;
    /** Must reference a standalone course (not linked to a homeroom). */
    course_id: ObjectId | undefined;
    /** Publish is atomic within this class/report_type scope. */
    report_type?: ReportType | undefined;
}
export interface PublishHomeroomReportTypeRequest {
    context: RequestContext | undefined;
    /** Homeroom publish includes holistic + linked subject entries. */
    homeroom_id: ObjectId | undefined;
    /** Publish is atomic within this class/report_type scope. */
    report_type?: ReportType | undefined;
}
export interface PublishClassReportTypeResponse {
    /** Fresh queue summary for the same scope after publish attempt. */
    class_summary: ReportPublishQueueClass | undefined;
    /** Number of entries transitioned APPROVED -> PUBLISHED. */
    updated_entries?: number | undefined;
    /** Number of entries that were already PUBLISHED. */
    already_published_entries?: number | undefined;
}
export interface UnpublishReportEntryRequest {
    context: RequestContext | undefined;
    report_entry_id: ObjectId | undefined;
    requested_changes?: string | undefined;
}
export interface GuardianSignReportCardsRequest {
    context: RequestContext | undefined;
    report_entry_ids: ObjectId[];
    session_metadata?: GuardianSignatureSessionMetadata | undefined;
}
export interface SendOwnerTeacherReportCardRemindersForOrganizationRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
}
export declare const GetCourseReportEntriesRequest: MessageFns<GetCourseReportEntriesRequest>;
export declare const SendOwnerTeacherReportCardNudgeRequest: MessageFns<SendOwnerTeacherReportCardNudgeRequest>;
export declare const GetHomeroomReportEntriesRequest: MessageFns<GetHomeroomReportEntriesRequest>;
export declare const GetStudentReportEntriesRequest: MessageFns<GetStudentReportEntriesRequest>;
export declare const GetStudentReportEntriesForCourseRequest: MessageFns<GetStudentReportEntriesForCourseRequest>;
export declare const GetStudentReportEntriesForHomeroomRequest: MessageFns<GetStudentReportEntriesForHomeroomRequest>;
export declare const GetStudentPublishedReportEntriesRequest: MessageFns<GetStudentPublishedReportEntriesRequest>;
export declare const GetParentPublishedReportSummariesRequest: MessageFns<GetParentPublishedReportSummariesRequest>;
export declare const GetParentPublishedReportSummariesResponse: MessageFns<GetParentPublishedReportSummariesResponse>;
export declare const GetPrincipalDashboardTeacherActivitySummaryRequest: MessageFns<GetPrincipalDashboardTeacherActivitySummaryRequest>;
export declare const PrincipalDashboardTeacherPendingClass: MessageFns<PrincipalDashboardTeacherPendingClass>;
export declare const PrincipalDashboardTeacherActivityRow: MessageFns<PrincipalDashboardTeacherActivityRow>;
export declare const GetPrincipalDashboardTeacherActivitySummaryResponse: MessageFns<GetPrincipalDashboardTeacherActivitySummaryResponse>;
export declare const GetTeacherReportCardHomepageRequest: MessageFns<GetTeacherReportCardHomepageRequest>;
export declare const TeacherReportCardHomepageRow: MessageFns<TeacherReportCardHomepageRow>;
export declare const GetTeacherReportCardHomepageResponse: MessageFns<GetTeacherReportCardHomepageResponse>;
export declare const GetReportEntriesQueueRequest: MessageFns<GetReportEntriesQueueRequest>;
export declare const ReportStatusCounters: MessageFns<ReportStatusCounters>;
export declare const ReportPublishQueueClass: MessageFns<ReportPublishQueueClass>;
export declare const GetReportPublishQueueClassesRequest: MessageFns<GetReportPublishQueueClassesRequest>;
export declare const GetReportPublishQueueClassesResponse: MessageFns<GetReportPublishQueueClassesResponse>;
export declare const GetHomeroomPublishBreakdownRequest: MessageFns<GetHomeroomPublishBreakdownRequest>;
export declare const GetHomeroomPublishBreakdownResponse: MessageFns<GetHomeroomPublishBreakdownResponse>;
export declare const GetClassReportEntriesByTypeRequest: MessageFns<GetClassReportEntriesByTypeRequest>;
export declare const GetReportEntryRequest: MessageFns<GetReportEntryRequest>;
export declare const GetReportEntryResponse: MessageFns<GetReportEntryResponse>;
export declare const GetReportEntryMedianRequest: MessageFns<GetReportEntryMedianRequest>;
export declare const GetReportEntryMedianResponse: MessageFns<GetReportEntryMedianResponse>;
export declare const GenerateReportEntrySmartCommentInput: MessageFns<GenerateReportEntrySmartCommentInput>;
export declare const GenerateReportEntrySmartCommentRequest: MessageFns<GenerateReportEntrySmartCommentRequest>;
export declare const GenerateReportEntrySmartCommentResponse: MessageFns<GenerateReportEntrySmartCommentResponse>;
export declare const UpdateReportEntryRequest: MessageFns<UpdateReportEntryRequest>;
export declare const ReportEntryViewResponse: MessageFns<ReportEntryViewResponse>;
export declare const GetReportEntryViewsResponse: MessageFns<GetReportEntryViewsResponse>;
export declare const GetReportEntriesResponse: MessageFns<GetReportEntriesResponse>;
export declare const RequestChangesReportEntryRequest: MessageFns<RequestChangesReportEntryRequest>;
export declare const ApproveReportEntryRequest: MessageFns<ApproveReportEntryRequest>;
export declare const PublishCourseReportTypeRequest: MessageFns<PublishCourseReportTypeRequest>;
export declare const PublishHomeroomReportTypeRequest: MessageFns<PublishHomeroomReportTypeRequest>;
export declare const PublishClassReportTypeResponse: MessageFns<PublishClassReportTypeResponse>;
export declare const UnpublishReportEntryRequest: MessageFns<UnpublishReportEntryRequest>;
export declare const GuardianSignReportCardsRequest: MessageFns<GuardianSignReportCardsRequest>;
export declare const SendOwnerTeacherReportCardRemindersForOrganizationRequest: MessageFns<SendOwnerTeacherReportCardRemindersForOrganizationRequest>;
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
