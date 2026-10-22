import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../../utils/object_id";
import { ReportTemplateDesign } from "./report_template_design";
export declare const protobufPackage = "class_service.report_template";
export interface ReportTemplate {
    id: ObjectId | undefined;
    name?: string | undefined;
    design: ReportTemplateDesign | undefined;
    version_id?: ObjectId | undefined;
    version_number?: number | undefined;
}
export interface ReportTemplateVersionMetadata {
    version_id: ObjectId | undefined;
    version_number?: number | undefined;
    name?: string | undefined;
}
export declare const ReportTemplate: MessageFns<ReportTemplate>;
export declare const ReportTemplateVersionMetadata: MessageFns<ReportTemplateVersionMetadata>;
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
