import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "class_service";
export interface MarkCategory {
    id: ObjectId | undefined;
    courseId: ObjectId | undefined;
    name: string;
    percentage: number;
}
export interface DetailedMarkCategory {
    id: ObjectId | undefined;
    courseId: ObjectId | undefined;
    name: string;
    /** Original configured percentage */
    percentage: number;
    /** Adjusted percentage after redistribution of non evaluated categories of the course */
    effectivePercentage: number;
}
export interface PersonalizedMarkCategory {
    id: ObjectId | undefined;
    courseId: ObjectId | undefined;
    studentId: ObjectId | undefined;
    name: string;
    percentage: number;
    /** calculated based on the student's marked evaluations */
    effectivePercentageForStudent: number;
}
export declare const MarkCategory: MessageFns<MarkCategory>;
export declare const DetailedMarkCategory: MessageFns<DetailedMarkCategory>;
export declare const PersonalizedMarkCategory: MessageFns<PersonalizedMarkCategory>;
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
