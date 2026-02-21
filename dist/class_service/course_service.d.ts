import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { Course } from "./course";
import { LmsCourseWork, LmsProviderType, LmsSubmission } from "./lms_course";
export declare const protobufPackage = "class_service.course_service";
export interface GetCourseRequest {
    context: RequestContext | undefined;
    course_id: ObjectId | undefined;
}
export interface ListCoursesRequest {
    context: RequestContext | undefined;
    per_page?: number | undefined;
    page?: number | undefined;
    name_search?: string | undefined;
    semester?: ObjectId | undefined;
    school_year?: ObjectId | undefined;
    archived?: boolean | undefined;
    hide_homeroom_courses?: boolean | undefined;
    teacher_id?: ObjectId | undefined;
}
export interface CourseResponse {
    course: Course[];
}
export interface LmsCourseWorkResponse {
    lms_course_work: LmsCourseWork[];
}
export interface LmsStudentSubmissionResponse {
    lms_student_submission: LmsSubmission[];
}
/** Request to get student courses */
export interface GetStudentCoursesRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    include_archived?: boolean | undefined;
}
export interface GetStudentCoursesForSchoolYearRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    school_year_id: ObjectId | undefined;
}
/** Request to archive a course */
export interface ArchiveCourseRequest {
    context: RequestContext | undefined;
    course_id: ObjectId | undefined;
}
export interface UnarchiveCourseRequest {
    context: RequestContext | undefined;
    course_id: ObjectId | undefined;
}
/** Request to update a course */
export interface UpdateCourseRequest {
    context: RequestContext | undefined;
    course_id: ObjectId | undefined;
    name: string;
    semester_id: ObjectId | undefined;
}
/** Request to add teachers to a course */
export interface AddTeachersRequest {
    context: RequestContext | undefined;
    course_id: ObjectId | undefined;
    teacher_ids: ObjectId[];
}
/** Request to remove teachers from a course */
export interface RemoveTeachersRequest {
    context: RequestContext | undefined;
    course_id: ObjectId | undefined;
    teacher_ids: ObjectId[];
}
/** Request to add students to a course */
export interface AddStudentsRequest {
    context: RequestContext | undefined;
    course_id: ObjectId | undefined;
    student_ids: ObjectId[];
}
export interface TeacherFailure {
    teacher_id: ObjectId | undefined;
    reason: string;
}
export interface StudentFailure {
    student_id: ObjectId | undefined;
    reason: string;
}
export interface AddTeachersResponse {
    course: Course | undefined;
    failed_teachers: TeacherFailure[];
}
export interface AddStudentsResponse {
    course: Course | undefined;
    failed_students: StudentFailure[];
}
/** Request to remove students from a course */
export interface RemoveStudentsRequest {
    context: RequestContext | undefined;
    course_id: ObjectId | undefined;
    student_ids: ObjectId[];
}
/** Request to get attendance classes for a specific teacher */
export interface AttendanceClassesRequest {
    context: RequestContext | undefined;
    teacher_id: ObjectId | undefined;
}
/** Request to get all attendance classes */
export interface AllAttendanceClassesRequest {
    context: RequestContext | undefined;
}
/** Request to get LMS course work for a course */
export interface GetLmsCourseWorkRequest {
    context: RequestContext | undefined;
    course_id: ObjectId | undefined;
}
/** Request to get LMS student submissions for a course and student */
export interface GetStudentLmsCourseWorkRequest {
    context: RequestContext | undefined;
    course_id: ObjectId | undefined;
    student_id: ObjectId | undefined;
}
/** Request for standalone_create */
export interface StandaloneCreateRequest {
    context: RequestContext | undefined;
    name: string;
    semester_id: ObjectId | undefined;
    teachers: ObjectId[];
    lms_provider?: LmsProviderType | undefined;
    abstract_course_id: ObjectId | undefined;
}
/** Request for standalone_clone */
export interface StandaloneCloneRequest {
    context: RequestContext | undefined;
    course_to_clone: ObjectId | undefined;
    name: string;
    semester_id: ObjectId | undefined;
    teachers: ObjectId[];
    gclass_create: boolean;
    abstract_course_id: ObjectId | undefined;
}
/** Request for homeroom_create */
export interface HomeroomCreateRequest {
    context: RequestContext | undefined;
    name: string;
    teachers: ObjectId[];
    homeroom_id: ObjectId | undefined;
    lms_provider?: LmsProviderType | undefined;
}
/** Request for homeroom_clone */
export interface HomeroomCloneRequest {
    context: RequestContext | undefined;
    course_to_clone: ObjectId | undefined;
    homeroom_to_clone_to: ObjectId | undefined;
    name: string;
    teachers: ObjectId[];
    gclass_create: boolean;
}
export declare const GetCourseRequest: MessageFns<GetCourseRequest>;
export declare const ListCoursesRequest: MessageFns<ListCoursesRequest>;
export declare const CourseResponse: MessageFns<CourseResponse>;
export declare const LmsCourseWorkResponse: MessageFns<LmsCourseWorkResponse>;
export declare const LmsStudentSubmissionResponse: MessageFns<LmsStudentSubmissionResponse>;
export declare const GetStudentCoursesRequest: MessageFns<GetStudentCoursesRequest>;
export declare const GetStudentCoursesForSchoolYearRequest: MessageFns<GetStudentCoursesForSchoolYearRequest>;
export declare const ArchiveCourseRequest: MessageFns<ArchiveCourseRequest>;
export declare const UnarchiveCourseRequest: MessageFns<UnarchiveCourseRequest>;
export declare const UpdateCourseRequest: MessageFns<UpdateCourseRequest>;
export declare const AddTeachersRequest: MessageFns<AddTeachersRequest>;
export declare const RemoveTeachersRequest: MessageFns<RemoveTeachersRequest>;
export declare const AddStudentsRequest: MessageFns<AddStudentsRequest>;
export declare const TeacherFailure: MessageFns<TeacherFailure>;
export declare const StudentFailure: MessageFns<StudentFailure>;
export declare const AddTeachersResponse: MessageFns<AddTeachersResponse>;
export declare const AddStudentsResponse: MessageFns<AddStudentsResponse>;
export declare const RemoveStudentsRequest: MessageFns<RemoveStudentsRequest>;
export declare const AttendanceClassesRequest: MessageFns<AttendanceClassesRequest>;
export declare const AllAttendanceClassesRequest: MessageFns<AllAttendanceClassesRequest>;
export declare const GetLmsCourseWorkRequest: MessageFns<GetLmsCourseWorkRequest>;
export declare const GetStudentLmsCourseWorkRequest: MessageFns<GetStudentLmsCourseWorkRequest>;
export declare const StandaloneCreateRequest: MessageFns<StandaloneCreateRequest>;
export declare const StandaloneCloneRequest: MessageFns<StandaloneCloneRequest>;
export declare const HomeroomCreateRequest: MessageFns<HomeroomCreateRequest>;
export declare const HomeroomCloneRequest: MessageFns<HomeroomCloneRequest>;
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
