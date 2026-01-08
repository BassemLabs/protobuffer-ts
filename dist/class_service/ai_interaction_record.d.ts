import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "class_service";
export declare enum AiInteractionRecordStatus {
    Pending = "Pending",
    Processed = "Processed",
    Error = "Error",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function aiInteractionRecordStatusFromJSON(object: any): AiInteractionRecordStatus;
export declare function aiInteractionRecordStatusToJSON(object: AiInteractionRecordStatus): string;
export declare function aiInteractionRecordStatusToNumber(object: AiInteractionRecordStatus): number;
export interface AiInteractionRecord {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    user_id: ObjectId | undefined;
    prompt: string;
    response: string;
    status: AiInteractionRecordStatus;
}
export declare const AiInteractionRecord: MessageFns<AiInteractionRecord>;
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
