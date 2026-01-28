import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { LmsProviderType } from "../class_service/lms_course";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { ProvisionedAccount } from "./provisioned_account";
export declare const protobufPackage = "user_service";
export interface ListProvisionedAccountsForStudentRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
}
export interface ListProvisionedAccountsForTeacherRequest {
    context: RequestContext | undefined;
    teacher_id: ObjectId | undefined;
}
export interface ListProvisionedAccountsResponse {
    provisioned_accounts: ProvisionedAccount[];
}
export interface CreateProvisionedAccountForStudentRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    provider: LmsProviderType;
}
export interface CreateProvisionedAccountForTeacherRequest {
    context: RequestContext | undefined;
    teacher_id: ObjectId | undefined;
    provider: LmsProviderType;
}
export interface ActivateProvisionedAccountForStudentRequest {
    context: RequestContext | undefined;
    provisioned_account_id: ObjectId | undefined;
}
export interface ActivateProvisionedAccountForTeacherRequest {
    context: RequestContext | undefined;
    provisioned_account_id: ObjectId | undefined;
}
export interface DeactivateProvisionedAccountForStudentRequest {
    context: RequestContext | undefined;
    provisioned_account_id: ObjectId | undefined;
}
export interface DeactivateProvisionedAccountForTeacherRequest {
    context: RequestContext | undefined;
    provisioned_account_id: ObjectId | undefined;
}
export declare const ListProvisionedAccountsForStudentRequest: MessageFns<ListProvisionedAccountsForStudentRequest>;
export declare const ListProvisionedAccountsForTeacherRequest: MessageFns<ListProvisionedAccountsForTeacherRequest>;
export declare const ListProvisionedAccountsResponse: MessageFns<ListProvisionedAccountsResponse>;
export declare const CreateProvisionedAccountForStudentRequest: MessageFns<CreateProvisionedAccountForStudentRequest>;
export declare const CreateProvisionedAccountForTeacherRequest: MessageFns<CreateProvisionedAccountForTeacherRequest>;
export declare const ActivateProvisionedAccountForStudentRequest: MessageFns<ActivateProvisionedAccountForStudentRequest>;
export declare const ActivateProvisionedAccountForTeacherRequest: MessageFns<ActivateProvisionedAccountForTeacherRequest>;
export declare const DeactivateProvisionedAccountForStudentRequest: MessageFns<DeactivateProvisionedAccountForStudentRequest>;
export declare const DeactivateProvisionedAccountForTeacherRequest: MessageFns<DeactivateProvisionedAccountForTeacherRequest>;
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
