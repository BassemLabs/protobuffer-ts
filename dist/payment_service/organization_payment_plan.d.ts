import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Currency } from "../organization_service/organization";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "payment_service";
export declare enum PaymentInterval {
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    SemiAnnually = "SemiAnnually",
    Annually = "Annually",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function paymentIntervalFromJSON(object: any): PaymentInterval;
export declare function paymentIntervalToJSON(object: PaymentInterval): string;
export declare function paymentIntervalToNumber(object: PaymentInterval): number;
export interface OrganizationPaymentPlan {
    id: ObjectId | undefined;
    name: string;
    description: string;
    currency: Currency;
    isPublic: boolean;
    isActive: boolean;
    upfrontCost: number;
    upfrontCostPaymentInterval: PaymentInterval;
    perStudentCost: number;
    paymentProcessingPercentage: number;
}
export interface OrganizationPlanAccess {
    organizationId: ObjectId | undefined;
    paymentPlanId: ObjectId | undefined;
}
export interface OrganizationPaymentPlanInformation {
    id: ObjectId | undefined;
    organizationId: ObjectId | undefined;
    paymentPlan: ObjectId | undefined;
    deferPerStudentCostToParent: boolean;
    startDate: Date | undefined;
    endDate: Date | undefined;
    trialDays: number;
}
export interface OrganizationPaymentPlanWithInfo {
    paymentPlan: OrganizationPaymentPlan | undefined;
    paymentPlanInfo: OrganizationPaymentPlanInformation | undefined;
}
export declare const OrganizationPaymentPlan: MessageFns<OrganizationPaymentPlan>;
export declare const OrganizationPlanAccess: MessageFns<OrganizationPlanAccess>;
export declare const OrganizationPaymentPlanInformation: MessageFns<OrganizationPaymentPlanInformation>;
export declare const OrganizationPaymentPlanWithInfo: MessageFns<OrganizationPaymentPlanWithInfo>;
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
