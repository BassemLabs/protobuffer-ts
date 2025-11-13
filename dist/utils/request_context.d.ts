import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { UserRole } from "../user_service/user_role";
import { ObjectId } from "./object_id";
import { UserType } from "./user_type";
export declare const protobufPackage = "utils";
export declare enum ServiceContext {
    AutoPaymentScheduling = "AutoPaymentScheduling",
    AutoPaymentConsumer = "AutoPaymentConsumer",
    OrganizationInvoices = "OrganizationInvoices",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function serviceContextFromJSON(object: any): ServiceContext;
export declare function serviceContextToJSON(object: ServiceContext): string;
export declare function serviceContextToNumber(object: ServiceContext): number;
export interface RequestContext {
    userContext: UserContext | undefined;
    isTesting: boolean;
    serviceBasedContextName?: ServiceContext | undefined;
}
export interface UserContext {
    userId: ObjectId | undefined;
    userType: UserType;
    userAuthToken: string;
    organizationId?: ObjectId | undefined;
    roles: UserRole[];
    parentFamilyIds: ObjectId[];
    parentStudentIds: ObjectId[];
    fullName: string;
    firebaseToken: string;
    exp: number;
    traceId: string;
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
