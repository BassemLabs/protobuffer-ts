import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../../utils/object_id";
import { RequestContext } from "../../utils/request_context";
export declare const protobufPackage = "class_service.report_template";
export interface ReportTemplateAsset {
    id: ObjectId | undefined;
    file_name?: string | undefined;
    content_type?: string | undefined;
    size_bytes?: number | undefined;
}
export interface UploadReportTemplateAssetRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    file_name?: string | undefined;
    content_type?: string | undefined;
    content?: Uint8Array | undefined;
}
export interface ReportTemplateAssetResponse {
    asset: ReportTemplateAsset | undefined;
    url?: string | undefined;
}
export interface GetReportTemplateAssetRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
    asset_id: ObjectId | undefined;
}
export interface ListReportTemplateAssetsRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
}
export interface ListReportTemplateAssetsResponse {
    assets: ReportTemplateAsset[];
}
export declare const ReportTemplateAsset: MessageFns<ReportTemplateAsset>;
export declare const UploadReportTemplateAssetRequest: MessageFns<UploadReportTemplateAssetRequest>;
export declare const ReportTemplateAssetResponse: MessageFns<ReportTemplateAssetResponse>;
export declare const GetReportTemplateAssetRequest: MessageFns<GetReportTemplateAssetRequest>;
export declare const ListReportTemplateAssetsRequest: MessageFns<ListReportTemplateAssetsRequest>;
export declare const ListReportTemplateAssetsResponse: MessageFns<ListReportTemplateAssetsResponse>;
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
