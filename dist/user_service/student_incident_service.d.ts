import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { IncidentReport, IncidentReportInput } from "./student_incident";
export declare const protobufPackage = "user_service";
export interface CreateIncidentReportRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    report: IncidentReportInput | undefined;
}
export interface UpdateIncidentReportRequest {
    context: RequestContext | undefined;
    incident_id: ObjectId | undefined;
    report: IncidentReportInput | undefined;
}
export interface ListIncidentReportsRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
}
export interface ListIncidentReportsResponse {
    incidents: IncidentReport[];
}
export declare const CreateIncidentReportRequest: MessageFns<CreateIncidentReportRequest>;
export declare const UpdateIncidentReportRequest: MessageFns<UpdateIncidentReportRequest>;
export declare const ListIncidentReportsRequest: MessageFns<ListIncidentReportsRequest>;
export declare const ListIncidentReportsResponse: MessageFns<ListIncidentReportsResponse>;
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
