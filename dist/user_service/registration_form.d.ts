import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { SchoolYear } from "../organization_service/organization";
import { ProfileSection } from "../organization_service/organization_profile_settings";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { CustomField, CustomFieldsGroup, StudentPrimaryIdField } from "./custom_field";
import { Family } from "./family";
import { Parent } from "./parent";
import { Student, StudentSchoolYearInformation } from "./student";
export declare const protobufPackage = "user_service";
/**
 * The field lists are ordered within their profile sections. The identifier
 * comes from the organization's Student Primary ID Field setting.
 */
export interface RegistrationFormSettings {
    student_field_ids: ObjectId[];
    guardian_field_ids: ObjectId[];
    revision?: number | undefined;
}
export interface RegistrationFormFieldOption {
    field: CustomField | undefined;
    group: CustomFieldsGroup | undefined;
}
export interface GetRegistrationFormCatalogRequest {
    context: RequestContext | undefined;
}
export interface GetRegistrationFormCatalogResponse {
    fields: RegistrationFormFieldOption[];
    settings?: RegistrationFormSettings | undefined;
}
export interface SaveRegistrationFormSettingsRequest {
    context: RequestContext | undefined;
    settings: RegistrationFormSettings | undefined;
}
export interface GetRegistrationFormSnapshotRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    school_year_id: ObjectId | undefined;
}
export interface RegistrationFormSibling {
    student: Student | undefined;
    school_year_info: StudentSchoolYearInformation | undefined;
}
export interface RegistrationFormSelectedFieldValue {
    field_id: ObjectId | undefined;
    user_id: ObjectId | undefined;
    label?: string | undefined;
    section?: ProfileSection | undefined;
    value?: string | undefined;
}
export interface GetRegistrationFormSnapshotResponse {
    settings: RegistrationFormSettings | undefined;
    school_year: SchoolYear | undefined;
    student: Student | undefined;
    school_year_info: StudentSchoolYearInformation | undefined;
    family: Family | undefined;
    guardians: Parent[];
    siblings: RegistrationFormSibling[];
    selected_values: RegistrationFormSelectedFieldValue[];
    primary_id_field?: StudentPrimaryIdField | undefined;
}
export declare const RegistrationFormSettings: MessageFns<RegistrationFormSettings>;
export declare const RegistrationFormFieldOption: MessageFns<RegistrationFormFieldOption>;
export declare const GetRegistrationFormCatalogRequest: MessageFns<GetRegistrationFormCatalogRequest>;
export declare const GetRegistrationFormCatalogResponse: MessageFns<GetRegistrationFormCatalogResponse>;
export declare const SaveRegistrationFormSettingsRequest: MessageFns<SaveRegistrationFormSettingsRequest>;
export declare const GetRegistrationFormSnapshotRequest: MessageFns<GetRegistrationFormSnapshotRequest>;
export declare const RegistrationFormSibling: MessageFns<RegistrationFormSibling>;
export declare const RegistrationFormSelectedFieldValue: MessageFns<RegistrationFormSelectedFieldValue>;
export declare const GetRegistrationFormSnapshotResponse: MessageFns<GetRegistrationFormSnapshotResponse>;
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
