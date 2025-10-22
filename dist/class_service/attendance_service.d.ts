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
    courseId?: ObjectId | undefined;
    homeroomId?: ObjectId | undefined;
}
/** Queries */
export interface GetStudentEntriesRequest {
    context: RequestContext | undefined;
    /** when omitted, fetch across all classes */
    classRef?: ClassRef | undefined;
    studentId: ObjectId | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    startDate: string;
    /** YYYY-MM-DD format for NaiveDate */
    endDate: string;
}
export interface GetStudentsEntriesCountRequest {
    context: RequestContext | undefined;
    /** when omitted, fetch across all classes */
    classRef?: ClassRef | undefined;
    studentIds: ObjectId[];
    /** YYYY-MM-DD format for NaiveDate */
    startDate: string;
    /** YYYY-MM-DD format for NaiveDate */
    endDate: string;
}
/** Updates */
export interface UpdateStatusRequest {
    context: RequestContext | undefined;
    attendanceEntryId: ObjectId | undefined;
    status: AttendanceStatus;
}
export interface UpdateTimeRequest {
    context: RequestContext | undefined;
    attendanceEntryId: ObjectId | undefined;
    timeType: TimeType;
    time: Date | undefined;
}
export interface UpdateReasonRequest {
    context: RequestContext | undefined;
    attendanceEntryId: ObjectId | undefined;
    reason: string;
}
export interface UpdateLateDismissalDateRequest {
    context: RequestContext | undefined;
    attendanceEntryId: ObjectId | undefined;
    lateDismissalDate?: Date | undefined;
}
export interface UpdateExcuseStudentRequest {
    context: RequestContext | undefined;
    attendanceEntryId: ObjectId | undefined;
    reason: string;
    studentExcusedBy: ObjectId | undefined;
    studentExcusedByUserType: UserType;
}
/** Aggregations */
export interface AttendanceCounts {
    none: number;
    present: number;
    late: number;
    absent: number;
    excusedAbsent: number;
    nonExcusedAbsent: number;
}
export interface StudentAttendanceCounts {
    student: Student | undefined;
    counts: AttendanceCounts | undefined;
}
export interface StudentsAttendanceCountsResponse {
    studentCounts: StudentAttendanceCounts[];
}
export interface GetCoursesAttendanceOverviewRequest {
    context: RequestContext | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    date: string;
    showAllClasses: boolean;
}
export interface GetCoursesAttendanceOverviewResponse {
    courses: Course[];
    teachers: TeacherBasic[];
    entryStatus: CourseEntryStatus[];
}
export interface CourseEntryStatus {
    courseId: ObjectId | undefined;
    isComplete: boolean;
}
export interface GetHomeroomsAttendanceOverviewRequest {
    context: RequestContext | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    date: string;
    showAllClasses: boolean;
}
export interface GetHomeroomsAttendanceOverviewResponse {
    homerooms: Homeroom[];
    teachers: TeacherBasic[];
    entryStatus: HomeroomEntryStatus[];
}
export interface HomeroomEntryStatus {
    homeroomId: ObjectId | undefined;
    isComplete: boolean;
}
export interface GetHomeroomAttendanceDetailsRequest {
    context: RequestContext | undefined;
    homeroomId: ObjectId | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    date: string;
    periodNumber: number;
}
export interface GetHomeroomAttendanceDetailsResponse {
    homeroom: Homeroom | undefined;
    students: Student[];
    attendanceEntries: Attendance[];
}
export interface GetSingleStudentHomeroomAttendanceEntryRequest {
    context: RequestContext | undefined;
    studentId: ObjectId | undefined;
    homeroomId: ObjectId | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    date: string;
}
export interface GetSingleStudentHomeroomAttendanceEntryResponse {
    student: Student | undefined;
    attendanceEntry: Attendance | undefined;
    homeroom: Homeroom | undefined;
}
export interface GetAttendanceDateMapRequest {
    context: RequestContext | undefined;
    classRef: ClassRef | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    startDate: string;
    /** YYYY-MM-DD format for NaiveDate */
    endDate: string;
}
export interface GetAttendanceDateMapResponse {
    entries: AttendanceDateMapEntry[];
}
export interface AttendanceDateMapEntry {
    /** YYYY-MM-DD format for NaiveDate */
    date: string;
    completionStatus: AttendanceCompletionStatus;
}
export interface GetAttendanceCsvDataRequest {
    context: RequestContext | undefined;
    classRef: ClassRef | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    startDate: string;
    /** YYYY-MM-DD format for NaiveDate */
    endDate: string;
}
export interface GetAttendanceCsvDataResponse {
    csvData: string;
    filename: string;
}
export interface GetCourseAttendanceDetailsRequest {
    context: RequestContext | undefined;
    courseId: ObjectId | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    date: string;
    periodNumber: number;
}
export interface GetCourseAttendanceDetailsResponse {
    course: Course | undefined;
    students: Student[];
    attendanceEntries: Attendance[];
}
export interface GetSingleStudentCourseAttendanceEntryRequest {
    context: RequestContext | undefined;
    studentId: ObjectId | undefined;
    courseId: ObjectId | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    date: string;
    periodNumber: number;
}
export interface GetSingleStudentCourseAttendanceEntryResponse {
    student: Student | undefined;
    attendanceEntry: Attendance | undefined;
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
