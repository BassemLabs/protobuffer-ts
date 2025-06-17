import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { AdditionalFeeApplication, DiscountApplication } from "./tuition_application";
export declare const protobufPackage = "organization_service";
/** Discount Application messages */
export interface ApplyDiscountRequest {
    context: RequestContext | undefined;
    discount: ObjectId | undefined;
    student?: ObjectId | undefined;
    family?: ObjectId | undefined;
}
export interface RemoveDiscountRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
}
export interface RemoveDiscountResponse {
    success: boolean;
}
export interface ListStudentDiscountsRequest {
    context: RequestContext | undefined;
    student: ObjectId | undefined;
    schoolYear: ObjectId | undefined;
}
export interface ListStudentDiscountsResponse {
    applications: DiscountApplication[];
}
export interface ListFamilyDiscountsRequest {
    context: RequestContext | undefined;
    family: ObjectId | undefined;
    schoolYear: ObjectId | undefined;
}
export interface ListFamilyDiscountsResponse {
    applications: DiscountApplication[];
}
/** Additional Fee Application messages */
export interface ApplyAdditionalFeeRequest {
    context: RequestContext | undefined;
    additionalFee: ObjectId | undefined;
    student?: ObjectId | undefined;
    family?: ObjectId | undefined;
}
export interface RemoveAdditionalFeeRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
}
export interface RemoveAdditionalFeeResponse {
    success: boolean;
}
export interface ListStudentAdditionalFeesRequest {
    context: RequestContext | undefined;
    student: ObjectId | undefined;
    schoolYear: ObjectId | undefined;
}
export interface ListStudentAdditionalFeesResponse {
    applications: AdditionalFeeApplication[];
}
export interface ListFamilyAdditionalFeesRequest {
    context: RequestContext | undefined;
    family: ObjectId | undefined;
    schoolYear: ObjectId | undefined;
}
export interface ListFamilyAdditionalFeesResponse {
    applications: AdditionalFeeApplication[];
}
export declare const ApplyDiscountRequest: MessageFns<ApplyDiscountRequest>;
export declare const RemoveDiscountRequest: MessageFns<RemoveDiscountRequest>;
export declare const RemoveDiscountResponse: MessageFns<RemoveDiscountResponse>;
export declare const ListStudentDiscountsRequest: MessageFns<ListStudentDiscountsRequest>;
export declare const ListStudentDiscountsResponse: MessageFns<ListStudentDiscountsResponse>;
export declare const ListFamilyDiscountsRequest: MessageFns<ListFamilyDiscountsRequest>;
export declare const ListFamilyDiscountsResponse: MessageFns<ListFamilyDiscountsResponse>;
export declare const ApplyAdditionalFeeRequest: MessageFns<ApplyAdditionalFeeRequest>;
export declare const RemoveAdditionalFeeRequest: MessageFns<RemoveAdditionalFeeRequest>;
export declare const RemoveAdditionalFeeResponse: MessageFns<RemoveAdditionalFeeResponse>;
export declare const ListStudentAdditionalFeesRequest: MessageFns<ListStudentAdditionalFeesRequest>;
export declare const ListStudentAdditionalFeesResponse: MessageFns<ListStudentAdditionalFeesResponse>;
export declare const ListFamilyAdditionalFeesRequest: MessageFns<ListFamilyAdditionalFeesRequest>;
export declare const ListFamilyAdditionalFeesResponse: MessageFns<ListFamilyAdditionalFeesResponse>;
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
