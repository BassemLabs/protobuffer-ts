import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { DayOfWeek } from "../google/type/dayofweek";
import { Campus } from "../organization_service/campus";
import { StudentGrade } from "../user_service/student";
import { TeacherBasic } from "../user_service/teacher";
import { ObjectId } from "../utils/object_id";
import { AbstractCourse } from "./abstract_course";
import { Semester } from "./semester";
export declare const protobufPackage = "class_service";
export declare enum SchedulingPreparationStep {
    SCHEDULING_PREPARATION_STEP_SEMESTERS = "SCHEDULING_PREPARATION_STEP_SEMESTERS",
    SCHEDULING_PREPARATION_STEP_PERIOD_TIMES = "SCHEDULING_PREPARATION_STEP_PERIOD_TIMES",
    SCHEDULING_PREPARATION_STEP_CLASSES = "SCHEDULING_PREPARATION_STEP_CLASSES",
    SCHEDULING_PREPARATION_STEP_TEACHERS = "SCHEDULING_PREPARATION_STEP_TEACHERS",
    SCHEDULING_PREPARATION_STEP_CLASS_ASSIGNMENTS = "SCHEDULING_PREPARATION_STEP_CLASS_ASSIGNMENTS",
    SCHEDULING_PREPARATION_STEP_REVIEW = "SCHEDULING_PREPARATION_STEP_REVIEW",
    SCHEDULING_PREPARATION_STEP_GENERATION = "SCHEDULING_PREPARATION_STEP_GENERATION",
    SCHEDULING_PREPARATION_STEP_PREVIEW_EXPORT = "SCHEDULING_PREPARATION_STEP_PREVIEW_EXPORT",
    SCHEDULING_PREPARATION_STEP_ADJUSTMENTS = "SCHEDULING_PREPARATION_STEP_ADJUSTMENTS",
    SCHEDULING_PREPARATION_STEP_OFFERED_GRADES = "SCHEDULING_PREPARATION_STEP_OFFERED_GRADES",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingPreparationStepFromJSON(object: any): SchedulingPreparationStep;
export declare function schedulingPreparationStepToJSON(object: SchedulingPreparationStep): string;
export declare function schedulingPreparationStepToNumber(object: SchedulingPreparationStep): number;
export declare enum SchedulingPreparationStepStatus {
    SCHEDULING_PREPARATION_STEP_STATUS_BLOCKED = "SCHEDULING_PREPARATION_STEP_STATUS_BLOCKED",
    SCHEDULING_PREPARATION_STEP_STATUS_READY = "SCHEDULING_PREPARATION_STEP_STATUS_READY",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingPreparationStepStatusFromJSON(object: any): SchedulingPreparationStepStatus;
export declare function schedulingPreparationStepStatusToJSON(object: SchedulingPreparationStepStatus): string;
export declare function schedulingPreparationStepStatusToNumber(object: SchedulingPreparationStepStatus): number;
export interface SchedulingWorkspace {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    school_year: ObjectId | undefined;
    completed_steps: SchedulingPreparationStep[];
}
export interface SchedulingPreparationIssue {
    message?: string | undefined;
}
export interface SchedulingPreparationStepState {
    step?: SchedulingPreparationStep | undefined;
    status?: SchedulingPreparationStepStatus | undefined;
    issues: SchedulingPreparationIssue[];
    completed?: boolean | undefined;
}
export interface SchedulingPreparation {
    workspace?: SchedulingWorkspace | undefined;
    semesters: Semester[];
    step_states: SchedulingPreparationStepState[];
}
export interface SchedulingPeriodDefinition {
    sequence?: number | undefined;
    label?: string | undefined;
    start_time?: string | undefined;
    end_time?: string | undefined;
}
export interface SchedulingOfferedGrade {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    scheduling_workspace: ObjectId | undefined;
    campus_id: ObjectId | undefined;
    grade?: StudentGrade | undefined;
    semester_ids: ObjectId[];
}
export interface SchedulingOfferedGradeSetup {
    campuses: Campus[];
    semesters: Semester[];
    offered_grades: SchedulingOfferedGrade[];
}
export interface SchedulingPeriodTimeSetupTemplate {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    scheduling_workspace: ObjectId | undefined;
    name?: string | undefined;
    periods: SchedulingPeriodDefinition[];
}
export interface SchedulingSemesterPeriodTimeSetup {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    scheduling_workspace: ObjectId | undefined;
    semester: ObjectId | undefined;
    period_time_setup_template: ObjectId | undefined;
}
export interface SchedulingWeekdayPreviewDay {
    day?: DayOfWeek | undefined;
    is_weekday?: boolean | undefined;
}
export interface SchedulingPeriodTimeSetup {
    templates: SchedulingPeriodTimeSetupTemplate[];
    semester_setups: SchedulingSemesterPeriodTimeSetup[];
    semesters: Semester[];
    weekday_preview: SchedulingWeekdayPreviewDay[];
}
export interface SchedulingTeacherProfile {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    scheduling_workspace: ObjectId | undefined;
    teacher_id: ObjectId | undefined;
    abstract_course_ids: ObjectId[];
    /** When false, semester_ids is ignored and the teacher can teach in any semester. */
    has_semester_restrictions?: boolean | undefined;
    semester_ids: ObjectId[];
    /** When false, availability_windows is ignored and the teacher is available full-time. */
    has_time_availability_restrictions?: boolean | undefined;
    availability_windows: SchedulingTeacherAvailabilityWindow[];
}
export interface SchedulingTeacherAvailabilityWindow {
    day?: DayOfWeek | undefined;
    start_time?: string | undefined;
    end_time?: string | undefined;
}
export interface SchedulingTeacherSetup {
    teachers: TeacherBasic[];
    semesters: Semester[];
    abstract_courses: AbstractCourse[];
    profiles: SchedulingTeacherProfile[];
    offered_grades: StudentGrade[];
}
export interface SchedulingHighSchoolCourseSetup {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    scheduling_workspace: ObjectId | undefined;
    abstract_course_id: ObjectId | undefined;
    is_offered?: boolean | undefined;
    semester_option_groups: SchedulingSemesterOptionGroup[];
}
export interface SchedulingSemesterOptionGroup {
    semester_ids: ObjectId[];
}
export interface SchedulingClassesSetup {
    subjects: AbstractCourse[];
    high_school_courses: AbstractCourse[];
    semesters: Semester[];
    high_school_course_setups: SchedulingHighSchoolCourseSetup[];
    offered_grades: StudentGrade[];
}
export declare const SchedulingWorkspace: MessageFns<SchedulingWorkspace>;
export declare const SchedulingPreparationIssue: MessageFns<SchedulingPreparationIssue>;
export declare const SchedulingPreparationStepState: MessageFns<SchedulingPreparationStepState>;
export declare const SchedulingPreparation: MessageFns<SchedulingPreparation>;
export declare const SchedulingPeriodDefinition: MessageFns<SchedulingPeriodDefinition>;
export declare const SchedulingOfferedGrade: MessageFns<SchedulingOfferedGrade>;
export declare const SchedulingOfferedGradeSetup: MessageFns<SchedulingOfferedGradeSetup>;
export declare const SchedulingPeriodTimeSetupTemplate: MessageFns<SchedulingPeriodTimeSetupTemplate>;
export declare const SchedulingSemesterPeriodTimeSetup: MessageFns<SchedulingSemesterPeriodTimeSetup>;
export declare const SchedulingWeekdayPreviewDay: MessageFns<SchedulingWeekdayPreviewDay>;
export declare const SchedulingPeriodTimeSetup: MessageFns<SchedulingPeriodTimeSetup>;
export declare const SchedulingTeacherProfile: MessageFns<SchedulingTeacherProfile>;
export declare const SchedulingTeacherAvailabilityWindow: MessageFns<SchedulingTeacherAvailabilityWindow>;
export declare const SchedulingTeacherSetup: MessageFns<SchedulingTeacherSetup>;
export declare const SchedulingHighSchoolCourseSetup: MessageFns<SchedulingHighSchoolCourseSetup>;
export declare const SchedulingSemesterOptionGroup: MessageFns<SchedulingSemesterOptionGroup>;
export declare const SchedulingClassesSetup: MessageFns<SchedulingClassesSetup>;
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
