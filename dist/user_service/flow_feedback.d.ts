import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { UserType } from "../utils/user_type";
export declare const protobufPackage = "user_service";
export declare enum FeedbackFlowKey {
    FEEDBACK_FLOW_KEY_UNSPECIFIED = "FEEDBACK_FLOW_KEY_UNSPECIFIED",
    PARENT_REQUIRED_ACTIONS_COMPLETED = "PARENT_REQUIRED_ACTIONS_COMPLETED",
    START_SCHOOL_YEAR_WIZARD_COMPLETED = "START_SCHOOL_YEAR_WIZARD_COMPLETED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function feedbackFlowKeyFromJSON(object: any): FeedbackFlowKey;
export declare function feedbackFlowKeyToJSON(object: FeedbackFlowKey): string;
export declare function feedbackFlowKeyToNumber(object: FeedbackFlowKey): number;
export interface FeedbackCampaign {
    id: ObjectId | undefined;
    flow_key?: FeedbackFlowKey | undefined;
    question?: string | undefined;
    is_active?: boolean | undefined;
    audience_user_types: UserType[];
    organization_ids: ObjectId[];
    sample_rate_percent?: number | undefined;
    created_at: Date | undefined;
    updated_at: Date | undefined;
}
export interface FeedbackPrompt {
    exposure_id: ObjectId | undefined;
    campaign_id: ObjectId | undefined;
    flow_key?: FeedbackFlowKey | undefined;
    question?: string | undefined;
}
export interface FeedbackExposure {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    campaign_id: ObjectId | undefined;
    user_id: ObjectId | undefined;
    user_type?: UserType | undefined;
    flow_key?: FeedbackFlowKey | undefined;
    shown_at: Date | undefined;
    dismissed_at?: Date | undefined;
    submitted_at?: Date | undefined;
}
export interface FeedbackResponse {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    campaign_id: ObjectId | undefined;
    exposure_id: ObjectId | undefined;
    user_id: ObjectId | undefined;
    user_type?: UserType | undefined;
    user_name?: string | undefined;
    flow_key?: FeedbackFlowKey | undefined;
    rating?: number | undefined;
    comment?: string | undefined;
    submitted_at: Date | undefined;
    organization_name?: string | undefined;
}
export interface FeedbackCampaignList {
    campaigns: FeedbackCampaign[];
}
export interface FeedbackResponseList {
    responses: FeedbackResponse[];
}
export declare const FeedbackCampaign: MessageFns<FeedbackCampaign>;
export declare const FeedbackPrompt: MessageFns<FeedbackPrompt>;
export declare const FeedbackExposure: MessageFns<FeedbackExposure>;
export declare const FeedbackResponse: MessageFns<FeedbackResponse>;
export declare const FeedbackCampaignList: MessageFns<FeedbackCampaignList>;
export declare const FeedbackResponseList: MessageFns<FeedbackResponseList>;
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
