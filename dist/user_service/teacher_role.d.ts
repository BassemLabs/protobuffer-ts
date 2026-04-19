import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { TeacherBasic } from "./teacher";
import { StaffPermission } from "./user_role";
export declare const protobufPackage = "user_service";
export interface TeacherRole {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    name?: string | undefined;
    roles: StaffPermission[];
    is_default?: boolean | undefined;
}
export interface TeacherRoleSummary {
    teacher_role: TeacherRole | undefined;
    assigned_teachers_count?: number | undefined;
    assigned_teachers: TeacherBasic[];
}
export declare const TeacherRole: MessageFns<TeacherRole>;
export declare const TeacherRoleSummary: MessageFns<TeacherRoleSummary>;
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
