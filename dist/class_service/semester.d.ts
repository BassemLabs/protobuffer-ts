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
    startDate: Date | undefined;
    endDate: Date | undefined;
    reportLayout?: SemesterReportLayout | undefined;
}
export interface SemesterReportLayout {
    commentCharLimit: number;
    includeProgressReportCards: boolean;
    showCreditsEarnedEntry: boolean;
    learningSkills: SemesterLearningSkill[];
    reportDates: ReportDates[];
    hideLearningSkillsFromHomerooms: boolean;
    hideLearningSkillsFromCourses: boolean;
}
export interface ReportDates {
    reportType: ReportType;
    dueDate?: Date | undefined;
    distributionDate?: Date | undefined;
}
export interface SemesterLearningSkill {
    id: ObjectId | undefined;
    title: string;
    description: string;
}
export declare const Semester: MessageFns<Semester>;
export declare const SemesterReportLayout: MessageFns<SemesterReportLayout>;
export declare const ReportDates: MessageFns<ReportDates>;
export declare const SemesterLearningSkill: MessageFns<SemesterLearningSkill>;
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
