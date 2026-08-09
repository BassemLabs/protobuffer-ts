import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "organization_service";
/**
 * An organization-wide special-facility category (e.g. Science Lab, Gym).
 * Rooms reference a category to become special rooms; abstract courses
 * reference categories to declare which special rooms they require.
 */
export interface RoomCategory {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    name?: string | undefined;
    archived?: boolean | undefined;
}
/**
 * A physical room belonging to a campus. A room without a category is a
 * general classroom; a room with a category is a restricted special room
 * that only hosts courses requiring that category.
 */
export interface Room {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    /** Immutable after creation; a room cannot move between campuses. */
    campus_id: ObjectId | undefined;
    name?: string | undefined;
    /** Absent means general classroom; set means special room of that category. */
    special_room_category_id?: ObjectId | undefined;
    /** Whether high-school classes may be scheduled in this room. */
    supports_high_school?: boolean | undefined;
    archived?: boolean | undefined;
}
export declare const RoomCategory: MessageFns<RoomCategory>;
export declare const Room: MessageFns<Room>;
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
