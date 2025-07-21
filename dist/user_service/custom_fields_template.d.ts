import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ProfileSection } from "../organization_service/organization_profile_settings";
import { ObjectId } from "../utils/object_id";
import { UserType } from "../utils/user_type";
export declare const protobufPackage = "user_service";
export interface CustomFieldsTemplate {
    templateId: ObjectId | undefined;
    templateName: string;
    templateDescription: string;
    templateIsActive: boolean;
    templateGroups: TemplateGroupDefinition[];
}
export interface TemplateGroupDefinition {
    groupId: ObjectId | undefined;
    groupName: string;
    groupUserType: UserType;
    groupProfileSection: ProfileSection;
    groupHints: string[];
    groupFieldDefinitions: TemplateFieldDefinition[];
    groupVisibleToParentsForStatuses: string[];
    groupVisibleToTeachersForStatuses: string[];
}
export interface TemplateFieldDefinition {
    fieldId: ObjectId | undefined;
    fieldName: string;
    fieldType: string;
    fieldIsRequired: boolean;
    fieldDescription: string;
    fieldRegexPattern?: string | undefined;
    fieldOptions: string[];
}
export interface organizationUsedTemplates {
    id: ObjectId | undefined;
    organizationId: ObjectId | undefined;
    templates: ObjectId[];
}
export declare const CustomFieldsTemplate: MessageFns<CustomFieldsTemplate>;
export declare const TemplateGroupDefinition: MessageFns<TemplateGroupDefinition>;
export declare const TemplateFieldDefinition: MessageFns<TemplateFieldDefinition>;
export declare const organizationUsedTemplates: MessageFns<organizationUsedTemplates>;
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
