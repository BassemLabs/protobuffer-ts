import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { DayOfWeek } from "../google/type/dayofweek";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { OnboardingStepName, OnboardingStepsStatus } from "./onboarding_steps";
import { Currency, Organization, SchoolYear } from "./organization";
export declare const protobufPackage = "organization_service";
/** Request to fetch an organization by its ID */
export interface GetOrganizationRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
}
/** Request to fetch an organization by domain */
export interface GetOrganizationByDomainRequest {
    context: RequestContext | undefined;
    domain: string;
}
/** Request to unsafely fetch an organization by ID */
export interface UnsafeGetOrganizationByOrganizationIdRequest {
    organization_id: ObjectId | undefined;
}
/** Request to unsafely fetch an organization by domain */
export interface UnsafeGetOrganizationByDomainRequest {
    domain: string;
}
/** Request to rename an organization */
export interface RenameOrganizationRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    new_name: string;
}
/** Request to update the default domain of an organization */
export interface UpdateDefaultDomainRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    new_default_domain: string;
}
/** Request to add a domain to an organization */
export interface AddDomainRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    new_domain: string;
}
/** Request to remove a domain from an organization */
export interface RemoveDomainRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    remove_domain: string;
}
/** Request to update organization main settings */
export interface UpdateOrganizationSettingsRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    name: string;
    domains: string[];
    default_domain: string;
    country_code: string;
    currency: Currency;
    login_id: string;
    main_address: string;
    weekend_days: DayOfWeek[];
    timezone: string;
}
export interface UpdateOrganizationAutoPayRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    auto_pay_disabled: boolean;
}
export interface UpdateAutoPayRetryConfigRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    max_retries: number;
    retry_interval_hours: number;
}
/** Request to fetch all organizations */
export interface GetOrganizationsRequest {
    context: RequestContext | undefined;
}
/** Response containing a list of organizations */
export interface GetOrganizationsResponse {
    organizations: Organization[];
}
export interface GetSchoolYearsRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
}
export interface GetSchoolYearRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
}
export interface GetSchoolYearsResponse {
    school_years: SchoolYear[];
}
export interface CreateSchoolYearRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    name: string;
    start_date: Date | undefined;
    end_date: Date | undefined;
}
export interface UpdateSchoolYearRegistrationStatusRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
    new_registration_status: boolean;
}
export interface UpdateSchoolYearRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
    name: string;
    is_open_for_registration: boolean;
}
export interface CreateSchoolYearResponse {
    school_years: SchoolYear[];
}
export interface StartSchoolYearRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
}
export interface StartReregistrationRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
}
export interface GetOrganizationByStripeRequest {
    stripe_account_id: string;
}
export interface UpdateStripeIdRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    stripe_acount_id: string;
}
export interface UpdateOrganizationStripePaymentInfoRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    stripe_payouts_enabled: boolean;
    stripe_details_submitted: boolean;
    stripe_charges_enabled: boolean;
}
export interface GetOrganizationByLoginIdRequest {
    context: RequestContext | undefined;
    login_id: string;
}
export interface GetOrganizationsByIdRequest {
    context: RequestContext | undefined;
    organization_ids: ObjectId[];
}
export interface GetOrganizationOnboardingStepsStatusRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
}
export interface GetAllOrganizationsOnboardingStepsStatusRequest {
    context: RequestContext | undefined;
}
export interface GetAllOrganizationsOnboardingStepsStatusResponse {
    orgs_onboarding_steps_status: OnboardingStepsStatus[];
}
export interface MarkOnboardingStepAsCompletedRequest {
    context: RequestContext | undefined;
    step_name: OnboardingStepName;
}
export interface UpdateInvoiceSettingsRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    disable_tax: boolean;
    hst_number?: string | undefined;
}
export declare const GetOrganizationRequest: MessageFns<GetOrganizationRequest>;
export declare const GetOrganizationByDomainRequest: MessageFns<GetOrganizationByDomainRequest>;
export declare const UnsafeGetOrganizationByOrganizationIdRequest: MessageFns<UnsafeGetOrganizationByOrganizationIdRequest>;
export declare const UnsafeGetOrganizationByDomainRequest: MessageFns<UnsafeGetOrganizationByDomainRequest>;
export declare const RenameOrganizationRequest: MessageFns<RenameOrganizationRequest>;
export declare const UpdateDefaultDomainRequest: MessageFns<UpdateDefaultDomainRequest>;
export declare const AddDomainRequest: MessageFns<AddDomainRequest>;
export declare const RemoveDomainRequest: MessageFns<RemoveDomainRequest>;
export declare const UpdateOrganizationSettingsRequest: MessageFns<UpdateOrganizationSettingsRequest>;
export declare const UpdateOrganizationAutoPayRequest: MessageFns<UpdateOrganizationAutoPayRequest>;
export declare const UpdateAutoPayRetryConfigRequest: MessageFns<UpdateAutoPayRetryConfigRequest>;
export declare const GetOrganizationsRequest: MessageFns<GetOrganizationsRequest>;
export declare const GetOrganizationsResponse: MessageFns<GetOrganizationsResponse>;
export declare const GetSchoolYearsRequest: MessageFns<GetSchoolYearsRequest>;
export declare const GetSchoolYearRequest: MessageFns<GetSchoolYearRequest>;
export declare const GetSchoolYearsResponse: MessageFns<GetSchoolYearsResponse>;
export declare const CreateSchoolYearRequest: MessageFns<CreateSchoolYearRequest>;
export declare const UpdateSchoolYearRegistrationStatusRequest: MessageFns<UpdateSchoolYearRegistrationStatusRequest>;
export declare const UpdateSchoolYearRequest: MessageFns<UpdateSchoolYearRequest>;
export declare const CreateSchoolYearResponse: MessageFns<CreateSchoolYearResponse>;
export declare const StartSchoolYearRequest: MessageFns<StartSchoolYearRequest>;
export declare const StartReregistrationRequest: MessageFns<StartReregistrationRequest>;
export declare const GetOrganizationByStripeRequest: MessageFns<GetOrganizationByStripeRequest>;
export declare const UpdateStripeIdRequest: MessageFns<UpdateStripeIdRequest>;
export declare const UpdateOrganizationStripePaymentInfoRequest: MessageFns<UpdateOrganizationStripePaymentInfoRequest>;
export declare const GetOrganizationByLoginIdRequest: MessageFns<GetOrganizationByLoginIdRequest>;
export declare const GetOrganizationsByIdRequest: MessageFns<GetOrganizationsByIdRequest>;
export declare const GetOrganizationOnboardingStepsStatusRequest: MessageFns<GetOrganizationOnboardingStepsStatusRequest>;
export declare const GetAllOrganizationsOnboardingStepsStatusRequest: MessageFns<GetAllOrganizationsOnboardingStepsStatusRequest>;
export declare const GetAllOrganizationsOnboardingStepsStatusResponse: MessageFns<GetAllOrganizationsOnboardingStepsStatusResponse>;
export declare const MarkOnboardingStepAsCompletedRequest: MessageFns<MarkOnboardingStepAsCompletedRequest>;
export declare const UpdateInvoiceSettingsRequest: MessageFns<UpdateInvoiceSettingsRequest>;
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
