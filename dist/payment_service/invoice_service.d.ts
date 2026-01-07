import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ActionRequiredByParents } from "../user_service/action_required_by_parents";
import { StudentStatus } from "../user_service/student";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { AutoPaymentAttempt, AutoPaymentStatus, Coupon, Invoice, InvoiceFilter, InvoiceItem, InvoiceResponse } from "./invoice";
export declare const protobufPackage = "payment_service";
/** Invoice messages */
export interface Invoices {
    invoices: Invoice[];
}
export interface GetInvoiceRequest {
    context: RequestContext | undefined;
    invoice_id: ObjectId | undefined;
}
export interface GetInvoiceByNumberRequest {
    context: RequestContext | undefined;
    invoice_number: number;
}
export interface GetUserInvoicesRequest {
    context: RequestContext | undefined;
    user_id: ObjectId | undefined;
}
export interface GetUserInvoicesResponse {
    invoices: InvoiceResponse[];
}
export interface GetFamilyInvoicesRequest {
    context: RequestContext | undefined;
    family_id: ObjectId | undefined;
}
export interface GetParentInvoicesRequest {
    context: RequestContext | undefined;
    parent_id: ObjectId | undefined;
    school_year?: ObjectId | undefined;
    title?: string | undefined;
}
export interface GetActionsRequiredByParentsRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
}
export interface GetActionsRequiredByParentsResponse {
    actions: ActionRequiredByParents[];
}
export interface StudentHasNoUnpaidInvoicesRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
}
export interface StudentHasNoUnpaidInvoicesResponse {
    has_no_unpaid_invoices: boolean;
}
export interface ListInvoicesRequest {
    context: RequestContext | undefined;
    filter: InvoiceFilter | undefined;
}
export interface AggregationResponse {
    invoices: Invoice[];
    invoices_count: number;
}
export interface PaginatedListInvoicesResponse {
    invoices: InvoiceResponse[];
    invoices_count: number;
}
export interface ListInvoicesResponse {
    invoices: InvoiceResponse[];
}
export interface IsInvoicePaidRequest {
    context: RequestContext | undefined;
    invoice_id: ObjectId | undefined;
}
export interface IsInvoicePaidResponse {
    is_paid: boolean;
}
export interface CreateInvoiceRequest {
    context: RequestContext | undefined;
    title: string;
    description: string;
    show_hst: boolean;
    disable_tax: boolean;
    users: ObjectId[];
    families: ObjectId[];
    items: InvoiceItem[];
    coupons: Coupon[];
    due_date?: Date | undefined;
    school_year: ObjectId | undefined;
    auto_pay_enabled?: boolean | undefined;
    charge_on_date?: Date | undefined;
    auto_payment_status?: AutoPaymentStatus | undefined;
    is_tuition?: boolean | undefined;
}
export interface CreateInvoicesResponse {
    invoices: InvoiceResponse[];
}
export interface CreateInvoiceForClassRequest {
    context: RequestContext | undefined;
    title: string;
    description: string;
    show_hst: boolean;
    disable_tax: boolean;
    homerooms: ObjectId[];
    courses: ObjectId[];
    items: InvoiceItem[];
    coupons: Coupon[];
    due_date?: Date | undefined;
    school_year: ObjectId | undefined;
    auto_pay_enabled?: boolean | undefined;
    charge_on_date?: Date | undefined;
    auto_payment_status?: AutoPaymentStatus | undefined;
}
export interface GenerateInterviewFeeInvoiceRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    school_year: ObjectId | undefined;
}
export interface GenerateWaitlistFeeInvoiceRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    school_year: ObjectId | undefined;
}
export interface GenerateRegistrationFeesInvoiceRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    school_year: ObjectId | undefined;
}
export interface CreateInvoiceForClassResponse {
    invoices: InvoiceResponse[];
}
export interface UpdateInvoiceRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
    title: string;
    description: string;
    show_hst: boolean;
    disable_tax: boolean;
    items: InvoiceItem[];
    coupons: Coupon[];
    due_date?: Date | undefined;
}
export interface UpdateInvoiceAutoPaymentRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
    auto_pay_enabled: boolean;
    charge_on_date: Date | undefined;
}
export interface ArchiveInvoiceRequest {
    context: RequestContext | undefined;
    invoice_id: ObjectId | undefined;
}
export interface UnarchiveInvoiceRequest {
    context: RequestContext | undefined;
    invoice_id: ObjectId | undefined;
}
export interface GetAutoPayInvoicesReadyToChargeRequest {
    context: RequestContext | undefined;
}
export interface SetAutoPayInvoiceStatusRequest {
    context: RequestContext | undefined;
    invoice_id: ObjectId | undefined;
    auto_payment_status: AutoPaymentStatus;
}
export interface GetFamilyTuitionInvoicesRequest {
    context: RequestContext | undefined;
    family_id: ObjectId | undefined;
    school_year: ObjectId | undefined;
    start_date?: Date | undefined;
    end_date?: Date | undefined;
}
export interface GetStudentsWithUnpaidInvoicesRequest {
    context: RequestContext | undefined;
    student_statuses: StudentStatus[];
    school_year: ObjectId | undefined;
}
export interface GetStudentsWithUnpaidInvoicesResponse {
    student_ids: ObjectId[];
}
export interface GetStudentsWithReregistrationInvoicesRequest {
    context: RequestContext | undefined;
    school_year: ObjectId | undefined;
}
export interface GetStudentsWithReregistrationInvoicesResponse {
    student_ids: ObjectId[];
}
export interface GetOrgPaidBassemLabsFeesInPeriodRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    start_date: Date | undefined;
    end_date: Date | undefined;
}
export interface GetOrgPaidBassemLabsFeesInPeriodResponse {
    total_amount: number;
}
export interface UpsertOrganizationInvoiceRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    invoice_start_date: Date | undefined;
    invoice_end_date: Date | undefined;
    current_enrolled_students_count: number;
    is_in_trial_period: boolean;
}
export interface GetLatestOrganizationInvoiceRequest {
    context: RequestContext | undefined;
}
export interface GetOrganizationInvoicesRequest {
    context: RequestContext | undefined;
}
export interface GetAllOrganizationInvoicesRequest {
    context: RequestContext | undefined;
}
/** Auto payment retry messages */
export interface GetFailedAutoPayInvoicesRequest {
    context: RequestContext | undefined;
}
export interface GetAutoPaymentAttemptsRequest {
    context: RequestContext | undefined;
    invoice_id: ObjectId | undefined;
}
export interface GetAutoPaymentAttemptsResponse {
    attempts: AutoPaymentAttempt[];
}
export interface ResetAutoPaymentForRetryRequest {
    context: RequestContext | undefined;
    invoice_id: ObjectId | undefined;
}
export declare const Invoices: MessageFns<Invoices>;
export declare const GetInvoiceRequest: MessageFns<GetInvoiceRequest>;
export declare const GetInvoiceByNumberRequest: MessageFns<GetInvoiceByNumberRequest>;
export declare const GetUserInvoicesRequest: MessageFns<GetUserInvoicesRequest>;
export declare const GetUserInvoicesResponse: MessageFns<GetUserInvoicesResponse>;
export declare const GetFamilyInvoicesRequest: MessageFns<GetFamilyInvoicesRequest>;
export declare const GetParentInvoicesRequest: MessageFns<GetParentInvoicesRequest>;
export declare const GetActionsRequiredByParentsRequest: MessageFns<GetActionsRequiredByParentsRequest>;
export declare const GetActionsRequiredByParentsResponse: MessageFns<GetActionsRequiredByParentsResponse>;
export declare const StudentHasNoUnpaidInvoicesRequest: MessageFns<StudentHasNoUnpaidInvoicesRequest>;
export declare const StudentHasNoUnpaidInvoicesResponse: MessageFns<StudentHasNoUnpaidInvoicesResponse>;
export declare const ListInvoicesRequest: MessageFns<ListInvoicesRequest>;
export declare const AggregationResponse: MessageFns<AggregationResponse>;
export declare const PaginatedListInvoicesResponse: MessageFns<PaginatedListInvoicesResponse>;
export declare const ListInvoicesResponse: MessageFns<ListInvoicesResponse>;
export declare const IsInvoicePaidRequest: MessageFns<IsInvoicePaidRequest>;
export declare const IsInvoicePaidResponse: MessageFns<IsInvoicePaidResponse>;
export declare const CreateInvoiceRequest: MessageFns<CreateInvoiceRequest>;
export declare const CreateInvoicesResponse: MessageFns<CreateInvoicesResponse>;
export declare const CreateInvoiceForClassRequest: MessageFns<CreateInvoiceForClassRequest>;
export declare const GenerateInterviewFeeInvoiceRequest: MessageFns<GenerateInterviewFeeInvoiceRequest>;
export declare const GenerateWaitlistFeeInvoiceRequest: MessageFns<GenerateWaitlistFeeInvoiceRequest>;
export declare const GenerateRegistrationFeesInvoiceRequest: MessageFns<GenerateRegistrationFeesInvoiceRequest>;
export declare const CreateInvoiceForClassResponse: MessageFns<CreateInvoiceForClassResponse>;
export declare const UpdateInvoiceRequest: MessageFns<UpdateInvoiceRequest>;
export declare const UpdateInvoiceAutoPaymentRequest: MessageFns<UpdateInvoiceAutoPaymentRequest>;
export declare const ArchiveInvoiceRequest: MessageFns<ArchiveInvoiceRequest>;
export declare const UnarchiveInvoiceRequest: MessageFns<UnarchiveInvoiceRequest>;
export declare const GetAutoPayInvoicesReadyToChargeRequest: MessageFns<GetAutoPayInvoicesReadyToChargeRequest>;
export declare const SetAutoPayInvoiceStatusRequest: MessageFns<SetAutoPayInvoiceStatusRequest>;
export declare const GetFamilyTuitionInvoicesRequest: MessageFns<GetFamilyTuitionInvoicesRequest>;
export declare const GetStudentsWithUnpaidInvoicesRequest: MessageFns<GetStudentsWithUnpaidInvoicesRequest>;
export declare const GetStudentsWithUnpaidInvoicesResponse: MessageFns<GetStudentsWithUnpaidInvoicesResponse>;
export declare const GetStudentsWithReregistrationInvoicesRequest: MessageFns<GetStudentsWithReregistrationInvoicesRequest>;
export declare const GetStudentsWithReregistrationInvoicesResponse: MessageFns<GetStudentsWithReregistrationInvoicesResponse>;
export declare const GetOrgPaidBassemLabsFeesInPeriodRequest: MessageFns<GetOrgPaidBassemLabsFeesInPeriodRequest>;
export declare const GetOrgPaidBassemLabsFeesInPeriodResponse: MessageFns<GetOrgPaidBassemLabsFeesInPeriodResponse>;
export declare const UpsertOrganizationInvoiceRequest: MessageFns<UpsertOrganizationInvoiceRequest>;
export declare const GetLatestOrganizationInvoiceRequest: MessageFns<GetLatestOrganizationInvoiceRequest>;
export declare const GetOrganizationInvoicesRequest: MessageFns<GetOrganizationInvoicesRequest>;
export declare const GetAllOrganizationInvoicesRequest: MessageFns<GetAllOrganizationInvoicesRequest>;
export declare const GetFailedAutoPayInvoicesRequest: MessageFns<GetFailedAutoPayInvoicesRequest>;
export declare const GetAutoPaymentAttemptsRequest: MessageFns<GetAutoPaymentAttemptsRequest>;
export declare const GetAutoPaymentAttemptsResponse: MessageFns<GetAutoPaymentAttemptsResponse>;
export declare const ResetAutoPaymentForRetryRequest: MessageFns<ResetAutoPaymentForRetryRequest>;
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
