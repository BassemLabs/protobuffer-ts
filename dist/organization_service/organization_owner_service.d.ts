import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
export declare const protobufPackage = "organization_service";
export interface CreateOwnerRequest {
    context: RequestContext | undefined;
    name: string;
    email: string;
}
export interface GetOwnerByEmailRequest {
    context: RequestContext | undefined;
    email: string;
}
export interface GetOwnerRequest {
    context: RequestContext | undefined;
    ownerId: ObjectId | undefined;
}
export interface GetOrganizationOwnerRequest {
    context: RequestContext | undefined;
}
export interface UpdateOwnerProfileRequest {
    context: RequestContext | undefined;
    name?: string | undefined;
    mainAddress?: string | undefined;
    phoneNumber?: string | undefined;
}
export declare const CreateOwnerRequest: MessageFns<CreateOwnerRequest>;
export declare const GetOwnerByEmailRequest: MessageFns<GetOwnerByEmailRequest>;
export declare const GetOwnerRequest: MessageFns<GetOwnerRequest>;
export declare const GetOrganizationOwnerRequest: MessageFns<GetOrganizationOwnerRequest>;
export declare const UpdateOwnerProfileRequest: MessageFns<UpdateOwnerProfileRequest>;
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
