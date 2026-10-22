import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../../utils/object_id";
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
export interface ReportTemplateFieldStyle {
    /** PDF points; supported sizes are 6 through 36. */
    font_size?: number | undefined;
    bold?: boolean | undefined;
    alignment?: ReportTemplateTextAlignment | undefined;
    inline_label?: boolean | undefined;
}
export interface ReportTemplateFieldReference {
    /** A supported information key, not an arbitrary record path. */
    key?: string | undefined;
    custom_field_id?: ObjectId | undefined;
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
}
export interface ReportTemplateDesign {
    theme: ReportTemplateTheme | undefined;
    blocks: ReportTemplateBlock[];
}
export declare const ReportTemplateFieldStyle: MessageFns<ReportTemplateFieldStyle>;
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
