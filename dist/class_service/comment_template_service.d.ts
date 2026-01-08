import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { CommentTemplate } from "./comment_template";
export declare const protobufPackage = "class_service.comment_template_service";
export interface GetCommentTemplateRequest {
    context: RequestContext | undefined;
    comment_template_id: ObjectId | undefined;
}
export interface ListCommentTemplatesRequest {
    context: RequestContext | undefined;
}
export interface ListCommentTemplatesResponse {
    comment_templates: CommentTemplate[];
}
export interface CreateCommentTemplateRequest {
    context: RequestContext | undefined;
    title: string;
    comment: string;
}
export interface UpdateCommentTemplateRequest {
    context: RequestContext | undefined;
    comment_template_id: ObjectId | undefined;
    title: string;
    comment: string;
}
export interface DeleteCommentTemplateRequest {
    context: RequestContext | undefined;
    comment_template_id: ObjectId | undefined;
}
export interface DeleteCommentTemplateResponse {
    success: boolean;
}
export declare const GetCommentTemplateRequest: MessageFns<GetCommentTemplateRequest>;
export declare const ListCommentTemplatesRequest: MessageFns<ListCommentTemplatesRequest>;
export declare const ListCommentTemplatesResponse: MessageFns<ListCommentTemplatesResponse>;
export declare const CreateCommentTemplateRequest: MessageFns<CreateCommentTemplateRequest>;
export declare const UpdateCommentTemplateRequest: MessageFns<UpdateCommentTemplateRequest>;
export declare const DeleteCommentTemplateRequest: MessageFns<DeleteCommentTemplateRequest>;
export declare const DeleteCommentTemplateResponse: MessageFns<DeleteCommentTemplateResponse>;
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
