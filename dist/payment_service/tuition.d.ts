import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { StudentGrade } from "../user_service/student";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "payment_service";
export declare enum DiscountType {
    /** STANDARD - subsidized, teacher, sibling, scholarship */
    STANDARD = "STANDARD",
    /** CUSTOM - financial aid */
    CUSTOM = "CUSTOM",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function discountTypeFromJSON(object: any): DiscountType;
export declare function discountTypeToJSON(object: DiscountType): string;
export declare function discountTypeToNumber(object: DiscountType): number;
export declare enum Scope {
    STUDENT_SCOPE = "STUDENT_SCOPE",
    FAMILY_SCOPE = "FAMILY_SCOPE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function scopeFromJSON(object: any): Scope;
export declare function scopeToJSON(object: Scope): string;
export declare function scopeToNumber(object: Scope): number;
export declare enum DiscountValueType {
    AMOUNT = "AMOUNT",
    PERCENTAGE = "PERCENTAGE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function discountValueTypeFromJSON(object: any): DiscountValueType;
export declare function discountValueTypeToJSON(object: DiscountValueType): string;
export declare function discountValueTypeToNumber(object: DiscountValueType): number;
export declare enum PaymentScheduleType {
    ONE_TIME = "ONE_TIME",
    MONTHLY = "MONTHLY",
    CUSTOM_PAYMENT_SCHEDULE = "CUSTOM_PAYMENT_SCHEDULE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function paymentScheduleTypeFromJSON(object: any): PaymentScheduleType;
export declare function paymentScheduleTypeToJSON(object: PaymentScheduleType): string;
export declare function paymentScheduleTypeToNumber(object: PaymentScheduleType): number;
export declare enum DiscountStackMode {
    /** ADDITIVE - All discounts stack */
    ADDITIVE = "ADDITIVE",
    /** EXCLUSIVE - Only the best in the bucket */
    EXCLUSIVE = "EXCLUSIVE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function discountStackModeFromJSON(object: any): DiscountStackMode;
export declare function discountStackModeToJSON(object: DiscountStackMode): string;
export declare function discountStackModeToNumber(object: DiscountStackMode): number;
export interface TuitionRate {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    school_year: ObjectId | undefined;
    grade?: StudentGrade | undefined;
    amount?: number | undefined;
}
export interface AdditionalFee {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    school_year: ObjectId | undefined;
    name?: string | undefined;
    description?: string | undefined;
    amount?: number | undefined;
    is_optional?: boolean | undefined;
    scope?: Scope | undefined;
}
export interface TuitionDiscount {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    school_year: ObjectId | undefined;
    name?: string | undefined;
    discount_type?: DiscountType | undefined;
    scope?: Scope | undefined;
    value_type?: DiscountValueType | undefined;
    value?: number | undefined;
    description?: string | undefined;
    stack_mode?: DiscountStackMode | undefined;
}
export interface TuitionPlan {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    school_year: ObjectId | undefined;
    name?: string | undefined;
    description?: string | undefined;
    schedule_type?: PaymentScheduleType | undefined;
    /** For monthly plans : the day of the month that the payment is due */
    day_of_month?: number | undefined;
    /** For custom plans */
    installments: PaymentInstallment[];
    archived?: boolean | undefined;
    /** plan dates */
    start_date: Date | undefined;
    end_date: Date | undefined;
}
export interface PaymentInstallment {
    due_date: Date | undefined;
}
export declare const TuitionRate: MessageFns<TuitionRate>;
export declare const AdditionalFee: MessageFns<AdditionalFee>;
export declare const TuitionDiscount: MessageFns<TuitionDiscount>;
export declare const TuitionPlan: MessageFns<TuitionPlan>;
export declare const PaymentInstallment: MessageFns<PaymentInstallment>;
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
