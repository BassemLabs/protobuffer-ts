import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { DetailedEvaluation, Evaluation, PersonalizedEvaluation } from "./evaluation";
import { EvaluationEntry } from "./evaluation_entry";
import { DetailedMarkCategory, PersonalizedMarkCategory } from "./mark_category";
export declare const protobufPackage = "class_service.evaluation_service";
/** Create Evaluation */
export interface CreateEvaluationRequest {
    context: RequestContext | undefined;
    courseId: ObjectId | undefined;
    name: string;
    total: number;
    weight: number;
    /** YYYY-MM-DD format for NaiveDate */
    date: string;
    markCategory: ObjectId | undefined;
}
/** Update Evaluation */
export interface UpdateEvaluationRequest {
    context: RequestContext | undefined;
    evaluationId: ObjectId | undefined;
    name: string;
    total: number;
    weight: number;
    /** YYYY-MM-DD format for NaiveDate */
    date: string;
    markCategory: ObjectId | undefined;
}
/** Delete Evaluation */
export interface DeleteEvaluationRequest {
    context: RequestContext | undefined;
    evaluationId: ObjectId | undefined;
}
export interface GetCourseDetailedEvaluationsResponse {
    evaluations: DetailedEvaluation[];
}
export interface GetCourseEvaluationsResponse {
    evaluations: Evaluation[];
}
/** Publish/Unpublish Evaluation */
export interface PublishEvaluationRequest {
    context: RequestContext | undefined;
    evaluationId: ObjectId | undefined;
}
export interface UnpublishEvaluationRequest {
    context: RequestContext | undefined;
    evaluationId: ObjectId | undefined;
}
/** Get Evaluation Entries */
export interface GetEvaluationEntriesRequest {
    context: RequestContext | undefined;
    evaluationId: ObjectId | undefined;
}
export interface GetEvaluationEntriesResponse {
    entries: EvaluationEntry[];
}
/** Get Student Course Evaluation Entries */
export interface GetStudentCourseEvaluationEntriesRequest {
    context: RequestContext | undefined;
    studentId: ObjectId | undefined;
    courseId: ObjectId | undefined;
}
/** Update Evaluation Marks (Batch) */
export interface StudentMarkUpdate {
    studentId: ObjectId | undefined;
    mark: number;
}
export interface UpdateEvaluationMarksRequest {
    context: RequestContext | undefined;
    evaluationId: ObjectId | undefined;
    studentMarks: StudentMarkUpdate[];
}
/** Create Mark Category */
export interface CreateMarkCategoryRequest {
    context: RequestContext | undefined;
    courseId: ObjectId | undefined;
    name: string;
    percentage: number;
}
/** Update Mark Category */
export interface UpdateMarkCategoryRequest {
    context: RequestContext | undefined;
    markCategoryId: ObjectId | undefined;
    name: string;
    percentage: number;
}
/** Delete Mark Category */
export interface DeleteMarkCategoryRequest {
    context: RequestContext | undefined;
    markCategoryId: ObjectId | undefined;
}
/** Get Course Mark Categories */
export interface GetCourseMarkCategoriesRequest {
    context: RequestContext | undefined;
    courseId: ObjectId | undefined;
}
export interface DetailedMarkCategoriesAndEvaluationsResponse {
    markCategories: DetailedMarkCategory[];
    evaluations: DetailedEvaluation[];
}
export interface GetCourseDetailedMarkCategoriesAndEvaluationsRequest {
    context: RequestContext | undefined;
    courseId: ObjectId | undefined;
}
/** Student Course Performance for a course */
export interface GetStudentsCoursePerformanceRequest {
    context: RequestContext | undefined;
    courseId: ObjectId | undefined;
}
export interface GetStudentsCoursePerformanceResponse {
    studentPerformanes: StudentCoursePerformance[];
}
export interface GetStudentCoursePerformanceRequest {
    context: RequestContext | undefined;
    studentId: ObjectId | undefined;
    courseId: ObjectId | undefined;
}
export interface StudentCoursePerformance {
    student: ObjectId | undefined;
    finalMark?: number | undefined;
    maximumPotentialMark: number;
    evaluations: PersonalizedEvaluation[];
    markCategories: PersonalizedMarkCategory[];
    studentEvaluationEntries: EvaluationEntry[];
}
/** Student Course Mark Overview */
export interface GetStudentCoursesMarkOverviewRequest {
    context: RequestContext | undefined;
    studentId: ObjectId | undefined;
    schoolYearId: ObjectId | undefined;
}
export interface GetStudentCoursesMarkOverviewResponse {
    courseMarks: StudentCourseMarkOverview[];
}
export interface StudentCourseMarkOverview {
    courseId: ObjectId | undefined;
    courseName: string;
    courseCode: string;
    semesterId: ObjectId | undefined;
    /** the mark for published evaluations for this course through all categories */
    studentMark?: number | undefined;
    /** assuming that the student got the full mark for non-marked evaluations */
    maximumPotentialMark: number;
}
/** Export Markbook Excel */
export interface ExportMarkbookExcelRequest {
    context: RequestContext | undefined;
    courseId: ObjectId | undefined;
}
export interface ExportMarkbookExcelResponse {
    /** base64 encoded excel file */
    excelData: string;
    courseName: string;
}
export declare const CreateEvaluationRequest: MessageFns<CreateEvaluationRequest>;
export declare const UpdateEvaluationRequest: MessageFns<UpdateEvaluationRequest>;
export declare const DeleteEvaluationRequest: MessageFns<DeleteEvaluationRequest>;
export declare const GetCourseDetailedEvaluationsResponse: MessageFns<GetCourseDetailedEvaluationsResponse>;
export declare const GetCourseEvaluationsResponse: MessageFns<GetCourseEvaluationsResponse>;
export declare const PublishEvaluationRequest: MessageFns<PublishEvaluationRequest>;
export declare const UnpublishEvaluationRequest: MessageFns<UnpublishEvaluationRequest>;
export declare const GetEvaluationEntriesRequest: MessageFns<GetEvaluationEntriesRequest>;
export declare const GetEvaluationEntriesResponse: MessageFns<GetEvaluationEntriesResponse>;
export declare const GetStudentCourseEvaluationEntriesRequest: MessageFns<GetStudentCourseEvaluationEntriesRequest>;
export declare const StudentMarkUpdate: MessageFns<StudentMarkUpdate>;
export declare const UpdateEvaluationMarksRequest: MessageFns<UpdateEvaluationMarksRequest>;
export declare const CreateMarkCategoryRequest: MessageFns<CreateMarkCategoryRequest>;
export declare const UpdateMarkCategoryRequest: MessageFns<UpdateMarkCategoryRequest>;
export declare const DeleteMarkCategoryRequest: MessageFns<DeleteMarkCategoryRequest>;
export declare const GetCourseMarkCategoriesRequest: MessageFns<GetCourseMarkCategoriesRequest>;
export declare const DetailedMarkCategoriesAndEvaluationsResponse: MessageFns<DetailedMarkCategoriesAndEvaluationsResponse>;
export declare const GetCourseDetailedMarkCategoriesAndEvaluationsRequest: MessageFns<GetCourseDetailedMarkCategoriesAndEvaluationsRequest>;
export declare const GetStudentsCoursePerformanceRequest: MessageFns<GetStudentsCoursePerformanceRequest>;
export declare const GetStudentsCoursePerformanceResponse: MessageFns<GetStudentsCoursePerformanceResponse>;
export declare const GetStudentCoursePerformanceRequest: MessageFns<GetStudentCoursePerformanceRequest>;
export declare const StudentCoursePerformance: MessageFns<StudentCoursePerformance>;
export declare const GetStudentCoursesMarkOverviewRequest: MessageFns<GetStudentCoursesMarkOverviewRequest>;
export declare const GetStudentCoursesMarkOverviewResponse: MessageFns<GetStudentCoursesMarkOverviewResponse>;
export declare const StudentCourseMarkOverview: MessageFns<StudentCourseMarkOverview>;
export declare const ExportMarkbookExcelRequest: MessageFns<ExportMarkbookExcelRequest>;
export declare const ExportMarkbookExcelResponse: MessageFns<ExportMarkbookExcelResponse>;
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
