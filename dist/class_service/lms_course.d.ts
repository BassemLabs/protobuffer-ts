import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "class_service";
export declare enum LmsProviderType {
    GOOGLE_CLASSROOM = "GOOGLE_CLASSROOM",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function lmsProviderTypeFromJSON(object: any): LmsProviderType;
export declare function lmsProviderTypeToJSON(object: LmsProviderType): string;
export declare function lmsProviderTypeToNumber(object: LmsProviderType): number;
export declare enum LmsWorkType {
    ASSIGNMENT = "ASSIGNMENT",
    MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
    SHORT_ANSWER = "SHORT_ANSWER",
    QUIZ = "QUIZ",
    DISCUSSION = "DISCUSSION",
    EXTERNAL_TOOL = "EXTERNAL_TOOL",
    OTHER = "OTHER",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function lmsWorkTypeFromJSON(object: any): LmsWorkType;
export declare function lmsWorkTypeToJSON(object: LmsWorkType): string;
export declare function lmsWorkTypeToNumber(object: LmsWorkType): number;
export declare enum LmsSubmissionState {
    /**
     * UNSUBMITTED - Submission has never been turned in.
     * Google Classroom: NEW / CREATED
     * Canvas: unsubmitted / missing / late / excused / pending
     */
    UNSUBMITTED = "UNSUBMITTED",
    /**
     * SUBMITTED - Student has actively submitted the assignment.
     * Google Classroom: TURNED_IN / RECLAIMED_BY_STUDENT
     * Canvas: submitted
     */
    SUBMITTED = "SUBMITTED",
    /**
     * GRADED - Assignment has been graded / returned by teacher.
     * Google Classroom: RETURNED
     * Canvas: graded
     */
    GRADED = "GRADED",
    /**
     * UNSPECIFIED - Unknown / unspecified state.
     * Google Classroom: SUBMISSION_STATE_UNSPECIFIED
     * Canvas: not applicable
     */
    UNSPECIFIED = "UNSPECIFIED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function lmsSubmissionStateFromJSON(object: any): LmsSubmissionState;
export declare function lmsSubmissionStateToJSON(object: LmsSubmissionState): string;
export declare function lmsSubmissionStateToNumber(object: LmsSubmissionState): number;
export interface LmsCourse {
    id: string;
    name: string;
    section: string;
    url: string;
    provider: LmsProviderType;
}
export interface LmsCourseWork {
    lmsCourseWorkId: string;
    /** Provider course id */
    lmsCourseId: string;
    title?: string | undefined;
    description?: string | undefined;
    link?: string | undefined;
    attachments: Attachment[];
    creationTime?: Date | undefined;
    dueDate?: Date | undefined;
    /** Classroom: maxPoints, Canvas: points_possible */
    maxPoints?: number | undefined;
    workType?: LmsWorkType | undefined;
    provider: LmsProviderType;
    /** Store original LMS JSON */
    rawJson?: string | undefined;
}
export interface Attachment {
    url: string;
}
export interface LmsSubmission {
    /**
     * Unified submission ID across providers.
     * - Google Classroom: maps directly to StudentSubmission.id
     * - Canvas: Canvas does not always expose a distinct submission ID.
     *   Instead, a submission is usually identified by (assignment_id + student_id).
     *   For consistency, when ingesting Canvas data generate a synthetic ID:
     *     "canvas_{assignmentId}_{studentId}"
     *   Store provider raw_json so you can re-hydrate provider-specific identifiers if needed.
     */
    lmsSubmissionId: string;
    lmsCourseWorkId: string;
    lmsCourseId: string;
    /** Local user id (in BassemLabs) */
    studentId: ObjectId | undefined;
    /**
     * URL to view the submission in the LMS web UI.
     * - Google Classroom: maps to StudentSubmission.alternateLink.
     * - Canvas: maps to Submission.preview_url or html_url.
     */
    submissionUrl: string;
    state: LmsSubmissionState;
    submittedAt?: Date | undefined;
    /**
     * - Google Classroom: inferred if submitted after dueDate.
     * - Canvas: late status provided.
     */
    late?: boolean | undefined;
    /** final grade */
    grade?: number | undefined;
    /** Grade/state history (normalized) */
    history: LmsHistory[];
    provider: LmsProviderType;
    /** Provider raw JSON (always keep for edge cases) */
    rawJson?: string | undefined;
}
export interface LmsHistory {
    /** Who made the change (provider user id) */
    actorId: string;
    /** grade_change, state_change, comment, etc. */
    type: string;
    oldValue?: string | undefined;
    newValue?: string | undefined;
    timestamp?: Date | undefined;
    /** raw provider entry if present */
    rawEntry?: string | undefined;
}
export declare const LmsCourse: MessageFns<LmsCourse>;
export declare const LmsCourseWork: MessageFns<LmsCourseWork>;
export declare const Attachment: MessageFns<Attachment>;
export declare const LmsSubmission: MessageFns<LmsSubmission>;
export declare const LmsHistory: MessageFns<LmsHistory>;
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
