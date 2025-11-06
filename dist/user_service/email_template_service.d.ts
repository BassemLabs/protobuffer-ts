import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { UserType } from "../utils/user_type";
import { EmailTemplate, EmailTemplateKey } from "./email_template";
export declare const protobufPackage = "user_service";
export interface GetByTemplateKeyRequest {
    context: RequestContext | undefined;
    templateKey: EmailTemplateKey;
}
export interface ListTemplatesRequest {
    context: RequestContext | undefined;
}
export interface ListTemplatesResponse {
    templates: EmailTemplate[];
}
export interface UpdateOrCreateRequest {
    context: RequestContext | undefined;
    templateKey: EmailTemplateKey;
    title: string;
    header: string;
    body: string;
    footer: string;
}
export interface CreateDefaultTemplatesForOrganizationRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
}
export interface CreateDefaultTemplatesForOrganizationResponse {
    success: boolean;
}
export interface GetSupportedPlaceholdersRequest {
    context: RequestContext | undefined;
    templateKey: EmailTemplateKey;
}
export interface GetSupportedPlaceholdersResponse {
    placeholders: string[];
}
export interface GetAllStaticTemplateBodiesRequest {
    context: RequestContext | undefined;
}
export interface GetAllStaticTemplateBodiesResponse {
    staticBodies: StaticTemplateBodyEntry[];
}
export interface StaticTemplateBodyEntry {
    templateKey: EmailTemplateKey;
    body: string;
}
export interface Replacement {
    placeholder: string;
    value: string;
}
export interface SendEmailByTemplateKeyRequest {
    context: RequestContext | undefined;
    templateKey: EmailTemplateKey;
    replacements: Replacement[];
    recipientUserType: UserType;
    recipientUserId: ObjectId | undefined;
    recipientEmail: string;
    dateToSend?: number | undefined;
}
export interface SendEmailWithTemplateRequest {
    context: RequestContext | undefined;
    title: string;
    header: string;
    body: string;
    footer: string;
    replacements: Replacement[];
    recipientUserType: UserType;
    recipientUserId: ObjectId | undefined;
    recipientEmail: string;
    dateToSend?: number | undefined;
}
export interface SendEmailResponse {
    success: boolean;
    errorMessage?: string | undefined;
}
export declare const GetByTemplateKeyRequest: MessageFns<GetByTemplateKeyRequest>;
export declare const ListTemplatesRequest: MessageFns<ListTemplatesRequest>;
export declare const ListTemplatesResponse: MessageFns<ListTemplatesResponse>;
export declare const UpdateOrCreateRequest: MessageFns<UpdateOrCreateRequest>;
export declare const CreateDefaultTemplatesForOrganizationRequest: MessageFns<CreateDefaultTemplatesForOrganizationRequest>;
export declare const CreateDefaultTemplatesForOrganizationResponse: MessageFns<CreateDefaultTemplatesForOrganizationResponse>;
export declare const GetSupportedPlaceholdersRequest: MessageFns<GetSupportedPlaceholdersRequest>;
export declare const GetSupportedPlaceholdersResponse: MessageFns<GetSupportedPlaceholdersResponse>;
export declare const GetAllStaticTemplateBodiesRequest: MessageFns<GetAllStaticTemplateBodiesRequest>;
export declare const GetAllStaticTemplateBodiesResponse: MessageFns<GetAllStaticTemplateBodiesResponse>;
export declare const StaticTemplateBodyEntry: MessageFns<StaticTemplateBodyEntry>;
export declare const Replacement: MessageFns<Replacement>;
export declare const SendEmailByTemplateKeyRequest: MessageFns<SendEmailByTemplateKeyRequest>;
export declare const SendEmailWithTemplateRequest: MessageFns<SendEmailWithTemplateRequest>;
export declare const SendEmailResponse: MessageFns<SendEmailResponse>;
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
