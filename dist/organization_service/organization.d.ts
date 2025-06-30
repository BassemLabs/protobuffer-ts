import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { OnboardingSettings } from "./onboarding_settings";
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
    defaultDomain: string;
    domains: string[];
    organizationProfileSettings: OrganizationProfileSettings | undefined;
    onboardingSettings: OnboardingSettings | undefined;
    activeSchoolYear: SchoolYear | undefined;
    comingSchoolYear?: SchoolYear | undefined;
    openedReregistrationForComingSchoolYear: boolean;
    countryCode?: string | undefined;
    paymentInformation: PaymentInformation | undefined;
}
export interface SchoolYear {
    id: ObjectId | undefined;
    organizationId: ObjectId | undefined;
    name: string;
    startDate: Date | undefined;
    endDate: Date | undefined;
    isOpenForRegistration?: boolean | undefined;
}
export interface PaymentInformation {
    stripeAccountId?: string | undefined;
    accountCurrency?: Currency | undefined;
    stripePayoutsEnabled: boolean;
    stripeDetailsSubmitted: boolean;
    stripeChargesEnabled: boolean;
}
export declare const Organization: MessageFns<Organization>;
export declare const SchoolYear: MessageFns<SchoolYear>;
export declare const PaymentInformation: MessageFns<PaymentInformation>;
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
