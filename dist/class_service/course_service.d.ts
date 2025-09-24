import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { Course } from "./course";
import { GClassCourseWork, GClassStudentSubmission } from "./gclass";
export declare const protobufPackage = "class_service.course_service";
export interface GetCourseRequest {
    context: RequestContext | undefined;
    courseId: ObjectId | undefined;
}
export interface AggregateCourseRequest {
    context: RequestContext | undefined;
    aggregationDocument: string;
}
export interface AggregateCourseResponse {
    result: string;
}
export interface CourseResponse {
    course: Course[];
}
export interface GClassCourseWorkResponse {
    gclassCourseWork: GClassCourseWork[];
}
export interface GClassStudentSubmissionResponse {
    gclassStudentSubmission: GClassStudentSubmission[];
}
/** Request to get student courses */
export interface GetStudentCoursesRequest {
    context: RequestContext | undefined;
    studentId: ObjectId | undefined;
    includeArchived?: boolean | undefined;
}
export interface GetStudentCoursesForSchoolYearRequest {
    context: RequestContext | undefined;
    studentId: ObjectId | undefined;
    schoolYearId: ObjectId | undefined;
}
/** Request to archive a course */
export interface ArchiveCourseRequest {
    context: RequestContext | undefined;
    courseId: ObjectId | undefined;
}
/** Request to update a course */
export interface UpdateCourseRequest {
    context: RequestContext | undefined;
    courseId: ObjectId | undefined;
    name: string;
    semesterId: ObjectId | undefined;
    courseCode?: string | undefined;
}
/** Request to add teachers to a course */
export interface AddTeachersRequest {
    context: RequestContext | undefined;
    courseId: ObjectId | undefined;
    teacherIds: ObjectId[];
}
/** Request to remove teachers from a course */
export interface RemoveTeachersRequest {
    context: RequestContext | undefined;
    courseId: ObjectId | undefined;
    teacherIds: ObjectId[];
}
/** Request to add students to a course */
export interface AddStudentsRequest {
    context: RequestContext | undefined;
    courseId: ObjectId | undefined;
    studentIds: ObjectId[];
}
/** Request to remove students from a course */
export interface RemoveStudentsRequest {
    context: RequestContext | undefined;
    courseId: ObjectId | undefined;
    studentIds: ObjectId[];
}
/** Request to add attendance teachers */
export interface AddAttendanceTeachersRequest {
    context: RequestContext | undefined;
    courseId: ObjectId | undefined;
    teacherIds: ObjectId[];
}
/** Request to get attendance classes for a specific teacher */
export interface AttendanceClassesRequest {
    context: RequestContext | undefined;
    teacherId: ObjectId | undefined;
}
/** Request to get all attendance classes */
export interface AllAttendanceClassesRequest {
    context: RequestContext | undefined;
}
/** Request to get GClass course work for a course */
export interface GetGClassCourseWorkRequest {
    context: RequestContext | undefined;
    courseId: ObjectId | undefined;
}
/** Request to get GClass student submissions for a course and student */
export interface GetStudentGClassCourseWorkRequest {
    context: RequestContext | undefined;
    courseId: ObjectId | undefined;
    studentId: ObjectId | undefined;
}
/** Request for standalone_create */
export interface StandaloneCreateRequest {
    context: RequestContext | undefined;
    name: string;
    semesterId: ObjectId | undefined;
    teachers: ObjectId[];
    courseCode: string;
    gclassCreate: boolean;
}
/** Request for standalone_clone */
export interface StandaloneCloneRequest {
    context: RequestContext | undefined;
    courseToClone: ObjectId | undefined;
    name: string;
    semesterId: ObjectId | undefined;
    teachers: ObjectId[];
    courseCode: string;
    gclassCreate: boolean;
}
/** Request for homeroom_create */
export interface HomeroomCreateRequest {
    context: RequestContext | undefined;
    name: string;
    courseCode: string;
    teachers: ObjectId[];
    homeroomId: ObjectId | undefined;
    gclassCreate: boolean;
}
/** Request for homeroom_clone */
export interface HomeroomCloneRequest {
    context: RequestContext | undefined;
    courseToClone: ObjectId | undefined;
    homeroomToCloneTo: ObjectId | undefined;
    name: string;
    courseCode: string;
    teachers: ObjectId[];
    gclassCreate: boolean;
}
export declare const GetCourseRequest: MessageFns<GetCourseRequest>;
export declare const AggregateCourseRequest: MessageFns<AggregateCourseRequest>;
export declare const AggregateCourseResponse: MessageFns<AggregateCourseResponse>;
export declare const CourseResponse: MessageFns<CourseResponse>;
export declare const GClassCourseWorkResponse: MessageFns<GClassCourseWorkResponse>;
export declare const GClassStudentSubmissionResponse: MessageFns<GClassStudentSubmissionResponse>;
export declare const GetStudentCoursesRequest: MessageFns<GetStudentCoursesRequest>;
export declare const GetStudentCoursesForSchoolYearRequest: MessageFns<GetStudentCoursesForSchoolYearRequest>;
export declare const ArchiveCourseRequest: MessageFns<ArchiveCourseRequest>;
export declare const UpdateCourseRequest: MessageFns<UpdateCourseRequest>;
export declare const AddTeachersRequest: MessageFns<AddTeachersRequest>;
export declare const RemoveTeachersRequest: MessageFns<RemoveTeachersRequest>;
export declare const AddStudentsRequest: MessageFns<AddStudentsRequest>;
export declare const RemoveStudentsRequest: MessageFns<RemoveStudentsRequest>;
export declare const AddAttendanceTeachersRequest: MessageFns<AddAttendanceTeachersRequest>;
export declare const AttendanceClassesRequest: MessageFns<AttendanceClassesRequest>;
export declare const AllAttendanceClassesRequest: MessageFns<AllAttendanceClassesRequest>;
export declare const GetGClassCourseWorkRequest: MessageFns<GetGClassCourseWorkRequest>;
export declare const GetStudentGClassCourseWorkRequest: MessageFns<GetStudentGClassCourseWorkRequest>;
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
