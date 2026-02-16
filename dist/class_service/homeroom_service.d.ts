import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { StudentGrade } from "../user_service/student";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { Course } from "./course";
import { Homeroom } from "./homeroom";
import { LmsCourseWork, LmsProviderType, LmsSubmission } from "./lms_course";
export declare const protobufPackage = "class_service.homeroom_service";
export interface GetHomeroomRequest {
    context: RequestContext | undefined;
    homeroom_id: ObjectId | undefined;
}
export interface ListHomeroomsRequest {
    context: RequestContext | undefined;
    per_page?: number | undefined;
    page?: number | undefined;
    name_search?: string | undefined;
    semester?: ObjectId | undefined;
    school_year?: ObjectId | undefined;
    archived?: boolean | undefined;
    teacher_id?: ObjectId | undefined;
}
export interface CreateHomeroomRequest {
    context: RequestContext | undefined;
    name: string;
    semester_id: ObjectId | undefined;
    teacher_ids: ObjectId[];
    grades: StudentGrade[];
    lms_provider?: LmsProviderType | undefined;
}
export interface CloneHomeroomRequest {
    context: RequestContext | undefined;
    homeroom_to_clone_id: ObjectId | undefined;
    name: string;
    semester_id: ObjectId | undefined;
    teacher_ids: ObjectId[];
    grades: StudentGrade[];
}
export interface GetHomeroomCoursesRequest {
    context: RequestContext | undefined;
    homeroom_id: ObjectId | undefined;
    include_archived: boolean;
}
export interface GetHomeroomCoursesResponse {
    courses: Course[];
}
export interface GetStudentHomeroomsRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    include_archived?: boolean | undefined;
}
export interface GetStudentHomeroomsResponse {
    homerooms: Homeroom[];
}
export interface ArchiveHomeroomRequest {
    context: RequestContext | undefined;
    homeroom_id: ObjectId | undefined;
}
export interface UpdateHomeroomRequest {
    context: RequestContext | undefined;
    homeroom_id: ObjectId | undefined;
    semester_id: ObjectId | undefined;
    name: string;
    grades: StudentGrade[];
}
export interface AddTeachersRequest {
    context: RequestContext | undefined;
    homeroom_id: ObjectId | undefined;
    teacher_ids: ObjectId[];
}
export interface RemoveTeachersRequest {
    context: RequestContext | undefined;
    homeroom_id: ObjectId | undefined;
    teacher_ids: ObjectId[];
}
export interface AddStudentsRequest {
    context: RequestContext | undefined;
    homeroom_id: ObjectId | undefined;
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
    homeroom: Homeroom | undefined;
    failed_teachers: TeacherFailure[];
}
export interface AddStudentsResponse {
    homeroom: Homeroom | undefined;
    failed_students: StudentFailure[];
}
export interface RemoveStudentsRequest {
    context: RequestContext | undefined;
    homeroom_id: ObjectId | undefined;
    student_ids: ObjectId[];
}
export interface GetAttendanceClassesRequest {
    context: RequestContext | undefined;
    teacher_id: ObjectId | undefined;
}
export interface GetAttendanceClassesResponse {
    homerooms: Homeroom[];
}
export interface GetAllAttendanceClassesRequest {
    context: RequestContext | undefined;
}
export interface GetAllAttendanceClassesResponse {
    homerooms: Homeroom[];
}
export interface GetLmsCourseWorkRequest {
    context: RequestContext | undefined;
    homeroom_id: ObjectId | undefined;
}
export interface LmsCourseWorkResponse {
    lms_course_work: LmsCourseWork[];
}
export interface GetStudentLmsCourseWorkRequest {
    context: RequestContext | undefined;
    homeroom_id: ObjectId | undefined;
    student_id: ObjectId | undefined;
}
export interface LmsStudentSubmissionResponse {
    lms_student_submission: LmsSubmission[];
}
export declare const GetHomeroomRequest: MessageFns<GetHomeroomRequest>;
export declare const ListHomeroomsRequest: MessageFns<ListHomeroomsRequest>;
export declare const CreateHomeroomRequest: MessageFns<CreateHomeroomRequest>;
export declare const CloneHomeroomRequest: MessageFns<CloneHomeroomRequest>;
export declare const GetHomeroomCoursesRequest: MessageFns<GetHomeroomCoursesRequest>;
export declare const GetHomeroomCoursesResponse: MessageFns<GetHomeroomCoursesResponse>;
export declare const GetStudentHomeroomsRequest: MessageFns<GetStudentHomeroomsRequest>;
export declare const GetStudentHomeroomsResponse: MessageFns<GetStudentHomeroomsResponse>;
export declare const ArchiveHomeroomRequest: MessageFns<ArchiveHomeroomRequest>;
export declare const UpdateHomeroomRequest: MessageFns<UpdateHomeroomRequest>;
export declare const AddTeachersRequest: MessageFns<AddTeachersRequest>;
export declare const RemoveTeachersRequest: MessageFns<RemoveTeachersRequest>;
export declare const AddStudentsRequest: MessageFns<AddStudentsRequest>;
export declare const TeacherFailure: MessageFns<TeacherFailure>;
export declare const StudentFailure: MessageFns<StudentFailure>;
export declare const AddTeachersResponse: MessageFns<AddTeachersResponse>;
export declare const AddStudentsResponse: MessageFns<AddStudentsResponse>;
export declare const RemoveStudentsRequest: MessageFns<RemoveStudentsRequest>;
export declare const GetAttendanceClassesRequest: MessageFns<GetAttendanceClassesRequest>;
export declare const GetAttendanceClassesResponse: MessageFns<GetAttendanceClassesResponse>;
export declare const GetAllAttendanceClassesRequest: MessageFns<GetAllAttendanceClassesRequest>;
export declare const GetAllAttendanceClassesResponse: MessageFns<GetAllAttendanceClassesResponse>;
export declare const GetLmsCourseWorkRequest: MessageFns<GetLmsCourseWorkRequest>;
export declare const LmsCourseWorkResponse: MessageFns<LmsCourseWorkResponse>;
export declare const GetStudentLmsCourseWorkRequest: MessageFns<GetStudentLmsCourseWorkRequest>;
export declare const LmsStudentSubmissionResponse: MessageFns<LmsStudentSubmissionResponse>;
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
