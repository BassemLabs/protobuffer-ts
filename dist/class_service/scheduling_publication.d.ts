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
}
export interface SchedulingPublishedDay {
    id: Uuid | undefined;
    publication_id: Uuid | undefined;
    semester_id: ObjectId | undefined;
    campus_id: ObjectId | undefined;
    local_date?: string | undefined;
    periods: SchedulingPublishedPeriod[];
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
export declare const SchedulingPublicationSemester: MessageFns<SchedulingPublicationSemester>;
export declare const SchedulingPublication: MessageFns<SchedulingPublication>;
export declare const SchedulingPublicationPreview: MessageFns<SchedulingPublicationPreview>;
export declare const SchedulingPublicationPage: MessageFns<SchedulingPublicationPage>;
export declare const SchedulingCalendarDate: MessageFns<SchedulingCalendarDate>;
export declare const SchedulingPublishedPeriod: MessageFns<SchedulingPublishedPeriod>;
export declare const SchedulingPublishedDay: MessageFns<SchedulingPublishedDay>;
export declare const SchedulingPublishedLesson: MessageFns<SchedulingPublishedLesson>;
export declare const SchedulingCalendarResourceScope: MessageFns<SchedulingCalendarResourceScope>;
export declare const SchedulingCalendarResource: MessageFns<SchedulingCalendarResource>;
export declare const SchedulingPublishedCalendar: MessageFns<SchedulingPublishedCalendar>;
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
