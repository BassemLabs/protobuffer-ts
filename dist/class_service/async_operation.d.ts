import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
export declare const protobufPackage = "class_service.async_operation";
export declare enum AsyncOperationStatus {
    QUEUED = "QUEUED",
    RUNNING = "RUNNING",
    SUCCEEDED = "SUCCEEDED",
    PARTIALLY_SUCCEEDED = "PARTIALLY_SUCCEEDED",
    FAILED = "FAILED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function asyncOperationStatusFromJSON(object: any): AsyncOperationStatus;
export declare function asyncOperationStatusToJSON(object: AsyncOperationStatus): string;
export declare function asyncOperationStatusToNumber(object: AsyncOperationStatus): number;
export declare enum AsyncOperationTargetType {
    COURSE = "COURSE",
    HOMEROOM = "HOMEROOM",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function asyncOperationTargetTypeFromJSON(object: any): AsyncOperationTargetType;
export declare function asyncOperationTargetTypeToJSON(object: AsyncOperationTargetType): string;
export declare function asyncOperationTargetTypeToNumber(object: AsyncOperationTargetType): number;
export interface AsyncOperationFailure {
    student_id: ObjectId | undefined;
    reason?: string | undefined;
}
export interface AsyncOperation {
    id?: string | undefined;
    status?: AsyncOperationStatus | undefined;
    target_type?: AsyncOperationTargetType | undefined;
    target_id: ObjectId | undefined;
    total_items?: number | undefined;
    processed_items?: number | undefined;
    failures: AsyncOperationFailure[];
}
export interface GetAsyncOperationRequest {
    context: RequestContext | undefined;
    operation_id?: string | undefined;
}
export declare const AsyncOperationFailure: MessageFns<AsyncOperationFailure>;
export declare const AsyncOperation: MessageFns<AsyncOperation>;
export declare const GetAsyncOperationRequest: MessageFns<GetAsyncOperationRequest>;
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
