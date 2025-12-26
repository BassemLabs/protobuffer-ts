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
    groupId: ObjectId | undefined;
    /** Default false */
    includeArchived?: boolean | undefined;
}
export interface GetCustomFieldsByGroupResponse {
    customFields: CustomField[];
}
export interface GetActiveCustomFieldsByGroupRequest {
    context: RequestContext | undefined;
    groupId: ObjectId | undefined;
}
export interface GetActiveCustomFieldsByGroupResponse {
    customFields: CustomField[];
}
export interface GetCustomFieldsByUserTypeRequest {
    context: RequestContext | undefined;
    userType: UserType;
    /** Default false */
    includeArchived?: boolean | undefined;
}
export interface GetCustomFieldsByUserTypeResponse {
    customFields: CustomField[];
}
export interface CreateCustomFieldRequest {
    context: RequestContext | undefined;
    groupId: ObjectId | undefined;
    name: string;
    fieldType: CustomFieldType;
    isRequired: boolean;
    description: string;
    isArchived: boolean;
    regexPattern?: string | undefined;
    options: string[];
}
export interface UpdateCustomFieldRequest {
    context: RequestContext | undefined;
    customFieldId: ObjectId | undefined;
    name: string;
    fieldType: CustomFieldType;
    description: string;
    isRequired: boolean;
    isArchived: boolean;
    regexPattern?: string | undefined;
    options: string[];
}
export interface GetStudentPrimaryIdFieldRequest {
    context: RequestContext | undefined;
    studentId: ObjectId | undefined;
}
export interface GetStudentPrimaryIdFieldResponse {
    /** None if no primary ID field is set for the organization */
    primaryIdField?: StudentPrimaryIdField | undefined;
}
export interface GetAllCustomFieldEntriesByUserRequest {
    context: RequestContext | undefined;
    /** Student/Parent/Teacher ID */
    userId: ObjectId | undefined;
}
export interface GetAllCustomFieldEntriesByUserResponse {
    entries: CustomFieldEntry[];
}
export interface GetCustomFieldEntriesByUserAndGroupRequest {
    context: RequestContext | undefined;
    /** Student/Parent/Teacher ID */
    userId: ObjectId | undefined;
    /** Group ID to filter by */
    groupId: ObjectId | undefined;
}
export interface GetCustomFieldEntriesByUserAndGroupResponse {
    entries: CustomFieldEntry[];
}
export interface GetGroupActiveEntriesForUserRequest {
    context: RequestContext | undefined;
    userId: ObjectId | undefined;
    groupId: ObjectId | undefined;
}
export interface GetGroupActiveEntriesForUserResponse {
    entries: CustomFieldEntry[];
}
export interface UpdateCustomFieldsForGroupRequest {
    context: RequestContext | undefined;
    userId: ObjectId | undefined;
    groupId: ObjectId | undefined;
    entries: CustomFieldEntryUpdate[];
}
export interface CustomFieldEntryUpdate {
    customFieldId: ObjectId | undefined;
    value: string;
}
export interface UpdateCustomFieldsForGroupResponse {
    entries: CustomFieldEntry[];
}
export interface UploadDocumentToCustomFieldEntryRequest {
    context: RequestContext | undefined;
    userId: ObjectId | undefined;
    customFieldId: ObjectId | undefined;
    documentName: string;
    /** Base64-encoded file content */
    fileContent: string;
    fileName: string;
}
export interface RemoveDocumentFromCustomFieldEntryRequest {
    context: RequestContext | undefined;
    userId: ObjectId | undefined;
    customFieldId: ObjectId | undefined;
    documentIndex: number;
}
/** Unified response for all endpoints that return a list of CustomFieldsGroup */
export interface GetCustomFieldsGroupsResponse {
    groups: CustomFieldsGroup[];
}
export interface CreateCustomFieldsGroupRequest {
    context: RequestContext | undefined;
    groupName: string;
    userType: UserType;
    profileSection: ProfileSection;
    hints: string[];
    groupAccessSettings: ObjectId | undefined;
    entriesAccessSettings: ObjectId | undefined;
    /** these fields are only for custom field groups for user type: Student */
    visibleToParentsForStatuses: StudentStatus[];
    visibleToTeachersForStatuses: StudentStatus[];
}
export interface UpdateCustomFieldsGroupRequest {
    context: RequestContext | undefined;
    groupId: ObjectId | undefined;
    groupName: string;
    profileSection: ProfileSection;
    hints: string[];
    /** these fields are only for custom field groups for user type: Student */
    visibleToParentsForStatuses: StudentStatus[];
    visibleToTeachersForStatuses: StudentStatus[];
}
export interface GetAllCustomFieldsGroupsRequest {
    context: RequestContext | undefined;
}
export interface GetAccessibleCustomFieldsGroupsRequest {
    context: RequestContext | undefined;
    userType: UserType;
}
export interface GetCustomFieldsGroupsByUserTypeAndProfileSectionRequest {
    context: RequestContext | undefined;
    userType: UserType;
    profileSection: ProfileSection;
}
export interface GetStudentGroupsWithFieldsRequest {
    context: RequestContext | undefined;
    studentStatus: StudentStatus;
}
export interface GetParentGroupsWithFieldsRequest {
    context: RequestContext | undefined;
}
/** Unified response for all endpoints that return a list of CustomFieldsGroupWithFields */
export interface GetCustomFieldsGroupsWithFieldsResponse {
    groupsWithFields: CustomFieldsGroupWithFields[];
}
export interface GetGroupStatusRequest {
    context: RequestContext | undefined;
    groupId: ObjectId | undefined;
    userId: ObjectId | undefined;
}
export interface ApproveGroupRequest {
    context: RequestContext | undefined;
    groupId: ObjectId | undefined;
    userId: ObjectId | undefined;
}
export interface RejectGroupRequest {
    context: RequestContext | undefined;
    groupId: ObjectId | undefined;
    userId: ObjectId | undefined;
    rejectionMessage: string;
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
    ownershipKind: OwnershipKind;
    userType: UserType;
    accessRules: AccessRule[];
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
