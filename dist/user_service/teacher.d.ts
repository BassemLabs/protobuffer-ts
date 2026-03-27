import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { PhoneNumber } from "../utils/phone_number";
export declare const protobufPackage = "user_service";
export declare enum TeacherStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function teacherStatusFromJSON(object: any): TeacherStatus;
export declare function teacherStatusToJSON(object: TeacherStatus): string;
export declare function teacherStatusToNumber(object: TeacherStatus): number;
/** Basic teacher model with only essential fields */
export interface TeacherBasic {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    username?: string | undefined;
    email_domain?: string | undefined;
    email?: string | undefined;
    first_name?: string | undefined;
    last_name?: string | undefined;
}
/** Full teacher model with all fields */
export interface Teacher {
    id: ObjectId | undefined;
    status?: TeacherStatus | undefined;
    username?: string | undefined;
    email_domain?: string | undefined;
    first_name?: string | undefined;
    last_name?: string | undefined;
    gender?: string | undefined;
    email?: string | undefined;
    personal_email?: string | undefined;
    date_of_birth: Date | undefined;
    phone_number: PhoneNumber | undefined;
    signature_file_id?: ObjectId | undefined;
    organization: ObjectId | undefined;
    teacher_role_id: ObjectId | undefined;
    teacher_role_name?: string | undefined;
}
export interface TeacherProfile {
    first_name?: string | undefined;
    last_name?: string | undefined;
    gender?: string | undefined;
    email?: string | undefined;
    personal_email?: string | undefined;
    date_of_birth: Date | undefined;
    phone_number: PhoneNumber | undefined;
}
export declare const TeacherBasic: MessageFns<TeacherBasic>;
export declare const Teacher: MessageFns<Teacher>;
export declare const TeacherProfile: MessageFns<TeacherProfile>;
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
