import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { StaffPermission } from "../user_service/user_role";
import { ObjectId } from "./object_id";
import { UserType } from "./user_type";
export declare const protobufPackage = "utils";
export declare enum ServiceContext {
    AutoPaymentScheduling = "AutoPaymentScheduling",
    AutoPaymentConsumer = "AutoPaymentConsumer",
    OrganizationInvoices = "OrganizationInvoices",
    StagingDataSyncJob = "StagingDataSyncJob",
    NotificationService = "NotificationService",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function serviceContextFromJSON(object: any): ServiceContext;
export declare function serviceContextToJSON(object: ServiceContext): string;
export declare function serviceContextToNumber(object: ServiceContext): number;
export interface RequestContext {
    user_context: UserContext | undefined;
    is_testing?: boolean | undefined;
    service_based_context_name?: ServiceContext | undefined;
    /** bypass permissions within the organization in the context */
    org_super_permission?: boolean | undefined;
    /** bypass permissions across organizations (dangerous; use sparingly) */
    global_super_permission?: boolean | undefined;
}
export interface UserContext {
    user_id: ObjectId | undefined;
    user_type?: UserType | undefined;
    user_auth_token?: string | undefined;
    organization_id?: ObjectId | undefined;
    full_name?: string | undefined;
    firebase_token?: string | undefined;
    exp?: number | undefined;
    trace_id?: string | undefined;
    /** Exactly one of these contexts should be set based on user_type. */
    parent_context?: ParentContext | undefined;
    student_context?: StudentContext | undefined;
    teacher_context?: TeacherContext | undefined;
}
/**
 * A homeroom-subject relationship for teacher context.
 * `subject_id` is the class identifier for the linked subject scope (typically a course id).
 */
export interface HomeroomSubjectId {
    homeroom_id: ObjectId | undefined;
    subject_id: ObjectId | undefined;
}
export interface TeacherContext {
    /** Cached org active school year to avoid repeated org fetches. */
    active_school_year_id: ObjectId | undefined;
    student_ids: ObjectId[];
    course_ids: ObjectId[];
    homeroom_ids: ObjectId[];
    homerooms_subject_ids: HomeroomSubjectId[];
    roles: StaffPermission[];
}
export interface StudentContext {
    /** Cached org active school year to avoid repeated org fetches. */
    active_school_year_id: ObjectId | undefined;
    parent_ids: ObjectId[];
    family_ids: ObjectId[];
    course_ids: ObjectId[];
    homeroom_ids: ObjectId[];
    teacher_basic_info_ids: ObjectId[];
}
export interface ParentContext {
    /** Cached org active school year to avoid repeated org fetches. */
    active_school_year_id: ObjectId | undefined;
    student_ids: ObjectId[];
    parent_ids: ObjectId[];
    family_ids: ObjectId[];
    course_ids: ObjectId[];
    homeroom_ids: ObjectId[];
    teacher_basic_info_ids: ObjectId[];
}
export declare const RequestContext: MessageFns<RequestContext>;
export declare const UserContext: MessageFns<UserContext>;
export declare const HomeroomSubjectId: MessageFns<HomeroomSubjectId>;
export declare const TeacherContext: MessageFns<TeacherContext>;
export declare const StudentContext: MessageFns<StudentContext>;
export declare const ParentContext: MessageFns<ParentContext>;
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
