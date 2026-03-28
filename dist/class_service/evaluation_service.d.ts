import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { DetailedEvaluation, Evaluation, PersonalizedEvaluation } from "./evaluation";
import { EvaluationEntry } from "./evaluation_entry";
import { DetailedMarkCategory, PersonalizedMarkCategory } from "./mark_category";
export declare const protobufPackage = "class_service.evaluation_service";
export declare enum PrincipalDashboardGradeBucket {
    UNSPECIFIED = "UNSPECIFIED",
    RANGE_90_100 = "RANGE_90_100",
    RANGE_80_89 = "RANGE_80_89",
    RANGE_70_79 = "RANGE_70_79",
    RANGE_60_69 = "RANGE_60_69",
    BELOW_60 = "BELOW_60",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function principalDashboardGradeBucketFromJSON(object: any): PrincipalDashboardGradeBucket;
export declare function principalDashboardGradeBucketToJSON(object: PrincipalDashboardGradeBucket): string;
export declare function principalDashboardGradeBucketToNumber(object: PrincipalDashboardGradeBucket): number;
/** Create Evaluation */
export interface CreateEvaluationRequest {
    context: RequestContext | undefined;
    course_id: ObjectId | undefined;
    name?: string | undefined;
    total?: number | undefined;
    weight?: number | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    date?: string | undefined;
    mark_category: ObjectId | undefined;
}
/** Update Evaluation */
export interface UpdateEvaluationRequest {
    context: RequestContext | undefined;
    evaluation_id: ObjectId | undefined;
    name?: string | undefined;
    total?: number | undefined;
    weight?: number | undefined;
    /** YYYY-MM-DD format for NaiveDate */
    date?: string | undefined;
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
    filled_count?: number | undefined;
}
export interface GetEvaluationEntriesFillCountsResponse {
    counts: EvaluationEntryFillCount[];
}
/** Update Evaluation Marks (Batch) */
export interface StudentMarkUpdate {
    student_id: ObjectId | undefined;
    mark?: number | undefined;
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
    name?: string | undefined;
    percentage?: number | undefined;
}
/** Update Mark Category */
export interface UpdateMarkCategoryRequest {
    context: RequestContext | undefined;
    mark_category_id: ObjectId | undefined;
    name?: string | undefined;
    percentage?: number | undefined;
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
    maximum_potential_mark?: number | undefined;
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
    course_name?: string | undefined;
    course_code?: string | undefined;
    semester_id: ObjectId | undefined;
    /** the mark for published evaluations for this course through all categories */
    student_mark?: number | undefined;
    /** assuming that the student got the full mark for non-marked evaluations */
    maximum_potential_mark?: number | undefined;
}
/** Export Markbook Excel */
export interface ExportMarkbookExcelRequest {
    context: RequestContext | undefined;
    course_id: ObjectId | undefined;
}
export interface ExportMarkbookExcelResponse {
    /** base64 encoded excel file */
    excel_data?: string | undefined;
    course_name?: string | undefined;
}
export interface GetPrincipalDashboardAcademicSummaryRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
    semester_id?: ObjectId | undefined;
}
/** One bucket in the dashboard grade distribution summary. */
export interface PrincipalDashboardGradeDistributionBucket {
    /** Stable bucket identifier for frontend label mapping. */
    bucket?: PrincipalDashboardGradeBucket | undefined;
    /** Number of marks that fall into this bucket. */
    count?: number | undefined;
}
/** One low-performing course row shown in the dashboard course averages list. */
export interface PrincipalDashboardLowMarkCourse {
    course_id: ObjectId | undefined;
    course_name?: string | undefined;
    course_code?: string | undefined;
    teacher_names: string[];
    /** Average final mark for the course in the selected dashboard scope. */
    average_mark?: number | undefined;
}
/** One low student mark row shown in the dashboard lowest-marks list. */
export interface PrincipalDashboardLowestMark {
    student_id: ObjectId | undefined;
    student_name?: string | undefined;
    course_id: ObjectId | undefined;
    course_name?: string | undefined;
    /** Final mark value used to rank the lowest student marks. */
    mark?: number | undefined;
    course_code?: string | undefined;
}
/** One low student average row shown in the dashboard student averages list. */
export interface PrincipalDashboardLowStudentAverage {
    student_id: ObjectId | undefined;
    student_name?: string | undefined;
    /** Average final mark across the student's graded courses in the selected scope. */
    average_mark?: number | undefined;
    /** Number of graded courses included in the student average. */
    graded_courses_count?: number | undefined;
}
export interface GetPrincipalDashboardAcademicSummaryResponse {
    /** Distribution of marks across human-readable grade buckets. */
    grade_distribution: PrincipalDashboardGradeDistributionBucket[];
    /** Worst class averages shown in the dashboard. */
    low_mark_courses: PrincipalDashboardLowMarkCourse[];
    /** Lowest student marks shown in the dashboard. */
    lowest_marks: PrincipalDashboardLowestMark[];
    /** Lowest student averages shown in the dashboard. */
    lowest_student_averages: PrincipalDashboardLowStudentAverage[];
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
export declare const GetPrincipalDashboardAcademicSummaryRequest: MessageFns<GetPrincipalDashboardAcademicSummaryRequest>;
export declare const PrincipalDashboardGradeDistributionBucket: MessageFns<PrincipalDashboardGradeDistributionBucket>;
export declare const PrincipalDashboardLowMarkCourse: MessageFns<PrincipalDashboardLowMarkCourse>;
export declare const PrincipalDashboardLowestMark: MessageFns<PrincipalDashboardLowestMark>;
export declare const PrincipalDashboardLowStudentAverage: MessageFns<PrincipalDashboardLowStudentAverage>;
export declare const GetPrincipalDashboardAcademicSummaryResponse: MessageFns<GetPrincipalDashboardAcademicSummaryResponse>;
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
