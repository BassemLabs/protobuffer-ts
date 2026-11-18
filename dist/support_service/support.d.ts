import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { UserType } from "../utils/user_type";
export declare const protobufPackage = "support_service";
export declare enum SupportStatus {
    SUPPORT_RECEIVED = "SUPPORT_RECEIVED",
    SUPPORT_IN_PROGRESS = "SUPPORT_IN_PROGRESS",
    SUPPORT_WAITING = "SUPPORT_WAITING",
    SUPPORT_RESOLVED = "SUPPORT_RESOLVED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function supportStatusFromJSON(object: any): SupportStatus;
export declare function supportStatusToJSON(object: SupportStatus): string;
export declare function supportStatusToNumber(object: SupportStatus): number;
export declare enum SupportPriority {
    SUPPORT_NORMAL = "SUPPORT_NORMAL",
    SUPPORT_HIGH = "SUPPORT_HIGH",
    SUPPORT_URGENT = "SUPPORT_URGENT",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function supportPriorityFromJSON(object: any): SupportPriority;
export declare function supportPriorityToJSON(object: SupportPriority): string;
export declare function supportPriorityToNumber(object: SupportPriority): number;
export declare enum SupportCategory {
    SUPPORT_PROBLEM = "SUPPORT_PROBLEM",
    SUPPORT_QUESTION = "SUPPORT_QUESTION",
    SUPPORT_IDEA = "SUPPORT_IDEA",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function supportCategoryFromJSON(object: any): SupportCategory;
export declare function supportCategoryToJSON(object: SupportCategory): string;
export declare function supportCategoryToNumber(object: SupportCategory): number;
export declare enum SupportMessageKind {
    SUPPORT_PUBLIC_REPLY = "SUPPORT_PUBLIC_REPLY",
    SUPPORT_INTERNAL_NOTE = "SUPPORT_INTERNAL_NOTE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function supportMessageKindFromJSON(object: any): SupportMessageKind;
export declare function supportMessageKindToJSON(object: SupportMessageKind): string;
export declare function supportMessageKindToNumber(object: SupportMessageKind): number;
export declare enum SupportSource {
    SUPPORT_PORTAL = "SUPPORT_PORTAL",
    SUPPORT_EMAIL = "SUPPORT_EMAIL",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function supportSourceFromJSON(object: any): SupportSource;
export declare function supportSourceToJSON(object: SupportSource): string;
export declare function supportSourceToNumber(object: SupportSource): number;
export declare enum SupportAudience {
    SUPPORT_SCHOOL_STAFF = "SUPPORT_SCHOOL_STAFF",
    SUPPORT_PRIVATE_CONTACT = "SUPPORT_PRIVATE_CONTACT",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function supportAudienceFromJSON(object: any): SupportAudience;
export declare function supportAudienceToJSON(object: SupportAudience): string;
export declare function supportAudienceToNumber(object: SupportAudience): number;
export interface SupportIdentity {
    user_id?: ObjectId | undefined;
    name?: string | undefined;
    email?: string | undefined;
    user_type?: UserType | undefined;
}
export interface SupportOrganizationMatch {
    organization: ObjectId | undefined;
    name?: string | undefined;
    user_type?: UserType | undefined;
}
export interface SupportAttachment {
    id: ObjectId | undefined;
    file_name?: string | undefined;
    content_type?: string | undefined;
    file_size_bytes?: number | undefined;
}
export interface SupportMessage {
    id: ObjectId | undefined;
    author: SupportIdentity | undefined;
    kind?: SupportMessageKind | undefined;
    body?: string | undefined;
    body_html?: string | undefined;
    attachments: SupportAttachment[];
    created_at: Date | undefined;
    sequence?: number | undefined;
}
export interface SupportTicket {
    id: ObjectId | undefined;
    organization?: ObjectId | undefined;
    organization_name?: string | undefined;
    requester: SupportIdentity | undefined;
    subject?: string | undefined;
    category?: SupportCategory | undefined;
    area?: string | undefined;
    status?: SupportStatus | undefined;
    priority?: SupportPriority | undefined;
    assignee?: SupportIdentity | undefined;
    source?: SupportSource | undefined;
    audience?: SupportAudience | undefined;
    created_at: Date | undefined;
    updated_at: Date | undefined;
    preview?: string | undefined;
    unread?: boolean | undefined;
    can_reply?: boolean | undefined;
    revision?: number | undefined;
    organization_matches: SupportOrganizationMatch[];
    assignment_error?: string | undefined;
}
export interface SupportTicketDetails {
    ticket: SupportTicket | undefined;
    messages: SupportMessage[];
    next_before_sequence?: number | undefined;
    deliveries: SupportDelivery[];
}
export interface SupportTicketList {
    tickets: SupportTicket[];
    total?: number | undefined;
}
export interface SupportContext {
    viewer: SupportIdentity | undefined;
    staff?: boolean | undefined;
    can_read_school?: boolean | undefined;
    assignees: SupportIdentity[];
    organizations: SupportOrganizationOption[];
}
export interface SupportAttachmentDownload {
    download_url?: string | undefined;
}
export interface SupportEmailJob {
    id?: string | undefined;
    recipient?: string | undefined;
    subject?: string | undefined;
    body?: string | undefined;
    body_html?: string | undefined;
    reply_to?: string | undefined;
    in_reply_to?: string | undefined;
    lease_token?: string | undefined;
    attachments: SupportAttachment[];
    files: SupportEmailAttachment[];
}
export interface SupportEmailJobList {
    jobs: SupportEmailJob[];
}
export interface SupportDelivery {
    id?: string | undefined;
    recipient?: string | undefined;
    status?: string | undefined;
    failure?: string | undefined;
}
export interface SupportEmailAttachment {
    file_name?: string | undefined;
    content_type?: string | undefined;
    content?: Uint8Array | undefined;
}
export interface SupportOrganizationOption {
    organization: ObjectId | undefined;
    name?: string | undefined;
}
export declare const SupportIdentity: MessageFns<SupportIdentity>;
export declare const SupportOrganizationMatch: MessageFns<SupportOrganizationMatch>;
export declare const SupportAttachment: MessageFns<SupportAttachment>;
export declare const SupportMessage: MessageFns<SupportMessage>;
export declare const SupportTicket: MessageFns<SupportTicket>;
export declare const SupportTicketDetails: MessageFns<SupportTicketDetails>;
export declare const SupportTicketList: MessageFns<SupportTicketList>;
export declare const SupportContext: MessageFns<SupportContext>;
export declare const SupportAttachmentDownload: MessageFns<SupportAttachmentDownload>;
export declare const SupportEmailJob: MessageFns<SupportEmailJob>;
export declare const SupportEmailJobList: MessageFns<SupportEmailJobList>;
export declare const SupportDelivery: MessageFns<SupportDelivery>;
export declare const SupportEmailAttachment: MessageFns<SupportEmailAttachment>;
export declare const SupportOrganizationOption: MessageFns<SupportOrganizationOption>;
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
