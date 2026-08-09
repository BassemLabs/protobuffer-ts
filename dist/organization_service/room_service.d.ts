import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { Room, RoomCategory } from "./room";
export declare const protobufPackage = "organization_service";
export interface CreateRoomRequest {
    context: RequestContext | undefined;
    campus_id: ObjectId | undefined;
    name?: string | undefined;
    special_room_category_id?: ObjectId | undefined;
    supports_high_school?: boolean | undefined;
}
export interface UpdateRoomRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
    name?: string | undefined;
    special_room_category_id?: ObjectId | undefined;
    supports_high_school?: boolean | undefined;
}
export interface GetRoomRequest {
    context: RequestContext | undefined;
    room_id: ObjectId | undefined;
}
export interface GetOrganizationRoomsRequest {
    context: RequestContext | undefined;
    organization_id: ObjectId | undefined;
}
export interface GetOrganizationRoomsResponse {
    rooms: Room[];
}
export interface CreateRoomCategoryRequest {
    context: RequestContext | undefined;
    name?: string | undefined;
}
export interface UpdateRoomCategoryRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
    name?: string | undefined;
}
export interface GetRoomCategoryRequest {
    context: RequestContext | undefined;
    room_category_id: ObjectId | undefined;
}
export interface GetOrganizationRoomCategoriesResponse {
    room_categories: RoomCategory[];
}
export declare const CreateRoomRequest: MessageFns<CreateRoomRequest>;
export declare const UpdateRoomRequest: MessageFns<UpdateRoomRequest>;
export declare const GetRoomRequest: MessageFns<GetRoomRequest>;
export declare const GetOrganizationRoomsRequest: MessageFns<GetOrganizationRoomsRequest>;
export declare const GetOrganizationRoomsResponse: MessageFns<GetOrganizationRoomsResponse>;
export declare const CreateRoomCategoryRequest: MessageFns<CreateRoomCategoryRequest>;
export declare const UpdateRoomCategoryRequest: MessageFns<UpdateRoomCategoryRequest>;
export declare const GetRoomCategoryRequest: MessageFns<GetRoomCategoryRequest>;
export declare const GetOrganizationRoomCategoriesResponse: MessageFns<GetOrganizationRoomCategoriesResponse>;
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
