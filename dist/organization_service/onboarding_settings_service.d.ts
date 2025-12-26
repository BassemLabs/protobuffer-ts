import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { GradeFeeMapping } from "./onboarding_settings";
export declare const protobufPackage = "organization_service";
export interface GetOnboardingSettingsRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
}
export interface UpdateEnrollmentConfigurationRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
    hasInterviewForNewcomers: boolean;
    enableGroupApprovalSystem: boolean;
}
export interface AddSchoolHandbookFileRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
    fileName: string;
    awsS3FileLocation: string;
}
export interface RemoveSchoolHandbookFileRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
    fileIndex: number;
}
export interface UpdateWaitlistFeeRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
    waitlistFee: number;
}
export interface UpdateRegistrationFeeRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
    registrationFees: GradeFeeMapping[];
}
export interface UpdateReregistrationFeeRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
    reregistrationFees: GradeFeeMapping[];
}
export interface UpdateInterviewFeeRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
    interviewFee: number;
}
export declare const GetOnboardingSettingsRequest: MessageFns<GetOnboardingSettingsRequest>;
export declare const UpdateEnrollmentConfigurationRequest: MessageFns<UpdateEnrollmentConfigurationRequest>;
export declare const AddSchoolHandbookFileRequest: MessageFns<AddSchoolHandbookFileRequest>;
export declare const RemoveSchoolHandbookFileRequest: MessageFns<RemoveSchoolHandbookFileRequest>;
export declare const UpdateWaitlistFeeRequest: MessageFns<UpdateWaitlistFeeRequest>;
export declare const UpdateRegistrationFeeRequest: MessageFns<UpdateRegistrationFeeRequest>;
export declare const UpdateReregistrationFeeRequest: MessageFns<UpdateReregistrationFeeRequest>;
export declare const UpdateInterviewFeeRequest: MessageFns<UpdateInterviewFeeRequest>;
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
