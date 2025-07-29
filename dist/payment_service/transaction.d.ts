import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Currency } from "../organization_service/organization";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "payment_service_transaction";
export declare enum TransactionStatus {
    Created = "Created",
    Declined = "Declined",
    RefundedDoNotUseAnymore = "RefundedDoNotUseAnymore",
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
export declare enum RefundTransactionStatus {
    Pending = "Pending",
    Succeeded = "Succeeded",
    Failed = "Failed",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function refundTransactionStatusFromJSON(object: any): RefundTransactionStatus;
export declare function refundTransactionStatusToJSON(object: RefundTransactionStatus): string;
export declare function refundTransactionStatusToNumber(object: RefundTransactionStatus): number;
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
export interface RefundTransaction {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    /** The Transaction this Refund is linked to */
    transactionId: ObjectId | undefined;
    /**
     * Optional: If this is a stripe refund, this will include the stripe refund id
     *    Note: For a RefundTransaction to be a stripe refund, the main transaction must be a stripe transaction
     */
    stripeRefundId?: string | undefined;
    /** Status of the refund */
    status: RefundTransactionStatus;
    /** Payment type of the refund, is it stripe or manual payments? */
    paymentType: PaymentType;
    date: Date | undefined;
    /** Amount of the refund */
    amount: number;
    /** Reason for the refund */
    reason?: string | undefined;
}
export declare const Transaction: MessageFns<Transaction>;
export declare const RefundTransaction: MessageFns<RefundTransaction>;
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
