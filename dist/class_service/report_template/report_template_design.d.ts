import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { StudentGrade } from "../../user_service/student";
import { ObjectId } from "../../utils/object_id";
import { ReportType } from "../report_layout";
import { ReportTemplateMargins, ReportTemplateStyle } from "./report_template_style";
import { ReportTemplatePageSize, ReportTemplateTheme } from "./report_template_theme";
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
    REPORT_BLOCK_TYPE_LOGO = "REPORT_BLOCK_TYPE_LOGO",
    REPORT_BLOCK_TYPE_IMAGE = "REPORT_BLOCK_TYPE_IMAGE",
    REPORT_BLOCK_TYPE_PAGE_NUMBER = "REPORT_BLOCK_TYPE_PAGE_NUMBER",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function reportBlockTypeFromJSON(object: any): ReportBlockType;
export declare function reportBlockTypeToJSON(object: ReportBlockType): string;
export declare function reportBlockTypeToNumber(object: ReportBlockType): number;
export declare enum ReportTemplateLogoSource {
    REPORT_TEMPLATE_LOGO_SOURCE_CAMPUS = "REPORT_TEMPLATE_LOGO_SOURCE_CAMPUS",
    REPORT_TEMPLATE_LOGO_SOURCE_ORGANIZATION = "REPORT_TEMPLATE_LOGO_SOURCE_ORGANIZATION",
    REPORT_TEMPLATE_LOGO_SOURCE_UPLOADED = "REPORT_TEMPLATE_LOGO_SOURCE_UPLOADED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function reportTemplateLogoSourceFromJSON(object: any): ReportTemplateLogoSource;
export declare function reportTemplateLogoSourceToJSON(object: ReportTemplateLogoSource): string;
export declare function reportTemplateLogoSourceToNumber(object: ReportTemplateLogoSource): number;
export declare enum ReportTemplateListType {
    REPORT_TEMPLATE_LIST_TYPE_NONE = "REPORT_TEMPLATE_LIST_TYPE_NONE",
    REPORT_TEMPLATE_LIST_TYPE_BULLET = "REPORT_TEMPLATE_LIST_TYPE_BULLET",
    REPORT_TEMPLATE_LIST_TYPE_NUMBERED = "REPORT_TEMPLATE_LIST_TYPE_NUMBERED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function reportTemplateListTypeFromJSON(object: any): ReportTemplateListType;
export declare function reportTemplateListTypeToJSON(object: ReportTemplateListType): string;
export declare function reportTemplateListTypeToNumber(object: ReportTemplateListType): number;
export declare enum ReportTemplateContentFieldType {
    REPORT_TEMPLATE_CONTENT_FIELD_TYPE_LONG_TEXT = "REPORT_TEMPLATE_CONTENT_FIELD_TYPE_LONG_TEXT",
    REPORT_TEMPLATE_CONTENT_FIELD_TYPE_SINGLE_SELECT = "REPORT_TEMPLATE_CONTENT_FIELD_TYPE_SINGLE_SELECT",
    REPORT_TEMPLATE_CONTENT_FIELD_TYPE_BOOLEAN = "REPORT_TEMPLATE_CONTENT_FIELD_TYPE_BOOLEAN",
    /** REPORT_TEMPLATE_CONTENT_FIELD_TYPE_STATIC_TEXT - Text written once by the school, shared by every report using the template. */
    REPORT_TEMPLATE_CONTENT_FIELD_TYPE_STATIC_TEXT = "REPORT_TEMPLATE_CONTENT_FIELD_TYPE_STATIC_TEXT",
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
export interface ReportTemplateImage {
    asset_id?: ObjectId | undefined;
    logo_source?: ReportTemplateLogoSource | undefined;
    /** Maximum dimensions in PDF points; aspect ratio is always preserved. */
    width?: number | undefined;
    height?: number | undefined;
    description?: string | undefined;
}
export interface ReportTemplateTextRun {
    text?: string | undefined;
    bold?: boolean | undefined;
    italic?: boolean | undefined;
    underline?: boolean | undefined;
}
export interface ReportTemplateParagraph {
    runs: ReportTemplateTextRun[];
    list_type?: ReportTemplateListType | undefined;
}
export interface ReportTemplateRichText {
    paragraphs: ReportTemplateParagraph[];
}
export interface ReportTemplateBlockStyle {
    block_type?: ReportBlockType | undefined;
    style?: ReportTemplateStyle | undefined;
    label_style?: ReportTemplateStyle | undefined;
    value_style?: ReportTemplateStyle | undefined;
}
export interface ReportTemplatePageRegion {
    blocks: ReportTemplateBlock[];
    gap?: number | undefined;
}
export interface ReportTemplatePageLayout {
    page_size?: ReportTemplatePageSize | undefined;
    margins?: ReportTemplateMargins | undefined;
    background_color?: string | undefined;
    background_asset_id?: ObjectId | undefined;
    hide_header?: boolean | undefined;
    hide_footer?: boolean | undefined;
    header?: ReportTemplatePageRegion | undefined;
    footer?: ReportTemplatePageRegion | undefined;
    /** Absence inherits the report background; true explicitly removes its image. */
    hide_background_image?: boolean | undefined;
}
export interface ReportTemplateContentField {
    id?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    field_type?: ReportTemplateContentFieldType | undefined;
    scopes: ReportTemplateContentScope[];
    required?: boolean | undefined;
    allowed_values: string[];
    text?: string | undefined;
    rich_text?: ReportTemplateRichText | undefined;
}
export interface ReportTemplateContentArea {
    id?: string | undefined;
    title?: string | undefined;
    /** Ordered references to existing content definitions, not duplicate items. */
    field_ids: string[];
}
export interface ReportTemplateContent {
    supported_grades: StudentGrade[];
    supported_report_types: ReportType[];
    fields: ReportTemplateContentField[];
    /** Each interactive field belongs to exactly one area. */
    areas: ReportTemplateContentArea[];
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
    /** Formatted Heading/Text content; plain text is derived when needed. */
    rich_text?: ReportTemplateRichText | undefined;
    /** Course children describe one repeated course; courses cannot be nested. */
    children: ReportTemplateBlock[];
    columns?: number | undefined;
    field?: ReportTemplateFieldReference | undefined;
    /** School-authored literal message body; parent-message blocks only. */
    body?: string | undefined;
    /** Signature roles, in display order; signatures blocks only. */
    signature_roles: ReportTemplateSignatureRole[];
    style?: ReportTemplateStyle | undefined;
    label_style?: ReportTemplateStyle | undefined;
    value_style?: ReportTemplateStyle | undefined;
    /** Positive relative widths, one per column; absent means equal columns. */
    column_widths: number[];
    page_layout?: ReportTemplatePageLayout | undefined;
    image?: ReportTemplateImage | undefined;
    /** Field blocks only; absence keeps the label and value on the same line. */
    inline_label?: boolean | undefined;
}
export interface ReportTemplateDesign {
    theme: ReportTemplateTheme | undefined;
    blocks: ReportTemplateBlock[];
    content?: ReportTemplateContent | undefined;
    block_styles: ReportTemplateBlockStyle[];
    header?: ReportTemplatePageRegion | undefined;
    footer?: ReportTemplatePageRegion | undefined;
    background_asset_id?: ObjectId | undefined;
}
export declare const ReportTemplateImage: MessageFns<ReportTemplateImage>;
export declare const ReportTemplateTextRun: MessageFns<ReportTemplateTextRun>;
export declare const ReportTemplateParagraph: MessageFns<ReportTemplateParagraph>;
export declare const ReportTemplateRichText: MessageFns<ReportTemplateRichText>;
export declare const ReportTemplateBlockStyle: MessageFns<ReportTemplateBlockStyle>;
export declare const ReportTemplatePageRegion: MessageFns<ReportTemplatePageRegion>;
export declare const ReportTemplatePageLayout: MessageFns<ReportTemplatePageLayout>;
export declare const ReportTemplateContentField: MessageFns<ReportTemplateContentField>;
export declare const ReportTemplateContentArea: MessageFns<ReportTemplateContentArea>;
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
