import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { DiscountValueType } from "./tuition";
export declare const protobufPackage = "payment_service";
export declare enum FeeType {
    CARD_FEE = "CARD_FEE",
    BANK_FEE = "BANK_FEE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function feeTypeFromJSON(object: any): FeeType;
export declare function feeTypeToJSON(object: FeeType): string;
export declare function feeTypeToNumber(object: FeeType): number;
export declare enum InvoiceType {
    TUITION = "TUITION",
    NON_TUITION = "NON_TUITION",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function invoiceTypeFromJSON(object: any): InvoiceType;
export declare function invoiceTypeToJSON(object: InvoiceType): string;
export declare function invoiceTypeToNumber(object: InvoiceType): number;
/** Configuration for a single processing fee (card or bank) */
export interface ProcessingFee {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    invoice_type: InvoiceType;
    fee_type: FeeType;
    value_type: DiscountValueType;
    value: number;
    cap_amount?: number | undefined;
    archived: boolean;
}
/** Organization-level processing fees configuration */
export interface OrganizationProcessingFee {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    tuition_invoice_fees_enabled: boolean;
    non_tuition_invoice_fees_enabled: boolean;
}
export declare const ProcessingFee: MessageFns<ProcessingFee>;
export declare const OrganizationProcessingFee: MessageFns<OrganizationProcessingFee>;
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
