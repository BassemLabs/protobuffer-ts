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
     * Owning homeroom or standalone course in this semester. Linked courses
     * inherit their homeroom's assignment and cannot be assigned independently.
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
     * Immutable selection identity. Reassignment creates a new ID, including
     * selecting a previously used version; exact retries retain the current ID.
     */
    id: ObjectId | undefined;
    scope: ReportTemplateAssignmentScope | undefined;
    report_template_id: ObjectId | undefined;
    /** An exact immutable saved version, never the template's latest revision. */
    version_id: ObjectId | undefined;
    /** Frozen with the selection. Every area has exactly one contribution owner. */
    contribution_bindings: ReportTemplateContributionBinding[];
}
export interface GetReportTemplateAssignmentRequest {
    context: RequestContext | undefined;
    scope: ReportTemplateAssignmentScope | undefined;
}
export interface ReportTemplateAssignmentResponse {
    /** Absence preserves the existing preset report workflow. */
    assignment?: ReportTemplateAssignment | undefined;
    /**
     * Applies even when assignment is absent: existing work stays on its
     * original version or legacy workflow and cannot be silently reassigned.
     */
    work_started?: boolean | undefined;
}
/**
 * Repeating the exact assigned target is idempotent. A different target is
 * rejected after report work starts, even if the expectations still match.
 */
export interface AssignReportTemplateRequest {
    context: RequestContext | undefined;
    scope: ReportTemplateAssignmentScope | undefined;
    report_template_id: ObjectId | undefined;
    version_id: ObjectId | undefined;
    /**
     * Absent creates an assignment; present compares the currently observed
     * immutable assignment before replacing it.
     */
    expected_assignment_id?: ObjectId | undefined;
    /**
     * Included in selection identity and exact-retry comparison. When interactive
     * areas exist, supply every contributor, including explicit empty area lists.
     */
    contribution_bindings: ReportTemplateContributionBinding[];
}
/**
 * Unassignment is allowed only before work starts. Retrying after removal
 * succeeds; a newer active assignment must never be removed by a stale retry.
 */
export interface UnassignReportTemplateRequest {
    context: RequestContext | undefined;
    scope: ReportTemplateAssignmentScope | undefined;
    expected_assignment_id: ObjectId | undefined;
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
     * Both absent means legacy. Existing pinned entries retain their original
     * selection; new entries resolve the current selection for their class scope.
     */
    assignment?: ReportTemplateAssignment | undefined;
    report_template?: ReportTemplate | undefined;
}
export declare const ReportTemplateAssignmentScope: MessageFns<ReportTemplateAssignmentScope>;
export declare const ReportTemplateContributionBinding: MessageFns<ReportTemplateContributionBinding>;
export declare const ReportTemplateAssignment: MessageFns<ReportTemplateAssignment>;
export declare const GetReportTemplateAssignmentRequest: MessageFns<GetReportTemplateAssignmentRequest>;
export declare const ReportTemplateAssignmentResponse: MessageFns<ReportTemplateAssignmentResponse>;
export declare const AssignReportTemplateRequest: MessageFns<AssignReportTemplateRequest>;
export declare const UnassignReportTemplateRequest: MessageFns<UnassignReportTemplateRequest>;
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
