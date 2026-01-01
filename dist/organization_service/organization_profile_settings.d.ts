import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "organization_service";
export declare enum ProfileSection {
    OVERVIEW = "OVERVIEW",
    PROFILE = "PROFILE",
    FAMILY = "FAMILY",
    HEALTH = "HEALTH",
    HISTORY = "HISTORY",
    DOCUMENTS = "DOCUMENTS",
    FINANCIAL = "FINANCIAL",
    DONATION = "DONATION",
    MISC = "MISC",
    INCIDENTS = "INCIDENTS",
    TRANSACTIONS = "TRANSACTIONS",
    FORMS = "FORMS",
    ROLES = "ROLES",
    SCHEDULE = "SCHEDULE",
    INTERVIEW = "INTERVIEW",
    WAITLIST = "WAITLIST",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function profileSectionFromJSON(object: any): ProfileSection;
export declare function profileSectionToJSON(object: ProfileSection): string;
export declare function profileSectionToNumber(object: ProfileSection): number;
export interface OrganizationProfileSettings {
    student_profile_sections: ProfileSection[];
    parent_profile_sections: ProfileSection[];
    teacher_profile_sections: ProfileSection[];
    student_primary_id_custom_field?: ObjectId | undefined;
}
export declare const OrganizationProfileSettings: MessageFns<OrganizationProfileSettings>;
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
