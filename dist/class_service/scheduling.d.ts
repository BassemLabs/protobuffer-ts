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
export declare enum SchedulingGradeWeeklyAllocationStatus {
    SCHEDULING_GRADE_WEEKLY_ALLOCATION_STATUS_AWAITING_PERIOD_SETUP = "SCHEDULING_GRADE_WEEKLY_ALLOCATION_STATUS_AWAITING_PERIOD_SETUP",
    SCHEDULING_GRADE_WEEKLY_ALLOCATION_STATUS_AWAITING_REQUIREMENTS = "SCHEDULING_GRADE_WEEKLY_ALLOCATION_STATUS_AWAITING_REQUIREMENTS",
    SCHEDULING_GRADE_WEEKLY_ALLOCATION_STATUS_CAMPUS_CAPACITY_CONFLICT = "SCHEDULING_GRADE_WEEKLY_ALLOCATION_STATUS_CAMPUS_CAPACITY_CONFLICT",
    SCHEDULING_GRADE_WEEKLY_ALLOCATION_STATUS_UNDER_ALLOCATED = "SCHEDULING_GRADE_WEEKLY_ALLOCATION_STATUS_UNDER_ALLOCATED",
    SCHEDULING_GRADE_WEEKLY_ALLOCATION_STATUS_BALANCED = "SCHEDULING_GRADE_WEEKLY_ALLOCATION_STATUS_BALANCED",
    SCHEDULING_GRADE_WEEKLY_ALLOCATION_STATUS_OVER_ALLOCATED = "SCHEDULING_GRADE_WEEKLY_ALLOCATION_STATUS_OVER_ALLOCATED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingGradeWeeklyAllocationStatusFromJSON(object: any): SchedulingGradeWeeklyAllocationStatus;
export declare function schedulingGradeWeeklyAllocationStatusToJSON(object: SchedulingGradeWeeklyAllocationStatus): string;
export declare function schedulingGradeWeeklyAllocationStatusToNumber(object: SchedulingGradeWeeklyAllocationStatus): number;
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
export declare enum SchedulingGenerationPurpose {
    SCHEDULING_GENERATION_PURPOSE_CANDIDATE = "SCHEDULING_GENERATION_PURPOSE_CANDIDATE",
    SCHEDULING_GENERATION_PURPOSE_WORKING_REVISION_PROPOSAL = "SCHEDULING_GENERATION_PURPOSE_WORKING_REVISION_PROPOSAL",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingGenerationPurposeFromJSON(object: any): SchedulingGenerationPurpose;
export declare function schedulingGenerationPurposeToJSON(object: SchedulingGenerationPurpose): string;
export declare function schedulingGenerationPurposeToNumber(object: SchedulingGenerationPurpose): number;
export declare enum SchedulingScheduleSetupCompatibility {
    /** SCHEDULING_SCHEDULE_SETUP_COMPATIBILITY_CURRENT - The schedule's validation snapshot matches the currently reviewed setup. */
    SCHEDULING_SCHEDULE_SETUP_COMPATIBILITY_CURRENT = "SCHEDULING_SCHEDULE_SETUP_COMPATIBILITY_CURRENT",
    /** SCHEDULING_SCHEDULE_SETUP_COMPATIBILITY_SETUP_CHANGED - Preparation data changed after this schedule was validated. */
    SCHEDULING_SCHEDULE_SETUP_COMPATIBILITY_SETUP_CHANGED = "SCHEDULING_SCHEDULE_SETUP_COMPATIBILITY_SETUP_CHANGED",
    /** SCHEDULING_SCHEDULE_SETUP_COMPATIBILITY_REVIEW_REQUIRED - Review is not currently ready, so compatibility cannot be established. */
    SCHEDULING_SCHEDULE_SETUP_COMPATIBILITY_REVIEW_REQUIRED = "SCHEDULING_SCHEDULE_SETUP_COMPATIBILITY_REVIEW_REQUIRED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingScheduleSetupCompatibilityFromJSON(object: any): SchedulingScheduleSetupCompatibility;
export declare function schedulingScheduleSetupCompatibilityToJSON(object: SchedulingScheduleSetupCompatibility): string;
export declare function schedulingScheduleSetupCompatibilityToNumber(object: SchedulingScheduleSetupCompatibility): number;
export declare enum SchedulingScheduleRevisionKind {
    SCHEDULING_SCHEDULE_REVISION_KIND_BASE_SELECTED = "SCHEDULING_SCHEDULE_REVISION_KIND_BASE_SELECTED",
    SCHEDULING_SCHEDULE_REVISION_KIND_SETUP_REVALIDATED = "SCHEDULING_SCHEDULE_REVISION_KIND_SETUP_REVALIDATED",
    SCHEDULING_SCHEDULE_REVISION_KIND_RESTORED = "SCHEDULING_SCHEDULE_REVISION_KIND_RESTORED",
    SCHEDULING_SCHEDULE_REVISION_KIND_CHECKPOINT = "SCHEDULING_SCHEDULE_REVISION_KIND_CHECKPOINT",
    /** SCHEDULING_SCHEDULE_REVISION_KIND_MOVE - Preserved so historical move revisions remain readable. */
    SCHEDULING_SCHEDULE_REVISION_KIND_MOVE = "SCHEDULING_SCHEDULE_REVISION_KIND_MOVE",
    SCHEDULING_SCHEDULE_REVISION_KIND_SWAP = "SCHEDULING_SCHEDULE_REVISION_KIND_SWAP",
    SCHEDULING_SCHEDULE_REVISION_KIND_PIN_REGENERATED = "SCHEDULING_SCHEDULE_REVISION_KIND_PIN_REGENERATED",
    SCHEDULING_SCHEDULE_REVISION_KIND_RETURNED = "SCHEDULING_SCHEDULE_REVISION_KIND_RETURNED",
    SCHEDULING_SCHEDULE_REVISION_KIND_UNDO = "SCHEDULING_SCHEDULE_REVISION_KIND_UNDO",
    SCHEDULING_SCHEDULE_REVISION_KIND_REDO = "SCHEDULING_SCHEDULE_REVISION_KIND_REDO",
    SCHEDULING_SCHEDULE_REVISION_KIND_PIN_ADDED = "SCHEDULING_SCHEDULE_REVISION_KIND_PIN_ADDED",
    SCHEDULING_SCHEDULE_REVISION_KIND_PIN_REMOVED = "SCHEDULING_SCHEDULE_REVISION_KIND_PIN_REMOVED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingScheduleRevisionKindFromJSON(object: any): SchedulingScheduleRevisionKind;
export declare function schedulingScheduleRevisionKindToJSON(object: SchedulingScheduleRevisionKind): string;
export declare function schedulingScheduleRevisionKindToNumber(object: SchedulingScheduleRevisionKind): number;
export declare enum SchedulingScheduleAdjustmentIssueSeverity {
    SCHEDULING_SCHEDULE_ADJUSTMENT_ISSUE_SEVERITY_BLOCKING = "SCHEDULING_SCHEDULE_ADJUSTMENT_ISSUE_SEVERITY_BLOCKING",
    SCHEDULING_SCHEDULE_ADJUSTMENT_ISSUE_SEVERITY_WARNING = "SCHEDULING_SCHEDULE_ADJUSTMENT_ISSUE_SEVERITY_WARNING",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingScheduleAdjustmentIssueSeverityFromJSON(object: any): SchedulingScheduleAdjustmentIssueSeverity;
export declare function schedulingScheduleAdjustmentIssueSeverityToJSON(object: SchedulingScheduleAdjustmentIssueSeverity): string;
export declare function schedulingScheduleAdjustmentIssueSeverityToNumber(object: SchedulingScheduleAdjustmentIssueSeverity): number;
export declare enum SchedulingScheduleAdjustmentKind {
    SCHEDULING_SCHEDULE_ADJUSTMENT_KIND_SWAP = "SCHEDULING_SCHEDULE_ADJUSTMENT_KIND_SWAP",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingScheduleAdjustmentKindFromJSON(object: any): SchedulingScheduleAdjustmentKind;
export declare function schedulingScheduleAdjustmentKindToJSON(object: SchedulingScheduleAdjustmentKind): string;
export declare function schedulingScheduleAdjustmentKindToNumber(object: SchedulingScheduleAdjustmentKind): number;
export declare enum SchedulingSchedulePinScope {
    SCHEDULING_SCHEDULE_PIN_SCOPE_PLACEMENT = "SCHEDULING_SCHEDULE_PIN_SCOPE_PLACEMENT",
    SCHEDULING_SCHEDULE_PIN_SCOPE_CLASS = "SCHEDULING_SCHEDULE_PIN_SCOPE_CLASS",
    SCHEDULING_SCHEDULE_PIN_SCOPE_SECTION = "SCHEDULING_SCHEDULE_PIN_SCOPE_SECTION",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingSchedulePinScopeFromJSON(object: any): SchedulingSchedulePinScope;
export declare function schedulingSchedulePinScopeToJSON(object: SchedulingSchedulePinScope): string;
export declare function schedulingSchedulePinScopeToNumber(object: SchedulingSchedulePinScope): number;
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
/**
 * Where the user must go to resolve a review issue that cannot be fixed inside
 * the scheduling preparation wizard.
 */
export declare enum SchedulingReviewActionDestination {
    /** SCHEDULING_REVIEW_ACTION_DESTINATION_PREPARATION_STEP - Default: open the preparation step named by action_step. */
    SCHEDULING_REVIEW_ACTION_DESTINATION_PREPARATION_STEP = "SCHEDULING_REVIEW_ACTION_DESTINATION_PREPARATION_STEP",
    /** SCHEDULING_REVIEW_ACTION_DESTINATION_ORGANIZATION_ROOMS - Organization settings -> Rooms (missing/archived rooms or categories). */
    SCHEDULING_REVIEW_ACTION_DESTINATION_ORGANIZATION_ROOMS = "SCHEDULING_REVIEW_ACTION_DESTINATION_ORGANIZATION_ROOMS",
    /** SCHEDULING_REVIEW_ACTION_DESTINATION_ABSTRACT_CATALOG - Classes -> abstract catalog (course room-eligibility problems). */
    SCHEDULING_REVIEW_ACTION_DESTINATION_ABSTRACT_CATALOG = "SCHEDULING_REVIEW_ACTION_DESTINATION_ABSTRACT_CATALOG",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingReviewActionDestinationFromJSON(object: any): SchedulingReviewActionDestination;
export declare function schedulingReviewActionDestinationToJSON(object: SchedulingReviewActionDestination): string;
export declare function schedulingReviewActionDestinationToNumber(object: SchedulingReviewActionDestination): number;
export interface SchedulingWorkspace {
    id: Uuid | undefined;
    organization: ObjectId | undefined;
    school_year: ObjectId | undefined;
    completed_steps: SchedulingPreparationStep[];
    /**
     * Whether this year's generation enforces room assignments. When false, room
     * setup is advisory: Review reports room problems as warnings and the solver
     * input carries no room data.
     */
    enforce_room_assignments?: boolean | undefined;
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
    is_rest_period?: boolean | undefined;
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
export interface SchedulingPeriodTimeSetupWeekdayOverride {
    day?: DayOfWeek | undefined;
    period_time_setup_template: Uuid | undefined;
}
export interface SchedulingSemesterPeriodTimeSetup {
    id: Uuid | undefined;
    organization: ObjectId | undefined;
    scheduling_workspace: Uuid | undefined;
    semester: ObjectId | undefined;
    /** Default template for every active weekday without an override. */
    period_time_setup_template: Uuid | undefined;
    weekday_overrides: SchedulingPeriodTimeSetupWeekdayOverride[];
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
/** One teacher's exact scheduling-only share of a class's weekly periods. */
export interface SchedulingTeacherPeriodAllocation {
    teacher_id: ObjectId | undefined;
    periods_per_week?: number | undefined;
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
    /**
     * Mutually exclusive teacher modes: teacher_id fixes one teacher for every
     * period; two or more allocations split the exact weekly total; leaving both
     * empty selects Auto.
     */
    teacher_id?: ObjectId | undefined;
    teacher_period_allocations: SchedulingTeacherPeriodAllocation[];
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
export interface SchedulingGradeCampusWeeklyCapacity {
    campus_id: ObjectId | undefined;
    weekly_capacity?: number | undefined;
}
export interface SchedulingGradeWeeklyAllocation {
    grade?: StudentGrade | undefined;
    assigned_periods?: number | undefined;
    weekly_capacity?: number | undefined;
    missing_requirement_count?: number | undefined;
    campus_capacities: SchedulingGradeCampusWeeklyCapacity[];
    status?: SchedulingGradeWeeklyAllocationStatus | undefined;
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
    grade_weekly_allocations: SchedulingGradeWeeklyAllocation[];
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
/** One teacher's persisted exact share of a class-group subject's weekly periods. */
export interface SchedulingClassGroupTeacherPeriodAllocation {
    id: Uuid | undefined;
    organization: ObjectId | undefined;
    scheduling_workspace: Uuid | undefined;
    class_group_id: Uuid | undefined;
    abstract_course_id: ObjectId | undefined;
    teacher_id: ObjectId | undefined;
    periods_per_week?: number | undefined;
}
/** One elementary/middle subject taught together across two or more class groups. */
export interface SchedulingSharedLessonMember {
    class_group_id: Uuid | undefined;
    abstract_course_id: ObjectId | undefined;
}
/**
 * The complete shared-lesson aggregate. Teacher modes match class-group subjects:
 * absent teacher_id plus no allocations is Auto; teacher_id selects one teacher;
 * two or more allocations define an exact weekly split.
 */
export interface SchedulingSharedLesson {
    id: Uuid | undefined;
    organization: ObjectId | undefined;
    scheduling_workspace: Uuid | undefined;
    members: SchedulingSharedLessonMember[];
    teacher_id?: ObjectId | undefined;
    teacher_period_allocations: SchedulingTeacherPeriodAllocation[];
}
/**
 * Full state of the Class Groups step: the groups, the subjects each needs, and their
 * standalone or shared teacher rules, plus the UI catalog.
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
    teacher_period_allocations: SchedulingClassGroupTeacherPeriodAllocation[];
    instructional_requirements: SchedulingInstructionalRequirement[];
    shared_lessons: SchedulingSharedLesson[];
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
    /** Admin-readable infeasibility reasons reported by the solver. */
    solver_reasons: string[];
    /**
     * Global generation creates a candidate. Pinned working-schedule regeneration
     * creates a hidden proposal that can be applied as a revision after preview.
     */
    purpose?: SchedulingGenerationPurpose | undefined;
    source_working_revision_id?: Uuid | undefined;
    pin_count?: number | undefined;
}
/** Runs for a workspace, newest first (used for status polling and history). */
export interface SchedulingGenerationRunList {
    runs: SchedulingGenerationRun[];
}
/** One immutable placement produced by a successful generation run. */
export interface SchedulingGeneratedScheduleEntry {
    class_id?: string | undefined;
    class_type?: string | undefined;
    abstract_course_id: ObjectId | undefined;
    grade_group_id?: Uuid | undefined;
    offering_id?: ObjectId | undefined;
    teacher_id: ObjectId | undefined;
    semester_id: ObjectId | undefined;
    day?: DayOfWeek | undefined;
    period_sequence?: number | undefined;
    slot_id?: string | undefined;
    /**
     * Room hosting this meeting. Absent for placements generated without room
     * enforcement and for ordinary elementary/middle meetings.
     */
    room_id?: ObjectId | undefined;
    /**
     * Stable identity for this recurring weekly placement. The same value is
     * preserved when the placement is copied into working-schedule revisions.
     */
    id?: Uuid | undefined;
}
/** The immutable schedule artifact stored for one successful generation run. */
export interface SchedulingGeneratedSchedule {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    scheduling_workspace: Uuid | undefined;
    school_year: ObjectId | undefined;
    generation_run_id: Uuid | undefined;
    solver_input_snapshot_id: Uuid | undefined;
    created_at?: string | undefined;
    /** Display metadata may change; placements and provenance remain immutable. */
    name?: string | undefined;
    note?: string | undefined;
    /** Canonical hash of sorted class/slot/teacher/room placement tuples. */
    content_hash?: string | undefined;
    updated_by?: ObjectId | undefined;
    updated_at?: string | undefined;
}
/**
 * The one editable pre-publication schedule for a workspace. Phase 1 changes
 * its current revision only through explicit base selection, revalidation, or
 * restore operations.
 */
export interface SchedulingWorkingSchedule {
    id: Uuid | undefined;
    organization: ObjectId | undefined;
    scheduling_workspace: Uuid | undefined;
    school_year: ObjectId | undefined;
    base_generated_schedule_id: ObjectId | undefined;
    validation_snapshot_id: Uuid | undefined;
    current_revision_id: Uuid | undefined;
    version?: number | undefined;
    created_by: ObjectId | undefined;
    created_at?: string | undefined;
    updated_by: ObjectId | undefined;
    updated_at?: string | undefined;
}
export interface SchedulingScheduleRevision {
    id: Uuid | undefined;
    working_schedule_id: Uuid | undefined;
    base_generated_schedule_id: ObjectId | undefined;
    validation_snapshot_id: Uuid | undefined;
    kind?: SchedulingScheduleRevisionKind | undefined;
    sequence?: number | undefined;
    summary?: string | undefined;
    label?: string | undefined;
    created_by: ObjectId | undefined;
    created_at?: string | undefined;
    copied_from_revision_id?: Uuid | undefined;
    undone_revision_id?: Uuid | undefined;
}
export interface SchedulingScheduleReference {
    generated_schedule_id?: ObjectId | undefined;
    working_revision_id?: Uuid | undefined;
}
export interface SchedulingScheduleSource {
    reference: SchedulingScheduleReference | undefined;
    generated_schedule?: SchedulingGeneratedSchedule | undefined;
    working_schedule?: SchedulingWorkingSchedule | undefined;
    working_revision?: SchedulingScheduleRevision | undefined;
}
export interface SchedulingGeneratedScheduleSummary {
    schedule: SchedulingGeneratedSchedule | undefined;
    input_hash?: string | undefined;
    setup_compatibility?: SchedulingScheduleSetupCompatibility | undefined;
    is_working_base?: boolean | undefined;
    placement_count?: number | undefined;
    /** Present when an older result has the same input and placement hashes. */
    duplicate_of_schedule_id?: ObjectId | undefined;
}
export interface SchedulingGeneratedSchedulePage {
    schedules: SchedulingGeneratedScheduleSummary[];
    next_cursor?: string | undefined;
}
export interface SchedulingScheduleRevisionPage {
    revisions: SchedulingScheduleRevision[];
    next_cursor?: string | undefined;
}
export interface SchedulingScheduleCompatibilityIssue {
    code?: string | undefined;
    message?: string | undefined;
}
/** Display companions assembled from the run's frozen snapshot at read time. */
export interface SchedulingScheduleSubjectMemberInfo {
    class_group_id: Uuid | undefined;
    abstract_course_id: ObjectId | undefined;
    group_label?: string | undefined;
    subject_name?: string | undefined;
    color?: string | undefined;
    grade?: StudentGrade | undefined;
}
export interface SchedulingScheduleClassInfo {
    class_id?: string | undefined;
    name?: string | undefined;
    class_type?: string | undefined;
    group_label?: string | undefined;
    periods_per_week?: number | undefined;
    student_ids: ObjectId[];
    color?: string | undefined;
    subject_members: SchedulingScheduleSubjectMemberInfo[];
    shared_lesson_id?: Uuid | undefined;
}
export interface SchedulingScheduleTeacherInfo {
    id: ObjectId | undefined;
    display_name?: string | undefined;
}
export interface SchedulingScheduleSlotInfo {
    slot_id?: string | undefined;
    semester_id: ObjectId | undefined;
    day?: DayOfWeek | undefined;
    period_sequence?: number | undefined;
    period_label?: string | undefined;
    start_time?: string | undefined;
    end_time?: string | undefined;
    is_rest_period?: boolean | undefined;
}
export interface SchedulingScheduleSemesterInfo {
    id: ObjectId | undefined;
    name?: string | undefined;
    campus_id?: ObjectId | undefined;
    campus_name?: string | undefined;
}
export interface SchedulingScheduleStudentInfo {
    id: ObjectId | undefined;
    display_name?: string | undefined;
    grade?: StudentGrade | undefined;
}
/** Frozen room display data from the run's snapshot, never live room records. */
export interface SchedulingScheduleRoomInfo {
    id: ObjectId | undefined;
    name?: string | undefined;
    campus_id: ObjectId | undefined;
    /** Frozen category name when the room was a special room at snapshot time. */
    category_name?: string | undefined;
}
export interface SchedulingScheduleSectionInfo {
    id: Uuid | undefined;
    campus_id: ObjectId | undefined;
    grade?: StudentGrade | undefined;
    semester_id: ObjectId | undefined;
    label?: string | undefined;
    campus_name?: string | undefined;
}
/** Latest generated schedule plus the frozen display context needed to render it. */
export interface SchedulingGeneratedScheduleView {
    schedule: SchedulingGeneratedSchedule | undefined;
    entries: SchedulingGeneratedScheduleEntry[];
    classes: SchedulingScheduleClassInfo[];
    teachers: SchedulingScheduleTeacherInfo[];
    slots: SchedulingScheduleSlotInfo[];
    semesters: SchedulingScheduleSemesterInfo[];
    sections: SchedulingScheduleSectionInfo[];
    students: SchedulingScheduleStudentInfo[];
    rooms: SchedulingScheduleRoomInfo[];
    /** Immutable room-enforcement setting captured when this schedule was generated. */
    room_assignments_enforced?: boolean | undefined;
}
/**
 * Common explicit schedule view used by both generated history and the current
 * working revision. Display companions always come from the immutable snapshot
 * referenced by the source.
 */
export interface SchedulingScheduleView {
    source: SchedulingScheduleSource | undefined;
    entries: SchedulingGeneratedScheduleEntry[];
    classes: SchedulingScheduleClassInfo[];
    teachers: SchedulingScheduleTeacherInfo[];
    slots: SchedulingScheduleSlotInfo[];
    semesters: SchedulingScheduleSemesterInfo[];
    sections: SchedulingScheduleSectionInfo[];
    students: SchedulingScheduleStudentInfo[];
    rooms: SchedulingScheduleRoomInfo[];
    room_assignments_enforced?: boolean | undefined;
    setup_compatibility?: SchedulingScheduleSetupCompatibility | undefined;
}
/** Empty when no working schedule has been selected yet. */
export interface SchedulingWorkingScheduleState {
    working_schedule?: SchedulingWorkingSchedule | undefined;
    current_revision?: SchedulingScheduleRevision | undefined;
    view?: SchedulingScheduleView | undefined;
    can_undo?: boolean | undefined;
    can_redo?: boolean | undefined;
}
/**
 * Selection, revalidation, and restore are expected compatibility operations:
 * an unapplied result carries guided issues without partially changing state.
 */
export interface SchedulingWorkingScheduleMutationResult {
    applied?: boolean | undefined;
    state?: SchedulingWorkingScheduleState | undefined;
    issues: SchedulingScheduleCompatibilityIssue[];
}
export interface SchedulingScheduleSwap {
    /** Swaps always exchange the two individually selected scheduled periods. */
    placement_id: Uuid | undefined;
    target_placement_id: Uuid | undefined;
}
export interface SchedulingScheduleAdjustmentOperation {
    swap?: SchedulingScheduleSwap | undefined;
}
export interface SchedulingScheduleAdjustmentIssue {
    code?: string | undefined;
    message?: string | undefined;
    severity?: SchedulingScheduleAdjustmentIssueSeverity | undefined;
    placement_ids: Uuid[];
    resource_ids: string[];
}
export interface SchedulingScheduleCellChange {
    placement_id: Uuid | undefined;
    class_id?: string | undefined;
    from_slot_id?: string | undefined;
    to_slot_id?: string | undefined;
}
export interface SchedulingScheduleAdjustmentImpact {
    cell_changes: SchedulingScheduleCellChange[];
    class_ids: string[];
    section_ids: Uuid[];
    teacher_ids: ObjectId[];
    student_ids: ObjectId[];
    room_ids: ObjectId[];
}
export interface SchedulingScheduleAdjustmentOption {
    kind?: SchedulingScheduleAdjustmentKind | undefined;
    target_placement_id?: Uuid | undefined;
    valid?: boolean | undefined;
    primary_issue?: SchedulingScheduleAdjustmentIssue | undefined;
}
export interface SchedulingScheduleAdjustmentOptions {
    source_placement_ids: Uuid[];
    options: SchedulingScheduleAdjustmentOption[];
}
export interface SchedulingScheduleAdjustmentPreview {
    valid?: boolean | undefined;
    current_revision_id: Uuid | undefined;
    proposed_entries: SchedulingGeneratedScheduleEntry[];
    issues: SchedulingScheduleAdjustmentIssue[];
    impact: SchedulingScheduleAdjustmentImpact | undefined;
}
export interface SchedulingScheduleAdjustmentMutationResult {
    applied?: boolean | undefined;
    state?: SchedulingWorkingScheduleState | undefined;
    issues: SchedulingScheduleAdjustmentIssue[];
    impact?: SchedulingScheduleAdjustmentImpact | undefined;
}
export interface SchedulingSchedulePin {
    id: Uuid | undefined;
    pin_group_id: Uuid | undefined;
    placement_id: Uuid | undefined;
    class_id?: string | undefined;
    slot_id?: string | undefined;
    teacher_id: ObjectId | undefined;
    room_id?: ObjectId | undefined;
}
export interface SchedulingSchedulePinGroup {
    id: Uuid | undefined;
    working_schedule_id: Uuid | undefined;
    revision_id: Uuid | undefined;
    scope?: SchedulingSchedulePinScope | undefined;
    label?: string | undefined;
    pins: SchedulingSchedulePin[];
    created_by: ObjectId | undefined;
    created_at?: string | undefined;
}
export interface SchedulingSchedulePinGroupList {
    groups: SchedulingSchedulePinGroup[];
    current_revision_id: Uuid | undefined;
}
export interface SchedulingPinnedRegenerationProposal {
    run: SchedulingGenerationRun | undefined;
    proposed_view?: SchedulingScheduleView | undefined;
    issues: SchedulingScheduleAdjustmentIssue[];
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
    /** Absent means PREPARATION_STEP (resolve via action_step). */
    destination?: SchedulingReviewActionDestination | undefined;
    /**
     * True when the issue is advisory only (room enforcement disabled) and must
     * not block Review completion or generation.
     */
    warning_only?: boolean | undefined;
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
export declare const SchedulingPeriodTimeSetupWeekdayOverride: MessageFns<SchedulingPeriodTimeSetupWeekdayOverride>;
export declare const SchedulingSemesterPeriodTimeSetup: MessageFns<SchedulingSemesterPeriodTimeSetup>;
export declare const SchedulingWeekdayPreviewDay: MessageFns<SchedulingWeekdayPreviewDay>;
export declare const SchedulingPeriodTimeSetup: MessageFns<SchedulingPeriodTimeSetup>;
export declare const SchedulingTeacherProfile: MessageFns<SchedulingTeacherProfile>;
export declare const SchedulingTeacherAvailabilityWindow: MessageFns<SchedulingTeacherAvailabilityWindow>;
export declare const SchedulingTeacherSetup: MessageFns<SchedulingTeacherSetup>;
export declare const SchedulingTeacherPeriodAllocation: MessageFns<SchedulingTeacherPeriodAllocation>;
export declare const SchedulingHighSchoolCourseSetup: MessageFns<SchedulingHighSchoolCourseSetup>;
export declare const SchedulingSemesterOptionGroup: MessageFns<SchedulingSemesterOptionGroup>;
export declare const SchedulingCoursePeriodRule: MessageFns<SchedulingCoursePeriodRule>;
export declare const SchedulingInstructionalRequirement: MessageFns<SchedulingInstructionalRequirement>;
export declare const SchedulingGradeCampusWeeklyCapacity: MessageFns<SchedulingGradeCampusWeeklyCapacity>;
export declare const SchedulingGradeWeeklyAllocation: MessageFns<SchedulingGradeWeeklyAllocation>;
export declare const SchedulingClassesSetup: MessageFns<SchedulingClassesSetup>;
export declare const SchedulingStudentAssignmentOption: MessageFns<SchedulingStudentAssignmentOption>;
export declare const SchedulingSubjectAssignmentPreview: MessageFns<SchedulingSubjectAssignmentPreview>;
export declare const SchedulingHighSchoolCourseStudentAssignment: MessageFns<SchedulingHighSchoolCourseStudentAssignment>;
export declare const SchedulingClassAssignmentSetup: MessageFns<SchedulingClassAssignmentSetup>;
export declare const SchedulingClassGroup: MessageFns<SchedulingClassGroup>;
export declare const SchedulingClassGroupTeacherAssignment: MessageFns<SchedulingClassGroupTeacherAssignment>;
export declare const SchedulingClassGroupTeacherPeriodAllocation: MessageFns<SchedulingClassGroupTeacherPeriodAllocation>;
export declare const SchedulingSharedLessonMember: MessageFns<SchedulingSharedLessonMember>;
export declare const SchedulingSharedLesson: MessageFns<SchedulingSharedLesson>;
export declare const SchedulingClassGroupSetup: MessageFns<SchedulingClassGroupSetup>;
export declare const SchedulingGenerationBlocker: MessageFns<SchedulingGenerationBlocker>;
export declare const SchedulingGenerationRun: MessageFns<SchedulingGenerationRun>;
export declare const SchedulingGenerationRunList: MessageFns<SchedulingGenerationRunList>;
export declare const SchedulingGeneratedScheduleEntry: MessageFns<SchedulingGeneratedScheduleEntry>;
export declare const SchedulingGeneratedSchedule: MessageFns<SchedulingGeneratedSchedule>;
export declare const SchedulingWorkingSchedule: MessageFns<SchedulingWorkingSchedule>;
export declare const SchedulingScheduleRevision: MessageFns<SchedulingScheduleRevision>;
export declare const SchedulingScheduleReference: MessageFns<SchedulingScheduleReference>;
export declare const SchedulingScheduleSource: MessageFns<SchedulingScheduleSource>;
export declare const SchedulingGeneratedScheduleSummary: MessageFns<SchedulingGeneratedScheduleSummary>;
export declare const SchedulingGeneratedSchedulePage: MessageFns<SchedulingGeneratedSchedulePage>;
export declare const SchedulingScheduleRevisionPage: MessageFns<SchedulingScheduleRevisionPage>;
export declare const SchedulingScheduleCompatibilityIssue: MessageFns<SchedulingScheduleCompatibilityIssue>;
export declare const SchedulingScheduleSubjectMemberInfo: MessageFns<SchedulingScheduleSubjectMemberInfo>;
export declare const SchedulingScheduleClassInfo: MessageFns<SchedulingScheduleClassInfo>;
export declare const SchedulingScheduleTeacherInfo: MessageFns<SchedulingScheduleTeacherInfo>;
export declare const SchedulingScheduleSlotInfo: MessageFns<SchedulingScheduleSlotInfo>;
export declare const SchedulingScheduleSemesterInfo: MessageFns<SchedulingScheduleSemesterInfo>;
export declare const SchedulingScheduleStudentInfo: MessageFns<SchedulingScheduleStudentInfo>;
export declare const SchedulingScheduleRoomInfo: MessageFns<SchedulingScheduleRoomInfo>;
export declare const SchedulingScheduleSectionInfo: MessageFns<SchedulingScheduleSectionInfo>;
export declare const SchedulingGeneratedScheduleView: MessageFns<SchedulingGeneratedScheduleView>;
export declare const SchedulingScheduleView: MessageFns<SchedulingScheduleView>;
export declare const SchedulingWorkingScheduleState: MessageFns<SchedulingWorkingScheduleState>;
export declare const SchedulingWorkingScheduleMutationResult: MessageFns<SchedulingWorkingScheduleMutationResult>;
export declare const SchedulingScheduleSwap: MessageFns<SchedulingScheduleSwap>;
export declare const SchedulingScheduleAdjustmentOperation: MessageFns<SchedulingScheduleAdjustmentOperation>;
export declare const SchedulingScheduleAdjustmentIssue: MessageFns<SchedulingScheduleAdjustmentIssue>;
export declare const SchedulingScheduleCellChange: MessageFns<SchedulingScheduleCellChange>;
export declare const SchedulingScheduleAdjustmentImpact: MessageFns<SchedulingScheduleAdjustmentImpact>;
export declare const SchedulingScheduleAdjustmentOption: MessageFns<SchedulingScheduleAdjustmentOption>;
export declare const SchedulingScheduleAdjustmentOptions: MessageFns<SchedulingScheduleAdjustmentOptions>;
export declare const SchedulingScheduleAdjustmentPreview: MessageFns<SchedulingScheduleAdjustmentPreview>;
export declare const SchedulingScheduleAdjustmentMutationResult: MessageFns<SchedulingScheduleAdjustmentMutationResult>;
export declare const SchedulingSchedulePin: MessageFns<SchedulingSchedulePin>;
export declare const SchedulingSchedulePinGroup: MessageFns<SchedulingSchedulePinGroup>;
export declare const SchedulingSchedulePinGroupList: MessageFns<SchedulingSchedulePinGroupList>;
export declare const SchedulingPinnedRegenerationProposal: MessageFns<SchedulingPinnedRegenerationProposal>;
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
