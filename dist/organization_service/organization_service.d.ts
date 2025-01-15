import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
export declare const protobufPackage = "organization_service";
/** Request to fetch an organization by its ID */
export interface GetOrganizationRequest {
    /** Context of the request */
    context: RequestContext | undefined;
    /** ID of the organization to fetch */
    organizationId: ObjectId | undefined;
}
/** Request to fetch an organization by domain */
export interface GetOrganizationByDomainRequest {
    /** Context of the request */
    context: RequestContext | undefined;
    /** Domain name of the organization to fetch */
    domain: string;
}
/** Request to fetch profile settings of an organization by ID */
export interface GetOrganizationProfileSettingsRequest {
    /** Context of the request */
    context: RequestContext | undefined;
    /** ID of the organization for which to fetch profile settings */
    organizationId: ObjectId | undefined;
}
export declare const GetOrganizationRequest: MessageFns<GetOrganizationRequest>;
export declare const GetOrganizationByDomainRequest: MessageFns<GetOrganizationByDomainRequest>;
export declare const GetOrganizationProfileSettingsRequest: MessageFns<GetOrganizationProfileSettingsRequest>;
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
