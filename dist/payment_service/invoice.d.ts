import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { StudentStatus } from "../user_service/student";
import { ObjectId } from "../utils/object_id";
import { RefundTransaction, Transaction } from "./transaction";
import { DiscountValueType } from "./tuition";
export declare const protobufPackage = "payment_service";
export declare enum InvoiceStatus {
    Paid = "Paid",
    NotPaid = "NotPaid",
    Overdue = "Overdue",
    Refunded = "Refunded",
    Processing = "Processing",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function invoiceStatusFromJSON(object: any): InvoiceStatus;
export declare function invoiceStatusToJSON(object: InvoiceStatus): string;
export declare function invoiceStatusToNumber(object: InvoiceStatus): number;
export declare enum AutoPaymentStatus {
    /** AutoPayPending - Pending to be paid, not yet queued */
    AutoPayPending = "AutoPayPending",
    /** AutoPayQueued - Queued to be charged by the payment consumer */
    AutoPayQueued = "AutoPayQueued",
    /** AutoPayQueueFailed - Failed to queue */
    AutoPayQueueFailed = "AutoPayQueueFailed",
    /** AutoPayProcessing - The auto payment is processing */
    AutoPayProcessing = "AutoPayProcessing",
    /** AutoPaySucceeded - The auto payment succeeded */
    AutoPaySucceeded = "AutoPaySucceeded",
    /** AutoPayFailed - The auto payment failed (will be retried) */
    AutoPayFailed = "AutoPayFailed",
    /** AutoPayPermanentlyFailed - All retries exhausted, permanently failed */
    AutoPayPermanentlyFailed = "AutoPayPermanentlyFailed",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function autoPaymentStatusFromJSON(object: any): AutoPaymentStatus;
export declare function autoPaymentStatusToJSON(object: AutoPaymentStatus): string;
export declare function autoPaymentStatusToNumber(object: AutoPaymentStatus): number;
export interface InvoiceItem {
    title: string;
    description: string;
    price: number;
    quantity: number;
    is_bassem_labs_fee?: boolean | undefined;
}
export interface Coupon {
    title: string;
    value_type: DiscountValueType;
    /** percentage or amount value */
    value: number;
}
export interface OrganizationInvoiceDetails {
    period_start_date: Date | undefined;
    period_end_date: Date | undefined;
    number_of_students: number;
    payment_plan_id: ObjectId | undefined;
    payment_plan_info_id: ObjectId | undefined;
}
export interface Invoice {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    invoice_number: number;
    title: string;
    description: string;
    show_hst: boolean;
    disable_tax: boolean;
    archived: boolean;
    user?: ObjectId | undefined;
    family?: ObjectId | undefined;
    items: InvoiceItem[];
    coupons: Coupon[];
    due_date?: Date | undefined;
    invoice_student_registration_pipeline_status?: StudentStatus | undefined;
    school_year: ObjectId | undefined;
    /**
     * Auto pay fields
     * If autopay is enabled for this invoice
     */
    auto_pay_enabled?: boolean | undefined;
    /** Date when this invoice must be automatically charged one */
    charge_on_date?: Date | undefined;
    auto_payment_status?: AutoPaymentStatus | undefined;
    /** determine if this invoice is a tuition invoice */
    is_tuition: boolean;
    /** Organization-specific invoice details */
    organization_invoice_details?: OrganizationInvoiceDetails | undefined;
    /**
     * Auto payment retry fields
     * Number of payment retry attempts made
     */
    auto_payment_retry_count?: number | undefined;
    /** Timestamp for the next scheduled retry attempt (used for scheduling job queries) */
    auto_payment_next_retry_at?: Date | undefined;
}
export interface InvoiceResponse {
    invoice: Invoice | undefined;
    transactions: Transaction[];
    /** Total amount of the invoice */
    total_amount: number;
    /** Total amount paid towards the invoice, excludes refunds, processing fees, (includes bassemlabs fees) */
    gross_amount_paid: number;
    status: InvoiceStatus;
    bill_to_name?: string | undefined;
    refund_transactions: RefundTransaction[];
    /** Total amount refunded */
    total_amount_refunded: number;
    /** total_amount_paid - total_amount_refunded */
    net_amount_paid: number;
}
export interface InvoiceFilter {
    per_page?: number | undefined;
    page?: number | undefined;
    title?: string | undefined;
    status?: InvoiceStatus | undefined;
    archived?: boolean | undefined;
    user?: ObjectId | undefined;
    family?: ObjectId | undefined;
    school_year?: ObjectId | undefined;
}
export interface AutoPaymentAttempt {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    invoice_id: ObjectId | undefined;
    attempted_at: Date | undefined;
    status: AutoPaymentStatus;
    error_message?: string | undefined;
    attempt_number: number;
}
export declare const InvoiceItem: MessageFns<InvoiceItem>;
export declare const Coupon: MessageFns<Coupon>;
export declare const OrganizationInvoiceDetails: MessageFns<OrganizationInvoiceDetails>;
export declare const Invoice: MessageFns<Invoice>;
export declare const InvoiceResponse: MessageFns<InvoiceResponse>;
export declare const InvoiceFilter: MessageFns<InvoiceFilter>;
export declare const AutoPaymentAttempt: MessageFns<AutoPaymentAttempt>;
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
