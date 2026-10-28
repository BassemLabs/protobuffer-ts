import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "class_service";
export declare enum ReportType {
    Progress = "Progress",
    Midterm = "Midterm",
    Final = "Final",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function reportTypeFromJSON(object: any): ReportType;
export declare function reportTypeToJSON(object: ReportType): string;
export declare function reportTypeToNumber(object: ReportType): number;
export interface ReportLayout {
    id: ObjectId | undefined;
    organization_id: ObjectId | undefined;
    course_id: ObjectId | undefined;
    comment_char_limit?: number | undefined;
    sections: ReportLayoutSection[];
    check_boxes: ReportCheckBoxLayout[];
    credit_weight?: number | undefined;
    report_card_eligibility: ReportCardEligibility | undefined;
    /**
     * Absence retains the legacy section behavior. Omission on update preserves
     * the stored policy so older clients cannot erase it.
     */
    section_policy?: ReportLayoutSectionPolicy | undefined;
}
export interface ReportCardEligibility {
    enabled?: boolean | undefined;
    enabled_report_types: ReportType[];
}
export interface ReportLayoutSection {
    id: ObjectId | undefined;
    name?: string | undefined;
}
export interface ReportLayoutSectionPolicy {
    /** Canonical stored marks, such as M/P/B/N; no display-label translation. */
    allowed_values: string[];
    /**
     * All section rows are required before review for these report types.
     * An empty list explicitly disables section assessments for every type.
     */
    enabled_report_types: ReportType[];
}
export interface ReportCheckBoxLayout {
    id: ObjectId | undefined;
    name?: string | undefined;
}
export declare const ReportLayout: MessageFns<ReportLayout>;
export declare const ReportCardEligibility: MessageFns<ReportCardEligibility>;
export declare const ReportLayoutSection: MessageFns<ReportLayoutSection>;
export declare const ReportLayoutSectionPolicy: MessageFns<ReportLayoutSectionPolicy>;
export declare const ReportCheckBoxLayout: MessageFns<ReportCheckBoxLayout>;
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
