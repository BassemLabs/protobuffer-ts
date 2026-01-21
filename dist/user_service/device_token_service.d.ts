import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { DevicePlatform, DeviceToken } from "./device_token";
export declare const protobufPackage = "user_service";
export interface RefreshDeviceTokenRequest {
    context: RequestContext | undefined;
    token: string;
    platform: DevicePlatform;
    device_id: string;
    app_version: string;
}
export interface DisableDeviceTokenRequest {
    context: RequestContext | undefined;
    token: string;
    user_id: ObjectId | undefined;
}
export interface DisableDeviceTokenResponse {
    success: boolean;
    disabled_count?: number | undefined;
}
export interface ListDeviceTokensRequest {
    context: RequestContext | undefined;
    user_id: ObjectId | undefined;
}
export interface DeviceTokenList {
    tokens: DeviceToken[];
    tokens_count: number;
}
export declare const RefreshDeviceTokenRequest: MessageFns<RefreshDeviceTokenRequest>;
export declare const DisableDeviceTokenRequest: MessageFns<DisableDeviceTokenRequest>;
export declare const DisableDeviceTokenResponse: MessageFns<DisableDeviceTokenResponse>;
export declare const ListDeviceTokensRequest: MessageFns<ListDeviceTokensRequest>;
export declare const DeviceTokenList: MessageFns<DeviceTokenList>;
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
