import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { ReportLayout } from "./report_layout";
export declare const protobufPackage = "class_service.report_layout_service";
export interface GetByCourseRequest {
    context: RequestContext | undefined;
    courseId: ObjectId | undefined;
}
export interface GetByCoursesRequest {
    context: RequestContext | undefined;
    courseIds: ObjectId[];
}
export interface GetByCoursesResponse {
    layouts: CourseReportLayout[];
}
export interface CourseReportLayout {
    courseId: ObjectId | undefined;
    layout: ReportLayout | undefined;
}
export interface UpdateReportLayoutRequest {
    context: RequestContext | undefined;
    reportCardLayoutId: ObjectId | undefined;
    updatedReportCardLayout: ReportLayout | undefined;
}
export declare const GetByCourseRequest: MessageFns<GetByCourseRequest>;
export declare const GetByCoursesRequest: MessageFns<GetByCoursesRequest>;
export declare const GetByCoursesResponse: MessageFns<GetByCoursesResponse>;
export declare const CourseReportLayout: MessageFns<CourseReportLayout>;
export declare const UpdateReportLayoutRequest: MessageFns<UpdateReportLayoutRequest>;
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
