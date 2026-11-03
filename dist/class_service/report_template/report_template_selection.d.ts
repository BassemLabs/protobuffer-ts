import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { StudentGrade } from "../../user_service/student";
import { ObjectId } from "../../utils/object_id";
import { RequestContext } from "../../utils/request_context";
import { ReportType } from "../report_layout";
export declare const protobufPackage = "class_service.report_template";
export interface ReportTemplateSelectionScope {
    organization_id: ObjectId | undefined;
    /** Absent selects the school default; present selects a grade override. */
    grade?: StudentGrade | undefined;
    report_type?: ReportType | undefined;
}
export interface ReportTemplateSelection {
    id: ObjectId | undefined;
    report_template_id: ObjectId | undefined;
    /** Saving a newer design version does not change this selection. */
    version_id: ObjectId | undefined;
    /** Absent selects the school default; present selects a grade override. */
    grade?: StudentGrade | undefined;
}
export interface ListReportTemplateSelectionsRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    report_type?: ReportType | undefined;
}
export interface ListReportTemplateSelectionsResponse {
    /** Configured defaults only. Grades without an override inherit the school default. */
    selections: ReportTemplateSelection[];
}
export interface SelectReportTemplateVersionRequest {
    context: RequestContext | undefined;
    scope: ReportTemplateSelectionScope | undefined;
    report_template_id: ObjectId | undefined;
    version_id: ObjectId | undefined;
    /**
     * Absent creates a selection; present compares the observed selection.
     * Repeating the current target is an exact, idempotent retry.
     */
    expected_selection_id?: ObjectId | undefined;
}
export interface ClearReportTemplateSelectionRequest {
    context: RequestContext | undefined;
    scope: ReportTemplateSelectionScope | undefined;
    /** A stale retry must not remove a newer selection. */
    expected_selection_id: ObjectId | undefined;
}
export declare const ReportTemplateSelectionScope: MessageFns<ReportTemplateSelectionScope>;
export declare const ReportTemplateSelection: MessageFns<ReportTemplateSelection>;
export declare const ListReportTemplateSelectionsRequest: MessageFns<ListReportTemplateSelectionsRequest>;
export declare const ListReportTemplateSelectionsResponse: MessageFns<ListReportTemplateSelectionsResponse>;
export declare const SelectReportTemplateVersionRequest: MessageFns<SelectReportTemplateVersionRequest>;
export declare const ClearReportTemplateSelectionRequest: MessageFns<ClearReportTemplateSelectionRequest>;
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
