import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "class_service";
export declare enum States {
    STATES_CREATED = 0,
    STATES_NEW = 1,
    STATES_RECLAIMED_BY_STUDENT = 2,
    STATES_RETURNED = 3,
    STATES_SUBMISSION_STATE_UNSPECIFIED = 4,
    STATES_TURNED_IN = 5,
    STATES_NOOP = 6,
    STATES_FALLTHROUGH_STRING = 7,
    UNRECOGNIZED = -1
}
export declare function statesFromJSON(object: any): States;
export declare function statesToJSON(object: States): string;
export declare enum WorkType {
    WORKTYPE_ASSIGNMENT = 0,
    WORKTYPE_COURSE_WORK_TYPE_UNSPECIFIED = 1,
    WORKTYPE_MULTIPLE_CHOICE_QUESTION = 2,
    WORKTYPE_SHORT_ANSWER_QUESTION = 3,
    WORKTYPE_NOOP = 4,
    WORKTYPE_FALLTHROUGH_STRING = 5,
    UNRECOGNIZED = -1
}
export declare function workTypeFromJSON(object: any): WorkType;
export declare function workTypeToJSON(object: WorkType): string;
export declare enum GradeChangeType {
    GRADE_CHANGE_ASSIGNED_GRADE_POINTS_EARNED = 0,
    GRADE_CHANGE_DRAFT_GRADE_POINTS_EARNED = 1,
    GRADE_CHANGE_MAX_POINTS = 2,
    GRADE_CHANGE_UNKNOWN = 3,
    GRADE_CHANGE_NOOP = 4,
    GRADE_CHANGE_FALLTHROUGH_STRING = 5,
    UNRECOGNIZED = -1
}
export declare function gradeChangeTypeFromJSON(object: any): GradeChangeType;
export declare function gradeChangeTypeToJSON(object: GradeChangeType): string;
export declare enum StateHistory {
    HISTORY_CREATED = 0,
    HISTORY_RECLAIMED_BY_STUDENT = 1,
    HISTORY_RETURNED = 2,
    HISTORY_UNSPECIFIED = 3,
    HISTORY_STUDENT_EDITED_AFTER_TURN_IN = 4,
    HISTORY_TURNED_IN = 5,
    HISTORY_NOOP = 6,
    HISTORY_FALLTHROUGH_STRING = 7,
    UNRECOGNIZED = -1
}
export declare function stateHistoryFromJSON(object: any): StateHistory;
export declare function stateHistoryToJSON(object: StateHistory): string;
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
