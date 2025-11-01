import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "class_service";
export interface Evaluation {
    id: ObjectId | undefined;
    courseId: ObjectId | undefined;
    name: string;
    total: number;
    weight: number;
    /** YYYY-MM-DD format for NaiveDate */
    date: string;
    markCategory: ObjectId | undefined;
    visibleToParentsAndStudents: boolean;
}
export interface DetailedEvaluation {
    id: ObjectId | undefined;
    courseId: ObjectId | undefined;
    name: string;
    total: number;
    weight: number;
    /** YYYY-MM-DD format for NaiveDate */
    date: string;
    markCategory: ObjectId | undefined;
    visibleToParentsAndStudents: boolean;
    /** Percentage contribution of this evaluation to the final course mark (0-100) */
    evaluationContributionToFinalMark: number;
}
export interface PersonalizedEvaluation {
    id: ObjectId | undefined;
    studentId: ObjectId | undefined;
    courseId: ObjectId | undefined;
    name: string;
    total: number;
    weight: number;
    /** YYYY-MM-DD format for NaiveDate */
    date: string;
    markCategory: ObjectId | undefined;
    visibleToParentsAndStudents: boolean;
    /** calculated based on the student's marked evaluations */
    evaluationContributionToStudentFinalMark: number;
}
export declare const Evaluation: MessageFns<Evaluation>;
export declare const DetailedEvaluation: MessageFns<DetailedEvaluation>;
export declare const PersonalizedEvaluation: MessageFns<PersonalizedEvaluation>;
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
