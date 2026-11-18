import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { SupportCategory, SupportEmailAttachment, SupportMessageKind, SupportPriority, SupportStatus } from "./support";
export declare const protobufPackage = "support_service";
export interface SupportContextRequest {
    context: RequestContext | undefined;
}
export interface ListSupportTicketsRequest {
    context: RequestContext | undefined;
    page?: number | undefined;
    per_page?: number | undefined;
    search?: string | undefined;
    status?: SupportStatus | undefined;
    organization?: ObjectId | undefined;
    mine?: boolean | undefined;
    unassigned?: boolean | undefined;
    unread_only?: boolean | undefined;
}
export interface GetSupportTicketRequest {
    context: RequestContext | undefined;
    ticket_id: ObjectId | undefined;
    before_sequence?: number | undefined;
    per_page?: number | undefined;
}
export interface CreateSupportTicketRequest {
    context: RequestContext | undefined;
    operation_id?: string | undefined;
    subject?: string | undefined;
    category?: SupportCategory | undefined;
    area?: string | undefined;
    body?: string | undefined;
    body_html?: string | undefined;
    attachment_ids: ObjectId[];
}
export interface SendSupportMessageRequest {
    context: RequestContext | undefined;
    ticket_id: ObjectId | undefined;
    operation_id?: string | undefined;
    body?: string | undefined;
    body_html?: string | undefined;
    kind?: SupportMessageKind | undefined;
    attachment_ids: ObjectId[];
}
export interface UpdateSupportTicketRequest {
    context: RequestContext | undefined;
    ticket_id: ObjectId | undefined;
    operation_id?: string | undefined;
    expected_revision?: number | undefined;
    status?: SupportStatus | undefined;
    priority?: SupportPriority | undefined;
    /** Empty means deliberately unassigned; absent means unchanged. */
    assignee_id?: string | undefined;
}
export interface MarkSupportTicketReadRequest {
    context: RequestContext | undefined;
    ticket_id: ObjectId | undefined;
    sequence?: number | undefined;
}
export interface UploadSupportAttachmentRequest {
    context: RequestContext | undefined;
    operation_id?: string | undefined;
    file_name?: string | undefined;
    content_type?: string | undefined;
    content?: Uint8Array | undefined;
}
export interface DownloadSupportAttachmentRequest {
    context: RequestContext | undefined;
    attachment_id: ObjectId | undefined;
}
export interface LinkSupportOrganizationRequest {
    context: RequestContext | undefined;
    ticket_id: ObjectId | undefined;
    organization?: ObjectId | undefined;
    expected_revision?: number | undefined;
    operation_id?: string | undefined;
    confirm_school_visibility?: boolean | undefined;
}
export interface AddSupportParticipantRequest {
    context: RequestContext | undefined;
    ticket_id: ObjectId | undefined;
    email?: string | undefined;
    operation_id?: string | undefined;
}
export interface IngestSupportEmailRequest {
    provider_receipt_id?: string | undefined;
    message_id?: string | undefined;
    sender_email?: string | undefined;
    sender_name?: string | undefined;
    subject?: string | undefined;
    body?: string | undefined;
    body_html?: string | undefined;
    reply_key?: string | undefined;
    sender_verified?: boolean | undefined;
    automated?: boolean | undefined;
    received_at: Date | undefined;
    attachments: SupportEmailAttachment[];
}
export interface LeaseSupportEmailJobsRequest {
    limit?: number | undefined;
}
export interface CompleteSupportEmailJobRequest {
    id?: string | undefined;
    lease_token?: string | undefined;
    provider_message_id?: string | undefined;
    failure?: string | undefined;
    permanent_failure?: boolean | undefined;
    acceptance_uncertain?: boolean | undefined;
}
export interface SetSupportOncallRequest {
    staff_id?: ObjectId | undefined;
    observed_at: Date | undefined;
    valid_until: Date | undefined;
    failure?: string | undefined;
}
export interface RetrySupportEmailJobRequest {
    context: RequestContext | undefined;
    id?: string | undefined;
    operation_id?: string | undefined;
    confirm_possible_duplicate?: boolean | undefined;
}
export declare const SupportContextRequest: MessageFns<SupportContextRequest>;
export declare const ListSupportTicketsRequest: MessageFns<ListSupportTicketsRequest>;
export declare const GetSupportTicketRequest: MessageFns<GetSupportTicketRequest>;
export declare const CreateSupportTicketRequest: MessageFns<CreateSupportTicketRequest>;
export declare const SendSupportMessageRequest: MessageFns<SendSupportMessageRequest>;
export declare const UpdateSupportTicketRequest: MessageFns<UpdateSupportTicketRequest>;
export declare const MarkSupportTicketReadRequest: MessageFns<MarkSupportTicketReadRequest>;
export declare const UploadSupportAttachmentRequest: MessageFns<UploadSupportAttachmentRequest>;
export declare const DownloadSupportAttachmentRequest: MessageFns<DownloadSupportAttachmentRequest>;
export declare const LinkSupportOrganizationRequest: MessageFns<LinkSupportOrganizationRequest>;
export declare const AddSupportParticipantRequest: MessageFns<AddSupportParticipantRequest>;
export declare const IngestSupportEmailRequest: MessageFns<IngestSupportEmailRequest>;
export declare const LeaseSupportEmailJobsRequest: MessageFns<LeaseSupportEmailJobsRequest>;
export declare const CompleteSupportEmailJobRequest: MessageFns<CompleteSupportEmailJobRequest>;
export declare const SetSupportOncallRequest: MessageFns<SetSupportOncallRequest>;
export declare const RetrySupportEmailJobRequest: MessageFns<RetrySupportEmailJobRequest>;
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
