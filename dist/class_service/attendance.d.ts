import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { UserType } from "../utils/user_type";
export declare const protobufPackage = "class_service";
export declare enum AttendanceStatus {
    None = "None",
    Present = "Present",
    Late = "Late",
    Absent = "Absent",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function attendanceStatusFromJSON(object: any): AttendanceStatus;
export declare function attendanceStatusToJSON(object: AttendanceStatus): string;
export declare function attendanceStatusToNumber(object: AttendanceStatus): number;
export interface Attendance {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    student: ObjectId | undefined;
    course?: ObjectId | undefined;
    homeroom?: ObjectId | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    date: string;
    periodNumber: number;
    reason: string;
    signInTime?: Date | undefined;
    signOutTime?: Date | undefined;
    status: AttendanceStatus;
    lateDismissalDate?: Date | undefined;
    studentExcusedBy?: ObjectId | undefined;
    studentExcusedByUserType?: UserType | undefined;
}
export declare const Attendance: MessageFns<Attendance>;
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
