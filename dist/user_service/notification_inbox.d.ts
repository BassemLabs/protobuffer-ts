import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { CommunicationAttachment } from "./communication";
export declare const protobufPackage = "user_service";
export interface InboxNotification {
    id: ObjectId | undefined;
    title?: string | undefined;
    body?: string | undefined;
    read_at?: Date | undefined;
    deep_link?: string | undefined;
    student_id?: ObjectId | undefined;
    student_name?: string | undefined;
    attachments: CommunicationAttachment[];
    available_at: Date | undefined;
}
export interface ActivateInboxNotificationRequest {
    context: RequestContext | undefined;
    notification_id: ObjectId | undefined;
    student_id?: ObjectId | undefined;
}
export interface ListInboxNotificationsRequest {
    context: RequestContext | undefined;
    page?: number | undefined;
    per_page?: number | undefined;
    unread_only?: boolean | undefined;
}
export interface ListInboxNotificationsResponse {
    notifications: InboxNotification[];
    total?: number | undefined;
    unread_count?: number | undefined;
}
export interface CountUnreadInboxNotificationsRequest {
    context: RequestContext | undefined;
}
export interface CountUnreadInboxNotificationsResponse {
    unread_count?: number | undefined;
}
export interface GetInboxNotificationRequest {
    context: RequestContext | undefined;
    notification_id: ObjectId | undefined;
}
export interface SetInboxNotificationReadStateRequest {
    context: RequestContext | undefined;
    notification_id: ObjectId | undefined;
    read?: boolean | undefined;
}
export interface MarkAllInboxNotificationsReadRequest {
    context: RequestContext | undefined;
}
export interface MarkAllInboxNotificationsReadResponse {
    updated_count?: number | undefined;
}
export interface GetInboxNotificationAttachmentDownloadUrlRequest {
    context: RequestContext | undefined;
    notification_id: ObjectId | undefined;
    attachment_id: ObjectId | undefined;
}
export interface GetInboxNotificationAttachmentDownloadUrlResponse {
    download_url?: string | undefined;
}
export declare const InboxNotification: MessageFns<InboxNotification>;
export declare const ActivateInboxNotificationRequest: MessageFns<ActivateInboxNotificationRequest>;
export declare const ListInboxNotificationsRequest: MessageFns<ListInboxNotificationsRequest>;
export declare const ListInboxNotificationsResponse: MessageFns<ListInboxNotificationsResponse>;
export declare const CountUnreadInboxNotificationsRequest: MessageFns<CountUnreadInboxNotificationsRequest>;
export declare const CountUnreadInboxNotificationsResponse: MessageFns<CountUnreadInboxNotificationsResponse>;
export declare const GetInboxNotificationRequest: MessageFns<GetInboxNotificationRequest>;
export declare const SetInboxNotificationReadStateRequest: MessageFns<SetInboxNotificationReadStateRequest>;
export declare const MarkAllInboxNotificationsReadRequest: MessageFns<MarkAllInboxNotificationsReadRequest>;
export declare const MarkAllInboxNotificationsReadResponse: MessageFns<MarkAllInboxNotificationsReadResponse>;
export declare const GetInboxNotificationAttachmentDownloadUrlRequest: MessageFns<GetInboxNotificationAttachmentDownloadUrlRequest>;
export declare const GetInboxNotificationAttachmentDownloadUrlResponse: MessageFns<GetInboxNotificationAttachmentDownloadUrlResponse>;
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
