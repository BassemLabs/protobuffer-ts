import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../../utils/object_id";
import { RequestContext } from "../../utils/request_context";
import { ReportTemplate, ReportTemplateVersionMetadata } from "./report_template";
import { ReportTemplateDesign } from "./report_template_design";
export declare const protobufPackage = "class_service.report_template";
export interface GetReportTemplateRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    report_template_id: ObjectId | undefined;
    version_id?: ObjectId | undefined;
}
export interface ListReportTemplatesRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
}
export interface ListReportTemplatesResponse {
    report_templates: ReportTemplate[];
}
export interface CreateReportTemplateRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    name?: string | undefined;
    design: ReportTemplateDesign | undefined;
}
export interface UpdateReportTemplateRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    report_template_id: ObjectId | undefined;
    name?: string | undefined;
    design: ReportTemplateDesign | undefined;
    expected_version_id: ObjectId | undefined;
}
export interface ListReportTemplateVersionsRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    report_template_id: ObjectId | undefined;
    /** Newest first; at most 100 revisions per response. */
    before_version_number?: number | undefined;
}
export interface ListReportTemplateVersionsResponse {
    versions: ReportTemplateVersionMetadata[];
}
export declare const GetReportTemplateRequest: MessageFns<GetReportTemplateRequest>;
export declare const ListReportTemplatesRequest: MessageFns<ListReportTemplatesRequest>;
export declare const ListReportTemplatesResponse: MessageFns<ListReportTemplatesResponse>;
export declare const CreateReportTemplateRequest: MessageFns<CreateReportTemplateRequest>;
export declare const UpdateReportTemplateRequest: MessageFns<UpdateReportTemplateRequest>;
export declare const ListReportTemplateVersionsRequest: MessageFns<ListReportTemplateVersionsRequest>;
export declare const ListReportTemplateVersionsResponse: MessageFns<ListReportTemplateVersionsResponse>;
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
