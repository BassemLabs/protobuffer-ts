import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { AuditPrincipal } from "../utils/audit_actor";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { InvoiceResponse } from "./invoice";
export declare const protobufPackage = "payment_service";
export declare enum FamilyBalanceEntryType {
    FAMILY_BALANCE_ENTRY_TYPE_UNSPECIFIED = "FAMILY_BALANCE_ENTRY_TYPE_UNSPECIFIED",
    FAMILY_BALANCE_PAYMENT = "FAMILY_BALANCE_PAYMENT",
    FAMILY_BALANCE_APPLIED = "FAMILY_BALANCE_APPLIED",
    FAMILY_BALANCE_APPLICATION_REVERSED = "FAMILY_BALANCE_APPLICATION_REVERSED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function familyBalanceEntryTypeFromJSON(object: any): FamilyBalanceEntryType;
export declare function familyBalanceEntryTypeToJSON(object: FamilyBalanceEntryType): string;
export declare function familyBalanceEntryTypeToNumber(object: FamilyBalanceEntryType): number;
export interface FamilyBalanceEntry {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    family: ObjectId | undefined;
    amount?: number | undefined;
    entry_type?: FamilyBalanceEntryType | undefined;
    invoice: ObjectId | undefined;
    transaction: ObjectId | undefined;
    school_year: ObjectId | undefined;
    created_at: Date | undefined;
    /** Staff-only audit metadata. Parent-facing responses omit this field. */
    created_by?: AuditPrincipal | undefined;
}
export interface FamilyBalanceSummary {
    family: ObjectId | undefined;
    available_balance?: number | undefined;
    entries: FamilyBalanceEntry[];
    total_entries?: number | undefined;
}
export interface CreateFamilyBalanceInvoiceRequest {
    context: RequestContext | undefined;
    family: ObjectId | undefined;
    school_year: ObjectId | undefined;
    amount?: number | undefined;
}
export interface GetFamilyBalanceRequest {
    context: RequestContext | undefined;
    family: ObjectId | undefined;
    page?: number | undefined;
    page_size?: number | undefined;
}
export interface ApplyFamilyBalanceRequest {
    context: RequestContext | undefined;
    family: ObjectId | undefined;
    school_year: ObjectId | undefined;
    amount?: number | undefined;
}
export interface ApplyFamilyBalanceResponse {
    balance: FamilyBalanceSummary | undefined;
    invoices: InvoiceResponse[];
    applied_amount?: number | undefined;
}
export declare const FamilyBalanceEntry: MessageFns<FamilyBalanceEntry>;
export declare const FamilyBalanceSummary: MessageFns<FamilyBalanceSummary>;
export declare const CreateFamilyBalanceInvoiceRequest: MessageFns<CreateFamilyBalanceInvoiceRequest>;
export declare const GetFamilyBalanceRequest: MessageFns<GetFamilyBalanceRequest>;
export declare const ApplyFamilyBalanceRequest: MessageFns<ApplyFamilyBalanceRequest>;
export declare const ApplyFamilyBalanceResponse: MessageFns<ApplyFamilyBalanceResponse>;
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
