import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ProfileSection } from "../organization_service/organization_profile_settings";
import { ObjectId } from "../utils/object_id";
import { UserType } from "../utils/user_type";
import { StudentStatus } from "./student";
export declare const protobufPackage = "user_service";
/** Custom field type enum */
export declare enum CustomFieldType {
    STRING = "STRING",
    SELECT = "SELECT",
    ADDRESS = "ADDRESS",
    DATE = "DATE",
    REGEX_VALIDATED = "REGEX_VALIDATED",
    CHECKBOX = "CHECKBOX",
    DOCUMENT = "DOCUMENT",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function customFieldTypeFromJSON(object: any): CustomFieldType;
export declare function customFieldTypeToJSON(object: CustomFieldType): string;
export declare function customFieldTypeToNumber(object: CustomFieldType): number;
/** Approval status enum for group approval workflow */
export declare enum ApprovalStatus {
    APPROVAL_STATUS_REQUIRED_TO_FILL = "APPROVAL_STATUS_REQUIRED_TO_FILL",
    APPROVAL_STATUS_PENDING_REVIEW = "APPROVAL_STATUS_PENDING_REVIEW",
    APPROVAL_STATUS_APPROVED = "APPROVAL_STATUS_APPROVED",
    APPROVAL_STATUS_REJECTED = "APPROVAL_STATUS_REJECTED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function approvalStatusFromJSON(object: any): ApprovalStatus;
export declare function approvalStatusToJSON(object: ApprovalStatus): string;
export declare function approvalStatusToNumber(object: ApprovalStatus): number;
/** Custom field definition */
export interface CustomField {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    group_id: ObjectId | undefined;
    name: string;
    field_type: CustomFieldType;
    user_type: UserType;
    is_required: boolean;
    description: string;
    regex_pattern?: string | undefined;
    options: string[];
    is_archived: boolean;
}
/** Custom fields group */
export interface CustomFieldsGroup {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    group_name: string;
    user_type: UserType;
    profile_section: ProfileSection;
    hints: string[];
    group_access_settings: ObjectId | undefined;
    entries_access_settings: ObjectId | undefined;
    /** these fields are only for custom field groups for user type: Student */
    visible_to_parents_for_statuses: StudentStatus[];
    visible_to_teachers_for_statuses: StudentStatus[];
}
/** Group approval status (approval workflow for custom field groups) */
export interface GroupApprovalStatus {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    group_id: ObjectId | undefined;
    user_id: ObjectId | undefined;
    status: ApprovalStatus;
    rejection_message?: string | undefined;
}
export interface StudentPrimaryIdField {
    field_name: string;
    value: string;
}
/** Custom fields group with its associated custom fields */
export interface CustomFieldsGroupWithFields {
    group: CustomFieldsGroup | undefined;
    fields: CustomField[];
}
export declare const CustomField: MessageFns<CustomField>;
export declare const CustomFieldsGroup: MessageFns<CustomFieldsGroup>;
export declare const GroupApprovalStatus: MessageFns<GroupApprovalStatus>;
export declare const StudentPrimaryIdField: MessageFns<StudentPrimaryIdField>;
export declare const CustomFieldsGroupWithFields: MessageFns<CustomFieldsGroupWithFields>;
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
