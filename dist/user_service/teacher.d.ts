import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { PhoneNumber } from "../utils/phone_number";
import { UserRole } from "./user_role";
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
    username: string;
    emailDomain: string;
    email: string;
    firstName: string;
    lastName: string;
}
/** Full teacher model with all fields */
export interface Teacher {
    id: ObjectId | undefined;
    status: TeacherStatus;
    username: string;
    emailDomain: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    personalEmail: string;
    dateOfBirth: Date | undefined;
    phoneNumber: PhoneNumber | undefined;
    signatureFileId?: ObjectId | undefined;
    roles: UserRole[];
    organization: ObjectId | undefined;
}
export interface TeacherProfile {
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    personalEmail: string;
    dateOfBirth: Date | undefined;
    phoneNumber: PhoneNumber | undefined;
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
