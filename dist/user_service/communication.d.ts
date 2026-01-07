import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Notification } from "../utils/notification";
import { NotificationType } from "../utils/notification_type";
import { ObjectId } from "../utils/object_id";
import { PhoneNumber } from "../utils/phone_number";
import { UserType } from "../utils/user_type";
export declare const protobufPackage = "user_service";
export interface CommunicationFilters {
    homeroom_ids: ObjectId[];
    course_ids: ObjectId[];
    family_ids: ObjectId[];
    semester_ids: ObjectId[];
    school_year_id?: ObjectId | undefined;
    audience_user_types: UserType[];
}
export interface CommunicationBroadcast {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    filters: CommunicationFilters | undefined;
    channels: NotificationType[];
    subject: string;
    body: string;
}
export interface CommunicationTarget {
    user_type: UserType;
    user_id: ObjectId | undefined;
    email?: string | undefined;
    phone_number?: PhoneNumber | undefined;
}
export interface CommunicationChannelCounts {
    email_recipients: number;
    sms_recipients: number;
    phone_call_recipients: number;
}
export interface BroadcastList {
    broadcasts: CommunicationBroadcast[];
    broadcasts_count: number;
}
export interface RecipientList {
    recipients: Notification[];
    recipients_count: number;
}
export interface PreviewCommunicationResponse {
    total_recipients: number;
    email_recipients: number;
    sms_recipients: number;
    phone_call_recipients: number;
    estimated_cost: number;
}
export declare const CommunicationFilters: MessageFns<CommunicationFilters>;
export declare const CommunicationBroadcast: MessageFns<CommunicationBroadcast>;
export declare const CommunicationTarget: MessageFns<CommunicationTarget>;
export declare const CommunicationChannelCounts: MessageFns<CommunicationChannelCounts>;
export declare const BroadcastList: MessageFns<BroadcastList>;
export declare const RecipientList: MessageFns<RecipientList>;
export declare const PreviewCommunicationResponse: MessageFns<PreviewCommunicationResponse>;
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
