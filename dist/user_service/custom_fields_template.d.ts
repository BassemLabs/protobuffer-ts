import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ProfileSection } from "../organization_service/organization_profile_settings";
import { ObjectId } from "../utils/object_id";
import { UserType } from "../utils/user_type";
import { CustomFieldType } from "./custom_field";
import { StudentStatus } from "./student";
export declare const protobufPackage = "user_service";
/** Template field definition (field within a template group) */
export interface TemplateFieldDefinition {
    field_id: ObjectId | undefined;
    field_name: string;
    field_type: CustomFieldType;
    field_is_required: boolean;
    field_description: string;
    field_regex_pattern?: string | undefined;
    field_options: string[];
}
/** Template group definition (group within a template) */
export interface TemplateGroupDefinition {
    group_id: ObjectId | undefined;
    group_name: string;
    group_user_type: UserType;
    group_profile_section: ProfileSection;
    group_hints: string[];
    group_field_definitions: TemplateFieldDefinition[];
    group_visible_to_parents_for_statuses: StudentStatus[];
    group_visible_to_teachers_for_statuses: StudentStatus[];
}
/** Custom fields template (global template not tied to organization) */
export interface CustomFieldsTemplate {
    template_id: ObjectId | undefined;
    template_name: string;
    template_description: string;
    template_is_active: boolean;
    template_groups: TemplateGroupDefinition[];
}
/** Organization used templates (tracks which templates an organization uses) */
export interface OrganizationUsedTemplates {
    id: ObjectId | undefined;
    organization_id: ObjectId | undefined;
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
