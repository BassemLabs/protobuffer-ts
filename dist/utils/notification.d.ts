import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { NotificationType } from "./notification_type";
import { ObjectId } from "./object_id";
import { UserType } from "./user_type";
export declare const protobufPackage = "utils";
export declare enum NotificationStatus {
    QUEUED = "QUEUED",
    SENT = "SENT",
    FAILED = "FAILED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function notificationStatusFromJSON(object: any): NotificationStatus;
export declare function notificationStatusToJSON(object: NotificationStatus): string;
export declare function notificationStatusToNumber(object: NotificationStatus): number;
export interface Notification {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    broadcast_id?: ObjectId | undefined;
    title?: string | undefined;
    body: string;
    created: Date | undefined;
    created_by: UserType;
    created_by_id: ObjectId | undefined;
    status: NotificationStatus;
    error_message?: string | undefined;
    notification_type: NotificationType[];
    notification_destination_user: UserType;
    notification_destination_user_id: ObjectId | undefined;
    notification_destination_email?: string | undefined;
    notification_destination_phone?: string | undefined;
    date_to_send?: Date | undefined;
    deep_link?: string | undefined;
}
export declare const Notification: MessageFns<Notification>;
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
