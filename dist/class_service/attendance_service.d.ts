import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Student } from "../user_service/student";
import { TeacherBasic } from "../user_service/teacher";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { UserType } from "../utils/user_type";
import { Attendance, AttendanceStatus } from "./attendance";
import { Course } from "./course";
import { Homeroom } from "./homeroom";
export declare const protobufPackage = "class_service.attendance_service";
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
export interface AttendanceResponse {
    attendance: Attendance[];
}
/** One-of to reference class context */
export interface ClassRef {
    course_id?: ObjectId | undefined;
    homeroom_id?: ObjectId | undefined;
}
/** Queries */
export interface GetStudentEntriesRequest {
    context: RequestContext | undefined;
    /** when omitted, fetch across all classes */
    class_ref?: ClassRef | undefined;
    student_id: ObjectId | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    start_date: string;
    /** YYYY-MM-DD format for NaiveDate */
    end_date: string;
}
export interface GetStudentsEntriesCountRequest {
    context: RequestContext | undefined;
    /** when omitted, fetch across all classes */
    class_ref?: ClassRef | undefined;
    student_ids: ObjectId[];
    /** YYYY-MM-DD format for NaiveDate */
    start_date: string;
    /** YYYY-MM-DD format for NaiveDate */
    end_date: string;
}
/** Updates */
export interface UpdateStatusRequest {
    context: RequestContext | undefined;
    attendance_entry_id: ObjectId | undefined;
    status: AttendanceStatus;
}
export interface UpdateTimeRequest {
    context: RequestContext | undefined;
    attendance_entry_id: ObjectId | undefined;
    time_type: TimeType;
    time: Date | undefined;
}
export interface UpdateReasonRequest {
    context: RequestContext | undefined;
    attendance_entry_id: ObjectId | undefined;
    reason: string;
}
export interface UpdateLateDismissalDateRequest {
    context: RequestContext | undefined;
    attendance_entry_id: ObjectId | undefined;
    late_dismissal_date?: Date | undefined;
}
export interface UpdateExcuseStudentRequest {
    context: RequestContext | undefined;
    attendance_entry_id: ObjectId | undefined;
    reason: string;
    student_excused_by: ObjectId | undefined;
    student_excused_by_user_type: UserType;
}
/** Aggregations */
export interface AttendanceCounts {
    none: number;
    present: number;
    late: number;
    absent: number;
    excused_absent: number;
    non_excused_absent: number;
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
    date: string;
    show_all_classes: boolean;
}
export interface GetCoursesAttendanceOverviewResponse {
    courses: Course[];
    teachers: TeacherBasic[];
    entry_status: CourseEntryStatus[];
}
export interface CourseEntryStatus {
    course_id: ObjectId | undefined;
    is_complete: boolean;
}
export interface GetHomeroomsAttendanceOverviewRequest {
    context: RequestContext | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    date: string;
    show_all_classes: boolean;
}
export interface GetHomeroomsAttendanceOverviewResponse {
    homerooms: Homeroom[];
    teachers: TeacherBasic[];
    entry_status: HomeroomEntryStatus[];
}
export interface HomeroomEntryStatus {
    homeroom_id: ObjectId | undefined;
    is_complete: boolean;
}
export interface GetHomeroomAttendanceDetailsRequest {
    context: RequestContext | undefined;
    homeroom_id: ObjectId | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    date: string;
    period_number: number;
}
export interface GetHomeroomAttendanceDetailsResponse {
    homeroom: Homeroom | undefined;
    students: Student[];
    attendance_entries: Attendance[];
}
export interface GetSingleStudentHomeroomAttendanceEntryRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    homeroom_id: ObjectId | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    date: string;
}
export interface GetSingleStudentHomeroomAttendanceEntryResponse {
    student: Student | undefined;
    attendance_entry: Attendance | undefined;
    homeroom: Homeroom | undefined;
}
export interface GetAttendanceDateMapRequest {
    context: RequestContext | undefined;
    class_ref: ClassRef | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    start_date: string;
    /** YYYY-MM-DD format for NaiveDate */
    end_date: string;
}
export interface GetAttendanceDateMapResponse {
    entries: AttendanceDateMapEntry[];
}
export interface AttendanceDateMapEntry {
    /** YYYY-MM-DD format for NaiveDate */
    date: string;
    completion_status: AttendanceCompletionStatus;
}
export interface GetAttendanceCsvDataRequest {
    context: RequestContext | undefined;
    class_ref: ClassRef | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    start_date: string;
    /** YYYY-MM-DD format for NaiveDate */
    end_date: string;
}
export interface GetAttendanceCsvDataResponse {
    csv_data: string;
    filename: string;
}
export interface GetCourseAttendanceDetailsRequest {
    context: RequestContext | undefined;
    course_id: ObjectId | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    date: string;
    period_number: number;
}
export interface GetCourseAttendanceDetailsResponse {
    course: Course | undefined;
    students: Student[];
    attendance_entries: Attendance[];
}
export interface GetSingleStudentCourseAttendanceEntryRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    course_id: ObjectId | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    date: string;
    period_number: number;
}
export interface GetSingleStudentCourseAttendanceEntryResponse {
    student: Student | undefined;
    attendance_entry: Attendance | undefined;
    course: Course | undefined;
}
export declare const AttendanceResponse: MessageFns<AttendanceResponse>;
export declare const ClassRef: MessageFns<ClassRef>;
export declare const GetStudentEntriesRequest: MessageFns<GetStudentEntriesRequest>;
export declare const GetStudentsEntriesCountRequest: MessageFns<GetStudentsEntriesCountRequest>;
export declare const UpdateStatusRequest: MessageFns<UpdateStatusRequest>;
export declare const UpdateTimeRequest: MessageFns<UpdateTimeRequest>;
export declare const UpdateReasonRequest: MessageFns<UpdateReasonRequest>;
export declare const UpdateLateDismissalDateRequest: MessageFns<UpdateLateDismissalDateRequest>;
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
