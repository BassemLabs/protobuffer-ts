import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { UserType } from "../utils/user_type";
import { Announcement } from "./announcement";
export declare const protobufPackage = "organization_service";
export interface ListAnnouncementsRequest {
    context: RequestContext | undefined;
}
export interface ListAnnouncementsResponse {
    announcements: Announcement[];
}
export interface GetAnnouncementRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
}
export interface CreateAnnouncementRequest {
    context: RequestContext | undefined;
    title: string;
    body: string;
    startDate: Date | undefined;
    endDate: Date | undefined;
    link?: string | undefined;
    audience: UserType[];
}
export interface UpdateAnnouncementRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
    title: string;
    body: string;
    startDate: Date | undefined;
    endDate: Date | undefined;
    link?: string | undefined;
    audience: UserType[];
}
export interface DeleteAnnouncementRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
}
export interface DeleteAnnouncementResponse {
    success: boolean;
}
export declare const ListAnnouncementsRequest: MessageFns<ListAnnouncementsRequest>;
export declare const ListAnnouncementsResponse: MessageFns<ListAnnouncementsResponse>;
export declare const GetAnnouncementRequest: MessageFns<GetAnnouncementRequest>;
export declare const CreateAnnouncementRequest: MessageFns<CreateAnnouncementRequest>;
export declare const UpdateAnnouncementRequest: MessageFns<UpdateAnnouncementRequest>;
export declare const DeleteAnnouncementRequest: MessageFns<DeleteAnnouncementRequest>;
export declare const DeleteAnnouncementResponse: MessageFns<DeleteAnnouncementResponse>;
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
