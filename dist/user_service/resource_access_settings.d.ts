import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { UserType } from "../utils/user_type";
import { UserRole } from "./user_role";
export declare const protobufPackage = "user_service";
export declare enum OwnershipKind {
    OWNED = "OWNED",
    UNOWNED = "UNOWNED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function ownershipKindFromJSON(object: any): OwnershipKind;
export declare function ownershipKindToJSON(object: OwnershipKind): string;
export declare function ownershipKindToNumber(object: OwnershipKind): number;
export declare enum PrincipalType {
    USER = "USER",
    FAMILY = "FAMILY",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function principalTypeFromJSON(object: any): PrincipalType;
export declare function principalTypeToJSON(object: PrincipalType): string;
export declare function principalTypeToNumber(object: PrincipalType): number;
export declare enum AccessPermissionType {
    ALLOW_READ = "ALLOW_READ",
    ALLOW_WRITE = "ALLOW_WRITE",
    DENY_READ = "DENY_READ",
    DENY_WRITE = "DENY_WRITE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function accessPermissionTypeFromJSON(object: any): AccessPermissionType;
export declare function accessPermissionTypeToJSON(object: AccessPermissionType): string;
export declare function accessPermissionTypeToNumber(object: AccessPermissionType): number;
export declare enum WildcardAccessType {
    ALL_PRINCIPALS = "ALL_PRINCIPALS",
    ALL_TEACHER_PRINCIPALS = "ALL_TEACHER_PRINCIPALS",
    ALL_PARENT_PRINCIPALS = "ALL_PARENT_PRINCIPALS",
    ALL_STUDENT_PRINCIPALS = "ALL_STUDENT_PRINCIPALS",
    ROLE = "ROLE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function wildcardAccessTypeFromJSON(object: any): WildcardAccessType;
export declare function wildcardAccessTypeToJSON(object: WildcardAccessType): string;
export declare function wildcardAccessTypeToNumber(object: WildcardAccessType): number;
export interface ResourceAccessSettings {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    name: string;
    ownership_kind: OwnershipKind;
    user_type: UserType;
    access_rules: AccessRule[];
}
export interface AccessRule {
    permission_type: AccessPermissionType;
    principal?: PrincipalType | undefined;
    wildcard?: WildcardAccess | undefined;
}
export interface WildcardAccess {
    type: WildcardAccessType;
    /** Only used when type is ROLE */
    role?: UserRole | undefined;
}
export declare const ResourceAccessSettings: MessageFns<ResourceAccessSettings>;
export declare const AccessRule: MessageFns<AccessRule>;
export declare const WildcardAccess: MessageFns<WildcardAccess>;
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
