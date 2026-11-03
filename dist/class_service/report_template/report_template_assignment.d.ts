import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../../utils/object_id";
import { RequestContext } from "../../utils/request_context";
import { ClassRef } from "../class_ref";
import { ReportType } from "../report_layout";
import { ReportTemplate } from "./report_template";
export declare const protobufPackage = "class_service.report_template";
export interface ReportTemplateAssignmentScope {
    organization_id: ObjectId | undefined;
    semester_id: ObjectId | undefined;
    /**
     * Owning homeroom or standalone course of the frozen report. Linked courses
     * contribute to their homeroom's report.
     */
    class_ref: ClassRef | undefined;
    report_type?: ReportType | undefined;
}
export interface ReportTemplateContributionBinding {
    class_ref: ClassRef | undefined;
    /** Empty explicitly means this contribution has no assessment areas. */
    area_ids: string[];
}
export interface ReportTemplateAssignment {
    /**
     * Immutable class snapshot resolved from the shared grade selection.
     * Existing report entries retain their original snapshot identity.
     */
    id: ObjectId | undefined;
    scope: ReportTemplateAssignmentScope | undefined;
    report_template_id: ObjectId | undefined;
    /** An exact immutable saved version, never the template's latest revision. */
    version_id: ObjectId | undefined;
    /** Frozen with the selection. Every area has exactly one contribution owner. */
    contribution_bindings: ReportTemplateContributionBinding[];
}
export interface GetReportEntryTemplateContextRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    /** The actual contribution being edited or read, including a linked course. */
    class_ref: ClassRef | undefined;
    report_type?: ReportType | undefined;
}
export interface ReportEntryTemplateContext {
    /**
     * Both absent selects the preset report layout. Pinned entries retain their
     * original selection; new entries resolve the current class selection.
     */
    assignment?: ReportTemplateAssignment | undefined;
    report_template?: ReportTemplate | undefined;
}
export declare const ReportTemplateAssignmentScope: MessageFns<ReportTemplateAssignmentScope>;
export declare const ReportTemplateContributionBinding: MessageFns<ReportTemplateContributionBinding>;
export declare const ReportTemplateAssignment: MessageFns<ReportTemplateAssignment>;
export declare const GetReportEntryTemplateContextRequest: MessageFns<GetReportEntryTemplateContextRequest>;
export declare const ReportEntryTemplateContext: MessageFns<ReportEntryTemplateContext>;
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
