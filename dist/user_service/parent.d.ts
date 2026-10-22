import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { PhoneNumber } from "../utils/phone_number";
import { ApprovalStatus, CustomFieldsGroup } from "./custom_field";
import { FamilyContact } from "./family";
export declare const protobufPackage = "user_service";
export declare enum ParentProfileCompletionActionType {
    PROFILE_NAME = "PROFILE_NAME",
    PROFILE_PHONE = "PROFILE_PHONE",
    PROFILE_EMERGENCY_CONTACT = "PROFILE_EMERGENCY_CONTACT",
    PROFILE_CUSTOM_FIELDS = "PROFILE_CUSTOM_FIELDS",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function parentProfileCompletionActionTypeFromJSON(object: any): ParentProfileCompletionActionType;
export declare function parentProfileCompletionActionTypeToJSON(object: ParentProfileCompletionActionType): string;
export declare function parentProfileCompletionActionTypeToNumber(object: ParentProfileCompletionActionType): number;
/** Parent payment information structure */
export interface ParentPaymentInformation {
    enable_auto_pay?: boolean | undefined;
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
    name?: string | undefined;
    email?: string | undefined;
    phone?: PhoneNumber | undefined;
    stripe_customer_id?: string | undefined;
    payment_information: ParentPaymentInformation | undefined;
}
/** Parent profile data for updates */
export interface ParentProfile {
    name?: string | undefined;
    email?: string | undefined;
    phone?: PhoneNumber | undefined;
}
/**
 * Summaries carry only the data needed for focused steps; custom-field entries
 * are loaded when their group is opened rather than on every authenticated entry.
 */
export interface ParentProfileCompletion {
    parent_id: ObjectId | undefined;
    parent_name?: string | undefined;
    parent_phone?: PhoneNumber | undefined;
    actions: ParentProfileCompletionAction[];
}
export interface ParentProfileCompletionAction {
    action_type?: ParentProfileCompletionActionType | undefined;
    title?: string | undefined;
    family_id?: ObjectId | undefined;
    group_id?: ObjectId | undefined;
    rejection_message?: string | undefined;
    emergency_contact?: FamilyContact | undefined;
    family_name?: string | undefined;
    custom_fields_group?: CustomFieldsGroup | undefined;
    group_status?: ApprovalStatus | undefined;
}
export declare const ParentPaymentInformation: MessageFns<ParentPaymentInformation>;
export declare const Parent: MessageFns<Parent>;
export declare const ParentProfile: MessageFns<ParentProfile>;
export declare const ParentProfileCompletion: MessageFns<ParentProfileCompletion>;
export declare const ParentProfileCompletionAction: MessageFns<ParentProfileCompletionAction>;
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
