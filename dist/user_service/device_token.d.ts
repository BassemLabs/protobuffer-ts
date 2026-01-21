import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "user_service";
export declare enum DevicePlatform {
    DEVICE_PLATFORM_UNKNOWN = "DEVICE_PLATFORM_UNKNOWN",
    IOS = "IOS",
    ANDROID = "ANDROID",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function devicePlatformFromJSON(object: any): DevicePlatform;
export declare function devicePlatformToJSON(object: DevicePlatform): string;
export declare function devicePlatformToNumber(object: DevicePlatform): number;
export interface DeviceToken {
    id: ObjectId | undefined;
    organization_id: ObjectId | undefined;
    user_id: ObjectId | undefined;
    token: string;
    platform: DevicePlatform;
    device_id: string;
    app_version: string;
    last_seen?: Date | undefined;
    enabled: boolean;
}
export declare const DeviceToken: MessageFns<DeviceToken>;
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
