import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { UserType } from "../utils/user_type";
export declare const protobufPackage = "user_service";
export declare enum EmailTemplateKey {
    REJECTION_EMAIL = "REJECTION_EMAIL",
    ENROLLMENT_CONFIRMATION_EMAIL = "ENROLLMENT_CONFIRMATION_EMAIL",
    APPROVAL_EMAIL = "APPROVAL_EMAIL",
    INTERVIEW_EMAIL = "INTERVIEW_EMAIL",
    FIELD_GROUP_REJECTION_EMAIL = "FIELD_GROUP_REJECTION_EMAIL",
    WITHDRAW_EMAIL = "WITHDRAW_EMAIL",
    MOVE_STUDENT_ADMISSION_YEAR_EMAIL = "MOVE_STUDENT_ADMISSION_YEAR_EMAIL",
    REREGISTRATION_INVITATION_EMAIL = "REREGISTRATION_INVITATION_EMAIL",
    NEW_TEACHER_INVITATION_EMAIL = "NEW_TEACHER_INVITATION_EMAIL",
    /** ATTENDANCE_SIGN_OUT_EMAIL - Attendance notification templates */
    ATTENDANCE_SIGN_OUT_EMAIL = "ATTENDANCE_SIGN_OUT_EMAIL",
    ATTENDANCE_LATE_STATUS_EMAIL = "ATTENDANCE_LATE_STATUS_EMAIL",
    ATTENDANCE_ABSENCE_STATUS_EMAIL = "ATTENDANCE_ABSENCE_STATUS_EMAIL",
    ATTENDANCE_LATE_DISMISSAL_EMAIL = "ATTENDANCE_LATE_DISMISSAL_EMAIL",
    /** REPORT_CARD_CHANGES_REQUESTED_EMAIL - Report card templates */
    REPORT_CARD_CHANGES_REQUESTED_EMAIL = "REPORT_CARD_CHANGES_REQUESTED_EMAIL",
    REPORT_CARD_PUBLISHED_EMAIL = "REPORT_CARD_PUBLISHED_EMAIL",
    /** AUTO_PAY_RETRY_SCHEDULED_EMAIL - Auto payment templates */
    AUTO_PAY_RETRY_SCHEDULED_EMAIL = "AUTO_PAY_RETRY_SCHEDULED_EMAIL",
    AUTO_PAY_PERMANENT_FAILURE_EMAIL = "AUTO_PAY_PERMANENT_FAILURE_EMAIL",
    /** INVOICE_CREATED_EMAIL - Invoice templates */
    INVOICE_CREATED_EMAIL = "INVOICE_CREATED_EMAIL",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function emailTemplateKeyFromJSON(object: any): EmailTemplateKey;
export declare function emailTemplateKeyToJSON(object: EmailTemplateKey): string;
export declare function emailTemplateKeyToNumber(object: EmailTemplateKey): number;
export interface EmailTemplate {
    id: ObjectId | undefined;
    organization_id: ObjectId | undefined;
    template_key: EmailTemplateKey;
    title: string;
    header: string;
    body: string;
    footer: string;
    receiver_user_type: UserType;
}
export declare const EmailTemplate: MessageFns<EmailTemplate>;
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
