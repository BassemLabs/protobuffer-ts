import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { DateTime } from "../utils/datetime";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "class_service";
export declare enum ReportType {
    Progress = 1,
    Midterm = 2,
    Final = 3,
    UNRECOGNIZED = -1
}
export declare function reportTypeFromJSON(object: any): ReportType;
export declare function reportTypeToJSON(object: ReportType): string;
export interface Semester {
    id: ObjectId | undefined;
    name: string;
    archived: boolean;
    startDate: DateTime | undefined;
    endDate: DateTime | undefined;
    reportLayout?: SemesterReportLayout | undefined;
}
export interface SemesterReportLayout {
    commentCharLimit: number;
    includeProgressReportCards: boolean;
    showCreditsEarnedEntry: boolean;
    learningSkills: SemesterLearningSkill[];
    reportDates: ReportDates[];
}
export interface ReportDates {
    reportType: ReportType;
    dueDate?: DateTime | undefined;
    distributionDate?: DateTime | undefined;
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
