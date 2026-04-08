import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { RequestContext } from "../utils/request_context";
import { UsernameSpaceHandling } from "./username_policy";
export declare const protobufPackage = "organization_service";
export interface GetUsernamePoliciesResponse {
}
export interface RenderUsernamePolicySampleResponse {
    sample_usernames: string[];
}
export interface GetStudentUsernamePolicyRequest {
    context: RequestContext | undefined;
}
export interface GetTeacherUsernamePolicyRequest {
    context: RequestContext | undefined;
}
export interface UpdateStudentUsernamePolicyRequest {
    context: RequestContext | undefined;
    template?: string | undefined;
    space_handling?: UsernameSpaceHandling | undefined;
    first_name_take_n?: number | undefined;
    last_name_take_n?: number | undefined;
}
export interface UpdateTeacherUsernamePolicyRequest {
    context: RequestContext | undefined;
    template?: string | undefined;
    space_handling?: UsernameSpaceHandling | undefined;
    first_name_take_n?: number | undefined;
    last_name_take_n?: number | undefined;
}
export interface BootstrapOrganizationUsernamePoliciesRequest {
    context: RequestContext | undefined;
}
export declare const GetUsernamePoliciesResponse: MessageFns<GetUsernamePoliciesResponse>;
export declare const RenderUsernamePolicySampleResponse: MessageFns<RenderUsernamePolicySampleResponse>;
export declare const GetStudentUsernamePolicyRequest: MessageFns<GetStudentUsernamePolicyRequest>;
export declare const GetTeacherUsernamePolicyRequest: MessageFns<GetTeacherUsernamePolicyRequest>;
export declare const UpdateStudentUsernamePolicyRequest: MessageFns<UpdateStudentUsernamePolicyRequest>;
export declare const UpdateTeacherUsernamePolicyRequest: MessageFns<UpdateTeacherUsernamePolicyRequest>;
export declare const BootstrapOrganizationUsernamePoliciesRequest: MessageFns<BootstrapOrganizationUsernamePoliciesRequest>;
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
