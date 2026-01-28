import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { LmsProviderType } from "../class_service/lms_course";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "user_service";
export declare enum ProvisionedAccountStatus {
    PROVISIONED_ACCOUNT_STATUS_ACTIVE = "PROVISIONED_ACCOUNT_STATUS_ACTIVE",
    PROVISIONED_ACCOUNT_STATUS_INACTIVE = "PROVISIONED_ACCOUNT_STATUS_INACTIVE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function provisionedAccountStatusFromJSON(object: any): ProvisionedAccountStatus;
export declare function provisionedAccountStatusToJSON(object: ProvisionedAccountStatus): string;
export declare function provisionedAccountStatusToNumber(object: ProvisionedAccountStatus): number;
export interface ProvisionedAccount {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    student_id?: ObjectId | undefined;
    teacher_id?: ObjectId | undefined;
    provider: LmsProviderType;
    status: ProvisionedAccountStatus;
    lms_user_id?: string | undefined;
}
export declare const ProvisionedAccount: MessageFns<ProvisionedAccount>;
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
