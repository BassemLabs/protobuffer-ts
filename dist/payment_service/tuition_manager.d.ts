import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { AuditActor } from "../utils/audit_actor";
import { ObjectId } from "../utils/object_id";
import { TuitionDiscountAuditEntry } from "./invoice";
export declare const protobufPackage = "payment_service";
export interface TuitionFamilyNoteEdit {
    updated_by: AuditActor | undefined;
    updated_at: Date | undefined;
}
export interface TuitionFamilyNote {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    family: ObjectId | undefined;
    school_year: ObjectId | undefined;
    body?: string | undefined;
    created_by: AuditActor | undefined;
    created_at: Date | undefined;
    latest_edit?: TuitionFamilyNoteEdit | undefined;
}
export interface TuitionReminderRecipient {
    parent_id: ObjectId | undefined;
    parent_name?: string | undefined;
    parent_email?: string | undefined;
    rendered_title?: string | undefined;
    rendered_body?: string | undefined;
}
export interface TuitionReminder {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    family: ObjectId | undefined;
    school_year: ObjectId | undefined;
    title?: string | undefined;
    header?: string | undefined;
    body?: string | undefined;
    footer?: string | undefined;
    total_amount?: number | undefined;
    paid_amount?: number | undefined;
    remaining_amount?: number | undefined;
    overdue_amount?: number | undefined;
    created_by: AuditActor | undefined;
    created_at: Date | undefined;
    recipients: TuitionReminderRecipient[];
}
export interface LegacyTuitionAdjustment {
    discount_amount?: number | undefined;
    recognized_at: Date | undefined;
}
export interface AuditedTuitionAdjustment {
    invoice_id: ObjectId | undefined;
    invoice_number?: number | undefined;
    audit: TuitionDiscountAuditEntry | undefined;
}
export interface TuitionAdjustmentEntry {
    legacy?: LegacyTuitionAdjustment | undefined;
    audited?: AuditedTuitionAdjustment | undefined;
}
export declare const TuitionFamilyNoteEdit: MessageFns<TuitionFamilyNoteEdit>;
export declare const TuitionFamilyNote: MessageFns<TuitionFamilyNote>;
export declare const TuitionReminderRecipient: MessageFns<TuitionReminderRecipient>;
export declare const TuitionReminder: MessageFns<TuitionReminder>;
export declare const LegacyTuitionAdjustment: MessageFns<LegacyTuitionAdjustment>;
export declare const AuditedTuitionAdjustment: MessageFns<AuditedTuitionAdjustment>;
export declare const TuitionAdjustmentEntry: MessageFns<TuitionAdjustmentEntry>;
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
