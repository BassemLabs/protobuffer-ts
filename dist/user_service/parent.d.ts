import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { PhoneNumber } from "../utils/phone_number";
export declare const protobufPackage = "user_service";
/** Parent payment information structure */
export interface ParentPaymentInformation {
    enable_auto_pay: boolean;
    /** Setup Intent ID - this is only set when an action is required */
    setup_intent_requires_action?: string | undefined;
    setup_intent_failure?: string | undefined;
    default_payment_method_id?: string | undefined;
    default_payment_method_type?: string | undefined;
    payment_method_brand?: string | undefined;
    payment_method_last4?: string | undefined;
    /** (for cards only) */
    payment_method_expiry?: string | undefined;
    /** (for Banks only) */
    payment_method_mandate_id?: string | undefined;
}
/** Full parent model with all fields */
export interface Parent {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    /** If this is null, it means that the parent never signed-in */
    firebase_user_id?: string | undefined;
    name: string;
    email: string;
    phone?: PhoneNumber | undefined;
    stripe_customer_id?: string | undefined;
    payment_information: ParentPaymentInformation | undefined;
}
/** Parent profile data for updates */
export interface ParentProfile {
    name: string;
    email: string;
    phone?: PhoneNumber | undefined;
}
export declare const ParentPaymentInformation: MessageFns<ParentPaymentInformation>;
export declare const Parent: MessageFns<Parent>;
export declare const ParentProfile: MessageFns<ParentProfile>;
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
