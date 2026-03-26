import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { ActionRequiredByParents } from "./action_required_by_parents";
import { StudentGrade, StudentStatus } from "./student";
export declare const protobufPackage = "user_service";
export interface GetAdmittedStudentsActionsOverviewRequest {
    context: RequestContext | undefined;
    family_id: ObjectId | undefined;
    school_year_id: ObjectId | undefined;
}
export interface GetAdmittedStudentsActionsOverviewResponse {
    students: StudentActionSummary[];
    family?: FamilyActionSummary | undefined;
}
export interface StudentActionSummary {
    student_id: ObjectId | undefined;
    student_name?: string | undefined;
    description?: string | undefined;
    is_reregistration?: boolean | undefined;
    actions_count?: number | undefined;
}
export interface FamilyActionSummary {
    family_id: ObjectId | undefined;
    description?: string | undefined;
}
export interface GetStudentFirstOnboardingRequiredActionRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    school_year_id: ObjectId | undefined;
}
export interface GetStudentFirstOnboardingRequiredActionResponse {
    /** the first action required by the parent for the admitted student */
    action?: ActionRequiredByParents | undefined;
}
export interface GetFamilyAdmittedActionRequest {
    context: RequestContext | undefined;
    family_id: ObjectId | undefined;
    school_year_id: ObjectId | undefined;
}
export interface GetFamilyAdmittedActionResponse {
    /** in the context of admitted students, it can be only "generate/ regenerate" tuition invoice */
    action?: ActionRequiredByParents | undefined;
}
export interface GetFamilyRelevantSchoolYearsRequest {
    context: RequestContext | undefined;
    family_id: ObjectId | undefined;
}
export interface GetFamilyRelevantSchoolYearsResponse {
    school_year_ids: ObjectId[];
}
export interface WithdrawReregistrationStudentRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    school_year_id: ObjectId | undefined;
}
export interface GetAdminActionableOnboardingStudentsRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
}
export interface AdminActionableOnboardingStudent {
    student_id: ObjectId | undefined;
    student_name?: string | undefined;
    status?: StudentStatus | undefined;
    grade?: StudentGrade | undefined;
    family_id?: ObjectId | undefined;
}
export interface GetAdminActionableOnboardingStudentsResponse {
    students: AdminActionableOnboardingStudent[];
}
export declare const GetAdmittedStudentsActionsOverviewRequest: MessageFns<GetAdmittedStudentsActionsOverviewRequest>;
export declare const GetAdmittedStudentsActionsOverviewResponse: MessageFns<GetAdmittedStudentsActionsOverviewResponse>;
export declare const StudentActionSummary: MessageFns<StudentActionSummary>;
export declare const FamilyActionSummary: MessageFns<FamilyActionSummary>;
export declare const GetStudentFirstOnboardingRequiredActionRequest: MessageFns<GetStudentFirstOnboardingRequiredActionRequest>;
export declare const GetStudentFirstOnboardingRequiredActionResponse: MessageFns<GetStudentFirstOnboardingRequiredActionResponse>;
export declare const GetFamilyAdmittedActionRequest: MessageFns<GetFamilyAdmittedActionRequest>;
export declare const GetFamilyAdmittedActionResponse: MessageFns<GetFamilyAdmittedActionResponse>;
export declare const GetFamilyRelevantSchoolYearsRequest: MessageFns<GetFamilyRelevantSchoolYearsRequest>;
export declare const GetFamilyRelevantSchoolYearsResponse: MessageFns<GetFamilyRelevantSchoolYearsResponse>;
export declare const WithdrawReregistrationStudentRequest: MessageFns<WithdrawReregistrationStudentRequest>;
export declare const GetAdminActionableOnboardingStudentsRequest: MessageFns<GetAdminActionableOnboardingStudentsRequest>;
export declare const AdminActionableOnboardingStudent: MessageFns<AdminActionableOnboardingStudent>;
export declare const GetAdminActionableOnboardingStudentsResponse: MessageFns<GetAdminActionableOnboardingStudentsResponse>;
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
