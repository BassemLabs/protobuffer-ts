import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { StudentGrade } from "../user_service/student";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "class_service";
export interface AbstractCourse {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    course_code?: string | undefined;
    official_name?: string | undefined;
    credit?: number | undefined;
    mandatory?: boolean | undefined;
    category_ids: ObjectId[];
    can_delete?: boolean | undefined;
    /** this field is only for subject courses */
    grade?: StudentGrade | undefined;
    /** #RRGGBB timetable color */
    color?: string | undefined;
    /**
     * organization_service.RoomCategory ids this course may be scheduled in (OR semantics).
     * Empty means no special room is required: high-school courses use any general
     * high-school room; elementary/middle subjects are not room-constrained at all.
     */
    eligible_special_room_category_ids: ObjectId[];
}
export declare const AbstractCourse: MessageFns<AbstractCourse>;
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
