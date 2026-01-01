import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { StudentGrade } from "../user_service/student";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { AdditionalFee, DiscountStackMode, DiscountType, DiscountValueType, PaymentInstallment, PaymentScheduleType, Scope, TuitionDiscount, TuitionPlan, TuitionRate } from "./tuition";
export declare const protobufPackage = "payment_service";
/** TuitionRate messages */
export interface GetTuitionRateRequest {
    context: RequestContext | undefined;
    school_year: ObjectId | undefined;
    grade: StudentGrade;
}
export interface ListTuitionRatesRequest {
    context: RequestContext | undefined;
    school_year: ObjectId | undefined;
}
export interface ListTuitionRatesResponse {
    rates: TuitionRate[];
}
export interface GradeAmount {
    grade: StudentGrade;
    amount: number;
}
export interface UpsertTuitionRatesRequest {
    context: RequestContext | undefined;
    school_year: ObjectId | undefined;
    grade_amounts: GradeAmount[];
}
/** AdditionalFee messages */
export interface GetAdditionalFeeRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
}
export interface ListAdditionalFeesRequest {
    context: RequestContext | undefined;
    school_year: ObjectId | undefined;
}
export interface ListAdditionalFeesResponse {
    fees: AdditionalFee[];
}
export interface CreateAdditionalFeeRequest {
    context: RequestContext | undefined;
    school_year: ObjectId | undefined;
    name: string;
    description: string;
    amount: number;
    is_optional: boolean;
    scope: Scope;
}
export interface UpdateAdditionalFeeRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
    name: string;
    description: string;
    amount: number;
    is_optional: boolean;
    scope: Scope;
}
export interface DeleteAdditionalFeeRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
}
export interface DeleteAdditionalFeeResponse {
    success: boolean;
}
/** TuitionDiscount messages */
export interface GetTuitionDiscountRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
}
export interface ListTuitionDiscountsRequest {
    context: RequestContext | undefined;
    school_year: ObjectId | undefined;
}
export interface ListTuitionDiscountsResponse {
    discounts: TuitionDiscount[];
}
export interface CreateTuitionDiscountRequest {
    context: RequestContext | undefined;
    school_year: ObjectId | undefined;
    name: string;
    discount_type: DiscountType;
    scope: Scope;
    value_type: DiscountValueType;
    value: number;
    description: string;
    stack_mode: DiscountStackMode;
}
export interface UpdateTuitionDiscountRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
    name: string;
    discount_type: DiscountType;
    scope: Scope;
    value_type: DiscountValueType;
    value: number;
    description: string;
    stack_mode: DiscountStackMode;
}
export interface DeleteTuitionDiscountRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
}
export interface DeleteTuitionDiscountResponse {
    success: boolean;
}
/** TuitionPlan messages */
export interface GetTuitionPlanRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
}
export interface ListTuitionPlansRequest {
    context: RequestContext | undefined;
    school_year: ObjectId | undefined;
    archived?: boolean | undefined;
}
export interface ListTuitionPlansResponse {
    plans: TuitionPlan[];
}
export interface CreateTuitionPlanRequest {
    context: RequestContext | undefined;
    school_year: ObjectId | undefined;
    name: string;
    description: string;
    schedule_type: PaymentScheduleType;
    day_of_month?: number | undefined;
    installments: PaymentInstallment[];
    start_date: Date | undefined;
    end_date: Date | undefined;
}
export interface UpdateTuitionPlanRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
    name: string;
    description: string;
    schedule_type: PaymentScheduleType;
    day_of_month?: number | undefined;
    installments: PaymentInstallment[];
    start_date: Date | undefined;
    end_date: Date | undefined;
}
export interface ArchiveTuitionPlanRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
}
export interface UnarchiveTuitionPlanRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
}
export declare const GetTuitionRateRequest: MessageFns<GetTuitionRateRequest>;
export declare const ListTuitionRatesRequest: MessageFns<ListTuitionRatesRequest>;
export declare const ListTuitionRatesResponse: MessageFns<ListTuitionRatesResponse>;
export declare const GradeAmount: MessageFns<GradeAmount>;
export declare const UpsertTuitionRatesRequest: MessageFns<UpsertTuitionRatesRequest>;
export declare const GetAdditionalFeeRequest: MessageFns<GetAdditionalFeeRequest>;
export declare const ListAdditionalFeesRequest: MessageFns<ListAdditionalFeesRequest>;
export declare const ListAdditionalFeesResponse: MessageFns<ListAdditionalFeesResponse>;
export declare const CreateAdditionalFeeRequest: MessageFns<CreateAdditionalFeeRequest>;
export declare const UpdateAdditionalFeeRequest: MessageFns<UpdateAdditionalFeeRequest>;
export declare const DeleteAdditionalFeeRequest: MessageFns<DeleteAdditionalFeeRequest>;
export declare const DeleteAdditionalFeeResponse: MessageFns<DeleteAdditionalFeeResponse>;
export declare const GetTuitionDiscountRequest: MessageFns<GetTuitionDiscountRequest>;
export declare const ListTuitionDiscountsRequest: MessageFns<ListTuitionDiscountsRequest>;
export declare const ListTuitionDiscountsResponse: MessageFns<ListTuitionDiscountsResponse>;
export declare const CreateTuitionDiscountRequest: MessageFns<CreateTuitionDiscountRequest>;
export declare const UpdateTuitionDiscountRequest: MessageFns<UpdateTuitionDiscountRequest>;
export declare const DeleteTuitionDiscountRequest: MessageFns<DeleteTuitionDiscountRequest>;
export declare const DeleteTuitionDiscountResponse: MessageFns<DeleteTuitionDiscountResponse>;
export declare const GetTuitionPlanRequest: MessageFns<GetTuitionPlanRequest>;
export declare const ListTuitionPlansRequest: MessageFns<ListTuitionPlansRequest>;
export declare const ListTuitionPlansResponse: MessageFns<ListTuitionPlansResponse>;
export declare const CreateTuitionPlanRequest: MessageFns<CreateTuitionPlanRequest>;
export declare const UpdateTuitionPlanRequest: MessageFns<UpdateTuitionPlanRequest>;
export declare const ArchiveTuitionPlanRequest: MessageFns<ArchiveTuitionPlanRequest>;
export declare const UnarchiveTuitionPlanRequest: MessageFns<UnarchiveTuitionPlanRequest>;
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
