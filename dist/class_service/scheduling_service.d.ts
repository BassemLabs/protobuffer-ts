import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { StudentGrade } from "../user_service/student";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { SchedulingPeriodDefinition, SchedulingPreparationStep, SchedulingSemesterOptionGroup, SchedulingTeacherAvailabilityWindow } from "./scheduling";
export declare const protobufPackage = "class_service.scheduling_service";
export interface GetSchedulingPreparationRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
}
export interface CreateSchedulingWorkspaceRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
}
export interface CompleteSchedulingPreparationStepRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
    step?: SchedulingPreparationStep | undefined;
}
export interface GetSchedulingOfferedGradeSetupRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
}
export interface UpsertSchedulingOfferedGradeRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
    campus_id: ObjectId | undefined;
    grade?: StudentGrade | undefined;
    semester_ids: ObjectId[];
}
export interface DeleteSchedulingOfferedGradeRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
    campus_id: ObjectId | undefined;
    grade?: StudentGrade | undefined;
}
export interface GetSchedulingPeriodTimeSetupRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
}
export interface CreateSchedulingPeriodTimeSetupTemplateRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
    name?: string | undefined;
    periods: SchedulingPeriodDefinition[];
}
export interface UpdateSchedulingPeriodTimeSetupTemplateRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
    template_id: ObjectId | undefined;
    name?: string | undefined;
    periods: SchedulingPeriodDefinition[];
}
export interface AssignSemesterSchedulingPeriodTimeSetupTemplateRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
    semester_id: ObjectId | undefined;
    template_id: ObjectId | undefined;
}
export interface GetSchedulingTeacherSetupRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
}
export interface UpsertSchedulingTeacherProfileRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
    teacher_id: ObjectId | undefined;
    abstract_course_ids: ObjectId[];
    /** When false, semester_ids is ignored and the teacher can teach in any semester. */
    has_semester_restrictions?: boolean | undefined;
    semester_ids: ObjectId[];
    /** When false, availability_windows is ignored and the teacher is available full-time. */
    has_time_availability_restrictions?: boolean | undefined;
    availability_windows: SchedulingTeacherAvailabilityWindow[];
}
export interface GetSchedulingClassesSetupRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
}
export interface UpsertSchedulingHighSchoolCourseSetupRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
    abstract_course_id: ObjectId | undefined;
    is_offered?: boolean | undefined;
    semester_option_groups: SchedulingSemesterOptionGroup[];
}
export declare const GetSchedulingPreparationRequest: MessageFns<GetSchedulingPreparationRequest>;
export declare const CreateSchedulingWorkspaceRequest: MessageFns<CreateSchedulingWorkspaceRequest>;
export declare const CompleteSchedulingPreparationStepRequest: MessageFns<CompleteSchedulingPreparationStepRequest>;
export declare const GetSchedulingOfferedGradeSetupRequest: MessageFns<GetSchedulingOfferedGradeSetupRequest>;
export declare const UpsertSchedulingOfferedGradeRequest: MessageFns<UpsertSchedulingOfferedGradeRequest>;
export declare const DeleteSchedulingOfferedGradeRequest: MessageFns<DeleteSchedulingOfferedGradeRequest>;
export declare const GetSchedulingPeriodTimeSetupRequest: MessageFns<GetSchedulingPeriodTimeSetupRequest>;
export declare const CreateSchedulingPeriodTimeSetupTemplateRequest: MessageFns<CreateSchedulingPeriodTimeSetupTemplateRequest>;
export declare const UpdateSchedulingPeriodTimeSetupTemplateRequest: MessageFns<UpdateSchedulingPeriodTimeSetupTemplateRequest>;
export declare const AssignSemesterSchedulingPeriodTimeSetupTemplateRequest: MessageFns<AssignSemesterSchedulingPeriodTimeSetupTemplateRequest>;
export declare const GetSchedulingTeacherSetupRequest: MessageFns<GetSchedulingTeacherSetupRequest>;
export declare const UpsertSchedulingTeacherProfileRequest: MessageFns<UpsertSchedulingTeacherProfileRequest>;
export declare const GetSchedulingClassesSetupRequest: MessageFns<GetSchedulingClassesSetupRequest>;
export declare const UpsertSchedulingHighSchoolCourseSetupRequest: MessageFns<UpsertSchedulingHighSchoolCourseSetupRequest>;
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
