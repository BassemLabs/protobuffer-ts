import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Family } from "../user_service/family";
import { StudentGrade } from "../user_service/student";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { TuitionInvoice, TuitionInvoiceStatus } from "./tuition_invoice";
export declare const protobufPackage = "payment_service";
/** TODO: Remove this once we move into payment service and call user service */
export interface StudentObj {
    id: ObjectId | undefined;
    name: string;
    grade: StudentGrade;
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
}
export interface ModifyTuitionInvoiceRequest {
    context: RequestContext | undefined;
    tuition_invoice: ObjectId | undefined;
    tuition_plan: ObjectId | undefined;
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
    student_count: number;
    total_paid: number;
    status: TuitionInvoiceStatus;
    total_invoices_amount: number;
}
export declare const StudentObj: MessageFns<StudentObj>;
export declare const GetFamilyTuitionInvoiceRequest: MessageFns<GetFamilyTuitionInvoiceRequest>;
export declare const GenerateTuitionInvoiceRequest: MessageFns<GenerateTuitionInvoiceRequest>;
export declare const ModifyTuitionInvoiceRequest: MessageFns<ModifyTuitionInvoiceRequest>;
export declare const ListFamiliesWithTuitionInvoicesRequest: MessageFns<ListFamiliesWithTuitionInvoicesRequest>;
export declare const ListFamiliesWithTuitionInvoicesResponse: MessageFns<ListFamiliesWithTuitionInvoicesResponse>;
export declare const FamilyWithTuitionInvoice: MessageFns<FamilyWithTuitionInvoice>;
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
