import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Family } from "../user_service/family";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { TuitionInvoice, TuitionInvoiceStatus } from "./tuition_invoice";
export declare const protobufPackage = "payment_service";
/** TODO: Remove this once we move into payment service and call user service */
export interface StudentObj {
    id: ObjectId | undefined;
    name: string;
    grade: string;
}
export interface GetFamilyTuitionInvoiceRequest {
    context: RequestContext | undefined;
    family: ObjectId | undefined;
    schoolYear: ObjectId | undefined;
}
export interface GenerateTuitionInvoiceRequest {
    context: RequestContext | undefined;
    family: ObjectId | undefined;
    schoolYear: ObjectId | undefined;
    tuitionPlan: ObjectId | undefined;
}
export interface ModifyTuitionInvoiceRequest {
    context: RequestContext | undefined;
    tuitionInvoice: ObjectId | undefined;
    tuitionPlan: ObjectId | undefined;
}
export interface ListFamiliesWithTuitionInvoicesRequest {
    context: RequestContext | undefined;
    schoolYear: ObjectId | undefined;
    startDate?: Date | undefined;
    endDate?: Date | undefined;
}
export interface ListFamiliesWithTuitionInvoicesResponse {
    familyWithTuitionInvoice: FamilyWithTuitionInvoice[];
}
export interface FamilyWithTuitionInvoice {
    family: Family | undefined;
    tuitionInvoice?: TuitionInvoice | undefined;
    studentCount: number;
    totalPaid: number;
    status: TuitionInvoiceStatus;
    totalInvoicesAmount: number;
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
