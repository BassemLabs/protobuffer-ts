import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { PhoneNumber } from "../utils/phone_number";
import { RequestContext } from "../utils/request_context";
import { TeacherBasic, TeacherProfile, TeacherStatus } from "./teacher";
import { UserRole } from "./user_role";
export declare const protobufPackage = "user_service";
export interface GetTeacherRequest {
    context: RequestContext | undefined;
    teacherId: ObjectId | undefined;
}
export interface GetTeacherByEmailRequest {
    context: RequestContext | undefined;
    email: string;
}
export interface GetTeachersListRequest {
    context: RequestContext | undefined;
    perPage?: number | undefined;
    page?: number | undefined;
    nameSearch?: string | undefined;
    status?: TeacherStatus | undefined;
}
export interface GetTeachersListResponse {
    teachers: TeacherBasic[];
    teachersCount: number;
}
export interface GetTeachersByIdsRequest {
    context: RequestContext | undefined;
    teacherIds: ObjectId[];
}
export interface GetTeachersByIdsResponse {
    teachers: TeacherBasic[];
}
export interface GetTeacherSignatureRequest {
    context: RequestContext | undefined;
    teacherId: ObjectId | undefined;
}
export interface GetTeacherSignatureResponse {
    signatureFileId?: ObjectId | undefined;
}
export interface UpdateTeacherSignatureRequest {
    context: RequestContext | undefined;
    teacherId: ObjectId | undefined;
    signatureFileId: ObjectId | undefined;
}
export interface DeleteTeacherSignatureRequest {
    context: RequestContext | undefined;
    teacherId: ObjectId | undefined;
}
export interface UpdateTeacherProfileRequest {
    context: RequestContext | undefined;
    teacherId: ObjectId | undefined;
    profile: TeacherProfile | undefined;
}
export interface ChangeTeacherPasswordRequest {
    context: RequestContext | undefined;
    teacherId: ObjectId | undefined;
    password: string;
    changePasswordAtNextLogin: boolean;
}
export interface CreateTeacherRequest {
    context: RequestContext | undefined;
    firstName: string;
    lastName: string;
    gender: string;
    phoneNumber: PhoneNumber | undefined;
    dateOfBirth: Date | undefined;
    personalEmail: string;
}
export interface WithdrawTeacherRequest {
    context: RequestContext | undefined;
    teacherId: ObjectId | undefined;
}
export interface ReactivateTeacherRequest {
    context: RequestContext | undefined;
    teacherId: ObjectId | undefined;
}
export interface AddTeacherRoleRequest {
    context: RequestContext | undefined;
    teacherId: ObjectId | undefined;
    role: UserRole;
}
export interface RemoveTeacherRoleRequest {
    context: RequestContext | undefined;
    teacherId: ObjectId | undefined;
    role: UserRole;
}
export interface UploadTeachersRequest {
    context: RequestContext | undefined;
    /** CSV file content as base64-encoded string */
    csvFileBase64: string;
}
export interface UploadTeachersResponse {
    successCount: number;
    failedCount: number;
    /** Base64 encoded CSV with errors (if any) */
    errorCsvBase64?: string | undefined;
}
export declare const GetTeacherRequest: MessageFns<GetTeacherRequest>;
export declare const GetTeacherByEmailRequest: MessageFns<GetTeacherByEmailRequest>;
export declare const GetTeachersListRequest: MessageFns<GetTeachersListRequest>;
export declare const GetTeachersListResponse: MessageFns<GetTeachersListResponse>;
export declare const GetTeachersByIdsRequest: MessageFns<GetTeachersByIdsRequest>;
export declare const GetTeachersByIdsResponse: MessageFns<GetTeachersByIdsResponse>;
export declare const GetTeacherSignatureRequest: MessageFns<GetTeacherSignatureRequest>;
export declare const GetTeacherSignatureResponse: MessageFns<GetTeacherSignatureResponse>;
export declare const UpdateTeacherSignatureRequest: MessageFns<UpdateTeacherSignatureRequest>;
export declare const DeleteTeacherSignatureRequest: MessageFns<DeleteTeacherSignatureRequest>;
export declare const UpdateTeacherProfileRequest: MessageFns<UpdateTeacherProfileRequest>;
export declare const ChangeTeacherPasswordRequest: MessageFns<ChangeTeacherPasswordRequest>;
export declare const CreateTeacherRequest: MessageFns<CreateTeacherRequest>;
export declare const WithdrawTeacherRequest: MessageFns<WithdrawTeacherRequest>;
export declare const ReactivateTeacherRequest: MessageFns<ReactivateTeacherRequest>;
export declare const AddTeacherRoleRequest: MessageFns<AddTeacherRoleRequest>;
export declare const RemoveTeacherRoleRequest: MessageFns<RemoveTeacherRoleRequest>;
export declare const UploadTeachersRequest: MessageFns<UploadTeachersRequest>;
export declare const UploadTeachersResponse: MessageFns<UploadTeachersResponse>;
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
