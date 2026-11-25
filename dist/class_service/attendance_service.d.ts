import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Student } from "../user_service/student";
import { TeacherBasic } from "../user_service/teacher";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { UserType } from "../utils/user_type";
import { Attendance, AttendanceStatus } from "./attendance";
import { ClassRef } from "./class_ref";
import { Course, CourseSummary } from "./course";
import { Homeroom, HomeroomSummary } from "./homeroom";
export declare const protobufPackage = "class_service.attendance_service";
export declare enum PrincipalDashboardAttendanceScopeType {
    PRINCIPAL_DASHBOARD_ATTENDANCE_SCOPE_HOMEROOM = "PRINCIPAL_DASHBOARD_ATTENDANCE_SCOPE_HOMEROOM",
    PRINCIPAL_DASHBOARD_ATTENDANCE_SCOPE_COURSE = "PRINCIPAL_DASHBOARD_ATTENDANCE_SCOPE_COURSE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function principalDashboardAttendanceScopeTypeFromJSON(object: any): PrincipalDashboardAttendanceScopeType;
export declare function principalDashboardAttendanceScopeTypeToJSON(object: PrincipalDashboardAttendanceScopeType): string;
export declare function principalDashboardAttendanceScopeTypeToNumber(object: PrincipalDashboardAttendanceScopeType): number;
export declare enum TimeType {
    SignIn = "SignIn",
    SignOut = "SignOut",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function timeTypeFromJSON(object: any): TimeType;
export declare function timeTypeToJSON(object: TimeType): string;
export declare function timeTypeToNumber(object: TimeType): number;
export declare enum AttendanceCompletionStatus {
    EMPTY = "EMPTY",
    PARTIAL = "PARTIAL",
    FULL = "FULL",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function attendanceCompletionStatusFromJSON(object: any): AttendanceCompletionStatus;
export declare function attendanceCompletionStatusToJSON(object: AttendanceCompletionStatus): string;
export declare function attendanceCompletionStatusToNumber(object: AttendanceCompletionStatus): number;
export declare enum AbsenceRequestStatus {
    ABSENCE_REQUEST_STATUS_UNSPECIFIED = "ABSENCE_REQUEST_STATUS_UNSPECIFIED",
    ABSENCE_REQUEST_STATUS_NOTICE = "ABSENCE_REQUEST_STATUS_NOTICE",
    ABSENCE_REQUEST_STATUS_PENDING_REVIEW = "ABSENCE_REQUEST_STATUS_PENDING_REVIEW",
    ABSENCE_REQUEST_STATUS_MORE_INFORMATION_NEEDED = "ABSENCE_REQUEST_STATUS_MORE_INFORMATION_NEEDED",
    ABSENCE_REQUEST_STATUS_APPROVED = "ABSENCE_REQUEST_STATUS_APPROVED",
    ABSENCE_REQUEST_STATUS_DECLINED = "ABSENCE_REQUEST_STATUS_DECLINED",
    ABSENCE_REQUEST_STATUS_WITHDRAWN = "ABSENCE_REQUEST_STATUS_WITHDRAWN",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function absenceRequestStatusFromJSON(object: any): AbsenceRequestStatus;
export declare function absenceRequestStatusToJSON(object: AbsenceRequestStatus): string;
export declare function absenceRequestStatusToNumber(object: AbsenceRequestStatus): number;
export interface GetPrincipalDashboardAttendanceSummaryRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
    as_of_date?: Date | undefined;
    semester_id?: ObjectId | undefined;
}
/**
 * One point in the weekly attendance trend chart shown on the dashboard.
 * Example: week_start_date = "2026-03-02", attendance_pct = 91.4
 */
export interface PrincipalDashboardAttendanceTrendPoint {
    /** ISO date string for the first day of the represented week in org-local time. */
    week_start_date?: string | undefined;
    /** Attendance percentage for that week. */
    attendance_pct?: number | undefined;
}
/** One row in the "Attendance Needed Today" list on the dashboard. */
export interface PrincipalDashboardAttendanceTodayRow {
    row_type?: PrincipalDashboardAttendanceScopeType | undefined;
    class_id: ObjectId | undefined;
    class_name?: string | undefined;
    course_code?: string | undefined;
    teacher_names: string[];
    expected_count?: number | undefined;
    marked_count?: number | undefined;
}
export interface PrincipalDashboardChronicAbsentee {
    student_id: ObjectId | undefined;
    student_name?: string | undefined;
    homeroom_id?: ObjectId | undefined;
    homeroom_name?: string | undefined;
    absences?: number | undefined;
    absence_pct?: number | undefined;
}
export interface GetPrincipalDashboardAttendanceSummaryResponse {
    weekly_trend: PrincipalDashboardAttendanceTrendPoint[];
    today_rows: PrincipalDashboardAttendanceTodayRow[];
    chronic_absentees: PrincipalDashboardChronicAbsentee[];
    completion_today_pct?: number | undefined;
    homerooms_total_today?: number | undefined;
    homerooms_filled_today?: number | undefined;
    courses_total_today?: number | undefined;
    courses_filled_today?: number | undefined;
    is_school_day_today?: boolean | undefined;
}
export interface AttendanceResponse {
    attendance: Attendance[];
}
/** Queries */
export interface GetStudentEntriesRequest {
    context: RequestContext | undefined;
    /** when omitted, fetch across all classes */
    class_ref?: ClassRef | undefined;
    student_id: ObjectId | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    start_date?: string | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    end_date?: string | undefined;
}
export interface GetStudentsEntriesCountRequest {
    context: RequestContext | undefined;
    /** when omitted, fetch across all classes */
    class_ref?: ClassRef | undefined;
    student_ids: ObjectId[];
    /** YYYY-MM-DD format for NaiveDate */
    start_date?: string | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    end_date?: string | undefined;
}
/** Updates */
export interface UpdateStatusRequest {
    context: RequestContext | undefined;
    attendance_entry_id: ObjectId | undefined;
    status?: AttendanceStatus | undefined;
}
export interface UpdateTimeRequest {
    context: RequestContext | undefined;
    attendance_entry_id: ObjectId | undefined;
    time_type?: TimeType | undefined;
    time: Date | undefined;
}
export interface UpdateReasonRequest {
    context: RequestContext | undefined;
    attendance_entry_id: ObjectId | undefined;
    teacher_reason?: string | undefined;
}
export interface UpdateExcuseStudentRequest {
    context: RequestContext | undefined;
    attendance_entry_id: ObjectId | undefined;
    parent_reason?: string | undefined;
    student_excused_by: ObjectId | undefined;
    student_excused_by_user_type?: UserType | undefined;
}
/** Aggregations */
export interface AttendanceCounts {
    none?: number | undefined;
    present?: number | undefined;
    late?: number | undefined;
    absent?: number | undefined;
    excused_absent?: number | undefined;
    non_excused_absent?: number | undefined;
}
export interface StudentAttendanceCounts {
    student: Student | undefined;
    counts: AttendanceCounts | undefined;
}
export interface StudentsAttendanceCountsResponse {
    student_counts: StudentAttendanceCounts[];
}
export interface GetCoursesAttendanceOverviewRequest {
    context: RequestContext | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    date?: string | undefined;
    show_all_classes?: boolean | undefined;
    semester_id?: ObjectId | undefined;
    show_archived_only?: boolean | undefined;
    school_year_id?: ObjectId | undefined;
}
export interface GetCoursesAttendanceOverviewResponse {
    courses: Course[];
    teachers: TeacherBasic[];
    entry_status: CourseEntryStatus[];
}
export interface CourseEntryStatus {
    course_id: ObjectId | undefined;
    is_complete?: boolean | undefined;
    expected_count?: number | undefined;
    marked_count?: number | undefined;
}
export interface GetHomeroomsAttendanceOverviewRequest {
    context: RequestContext | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    date?: string | undefined;
    show_all_classes?: boolean | undefined;
    semester_id?: ObjectId | undefined;
    show_archived_only?: boolean | undefined;
    school_year_id?: ObjectId | undefined;
}
export interface GetHomeroomsAttendanceOverviewResponse {
    homerooms: Homeroom[];
    teachers: TeacherBasic[];
    entry_status: HomeroomEntryStatus[];
}
export interface HomeroomEntryStatus {
    homeroom_id: ObjectId | undefined;
    is_complete?: boolean | undefined;
    expected_count?: number | undefined;
    marked_count?: number | undefined;
}
export interface GetHomeroomAttendanceDetailsRequest {
    context: RequestContext | undefined;
    homeroom_id: ObjectId | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    date?: string | undefined;
    period_number?: number | undefined;
}
export interface GetHomeroomAttendanceDetailsResponse {
    homeroom: Homeroom | undefined;
    students: Student[];
    attendance_entries: Attendance[];
    is_school_day?: boolean | undefined;
}
export interface GetSingleStudentHomeroomAttendanceEntryRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    homeroom_id: ObjectId | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    date?: string | undefined;
}
export interface GetSingleStudentHomeroomAttendanceEntryResponse {
    student: Student | undefined;
    attendance_entry?: Attendance | undefined;
    homeroom: Homeroom | undefined;
    is_school_day?: boolean | undefined;
}
export interface GetAttendanceDateMapRequest {
    context: RequestContext | undefined;
    class_ref: ClassRef | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    start_date?: string | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    end_date?: string | undefined;
}
export interface GetAttendanceDateMapResponse {
    entries: AttendanceDateMapEntry[];
}
export interface AttendanceDateMapEntry {
    /** YYYY-MM-DD format for NaiveDate */
    date?: string | undefined;
    completion_status?: AttendanceCompletionStatus | undefined;
}
export interface GetAttendanceCsvDataRequest {
    context: RequestContext | undefined;
    class_ref: ClassRef | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    start_date?: string | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    end_date?: string | undefined;
}
export interface GetAttendanceCsvDataResponse {
    csv_data?: string | undefined;
    filename?: string | undefined;
}
export interface GetCourseAttendanceDetailsRequest {
    context: RequestContext | undefined;
    course_id: ObjectId | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    date?: string | undefined;
    period_number?: number | undefined;
}
export interface GetCourseAttendanceDetailsResponse {
    course: Course | undefined;
    students: Student[];
    attendance_entries: Attendance[];
    is_school_day?: boolean | undefined;
}
export interface GetSingleStudentCourseAttendanceEntryRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    course_id: ObjectId | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    date?: string | undefined;
    period_number?: number | undefined;
}
export interface GetSingleStudentCourseAttendanceEntryResponse {
    student: Student | undefined;
    attendance_entry?: Attendance | undefined;
    course: Course | undefined;
    is_school_day?: boolean | undefined;
}
export interface AbsenceRequestUpload {
    name?: string | undefined;
    media_type?: string | undefined;
    content?: Uint8Array | undefined;
}
export interface AbsenceRequestFile {
    id: ObjectId | undefined;
    name?: string | undefined;
    media_type?: string | undefined;
}
export interface AbsenceRequestFileContent {
    file: AbsenceRequestFile | undefined;
    content?: Uint8Array | undefined;
}
export interface AbsenceRequestEvent {
    actor_id: ObjectId | undefined;
    actor_type?: UserType | undefined;
    occurred_at: Date | undefined;
    status?: AbsenceRequestStatus | undefined;
    message?: string | undefined;
    files: AbsenceRequestFile[];
    /** Current display name, when resolved and visible to the viewer. */
    actor_name?: string | undefined;
}
export interface AbsenceRequestAttendanceDay {
    school_date?: string | undefined;
    present?: number | undefined;
    late?: number | undefined;
    absent?: number | undefined;
}
export interface AbsenceRequest {
    id: ObjectId | undefined;
    student_id: ObjectId | undefined;
    student_name?: string | undefined;
    school_year_id: ObjectId | undefined;
    school_dates: string[];
    status?: AbsenceRequestStatus | undefined;
    revision?: number | undefined;
    submitted_at: Date | undefined;
    events: AbsenceRequestEvent[];
    attendance: AbsenceRequestAttendanceDay[];
}
export interface SubmitAbsenceRequestInput {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    start_date?: string | undefined;
    end_date?: string | undefined;
    request_excusal?: boolean | undefined;
    reason?: string | undefined;
    submission_key?: string | undefined;
    files: AbsenceRequestUpload[];
}
export interface ListAbsenceRequestsInput {
    context: RequestContext | undefined;
    student_id?: ObjectId | undefined;
    school_year_id?: ObjectId | undefined;
    status?: AbsenceRequestStatus | undefined;
    offset?: number | undefined;
    limit?: number | undefined;
}
export interface AbsenceRequestsPage {
    requests: AbsenceRequest[];
    total?: number | undefined;
}
export interface GetAbsenceRequestInput {
    context: RequestContext | undefined;
    request_id: ObjectId | undefined;
}
export interface ReplyToAbsenceRequestInput {
    context: RequestContext | undefined;
    request_id: ObjectId | undefined;
    revision?: number | undefined;
    message?: string | undefined;
    submission_key?: string | undefined;
    files: AbsenceRequestUpload[];
}
export interface ReviewAbsenceRequestInput {
    context: RequestContext | undefined;
    request_id: ObjectId | undefined;
    revision?: number | undefined;
    status?: AbsenceRequestStatus | undefined;
    message?: string | undefined;
}
export interface DownloadAbsenceRequestFileInput {
    context: RequestContext | undefined;
    request_id: ObjectId | undefined;
    file_id: ObjectId | undefined;
}
export interface GetCoursesAttendanceSummaryResponse {
    courses: CourseSummary[];
    entry_status: CourseEntryStatus[];
}
export interface GetHomeroomsAttendanceSummaryResponse {
    homerooms: HomeroomSummary[];
    entry_status: HomeroomEntryStatus[];
}
export interface GetAttendanceScopeAvailabilityRequest {
    context: RequestContext | undefined;
}
export interface GetAttendanceScopeAvailabilityResponse {
    has_courses?: boolean | undefined;
    has_homerooms?: boolean | undefined;
}
export declare const GetPrincipalDashboardAttendanceSummaryRequest: MessageFns<GetPrincipalDashboardAttendanceSummaryRequest>;
export declare const PrincipalDashboardAttendanceTrendPoint: MessageFns<PrincipalDashboardAttendanceTrendPoint>;
export declare const PrincipalDashboardAttendanceTodayRow: MessageFns<PrincipalDashboardAttendanceTodayRow>;
export declare const PrincipalDashboardChronicAbsentee: MessageFns<PrincipalDashboardChronicAbsentee>;
export declare const GetPrincipalDashboardAttendanceSummaryResponse: MessageFns<GetPrincipalDashboardAttendanceSummaryResponse>;
export declare const AttendanceResponse: MessageFns<AttendanceResponse>;
export declare const GetStudentEntriesRequest: MessageFns<GetStudentEntriesRequest>;
export declare const GetStudentsEntriesCountRequest: MessageFns<GetStudentsEntriesCountRequest>;
export declare const UpdateStatusRequest: MessageFns<UpdateStatusRequest>;
export declare const UpdateTimeRequest: MessageFns<UpdateTimeRequest>;
export declare const UpdateReasonRequest: MessageFns<UpdateReasonRequest>;
export declare const UpdateExcuseStudentRequest: MessageFns<UpdateExcuseStudentRequest>;
export declare const AttendanceCounts: MessageFns<AttendanceCounts>;
export declare const StudentAttendanceCounts: MessageFns<StudentAttendanceCounts>;
export declare const StudentsAttendanceCountsResponse: MessageFns<StudentsAttendanceCountsResponse>;
export declare const GetCoursesAttendanceOverviewRequest: MessageFns<GetCoursesAttendanceOverviewRequest>;
export declare const GetCoursesAttendanceOverviewResponse: MessageFns<GetCoursesAttendanceOverviewResponse>;
export declare const CourseEntryStatus: MessageFns<CourseEntryStatus>;
export declare const GetHomeroomsAttendanceOverviewRequest: MessageFns<GetHomeroomsAttendanceOverviewRequest>;
export declare const GetHomeroomsAttendanceOverviewResponse: MessageFns<GetHomeroomsAttendanceOverviewResponse>;
export declare const HomeroomEntryStatus: MessageFns<HomeroomEntryStatus>;
export declare const GetHomeroomAttendanceDetailsRequest: MessageFns<GetHomeroomAttendanceDetailsRequest>;
export declare const GetHomeroomAttendanceDetailsResponse: MessageFns<GetHomeroomAttendanceDetailsResponse>;
export declare const GetSingleStudentHomeroomAttendanceEntryRequest: MessageFns<GetSingleStudentHomeroomAttendanceEntryRequest>;
export declare const GetSingleStudentHomeroomAttendanceEntryResponse: MessageFns<GetSingleStudentHomeroomAttendanceEntryResponse>;
export declare const GetAttendanceDateMapRequest: MessageFns<GetAttendanceDateMapRequest>;
export declare const GetAttendanceDateMapResponse: MessageFns<GetAttendanceDateMapResponse>;
export declare const AttendanceDateMapEntry: MessageFns<AttendanceDateMapEntry>;
export declare const GetAttendanceCsvDataRequest: MessageFns<GetAttendanceCsvDataRequest>;
export declare const GetAttendanceCsvDataResponse: MessageFns<GetAttendanceCsvDataResponse>;
export declare const GetCourseAttendanceDetailsRequest: MessageFns<GetCourseAttendanceDetailsRequest>;
export declare const GetCourseAttendanceDetailsResponse: MessageFns<GetCourseAttendanceDetailsResponse>;
export declare const GetSingleStudentCourseAttendanceEntryRequest: MessageFns<GetSingleStudentCourseAttendanceEntryRequest>;
export declare const GetSingleStudentCourseAttendanceEntryResponse: MessageFns<GetSingleStudentCourseAttendanceEntryResponse>;
export declare const AbsenceRequestUpload: MessageFns<AbsenceRequestUpload>;
export declare const AbsenceRequestFile: MessageFns<AbsenceRequestFile>;
export declare const AbsenceRequestFileContent: MessageFns<AbsenceRequestFileContent>;
export declare const AbsenceRequestEvent: MessageFns<AbsenceRequestEvent>;
export declare const AbsenceRequestAttendanceDay: MessageFns<AbsenceRequestAttendanceDay>;
export declare const AbsenceRequest: MessageFns<AbsenceRequest>;
export declare const SubmitAbsenceRequestInput: MessageFns<SubmitAbsenceRequestInput>;
export declare const ListAbsenceRequestsInput: MessageFns<ListAbsenceRequestsInput>;
export declare const AbsenceRequestsPage: MessageFns<AbsenceRequestsPage>;
export declare const GetAbsenceRequestInput: MessageFns<GetAbsenceRequestInput>;
export declare const ReplyToAbsenceRequestInput: MessageFns<ReplyToAbsenceRequestInput>;
export declare const ReviewAbsenceRequestInput: MessageFns<ReviewAbsenceRequestInput>;
export declare const DownloadAbsenceRequestFileInput: MessageFns<DownloadAbsenceRequestFileInput>;
export declare const GetCoursesAttendanceSummaryResponse: MessageFns<GetCoursesAttendanceSummaryResponse>;
export declare const GetHomeroomsAttendanceSummaryResponse: MessageFns<GetHomeroomsAttendanceSummaryResponse>;
export declare const GetAttendanceScopeAvailabilityRequest: MessageFns<GetAttendanceScopeAvailabilityRequest>;
export declare const GetAttendanceScopeAvailabilityResponse: MessageFns<GetAttendanceScopeAvailabilityResponse>;
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
