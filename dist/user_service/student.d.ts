import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "user_service";
/** Status enum for students */
export declare enum StudentStatus {
    WAITLIST = "WAITLIST",
    INTERVIEW = "INTERVIEW",
    APPLICANT = "APPLICANT",
    REJECTED = "REJECTED",
    ENROLLED = "ENROLLED",
    RE_REGISTRATION = "RE_REGISTRATION",
    WITHDRAWN = "WITHDRAWN",
    /** NOT_ASSIGNED - Student has no relation with a school year (not stored in DB, used for SchoolYearStudent response only) */
    NOT_ASSIGNED = "NOT_ASSIGNED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function studentStatusFromJSON(object: any): StudentStatus;
export declare function studentStatusToJSON(object: StudentStatus): string;
export declare function studentStatusToNumber(object: StudentStatus): number;
/** Grade enum for students */
export declare enum StudentGrade {
    PRE_K = "PRE_K",
    JUNIOR_KINDERGARTEN = "JUNIOR_KINDERGARTEN",
    SENIOR_KINDERGARTEN = "SENIOR_KINDERGARTEN",
    GRADE_1 = "GRADE_1",
    GRADE_2 = "GRADE_2",
    GRADE_3 = "GRADE_3",
    GRADE_4 = "GRADE_4",
    GRADE_5 = "GRADE_5",
    GRADE_6 = "GRADE_6",
    GRADE_7 = "GRADE_7",
    GRADE_8 = "GRADE_8",
    GRADE_9 = "GRADE_9",
    GRADE_10 = "GRADE_10",
    GRADE_11 = "GRADE_11",
    GRADE_12 = "GRADE_12",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function studentGradeFromJSON(object: any): StudentGrade;
export declare function studentGradeToJSON(object: StudentGrade): string;
export declare function studentGradeToNumber(object: StudentGrade): number;
/** Full student model with all fields */
export interface Student {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    /** Student ID like "2024-1234" */
    id_number: string;
    username: string;
    email_domain: string;
    family_id: ObjectId | undefined;
    first_name: string;
    last_name: string;
    gender: string;
    has_waitlist_priority?: boolean | undefined;
    date_of_birth: Date | undefined;
    interview_date?: Date | undefined;
}
/**
 * Student item with school year context (used for student lists with filters)
 * This message represents a student combined with their school year-specific information.
 * Used in:
 *   - GetStudentsListWithFiltersResponse: General student lists filtered by course/homeroom
 *   - GetFilteredStudentsListResponse: Filtered lists by status, grade, school year, etc.
 *   - GetStudentsByIdsWithSchoolYearResponse: Getting multiple students with school year context
 *
 * Important: The status and grade fields represent the student's status/grade for the query's school year.
 * If no school_year is provided in the query, these fields use the organization's active school year.
 * If a student has no relation with the specified school year, status will be NOT_ASSIGNED and grade will be absent.
 */
export interface SchoolYearStudent {
    id: ObjectId | undefined;
    /** Status for the query's school year (or active school year if not specified) */
    status: StudentStatus;
    first_name: string;
    last_name: string;
    gender: string;
    /** Grade for the query's school year (or active school year if not specified). Absent if status is NOT_ASSIGNED. */
    grade?: StudentGrade | undefined;
    family_id: ObjectId | undefined;
    has_non_paid_invoices?: boolean | undefined;
    date_of_birth: Date | undefined;
    interview_date?: Date | undefined;
}
/** Student profile data for updates */
export interface StudentProfile {
    first_name: string;
    last_name: string;
    gender: string;
    date_of_birth: Date | undefined;
    interview_date?: Date | undefined;
    has_waitlist_priority?: boolean | undefined;
}
/** Student school year specific information (mapping table: student + school_year -> status + grade) */
export interface StudentSchoolYearInformation {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    student_id: ObjectId | undefined;
    school_year_id: ObjectId | undefined;
    status: StudentStatus;
    grade: StudentGrade;
}
export declare const Student: MessageFns<Student>;
export declare const SchoolYearStudent: MessageFns<SchoolYearStudent>;
export declare const StudentProfile: MessageFns<StudentProfile>;
export declare const StudentSchoolYearInformation: MessageFns<StudentSchoolYearInformation>;
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
