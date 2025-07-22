import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Currency } from "../organization_service/organization";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "payment_service_transaction";
export declare enum TransactionStatus {
    Created = "Created",
    Declined = "Declined",
    Refunded = "Refunded",
    Processing = "Processing",
    Paid = "Paid",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function transactionStatusFromJSON(object: any): TransactionStatus;
export declare function transactionStatusToJSON(object: TransactionStatus): string;
export declare function transactionStatusToNumber(object: TransactionStatus): number;
export declare enum PaymentType {
    Stripe = "Stripe",
    Cash = "Cash",
    Cheque = "Cheque",
    Card = "Card",
    Other = "Other",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function paymentTypeFromJSON(object: any): PaymentType;
export declare function paymentTypeToJSON(object: PaymentType): string;
export declare function paymentTypeToNumber(object: PaymentType): number;
export interface Transaction {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    stripePaymentIntentId: string;
    currency: Currency;
    status: TransactionStatus;
    paymentType: PaymentType;
    date: Date | undefined;
    invoice: ObjectId | undefined;
    amount: number;
    declinedReason?: string | undefined;
}
export declare const Transaction: MessageFns<Transaction>;
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
