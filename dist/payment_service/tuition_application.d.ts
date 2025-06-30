import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "payment_service";
/** applied to either a student or a family */
export interface DiscountApplication {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    discount: ObjectId | undefined;
    student?: ObjectId | undefined;
    family?: ObjectId | undefined;
}
/** applied to either a student or a family */
export interface AdditionalFeeApplication {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    additionalFee: ObjectId | undefined;
    student?: ObjectId | undefined;
    family?: ObjectId | undefined;
}
export declare const DiscountApplication: MessageFns<DiscountApplication>;
export declare const AdditionalFeeApplication: MessageFns<AdditionalFeeApplication>;
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
