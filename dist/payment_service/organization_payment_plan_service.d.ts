import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Currency } from "../organization_service/organization";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { OrganizationPaymentPlan, OrganizationPaymentPlanInformation, OrganizationPlanAccess, PaymentInterval } from "./organization_payment_plan";
export declare const protobufPackage = "payment_service";
export interface GetAllPaymentPlansRequest {
    context: RequestContext | undefined;
}
export interface GetPaymentPlansResponse {
    payment_plans: OrganizationPaymentPlan[];
}
export interface CreatePaymentPlanRequest {
    context: RequestContext | undefined;
    name: string;
    description: string;
    currency: Currency;
    is_public: boolean;
    upfront_cost: number;
    upfront_cost_payment_interval: PaymentInterval;
    per_student_cost: number;
    payment_processing_percentage: number;
}
export interface GetOrganizationVisiblePlansRequest {
    context: RequestContext | undefined;
}
export interface GetAllPaymentPlanAccessRequest {
    context: RequestContext | undefined;
}
export interface GetAllPaymentPlanAccessResponse {
    organization_plan_access: OrganizationPlanAccess[];
}
export interface MakePaymentPlanAccessibleForOrganizationRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    payment_plan_id: ObjectId | undefined;
}
export interface AssignPaymentPlanToOrganizationRequest {
    context: RequestContext | undefined;
    payment_plan_id: ObjectId | undefined;
    defer_per_student_cost_to_parent: boolean;
}
export interface GetOrganizationActiveOrgPaymentPlanInfoRequest {
    context: RequestContext | undefined;
}
export interface GetOrgsPaymentPlanInfoRequest {
    context: RequestContext | undefined;
}
export interface GetOrgsPaymentPlanInfoResponse {
    org_payment_plan_info: OrganizationPaymentPlanInformation[];
}
export interface GetOrgActivePaymentPlanWithInfoRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
}
export declare const GetAllPaymentPlansRequest: MessageFns<GetAllPaymentPlansRequest>;
export declare const GetPaymentPlansResponse: MessageFns<GetPaymentPlansResponse>;
export declare const CreatePaymentPlanRequest: MessageFns<CreatePaymentPlanRequest>;
export declare const GetOrganizationVisiblePlansRequest: MessageFns<GetOrganizationVisiblePlansRequest>;
export declare const GetAllPaymentPlanAccessRequest: MessageFns<GetAllPaymentPlanAccessRequest>;
export declare const GetAllPaymentPlanAccessResponse: MessageFns<GetAllPaymentPlanAccessResponse>;
export declare const MakePaymentPlanAccessibleForOrganizationRequest: MessageFns<MakePaymentPlanAccessibleForOrganizationRequest>;
export declare const AssignPaymentPlanToOrganizationRequest: MessageFns<AssignPaymentPlanToOrganizationRequest>;
export declare const GetOrganizationActiveOrgPaymentPlanInfoRequest: MessageFns<GetOrganizationActiveOrgPaymentPlanInfoRequest>;
export declare const GetOrgsPaymentPlanInfoRequest: MessageFns<GetOrgsPaymentPlanInfoRequest>;
export declare const GetOrgsPaymentPlanInfoResponse: MessageFns<GetOrgsPaymentPlanInfoResponse>;
export declare const GetOrgActivePaymentPlanWithInfoRequest: MessageFns<GetOrgActivePaymentPlanWithInfoRequest>;
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
