import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { UserType } from "../utils/user_type";
import { FeedbackFlowKey, FeedbackPrompt } from "./flow_feedback";
export declare const protobufPackage = "user_service";
export interface EvaluateFeedbackPromptRequest {
    context: RequestContext | undefined;
    flow_key?: FeedbackFlowKey | undefined;
}
export interface EvaluateFeedbackPromptResponse {
    prompt?: FeedbackPrompt | undefined;
}
export interface SubmitFeedbackResponseRequest {
    context: RequestContext | undefined;
    exposure_id: ObjectId | undefined;
    rating?: number | undefined;
    comment?: string | undefined;
}
export interface DismissFeedbackPromptRequest {
    context: RequestContext | undefined;
    exposure_id: ObjectId | undefined;
}
export interface CreateFeedbackCampaignRequest {
    context: RequestContext | undefined;
    flow_key?: FeedbackFlowKey | undefined;
    question?: string | undefined;
    audience_user_types: UserType[];
    organization_ids: ObjectId[];
    sample_rate_percent?: number | undefined;
}
export interface UpdateFeedbackCampaignRequest {
    context: RequestContext | undefined;
    campaign_id: ObjectId | undefined;
    question?: string | undefined;
    is_active?: boolean | undefined;
    audience_user_types: UserType[];
    organization_ids: ObjectId[];
    sample_rate_percent?: number | undefined;
}
export interface ArchiveFeedbackCampaignRequest {
    context: RequestContext | undefined;
    campaign_id: ObjectId | undefined;
}
export interface ListFeedbackCampaignsRequest {
    context: RequestContext | undefined;
    flow_key?: FeedbackFlowKey | undefined;
    include_archived?: boolean | undefined;
}
export interface ListFeedbackResponsesRequest {
    context: RequestContext | undefined;
    campaign_id: ObjectId | undefined;
}
export declare const EvaluateFeedbackPromptRequest: MessageFns<EvaluateFeedbackPromptRequest>;
export declare const EvaluateFeedbackPromptResponse: MessageFns<EvaluateFeedbackPromptResponse>;
export declare const SubmitFeedbackResponseRequest: MessageFns<SubmitFeedbackResponseRequest>;
export declare const DismissFeedbackPromptRequest: MessageFns<DismissFeedbackPromptRequest>;
export declare const CreateFeedbackCampaignRequest: MessageFns<CreateFeedbackCampaignRequest>;
export declare const UpdateFeedbackCampaignRequest: MessageFns<UpdateFeedbackCampaignRequest>;
export declare const ArchiveFeedbackCampaignRequest: MessageFns<ArchiveFeedbackCampaignRequest>;
export declare const ListFeedbackCampaignsRequest: MessageFns<ListFeedbackCampaignsRequest>;
export declare const ListFeedbackResponsesRequest: MessageFns<ListFeedbackResponsesRequest>;
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
