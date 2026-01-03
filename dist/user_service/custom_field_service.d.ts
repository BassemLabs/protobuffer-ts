import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ProfileSection } from "../organization_service/organization_profile_settings";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { UserType } from "../utils/user_type";
import { CustomField, CustomFieldsGroup, CustomFieldsGroupWithFields, CustomFieldType, StudentPrimaryIdField } from "./custom_field";
import { CustomFieldEntry } from "./custom_field_entry";
import { AccessRule, OwnershipKind, ResourceAccessSettings } from "./resource_access_settings";
import { StudentStatus } from "./student";
export declare const protobufPackage = "user_service";
export interface GetCustomFieldsByGroupRequest {
    context: RequestContext | undefined;
    group_id: ObjectId | undefined;
    /** Default false */
    include_archived?: boolean | undefined;
}
export interface GetCustomFieldsByGroupResponse {
    custom_fields: CustomField[];
}
export interface GetActiveCustomFieldsByGroupRequest {
    context: RequestContext | undefined;
    group_id: ObjectId | undefined;
}
export interface GetActiveCustomFieldsByGroupResponse {
    custom_fields: CustomField[];
}
export interface GetCustomFieldsByUserTypeRequest {
    context: RequestContext | undefined;
    user_type: UserType;
    /** Default false */
    include_archived?: boolean | undefined;
}
export interface GetCustomFieldsByUserTypeResponse {
    custom_fields: CustomField[];
}
export interface CreateCustomFieldRequest {
    context: RequestContext | undefined;
    group_id: ObjectId | undefined;
    name: string;
    field_type: CustomFieldType;
    is_required: boolean;
    description: string;
    is_archived: boolean;
    regex_pattern?: string | undefined;
    options: string[];
}
export interface UpdateCustomFieldRequest {
    context: RequestContext | undefined;
    custom_field_id: ObjectId | undefined;
    name: string;
    field_type: CustomFieldType;
    description: string;
    is_required: boolean;
    is_archived: boolean;
    regex_pattern?: string | undefined;
    options: string[];
}
export interface GetStudentPrimaryIdFieldRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
}
export interface GetStudentPrimaryIdFieldResponse {
    /** None if no primary ID field is set for the organization */
    primary_id_field?: StudentPrimaryIdField | undefined;
}
export interface GetAllCustomFieldEntriesByUserRequest {
    context: RequestContext | undefined;
    /** Student/Parent/Teacher ID */
    user_id: ObjectId | undefined;
}
export interface GetAllCustomFieldEntriesByUserResponse {
    entries: CustomFieldEntry[];
}
export interface GetCustomFieldEntriesByUserAndGroupRequest {
    context: RequestContext | undefined;
    /** Student/Parent/Teacher ID */
    user_id: ObjectId | undefined;
    /** Group ID to filter by */
    group_id: ObjectId | undefined;
}
export interface GetCustomFieldEntriesByUserAndGroupResponse {
    entries: CustomFieldEntry[];
}
export interface GetGroupActiveEntriesForUserRequest {
    context: RequestContext | undefined;
    user_id: ObjectId | undefined;
    group_id: ObjectId | undefined;
}
export interface GetGroupActiveEntriesForUserResponse {
    entries: CustomFieldEntry[];
}
export interface UpdateCustomFieldsForGroupRequest {
    context: RequestContext | undefined;
    user_id: ObjectId | undefined;
    group_id: ObjectId | undefined;
    entries: CustomFieldEntryUpdate[];
}
export interface CustomFieldEntryUpdate {
    custom_field_id: ObjectId | undefined;
    value: string;
}
export interface UpdateCustomFieldsForGroupResponse {
    entries: CustomFieldEntry[];
}
export interface UploadDocumentToCustomFieldEntryRequest {
    context: RequestContext | undefined;
    user_id: ObjectId | undefined;
    custom_field_id: ObjectId | undefined;
    document_name: string;
    /** Base64-encoded file content */
    file_content: string;
    file_name: string;
}
export interface RemoveDocumentFromCustomFieldEntryRequest {
    context: RequestContext | undefined;
    user_id: ObjectId | undefined;
    custom_field_id: ObjectId | undefined;
    document_index: number;
}
/** Unified response for all endpoints that return a list of CustomFieldsGroup */
export interface GetCustomFieldsGroupsResponse {
    groups: CustomFieldsGroup[];
}
export interface CreateCustomFieldsGroupRequest {
    context: RequestContext | undefined;
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
export interface UpdateCustomFieldsGroupRequest {
    context: RequestContext | undefined;
    group_id: ObjectId | undefined;
    group_name: string;
    profile_section: ProfileSection;
    hints: string[];
    /** these fields are only for custom field groups for user type: Student */
    visible_to_parents_for_statuses: StudentStatus[];
    visible_to_teachers_for_statuses: StudentStatus[];
}
export interface GetAllCustomFieldsGroupsRequest {
    context: RequestContext | undefined;
}
export interface GetAccessibleCustomFieldsGroupsRequest {
    context: RequestContext | undefined;
    user_type: UserType;
}
export interface GetCustomFieldsGroupsByUserTypeAndProfileSectionRequest {
    context: RequestContext | undefined;
    user_type: UserType;
    profile_section: ProfileSection;
}
export interface GetStudentGroupsWithFieldsRequest {
    context: RequestContext | undefined;
    student_status: StudentStatus;
}
export interface GetParentGroupsWithFieldsRequest {
    context: RequestContext | undefined;
}
/** Unified response for all endpoints that return a list of CustomFieldsGroupWithFields */
export interface GetCustomFieldsGroupsWithFieldsResponse {
    groups_with_fields: CustomFieldsGroupWithFields[];
}
export interface GetGroupStatusRequest {
    context: RequestContext | undefined;
    group_id: ObjectId | undefined;
    user_id: ObjectId | undefined;
}
export interface ApproveGroupRequest {
    context: RequestContext | undefined;
    group_id: ObjectId | undefined;
    user_id: ObjectId | undefined;
}
export interface RejectGroupRequest {
    context: RequestContext | undefined;
    group_id: ObjectId | undefined;
    user_id: ObjectId | undefined;
    rejection_message: string;
}
export interface GetResourceAccessSettingsRequest {
    context: RequestContext | undefined;
}
export interface GetResourceAccessSettingsResponse {
    settings: ResourceAccessSettings[];
}
export interface CreateResourceAccessSettingsRequest {
    context: RequestContext | undefined;
    name: string;
    ownership_kind: OwnershipKind;
    user_type: UserType;
    access_rules: AccessRule[];
}
export interface temp_message {
    id: ObjectId | undefined;
}
export declare const GetCustomFieldsByGroupRequest: MessageFns<GetCustomFieldsByGroupRequest>;
export declare const GetCustomFieldsByGroupResponse: MessageFns<GetCustomFieldsByGroupResponse>;
export declare const GetActiveCustomFieldsByGroupRequest: MessageFns<GetActiveCustomFieldsByGroupRequest>;
export declare const GetActiveCustomFieldsByGroupResponse: MessageFns<GetActiveCustomFieldsByGroupResponse>;
export declare const GetCustomFieldsByUserTypeRequest: MessageFns<GetCustomFieldsByUserTypeRequest>;
export declare const GetCustomFieldsByUserTypeResponse: MessageFns<GetCustomFieldsByUserTypeResponse>;
export declare const CreateCustomFieldRequest: MessageFns<CreateCustomFieldRequest>;
export declare const UpdateCustomFieldRequest: MessageFns<UpdateCustomFieldRequest>;
export declare const GetStudentPrimaryIdFieldRequest: MessageFns<GetStudentPrimaryIdFieldRequest>;
export declare const GetStudentPrimaryIdFieldResponse: MessageFns<GetStudentPrimaryIdFieldResponse>;
export declare const GetAllCustomFieldEntriesByUserRequest: MessageFns<GetAllCustomFieldEntriesByUserRequest>;
export declare const GetAllCustomFieldEntriesByUserResponse: MessageFns<GetAllCustomFieldEntriesByUserResponse>;
export declare const GetCustomFieldEntriesByUserAndGroupRequest: MessageFns<GetCustomFieldEntriesByUserAndGroupRequest>;
export declare const GetCustomFieldEntriesByUserAndGroupResponse: MessageFns<GetCustomFieldEntriesByUserAndGroupResponse>;
export declare const GetGroupActiveEntriesForUserRequest: MessageFns<GetGroupActiveEntriesForUserRequest>;
export declare const GetGroupActiveEntriesForUserResponse: MessageFns<GetGroupActiveEntriesForUserResponse>;
export declare const UpdateCustomFieldsForGroupRequest: MessageFns<UpdateCustomFieldsForGroupRequest>;
export declare const CustomFieldEntryUpdate: MessageFns<CustomFieldEntryUpdate>;
export declare const UpdateCustomFieldsForGroupResponse: MessageFns<UpdateCustomFieldsForGroupResponse>;
export declare const UploadDocumentToCustomFieldEntryRequest: MessageFns<UploadDocumentToCustomFieldEntryRequest>;
export declare const RemoveDocumentFromCustomFieldEntryRequest: MessageFns<RemoveDocumentFromCustomFieldEntryRequest>;
export declare const GetCustomFieldsGroupsResponse: MessageFns<GetCustomFieldsGroupsResponse>;
export declare const CreateCustomFieldsGroupRequest: MessageFns<CreateCustomFieldsGroupRequest>;
export declare const UpdateCustomFieldsGroupRequest: MessageFns<UpdateCustomFieldsGroupRequest>;
export declare const GetAllCustomFieldsGroupsRequest: MessageFns<GetAllCustomFieldsGroupsRequest>;
export declare const GetAccessibleCustomFieldsGroupsRequest: MessageFns<GetAccessibleCustomFieldsGroupsRequest>;
export declare const GetCustomFieldsGroupsByUserTypeAndProfileSectionRequest: MessageFns<GetCustomFieldsGroupsByUserTypeAndProfileSectionRequest>;
export declare const GetStudentGroupsWithFieldsRequest: MessageFns<GetStudentGroupsWithFieldsRequest>;
export declare const GetParentGroupsWithFieldsRequest: MessageFns<GetParentGroupsWithFieldsRequest>;
export declare const GetCustomFieldsGroupsWithFieldsResponse: MessageFns<GetCustomFieldsGroupsWithFieldsResponse>;
export declare const GetGroupStatusRequest: MessageFns<GetGroupStatusRequest>;
export declare const ApproveGroupRequest: MessageFns<ApproveGroupRequest>;
export declare const RejectGroupRequest: MessageFns<RejectGroupRequest>;
export declare const GetResourceAccessSettingsRequest: MessageFns<GetResourceAccessSettingsRequest>;
export declare const GetResourceAccessSettingsResponse: MessageFns<GetResourceAccessSettingsResponse>;
export declare const CreateResourceAccessSettingsRequest: MessageFns<CreateResourceAccessSettingsRequest>;
export declare const temp_message: MessageFns<temp_message>;
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
