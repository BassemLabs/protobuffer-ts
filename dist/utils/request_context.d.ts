import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { UserRole } from "../user_service/user_role";
import { ObjectId } from "./object_id";
import { UserType } from "./user_type";
export declare const protobufPackage = "utils";
export declare enum ServiceContext {
    AutoPaymentScheduling = "AutoPaymentScheduling",
    AutoPaymentConsumer = "AutoPaymentConsumer",
    OrganizationInvoices = "OrganizationInvoices",
    StagingDataSyncJob = "StagingDataSyncJob",
    NotificationService = "NotificationService",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function serviceContextFromJSON(object: any): ServiceContext;
export declare function serviceContextToJSON(object: ServiceContext): string;
export declare function serviceContextToNumber(object: ServiceContext): number;
export interface RequestContext {
    user_context: UserContext | undefined;
    is_testing?: boolean | undefined;
    service_based_context_name?: ServiceContext | undefined;
}
export interface UserContext {
    user_id: ObjectId | undefined;
    user_type?: UserType | undefined;
    user_auth_token?: string | undefined;
    organization_id?: ObjectId | undefined;
    roles: UserRole[];
    parent_family_ids: ObjectId[];
    parent_student_ids: ObjectId[];
    full_name?: string | undefined;
    firebase_token?: string | undefined;
    exp?: number | undefined;
    trace_id?: string | undefined;
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
