import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Family } from "../user_service/family";
import { StudentGrade } from "../user_service/student";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { TuitionInvoice, TuitionInvoiceStatus } from "./tuition_invoice";
import { TuitionAdjustmentEntry, TuitionFamilyNote, TuitionReminder } from "./tuition_manager";
export declare const protobufPackage = "payment_service";
/** TODO: Remove this once we move into payment service and call user service */
export interface StudentObj {
    id: ObjectId | undefined;
    name?: string | undefined;
    grade?: StudentGrade | undefined;
}
export interface GetFamilyTuitionInvoiceRequest {
    context: RequestContext | undefined;
    family: ObjectId | undefined;
    school_year: ObjectId | undefined;
}
export interface GenerateTuitionInvoiceRequest {
    context: RequestContext | undefined;
    family: ObjectId | undefined;
    school_year: ObjectId | undefined;
    tuition_plan: ObjectId | undefined;
    family_balance_amount?: number | undefined;
}
export interface ModifyTuitionInvoiceRequest {
    context: RequestContext | undefined;
    tuition_invoice: ObjectId | undefined;
    tuition_plan: ObjectId | undefined;
}
export interface RegenerateTuitionInvoiceRequest {
    context: RequestContext | undefined;
    family_id: ObjectId | undefined;
    school_year_id: ObjectId | undefined;
}
export interface ListFamiliesWithTuitionInvoicesRequest {
    context: RequestContext | undefined;
    school_year: ObjectId | undefined;
    start_date?: Date | undefined;
    end_date?: Date | undefined;
}
export interface ListFamiliesWithTuitionInvoicesResponse {
    family_with_tuition_invoice: FamilyWithTuitionInvoice[];
}
export interface FamilyWithTuitionInvoice {
    family: Family | undefined;
    tuition_invoice?: TuitionInvoice | undefined;
    student_count?: number | undefined;
    total_paid?: number | undefined;
    status?: TuitionInvoiceStatus | undefined;
    total_invoices_amount?: number | undefined;
    remaining_amount?: number | undefined;
    overdue_amount?: number | undefined;
    post_generation_discount_amount?: number | undefined;
}
export interface CreateFamilyTuitionNoteRequest {
    context: RequestContext | undefined;
    family: ObjectId | undefined;
    school_year: ObjectId | undefined;
    body?: string | undefined;
}
export interface UpdateFamilyTuitionNoteRequest {
    context: RequestContext | undefined;
    family: ObjectId | undefined;
    school_year: ObjectId | undefined;
    note: ObjectId | undefined;
    body?: string | undefined;
}
export interface ListFamilyTuitionNotesRequest {
    context: RequestContext | undefined;
    family: ObjectId | undefined;
    school_year: ObjectId | undefined;
}
export interface ListFamilyTuitionNotesResponse {
    notes: TuitionFamilyNote[];
}
export interface SendTuitionRemindersRequest {
    context: RequestContext | undefined;
    school_year: ObjectId | undefined;
    families: ObjectId[];
    title?: string | undefined;
    header?: string | undefined;
    body?: string | undefined;
    footer?: string | undefined;
}
export interface SendTuitionRemindersResponse {
    reminders: TuitionReminder[];
}
export interface ListFamilyTuitionRemindersRequest {
    context: RequestContext | undefined;
    family: ObjectId | undefined;
    school_year: ObjectId | undefined;
}
export interface ListFamilyTuitionRemindersResponse {
    reminders: TuitionReminder[];
}
export interface ListFamilyTuitionAdjustmentsRequest {
    context: RequestContext | undefined;
    family: ObjectId | undefined;
    school_year: ObjectId | undefined;
}
export interface ListFamilyTuitionAdjustmentsResponse {
    adjustments: TuitionAdjustmentEntry[];
}
export interface CheckFamilyTuitionInvoiceStatusRequest {
    context: RequestContext | undefined;
    family_id: ObjectId | undefined;
    school_year_id: ObjectId | undefined;
    admitted_student_ids: ObjectId[];
}
export interface CheckFamilyTuitionInvoiceStatusResponse {
    tuition_invoice_exists?: boolean | undefined;
    missing_student_ids: ObjectId[];
}
export declare const StudentObj: MessageFns<StudentObj>;
export declare const GetFamilyTuitionInvoiceRequest: MessageFns<GetFamilyTuitionInvoiceRequest>;
export declare const GenerateTuitionInvoiceRequest: MessageFns<GenerateTuitionInvoiceRequest>;
export declare const ModifyTuitionInvoiceRequest: MessageFns<ModifyTuitionInvoiceRequest>;
export declare const RegenerateTuitionInvoiceRequest: MessageFns<RegenerateTuitionInvoiceRequest>;
export declare const ListFamiliesWithTuitionInvoicesRequest: MessageFns<ListFamiliesWithTuitionInvoicesRequest>;
export declare const ListFamiliesWithTuitionInvoicesResponse: MessageFns<ListFamiliesWithTuitionInvoicesResponse>;
export declare const FamilyWithTuitionInvoice: MessageFns<FamilyWithTuitionInvoice>;
export declare const CreateFamilyTuitionNoteRequest: MessageFns<CreateFamilyTuitionNoteRequest>;
export declare const UpdateFamilyTuitionNoteRequest: MessageFns<UpdateFamilyTuitionNoteRequest>;
export declare const ListFamilyTuitionNotesRequest: MessageFns<ListFamilyTuitionNotesRequest>;
export declare const ListFamilyTuitionNotesResponse: MessageFns<ListFamilyTuitionNotesResponse>;
export declare const SendTuitionRemindersRequest: MessageFns<SendTuitionRemindersRequest>;
export declare const SendTuitionRemindersResponse: MessageFns<SendTuitionRemindersResponse>;
export declare const ListFamilyTuitionRemindersRequest: MessageFns<ListFamilyTuitionRemindersRequest>;
export declare const ListFamilyTuitionRemindersResponse: MessageFns<ListFamilyTuitionRemindersResponse>;
export declare const ListFamilyTuitionAdjustmentsRequest: MessageFns<ListFamilyTuitionAdjustmentsRequest>;
export declare const ListFamilyTuitionAdjustmentsResponse: MessageFns<ListFamilyTuitionAdjustmentsResponse>;
export declare const CheckFamilyTuitionInvoiceStatusRequest: MessageFns<CheckFamilyTuitionInvoiceStatusRequest>;
export declare const CheckFamilyTuitionInvoiceStatusResponse: MessageFns<CheckFamilyTuitionInvoiceStatusResponse>;
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
