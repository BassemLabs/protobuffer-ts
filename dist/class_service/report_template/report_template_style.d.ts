import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "class_service.report_template";
export declare enum ReportTemplateAlignment {
    REPORT_TEMPLATE_ALIGNMENT_LEFT = "REPORT_TEMPLATE_ALIGNMENT_LEFT",
    REPORT_TEMPLATE_ALIGNMENT_CENTER = "REPORT_TEMPLATE_ALIGNMENT_CENTER",
    REPORT_TEMPLATE_ALIGNMENT_RIGHT = "REPORT_TEMPLATE_ALIGNMENT_RIGHT",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function reportTemplateAlignmentFromJSON(object: any): ReportTemplateAlignment;
export declare function reportTemplateAlignmentToJSON(object: ReportTemplateAlignment): string;
export declare function reportTemplateAlignmentToNumber(object: ReportTemplateAlignment): number;
export declare enum ReportTemplateBorderStyle {
    REPORT_TEMPLATE_BORDER_STYLE_SOLID = "REPORT_TEMPLATE_BORDER_STYLE_SOLID",
    REPORT_TEMPLATE_BORDER_STYLE_DASHED = "REPORT_TEMPLATE_BORDER_STYLE_DASHED",
    REPORT_TEMPLATE_BORDER_STYLE_DOTTED = "REPORT_TEMPLATE_BORDER_STYLE_DOTTED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function reportTemplateBorderStyleFromJSON(object: any): ReportTemplateBorderStyle;
export declare function reportTemplateBorderStyleToJSON(object: ReportTemplateBorderStyle): string;
export declare function reportTemplateBorderStyleToNumber(object: ReportTemplateBorderStyle): number;
export declare enum ReportTemplateVerticalAlignment {
    REPORT_TEMPLATE_VERTICAL_ALIGNMENT_TOP = "REPORT_TEMPLATE_VERTICAL_ALIGNMENT_TOP",
    REPORT_TEMPLATE_VERTICAL_ALIGNMENT_MIDDLE = "REPORT_TEMPLATE_VERTICAL_ALIGNMENT_MIDDLE",
    REPORT_TEMPLATE_VERTICAL_ALIGNMENT_BOTTOM = "REPORT_TEMPLATE_VERTICAL_ALIGNMENT_BOTTOM",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function reportTemplateVerticalAlignmentFromJSON(object: any): ReportTemplateVerticalAlignment;
export declare function reportTemplateVerticalAlignmentToJSON(object: ReportTemplateVerticalAlignment): string;
export declare function reportTemplateVerticalAlignmentToNumber(object: ReportTemplateVerticalAlignment): number;
/** Sparse overrides. An absent property inherits; false and zero are values. */
export interface ReportTemplateStyle {
    font_family?: string | undefined;
    font_size?: number | undefined;
    bold?: boolean | undefined;
    italic?: boolean | undefined;
    underline?: boolean | undefined;
    alignment?: ReportTemplateAlignment | undefined;
    text_color?: string | undefined;
    background_color?: string | undefined;
    line_height?: number | undefined;
    paragraph_spacing?: number | undefined;
    padding?: number | undefined;
    border_color?: string | undefined;
    border_width?: number | undefined;
    border_style?: ReportTemplateBorderStyle | undefined;
    border_radius?: number | undefined;
    column_gap?: number | undefined;
    vertical_alignment?: ReportTemplateVerticalAlignment | undefined;
}
export interface ReportTemplateMargins {
    top?: number | undefined;
    right?: number | undefined;
    bottom?: number | undefined;
    left?: number | undefined;
}
export declare const ReportTemplateStyle: MessageFns<ReportTemplateStyle>;
export declare const ReportTemplateMargins: MessageFns<ReportTemplateMargins>;
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
