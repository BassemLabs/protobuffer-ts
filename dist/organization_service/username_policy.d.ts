import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "organization_service";
/** Stored per organization; two rows per org (student + teacher). */
export declare enum UsernamePolicyUserType {
    USERNAME_POLICY_USER_TYPE_STUDENT = "USERNAME_POLICY_USER_TYPE_STUDENT",
    USERNAME_POLICY_USER_TYPE_TEACHER = "USERNAME_POLICY_USER_TYPE_TEACHER",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function usernamePolicyUserTypeFromJSON(object: any): UsernamePolicyUserType;
export declare function usernamePolicyUserTypeToJSON(object: UsernamePolicyUserType): string;
export declare function usernamePolicyUserTypeToNumber(object: UsernamePolicyUserType): number;
export declare enum UsernameSpaceHandling {
    USERNAME_SPACE_HANDLING_UNDERSCORE = "USERNAME_SPACE_HANDLING_UNDERSCORE",
    USERNAME_SPACE_HANDLING_HYPHEN = "USERNAME_SPACE_HANDLING_HYPHEN",
    USERNAME_SPACE_HANDLING_DOT = "USERNAME_SPACE_HANDLING_DOT",
    USERNAME_SPACE_HANDLING_CONCAT = "USERNAME_SPACE_HANDLING_CONCAT",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function usernameSpaceHandlingFromJSON(object: any): UsernameSpaceHandling;
export declare function usernameSpaceHandlingToJSON(object: UsernameSpaceHandling): string;
export declare function usernameSpaceHandlingToNumber(object: UsernameSpaceHandling): number;
export interface UsernamePolicy {
    user_type?: UsernamePolicyUserType | undefined;
    template?: string | undefined;
    space_handling?: UsernameSpaceHandling | undefined;
    first_name_take_n?: number | undefined;
    last_name_take_n?: number | undefined;
}
export declare const UsernamePolicy: MessageFns<UsernamePolicy>;
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
