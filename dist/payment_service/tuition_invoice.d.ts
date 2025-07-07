import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { DiscountValueType, PaymentInstallment, PaymentScheduleType, Scope } from "./tuition";
export declare const protobufPackage = "payment_service";
export declare enum LineType {
    BASE_RATE = "BASE_RATE",
    ADD_FEE = "ADD_FEE",
    DISCOUNT = "DISCOUNT",
    BASSEM_LABS_FEE = "BASSEM_LABS_FEE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function lineTypeFromJSON(object: any): LineType;
export declare function lineTypeToJSON(object: LineType): string;
export declare function lineTypeToNumber(object: LineType): number;
export interface TuitionPlanSnapshot {
    name: string;
    scheduleType: PaymentScheduleType;
    numberOfMonths?: number | undefined;
    installments: PaymentInstallment[];
}
export interface TuitionInvoiceLineItem {
    id: ObjectId | undefined;
    lineType: LineType;
    scope: Scope;
    /** present when scope = STUDENT_SCOPE */
    student?: ObjectId | undefined;
    name: string;
    /** AMOUNT or PERCENTAGE when type = DISCOUNT */
    valueType: DiscountValueType;
    /** always positive */
    amount: number;
}
export interface TuitionInvoice {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    schoolYear: ObjectId | undefined;
    family: ObjectId | undefined;
    tuitionPlan: TuitionPlanSnapshot | undefined;
    lineItems: TuitionInvoiceLineItem[];
    totalGross: number;
    totalDiscounts: number;
    totalNet: number;
}
export declare const TuitionPlanSnapshot: MessageFns<TuitionPlanSnapshot>;
export declare const TuitionInvoiceLineItem: MessageFns<TuitionInvoiceLineItem>;
export declare const TuitionInvoice: MessageFns<TuitionInvoice>;
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
