import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { DayOfWeek } from "../google/type/dayofweek";
import { ObjectId } from "../utils/object_id";
import { OnboardingSettings } from "./onboarding_settings";
import { InvoiceSettings } from "./organization_invoice_settings";
import { OrganizationProfileSettings } from "./organization_profile_settings";
export declare const protobufPackage = "organization_service";
export declare enum Currency {
    USD = "USD",
    CAD = "CAD",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function currencyFromJSON(object: any): Currency;
export declare function currencyToJSON(object: Currency): string;
export declare function currencyToNumber(object: Currency): number;
export interface Organization {
    id: ObjectId | undefined;
    name: string;
    default_domain: string;
    domains: string[];
    organization_profile_settings: OrganizationProfileSettings | undefined;
    onboarding_settings: OnboardingSettings | undefined;
    active_school_year: SchoolYear | undefined;
    coming_school_year?: SchoolYear | undefined;
    opened_reregistration_for_coming_school_year: boolean;
    country_code?: string | undefined;
    payment_information: PaymentInformation | undefined;
    invoice_settings: InvoiceSettings | undefined;
    login_id: string;
    main_address: string;
    weekend_days: DayOfWeek[];
    timezone: string;
}
export interface SchoolYear {
    id: ObjectId | undefined;
    organization_id: ObjectId | undefined;
    name: string;
    start_date: Date | undefined;
    end_date: Date | undefined;
    is_open_for_registration?: boolean | undefined;
}
export interface PaymentInformation {
    stripe_account_id?: string | undefined;
    account_currency?: Currency | undefined;
    stripe_payouts_enabled: boolean;
    stripe_details_submitted: boolean;
    stripe_charges_enabled: boolean;
    /** If true, autopay is disabled organization-wide (will override family & invoice auto pay settings) */
    auto_pay_disabled?: boolean | undefined;
    /** Auto payment retry configuratio */
    auto_pay_retry_config: AutoPayRetryConfig | undefined;
}
/** Configuration for auto-payment retry behavior */
export interface AutoPayRetryConfig {
    /** Maximum number of retry attempts (default: 3, max: 10) */
    max_retries: number;
    /** Retry interval in hours - retries every N hours until max_retries (default: 24) */
    retry_interval_hours: number;
}
export declare const Organization: MessageFns<Organization>;
export declare const SchoolYear: MessageFns<SchoolYear>;
export declare const PaymentInformation: MessageFns<PaymentInformation>;
export declare const AutoPayRetryConfig: MessageFns<AutoPayRetryConfig>;
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
