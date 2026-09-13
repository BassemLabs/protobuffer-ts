import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { NotificationType } from "../utils/notification_type";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { BroadcastListScope, CommunicationFilters, CommunicationTarget } from "./communication";
export declare const protobufPackage = "user_service";
export interface PreviewCommunicationRequest {
    context: RequestContext | undefined;
    filters: CommunicationFilters | undefined;
    channels: NotificationType[];
    page?: number | undefined;
    per_page?: number | undefined;
    search?: string | undefined;
}
export interface SendCommunicationRequest {
    context: RequestContext | undefined;
    filters: CommunicationFilters | undefined;
    channels: NotificationType[];
    subject?: string | undefined;
    body?: string | undefined;
    attachment_ids: ObjectId[];
}
export interface UploadCommunicationAttachmentRequest {
    context: RequestContext | undefined;
    file_name?: string | undefined;
    content_type?: string | undefined;
    file_content?: Uint8Array | undefined;
}
export interface DeleteCommunicationAttachmentRequest {
    context: RequestContext | undefined;
    attachment_id: ObjectId | undefined;
}
export interface GetCommunicationAttachmentDownloadUrlRequest {
    context: RequestContext | undefined;
    attachment_id: ObjectId | undefined;
}
export interface RedeemCommunicationAttachmentRequest {
    download_key?: string | undefined;
}
export interface CommunicationAttachmentDownload {
    download_url?: string | undefined;
}
export interface GetBroadcastsListRequest {
    context: RequestContext | undefined;
    per_page?: number | undefined;
    page?: number | undefined;
    scope?: BroadcastListScope | undefined;
}
export interface GetBroadcastRequest {
    context: RequestContext | undefined;
    broadcast_id: ObjectId | undefined;
}
export interface GetRecipientsListRequest {
    context: RequestContext | undefined;
    broadcast_id: ObjectId | undefined;
}
export interface ResolveTargetsRequest {
    context: RequestContext | undefined;
    filters: CommunicationFilters | undefined;
}
export interface ResolveTargetsResponse {
    targets: CommunicationTarget[];
}
export declare const PreviewCommunicationRequest: MessageFns<PreviewCommunicationRequest>;
export declare const SendCommunicationRequest: MessageFns<SendCommunicationRequest>;
export declare const UploadCommunicationAttachmentRequest: MessageFns<UploadCommunicationAttachmentRequest>;
export declare const DeleteCommunicationAttachmentRequest: MessageFns<DeleteCommunicationAttachmentRequest>;
export declare const GetCommunicationAttachmentDownloadUrlRequest: MessageFns<GetCommunicationAttachmentDownloadUrlRequest>;
export declare const RedeemCommunicationAttachmentRequest: MessageFns<RedeemCommunicationAttachmentRequest>;
export declare const CommunicationAttachmentDownload: MessageFns<CommunicationAttachmentDownload>;
export declare const GetBroadcastsListRequest: MessageFns<GetBroadcastsListRequest>;
export declare const GetBroadcastRequest: MessageFns<GetBroadcastRequest>;
export declare const GetRecipientsListRequest: MessageFns<GetRecipientsListRequest>;
export declare const ResolveTargetsRequest: MessageFns<ResolveTargetsRequest>;
export declare const ResolveTargetsResponse: MessageFns<ResolveTargetsResponse>;
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
