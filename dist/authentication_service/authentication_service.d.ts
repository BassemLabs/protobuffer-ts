import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { AuthenticateParentForOrgResponse } from "../user_service/parent_service";
import { Student } from "../user_service/student";
import { Teacher } from "../user_service/teacher";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { UserType } from "../utils/user_type";
export declare const protobufPackage = "authentication_service";
export interface ResolveSchoolLoginRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    id_token?: string | undefined;
}
/** Server-verified identity used for the resolved account and gateway token issuance. */
export interface VerifiedLoginIdentity {
    firebase_uid?: string | undefined;
    email?: string | undefined;
    photo_url?: string | undefined;
}
export interface ResolveSchoolLoginResponse {
    user_type?: UserType | undefined;
    teacher?: Teacher | undefined;
    student?: Student | undefined;
    parent_auth?: AuthenticateParentForOrgResponse | undefined;
    verified_identity?: VerifiedLoginIdentity | undefined;
}
export declare const ResolveSchoolLoginRequest: MessageFns<ResolveSchoolLoginRequest>;
export declare const VerifiedLoginIdentity: MessageFns<VerifiedLoginIdentity>;
export declare const ResolveSchoolLoginResponse: MessageFns<ResolveSchoolLoginResponse>;
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
