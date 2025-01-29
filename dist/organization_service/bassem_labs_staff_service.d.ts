import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { BassemLabsStaff, StaffStatus } from "./bassem_labs_staff";
export declare const protobufPackage = "organization_service";
export interface CreateUserRequest {
    /** Context of the request */
    context: RequestContext | undefined;
    /** Username */
    username: string;
    /** First name */
    firstName: string;
    /** Last name */
    lastName: string;
    /** Gender */
    gender: string;
    /** Personal email */
    personalEmail: string;
    /** Phone number */
    phoneNumber: string;
    /** Date of birth */
    dateOfBirth: Date | undefined;
    /** User roles */
    roles: string[];
}
export interface UpdateProfileRequest {
    /** Context of the request */
    context: RequestContext | undefined;
    /** ID of the user to update */
    id: ObjectId | undefined;
    /** First name */
    firstName?: string | undefined;
    /** Last name */
    lastName?: string | undefined;
    /** Gender */
    gender?: string | undefined;
    /** Personal email */
    personalEmail?: string | undefined;
    /** Phone number */
    phoneNumber?: string | undefined;
    /** Date of birth */
    dateOfBirth?: Date | undefined;
}
export interface UpdateStatusRequest {
    /** Context of the request */
    context: RequestContext | undefined;
    /** ID of the user */
    id: ObjectId | undefined;
    /** New status */
    status: StaffStatus;
}
export interface GetUserByIdRequest {
    /** Context of the request */
    context: RequestContext | undefined;
    /** ID of the user to fetch */
    id: ObjectId | undefined;
}
export interface GetUserByEmailRequest {
    /** Context of the request */
    context: RequestContext | undefined;
    /** Email of the user to fetch */
    email: string;
}
export interface GetUsersRequest {
    /** Context of the request */
    context: RequestContext | undefined;
}
export interface GetUsersResponse {
    /** List of BassemLabsStaff users */
    users: BassemLabsStaff[];
}
export declare const CreateUserRequest: MessageFns<CreateUserRequest>;
export declare const UpdateProfileRequest: MessageFns<UpdateProfileRequest>;
export declare const UpdateStatusRequest: MessageFns<UpdateStatusRequest>;
export declare const GetUserByIdRequest: MessageFns<GetUserByIdRequest>;
export declare const GetUserByEmailRequest: MessageFns<GetUserByEmailRequest>;
export declare const GetUsersRequest: MessageFns<GetUsersRequest>;
export declare const GetUsersResponse: MessageFns<GetUsersResponse>;
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
