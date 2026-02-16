import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { StudentGrade } from "../user_service/student";
import { ObjectId } from "../utils/object_id";
import { LmsCourse } from "./lms_course";
import { ListSemester, Semester } from "./semester";
export declare const protobufPackage = "class_service";
export interface Homeroom {
    id: ObjectId | undefined;
    archived: boolean;
    semester: Semester | undefined;
    name: string;
    grades: StudentGrade[];
    teacher_ids: ObjectId[];
    student_ids: ObjectId[];
    lms_course?: LmsCourse | undefined;
}
export interface ListHomeroom {
    id: ObjectId | undefined;
    archived: boolean;
    name: string;
    grades: string[];
    semester: ListSemester | undefined;
    teacher_ids: ObjectId[];
    student_ids: ObjectId[];
}
export interface HomeroomList {
    homerooms: ListHomeroom[];
    homerooms_count: number;
}
export declare const Homeroom: MessageFns<Homeroom>;
export declare const ListHomeroom: MessageFns<ListHomeroom>;
export declare const HomeroomList: MessageFns<HomeroomList>;
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
