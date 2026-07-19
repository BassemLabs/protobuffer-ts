import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { DayOfWeek } from "../google/type/dayofweek";
import { Campus } from "../organization_service/campus";
import { StudentGrade } from "../user_service/student";
import { TeacherBasic } from "../user_service/teacher";
import { ObjectId } from "../utils/object_id";
import { Uuid } from "../utils/uuid";
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
    SCHEDULING_PREPARATION_STEP_CLASS_GROUPS = "SCHEDULING_PREPARATION_STEP_CLASS_GROUPS",
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
/** How a subject/course may use back-to-back (double) periods during generation. */
export declare enum SchedulingDoublePeriodMode {
    /** SCHEDULING_DOUBLE_PERIOD_MODE_NONE - Never schedule two consecutive periods of this class on the same day. */
    SCHEDULING_DOUBLE_PERIOD_MODE_NONE = "SCHEDULING_DOUBLE_PERIOD_MODE_NONE",
    /** SCHEDULING_DOUBLE_PERIOD_MODE_ALLOW - Consecutive periods are permitted but not required. */
    SCHEDULING_DOUBLE_PERIOD_MODE_ALLOW = "SCHEDULING_DOUBLE_PERIOD_MODE_ALLOW",
    /** SCHEDULING_DOUBLE_PERIOD_MODE_REQUIRE - Weekly periods must be scheduled as consecutive pairs (requires an even count). */
    SCHEDULING_DOUBLE_PERIOD_MODE_REQUIRE = "SCHEDULING_DOUBLE_PERIOD_MODE_REQUIRE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingDoublePeriodModeFromJSON(object: any): SchedulingDoublePeriodMode;
export declare function schedulingDoublePeriodModeToJSON(object: SchedulingDoublePeriodMode): string;
export declare function schedulingDoublePeriodModeToNumber(object: SchedulingDoublePeriodMode): number;
/**
 * Lifecycle of one generation run. Terminal states are SUCCEEDED and FAILED;
 * CANCELLED is reserved for future use (nothing sets it yet).
 */
export declare enum SchedulingGenerationRunStatus {
    /** SCHEDULING_GENERATION_RUN_STATUS_PENDING - Created, not yet picked up by the background executor. */
    SCHEDULING_GENERATION_RUN_STATUS_PENDING = "SCHEDULING_GENERATION_RUN_STATUS_PENDING",
    /** SCHEDULING_GENERATION_RUN_STATUS_RUNNING - Preflight/solve in progress. */
    SCHEDULING_GENERATION_RUN_STATUS_RUNNING = "SCHEDULING_GENERATION_RUN_STATUS_RUNNING",
    /** SCHEDULING_GENERATION_RUN_STATUS_SUCCEEDED - Solver produced a schedule (see generated_schedule_id). */
    SCHEDULING_GENERATION_RUN_STATUS_SUCCEEDED = "SCHEDULING_GENERATION_RUN_STATUS_SUCCEEDED",
    /** SCHEDULING_GENERATION_RUN_STATUS_FAILED - Preflight blocked, solver infeasible/timed out, or an internal error (see error_message/blockers). */
    SCHEDULING_GENERATION_RUN_STATUS_FAILED = "SCHEDULING_GENERATION_RUN_STATUS_FAILED",
    /** SCHEDULING_GENERATION_RUN_STATUS_CANCELLED - Reserved for future cancellation support. */
    SCHEDULING_GENERATION_RUN_STATUS_CANCELLED = "SCHEDULING_GENERATION_RUN_STATUS_CANCELLED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingGenerationRunStatusFromJSON(object: any): SchedulingGenerationRunStatus;
export declare function schedulingGenerationRunStatusToJSON(object: SchedulingGenerationRunStatus): string;
export declare function schedulingGenerationRunStatusToNumber(object: SchedulingGenerationRunStatus): number;
/**
 * The setup step a review section maps back to, so an issue can deep-link the user to
 * the exact page to fix.
 */
export declare enum SchedulingReviewSectionType {
    SCHEDULING_REVIEW_SECTION_TYPE_SEMESTERS_GRADES = "SCHEDULING_REVIEW_SECTION_TYPE_SEMESTERS_GRADES",
    SCHEDULING_REVIEW_SECTION_TYPE_PERIOD_TIMES = "SCHEDULING_REVIEW_SECTION_TYPE_PERIOD_TIMES",
    SCHEDULING_REVIEW_SECTION_TYPE_CLASSES = "SCHEDULING_REVIEW_SECTION_TYPE_CLASSES",
    SCHEDULING_REVIEW_SECTION_TYPE_TEACHERS = "SCHEDULING_REVIEW_SECTION_TYPE_TEACHERS",
    SCHEDULING_REVIEW_SECTION_TYPE_CLASS_ASSIGNMENTS = "SCHEDULING_REVIEW_SECTION_TYPE_CLASS_ASSIGNMENTS",
    SCHEDULING_REVIEW_SECTION_TYPE_CLASS_GROUPS = "SCHEDULING_REVIEW_SECTION_TYPE_CLASS_GROUPS",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingReviewSectionTypeFromJSON(object: any): SchedulingReviewSectionType;
export declare function schedulingReviewSectionTypeToJSON(object: SchedulingReviewSectionType): string;
export declare function schedulingReviewSectionTypeToNumber(object: SchedulingReviewSectionType): number;
export interface SchedulingWorkspace {
    id: Uuid | undefined;
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
    id: Uuid | undefined;
    organization: ObjectId | undefined;
    scheduling_workspace: Uuid | undefined;
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
    id: Uuid | undefined;
    organization: ObjectId | undefined;
    scheduling_workspace: Uuid | undefined;
    name?: string | undefined;
    periods: SchedulingPeriodDefinition[];
}
export interface SchedulingSemesterPeriodTimeSetup {
    id: Uuid | undefined;
    organization: ObjectId | undefined;
    scheduling_workspace: Uuid | undefined;
    semester: ObjectId | undefined;
    period_time_setup_template: Uuid | undefined;
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
    id: Uuid | undefined;
    organization: ObjectId | undefined;
    scheduling_workspace: Uuid | undefined;
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
    id: Uuid | undefined;
    organization: ObjectId | undefined;
    scheduling_workspace: Uuid | undefined;
    abstract_course_id: ObjectId | undefined;
    is_offered?: boolean | undefined;
    semester_option_groups: SchedulingSemesterOptionGroup[];
}
/**
 * One selectable semester option for a high-school course offering. Generation
 * schedules the offering in exactly one semester chosen from `semester_ids`.
 */
export interface SchedulingSemesterOptionGroup {
    /** Candidate semesters for this offering; generation picks one. */
    semester_ids: ObjectId[];
    id: ObjectId | undefined;
    /** When set, generation must use this teacher for the offering. */
    teacher_id?: ObjectId | undefined;
}
/**
 * A per-day restriction on which period sequences a class may occupy. Rules expand
 * into a class's allowed slots when its instructional requirement is applied.
 */
export interface SchedulingCoursePeriodRule {
    /** Absent day makes this the every-day rule; days with their own rule override it. */
    day?: DayOfWeek | undefined;
    /** Allowed period sequences. Empty with a day set means no meetings on that day. */
    allowed_periods: number[];
}
/**
 * How much instruction a subject (at a grade) or high-school course needs per week,
 * plus its double-period and allowed-period rules. This is the curriculum demand the
 * solver must satisfy.
 */
export interface SchedulingInstructionalRequirement {
    id: Uuid | undefined;
    organization: ObjectId | undefined;
    scheduling_workspace: Uuid | undefined;
    abstract_course_id: ObjectId | undefined;
    /** Set for a subject-at-grade requirement; absent for a high-school course requirement. */
    grade?: StudentGrade | undefined;
    periods_per_week?: number | undefined;
    double_period_mode?: SchedulingDoublePeriodMode | undefined;
    /** Optional per-day allowed-period restrictions; empty means no slot restriction. */
    period_rules: SchedulingCoursePeriodRule[];
}
/**
 * Full state of the Classes setup step: the curriculum catalog plus its configured
 * offerings and instructional requirements.
 */
export interface SchedulingClassesSetup {
    subjects: AbstractCourse[];
    high_school_courses: AbstractCourse[];
    semesters: Semester[];
    high_school_course_setups: SchedulingHighSchoolCourseSetup[];
    offered_grades: StudentGrade[];
    instructional_requirements: SchedulingInstructionalRequirement[];
}
/** A student selectable for a high-school course roster (display fields included). */
export interface SchedulingStudentAssignmentOption {
    student_id: ObjectId | undefined;
    first_name?: string | undefined;
    last_name?: string | undefined;
    grade?: StudentGrade | undefined;
}
/**
 * Read-only summary of the elementary/middle subjects a grade takes, with its student
 * count. These rosters are implied by the grade (no manual student selection).
 */
export interface SchedulingSubjectAssignmentPreview {
    grade?: StudentGrade | undefined;
    subjects: AbstractCourse[];
    student_count?: number | undefined;
    students: SchedulingStudentAssignmentOption[];
}
/** The stored student roster for one high-school course offering. */
export interface SchedulingHighSchoolCourseStudentAssignment {
    id: Uuid | undefined;
    organization: ObjectId | undefined;
    scheduling_workspace: Uuid | undefined;
    abstract_course_id: ObjectId | undefined;
    student_ids: ObjectId[];
    offering_id: ObjectId | undefined;
}
/**
 * Full state of the Class Assignment step: read-only subject previews (elementary/
 * middle) plus the editable high-school course rosters and their catalog.
 */
export interface SchedulingClassAssignmentSetup {
    subject_previews: SchedulingSubjectAssignmentPreview[];
    high_school_courses: AbstractCourse[];
    high_school_course_setups: SchedulingHighSchoolCourseSetup[];
    high_school_course_assignments: SchedulingHighSchoolCourseStudentAssignment[];
    high_school_students: SchedulingStudentAssignmentOption[];
    semesters: Semester[];
}
/**
 * An elementary/middle grade-semester section. The group is the solver's student proxy:
 * its classes cannot collide in the same slot.
 */
export interface SchedulingClassGroup {
    id: Uuid | undefined;
    organization: ObjectId | undefined;
    scheduling_workspace: Uuid | undefined;
    campus_id: ObjectId | undefined;
    grade?: StudentGrade | undefined;
    semester_id: ObjectId | undefined;
    /** Human-readable group name, e.g. "Grade 3 - Fall". */
    label?: string | undefined;
    /** True when the group's campus/grade is no longer offered; the user removes stale groups. */
    stale?: boolean | undefined;
}
/**
 * The teacher assigned to teach one subject within one class group. Generation must
 * honor this assignment (it fixes the class's teacher).
 */
export interface SchedulingClassGroupTeacherAssignment {
    id: Uuid | undefined;
    organization: ObjectId | undefined;
    scheduling_workspace: Uuid | undefined;
    class_group_id: Uuid | undefined;
    abstract_course_id: ObjectId | undefined;
    teacher_id: ObjectId | undefined;
}
/**
 * Full state of the Class Groups step: the groups, the subjects each needs, and their
 * teacher assignments, plus the catalog needed to render the assignment UI.
 */
export interface SchedulingClassGroupSetup {
    groups: SchedulingClassGroup[];
    subjects: AbstractCourse[];
    assignments: SchedulingClassGroupTeacherAssignment[];
    teachers: TeacherBasic[];
    teacher_profiles: SchedulingTeacherProfile[];
    semesters: Semester[];
    high_school_courses: AbstractCourse[];
    high_school_course_setups: SchedulingHighSchoolCourseSetup[];
    high_school_course_assignments: SchedulingHighSchoolCourseStudentAssignment[];
}
/** A preflight problem that prevents generation from starting. */
export interface SchedulingGenerationBlocker {
    /** Admin-readable explanation of the problem and how to resolve it. */
    message?: string | undefined;
    /** Stable machine-readable identifier for frontend behavior and localization. */
    code?: string | undefined;
}
/**
 * One schedule-generation attempt. A run is bound to the immutable solver-input
 * snapshot it used, so a failed run can always be inspected against its exact input.
 */
export interface SchedulingGenerationRun {
    id: Uuid | undefined;
    organization: ObjectId | undefined;
    scheduling_workspace: Uuid | undefined;
    school_year: ObjectId | undefined;
    /** The frozen input this run solved against. */
    solver_input_snapshot_id: Uuid | undefined;
    /** Snapshot schema version, copied onto the run for compatibility auditing. */
    schema_version?: number | undefined;
    status?: SchedulingGenerationRunStatus | undefined;
    /** RFC3339; set once the run starts executing. */
    started_at?: string | undefined;
    /** RFC3339; set on any terminal state. */
    finished_at?: string | undefined;
    /** Admin-readable failure summary; present on FAILED runs. */
    error_message?: string | undefined;
    /** Preflight blockers; present when preflight failed the run. */
    blockers: SchedulingGenerationBlocker[];
    /** Set on SUCCEEDED runs, referencing the stored generated schedule. */
    generated_schedule_id?: ObjectId | undefined;
    created_by: ObjectId | undefined;
    /** RFC3339 creation time; also the sort key for the runs list. */
    created_at?: string | undefined;
}
/** Runs for a workspace, newest first (used for status polling and history). */
export interface SchedulingGenerationRunList {
    runs: SchedulingGenerationRun[];
}
/** A headline count shown on a review section (e.g. "Teachers", 12). */
export interface SchedulingReviewMetric {
    label?: string | undefined;
    value?: number | undefined;
}
/** A single readiness problem, with the step the user should open to resolve it. */
export interface SchedulingReviewIssue {
    action_step?: SchedulingPreparationStep | undefined;
    message?: string | undefined;
    /** Stable machine-readable identifier for frontend behavior and localization. */
    code?: string | undefined;
}
/** One setup area's review: its summary metrics and any outstanding issues. */
export interface SchedulingReviewSection {
    section?: SchedulingReviewSectionType | undefined;
    metrics: SchedulingReviewMetric[];
    issues: SchedulingReviewIssue[];
}
/**
 * Whole-workspace readiness. `ready` is true only when no section or cross-step issue
 * remains; generation should be gated on it.
 */
export interface SchedulingReview {
    sections: SchedulingReviewSection[];
    /** Issues spanning multiple steps (not attributable to a single section). */
    cross_step_issues: SchedulingReviewIssue[];
    ready?: boolean | undefined;
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
export declare const SchedulingCoursePeriodRule: MessageFns<SchedulingCoursePeriodRule>;
export declare const SchedulingInstructionalRequirement: MessageFns<SchedulingInstructionalRequirement>;
export declare const SchedulingClassesSetup: MessageFns<SchedulingClassesSetup>;
export declare const SchedulingStudentAssignmentOption: MessageFns<SchedulingStudentAssignmentOption>;
export declare const SchedulingSubjectAssignmentPreview: MessageFns<SchedulingSubjectAssignmentPreview>;
export declare const SchedulingHighSchoolCourseStudentAssignment: MessageFns<SchedulingHighSchoolCourseStudentAssignment>;
export declare const SchedulingClassAssignmentSetup: MessageFns<SchedulingClassAssignmentSetup>;
export declare const SchedulingClassGroup: MessageFns<SchedulingClassGroup>;
export declare const SchedulingClassGroupTeacherAssignment: MessageFns<SchedulingClassGroupTeacherAssignment>;
export declare const SchedulingClassGroupSetup: MessageFns<SchedulingClassGroupSetup>;
export declare const SchedulingGenerationBlocker: MessageFns<SchedulingGenerationBlocker>;
export declare const SchedulingGenerationRun: MessageFns<SchedulingGenerationRun>;
export declare const SchedulingGenerationRunList: MessageFns<SchedulingGenerationRunList>;
export declare const SchedulingReviewMetric: MessageFns<SchedulingReviewMetric>;
export declare const SchedulingReviewIssue: MessageFns<SchedulingReviewIssue>;
export declare const SchedulingReviewSection: MessageFns<SchedulingReviewSection>;
export declare const SchedulingReview: MessageFns<SchedulingReview>;
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
