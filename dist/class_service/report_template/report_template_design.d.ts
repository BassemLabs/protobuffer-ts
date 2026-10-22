import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { StudentGrade } from "../../user_service/student";
import { ObjectId } from "../../utils/object_id";
import { ReportType } from "../report_layout";
import { ReportTemplateTheme } from "./report_template_theme";
export declare const protobufPackage = "class_service.report_template";
export declare enum ReportBlockType {
    REPORT_BLOCK_TYPE_PAGE = "REPORT_BLOCK_TYPE_PAGE",
    REPORT_BLOCK_TYPE_SECTION = "REPORT_BLOCK_TYPE_SECTION",
    REPORT_BLOCK_TYPE_COLUMNS = "REPORT_BLOCK_TYPE_COLUMNS",
    REPORT_BLOCK_TYPE_HEADING = "REPORT_BLOCK_TYPE_HEADING",
    REPORT_BLOCK_TYPE_TEXT = "REPORT_BLOCK_TYPE_TEXT",
    REPORT_BLOCK_TYPE_FIELD = "REPORT_BLOCK_TYPE_FIELD",
    REPORT_BLOCK_TYPE_COURSES = "REPORT_BLOCK_TYPE_COURSES",
    REPORT_BLOCK_TYPE_PARENT_MESSAGE = "REPORT_BLOCK_TYPE_PARENT_MESSAGE",
    REPORT_BLOCK_TYPE_SIGNATURES = "REPORT_BLOCK_TYPE_SIGNATURES",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function reportBlockTypeFromJSON(object: any): ReportBlockType;
export declare function reportBlockTypeToJSON(object: ReportBlockType): string;
export declare function reportBlockTypeToNumber(object: ReportBlockType): number;
export declare enum ReportTemplateTextAlignment {
    REPORT_TEMPLATE_TEXT_ALIGNMENT_LEFT = "REPORT_TEMPLATE_TEXT_ALIGNMENT_LEFT",
    REPORT_TEMPLATE_TEXT_ALIGNMENT_CENTER = "REPORT_TEMPLATE_TEXT_ALIGNMENT_CENTER",
    REPORT_TEMPLATE_TEXT_ALIGNMENT_RIGHT = "REPORT_TEMPLATE_TEXT_ALIGNMENT_RIGHT",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function reportTemplateTextAlignmentFromJSON(object: any): ReportTemplateTextAlignment;
export declare function reportTemplateTextAlignmentToJSON(object: ReportTemplateTextAlignment): string;
export declare function reportTemplateTextAlignmentToNumber(object: ReportTemplateTextAlignment): number;
export declare enum ReportTemplateContentFieldType {
    REPORT_TEMPLATE_CONTENT_FIELD_TYPE_LONG_TEXT = "REPORT_TEMPLATE_CONTENT_FIELD_TYPE_LONG_TEXT",
    REPORT_TEMPLATE_CONTENT_FIELD_TYPE_SINGLE_SELECT = "REPORT_TEMPLATE_CONTENT_FIELD_TYPE_SINGLE_SELECT",
    REPORT_TEMPLATE_CONTENT_FIELD_TYPE_BOOLEAN = "REPORT_TEMPLATE_CONTENT_FIELD_TYPE_BOOLEAN",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function reportTemplateContentFieldTypeFromJSON(object: any): ReportTemplateContentFieldType;
export declare function reportTemplateContentFieldTypeToJSON(object: ReportTemplateContentFieldType): string;
export declare function reportTemplateContentFieldTypeToNumber(object: ReportTemplateContentFieldType): number;
export declare enum ReportTemplateContentScope {
    REPORT_TEMPLATE_CONTENT_SCOPE_HOMEROOM = "REPORT_TEMPLATE_CONTENT_SCOPE_HOMEROOM",
    REPORT_TEMPLATE_CONTENT_SCOPE_COURSE = "REPORT_TEMPLATE_CONTENT_SCOPE_COURSE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function reportTemplateContentScopeFromJSON(object: any): ReportTemplateContentScope;
export declare function reportTemplateContentScopeToJSON(object: ReportTemplateContentScope): string;
export declare function reportTemplateContentScopeToNumber(object: ReportTemplateContentScope): number;
export declare enum ReportTemplateSignatureRole {
    REPORT_TEMPLATE_SIGNATURE_ROLE_TEACHER = "REPORT_TEMPLATE_SIGNATURE_ROLE_TEACHER",
    REPORT_TEMPLATE_SIGNATURE_ROLE_PRINCIPAL = "REPORT_TEMPLATE_SIGNATURE_ROLE_PRINCIPAL",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function reportTemplateSignatureRoleFromJSON(object: any): ReportTemplateSignatureRole;
export declare function reportTemplateSignatureRoleToJSON(object: ReportTemplateSignatureRole): string;
export declare function reportTemplateSignatureRoleToNumber(object: ReportTemplateSignatureRole): number;
export interface ReportTemplateFieldStyle {
    /** PDF points; supported sizes are 6 through 36. */
    font_size?: number | undefined;
    bold?: boolean | undefined;
    alignment?: ReportTemplateTextAlignment | undefined;
    inline_label?: boolean | undefined;
}
export interface ReportTemplateContentField {
    id?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    field_type?: ReportTemplateContentFieldType | undefined;
    scopes: ReportTemplateContentScope[];
    required?: boolean | undefined;
    allowed_values: string[];
}
export interface ReportTemplateContent {
    supported_grades: StudentGrade[];
    supported_report_types: ReportType[];
    fields: ReportTemplateContentField[];
}
export interface ReportTemplateFieldReference {
    /** A supported information key, not an arbitrary record path. */
    key?: string | undefined;
    custom_field_id?: ObjectId | undefined;
    report_field_id?: string | undefined;
}
export interface ReportTemplateBlock {
    id?: string | undefined;
    block_type?: ReportBlockType | undefined;
    /** Heading/Text content; editable label (not a record value) for field blocks. */
    text?: string | undefined;
    /** Course children describe one repeated course; courses cannot be nested. */
    children: ReportTemplateBlock[];
    columns?: number | undefined;
    field?: ReportTemplateFieldReference | undefined;
    /** Field blocks only. */
    field_style?: ReportTemplateFieldStyle | undefined;
    /** School-authored literal message body; parent-message blocks only. */
    body?: string | undefined;
    /** Signature roles, in display order; signatures blocks only. */
    signature_roles: ReportTemplateSignatureRole[];
}
export interface ReportTemplateDesign {
    theme: ReportTemplateTheme | undefined;
    blocks: ReportTemplateBlock[];
    content?: ReportTemplateContent | undefined;
}
export declare const ReportTemplateFieldStyle: MessageFns<ReportTemplateFieldStyle>;
export declare const ReportTemplateContentField: MessageFns<ReportTemplateContentField>;
export declare const ReportTemplateContent: MessageFns<ReportTemplateContent>;
export declare const ReportTemplateFieldReference: MessageFns<ReportTemplateFieldReference>;
export declare const ReportTemplateBlock: MessageFns<ReportTemplateBlock>;
export declare const ReportTemplateDesign: MessageFns<ReportTemplateDesign>;
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
