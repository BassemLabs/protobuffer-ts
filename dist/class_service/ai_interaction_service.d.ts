import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { AiInteractionRecord, AiInteractionRecordStatus } from "./ai_interaction_record";
export declare const protobufPackage = "class_service.ai_interaction_service";
export interface GetAiInteractionRecordRequest {
    context: RequestContext | undefined;
    ai_interaction_record_id: ObjectId | undefined;
}
export interface GetAiInteractionRecordResponse {
    ai_interaction_record: AiInteractionRecord | undefined;
}
export interface ListAiInteractionRecordsRequest {
    context: RequestContext | undefined;
    per_page?: number | undefined;
    page?: number | undefined;
    /** Searches in response field */
    name_search?: string | undefined;
}
export interface ListAiInteractionRecordsResponse {
    ai_interaction_record: AiInteractionRecord[];
    ai_interaction_record_count: number;
}
export interface PreprocessingRequest {
    context: RequestContext | undefined;
    prompt: string;
}
export interface PreprocessingResponse {
    ai_interaction_record: AiInteractionRecord | undefined;
}
export interface PostprocessingRequest {
    context: RequestContext | undefined;
    ai_interaction_record_id: ObjectId | undefined;
    response: string;
    status: AiInteractionRecordStatus;
}
export interface PostprocessingResponse {
    ai_interaction_record: AiInteractionRecord | undefined;
}
export declare const GetAiInteractionRecordRequest: MessageFns<GetAiInteractionRecordRequest>;
export declare const GetAiInteractionRecordResponse: MessageFns<GetAiInteractionRecordResponse>;
export declare const ListAiInteractionRecordsRequest: MessageFns<ListAiInteractionRecordsRequest>;
export declare const ListAiInteractionRecordsResponse: MessageFns<ListAiInteractionRecordsResponse>;
export declare const PreprocessingRequest: MessageFns<PreprocessingRequest>;
export declare const PreprocessingResponse: MessageFns<PreprocessingResponse>;
export declare const PostprocessingRequest: MessageFns<PostprocessingRequest>;
export declare const PostprocessingResponse: MessageFns<PostprocessingResponse>;
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
