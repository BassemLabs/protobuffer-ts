import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { SchoolYear } from "../organization_service/organization";
import { InvoiceResponse } from "../payment_service/invoice";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { UserType } from "../utils/user_type";
import { GroupApprovalStatus } from "./custom_field";
import { CustomFieldEntry } from "./custom_field_entry";
import { Family } from "./family";
import { Parent } from "./parent";
import { SchoolYearStudent, Student, StudentGrade, StudentProfile, StudentSchoolYearInformation, StudentStatus } from "./student";
import { Teacher } from "./teacher";
export declare const protobufPackage = "user_service";
export interface GetStudentRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
}
export interface GetStudentWithSchoolYearInfoRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
}
export interface GetStudentWithSchoolYearInfoResponse {
    student: Student | undefined;
    school_year_info: StudentSchoolYearInformation | undefined;
}
export interface CreateStudentRequest {
    context: RequestContext | undefined;
    first_name: string;
    last_name: string;
    gender: string;
    grade: StudentGrade;
    family_id: ObjectId | undefined;
    date_of_birth: Date | undefined;
    admission_year: ObjectId | undefined;
}
export interface UpdateStudentProfileRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    profile: StudentProfile | undefined;
}
export interface UpdateStudentGradeRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    school_year_id: ObjectId | undefined;
    grade: StudentGrade;
}
export interface MoveAdmissionYearRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    school_year: ObjectId | undefined;
    message: string;
}
export interface EnrollStudentWithMessageRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    enrollment_message: string;
    school_year: ObjectId | undefined;
}
export interface WithdrawStudentWithMessageRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    withdraw_message: string;
    school_year: ObjectId | undefined;
}
export interface ChangeStudentPasswordRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    password: string;
    change_password_at_next_login: boolean;
}
/** Empty response - if successful, password has been changed */
export interface ChangeStudentPasswordResponse {
}
export interface RejectStudentRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    rejection_message: string;
    school_year: ObjectId | undefined;
}
export interface ApproveStudentRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    approval_message: string;
    school_year: ObjectId | undefined;
}
export interface ToInterviewRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    interview_message: string;
    interview_date: Date | undefined;
    school_year: ObjectId | undefined;
}
export interface RequireFieldsChangesFromParentsRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    message: string;
}
export interface UploadStudentsRequest {
    context: RequestContext | undefined;
    /** CSV file content as base64-encoded string */
    csv_file_base64: string;
    /** Student status for the upload */
    student_status: StudentStatus;
    /** School year (admission year) for the students */
    school_year: ObjectId | undefined;
}
export interface UploadStudentsResponse {
    success_count: number;
    failed_count: number;
    /** Base64 encoded CSV with errors (if any) */
    error_csv_base64?: string | undefined;
}
export interface GetStudentSchoolYearInfoRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    school_year_id: ObjectId | undefined;
}
export interface GetStudentAllSchoolYearsInfoRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
}
export interface GetStudentAllSchoolYearsInfoResponse {
    school_years_info: StudentSchoolYearInformation[];
}
export interface GetLatestStudentSchoolYearInfoRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
}
export interface ResolveTeacherOrStudentRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    email: string;
    username: string;
}
export interface ResolveTeacherOrStudentResponse {
    user_type: UserType;
    teacher?: Teacher | undefined;
    student?: Student | undefined;
}
export interface AuthenticateStudentForOrgRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    username: string;
}
export interface AuthenticateStudentForOrgResponse {
    student: Student | undefined;
    family_id: ObjectId | undefined;
}
export interface NoReregStudentForActiveSchoolYearRequest {
    context: RequestContext | undefined;
}
/** Empty response - if successful, there are no students in reregistration status */
export interface NoReregStudentForActiveSchoolYearResponse {
}
export interface StartReregistrationForComingSchoolYearRequest {
    context: RequestContext | undefined;
}
/** Empty response - if successful, reregistration has been started */
export interface StartReregistrationForComingSchoolYearResponse {
}
export interface CreateDefaultResourceAccessSettingsForOrgRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
}
/** Empty response - if successful, default resource access settings have been created */
export interface CreateDefaultResourceAccessSettingsForOrgResponse {
}
export interface GetStudentsListWithFiltersRequest {
    context: RequestContext | undefined;
    per_page?: number | undefined;
    page?: number | undefined;
    name_search?: string | undefined;
    grade?: StudentGrade | undefined;
    gender?: string | undefined;
    status?: StudentStatus | undefined;
    /** defaults to org's active school year if not provided */
    school_year?: ObjectId | undefined;
}
export interface GetStudentsListWithFiltersResponse {
    students: SchoolYearStudent[];
    students_count: number;
}
/** Get students for a specific course or homeroom */
export interface GetCourseOrHomeroomStudentsRequest {
    context: RequestContext | undefined;
    per_page?: number | undefined;
    page?: number | undefined;
    name_search?: string | undefined;
    course_id?: ObjectId | undefined;
    homeroom_id?: ObjectId | undefined;
}
export interface GetCourseOrHomeroomStudentsResponse {
    students: Student[];
    students_count: number;
}
export interface GetStudentsByIdsWithSchoolYearRequest {
    context: RequestContext | undefined;
    student_ids: ObjectId[];
    school_year_id: ObjectId | undefined;
}
export interface GetStudentsByIdsWithSchoolYearResponse {
    students: SchoolYearStudent[];
}
export interface GetStudentsByIdsRequest {
    context: RequestContext | undefined;
    student_ids: ObjectId[];
}
export interface GetStudentsByIdsResponse {
    students: Student[];
}
export interface GetStudentsStatusCountsRequest {
    context: RequestContext | undefined;
    statuses: StudentStatus[];
    school_year?: ObjectId | undefined;
}
export interface GetStudentsStatusCountsResponse {
    status_counts: StudentStatusCount[];
}
export interface StudentStatusCount {
    status: StudentStatus;
    count: number;
}
export interface GetFilteredStudentsListRequest {
    context: RequestContext | undefined;
    per_page?: number | undefined;
    page?: number | undefined;
    grade?: StudentGrade | undefined;
    gender?: string | undefined;
    status: StudentStatus;
    name?: string | undefined;
    no_nonpaid_registration?: boolean | undefined;
    no_nonpaid_reregistration?: boolean | undefined;
    sort_enrolled_family_first?: boolean | undefined;
    school_year?: ObjectId | undefined;
    has_priority_first?: boolean | undefined;
    /** When true, restrict to students who have filled all groups visible for this status (visible_to_parents_for_statuses contains status) */
    completed_only?: boolean | undefined;
}
export interface GetFilteredStudentsListResponse {
    students: SchoolYearStudent[];
    students_count: number;
}
export interface GetStudentSchoolYearsRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
}
export interface GetStudentSchoolYearsResponse {
    school_years: StudentSchoolYear[];
}
export interface StudentSchoolYear {
    school_year: SchoolYear | undefined;
    grade: StudentGrade;
    status: StudentStatus;
}
export interface GetOnboardingCardInformationRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
}
export interface GetOnboardingCardInformationResponse {
    custom_field_entries: CustomFieldEntry[];
    group_approval_statuses: GroupApprovalStatus[];
    invoices: InvoiceResponse[];
    family: Family | undefined;
    parents: Parent[];
    parents_custom_field_entries: CustomFieldEntry[];
}
export interface GetStudentUploadHeaderRequest {
    context: RequestContext | undefined;
    student_status: StudentStatus;
}
export interface GetStudentUploadHeaderResponse {
    header: string[];
}
export interface GetAllStudentsForStagingRequest {
    context: RequestContext | undefined;
}
export interface GetAllStudentsForStagingResponse {
    students: Student[];
}
export declare const GetStudentRequest: MessageFns<GetStudentRequest>;
export declare const GetStudentWithSchoolYearInfoRequest: MessageFns<GetStudentWithSchoolYearInfoRequest>;
export declare const GetStudentWithSchoolYearInfoResponse: MessageFns<GetStudentWithSchoolYearInfoResponse>;
export declare const CreateStudentRequest: MessageFns<CreateStudentRequest>;
export declare const UpdateStudentProfileRequest: MessageFns<UpdateStudentProfileRequest>;
export declare const UpdateStudentGradeRequest: MessageFns<UpdateStudentGradeRequest>;
export declare const MoveAdmissionYearRequest: MessageFns<MoveAdmissionYearRequest>;
export declare const EnrollStudentWithMessageRequest: MessageFns<EnrollStudentWithMessageRequest>;
export declare const WithdrawStudentWithMessageRequest: MessageFns<WithdrawStudentWithMessageRequest>;
export declare const ChangeStudentPasswordRequest: MessageFns<ChangeStudentPasswordRequest>;
export declare const ChangeStudentPasswordResponse: MessageFns<ChangeStudentPasswordResponse>;
export declare const RejectStudentRequest: MessageFns<RejectStudentRequest>;
export declare const ApproveStudentRequest: MessageFns<ApproveStudentRequest>;
export declare const ToInterviewRequest: MessageFns<ToInterviewRequest>;
export declare const RequireFieldsChangesFromParentsRequest: MessageFns<RequireFieldsChangesFromParentsRequest>;
export declare const UploadStudentsRequest: MessageFns<UploadStudentsRequest>;
export declare const UploadStudentsResponse: MessageFns<UploadStudentsResponse>;
export declare const GetStudentSchoolYearInfoRequest: MessageFns<GetStudentSchoolYearInfoRequest>;
export declare const GetStudentAllSchoolYearsInfoRequest: MessageFns<GetStudentAllSchoolYearsInfoRequest>;
export declare const GetStudentAllSchoolYearsInfoResponse: MessageFns<GetStudentAllSchoolYearsInfoResponse>;
export declare const GetLatestStudentSchoolYearInfoRequest: MessageFns<GetLatestStudentSchoolYearInfoRequest>;
export declare const ResolveTeacherOrStudentRequest: MessageFns<ResolveTeacherOrStudentRequest>;
export declare const ResolveTeacherOrStudentResponse: MessageFns<ResolveTeacherOrStudentResponse>;
export declare const AuthenticateStudentForOrgRequest: MessageFns<AuthenticateStudentForOrgRequest>;
export declare const AuthenticateStudentForOrgResponse: MessageFns<AuthenticateStudentForOrgResponse>;
export declare const NoReregStudentForActiveSchoolYearRequest: MessageFns<NoReregStudentForActiveSchoolYearRequest>;
export declare const NoReregStudentForActiveSchoolYearResponse: MessageFns<NoReregStudentForActiveSchoolYearResponse>;
export declare const StartReregistrationForComingSchoolYearRequest: MessageFns<StartReregistrationForComingSchoolYearRequest>;
export declare const StartReregistrationForComingSchoolYearResponse: MessageFns<StartReregistrationForComingSchoolYearResponse>;
export declare const CreateDefaultResourceAccessSettingsForOrgRequest: MessageFns<CreateDefaultResourceAccessSettingsForOrgRequest>;
export declare const CreateDefaultResourceAccessSettingsForOrgResponse: MessageFns<CreateDefaultResourceAccessSettingsForOrgResponse>;
export declare const GetStudentsListWithFiltersRequest: MessageFns<GetStudentsListWithFiltersRequest>;
export declare const GetStudentsListWithFiltersResponse: MessageFns<GetStudentsListWithFiltersResponse>;
export declare const GetCourseOrHomeroomStudentsRequest: MessageFns<GetCourseOrHomeroomStudentsRequest>;
export declare const GetCourseOrHomeroomStudentsResponse: MessageFns<GetCourseOrHomeroomStudentsResponse>;
export declare const GetStudentsByIdsWithSchoolYearRequest: MessageFns<GetStudentsByIdsWithSchoolYearRequest>;
export declare const GetStudentsByIdsWithSchoolYearResponse: MessageFns<GetStudentsByIdsWithSchoolYearResponse>;
export declare const GetStudentsByIdsRequest: MessageFns<GetStudentsByIdsRequest>;
export declare const GetStudentsByIdsResponse: MessageFns<GetStudentsByIdsResponse>;
export declare const GetStudentsStatusCountsRequest: MessageFns<GetStudentsStatusCountsRequest>;
export declare const GetStudentsStatusCountsResponse: MessageFns<GetStudentsStatusCountsResponse>;
export declare const StudentStatusCount: MessageFns<StudentStatusCount>;
export declare const GetFilteredStudentsListRequest: MessageFns<GetFilteredStudentsListRequest>;
export declare const GetFilteredStudentsListResponse: MessageFns<GetFilteredStudentsListResponse>;
export declare const GetStudentSchoolYearsRequest: MessageFns<GetStudentSchoolYearsRequest>;
export declare const GetStudentSchoolYearsResponse: MessageFns<GetStudentSchoolYearsResponse>;
export declare const StudentSchoolYear: MessageFns<StudentSchoolYear>;
export declare const GetOnboardingCardInformationRequest: MessageFns<GetOnboardingCardInformationRequest>;
export declare const GetOnboardingCardInformationResponse: MessageFns<GetOnboardingCardInformationResponse>;
export declare const GetStudentUploadHeaderRequest: MessageFns<GetStudentUploadHeaderRequest>;
export declare const GetStudentUploadHeaderResponse: MessageFns<GetStudentUploadHeaderResponse>;
export declare const GetAllStudentsForStagingRequest: MessageFns<GetAllStudentsForStagingRequest>;
export declare const GetAllStudentsForStagingResponse: MessageFns<GetAllStudentsForStagingResponse>;
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
