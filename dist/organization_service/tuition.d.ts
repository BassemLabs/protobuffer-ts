import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "organization_service";
export declare enum DiscountType {
    /** STANDARD - subsidized, teacher, sibling, scholarship */
    STANDARD = "STANDARD",
    /** CUSTOM - financial aid */
    CUSTOM = "CUSTOM",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function discountTypeFromJSON(object: any): DiscountType;
export declare function discountTypeToJSON(object: DiscountType): string;
export declare function discountTypeToNumber(object: DiscountType): number;
export declare enum DiscountScope {
    STUDENT_DISCOUNT = "STUDENT_DISCOUNT",
    FAMILY_DISCOUNT = "FAMILY_DISCOUNT",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function discountScopeFromJSON(object: any): DiscountScope;
export declare function discountScopeToJSON(object: DiscountScope): string;
export declare function discountScopeToNumber(object: DiscountScope): number;
export declare enum DiscountValueType {
    AMOUNT = "AMOUNT",
    PERCENTAGE = "PERCENTAGE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function discountValueTypeFromJSON(object: any): DiscountValueType;
export declare function discountValueTypeToJSON(object: DiscountValueType): string;
export declare function discountValueTypeToNumber(object: DiscountValueType): number;
export interface TuitionRate {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    schoolYear: ObjectId | undefined;
    grade: string;
    amount: number;
}
export interface AdditionalFee {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    schoolYear: ObjectId | undefined;
    name: string;
    description: string;
    amount: number;
    isOptional: boolean;
}
export interface TuitionDiscount {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    schoolYear: ObjectId | undefined;
    name: string;
    discountType: DiscountType;
    scope: DiscountScope;
    valueType: DiscountValueType;
    value: number;
    description: string;
}
export declare const TuitionRate: MessageFns<TuitionRate>;
export declare const AdditionalFee: MessageFns<AdditionalFee>;
export declare const TuitionDiscount: MessageFns<TuitionDiscount>;
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
