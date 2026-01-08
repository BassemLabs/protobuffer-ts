import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { ReportType, Semester, SemesterReportLayout } from "./semester";
export declare const protobufPackage = "class_service";
export declare enum ReportStatus {
    NOT_FILLED = "NOT_FILLED",
    FILLED = "FILLED",
    CHANGES_REQUESTED = "CHANGES_REQUESTED",
    COMPLETED = "COMPLETED",
    APPROVED = "APPROVED",
    PUBLISHED = "PUBLISHED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function reportStatusFromJSON(object: any): ReportStatus;
export declare function reportStatusToJSON(object: ReportStatus): string;
export declare function reportStatusToNumber(object: ReportStatus): number;
export interface ReportEntryCheckBox {
    check_box_id: ObjectId | undefined;
    state: boolean;
}
export interface ReportEntrySection {
    layout_id: ObjectId | undefined;
    mark: string;
}
export interface ReportEntryLearningSkill {
    learning_skill_id: ObjectId | undefined;
    mark: string;
}
export interface GuardianSignatureHeader {
    key: string;
    value: string;
}
export interface GuardianSignatureSessionMetadata {
    ip_address?: string | undefined;
    peer_addr?: string | undefined;
    scheme?: string | undefined;
    headers: GuardianSignatureHeader[];
}
export interface GuardianSignature {
    guardian_id: ObjectId | undefined;
    guardian_name: string;
    guardian_signed_at: Date | undefined;
    session_metadata?: GuardianSignatureSessionMetadata | undefined;
}
export interface ReportEntry {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    student: ObjectId | undefined;
    course?: ObjectId | undefined;
    homeroom?: ObjectId | undefined;
    report_type: ReportType;
    comment: string;
    checkboxes: ReportEntryCheckBox[];
    sections: ReportEntrySection[];
    review_status: ReportStatus;
    requested_changes: string;
    learning_skills: ReportEntryLearningSkill[];
    credit_earned: boolean;
    guardian_signature?: GuardianSignature | undefined;
}
export interface ReportEntryView {
    entry: ReportEntry | undefined;
    class_name: string;
    semester: Semester | undefined;
    semester_report_layout: SemesterReportLayout | undefined;
    signed_by_guardian_name?: string | undefined;
}
export interface ReportEntrySectionMedian {
    section_layout_id: ObjectId | undefined;
    median_mark?: string | undefined;
}
export interface ReportEntryMedian {
    report_entry: ObjectId | undefined;
    section_medians: ReportEntrySectionMedian[];
}
export declare const ReportEntryCheckBox: MessageFns<ReportEntryCheckBox>;
export declare const ReportEntrySection: MessageFns<ReportEntrySection>;
export declare const ReportEntryLearningSkill: MessageFns<ReportEntryLearningSkill>;
export declare const GuardianSignatureHeader: MessageFns<GuardianSignatureHeader>;
export declare const GuardianSignatureSessionMetadata: MessageFns<GuardianSignatureSessionMetadata>;
export declare const GuardianSignature: MessageFns<GuardianSignature>;
export declare const ReportEntry: MessageFns<ReportEntry>;
export declare const ReportEntryView: MessageFns<ReportEntryView>;
export declare const ReportEntrySectionMedian: MessageFns<ReportEntrySectionMedian>;
export declare const ReportEntryMedian: MessageFns<ReportEntryMedian>;
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
