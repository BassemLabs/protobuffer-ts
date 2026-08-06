import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "payment_service";
export interface PaymentReminderRecipient {
    parent_id: ObjectId | undefined;
    parent_name?: string | undefined;
    parent_email?: string | undefined;
    rendered_title?: string | undefined;
    rendered_body?: string | undefined;
}
export interface PaymentReminderSnapshot {
    title?: string | undefined;
    header?: string | undefined;
    body?: string | undefined;
    footer?: string | undefined;
    total_amount?: number | undefined;
    paid_amount?: number | undefined;
    remaining_amount?: number | undefined;
    overdue_amount?: number | undefined;
    recipients: PaymentReminderRecipient[];
}
export declare const PaymentReminderRecipient: MessageFns<PaymentReminderRecipient>;
export declare const PaymentReminderSnapshot: MessageFns<PaymentReminderSnapshot>;
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
