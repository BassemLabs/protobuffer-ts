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
export interface Semester {
    id: ObjectId | undefined;
    name: string;
    archived: boolean;
    start_date: Date | undefined;
    end_date: Date | undefined;
    report_layout?: SemesterReportLayout | undefined;
    campus_id: ObjectId | undefined;
    school_year: ObjectId | undefined;
}
export interface SemesterReportLayout {
    comment_char_limit: number;
    include_progress_report_cards: boolean;
    show_credits_earned_entry: boolean;
    learning_skills: SemesterLearningSkill[];
    report_dates: ReportDates[];
    hide_learning_skills_from_homerooms: boolean;
    hide_learning_skills_from_courses: boolean;
}
export interface ReportDates {
    report_type: ReportType;
    due_date?: Date | undefined;
    distribution_date?: Date | undefined;
}
export interface SemesterLearningSkill {
    id: ObjectId | undefined;
    title: string;
    description: string;
}
export interface ListSemester {
    id: ObjectId | undefined;
    archived: boolean;
    name: string;
    start_date: Date | undefined;
    end_date: Date | undefined;
}
export interface SemesterList {
    semesters: ListSemester[];
    semesters_count: number;
}
export declare const Semester: MessageFns<Semester>;
export declare const SemesterReportLayout: MessageFns<SemesterReportLayout>;
export declare const ReportDates: MessageFns<ReportDates>;
export declare const SemesterLearningSkill: MessageFns<SemesterLearningSkill>;
export declare const ListSemester: MessageFns<ListSemester>;
export declare const SemesterList: MessageFns<SemesterList>;
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
