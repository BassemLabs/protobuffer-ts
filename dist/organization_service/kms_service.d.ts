import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { KMSKey, KMSKeyType } from "./kms_key";
export declare const protobufPackage = "organization_service";
export interface GetKmsKeyRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
    keyType: KMSKeyType;
}
export interface GetOrganizationKmsKeysRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
}
export interface GetOrganizationKmsKeysResponse {
    keys: KMSKey[];
}
export interface UpdateKmsKeyRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
    keyType: KMSKeyType;
    secretMaterial: string;
}
export declare const GetKmsKeyRequest: MessageFns<GetKmsKeyRequest>;
export declare const GetOrganizationKmsKeysRequest: MessageFns<GetOrganizationKmsKeysRequest>;
export declare const GetOrganizationKmsKeysResponse: MessageFns<GetOrganizationKmsKeysResponse>;
export declare const UpdateKmsKeyRequest: MessageFns<UpdateKmsKeyRequest>;
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
