import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { PaymentType } from "./transaction";
export declare const protobufPackage = "payment_service";
export declare enum SetupAutoPaymentMethod {
    SETUP_AUTO_PAYMENT_METHOD_CARD = "SETUP_AUTO_PAYMENT_METHOD_CARD",
    SETUP_AUTO_PAYMENT_METHOD_ACSS_DEBIT = "SETUP_AUTO_PAYMENT_METHOD_ACSS_DEBIT",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function setupAutoPaymentMethodFromJSON(object: any): SetupAutoPaymentMethod;
export declare function setupAutoPaymentMethodToJSON(object: SetupAutoPaymentMethod): string;
export declare function setupAutoPaymentMethodToNumber(object: SetupAutoPaymentMethod): number;
export declare enum BankVerificationStatus {
    BANK_VERIFICATION_STATUS_UNSPECIFIED = "BANK_VERIFICATION_STATUS_UNSPECIFIED",
    BANK_VERIFICATION_STATUS_REQUIRES_ACTION = "BANK_VERIFICATION_STATUS_REQUIRES_ACTION",
    BANK_VERIFICATION_STATUS_SUCCEEDED = "BANK_VERIFICATION_STATUS_SUCCEEDED",
    BANK_VERIFICATION_STATUS_REQUIRES_PAYMENT_METHOD = "BANK_VERIFICATION_STATUS_REQUIRES_PAYMENT_METHOD",
    BANK_VERIFICATION_STATUS_PROCESSING = "BANK_VERIFICATION_STATUS_PROCESSING",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function bankVerificationStatusFromJSON(object: any): BankVerificationStatus;
export declare function bankVerificationStatusToJSON(object: BankVerificationStatus): string;
export declare function bankVerificationStatusToNumber(object: BankVerificationStatus): number;
export declare enum MicrodepositType {
    MICRODEPOSIT_TYPE_UNSPECIFIED = "MICRODEPOSIT_TYPE_UNSPECIFIED",
    MICRODEPOSIT_TYPE_AMOUNTS = "MICRODEPOSIT_TYPE_AMOUNTS",
    MICRODEPOSIT_TYPE_DESCRIPTOR_CODE = "MICRODEPOSIT_TYPE_DESCRIPTOR_CODE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function microdepositTypeFromJSON(object: any): MicrodepositType;
export declare function microdepositTypeToJSON(object: MicrodepositType): string;
export declare function microdepositTypeToNumber(object: MicrodepositType): number;
export interface HandleWebhookRequest {
    payload?: string | undefined;
    stripe_signature?: string | undefined;
}
export interface HandleWebhookResponse {
    success?: boolean | undefined;
}
export interface GetSetupAutoIntentRequest {
    context: RequestContext | undefined;
    setup_payment_method?: SetupAutoPaymentMethod | undefined;
}
export interface GetSetupAutoIntentResponse {
    setup_auto_intent_secret?: string | undefined;
}
export interface CreateAutoPayBankSetupSessionRequest {
    context: RequestContext | undefined;
}
export interface CreateAutoPayBankSetupSessionResponse {
    checkout_url?: string | undefined;
}
export interface VerifyMicroDepositsRequest {
    context: RequestContext | undefined;
    first?: number | undefined;
    second?: number | undefined;
}
export interface VerifyBankAccountRequest {
    context: RequestContext | undefined;
    amounts?: MicrodepositAmounts | undefined;
    descriptor_code?: string | undefined;
}
export interface MicrodepositAmounts {
    first?: number | undefined;
    second?: number | undefined;
}
export interface GetBankVerificationRequest {
    context: RequestContext | undefined;
}
export interface GetBankVerificationResponse {
    status?: BankVerificationStatus | undefined;
    microdeposit_type?: MicrodepositType | undefined;
}
export interface VerifyMicroDepositsResponse {
    success?: boolean | undefined;
}
export interface CreatePaymentIntentRequest {
    context: RequestContext | undefined;
    payment_type?: PaymentType | undefined;
    invoice_id: ObjectId | undefined;
    amount?: number | undefined;
}
export interface CreatePaymentIntentResponse {
    client_secret?: string | undefined;
}
export interface OnboardOrganizationStripeAccountRequest {
    context: RequestContext | undefined;
    frontend_url?: string | undefined;
}
export interface OnboardOrganizationStripeAccountResponse {
    account_link_url?: string | undefined;
}
export declare const HandleWebhookRequest: MessageFns<HandleWebhookRequest>;
export declare const HandleWebhookResponse: MessageFns<HandleWebhookResponse>;
export declare const GetSetupAutoIntentRequest: MessageFns<GetSetupAutoIntentRequest>;
export declare const GetSetupAutoIntentResponse: MessageFns<GetSetupAutoIntentResponse>;
export declare const CreateAutoPayBankSetupSessionRequest: MessageFns<CreateAutoPayBankSetupSessionRequest>;
export declare const CreateAutoPayBankSetupSessionResponse: MessageFns<CreateAutoPayBankSetupSessionResponse>;
export declare const VerifyMicroDepositsRequest: MessageFns<VerifyMicroDepositsRequest>;
export declare const VerifyBankAccountRequest: MessageFns<VerifyBankAccountRequest>;
export declare const MicrodepositAmounts: MessageFns<MicrodepositAmounts>;
export declare const GetBankVerificationRequest: MessageFns<GetBankVerificationRequest>;
export declare const GetBankVerificationResponse: MessageFns<GetBankVerificationResponse>;
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
