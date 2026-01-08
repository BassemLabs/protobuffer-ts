import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "user_service";
export declare enum StudentIncidentStatus {
    IN_PROGRESS = "IN_PROGRESS",
    FILLED = "FILLED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function studentIncidentStatusFromJSON(object: any): StudentIncidentStatus;
export declare function studentIncidentStatusToJSON(object: StudentIncidentStatus): string;
export declare function studentIncidentStatusToNumber(object: StudentIncidentStatus): number;
export declare enum StudentIncidentSeverity {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
    SEVERE = "SEVERE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function studentIncidentSeverityFromJSON(object: any): StudentIncidentSeverity;
export declare function studentIncidentSeverityToJSON(object: StudentIncidentSeverity): string;
export declare function studentIncidentSeverityToNumber(object: StudentIncidentSeverity): number;
export interface StudentIncident {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    student: ObjectId | undefined;
    created_by_teacher: ObjectId | undefined;
    title: string;
    date: Date | undefined;
    description: string;
    status: StudentIncidentStatus;
    severity: StudentIncidentSeverity;
    police_date_contact?: Date | undefined;
    police_date_investigation?: Date | undefined;
    police_officer_name: string;
    police_case_id: string;
    action_taken: string;
}
export declare const StudentIncident: MessageFns<StudentIncident>;
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
