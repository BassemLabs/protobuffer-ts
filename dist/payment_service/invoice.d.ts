import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { Transaction } from "./transaction";
import { DiscountValueType } from "./tuition";
export declare const protobufPackage = "payment_service";
export declare enum InvoiceStatus {
    Paid = "Paid",
    NotPaid = "NotPaid",
    Overdue = "Overdue",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function invoiceStatusFromJSON(object: any): InvoiceStatus;
export declare function invoiceStatusToJSON(object: InvoiceStatus): string;
export declare function invoiceStatusToNumber(object: InvoiceStatus): number;
/** TODO: this is was fetched automatically from user-service */
export declare enum StudentStatus {
    Waitlist = "Waitlist",
    Interview = "Interview",
    Applicant = "Applicant",
    Rejected = "Rejected",
    Enrolled = "Enrolled",
    ReRegistration = "ReRegistration",
    Withdrawn = "Withdrawn",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function studentStatusFromJSON(object: any): StudentStatus;
export declare function studentStatusToJSON(object: StudentStatus): string;
export declare function studentStatusToNumber(object: StudentStatus): number;
export interface InvoiceItem {
    title: string;
    description: string;
    price: number;
    quantity: number;
}
export interface Coupon {
    title: string;
    valueType: DiscountValueType;
    /** percentage or amount value */
    value: number;
}
export interface Invoice {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    invoiceNumber: number;
    title: string;
    description: string;
    showHst: boolean;
    disableTax: boolean;
    archived: boolean;
    user?: ObjectId | undefined;
    family?: ObjectId | undefined;
    items: InvoiceItem[];
    coupons: Coupon[];
    dueDate?: Date | undefined;
    invoiceStudentRegistrationPipelineStatus?: StudentStatus | undefined;
    schoolYear: ObjectId | undefined;
}
export interface InvoiceResponse {
    invoice: Invoice | undefined;
    transactions: Transaction[];
    totalAmount: number;
    totalAmountPaid: number;
    status: InvoiceStatus;
    billToName?: string | undefined;
}
export interface InvoiceFilter {
    perPage?: number | undefined;
    page?: number | undefined;
    title?: string | undefined;
    status?: InvoiceStatus | undefined;
    archived?: boolean | undefined;
}
export declare const InvoiceItem: MessageFns<InvoiceItem>;
export declare const Coupon: MessageFns<Coupon>;
export declare const Invoice: MessageFns<Invoice>;
export declare const InvoiceResponse: MessageFns<InvoiceResponse>;
export declare const InvoiceFilter: MessageFns<InvoiceFilter>;
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
