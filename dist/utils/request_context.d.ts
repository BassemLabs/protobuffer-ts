import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "./object_id";
export declare const protobufPackage = "utils";
export declare enum UserType {
    None = 0,
    Student = 1,
    Teacher = 2,
    Parent = 3,
    UNRECOGNIZED = -1
}
export declare function userTypeFromJSON(object: any): UserType;
export declare function userTypeToJSON(object: UserType): string;
export interface RequestContext {
    userContext: UserContext | undefined;
    isTesting: boolean;
}
export interface UserContext {
    userId: ObjectId | undefined;
    userType: UserType;
    userAuthToken: string;
    organizationId: ObjectId | undefined;
    roles: string[];
    parentFamilyIds: ObjectId[];
    fullName: string;
    firebaseToken: string;
    exp: number;
}
export declare const RequestContext: MessageFns<RequestContext>;
export declare const UserContext: MessageFns<UserContext>;
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
