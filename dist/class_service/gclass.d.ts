import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "class_service";
export declare enum States {
    STATES_CREATED = "STATES_CREATED",
    STATES_NEW = "STATES_NEW",
    STATES_RECLAIMED_BY_STUDENT = "STATES_RECLAIMED_BY_STUDENT",
    STATES_RETURNED = "STATES_RETURNED",
    STATES_SUBMISSION_STATE_UNSPECIFIED = "STATES_SUBMISSION_STATE_UNSPECIFIED",
    STATES_TURNED_IN = "STATES_TURNED_IN",
    STATES_NOOP = "STATES_NOOP",
    STATES_FALLTHROUGH_STRING = "STATES_FALLTHROUGH_STRING",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function statesFromJSON(object: any): States;
export declare function statesToJSON(object: States): string;
export declare function statesToNumber(object: States): number;
export declare enum WorkType {
    WORKTYPE_ASSIGNMENT = "WORKTYPE_ASSIGNMENT",
    WORKTYPE_COURSE_WORK_TYPE_UNSPECIFIED = "WORKTYPE_COURSE_WORK_TYPE_UNSPECIFIED",
    WORKTYPE_MULTIPLE_CHOICE_QUESTION = "WORKTYPE_MULTIPLE_CHOICE_QUESTION",
    WORKTYPE_SHORT_ANSWER_QUESTION = "WORKTYPE_SHORT_ANSWER_QUESTION",
    WORKTYPE_NOOP = "WORKTYPE_NOOP",
    WORKTYPE_FALLTHROUGH_STRING = "WORKTYPE_FALLTHROUGH_STRING",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function workTypeFromJSON(object: any): WorkType;
export declare function workTypeToJSON(object: WorkType): string;
export declare function workTypeToNumber(object: WorkType): number;
export declare enum GradeChangeType {
    GRADE_CHANGE_ASSIGNED_GRADE_POINTS_EARNED = "GRADE_CHANGE_ASSIGNED_GRADE_POINTS_EARNED",
    GRADE_CHANGE_DRAFT_GRADE_POINTS_EARNED = "GRADE_CHANGE_DRAFT_GRADE_POINTS_EARNED",
    GRADE_CHANGE_MAX_POINTS = "GRADE_CHANGE_MAX_POINTS",
    GRADE_CHANGE_UNKNOWN = "GRADE_CHANGE_UNKNOWN",
    GRADE_CHANGE_NOOP = "GRADE_CHANGE_NOOP",
    GRADE_CHANGE_FALLTHROUGH_STRING = "GRADE_CHANGE_FALLTHROUGH_STRING",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function gradeChangeTypeFromJSON(object: any): GradeChangeType;
export declare function gradeChangeTypeToJSON(object: GradeChangeType): string;
export declare function gradeChangeTypeToNumber(object: GradeChangeType): number;
export declare enum StateHistory {
    HISTORY_CREATED = "HISTORY_CREATED",
    HISTORY_RECLAIMED_BY_STUDENT = "HISTORY_RECLAIMED_BY_STUDENT",
    HISTORY_RETURNED = "HISTORY_RETURNED",
    HISTORY_UNSPECIFIED = "HISTORY_UNSPECIFIED",
    HISTORY_STUDENT_EDITED_AFTER_TURN_IN = "HISTORY_STUDENT_EDITED_AFTER_TURN_IN",
    HISTORY_TURNED_IN = "HISTORY_TURNED_IN",
    HISTORY_NOOP = "HISTORY_NOOP",
    HISTORY_FALLTHROUGH_STRING = "HISTORY_FALLTHROUGH_STRING",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function stateHistoryFromJSON(object: any): StateHistory;
export declare function stateHistoryToJSON(object: StateHistory): string;
export declare function stateHistoryToNumber(object: StateHistory): number;
/** Represents a GClass student submission */
export interface GClassStudentSubmission {
    gclassStudentSubmissionId: string;
    gclassCourseId: string;
    gclassCourseWorkId: string;
    gclassUserId: string;
    gclassLink: string;
    studentId: ObjectId | undefined;
    homeroomId?: ObjectId | undefined;
    courseId?: ObjectId | undefined;
    submissionState: States;
    workNotSubmittedAndLate: boolean;
    /** Assuming "number" means float/double in TS */
    assignedGrade: number;
    workType: WorkType;
    submissionHistory: SubmissionHistory[];
    assignmentSubmission?: AssignmentSubmission | undefined;
    shortAnswerSubmission?: ShortAnswerSubmission | undefined;
    multipleChoiceSubmission?: MultipleChoiceSubmission | undefined;
    rawJsonData: string;
}
/** Represents GClass course work */
export interface GClassCourseWork {
    gclassCourseWorkId: string;
    gclassCourseId: string;
    homeroomId?: ObjectId | undefined;
    courseId?: ObjectId | undefined;
    title: string;
    description: string;
    gclassLink: string;
    materials: Attachment[];
    /** Assuming ISO datetime format in TS */
    creationTime: Date | undefined;
    /** This maybe optional due to gclass api, see: https://developers.google.com/classroom/reference/rest/v1/courses.courseWork */
    dueDate?: Date | undefined;
    workType: WorkType;
    rawJsonData: string;
}
/** Represents submission history */
export interface SubmissionHistory {
    gradeHistory?: GradeHistory | undefined;
    stateHistory?: StateHistoryData | undefined;
}
/** Represents grade history */
export interface GradeHistory {
    actorUserId: string;
    gradeChangeType?: GradeChangeType | undefined;
    gradeTimestamp?: Date | undefined;
    maxPoints: number;
    pointsEarned: number;
}
/** Represents state history data */
export interface StateHistoryData {
    actorUserId: string;
    state?: StateHistory | undefined;
    stateTimestamp?: Date | undefined;
}
/** Represents an assignment submission */
export interface AssignmentSubmission {
    attachments: Attachment[];
}
/** Represents a short answer submission */
export interface ShortAnswerSubmission {
    answer: string;
}
/** Represents a multiple-choice submission */
export interface MultipleChoiceSubmission {
    answer: string;
}
/** Represents an attachment */
export interface Attachment {
    driveFile?: DriveFile | undefined;
    form?: Form | undefined;
    link?: Link | undefined;
    youtubeVideo?: YouTubeVideo | undefined;
}
/** Represents a Google Drive file attachment */
export interface DriveFile {
    alternateLink: string;
    id: string;
    thumbnailUrl: string;
    title: string;
}
/** Represents a Google Form */
export interface Form {
    formUrl: string;
    responseUrl: string;
    thumbnailUrl: string;
    title: string;
}
/** Represents a link attachment */
export interface Link {
    thumbnailUrl: string;
    title: string;
    url: string;
}
/** Represents a YouTube video attachment */
export interface YouTubeVideo {
    alternateLink: string;
    id: string;
    thumbnailUrl: string;
    title: string;
}
export declare const GClassStudentSubmission: MessageFns<GClassStudentSubmission>;
export declare const GClassCourseWork: MessageFns<GClassCourseWork>;
export declare const SubmissionHistory: MessageFns<SubmissionHistory>;
export declare const GradeHistory: MessageFns<GradeHistory>;
export declare const StateHistoryData: MessageFns<StateHistoryData>;
export declare const AssignmentSubmission: MessageFns<AssignmentSubmission>;
export declare const ShortAnswerSubmission: MessageFns<ShortAnswerSubmission>;
export declare const MultipleChoiceSubmission: MessageFns<MultipleChoiceSubmission>;
export declare const Attachment: MessageFns<Attachment>;
export declare const DriveFile: MessageFns<DriveFile>;
export declare const Form: MessageFns<Form>;
export declare const Link: MessageFns<Link>;
export declare const YouTubeVideo: MessageFns<YouTubeVideo>;
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
