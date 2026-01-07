import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { NotificationType } from "../utils/notification_type";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { CommunicationFilters, CommunicationTarget } from "./communication";
export declare const protobufPackage = "user_service";
export interface PreviewCommunicationRequest {
    context: RequestContext | undefined;
    filters: CommunicationFilters | undefined;
    channels: NotificationType[];
}
export interface SendCommunicationRequest {
    context: RequestContext | undefined;
    filters: CommunicationFilters | undefined;
    channels: NotificationType[];
    subject: string;
    body: string;
}
export interface GetBroadcastsListRequest {
    context: RequestContext | undefined;
    per_page?: number | undefined;
    page?: number | undefined;
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
