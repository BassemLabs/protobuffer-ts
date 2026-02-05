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
    course_id: ObjectId | undefined;
    name: string;
    total: number;
    weight: number;
    /** YYYY-MM-DD format for NaiveDate */
    date: string;
    mark_category: ObjectId | undefined;
}
/** Update Evaluation */
export interface UpdateEvaluationRequest {
    context: RequestContext | undefined;
    evaluation_id: ObjectId | undefined;
    name: string;
    total: number;
    weight: number;
    /** YYYY-MM-DD format for NaiveDate */
    date: string;
    mark_category: ObjectId | undefined;
}
/** Delete Evaluation */
export interface DeleteEvaluationRequest {
    context: RequestContext | undefined;
    evaluation_id: ObjectId | undefined;
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
    evaluation_id: ObjectId | undefined;
}
export interface UnpublishEvaluationRequest {
    context: RequestContext | undefined;
    evaluation_id: ObjectId | undefined;
}
/** Get Evaluation Entries */
export interface GetEvaluationEntriesRequest {
    context: RequestContext | undefined;
    evaluation_id: ObjectId | undefined;
}
export interface GetEvaluationEntriesResponse {
    entries: EvaluationEntry[];
}
/** Get Student Course Evaluation Entries */
export interface GetStudentCourseEvaluationEntriesRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    course_id: ObjectId | undefined;
}
/** Get Evaluation Entry Fill Counts (Batch) */
export interface GetEvaluationEntriesFillCountsRequest {
    context: RequestContext | undefined;
    evaluation_ids: ObjectId[];
    student_ids: ObjectId[];
}
export interface EvaluationEntryFillCount {
    evaluation_id: ObjectId | undefined;
    filled_count: number;
}
export interface GetEvaluationEntriesFillCountsResponse {
    counts: EvaluationEntryFillCount[];
}
/** Update Evaluation Marks (Batch) */
export interface StudentMarkUpdate {
    student_id: ObjectId | undefined;
    mark: number;
}
export interface UpdateEvaluationMarksRequest {
    context: RequestContext | undefined;
    evaluation_id: ObjectId | undefined;
    student_marks: StudentMarkUpdate[];
}
/** Create Mark Category */
export interface CreateMarkCategoryRequest {
    context: RequestContext | undefined;
    course_id: ObjectId | undefined;
    name: string;
    percentage: number;
}
/** Update Mark Category */
export interface UpdateMarkCategoryRequest {
    context: RequestContext | undefined;
    mark_category_id: ObjectId | undefined;
    name: string;
    percentage: number;
}
/** Delete Mark Category */
export interface DeleteMarkCategoryRequest {
    context: RequestContext | undefined;
    mark_category_id: ObjectId | undefined;
}
/** Get Course Mark Categories */
export interface GetCourseMarkCategoriesRequest {
    context: RequestContext | undefined;
    course_id: ObjectId | undefined;
}
export interface DetailedMarkCategoriesAndEvaluationsResponse {
    mark_categories: DetailedMarkCategory[];
    evaluations: DetailedEvaluation[];
}
export interface GetCourseDetailedMarkCategoriesAndEvaluationsRequest {
    context: RequestContext | undefined;
    course_id: ObjectId | undefined;
}
/** Student Course Performance for a course */
export interface GetStudentsCoursePerformanceRequest {
    context: RequestContext | undefined;
    course_id: ObjectId | undefined;
}
export interface GetStudentsCoursePerformanceResponse {
    student_performanes: StudentCoursePerformance[];
}
export interface GetStudentCoursePerformanceRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    course_id: ObjectId | undefined;
}
export interface StudentCoursePerformance {
    student: ObjectId | undefined;
    final_mark?: number | undefined;
    maximum_potential_mark: number;
    evaluations: PersonalizedEvaluation[];
    mark_categories: PersonalizedMarkCategory[];
    student_evaluation_entries: EvaluationEntry[];
}
/** Student Course Mark Overview */
export interface GetStudentCoursesMarkOverviewRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    school_year_id: ObjectId | undefined;
}
export interface GetStudentCoursesMarkOverviewResponse {
    course_marks: StudentCourseMarkOverview[];
}
export interface StudentCourseMarkOverview {
    course_id: ObjectId | undefined;
    course_name: string;
    course_code: string;
    semester_id: ObjectId | undefined;
    /** the mark for published evaluations for this course through all categories */
    student_mark?: number | undefined;
    /** assuming that the student got the full mark for non-marked evaluations */
    maximum_potential_mark: number;
}
/** Export Markbook Excel */
export interface ExportMarkbookExcelRequest {
    context: RequestContext | undefined;
    course_id: ObjectId | undefined;
}
export interface ExportMarkbookExcelResponse {
    /** base64 encoded excel file */
    excel_data: string;
    course_name: string;
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
export declare const GetEvaluationEntriesFillCountsRequest: MessageFns<GetEvaluationEntriesFillCountsRequest>;
export declare const EvaluationEntryFillCount: MessageFns<EvaluationEntryFillCount>;
export declare const GetEvaluationEntriesFillCountsResponse: MessageFns<GetEvaluationEntriesFillCountsResponse>;
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
