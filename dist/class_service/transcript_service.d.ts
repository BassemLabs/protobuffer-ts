import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { StudentGrade } from "../user_service/student";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
export declare const protobufPackage = "class_service.transcript_service";
export interface GetStudentTranscriptRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
}
export interface TranscriptPrimaryIdField {
    field_name?: string | undefined;
    value?: string | undefined;
}
export interface TranscriptHeader {
    student_name?: string | undefined;
    primary_id_field?: TranscriptPrimaryIdField | undefined;
    gender?: string | undefined;
    date_of_birth?: string | undefined;
    school_name?: string | undefined;
    date_of_issue?: string | undefined;
}
export interface TranscriptRow {
    year?: number | undefined;
    month?: number | undefined;
    grade?: StudentGrade | undefined;
    course_title?: string | undefined;
    course_code?: string | undefined;
    percentage_grade?: string | undefined;
    credit?: number | undefined;
    compulsory?: boolean | undefined;
    note?: string | undefined;
    credit_earned?: boolean | undefined;
}
export interface CategoryProgress {
    category_id: ObjectId | undefined;
    category_name?: string | undefined;
    credits_required?: number | undefined;
    credits_earned?: number | undefined;
}
export interface TranscriptSummary {
    total_credits_earned?: number | undefined;
    compulsory_credits_earned?: number | undefined;
    optional_credits_earned?: number | undefined;
    category_progress: CategoryProgress[];
}
export interface TranscriptDiagnostic {
    course_id: ObjectId | undefined;
    course_name?: string | undefined;
    reason?: string | undefined;
}
export interface GetStudentTranscriptResponse {
    header: TranscriptHeader | undefined;
    rows: TranscriptRow[];
    summary: TranscriptSummary | undefined;
    diagnostics: TranscriptDiagnostic[];
}
export interface GetStudentDiplomaRequirementsRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
}
export interface DiplomaRequirementRow {
    label?: string | undefined;
    is_group?: boolean | undefined;
    group_sub_labels: string[];
    total_required?: number | undefined;
    earned_this_year?: number | undefined;
    earned_to_date?: number | undefined;
}
export interface StudentGraduationTracking {
    id: ObjectId | undefined;
    student_id: ObjectId | undefined;
    community_involvement_hours_earned?: number | undefined;
    literacy_requirement_completed?: boolean | undefined;
    specialist_high_skills_major?: string | undefined;
    online_learning_credits_earned?: number | undefined;
    for_school_use_note?: string | undefined;
}
export interface GetStudentDiplomaRequirementsResponse {
    header: TranscriptHeader | undefined;
    compulsory_rows: DiplomaRequirementRow[];
    compulsory_total_required?: number | undefined;
    compulsory_earned_this_year?: number | undefined;
    compulsory_earned_to_date?: number | undefined;
    optional_total_required?: number | undefined;
    optional_earned_this_year?: number | undefined;
    optional_earned_to_date?: number | undefined;
    total_required?: number | undefined;
    total_earned_this_year?: number | undefined;
    total_earned_to_date?: number | undefined;
    community_involvement_hours_required?: number | undefined;
    community_involvement_hours_earned?: number | undefined;
    online_learning_credits_required?: number | undefined;
    online_learning_credits_earned?: number | undefined;
    literacy_requirement_completed?: boolean | undefined;
    specialist_high_skills_major?: string | undefined;
    for_school_use_note?: string | undefined;
    diagnostics: TranscriptDiagnostic[];
}
export interface UpsertStudentGraduationTrackingRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    community_involvement_hours_earned?: number | undefined;
    literacy_requirement_completed?: boolean | undefined;
    specialist_high_skills_major?: string | undefined;
    online_learning_credits_earned?: number | undefined;
    for_school_use_note?: string | undefined;
}
export declare const GetStudentTranscriptRequest: MessageFns<GetStudentTranscriptRequest>;
export declare const TranscriptPrimaryIdField: MessageFns<TranscriptPrimaryIdField>;
export declare const TranscriptHeader: MessageFns<TranscriptHeader>;
export declare const TranscriptRow: MessageFns<TranscriptRow>;
export declare const CategoryProgress: MessageFns<CategoryProgress>;
export declare const TranscriptSummary: MessageFns<TranscriptSummary>;
export declare const TranscriptDiagnostic: MessageFns<TranscriptDiagnostic>;
export declare const GetStudentTranscriptResponse: MessageFns<GetStudentTranscriptResponse>;
export declare const GetStudentDiplomaRequirementsRequest: MessageFns<GetStudentDiplomaRequirementsRequest>;
export declare const DiplomaRequirementRow: MessageFns<DiplomaRequirementRow>;
export declare const StudentGraduationTracking: MessageFns<StudentGraduationTracking>;
export declare const GetStudentDiplomaRequirementsResponse: MessageFns<GetStudentDiplomaRequirementsResponse>;
export declare const UpsertStudentGraduationTrackingRequest: MessageFns<UpsertStudentGraduationTrackingRequest>;
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
