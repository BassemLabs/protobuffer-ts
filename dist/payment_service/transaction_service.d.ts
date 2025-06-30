import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Currency } from "../organization_service/organization";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { PaymentType, Transaction } from "./transaction";
export declare const protobufPackage = "payment_service_transaction";
export interface NewModelRequest {
    context: RequestContext | undefined;
    currency: Currency;
    paymentType: PaymentType;
    invoiceId: ObjectId | undefined;
    amount: number;
}
export interface HandlePaymentProcessingRequest {
    context: RequestContext | undefined;
    stripePaymentIntentId: string;
}
export interface HandlePaymentSuccessRequest {
    context: RequestContext | undefined;
    stripePaymentIntentId: string;
    amountReceived: number;
}
export interface HandlePaymentFailedRequest {
    context: RequestContext | undefined;
    stripePaymentIntentId: string;
}
export interface GetPaidTransactionRequest {
    context: RequestContext | undefined;
    user: ObjectId | undefined;
    description: string;
}
export interface GetTransactionsRequest {
    context: RequestContext | undefined;
    user: ObjectId | undefined;
}
export interface GetTransactionsResponse {
    transactions: Transaction[];
}
export interface CreateStripeTransactionRequest {
    context: RequestContext | undefined;
    paymentType: PaymentType;
    currency: Currency;
    invoiceId: ObjectId | undefined;
    amount: number;
    stripePaymentIntentId: string;
}
export interface CreateManualTransactionRequest {
    context: RequestContext | undefined;
    paymentType: PaymentType;
    invoiceId: ObjectId | undefined;
    amount: number;
}
export interface NewPaymentRequest {
    context: RequestContext | undefined;
    invoiceId: ObjectId | undefined;
    paymentType: PaymentType;
    amount: number;
}
export interface NewPaymentResponse {
    clientSecret: string;
}
export interface OnboardOrganizationStripeAccountRequest {
    context: RequestContext | undefined;
}
export interface OnboardOrganizationStripeAccountResponse {
    accountLink: string;
}
export declare const NewModelRequest: MessageFns<NewModelRequest>;
export declare const HandlePaymentProcessingRequest: MessageFns<HandlePaymentProcessingRequest>;
export declare const HandlePaymentSuccessRequest: MessageFns<HandlePaymentSuccessRequest>;
export declare const HandlePaymentFailedRequest: MessageFns<HandlePaymentFailedRequest>;
export declare const GetPaidTransactionRequest: MessageFns<GetPaidTransactionRequest>;
export declare const GetTransactionsRequest: MessageFns<GetTransactionsRequest>;
export declare const GetTransactionsResponse: MessageFns<GetTransactionsResponse>;
export declare const CreateStripeTransactionRequest: MessageFns<CreateStripeTransactionRequest>;
export declare const CreateManualTransactionRequest: MessageFns<CreateManualTransactionRequest>;
export declare const NewPaymentRequest: MessageFns<NewPaymentRequest>;
export declare const NewPaymentResponse: MessageFns<NewPaymentResponse>;
export declare const OnboardOrganizationStripeAccountRequest: MessageFns<OnboardOrganizationStripeAccountRequest>;
export declare const OnboardOrganizationStripeAccountResponse: MessageFns<OnboardOrganizationStripeAccountResponse>;
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
