import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Campus } from "../organization_service/campus";
import { Organization } from "../organization_service/organization";
import { StudentPrimaryIdField } from "../user_service/custom_field";
import { Student, StudentGrade } from "../user_service/student";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { AttendanceCounts } from "./attendance_service";
import { Course } from "./course";
import { Homeroom } from "./homeroom";
import { GuardianSignature, ReportStatus } from "./report_entry";
import { ReportType, Semester, SemesterReportLayout } from "./semester";
export declare const protobufPackage = "class_service.report_card_export_service";
export interface GetStudentReportCardExportRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    report_type?: ReportType | undefined;
    homeroom_id?: ObjectId | undefined;
    semester_id?: ObjectId | undefined;
}
export interface ReportCardSignature {
    title?: string | undefined;
    name?: string | undefined;
    signature_file_id?: ObjectId | undefined;
    signature_url?: string | undefined;
}
export interface ReportCardAttendanceSummary {
    days_count: AttendanceCounts | undefined;
    total_days_count: AttendanceCounts | undefined;
}
export interface ReportCardExportEntryCheckBox {
    check_box_id: ObjectId | undefined;
    state?: boolean | undefined;
}
export interface ReportCardExportEntrySection {
    layout_id: ObjectId | undefined;
    mark?: string | undefined;
    median_mark?: string | undefined;
}
export interface ReportCardExportEntryLearningSkill {
    learning_skill_id: ObjectId | undefined;
    mark?: string | undefined;
}
export interface ReportCardExportEntry {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    student: ObjectId | undefined;
    course?: ObjectId | undefined;
    homeroom?: ObjectId | undefined;
    report_type?: ReportType | undefined;
    comment?: string | undefined;
    checkboxes: ReportCardExportEntryCheckBox[];
    sections: ReportCardExportEntrySection[];
    review_status?: ReportStatus | undefined;
    requested_changes?: string | undefined;
    learning_skills: ReportCardExportEntryLearningSkill[];
    credit_earned?: boolean | undefined;
    guardian_signature?: GuardianSignature | undefined;
}
export interface ReportCardExportEntryView {
    entry: ReportCardExportEntry | undefined;
    class_name?: string | undefined;
    semester: Semester | undefined;
    semester_report_layout: SemesterReportLayout | undefined;
    signed_by_guardian_name?: string | undefined;
}
export interface ElementaryReportCardCourseRow {
    course: Course | undefined;
    reports: ReportCardExportEntryView[];
}
export interface SecondaryReportCardCourseRow {
    course: Course | undefined;
    teacher_name?: string | undefined;
    attendance: ReportCardAttendanceSummary | undefined;
    reports: ReportCardExportEntryView[];
}
export interface ElementaryReportCardExport {
    organization: Organization | undefined;
    campus: Campus | undefined;
    student: Student | undefined;
    student_grade?: StudentGrade | undefined;
    school_year_name?: string | undefined;
    homeroom: Homeroom | undefined;
    report_type?: ReportType | undefined;
    teacher_names?: string | undefined;
    selected_report: ReportCardExportEntryView | undefined;
    homeroom_reports: ReportCardExportEntryView[];
    course_rows: ElementaryReportCardCourseRow[];
    attendance: ReportCardAttendanceSummary | undefined;
    primary_id_field?: StudentPrimaryIdField | undefined;
    principal_signature?: ReportCardSignature | undefined;
    teacher_signature?: ReportCardSignature | undefined;
}
export interface SecondaryReportCardExport {
    organization: Organization | undefined;
    campus: Campus | undefined;
    student: Student | undefined;
    student_grade?: StudentGrade | undefined;
    semester: Semester | undefined;
    report_type?: ReportType | undefined;
    course_rows: SecondaryReportCardCourseRow[];
    primary_id_field?: StudentPrimaryIdField | undefined;
    principal_signature?: ReportCardSignature | undefined;
    supervisor_name?: string | undefined;
}
export interface GetStudentReportCardExportResponse {
    elementary_export?: ElementaryReportCardExport | undefined;
    secondary_export?: SecondaryReportCardExport | undefined;
}
export declare const GetStudentReportCardExportRequest: MessageFns<GetStudentReportCardExportRequest>;
export declare const ReportCardSignature: MessageFns<ReportCardSignature>;
export declare const ReportCardAttendanceSummary: MessageFns<ReportCardAttendanceSummary>;
export declare const ReportCardExportEntryCheckBox: MessageFns<ReportCardExportEntryCheckBox>;
export declare const ReportCardExportEntrySection: MessageFns<ReportCardExportEntrySection>;
export declare const ReportCardExportEntryLearningSkill: MessageFns<ReportCardExportEntryLearningSkill>;
export declare const ReportCardExportEntry: MessageFns<ReportCardExportEntry>;
export declare const ReportCardExportEntryView: MessageFns<ReportCardExportEntryView>;
export declare const ElementaryReportCardCourseRow: MessageFns<ElementaryReportCardCourseRow>;
export declare const SecondaryReportCardCourseRow: MessageFns<SecondaryReportCardCourseRow>;
export declare const ElementaryReportCardExport: MessageFns<ElementaryReportCardExport>;
export declare const SecondaryReportCardExport: MessageFns<SecondaryReportCardExport>;
export declare const GetStudentReportCardExportResponse: MessageFns<GetStudentReportCardExportResponse>;
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
