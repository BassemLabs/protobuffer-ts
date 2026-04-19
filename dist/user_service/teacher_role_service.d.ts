import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { TeacherStatus } from "./teacher";
import { TeacherRoleSummary } from "./teacher_role";
import { StaffPermission } from "./user_role";
export declare const protobufPackage = "user_service";
export interface GetTeacherRoleRequest {
    context: RequestContext | undefined;
    teacher_role_id: ObjectId | undefined;
}
export interface GetTeacherRolesRequest {
    context: RequestContext | undefined;
    teacher_id: ObjectId | undefined;
}
export interface GetTeacherRolesResponse {
    roles: StaffPermission[];
}
export interface ListTeacherRolesRequest {
    context: RequestContext | undefined;
}
export interface ListTeacherRolesResponse {
    teacher_roles: TeacherRoleSummary[];
}
export interface CreateTeacherRoleRequest {
    context: RequestContext | undefined;
    name?: string | undefined;
    roles: StaffPermission[];
    is_default?: boolean | undefined;
}
export interface UpdateTeacherRoleRequest {
    context: RequestContext | undefined;
    teacher_role_id: ObjectId | undefined;
    name?: string | undefined;
    roles: StaffPermission[];
}
export interface DeleteTeacherRoleRequest {
    context: RequestContext | undefined;
    teacher_role_id: ObjectId | undefined;
}
export interface SetDefaultTeacherRoleRequest {
    context: RequestContext | undefined;
    teacher_role_id: ObjectId | undefined;
}
export interface ListTeachersByTeacherRoleRequest {
    context: RequestContext | undefined;
    teacher_role_id: ObjectId | undefined;
    per_page?: number | undefined;
    page?: number | undefined;
    name_search?: string | undefined;
    status?: TeacherStatus | undefined;
}
export interface SetTeacherRoleRequest {
    context: RequestContext | undefined;
    teacher_id: ObjectId | undefined;
    teacher_role_id: ObjectId | undefined;
}
export interface BootstrapTeacherRolesForOrganizationRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
}
export declare const GetTeacherRoleRequest: MessageFns<GetTeacherRoleRequest>;
export declare const GetTeacherRolesRequest: MessageFns<GetTeacherRolesRequest>;
export declare const GetTeacherRolesResponse: MessageFns<GetTeacherRolesResponse>;
export declare const ListTeacherRolesRequest: MessageFns<ListTeacherRolesRequest>;
export declare const ListTeacherRolesResponse: MessageFns<ListTeacherRolesResponse>;
export declare const CreateTeacherRoleRequest: MessageFns<CreateTeacherRoleRequest>;
export declare const UpdateTeacherRoleRequest: MessageFns<UpdateTeacherRoleRequest>;
export declare const DeleteTeacherRoleRequest: MessageFns<DeleteTeacherRoleRequest>;
export declare const SetDefaultTeacherRoleRequest: MessageFns<SetDefaultTeacherRoleRequest>;
export declare const ListTeachersByTeacherRoleRequest: MessageFns<ListTeachersByTeacherRoleRequest>;
export declare const SetTeacherRoleRequest: MessageFns<SetTeacherRoleRequest>;
export declare const BootstrapTeacherRolesForOrganizationRequest: MessageFns<BootstrapTeacherRolesForOrganizationRequest>;
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
