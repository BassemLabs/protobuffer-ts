import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { FeeType, InvoiceType, ProcessingFee } from "./processing_fees";
import { DiscountValueType } from "./tuition";
export declare const protobufPackage = "payment_service";
/** single processing fee */
export interface ListProcessingFeesRequest {
    context: RequestContext | undefined;
    archived: boolean;
}
export interface ListProcessingFeesResponse {
    fees: ProcessingFee[];
}
export interface CreateProcessingFeeRequest {
    context: RequestContext | undefined;
    invoice_type: InvoiceType;
    fee_type: FeeType;
    value_type: DiscountValueType;
    value: number;
    cap_amount?: number | undefined;
}
export interface GetProcessingFeeRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
}
export interface UpdateProcessingFeeRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
    invoice_type: InvoiceType;
    fee_type: FeeType;
    value_type: DiscountValueType;
    value: number;
    cap_amount?: number | undefined;
}
export interface ArchiveProcessingFeeRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
}
export interface UnarchiveProcessingFeeRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
}
export interface GetActiveProcessingFeesRequest {
    context: RequestContext | undefined;
    invoice_type: InvoiceType;
}
/** organization level */
export interface GetOrganizationProcessingFeeRequest {
    context: RequestContext | undefined;
}
export interface UpdateOrganizationProcessingFeeRequest {
    context: RequestContext | undefined;
    tuition_invoice_fees_enabled: boolean;
    non_tuition_invoice_fees_enabled: boolean;
}
export declare const ListProcessingFeesRequest: MessageFns<ListProcessingFeesRequest>;
export declare const ListProcessingFeesResponse: MessageFns<ListProcessingFeesResponse>;
export declare const CreateProcessingFeeRequest: MessageFns<CreateProcessingFeeRequest>;
export declare const GetProcessingFeeRequest: MessageFns<GetProcessingFeeRequest>;
export declare const UpdateProcessingFeeRequest: MessageFns<UpdateProcessingFeeRequest>;
export declare const ArchiveProcessingFeeRequest: MessageFns<ArchiveProcessingFeeRequest>;
export declare const UnarchiveProcessingFeeRequest: MessageFns<UnarchiveProcessingFeeRequest>;
export declare const GetActiveProcessingFeesRequest: MessageFns<GetActiveProcessingFeesRequest>;
export declare const GetOrganizationProcessingFeeRequest: MessageFns<GetOrganizationProcessingFeeRequest>;
export declare const UpdateOrganizationProcessingFeeRequest: MessageFns<UpdateOrganizationProcessingFeeRequest>;
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
