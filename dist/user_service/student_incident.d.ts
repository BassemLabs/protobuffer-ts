import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "user_service";
export interface IncidentPerson {
    id: ObjectId | undefined;
    display_name?: string | undefined;
}
export interface IncidentReportInput {
    occurred_at: Date | undefined;
    location?: string | undefined;
    incident_type?: string | undefined;
    detailed_description?: string | undefined;
    other_student_ids: ObjectId[];
    student_witness_ids: ObjectId[];
    teacher_witness_ids: ObjectId[];
    immediate_action_notes?: string | undefined;
    injury_description?: string | undefined;
    property_damaged?: boolean | undefined;
    additional_comments?: string | undefined;
}
export interface IncidentReport {
    id: ObjectId | undefined;
    assigned_student: IncidentPerson | undefined;
    reporter: IncidentPerson | undefined;
    occurred_at: Date | undefined;
    can_edit?: boolean | undefined;
    report: IncidentReportInput | undefined;
    other_students: IncidentPerson[];
    student_witnesses: IncidentPerson[];
    teacher_witnesses: IncidentPerson[];
    parent_emails: IncidentParentEmail[];
}
export interface IncidentParentEmail {
    broadcast_id: ObjectId | undefined;
    queued_at: Date | undefined;
    queued_by: IncidentPerson | undefined;
    recipients: IncidentPerson[];
    failed?: boolean | undefined;
}
export declare const IncidentPerson: MessageFns<IncidentPerson>;
export declare const IncidentReportInput: MessageFns<IncidentReportInput>;
export declare const IncidentReport: MessageFns<IncidentReport>;
export declare const IncidentParentEmail: MessageFns<IncidentParentEmail>;
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
