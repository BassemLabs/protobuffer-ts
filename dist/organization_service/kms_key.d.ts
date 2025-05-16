import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "organization_service";
export declare enum KMSKeyStatus {
    Active = "Active",
    Deactivated = "Deactivated",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function kMSKeyStatusFromJSON(object: any): KMSKeyStatus;
export declare function kMSKeyStatusToJSON(object: KMSKeyStatus): string;
export declare function kMSKeyStatusToNumber(object: KMSKeyStatus): number;
export declare enum KMSKeyType {
    GoogelAdminEmail = "GoogelAdminEmail",
    GoogleAdminServiceAccountKey = "GoogleAdminServiceAccountKey",
    GoogleAdminServiceAccountId = "GoogleAdminServiceAccountId",
    StripeSecret = "StripeSecret",
    StripeEndpointSecret = "StripeEndpointSecret",
    StripePublicKey = "StripePublicKey",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function kMSKeyTypeFromJSON(object: any): KMSKeyType;
export declare function kMSKeyTypeToJSON(object: KMSKeyType): string;
export declare function kMSKeyTypeToNumber(object: KMSKeyType): number;
export interface KMSKey {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    status: KMSKeyStatus;
    keyType: KMSKeyType;
    decryptedKeyMaterial: string;
}
export declare const KMSKey: MessageFns<KMSKey>;
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
