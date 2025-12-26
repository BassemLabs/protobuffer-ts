import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { Parent, ParentProfile } from "./parent";
import { Student } from "./student";
export declare const protobufPackage = "user_service";
export interface GetParentRequest {
    context: RequestContext | undefined;
    parentId: ObjectId | undefined;
}
export interface GetParentsByIdsRequest {
    context: RequestContext | undefined;
    parentIds: ObjectId[];
}
export interface GetParentsByIdsResponse {
    parents: Parent[];
}
export interface GetParentsByEmailRequest {
    context: RequestContext | undefined;
    email: string;
}
export interface GetParentsByEmailResponse {
    /** All parent accounts with this email (one per organization) */
    parents: Parent[];
}
export interface GetParentStudentsRequest {
    context: RequestContext | undefined;
    parentId: ObjectId | undefined;
}
export interface GetParentStudentsResponse {
    /** All students under parent's care across all families */
    students: Student[];
}
export interface GetParentStudentsFromContextRequest {
    context: RequestContext | undefined;
}
export interface GetParentStudentIdsRequest {
    context: RequestContext | undefined;
    parentId: ObjectId | undefined;
}
export interface GetParentStudentIdsResponse {
    /** All student IDs under parent's care across all families */
    studentIds: ObjectId[];
}
export interface GetContextActiveSchoolYearEnrolledStudentIdsRequest {
    context: RequestContext | undefined;
}
export interface GetContextActiveSchoolYearEnrolledStudentIdsResponse {
    /** Only enrolled students in active school year (filtered from context's parent_student_ids) */
    studentIds: ObjectId[];
}
export interface AddNewGuardianToFamilyRequest {
    context: RequestContext | undefined;
    name: string;
    email: string;
    familyId: ObjectId | undefined;
}
export interface UpdateParentProfileRequest {
    context: RequestContext | undefined;
    parentId: ObjectId | undefined;
    profile: ParentProfile | undefined;
}
export interface AuthenticateParentForOrgRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
    firebaseUserId: string;
    displayName: string;
    email: string;
}
export interface AuthenticateParentForOrgResponse {
    parent: Parent | undefined;
    familyIds: ObjectId[];
    studentIds: ObjectId[];
}
export interface UpdateParentPaymentMethodFromSetupIntentRequest {
    context: RequestContext | undefined;
    stripeCustomerId: string;
    defaultPaymentMethodId: string;
    defaultPaymentMethodType?: string | undefined;
    paymentMethodBrand?: string | undefined;
    paymentMethodLast4?: string | undefined;
    paymentMethodExpiry?: string | undefined;
    paymentMethodMandateId?: string | undefined;
}
export interface SetParentSetupIntentRequiresActionRequest {
    context: RequestContext | undefined;
    stripeCustomerId: string;
    setupIntentId: string;
}
export interface SetParentSetupIntentFailureRequest {
    context: RequestContext | undefined;
    stripeCustomerId: string;
    failureReason: string;
}
export interface SetParentStripeCustomerIdRequest {
    context: RequestContext | undefined;
    parentId: ObjectId | undefined;
    stripeCustomerId: string;
}
export interface GetAllParentsForStagingRequest {
    context: RequestContext | undefined;
}
export interface GetAllParentsForStagingResponse {
    parents: Parent[];
}
export declare const GetParentRequest: MessageFns<GetParentRequest>;
export declare const GetParentsByIdsRequest: MessageFns<GetParentsByIdsRequest>;
export declare const GetParentsByIdsResponse: MessageFns<GetParentsByIdsResponse>;
export declare const GetParentsByEmailRequest: MessageFns<GetParentsByEmailRequest>;
export declare const GetParentsByEmailResponse: MessageFns<GetParentsByEmailResponse>;
export declare const GetParentStudentsRequest: MessageFns<GetParentStudentsRequest>;
export declare const GetParentStudentsResponse: MessageFns<GetParentStudentsResponse>;
export declare const GetParentStudentsFromContextRequest: MessageFns<GetParentStudentsFromContextRequest>;
export declare const GetParentStudentIdsRequest: MessageFns<GetParentStudentIdsRequest>;
export declare const GetParentStudentIdsResponse: MessageFns<GetParentStudentIdsResponse>;
export declare const GetContextActiveSchoolYearEnrolledStudentIdsRequest: MessageFns<GetContextActiveSchoolYearEnrolledStudentIdsRequest>;
export declare const GetContextActiveSchoolYearEnrolledStudentIdsResponse: MessageFns<GetContextActiveSchoolYearEnrolledStudentIdsResponse>;
export declare const AddNewGuardianToFamilyRequest: MessageFns<AddNewGuardianToFamilyRequest>;
export declare const UpdateParentProfileRequest: MessageFns<UpdateParentProfileRequest>;
export declare const AuthenticateParentForOrgRequest: MessageFns<AuthenticateParentForOrgRequest>;
export declare const AuthenticateParentForOrgResponse: MessageFns<AuthenticateParentForOrgResponse>;
export declare const UpdateParentPaymentMethodFromSetupIntentRequest: MessageFns<UpdateParentPaymentMethodFromSetupIntentRequest>;
export declare const SetParentSetupIntentRequiresActionRequest: MessageFns<SetParentSetupIntentRequiresActionRequest>;
export declare const SetParentSetupIntentFailureRequest: MessageFns<SetParentSetupIntentFailureRequest>;
export declare const SetParentStripeCustomerIdRequest: MessageFns<SetParentStripeCustomerIdRequest>;
export declare const GetAllParentsForStagingRequest: MessageFns<GetAllParentsForStagingRequest>;
export declare const GetAllParentsForStagingResponse: MessageFns<GetAllParentsForStagingResponse>;
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
