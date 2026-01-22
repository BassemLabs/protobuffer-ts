import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { Course } from "./course";
import { Homeroom } from "./homeroom";
import { Semester, SemesterReportLayout } from "./semester";
export declare const protobufPackage = "class_service.semester_service";
export interface GetSemesterRequest {
    context: RequestContext | undefined;
    semester_id: ObjectId | undefined;
}
export interface GetSemestersRequest {
    context: RequestContext | undefined;
    semester_ids: ObjectId[];
}
export interface GetActiveSemestersRequest {
    /** Always include RequestContext as the first field */
    context: RequestContext | undefined;
}
export interface GetActiveSemestersResponse {
    semesters: Semester[];
}
export interface GetActiveSemestersBySchoolYearRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
}
export interface CoursesRequest {
    /** Always include RequestContext as the first field */
    context: RequestContext | undefined;
    semester_id: ObjectId | undefined;
}
export interface CoursesResponse {
    courses: Course[];
}
export interface HomeroomsRequest {
    /** Always include RequestContext as the first field */
    context: RequestContext | undefined;
    semester_id: ObjectId | undefined;
}
export interface HomeroomsResponse {
    homerooms: Homeroom[];
}
export interface UpdateRequest {
    /** Always include RequestContext as the first field */
    context: RequestContext | undefined;
    semester_id: ObjectId | undefined;
    name: string;
    start_date: Date | undefined;
    end_date: Date | undefined;
    report_layout?: SemesterReportLayout | undefined;
    campus_id: ObjectId | undefined;
}
export interface ArchiveRequest {
    /** Always include RequestContext as the first field */
    context: RequestContext | undefined;
    semester_id: ObjectId | undefined;
}
export interface CreateRequest {
    /** Always include RequestContext as the first field */
    context: RequestContext | undefined;
    name: string;
    start_date: Date | undefined;
    end_date: Date | undefined;
    campus_id: ObjectId | undefined;
    school_year_id: ObjectId | undefined;
}
export interface SemesterResponse {
    semester: Semester | undefined;
}
export interface GetStudentSemestersRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    include_archived?: boolean | undefined;
    school_year_id?: ObjectId | undefined;
}
export interface GetStudentSemestersResponse {
    semesters: Semester[];
}
export interface ListSemestersRequest {
    context: RequestContext | undefined;
    per_page?: number | undefined;
    page?: number | undefined;
    name_search?: string | undefined;
    school_year: ObjectId | undefined;
    archived?: boolean | undefined;
}
export declare const GetSemesterRequest: MessageFns<GetSemesterRequest>;
export declare const GetSemestersRequest: MessageFns<GetSemestersRequest>;
export declare const GetActiveSemestersRequest: MessageFns<GetActiveSemestersRequest>;
export declare const GetActiveSemestersResponse: MessageFns<GetActiveSemestersResponse>;
export declare const GetActiveSemestersBySchoolYearRequest: MessageFns<GetActiveSemestersBySchoolYearRequest>;
export declare const CoursesRequest: MessageFns<CoursesRequest>;
export declare const CoursesResponse: MessageFns<CoursesResponse>;
export declare const HomeroomsRequest: MessageFns<HomeroomsRequest>;
export declare const HomeroomsResponse: MessageFns<HomeroomsResponse>;
export declare const UpdateRequest: MessageFns<UpdateRequest>;
export declare const ArchiveRequest: MessageFns<ArchiveRequest>;
export declare const CreateRequest: MessageFns<CreateRequest>;
export declare const SemesterResponse: MessageFns<SemesterResponse>;
export declare const GetStudentSemestersRequest: MessageFns<GetStudentSemestersRequest>;
export declare const GetStudentSemestersResponse: MessageFns<GetStudentSemestersResponse>;
export declare const ListSemestersRequest: MessageFns<ListSemestersRequest>;
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
