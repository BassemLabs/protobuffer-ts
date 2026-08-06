import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Empty } from "../google/protobuf/empty";
import { AuditPrincipal } from "../utils/audit_actor";
import { ObjectId } from "../utils/object_id";
import { Coupon, InvoiceItem, InvoiceResponse } from "./invoice";
import { PaymentReminderRecipient, PaymentReminderSnapshot } from "./payment_reminder";
import { RefundTransaction, Transaction } from "./transaction";
export declare const protobufPackage = "payment_service";
export declare enum InvoiceManagerStatus {
    InvoiceManagerOpen = "InvoiceManagerOpen",
    InvoiceManagerUnpaid = "InvoiceManagerUnpaid",
    InvoiceManagerPartiallyPaid = "InvoiceManagerPartiallyPaid",
    InvoiceManagerPaid = "InvoiceManagerPaid",
    InvoiceManagerProcessing = "InvoiceManagerProcessing",
    InvoiceManagerRefunded = "InvoiceManagerRefunded",
    InvoiceManagerDueToday = "InvoiceManagerDueToday",
    InvoiceManagerOverdue = "InvoiceManagerOverdue",
    InvoiceManagerCancelled = "InvoiceManagerCancelled",
    InvoiceManagerArchived = "InvoiceManagerArchived",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function invoiceManagerStatusFromJSON(object: any): InvoiceManagerStatus;
export declare function invoiceManagerStatusToJSON(object: InvoiceManagerStatus): string;
export declare function invoiceManagerStatusToNumber(object: InvoiceManagerStatus): number;
export interface InvoiceManagerFilter {
    per_page?: number | undefined;
    page?: number | undefined;
    school_year: ObjectId | undefined;
    search?: string | undefined;
    statuses: InvoiceManagerStatus[];
    due_from?: Date | undefined;
    due_to?: Date | undefined;
}
export interface InvoiceManagerSummary {
    open_invoice_count?: number | undefined;
    outstanding_balance?: number | undefined;
    overdue_balance?: number | undefined;
    due_next_seven_days?: number | undefined;
    payments_received_today?: number | undefined;
}
export interface InvoiceManagerRow {
    invoice: InvoiceResponse | undefined;
    parent_view_count?: number | undefined;
    has_transaction_history?: boolean | undefined;
}
export interface InvoiceManagerResponse {
    rows: InvoiceManagerRow[];
    invoices_count?: number | undefined;
    summary: InvoiceManagerSummary | undefined;
}
export interface InvoiceActivityFieldChange {
    field?: string | undefined;
    previous_value?: string | undefined;
    new_value?: string | undefined;
}
export interface InvoiceActivityEdit {
    fields: InvoiceActivityFieldChange[];
    added_items: InvoiceItem[];
    removed_items: InvoiceItem[];
    added_coupons: Coupon[];
    removed_coupons: Coupon[];
}
export interface InvoiceActivityCancellation {
    reason?: string | undefined;
}
export interface InvoiceActivityEntry {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    invoice_id: ObjectId | undefined;
    principal: AuditPrincipal | undefined;
    created_at: Date | undefined;
    created?: Empty | undefined;
    edited?: InvoiceActivityEdit | undefined;
    viewed_by_parent?: Empty | undefined;
    reminder?: PaymentReminderSnapshot | undefined;
    cancelled?: InvoiceActivityCancellation | undefined;
    archived?: Empty | undefined;
    unarchived?: Empty | undefined;
    payment?: Transaction | undefined;
    refund?: RefundTransaction | undefined;
}
export interface InvoiceBulkActionResult {
    invoice_id: ObjectId | undefined;
    succeeded?: Empty | undefined;
    failed_reason?: string | undefined;
}
export interface InvoiceBulkActionResponse {
    results: InvoiceBulkActionResult[];
}
export interface InvoiceReminderResult {
    invoice_id: ObjectId | undefined;
    completed?: InvoiceReminderAttempt | undefined;
    failed_reason?: string | undefined;
}
export interface InvoiceReminderRecipientFailure {
    parent_id: ObjectId | undefined;
    parent_name?: string | undefined;
    parent_email?: string | undefined;
    reason?: string | undefined;
}
export interface InvoiceReminderAttempt {
    recipients: PaymentReminderRecipient[];
    failures: InvoiceReminderRecipientFailure[];
}
export declare const InvoiceManagerFilter: MessageFns<InvoiceManagerFilter>;
export declare const InvoiceManagerSummary: MessageFns<InvoiceManagerSummary>;
export declare const InvoiceManagerRow: MessageFns<InvoiceManagerRow>;
export declare const InvoiceManagerResponse: MessageFns<InvoiceManagerResponse>;
export declare const InvoiceActivityFieldChange: MessageFns<InvoiceActivityFieldChange>;
export declare const InvoiceActivityEdit: MessageFns<InvoiceActivityEdit>;
export declare const InvoiceActivityCancellation: MessageFns<InvoiceActivityCancellation>;
export declare const InvoiceActivityEntry: MessageFns<InvoiceActivityEntry>;
export declare const InvoiceBulkActionResult: MessageFns<InvoiceBulkActionResult>;
export declare const InvoiceBulkActionResponse: MessageFns<InvoiceBulkActionResponse>;
export declare const InvoiceReminderResult: MessageFns<InvoiceReminderResult>;
export declare const InvoiceReminderRecipientFailure: MessageFns<InvoiceReminderRecipientFailure>;
export declare const InvoiceReminderAttempt: MessageFns<InvoiceReminderAttempt>;
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
