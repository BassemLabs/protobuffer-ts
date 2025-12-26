import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ProfileSection } from "../organization_service/organization_profile_settings";
import { ObjectId } from "../utils/object_id";
import { UserType } from "../utils/user_type";
import { CustomFieldType } from "./custom_field";
import { StudentStatus } from "./student";
export declare const protobufPackage = "user_service";
/** Template field definition (field within a template group) */
export interface TemplateFieldDefinition {
    fieldId: ObjectId | undefined;
    fieldName: string;
    fieldType: CustomFieldType;
    fieldIsRequired: boolean;
    fieldDescription: string;
    fieldRegexPattern?: string | undefined;
    fieldOptions: string[];
}
/** Template group definition (group within a template) */
export interface TemplateGroupDefinition {
    groupId: ObjectId | undefined;
    groupName: string;
    groupUserType: UserType;
    groupProfileSection: ProfileSection;
    groupHints: string[];
    groupFieldDefinitions: TemplateFieldDefinition[];
    groupVisibleToParentsForStatuses: StudentStatus[];
    groupVisibleToTeachersForStatuses: StudentStatus[];
}
/** Custom fields template (global template not tied to organization) */
export interface CustomFieldsTemplate {
    templateId: ObjectId | undefined;
    templateName: string;
    templateDescription: string;
    templateIsActive: boolean;
    templateGroups: TemplateGroupDefinition[];
}
/** Organization used templates (tracks which templates an organization uses) */
export interface OrganizationUsedTemplates {
    id: ObjectId | undefined;
    organizationId: ObjectId | undefined;
    /** Template IDs */
    templates: ObjectId[];
}
export declare const TemplateFieldDefinition: MessageFns<TemplateFieldDefinition>;
export declare const TemplateGroupDefinition: MessageFns<TemplateGroupDefinition>;
export declare const CustomFieldsTemplate: MessageFns<CustomFieldsTemplate>;
export declare const OrganizationUsedTemplates: MessageFns<OrganizationUsedTemplates>;
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
