import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "organization_service";
export declare enum StaffStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function staffStatusFromJSON(object: any): StaffStatus;
export declare function staffStatusToJSON(object: StaffStatus): string;
export declare function staffStatusToNumber(object: StaffStatus): number;
export interface BassemLabsStaff {
    id: ObjectId | undefined;
    status: StaffStatus;
    username: string;
    first_name: string;
    last_name: string;
    gender: string;
    email: string;
    personal_email: string;
    date_of_birth: Date | undefined;
    phone_number: string;
}
export declare const BassemLabsStaff: MessageFns<BassemLabsStaff>;
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
