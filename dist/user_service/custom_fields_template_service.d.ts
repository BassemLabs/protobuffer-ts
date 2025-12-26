import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ProfileSection } from "../organization_service/organization_profile_settings";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { UserType } from "../utils/user_type";
import { CustomFieldType } from "./custom_field";
import { CustomFieldsTemplate } from "./custom_fields_template";
import { StudentStatus } from "./student";
export declare const protobufPackage = "user_service";
export interface GetAllCustomFieldsTemplatesRequest {
    context: RequestContext | undefined;
}
export interface GetAllCustomFieldsTemplatesResponse {
    templates: CustomFieldsTemplate[];
}
export interface GetActiveCustomFieldsTemplatesRequest {
    context: RequestContext | undefined;
}
export interface GetActiveCustomFieldsTemplatesResponse {
    templates: CustomFieldsTemplate[];
}
export interface CreateCustomFieldsTemplateRequest {
    context: RequestContext | undefined;
    templateName: string;
    templateDescription: string;
    isActive: boolean;
}
export interface AddGroupToTemplateRequest {
    context: RequestContext | undefined;
    templateId: ObjectId | undefined;
    groupName: string;
    userType: UserType;
    profileSection: ProfileSection;
    hints: string[];
    visibleToParentsForStatuses: StudentStatus[];
    visibleToTeachersForStatuses: StudentStatus[];
}
export interface AddFieldToTemplateGroupRequest {
    context: RequestContext | undefined;
    templateId: ObjectId | undefined;
    groupId: ObjectId | undefined;
    fieldName: string;
    fieldType: CustomFieldType;
    isRequired: boolean;
    description: string;
    regexPattern?: string | undefined;
    options: string[];
}
/** Group access settings entry (mapping group_id to access settings) */
export interface GroupAccessSettingsEntry {
    groupId: ObjectId | undefined;
    groupAccessSettings: ObjectId | undefined;
    entriesAccessSettings: ObjectId | undefined;
}
export interface InstantiateTemplateRequest {
    context: RequestContext | undefined;
    templateId: ObjectId | undefined;
    /** Access settings for each group in the template */
    groupAccessSettings: GroupAccessSettingsEntry[];
}
export interface GetOrganizationUsedTemplatesRequest {
    context: RequestContext | undefined;
}
export declare const GetAllCustomFieldsTemplatesRequest: MessageFns<GetAllCustomFieldsTemplatesRequest>;
export declare const GetAllCustomFieldsTemplatesResponse: MessageFns<GetAllCustomFieldsTemplatesResponse>;
export declare const GetActiveCustomFieldsTemplatesRequest: MessageFns<GetActiveCustomFieldsTemplatesRequest>;
export declare const GetActiveCustomFieldsTemplatesResponse: MessageFns<GetActiveCustomFieldsTemplatesResponse>;
export declare const CreateCustomFieldsTemplateRequest: MessageFns<CreateCustomFieldsTemplateRequest>;
export declare const AddGroupToTemplateRequest: MessageFns<AddGroupToTemplateRequest>;
export declare const AddFieldToTemplateGroupRequest: MessageFns<AddFieldToTemplateGroupRequest>;
export declare const GroupAccessSettingsEntry: MessageFns<GroupAccessSettingsEntry>;
export declare const InstantiateTemplateRequest: MessageFns<InstantiateTemplateRequest>;
export declare const GetOrganizationUsedTemplatesRequest: MessageFns<GetOrganizationUsedTemplatesRequest>;
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
