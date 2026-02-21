import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { AbstractCourse } from "./abstract_course";
import { Homeroom, ListHomeroom } from "./homeroom";
import { LmsCourse } from "./lms_course";
import { ReportLayout } from "./report_layout";
import { ListSemester, Semester } from "./semester";
export declare const protobufPackage = "class_service";
export interface Course {
    id: ObjectId | undefined;
    archived: boolean;
    semester: Semester | undefined;
    homeroom?: Homeroom | undefined;
    name: string;
    teacher_ids: ObjectId[];
    student_ids: ObjectId[];
    lms_course?: LmsCourse | undefined;
    report_layout: ReportLayout | undefined;
    abstract_course_id?: ObjectId | undefined;
    abstract_course?: AbstractCourse | undefined;
}
export interface ListCourse {
    id: ObjectId | undefined;
    archived: boolean;
    name: string;
    semester: ListSemester | undefined;
    homeroom?: ListHomeroom | undefined;
    teachers: ObjectId[];
    abstract_course_id?: ObjectId | undefined;
    abstract_course?: AbstractCourse | undefined;
}
export interface CourseList {
    courses: ListCourse[];
    courses_count: number;
}
export declare const Course: MessageFns<Course>;
export declare const ListCourse: MessageFns<ListCourse>;
export declare const CourseList: MessageFns<CourseList>;
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
