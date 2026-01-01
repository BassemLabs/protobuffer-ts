import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { ProfileSection } from "./organization_profile_settings";
export declare const protobufPackage = "organization_service";
/** Request to fetch profile settings of an organization by ID */
export interface GetOrganizationProfileSettingsRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
}
/** Request to add a "parent" profile section */
export interface AddParentProfileSectionRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    new_profile_section: ProfileSection;
}
/** Request to remove a "parent" profile section */
export interface RemoveParentProfileSectionRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    remove_profile_section: ProfileSection;
}
/** Request to add a "teacher" profile section */
export interface AddTeacherProfileSectionRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    new_profile_section: ProfileSection;
}
/** Request to remove a "teacher" profile section */
export interface RemoveTeacherProfileSectionRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    remove_profile_section: ProfileSection;
}
/** Request to add a "student" profile section */
export interface AddStudentProfileSectionRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    new_profile_section: ProfileSection;
}
/** Request to remove a "student" profile section */
export interface RemoveStudentProfileSectionRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    remove_profile_section: ProfileSection;
}
/** Request to set student_primary_id_custom_field */
export interface SetStudentPrimaryIdCustomFieldRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    student_primary_id_custom_field: ObjectId | undefined;
}
export declare const GetOrganizationProfileSettingsRequest: MessageFns<GetOrganizationProfileSettingsRequest>;
export declare const AddParentProfileSectionRequest: MessageFns<AddParentProfileSectionRequest>;
export declare const RemoveParentProfileSectionRequest: MessageFns<RemoveParentProfileSectionRequest>;
export declare const AddTeacherProfileSectionRequest: MessageFns<AddTeacherProfileSectionRequest>;
export declare const RemoveTeacherProfileSectionRequest: MessageFns<RemoveTeacherProfileSectionRequest>;
export declare const AddStudentProfileSectionRequest: MessageFns<AddStudentProfileSectionRequest>;
export declare const RemoveStudentProfileSectionRequest: MessageFns<RemoveStudentProfileSectionRequest>;
export declare const SetStudentPrimaryIdCustomFieldRequest: MessageFns<SetStudentPrimaryIdCustomFieldRequest>;
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
