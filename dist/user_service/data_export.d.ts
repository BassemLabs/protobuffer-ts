import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { StudentGrade, StudentStatus } from "./student";
import { TeacherStatus } from "./teacher";
export declare const protobufPackage = "user_service";
/**
 * These are approved, fixed fields. Arbitrary data paths are
 * deliberately absent. The catalog further limits each dataset's allowed keys.
 */
export declare enum DataExportDataset {
    DATA_EXPORT_DATASET_UNSPECIFIED = "DATA_EXPORT_DATASET_UNSPECIFIED",
    DATA_EXPORT_DATASET_STUDENTS = "DATA_EXPORT_DATASET_STUDENTS",
    DATA_EXPORT_DATASET_PARENTS = "DATA_EXPORT_DATASET_PARENTS",
    DATA_EXPORT_DATASET_TEACHERS = "DATA_EXPORT_DATASET_TEACHERS",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function dataExportDatasetFromJSON(object: any): DataExportDataset;
export declare function dataExportDatasetToJSON(object: DataExportDataset): string;
export declare function dataExportDatasetToNumber(object: DataExportDataset): number;
export declare enum DataExportColumn {
    DATA_EXPORT_COLUMN_UNSPECIFIED = "DATA_EXPORT_COLUMN_UNSPECIFIED",
    DATA_EXPORT_COLUMN_STUDENT_ID = "DATA_EXPORT_COLUMN_STUDENT_ID",
    DATA_EXPORT_COLUMN_STUDENT_ID_NUMBER = "DATA_EXPORT_COLUMN_STUDENT_ID_NUMBER",
    DATA_EXPORT_COLUMN_STUDENT_FIRST_NAME = "DATA_EXPORT_COLUMN_STUDENT_FIRST_NAME",
    DATA_EXPORT_COLUMN_STUDENT_LAST_NAME = "DATA_EXPORT_COLUMN_STUDENT_LAST_NAME",
    DATA_EXPORT_COLUMN_STUDENT_GENDER = "DATA_EXPORT_COLUMN_STUDENT_GENDER",
    DATA_EXPORT_COLUMN_STUDENT_DATE_OF_BIRTH = "DATA_EXPORT_COLUMN_STUDENT_DATE_OF_BIRTH",
    DATA_EXPORT_COLUMN_STUDENT_STATUS = "DATA_EXPORT_COLUMN_STUDENT_STATUS",
    DATA_EXPORT_COLUMN_STUDENT_GRADE = "DATA_EXPORT_COLUMN_STUDENT_GRADE",
    DATA_EXPORT_COLUMN_STUDENT_SCHOOL_YEAR = "DATA_EXPORT_COLUMN_STUDENT_SCHOOL_YEAR",
    DATA_EXPORT_COLUMN_STUDENT_USERNAME = "DATA_EXPORT_COLUMN_STUDENT_USERNAME",
    DATA_EXPORT_COLUMN_STUDENT_EMAIL = "DATA_EXPORT_COLUMN_STUDENT_EMAIL",
    DATA_EXPORT_COLUMN_STUDENT_EMAIL_DOMAIN = "DATA_EXPORT_COLUMN_STUDENT_EMAIL_DOMAIN",
    DATA_EXPORT_COLUMN_STUDENT_HAS_LDAP_ACCOUNT = "DATA_EXPORT_COLUMN_STUDENT_HAS_LDAP_ACCOUNT",
    DATA_EXPORT_COLUMN_FAMILY_ID = "DATA_EXPORT_COLUMN_FAMILY_ID",
    DATA_EXPORT_COLUMN_FAMILY_NAME = "DATA_EXPORT_COLUMN_FAMILY_NAME",
    DATA_EXPORT_COLUMN_FAMILY_STUDENT_LIVING = "DATA_EXPORT_COLUMN_FAMILY_STUDENT_LIVING",
    DATA_EXPORT_COLUMN_FAMILY_LANGUAGE_SPOKEN = "DATA_EXPORT_COLUMN_FAMILY_LANGUAGE_SPOKEN",
    DATA_EXPORT_COLUMN_FAMILY_PREFERRED_CONTACT_ID = "DATA_EXPORT_COLUMN_FAMILY_PREFERRED_CONTACT_ID",
    DATA_EXPORT_COLUMN_FAMILY_EMERGENCY_CONTACT_NAME = "DATA_EXPORT_COLUMN_FAMILY_EMERGENCY_CONTACT_NAME",
    DATA_EXPORT_COLUMN_FAMILY_EMERGENCY_CONTACT_PHONE = "DATA_EXPORT_COLUMN_FAMILY_EMERGENCY_CONTACT_PHONE",
    DATA_EXPORT_COLUMN_FAMILY_EMERGENCY_CONTACT_EMAIL = "DATA_EXPORT_COLUMN_FAMILY_EMERGENCY_CONTACT_EMAIL",
    DATA_EXPORT_COLUMN_FAMILY_PRIMARY_PAYER_ID = "DATA_EXPORT_COLUMN_FAMILY_PRIMARY_PAYER_ID",
    DATA_EXPORT_COLUMN_FAMILY_AUTO_PAY_DISABLED = "DATA_EXPORT_COLUMN_FAMILY_AUTO_PAY_DISABLED",
    DATA_EXPORT_COLUMN_FAMILY_GUARDIAN_IDS = "DATA_EXPORT_COLUMN_FAMILY_GUARDIAN_IDS",
    DATA_EXPORT_COLUMN_FAMILY_GUARDIANS_TO_NOT_CONTACT_IDS = "DATA_EXPORT_COLUMN_FAMILY_GUARDIANS_TO_NOT_CONTACT_IDS",
    DATA_EXPORT_COLUMN_FAMILY_INVITED_BY_ID = "DATA_EXPORT_COLUMN_FAMILY_INVITED_BY_ID",
    DATA_EXPORT_COLUMN_FAMILY_INVITED_AT = "DATA_EXPORT_COLUMN_FAMILY_INVITED_AT",
    DATA_EXPORT_COLUMN_FAMILY_ORGANIZATION_ID = "DATA_EXPORT_COLUMN_FAMILY_ORGANIZATION_ID",
    DATA_EXPORT_COLUMN_FAMILY_CREATED_AT = "DATA_EXPORT_COLUMN_FAMILY_CREATED_AT",
    DATA_EXPORT_COLUMN_FAMILY_UPDATED_AT = "DATA_EXPORT_COLUMN_FAMILY_UPDATED_AT",
    DATA_EXPORT_COLUMN_FIRST_GUARDIAN_ID = "DATA_EXPORT_COLUMN_FIRST_GUARDIAN_ID",
    DATA_EXPORT_COLUMN_FIRST_GUARDIAN_NAME = "DATA_EXPORT_COLUMN_FIRST_GUARDIAN_NAME",
    DATA_EXPORT_COLUMN_FIRST_GUARDIAN_EMAIL = "DATA_EXPORT_COLUMN_FIRST_GUARDIAN_EMAIL",
    DATA_EXPORT_COLUMN_FIRST_GUARDIAN_PHONE = "DATA_EXPORT_COLUMN_FIRST_GUARDIAN_PHONE",
    DATA_EXPORT_COLUMN_FIRST_GUARDIAN_FIREBASE_USER_ID = "DATA_EXPORT_COLUMN_FIRST_GUARDIAN_FIREBASE_USER_ID",
    DATA_EXPORT_COLUMN_FIRST_GUARDIAN_STRIPE_CUSTOMER_ID = "DATA_EXPORT_COLUMN_FIRST_GUARDIAN_STRIPE_CUSTOMER_ID",
    DATA_EXPORT_COLUMN_FIRST_GUARDIAN_ENABLE_AUTO_PAY = "DATA_EXPORT_COLUMN_FIRST_GUARDIAN_ENABLE_AUTO_PAY",
    DATA_EXPORT_COLUMN_FIRST_GUARDIAN_SETUP_INTENT_REQUIRES_ACTION = "DATA_EXPORT_COLUMN_FIRST_GUARDIAN_SETUP_INTENT_REQUIRES_ACTION",
    DATA_EXPORT_COLUMN_FIRST_GUARDIAN_SETUP_INTENT_FAILURE = "DATA_EXPORT_COLUMN_FIRST_GUARDIAN_SETUP_INTENT_FAILURE",
    DATA_EXPORT_COLUMN_FIRST_GUARDIAN_DEFAULT_PAYMENT_METHOD_ID = "DATA_EXPORT_COLUMN_FIRST_GUARDIAN_DEFAULT_PAYMENT_METHOD_ID",
    DATA_EXPORT_COLUMN_FIRST_GUARDIAN_DEFAULT_PAYMENT_METHOD_TYPE = "DATA_EXPORT_COLUMN_FIRST_GUARDIAN_DEFAULT_PAYMENT_METHOD_TYPE",
    DATA_EXPORT_COLUMN_FIRST_GUARDIAN_PAYMENT_METHOD_BRAND = "DATA_EXPORT_COLUMN_FIRST_GUARDIAN_PAYMENT_METHOD_BRAND",
    DATA_EXPORT_COLUMN_FIRST_GUARDIAN_PAYMENT_METHOD_LAST4 = "DATA_EXPORT_COLUMN_FIRST_GUARDIAN_PAYMENT_METHOD_LAST4",
    DATA_EXPORT_COLUMN_FIRST_GUARDIAN_PAYMENT_METHOD_EXPIRY = "DATA_EXPORT_COLUMN_FIRST_GUARDIAN_PAYMENT_METHOD_EXPIRY",
    DATA_EXPORT_COLUMN_FIRST_GUARDIAN_PAYMENT_METHOD_MANDATE_ID = "DATA_EXPORT_COLUMN_FIRST_GUARDIAN_PAYMENT_METHOD_MANDATE_ID",
    DATA_EXPORT_COLUMN_FIRST_GUARDIAN_ORGANIZATION_ID = "DATA_EXPORT_COLUMN_FIRST_GUARDIAN_ORGANIZATION_ID",
    DATA_EXPORT_COLUMN_FIRST_GUARDIAN_CREATED_AT = "DATA_EXPORT_COLUMN_FIRST_GUARDIAN_CREATED_AT",
    DATA_EXPORT_COLUMN_FIRST_GUARDIAN_UPDATED_AT = "DATA_EXPORT_COLUMN_FIRST_GUARDIAN_UPDATED_AT",
    DATA_EXPORT_COLUMN_SECOND_GUARDIAN_ID = "DATA_EXPORT_COLUMN_SECOND_GUARDIAN_ID",
    DATA_EXPORT_COLUMN_SECOND_GUARDIAN_NAME = "DATA_EXPORT_COLUMN_SECOND_GUARDIAN_NAME",
    DATA_EXPORT_COLUMN_SECOND_GUARDIAN_EMAIL = "DATA_EXPORT_COLUMN_SECOND_GUARDIAN_EMAIL",
    DATA_EXPORT_COLUMN_SECOND_GUARDIAN_PHONE = "DATA_EXPORT_COLUMN_SECOND_GUARDIAN_PHONE",
    DATA_EXPORT_COLUMN_SECOND_GUARDIAN_FIREBASE_USER_ID = "DATA_EXPORT_COLUMN_SECOND_GUARDIAN_FIREBASE_USER_ID",
    DATA_EXPORT_COLUMN_SECOND_GUARDIAN_STRIPE_CUSTOMER_ID = "DATA_EXPORT_COLUMN_SECOND_GUARDIAN_STRIPE_CUSTOMER_ID",
    DATA_EXPORT_COLUMN_SECOND_GUARDIAN_ENABLE_AUTO_PAY = "DATA_EXPORT_COLUMN_SECOND_GUARDIAN_ENABLE_AUTO_PAY",
    DATA_EXPORT_COLUMN_SECOND_GUARDIAN_SETUP_INTENT_REQUIRES_ACTION = "DATA_EXPORT_COLUMN_SECOND_GUARDIAN_SETUP_INTENT_REQUIRES_ACTION",
    DATA_EXPORT_COLUMN_SECOND_GUARDIAN_SETUP_INTENT_FAILURE = "DATA_EXPORT_COLUMN_SECOND_GUARDIAN_SETUP_INTENT_FAILURE",
    DATA_EXPORT_COLUMN_SECOND_GUARDIAN_DEFAULT_PAYMENT_METHOD_ID = "DATA_EXPORT_COLUMN_SECOND_GUARDIAN_DEFAULT_PAYMENT_METHOD_ID",
    DATA_EXPORT_COLUMN_SECOND_GUARDIAN_DEFAULT_PAYMENT_METHOD_TYPE = "DATA_EXPORT_COLUMN_SECOND_GUARDIAN_DEFAULT_PAYMENT_METHOD_TYPE",
    DATA_EXPORT_COLUMN_SECOND_GUARDIAN_PAYMENT_METHOD_BRAND = "DATA_EXPORT_COLUMN_SECOND_GUARDIAN_PAYMENT_METHOD_BRAND",
    DATA_EXPORT_COLUMN_SECOND_GUARDIAN_PAYMENT_METHOD_LAST4 = "DATA_EXPORT_COLUMN_SECOND_GUARDIAN_PAYMENT_METHOD_LAST4",
    DATA_EXPORT_COLUMN_SECOND_GUARDIAN_PAYMENT_METHOD_EXPIRY = "DATA_EXPORT_COLUMN_SECOND_GUARDIAN_PAYMENT_METHOD_EXPIRY",
    DATA_EXPORT_COLUMN_SECOND_GUARDIAN_PAYMENT_METHOD_MANDATE_ID = "DATA_EXPORT_COLUMN_SECOND_GUARDIAN_PAYMENT_METHOD_MANDATE_ID",
    /**
     * DATA_EXPORT_COLUMN_ADDITIONAL_GUARDIANS - A JSON array for guardians after the first two, preserving family order.
     * Each object contains the same approved contact, payment, and account
     * metadata exposed by the first and second guardian columns above,
     * including organization ID and creation/update timestamps.
     */
    DATA_EXPORT_COLUMN_ADDITIONAL_GUARDIANS = "DATA_EXPORT_COLUMN_ADDITIONAL_GUARDIANS",
    DATA_EXPORT_COLUMN_SECOND_GUARDIAN_ORGANIZATION_ID = "DATA_EXPORT_COLUMN_SECOND_GUARDIAN_ORGANIZATION_ID",
    DATA_EXPORT_COLUMN_SECOND_GUARDIAN_CREATED_AT = "DATA_EXPORT_COLUMN_SECOND_GUARDIAN_CREATED_AT",
    DATA_EXPORT_COLUMN_SECOND_GUARDIAN_UPDATED_AT = "DATA_EXPORT_COLUMN_SECOND_GUARDIAN_UPDATED_AT",
    /** DATA_EXPORT_COLUMN_PARENT_ID - A parent export row represents one guardian-family relationship. */
    DATA_EXPORT_COLUMN_PARENT_ID = "DATA_EXPORT_COLUMN_PARENT_ID",
    DATA_EXPORT_COLUMN_PARENT_NAME = "DATA_EXPORT_COLUMN_PARENT_NAME",
    DATA_EXPORT_COLUMN_PARENT_EMAIL = "DATA_EXPORT_COLUMN_PARENT_EMAIL",
    DATA_EXPORT_COLUMN_PARENT_PHONE = "DATA_EXPORT_COLUMN_PARENT_PHONE",
    DATA_EXPORT_COLUMN_PARENT_FIREBASE_USER_ID = "DATA_EXPORT_COLUMN_PARENT_FIREBASE_USER_ID",
    DATA_EXPORT_COLUMN_PARENT_STRIPE_CUSTOMER_ID = "DATA_EXPORT_COLUMN_PARENT_STRIPE_CUSTOMER_ID",
    DATA_EXPORT_COLUMN_PARENT_ENABLE_AUTO_PAY = "DATA_EXPORT_COLUMN_PARENT_ENABLE_AUTO_PAY",
    DATA_EXPORT_COLUMN_PARENT_SETUP_INTENT_REQUIRES_ACTION = "DATA_EXPORT_COLUMN_PARENT_SETUP_INTENT_REQUIRES_ACTION",
    DATA_EXPORT_COLUMN_PARENT_SETUP_INTENT_FAILURE = "DATA_EXPORT_COLUMN_PARENT_SETUP_INTENT_FAILURE",
    DATA_EXPORT_COLUMN_PARENT_DEFAULT_PAYMENT_METHOD_ID = "DATA_EXPORT_COLUMN_PARENT_DEFAULT_PAYMENT_METHOD_ID",
    DATA_EXPORT_COLUMN_PARENT_DEFAULT_PAYMENT_METHOD_TYPE = "DATA_EXPORT_COLUMN_PARENT_DEFAULT_PAYMENT_METHOD_TYPE",
    DATA_EXPORT_COLUMN_PARENT_PAYMENT_METHOD_BRAND = "DATA_EXPORT_COLUMN_PARENT_PAYMENT_METHOD_BRAND",
    DATA_EXPORT_COLUMN_PARENT_PAYMENT_METHOD_LAST4 = "DATA_EXPORT_COLUMN_PARENT_PAYMENT_METHOD_LAST4",
    DATA_EXPORT_COLUMN_PARENT_PAYMENT_METHOD_EXPIRY = "DATA_EXPORT_COLUMN_PARENT_PAYMENT_METHOD_EXPIRY",
    DATA_EXPORT_COLUMN_PARENT_PAYMENT_METHOD_MANDATE_ID = "DATA_EXPORT_COLUMN_PARENT_PAYMENT_METHOD_MANDATE_ID",
    DATA_EXPORT_COLUMN_PARENT_IS_PREFERRED_CONTACT = "DATA_EXPORT_COLUMN_PARENT_IS_PREFERRED_CONTACT",
    DATA_EXPORT_COLUMN_PARENT_IS_PRIMARY_PAYER = "DATA_EXPORT_COLUMN_PARENT_IS_PRIMARY_PAYER",
    DATA_EXPORT_COLUMN_PARENT_DO_NOT_CONTACT = "DATA_EXPORT_COLUMN_PARENT_DO_NOT_CONTACT",
    DATA_EXPORT_COLUMN_PARENT_ORGANIZATION_ID = "DATA_EXPORT_COLUMN_PARENT_ORGANIZATION_ID",
    DATA_EXPORT_COLUMN_PARENT_CREATED_AT = "DATA_EXPORT_COLUMN_PARENT_CREATED_AT",
    DATA_EXPORT_COLUMN_PARENT_UPDATED_AT = "DATA_EXPORT_COLUMN_PARENT_UPDATED_AT",
    DATA_EXPORT_COLUMN_TEACHER_ID = "DATA_EXPORT_COLUMN_TEACHER_ID",
    DATA_EXPORT_COLUMN_TEACHER_FIRST_NAME = "DATA_EXPORT_COLUMN_TEACHER_FIRST_NAME",
    DATA_EXPORT_COLUMN_TEACHER_LAST_NAME = "DATA_EXPORT_COLUMN_TEACHER_LAST_NAME",
    DATA_EXPORT_COLUMN_TEACHER_GENDER = "DATA_EXPORT_COLUMN_TEACHER_GENDER",
    DATA_EXPORT_COLUMN_TEACHER_DATE_OF_BIRTH = "DATA_EXPORT_COLUMN_TEACHER_DATE_OF_BIRTH",
    DATA_EXPORT_COLUMN_TEACHER_STATUS = "DATA_EXPORT_COLUMN_TEACHER_STATUS",
    DATA_EXPORT_COLUMN_TEACHER_USERNAME = "DATA_EXPORT_COLUMN_TEACHER_USERNAME",
    DATA_EXPORT_COLUMN_TEACHER_EMAIL = "DATA_EXPORT_COLUMN_TEACHER_EMAIL",
    DATA_EXPORT_COLUMN_TEACHER_EMAIL_DOMAIN = "DATA_EXPORT_COLUMN_TEACHER_EMAIL_DOMAIN",
    DATA_EXPORT_COLUMN_TEACHER_PERSONAL_EMAIL = "DATA_EXPORT_COLUMN_TEACHER_PERSONAL_EMAIL",
    DATA_EXPORT_COLUMN_TEACHER_PHONE = "DATA_EXPORT_COLUMN_TEACHER_PHONE",
    DATA_EXPORT_COLUMN_TEACHER_ROLE_ID = "DATA_EXPORT_COLUMN_TEACHER_ROLE_ID",
    DATA_EXPORT_COLUMN_TEACHER_ROLE_NAME = "DATA_EXPORT_COLUMN_TEACHER_ROLE_NAME",
    DATA_EXPORT_COLUMN_TEACHER_SIGNATURE_FILE_ID = "DATA_EXPORT_COLUMN_TEACHER_SIGNATURE_FILE_ID",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function dataExportColumnFromJSON(object: any): DataExportColumn;
export declare function dataExportColumnToJSON(object: DataExportColumn): string;
export declare function dataExportColumnToNumber(object: DataExportColumn): number;
export declare enum DataExportSortKey {
    DATA_EXPORT_SORT_KEY_UNSPECIFIED = "DATA_EXPORT_SORT_KEY_UNSPECIFIED",
    DATA_EXPORT_SORT_KEY_STUDENT_ID_NUMBER = "DATA_EXPORT_SORT_KEY_STUDENT_ID_NUMBER",
    DATA_EXPORT_SORT_KEY_STUDENT_FIRST_NAME = "DATA_EXPORT_SORT_KEY_STUDENT_FIRST_NAME",
    DATA_EXPORT_SORT_KEY_STUDENT_LAST_NAME = "DATA_EXPORT_SORT_KEY_STUDENT_LAST_NAME",
    DATA_EXPORT_SORT_KEY_STUDENT_GENDER = "DATA_EXPORT_SORT_KEY_STUDENT_GENDER",
    DATA_EXPORT_SORT_KEY_STUDENT_GRADE = "DATA_EXPORT_SORT_KEY_STUDENT_GRADE",
    DATA_EXPORT_SORT_KEY_STUDENT_STATUS = "DATA_EXPORT_SORT_KEY_STUDENT_STATUS",
    DATA_EXPORT_SORT_KEY_STUDENT_DATE_OF_BIRTH = "DATA_EXPORT_SORT_KEY_STUDENT_DATE_OF_BIRTH",
    DATA_EXPORT_SORT_KEY_FAMILY_NAME = "DATA_EXPORT_SORT_KEY_FAMILY_NAME",
    DATA_EXPORT_SORT_KEY_PARENT_NAME = "DATA_EXPORT_SORT_KEY_PARENT_NAME",
    DATA_EXPORT_SORT_KEY_PARENT_EMAIL = "DATA_EXPORT_SORT_KEY_PARENT_EMAIL",
    DATA_EXPORT_SORT_KEY_TEACHER_FIRST_NAME = "DATA_EXPORT_SORT_KEY_TEACHER_FIRST_NAME",
    DATA_EXPORT_SORT_KEY_TEACHER_LAST_NAME = "DATA_EXPORT_SORT_KEY_TEACHER_LAST_NAME",
    DATA_EXPORT_SORT_KEY_TEACHER_STATUS = "DATA_EXPORT_SORT_KEY_TEACHER_STATUS",
    DATA_EXPORT_SORT_KEY_TEACHER_ROLE_NAME = "DATA_EXPORT_SORT_KEY_TEACHER_ROLE_NAME",
    DATA_EXPORT_SORT_KEY_TEACHER_GENDER = "DATA_EXPORT_SORT_KEY_TEACHER_GENDER",
    DATA_EXPORT_SORT_KEY_TEACHER_EMAIL = "DATA_EXPORT_SORT_KEY_TEACHER_EMAIL",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function dataExportSortKeyFromJSON(object: any): DataExportSortKey;
export declare function dataExportSortKeyToJSON(object: DataExportSortKey): string;
export declare function dataExportSortKeyToNumber(object: DataExportSortKey): number;
export declare enum DataExportSortDirection {
    DATA_EXPORT_SORT_DIRECTION_UNSPECIFIED = "DATA_EXPORT_SORT_DIRECTION_UNSPECIFIED",
    DATA_EXPORT_SORT_DIRECTION_ASCENDING = "DATA_EXPORT_SORT_DIRECTION_ASCENDING",
    DATA_EXPORT_SORT_DIRECTION_DESCENDING = "DATA_EXPORT_SORT_DIRECTION_DESCENDING",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function dataExportSortDirectionFromJSON(object: any): DataExportSortDirection;
export declare function dataExportSortDirectionToJSON(object: DataExportSortDirection): string;
export declare function dataExportSortDirectionToNumber(object: DataExportSortDirection): number;
export interface DataExportColumnDefinition {
    column?: DataExportColumn | undefined;
    label?: string | undefined;
    group?: string | undefined;
    /** Custom definitions use UNSPECIFIED for column and carry their field ID. */
    custom_field_id?: ObjectId | undefined;
    /** Server-computed definition fingerprint binds approved requests to field meaning. */
    custom_field_schema_fingerprint?: string | undefined;
}
export interface DataExportSortDefinition {
    key?: DataExportSortKey | undefined;
    label?: string | undefined;
}
export interface DataExportSortRule {
    key?: DataExportSortKey | undefined;
    direction?: DataExportSortDirection | undefined;
}
export interface StudentDataExportFilters {
    school_year_id: ObjectId | undefined;
    statuses: StudentStatus[];
    grades: StudentGrade[];
    genders: string[];
    family_ids: ObjectId[];
    name_search?: string | undefined;
    id_number_search?: string | undefined;
}
export interface ParentDataExportFilters {
    school_year_id: ObjectId | undefined;
    student_statuses: StudentStatus[];
    family_ids: ObjectId[];
    name_search?: string | undefined;
    email_search?: string | undefined;
    preferred_contact_only?: boolean | undefined;
}
export interface TeacherDataExportFilters {
    statuses: TeacherStatus[];
    role_ids: ObjectId[];
    genders: string[];
    name_search?: string | undefined;
    email_search?: string | undefined;
}
export interface DataExportSelection {
    /**
     * Order determines CSV and preview column order. The server rejects duplicate,
     * unknown, and dataset-incompatible keys.
     */
    columns: DataExportColumn[];
    /** Rules are applied in order; the server adds stable entity IDs as tie-breakers. */
    sort_rules: DataExportSortRule[];
    students?: StudentDataExportFilters | undefined;
    parents?: ParentDataExportFilters | undefined;
    teachers?: TeacherDataExportFilters | undefined;
    /** Custom columns follow standard columns in this order. Access is checked live. */
    custom_field_ids: ObjectId[];
}
export interface DataExportTemplate {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    name?: string | undefined;
    selection: DataExportSelection | undefined;
    created_by: ObjectId | undefined;
    created_at: Date | undefined;
    updated_at: Date | undefined;
}
export interface ListDataExportTemplatesRequest {
    context: RequestContext | undefined;
}
export interface ListDataExportTemplatesResponse {
    templates: DataExportTemplate[];
}
export interface CreateDataExportTemplateRequest {
    context: RequestContext | undefined;
    name?: string | undefined;
    selection: DataExportSelection | undefined;
}
export interface UpdateDataExportTemplateRequest {
    context: RequestContext | undefined;
    template_id: ObjectId | undefined;
    name?: string | undefined;
    selection: DataExportSelection | undefined;
}
export interface DeleteDataExportTemplateRequest {
    context: RequestContext | undefined;
    template_id: ObjectId | undefined;
}
export interface DataExportRow {
    /** Stable opaque key: student/teacher ObjectId or family_id:guardian_id. */
    row_key?: string | undefined;
    /** One cell per selected column, in selection order. Missing data is empty. */
    values: string[];
}
export interface GetDataExportCatalogRequest {
    context: RequestContext | undefined;
    dataset?: DataExportDataset | undefined;
}
export interface GetDataExportCatalogResponse {
    dataset?: DataExportDataset | undefined;
    columns: DataExportColumnDefinition[];
    sort_keys: DataExportSortDefinition[];
    student_statuses: StudentStatus[];
    student_grades: StudentGrade[];
    teacher_statuses: TeacherStatus[];
    genders: string[];
    /** Active, accessible fields belonging to this dataset only. */
    custom_fields: DataExportColumnDefinition[];
    /** Accessible archived field metadata for repairing saved selections, never exportable. */
    archived_custom_fields: DataExportColumnDefinition[];
}
export interface PreviewDataExportRequest {
    context: RequestContext | undefined;
    selection: DataExportSelection | undefined;
}
export interface PreviewDataExportResponse {
    /** Validated and canonicalized selection to bind into the preview token. */
    selection: DataExportSelection | undefined;
    matching_row_count?: number | undefined;
    columns: DataExportColumnDefinition[];
    /** At most the first ten rows in the requested order. */
    sample_rows: DataExportRow[];
    /**
     * Lowercase SHA-256 hex of each ordered row_key's UTF-8 bytes followed by
     * a newline. Recompute from every downloaded page to catch membership or
     * order changes even when the count stays the same.
     */
    membership_fingerprint?: string | undefined;
}
export interface GetDataExportPageRequest {
    context: RequestContext | undefined;
    selection: DataExportSelection | undefined;
    /** Opaque keyset cursor returned by the previous page. */
    after_cursor?: string | undefined;
}
export interface GetDataExportPageResponse {
    rows: DataExportRow[];
    next_cursor?: string | undefined;
}
export declare const DataExportColumnDefinition: MessageFns<DataExportColumnDefinition>;
export declare const DataExportSortDefinition: MessageFns<DataExportSortDefinition>;
export declare const DataExportSortRule: MessageFns<DataExportSortRule>;
export declare const StudentDataExportFilters: MessageFns<StudentDataExportFilters>;
export declare const ParentDataExportFilters: MessageFns<ParentDataExportFilters>;
export declare const TeacherDataExportFilters: MessageFns<TeacherDataExportFilters>;
export declare const DataExportSelection: MessageFns<DataExportSelection>;
export declare const DataExportTemplate: MessageFns<DataExportTemplate>;
export declare const ListDataExportTemplatesRequest: MessageFns<ListDataExportTemplatesRequest>;
export declare const ListDataExportTemplatesResponse: MessageFns<ListDataExportTemplatesResponse>;
export declare const CreateDataExportTemplateRequest: MessageFns<CreateDataExportTemplateRequest>;
export declare const UpdateDataExportTemplateRequest: MessageFns<UpdateDataExportTemplateRequest>;
export declare const DeleteDataExportTemplateRequest: MessageFns<DeleteDataExportTemplateRequest>;
export declare const DataExportRow: MessageFns<DataExportRow>;
export declare const GetDataExportCatalogRequest: MessageFns<GetDataExportCatalogRequest>;
export declare const GetDataExportCatalogResponse: MessageFns<GetDataExportCatalogResponse>;
export declare const PreviewDataExportRequest: MessageFns<PreviewDataExportRequest>;
export declare const PreviewDataExportResponse: MessageFns<PreviewDataExportResponse>;
export declare const GetDataExportPageRequest: MessageFns<GetDataExportPageRequest>;
export declare const GetDataExportPageResponse: MessageFns<GetDataExportPageResponse>;
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
