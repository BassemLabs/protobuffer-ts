import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { AWSFile } from "../utils/aws_file";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "organization_service";
export interface Address {
    street: string;
    streetNumber: string;
    city: string;
    region: string;
    addressCode: string;
    country: string;
}
export interface Campus {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    name: string;
    address: Address | undefined;
    email: string;
    phone: string;
    logo?: AWSFile | undefined;
    principalId: ObjectId | undefined;
    supervisorId: ObjectId | undefined;
    archived: boolean;
}
export declare const Address: MessageFns<Address>;
export declare const Campus: MessageFns<Campus>;
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
