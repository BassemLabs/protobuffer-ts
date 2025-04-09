import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { Address, Campus } from "./campus";
export declare const protobufPackage = "organization_service";
export interface CreateCampusRequest {
    context: RequestContext | undefined;
    name: string;
    address: Address | undefined;
    email: string;
    phone: string;
    principalId: ObjectId | undefined;
    supervisorId: ObjectId | undefined;
}
export interface UpdateCampusRequest {
    context: RequestContext | undefined;
    id: ObjectId | undefined;
    name: string;
    address: Address | undefined;
    email: string;
    phone: string;
    principalId: ObjectId | undefined;
    supervisorId: ObjectId | undefined;
}
export interface UpdateLogoRequest {
    context: RequestContext | undefined;
    campusId: ObjectId | undefined;
    fileName: string;
    awsS3FileLocation: string;
}
export interface GetCampusRequest {
    context: RequestContext | undefined;
    campusId: ObjectId | undefined;
}
export interface GetOrganizationCampusesRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
}
export interface GetOrganizationCampusesResponse {
    campuses: Campus[];
}
export declare const CreateCampusRequest: MessageFns<CreateCampusRequest>;
export declare const UpdateCampusRequest: MessageFns<UpdateCampusRequest>;
export declare const UpdateLogoRequest: MessageFns<UpdateLogoRequest>;
export declare const GetCampusRequest: MessageFns<GetCampusRequest>;
export declare const GetOrganizationCampusesRequest: MessageFns<GetOrganizationCampusesRequest>;
export declare const GetOrganizationCampusesResponse: MessageFns<GetOrganizationCampusesResponse>;
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
