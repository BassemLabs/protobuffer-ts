import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "class_service";
/** Student published evaluation entry with course & evaluation information */
export interface StudentPublishedEvaluationEntry {
    entryId: ObjectId | undefined;
    evaluationId: ObjectId | undefined;
    studentId: ObjectId | undefined;
    mark?: number | undefined;
    courseName: string;
    courseId: ObjectId | undefined;
    evaluationName: string;
    evaluationWeight: number;
    totalMark: number;
    date: Date | undefined;
    lastPublishedAt?: Date | undefined;
    categoryId: ObjectId | undefined;
    categoryName: string;
    markCategoryWeight: number;
}
export interface StudentCourseMarkOverview {
    courseId: ObjectId | undefined;
    courseName: string;
    courseCode: string;
    semesterId: ObjectId | undefined;
    semesterName: string;
    /** the mark for published evaluations for this course through all categories */
    studentMark?: number | undefined;
}
export interface CourseEvaluations {
    studentMark?: number | undefined;
    courseEvaluations: StudentPublishedEvaluationEntry[];
}
export declare const StudentPublishedEvaluationEntry: MessageFns<StudentPublishedEvaluationEntry>;
export declare const StudentCourseMarkOverview: MessageFns<StudentCourseMarkOverview>;
export declare const CourseEvaluations: MessageFns<CourseEvaluations>;
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
