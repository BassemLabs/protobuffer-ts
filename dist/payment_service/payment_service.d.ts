import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { PaymentType } from "./transaction";
export declare const protobufPackage = "payment_service";
export interface HandleWebhookRequest {
    payload: string;
    stripe_signature: string;
}
export interface HandleWebhookResponse {
    success: boolean;
}
export interface GetSetupAutoIntentRequest {
    context: RequestContext | undefined;
}
export interface GetSetupAutoIntentResponse {
    setup_auto_intent_secret: string;
}
export interface VerifyMicroDepositsRequest {
    context: RequestContext | undefined;
    first: number;
    second: number;
}
export interface VerifyMicroDepositsResponse {
    success: boolean;
}
export interface CreatePaymentIntentRequest {
    context: RequestContext | undefined;
    payment_type: PaymentType;
    invoice_id: ObjectId | undefined;
    amount: number;
}
export interface CreatePaymentIntentResponse {
    client_secret: string;
}
export interface OnboardOrganizationStripeAccountRequest {
    context: RequestContext | undefined;
    frontend_url: string;
}
export interface OnboardOrganizationStripeAccountResponse {
    account_link_url: string;
}
export declare const HandleWebhookRequest: MessageFns<HandleWebhookRequest>;
export declare const HandleWebhookResponse: MessageFns<HandleWebhookResponse>;
export declare const GetSetupAutoIntentRequest: MessageFns<GetSetupAutoIntentRequest>;
export declare const GetSetupAutoIntentResponse: MessageFns<GetSetupAutoIntentResponse>;
export declare const VerifyMicroDepositsRequest: MessageFns<VerifyMicroDepositsRequest>;
export declare const VerifyMicroDepositsResponse: MessageFns<VerifyMicroDepositsResponse>;
export declare const CreatePaymentIntentRequest: MessageFns<CreatePaymentIntentRequest>;
export declare const CreatePaymentIntentResponse: MessageFns<CreatePaymentIntentResponse>;
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
