import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { RequestContext } from "../utils/request_context";
export declare const protobufPackage = "organization_service";
export interface SensitiveOperationSecuritySettings {
    configured?: boolean | undefined;
    allowed_networks: string[];
}
export interface SensitiveOperationNetworkStatus {
    configured?: boolean | undefined;
    network_allowed?: boolean | undefined;
}
export interface CheckSensitiveOperationNetworkRequest {
    context: RequestContext | undefined;
    current_source_ip?: string | undefined;
}
export interface GetSensitiveOperationSecuritySettingsRequest {
    context: RequestContext | undefined;
    current_source_ip?: string | undefined;
}
export interface InitializeSensitiveOperationSecuritySettingsRequest {
    context: RequestContext | undefined;
    allowed_networks: string[];
    current_source_ip?: string | undefined;
}
export declare const SensitiveOperationSecuritySettings: MessageFns<SensitiveOperationSecuritySettings>;
export declare const SensitiveOperationNetworkStatus: MessageFns<SensitiveOperationNetworkStatus>;
export declare const CheckSensitiveOperationNetworkRequest: MessageFns<CheckSensitiveOperationNetworkRequest>;
export declare const GetSensitiveOperationSecuritySettingsRequest: MessageFns<GetSensitiveOperationSecuritySettingsRequest>;
export declare const InitializeSensitiveOperationSecuritySettingsRequest: MessageFns<InitializeSensitiveOperationSecuritySettingsRequest>;
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
