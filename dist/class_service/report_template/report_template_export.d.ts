import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../../utils/object_id";
import { RequestContext } from "../../utils/request_context";
import { ClassRef } from "../class_ref";
import { ReportCardExportMode, ReportCardSignature } from "../report_card_export_service";
import { GuardianSignature, GuardianSignatureSessionMetadata, ReportEntryCheckBox, ReportEntrySection } from "../report_entry";
import { ReportCheckBoxLayout, ReportLayoutSection, ReportType } from "../report_layout";
import { ReportTemplate } from "./report_template";
import { ReportTemplateAssignment } from "./report_template_assignment";
import { ReportTemplateFieldReference, ReportTemplateSignatureRole } from "./report_template_design";
export declare const protobufPackage = "class_service.report_template";
export interface GetConfiguredReportCardExportRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    /** An actual contribution. A persisted pin determines its original owning scope. */
    class_ref: ClassRef | undefined;
    report_type?: ReportType | undefined;
    mode?: ReportCardExportMode | undefined;
}
export interface ReportTemplateResolvedCheckBoxes {
    definitions: ReportCheckBoxLayout[];
    values: ReportEntryCheckBox[];
}
export interface ReportTemplateResolvedSections {
    definitions: ReportLayoutSection[];
    values: ReportEntrySection[];
}
export interface ResolvedReportTemplateField {
    field: ReportTemplateFieldReference | undefined;
    /** Absence means unavailable; an empty string is an explicitly blank value. */
    value?: string | undefined;
    /**
     * Response projection of existing course checkboxes. Absence is unavailable;
     * a present envelope with no definitions is an available empty checkbox set.
     */
    checkboxes?: ReportTemplateResolvedCheckBoxes | undefined;
    /** Structured course.mark projection with snapshotted definitions and marks. */
    sections?: ReportTemplateResolvedSections | undefined;
}
export interface SignConfiguredReportCardRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    class_ref: ClassRef | undefined;
    report_type?: ReportType | undefined;
    /** Sign only the exact issuance the guardian viewed, never a later correction. */
    expected_issuance_id: ObjectId | undefined;
    session_metadata?: GuardianSignatureSessionMetadata | undefined;
}
export interface ConfiguredReportCardCourse {
    course_id: ObjectId | undefined;
    values: ResolvedReportTemplateField[];
}
export interface ConfiguredReportCardSignature {
    role?: ReportTemplateSignatureRole | undefined;
    signature: ReportCardSignature | undefined;
}
export interface ReportCardIssuanceMetadata {
    id: ObjectId | undefined;
    revision?: number | undefined;
}
export interface ConfiguredReportCardAsset {
    asset_id: ObjectId | undefined;
    /** Response-only access URL; absence means this saved image is unavailable. */
    url?: string | undefined;
}
export interface ConfiguredReportCardExport {
    assignment: ReportTemplateAssignment | undefined;
    report_template: ReportTemplate | undefined;
    /** Response-only mode. Issued content is persisted independently of retrieval mode. */
    mode?: ReportCardExportMode | undefined;
    values: ResolvedReportTemplateField[];
    /** Preserves the issued order of courses. */
    courses: ConfiguredReportCardCourse[];
    signatures: ConfiguredReportCardSignature[];
    issuance?: ReportCardIssuanceMetadata | undefined;
    /**
     * These IDs are authorized through this report, not through template administration.
     * Transient URLs are excluded from the immutable issuance snapshot.
     */
    assets: ConfiguredReportCardAsset[];
    organization_logo_url?: string | undefined;
    campus_logo_url?: string | undefined;
    student_id: ObjectId | undefined;
    guardian_signature?: GuardianSignature | undefined;
}
export declare const GetConfiguredReportCardExportRequest: MessageFns<GetConfiguredReportCardExportRequest>;
export declare const ReportTemplateResolvedCheckBoxes: MessageFns<ReportTemplateResolvedCheckBoxes>;
export declare const ReportTemplateResolvedSections: MessageFns<ReportTemplateResolvedSections>;
export declare const ResolvedReportTemplateField: MessageFns<ResolvedReportTemplateField>;
export declare const SignConfiguredReportCardRequest: MessageFns<SignConfiguredReportCardRequest>;
export declare const ConfiguredReportCardCourse: MessageFns<ConfiguredReportCardCourse>;
export declare const ConfiguredReportCardSignature: MessageFns<ConfiguredReportCardSignature>;
export declare const ReportCardIssuanceMetadata: MessageFns<ReportCardIssuanceMetadata>;
export declare const ConfiguredReportCardAsset: MessageFns<ConfiguredReportCardAsset>;
export declare const ConfiguredReportCardExport: MessageFns<ConfiguredReportCardExport>;
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
