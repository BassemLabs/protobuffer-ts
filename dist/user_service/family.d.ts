import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { PhoneNumber } from "../utils/phone_number";
export declare const protobufPackage = "user_service";
export interface FamilyContact {
    name: string;
    phone: PhoneNumber | undefined;
    email: string;
}
export interface FamilyInformation {
    student_living: string;
    language_spoken: string;
    preferred_contact?: ObjectId | undefined;
    emergency_contact: FamilyContact | undefined;
    primary_payer?: ObjectId | undefined;
    /** If true, autopay is disabled for this family (will override invoice auto pay setting) */
    auto_pay_disabled?: boolean | undefined;
}
export interface Family {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    name: string;
    guardians: ObjectId[];
    guardians_to_not_contact: ObjectId[];
    information: FamilyInformation | undefined;
    /** Admin invitation tracking (for CRM metrics - conversion rates) */
    invited_by?: ObjectId | undefined;
    /** When the family was invited */
    invited_at?: Date | undefined;
}
export declare const FamilyContact: MessageFns<FamilyContact>;
export declare const FamilyInformation: MessageFns<FamilyInformation>;
export declare const Family: MessageFns<Family>;
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
