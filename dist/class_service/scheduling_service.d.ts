import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { SchedulingPreparationStep } from "./scheduling";
export declare const protobufPackage = "class_service.scheduling_service";
export interface GetSchedulingPreparationRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
}
export interface CreateSchedulingWorkspaceRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
}
export interface CompleteSchedulingPreparationStepRequest {
    context: RequestContext | undefined;
    school_year_id: ObjectId | undefined;
    step?: SchedulingPreparationStep | undefined;
}
export declare const GetSchedulingPreparationRequest: MessageFns<GetSchedulingPreparationRequest>;
export declare const CreateSchedulingWorkspaceRequest: MessageFns<CreateSchedulingWorkspaceRequest>;
export declare const CompleteSchedulingPreparationStepRequest: MessageFns<CompleteSchedulingPreparationStepRequest>;
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
