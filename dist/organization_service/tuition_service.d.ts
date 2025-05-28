import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { AdditionalFee, DiscountScope, DiscountType, DiscountValueType, TuitionDiscount, TuitionRate } from "./tuition";
export declare const protobufPackage = "organization_service";
/** TuitionRate messages */
export interface GetTuitionRateRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
}
export interface ListTuitionRatesRequest {
    context: RequestContext | undefined;
    schoolYear: ObjectId | undefined;
}
export interface ListTuitionRatesResponse {
    rates: TuitionRate[];
}
export interface GradeAmount {
    grade: string;
    amount: number;
}
export interface UpsertTuitionRatesRequest {
    context: RequestContext | undefined;
    schoolYear: ObjectId | undefined;
    gradeAmounts: GradeAmount[];
}
export interface DeleteTuitionRateRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
}
export interface DeleteTuitionRateResponse {
    success: boolean;
}
/** AdditionalFee messages */
export interface GetAdditionalFeeRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
}
export interface ListAdditionalFeesRequest {
    context: RequestContext | undefined;
    schoolYear: ObjectId | undefined;
}
export interface ListAdditionalFeesResponse {
    fees: AdditionalFee[];
}
export interface CreateAdditionalFeeRequest {
    context: RequestContext | undefined;
    schoolYear: ObjectId | undefined;
    name: string;
    description: string;
    amount: number;
    isOptional: boolean;
}
export interface UpdateAdditionalFeeRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
    name: string;
    description: string;
    amount: number;
    isOptional: boolean;
}
export interface DeleteAdditionalFeeRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
}
export interface DeleteAdditionalFeeResponse {
    success: boolean;
}
/** TuitionDiscount messages */
export interface GetTuitionDiscountRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
}
export interface ListTuitionDiscountsRequest {
    context: RequestContext | undefined;
    schoolYear: ObjectId | undefined;
}
export interface ListTuitionDiscountsResponse {
    discounts: TuitionDiscount[];
}
export interface CreateTuitionDiscountRequest {
    context: RequestContext | undefined;
    schoolYear: ObjectId | undefined;
    name: string;
    discountType: DiscountType;
    scope: DiscountScope;
    valueType: DiscountValueType;
    value: number;
    description: string;
}
export interface UpdateTuitionDiscountRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
    name: string;
    discountType: DiscountType;
    scope: DiscountScope;
    valueType: DiscountValueType;
    value: number;
    description: string;
}
export interface DeleteTuitionDiscountRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
}
export interface DeleteTuitionDiscountResponse {
    success: boolean;
}
export declare const GetTuitionRateRequest: MessageFns<GetTuitionRateRequest>;
export declare const ListTuitionRatesRequest: MessageFns<ListTuitionRatesRequest>;
export declare const ListTuitionRatesResponse: MessageFns<ListTuitionRatesResponse>;
export declare const GradeAmount: MessageFns<GradeAmount>;
export declare const UpsertTuitionRatesRequest: MessageFns<UpsertTuitionRatesRequest>;
export declare const DeleteTuitionRateRequest: MessageFns<DeleteTuitionRateRequest>;
export declare const DeleteTuitionRateResponse: MessageFns<DeleteTuitionRateResponse>;
export declare const GetAdditionalFeeRequest: MessageFns<GetAdditionalFeeRequest>;
export declare const ListAdditionalFeesRequest: MessageFns<ListAdditionalFeesRequest>;
export declare const ListAdditionalFeesResponse: MessageFns<ListAdditionalFeesResponse>;
export declare const CreateAdditionalFeeRequest: MessageFns<CreateAdditionalFeeRequest>;
export declare const UpdateAdditionalFeeRequest: MessageFns<UpdateAdditionalFeeRequest>;
export declare const DeleteAdditionalFeeRequest: MessageFns<DeleteAdditionalFeeRequest>;
export declare const DeleteAdditionalFeeResponse: MessageFns<DeleteAdditionalFeeResponse>;
export declare const GetTuitionDiscountRequest: MessageFns<GetTuitionDiscountRequest>;
export declare const ListTuitionDiscountsRequest: MessageFns<ListTuitionDiscountsRequest>;
export declare const ListTuitionDiscountsResponse: MessageFns<ListTuitionDiscountsResponse>;
export declare const CreateTuitionDiscountRequest: MessageFns<CreateTuitionDiscountRequest>;
export declare const UpdateTuitionDiscountRequest: MessageFns<UpdateTuitionDiscountRequest>;
export declare const DeleteTuitionDiscountRequest: MessageFns<DeleteTuitionDiscountRequest>;
export declare const DeleteTuitionDiscountResponse: MessageFns<DeleteTuitionDiscountResponse>;
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
