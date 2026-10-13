import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { DayOfWeek } from "../google/type/dayofweek";
import { ObjectId } from "../utils/object_id";
import { Uuid } from "../utils/uuid";
import { SchedulingScheduleSubjectMemberInfo } from "./scheduling";
export declare const protobufPackage = "class_service";
export declare enum SchedulingCalendarDateStatus {
    SCHEDULING_CALENDAR_DATE_STATUS_UNSPECIFIED = "SCHEDULING_CALENDAR_DATE_STATUS_UNSPECIFIED",
    SCHEDULING_CALENDAR_DATE_STATUS_NOT_PUBLISHED = "SCHEDULING_CALENDAR_DATE_STATUS_NOT_PUBLISHED",
    SCHEDULING_CALENDAR_DATE_STATUS_OUTSIDE_SEMESTER = "SCHEDULING_CALENDAR_DATE_STATUS_OUTSIDE_SEMESTER",
    SCHEDULING_CALENDAR_DATE_STATUS_NON_TEACHING = "SCHEDULING_CALENDAR_DATE_STATUS_NON_TEACHING",
    SCHEDULING_CALENDAR_DATE_STATUS_PUBLISHED = "SCHEDULING_CALENDAR_DATE_STATUS_PUBLISHED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingCalendarDateStatusFromJSON(object: any): SchedulingCalendarDateStatus;
export declare function schedulingCalendarDateStatusToJSON(object: SchedulingCalendarDateStatus): string;
export declare function schedulingCalendarDateStatusToNumber(object: SchedulingCalendarDateStatus): number;
export declare enum SchedulingPublishedLessonStatus {
    SCHEDULING_PUBLISHED_LESSON_STATUS_UNSPECIFIED = "SCHEDULING_PUBLISHED_LESSON_STATUS_UNSPECIFIED",
    SCHEDULING_PUBLISHED_LESSON_STATUS_SCHEDULED = "SCHEDULING_PUBLISHED_LESSON_STATUS_SCHEDULED",
    SCHEDULING_PUBLISHED_LESSON_STATUS_CANCELLED = "SCHEDULING_PUBLISHED_LESSON_STATUS_CANCELLED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingPublishedLessonStatusFromJSON(object: any): SchedulingPublishedLessonStatus;
export declare function schedulingPublishedLessonStatusToJSON(object: SchedulingPublishedLessonStatus): string;
export declare function schedulingPublishedLessonStatusToNumber(object: SchedulingPublishedLessonStatus): number;
export declare enum SchedulingPublishedLessonSuppressionSource {
    SCHEDULING_PUBLISHED_LESSON_SUPPRESSION_SOURCE_UNSPECIFIED = "SCHEDULING_PUBLISHED_LESSON_SUPPRESSION_SOURCE_UNSPECIFIED",
    SCHEDULING_PUBLISHED_LESSON_SUPPRESSION_SOURCE_DAY = "SCHEDULING_PUBLISHED_LESSON_SUPPRESSION_SOURCE_DAY",
    SCHEDULING_PUBLISHED_LESSON_SUPPRESSION_SOURCE_PERIOD = "SCHEDULING_PUBLISHED_LESSON_SUPPRESSION_SOURCE_PERIOD",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingPublishedLessonSuppressionSourceFromJSON(object: any): SchedulingPublishedLessonSuppressionSource;
export declare function schedulingPublishedLessonSuppressionSourceToJSON(object: SchedulingPublishedLessonSuppressionSource): string;
export declare function schedulingPublishedLessonSuppressionSourceToNumber(object: SchedulingPublishedLessonSuppressionSource): number;
export declare enum SchedulingPublishedLessonEditScope {
    SCHEDULING_PUBLISHED_LESSON_EDIT_SCOPE_UNSPECIFIED = "SCHEDULING_PUBLISHED_LESSON_EDIT_SCOPE_UNSPECIFIED",
    SCHEDULING_PUBLISHED_LESSON_EDIT_SCOPE_SINGLE = "SCHEDULING_PUBLISHED_LESSON_EDIT_SCOPE_SINGLE",
    SCHEDULING_PUBLISHED_LESSON_EDIT_SCOPE_CLASS_RANGE = "SCHEDULING_PUBLISHED_LESSON_EDIT_SCOPE_CLASS_RANGE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingPublishedLessonEditScopeFromJSON(object: any): SchedulingPublishedLessonEditScope;
export declare function schedulingPublishedLessonEditScopeToJSON(object: SchedulingPublishedLessonEditScope): string;
export declare function schedulingPublishedLessonEditScopeToNumber(object: SchedulingPublishedLessonEditScope): number;
export declare enum SchedulingPublishedRoomChangeMode {
    SCHEDULING_PUBLISHED_ROOM_CHANGE_MODE_UNSPECIFIED = "SCHEDULING_PUBLISHED_ROOM_CHANGE_MODE_UNSPECIFIED",
    SCHEDULING_PUBLISHED_ROOM_CHANGE_MODE_SET = "SCHEDULING_PUBLISHED_ROOM_CHANGE_MODE_SET",
    SCHEDULING_PUBLISHED_ROOM_CHANGE_MODE_CLEAR = "SCHEDULING_PUBLISHED_ROOM_CHANGE_MODE_CLEAR",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingPublishedRoomChangeModeFromJSON(object: any): SchedulingPublishedRoomChangeMode;
export declare function schedulingPublishedRoomChangeModeToJSON(object: SchedulingPublishedRoomChangeMode): string;
export declare function schedulingPublishedRoomChangeModeToNumber(object: SchedulingPublishedRoomChangeMode): number;
export declare enum SchedulingPublishedLessonConflictKind {
    SCHEDULING_PUBLISHED_LESSON_CONFLICT_KIND_UNSPECIFIED = "SCHEDULING_PUBLISHED_LESSON_CONFLICT_KIND_UNSPECIFIED",
    SCHEDULING_PUBLISHED_LESSON_CONFLICT_KIND_TEACHER = "SCHEDULING_PUBLISHED_LESSON_CONFLICT_KIND_TEACHER",
    SCHEDULING_PUBLISHED_LESSON_CONFLICT_KIND_ROOM = "SCHEDULING_PUBLISHED_LESSON_CONFLICT_KIND_ROOM",
    SCHEDULING_PUBLISHED_LESSON_CONFLICT_KIND_SECTION = "SCHEDULING_PUBLISHED_LESSON_CONFLICT_KIND_SECTION",
    SCHEDULING_PUBLISHED_LESSON_CONFLICT_KIND_STUDENT = "SCHEDULING_PUBLISHED_LESSON_CONFLICT_KIND_STUDENT",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingPublishedLessonConflictKindFromJSON(object: any): SchedulingPublishedLessonConflictKind;
export declare function schedulingPublishedLessonConflictKindToJSON(object: SchedulingPublishedLessonConflictKind): string;
export declare function schedulingPublishedLessonConflictKindToNumber(object: SchedulingPublishedLessonConflictKind): number;
export declare enum SchedulingPublishedDayEditScope {
    SCHEDULING_PUBLISHED_DAY_EDIT_SCOPE_UNSPECIFIED = "SCHEDULING_PUBLISHED_DAY_EDIT_SCOPE_UNSPECIFIED",
    SCHEDULING_PUBLISHED_DAY_EDIT_SCOPE_SINGLE = "SCHEDULING_PUBLISHED_DAY_EDIT_SCOPE_SINGLE",
    SCHEDULING_PUBLISHED_DAY_EDIT_SCOPE_SEMESTER_RANGE = "SCHEDULING_PUBLISHED_DAY_EDIT_SCOPE_SEMESTER_RANGE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingPublishedDayEditScopeFromJSON(object: any): SchedulingPublishedDayEditScope;
export declare function schedulingPublishedDayEditScopeToJSON(object: SchedulingPublishedDayEditScope): string;
export declare function schedulingPublishedDayEditScopeToNumber(object: SchedulingPublishedDayEditScope): number;
export declare enum SchedulingPublishedLessonTimePolicy {
    SCHEDULING_PUBLISHED_LESSON_TIME_POLICY_UNSPECIFIED = "SCHEDULING_PUBLISHED_LESSON_TIME_POLICY_UNSPECIFIED",
    SCHEDULING_PUBLISHED_LESSON_TIME_POLICY_KEEP_CUSTOM = "SCHEDULING_PUBLISHED_LESSON_TIME_POLICY_KEEP_CUSTOM",
    SCHEDULING_PUBLISHED_LESSON_TIME_POLICY_ALIGN_ALL = "SCHEDULING_PUBLISHED_LESSON_TIME_POLICY_ALIGN_ALL",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingPublishedLessonTimePolicyFromJSON(object: any): SchedulingPublishedLessonTimePolicy;
export declare function schedulingPublishedLessonTimePolicyToJSON(object: SchedulingPublishedLessonTimePolicy): string;
export declare function schedulingPublishedLessonTimePolicyToNumber(object: SchedulingPublishedLessonTimePolicy): number;
/** Date fields are inclusive school-local YYYY-MM-DD values, never UTC instants. */
export interface SchedulingPublicationSemester {
    id: ObjectId | undefined;
    name?: string | undefined;
    campus_id: ObjectId | undefined;
    campus_name?: string | undefined;
    start_date?: string | undefined;
    end_date?: string | undefined;
}
export interface SchedulingPublication {
    id: Uuid | undefined;
    scheduling_workspace: Uuid | undefined;
    school_year: ObjectId | undefined;
    source_revision_id: Uuid | undefined;
    validation_snapshot_id: Uuid | undefined;
    start_date?: string | undefined;
    end_date?: string | undefined;
    timezone?: string | undefined;
    weekend_days: DayOfWeek[];
    semesters: SchedulingPublicationSemester[];
    sequence?: number | undefined;
    created_by: ObjectId | undefined;
    created_at?: string | undefined;
    teaching_date_count?: number | undefined;
    day_count?: number | undefined;
    lesson_count?: number | undefined;
    first_teaching_date?: string | undefined;
}
export interface SchedulingPublicationPreview {
    source_revision_id: Uuid | undefined;
    start_date?: string | undefined;
    end_date?: string | undefined;
    timezone?: string | undefined;
    semesters: SchedulingPublicationSemester[];
    teaching_date_count?: number | undefined;
    day_count?: number | undefined;
    lesson_count?: number | undefined;
    replaced_day_count?: number | undefined;
    replaced_lesson_count?: number | undefined;
    previously_published_date_count?: number | undefined;
    /** Binds source, reviewed setup, calendar settings, range and publication state. */
    preview_token?: string | undefined;
    first_teaching_date?: string | undefined;
    /** Publication-only servers omit these counts because they do not support edits. */
    replaced_adjusted_lesson_count?: number | undefined;
    replaced_adjusted_day_count?: number | undefined;
}
export interface SchedulingPublicationPage {
    publications: SchedulingPublication[];
    next_cursor?: string | undefined;
}
export interface SchedulingCalendarDate {
    local_date?: string | undefined;
    status?: SchedulingCalendarDateStatus | undefined;
    publication_id?: Uuid | undefined;
    timezone?: string | undefined;
}
export interface SchedulingPublishedPeriod {
    id: Uuid | undefined;
    source_slot_id?: string | undefined;
    sequence?: number | undefined;
    label?: string | undefined;
    start_time?: string | undefined;
    end_time?: string | undefined;
    is_rest_period?: boolean | undefined;
    /** Absent in original frozen layouts means active. */
    cancelled?: boolean | undefined;
}
export interface SchedulingPublishedDay {
    id: Uuid | undefined;
    publication_id: Uuid | undefined;
    semester_id: ObjectId | undefined;
    campus_id: ObjectId | undefined;
    local_date?: string | undefined;
    periods: SchedulingPublishedPeriod[];
    /** Editing metadata is absent on publication-only servers; edit options always populate it. */
    version?: number | undefined;
    /** Absent means the original published day is active. */
    cancelled?: boolean | undefined;
    cancellation_reason?: string | undefined;
    updated_at?: string | undefined;
    semester_name?: string | undefined;
    campus_name?: string | undefined;
    timezone?: string | undefined;
    superseded_by_publication_id?: Uuid | undefined;
    superseded_at?: string | undefined;
}
/**
 * One physical dated meeting, including every member of a shared lesson.
 * Ordinary future edits retain id; full republication supersedes this occurrence.
 */
export interface SchedulingPublishedLesson {
    id: Uuid | undefined;
    published_day_id: Uuid | undefined;
    publication_id: Uuid | undefined;
    source_revision_id: Uuid | undefined;
    source_placement_id: Uuid | undefined;
    source_class_id?: string | undefined;
    source_slot_id?: string | undefined;
    local_date?: string | undefined;
    timezone?: string | undefined;
    /** RFC3339 instants; actual times are independent of reference period boundaries. */
    starts_at?: string | undefined;
    ends_at?: string | undefined;
    original_starts_at?: string | undefined;
    title?: string | undefined;
    class_type?: string | undefined;
    abstract_course_id: ObjectId | undefined;
    offering_id?: ObjectId | undefined;
    shared_lesson_id?: Uuid | undefined;
    subject_members: SchedulingScheduleSubjectMemberInfo[];
    teacher_id: ObjectId | undefined;
    teacher_name?: string | undefined;
    room_id?: ObjectId | undefined;
    room_name?: string | undefined;
    semester_id: ObjectId | undefined;
    semester_name?: string | undefined;
    campus_id: ObjectId | undefined;
    campus_name?: string | undefined;
    period_label?: string | undefined;
    color?: string | undefined;
    status?: SchedulingPublishedLessonStatus | undefined;
    version?: number | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    superseded_by_publication_id?: Uuid | undefined;
    superseded_at?: string | undefined;
    /** Always populated for current rows; old immutable history did not record this intent. */
    follows_period_times?: boolean | undefined;
    /** Individual status remains unchanged when a day or period suppresses this meeting. */
    suppression?: SchedulingPublishedLessonSuppression | undefined;
}
export interface SchedulingPublishedLessonSuppression {
    source?: SchedulingPublishedLessonSuppressionSource | undefined;
    reason?: string | undefined;
    period_id?: Uuid | undefined;
}
export interface SchedulingCalendarResourceScope {
    semester_id: ObjectId | undefined;
    semester_name?: string | undefined;
    campus_id: ObjectId | undefined;
    campus_name?: string | undefined;
}
/**
 * Keys use section:<uuid>, teacher:<oid>, student:<oid>, or offering:<oid>.
 * One resource may participate in several semesters and campuses.
 */
export interface SchedulingCalendarResource {
    key?: string | undefined;
    name?: string | undefined;
    scopes: SchedulingCalendarResourceScope[];
}
export interface SchedulingPublishedCalendar {
    start_date?: string | undefined;
    end_date?: string | undefined;
    dates: SchedulingCalendarDate[];
    days: SchedulingPublishedDay[];
    lessons: SchedulingPublishedLesson[];
    /** Active resources for the school year, independent of the visible date range. */
    resources: SchedulingCalendarResource[];
}
export interface SchedulingPublishedRoomChange {
    mode?: SchedulingPublishedRoomChangeMode | undefined;
    room_id?: ObjectId | undefined;
}
export interface SchedulingPublishedLessonEdit {
    expected_lesson_version?: number | undefined;
    expected_calendar_version?: number | undefined;
    scope?: SchedulingPublishedLessonEditScope | undefined;
    /**
     * CLASS_RANGE matches the anchor's logical class and semester, across current publications.
     * SINGLE omits dates. Omitted patch fields retain their current values.
     */
    start_date?: string | undefined;
    end_date?: string | undefined;
    teacher_id?: ObjectId | undefined;
    room_change?: SchedulingPublishedRoomChange | undefined;
    /** Both times are required together, strict HH:mm in each occurrence's frozen timezone. */
    start_time?: string | undefined;
    end_time?: string | undefined;
    /** SCHEDULED restores current assignments/times; it never resets previous edits. */
    status?: SchedulingPublishedLessonStatus | undefined;
    reason?: string | undefined;
}
export interface SchedulingPublishedEditChoice {
    id: ObjectId | undefined;
    name?: string | undefined;
}
export interface SchedulingPublishedLessonEditOptions {
    lesson: SchedulingPublishedLesson | undefined;
    calendar_version?: number | undefined;
    teachers: SchedulingPublishedEditChoice[];
    rooms: SchedulingPublishedEditChoice[];
    maximum_range_days?: number | undefined;
    maximum_affected_lessons?: number | undefined;
}
export interface SchedulingPublishedLessonConflict {
    kind?: SchedulingPublishedLessonConflictKind | undefined;
    lesson_id: Uuid | undefined;
    conflicting_lesson_id: Uuid | undefined;
    local_date?: string | undefined;
    message?: string | undefined;
}
export interface SchedulingPublishedLessonChange {
    before: SchedulingPublishedLesson | undefined;
    after: SchedulingPublishedLesson | undefined;
}
export interface SchedulingPublishedLessonEditPreview {
    preview_token?: string | undefined;
    calendar_version?: number | undefined;
    affected_lesson_count?: number | undefined;
    changed_lesson_count?: number | undefined;
    affected_dates: string[];
    samples: SchedulingPublishedLessonChange[];
    conflicts: SchedulingPublishedLessonConflict[];
    conflict_count?: number | undefined;
    affected_members: SchedulingScheduleSubjectMemberInfo[];
}
export interface SchedulingPublishedChange {
    id: Uuid | undefined;
    school_year_id: ObjectId | undefined;
    anchor_lesson_id?: Uuid | undefined;
    start_date?: string | undefined;
    end_date?: string | undefined;
    reason?: string | undefined;
    created_by: ObjectId | undefined;
    created_at?: string | undefined;
    calendar_version?: number | undefined;
    affected_lesson_count?: number | undefined;
    changed_lesson_count?: number | undefined;
    affected_dates: string[];
    anchor_day_id: Uuid | undefined;
    /** Absent for lesson-only operations. */
    affected_day_count?: number | undefined;
    changed_day_count?: number | undefined;
}
export interface SchedulingPublishedLessonHistoryEntry {
    change: SchedulingPublishedChange | undefined;
    before: SchedulingPublishedLesson | undefined;
    after: SchedulingPublishedLesson | undefined;
}
export interface SchedulingPublishedLessonHistoryPage {
    entries: SchedulingPublishedLessonHistoryEntry[];
    next_cursor?: string | undefined;
}
export interface SchedulingPublishedPeriodEdit {
    /** An existing period UUID on the anchor day; identity, sequence and kind stay fixed. */
    period_id: Uuid | undefined;
    start_time?: string | undefined;
    end_time?: string | undefined;
    cancelled?: boolean | undefined;
}
export interface SchedulingPublishedDayEdit {
    expected_day_version?: number | undefined;
    expected_calendar_version?: number | undefined;
    scope?: SchedulingPublishedDayEditScope | undefined;
    /** SINGLE omits dates. SEMESTER_RANGE uses the anchor's exact semester and campus. */
    start_date?: string | undefined;
    end_date?: string | undefined;
    cancelled?: boolean | undefined;
    /**
     * Also retained in operation history. Changes the closure reason only with cancelled=true:
     * omitted preserves an existing closure reason, empty clears it. Restoration clears it.
     */
    reason?: string | undefined;
    periods: SchedulingPublishedPeriodEdit[];
    /** Only valid with paired period times. Omitted means KEEP_CUSTOM. */
    lesson_time_policy?: SchedulingPublishedLessonTimePolicy | undefined;
}
export interface SchedulingPublishedDayEditOptions {
    days: SchedulingPublishedDay[];
    calendar_version?: number | undefined;
    maximum_range_days?: number | undefined;
    maximum_affected_lessons?: number | undefined;
}
export interface SchedulingPublishedDayChange {
    before: SchedulingPublishedDay | undefined;
    after: SchedulingPublishedDay | undefined;
}
export interface SchedulingPublishedDayEditPreview {
    preview_token?: string | undefined;
    calendar_version?: number | undefined;
    affected_day_count?: number | undefined;
    changed_day_count?: number | undefined;
    affected_lesson_count?: number | undefined;
    /** Includes effective changes from day/period suppression, without rewriting individual status. */
    changed_lesson_count?: number | undefined;
    affected_dates: string[];
    day_samples: SchedulingPublishedDayChange[];
    lesson_samples: SchedulingPublishedLessonChange[];
    preserved_custom_time_count?: number | undefined;
    reset_custom_time_count?: number | undefined;
    conflicts: SchedulingPublishedLessonConflict[];
    conflict_count?: number | undefined;
}
export interface SchedulingPublishedDayHistoryEntry {
    change: SchedulingPublishedChange | undefined;
    before: SchedulingPublishedDay | undefined;
    after: SchedulingPublishedDay | undefined;
}
export interface SchedulingPublishedDayHistoryPage {
    entries: SchedulingPublishedDayHistoryEntry[];
    next_cursor?: string | undefined;
}
export declare const SchedulingPublicationSemester: MessageFns<SchedulingPublicationSemester>;
export declare const SchedulingPublication: MessageFns<SchedulingPublication>;
export declare const SchedulingPublicationPreview: MessageFns<SchedulingPublicationPreview>;
export declare const SchedulingPublicationPage: MessageFns<SchedulingPublicationPage>;
export declare const SchedulingCalendarDate: MessageFns<SchedulingCalendarDate>;
export declare const SchedulingPublishedPeriod: MessageFns<SchedulingPublishedPeriod>;
export declare const SchedulingPublishedDay: MessageFns<SchedulingPublishedDay>;
export declare const SchedulingPublishedLesson: MessageFns<SchedulingPublishedLesson>;
export declare const SchedulingPublishedLessonSuppression: MessageFns<SchedulingPublishedLessonSuppression>;
export declare const SchedulingCalendarResourceScope: MessageFns<SchedulingCalendarResourceScope>;
export declare const SchedulingCalendarResource: MessageFns<SchedulingCalendarResource>;
export declare const SchedulingPublishedCalendar: MessageFns<SchedulingPublishedCalendar>;
export declare const SchedulingPublishedRoomChange: MessageFns<SchedulingPublishedRoomChange>;
export declare const SchedulingPublishedLessonEdit: MessageFns<SchedulingPublishedLessonEdit>;
export declare const SchedulingPublishedEditChoice: MessageFns<SchedulingPublishedEditChoice>;
export declare const SchedulingPublishedLessonEditOptions: MessageFns<SchedulingPublishedLessonEditOptions>;
export declare const SchedulingPublishedLessonConflict: MessageFns<SchedulingPublishedLessonConflict>;
export declare const SchedulingPublishedLessonChange: MessageFns<SchedulingPublishedLessonChange>;
export declare const SchedulingPublishedLessonEditPreview: MessageFns<SchedulingPublishedLessonEditPreview>;
export declare const SchedulingPublishedChange: MessageFns<SchedulingPublishedChange>;
export declare const SchedulingPublishedLessonHistoryEntry: MessageFns<SchedulingPublishedLessonHistoryEntry>;
export declare const SchedulingPublishedLessonHistoryPage: MessageFns<SchedulingPublishedLessonHistoryPage>;
export declare const SchedulingPublishedPeriodEdit: MessageFns<SchedulingPublishedPeriodEdit>;
export declare const SchedulingPublishedDayEdit: MessageFns<SchedulingPublishedDayEdit>;
export declare const SchedulingPublishedDayEditOptions: MessageFns<SchedulingPublishedDayEditOptions>;
export declare const SchedulingPublishedDayChange: MessageFns<SchedulingPublishedDayChange>;
export declare const SchedulingPublishedDayEditPreview: MessageFns<SchedulingPublishedDayEditPreview>;
export declare const SchedulingPublishedDayHistoryEntry: MessageFns<SchedulingPublishedDayHistoryEntry>;
export declare const SchedulingPublishedDayHistoryPage: MessageFns<SchedulingPublishedDayHistoryPage>;
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
