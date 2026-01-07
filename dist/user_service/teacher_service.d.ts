import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { PhoneNumber } from "../utils/phone_number";
import { RequestContext } from "../utils/request_context";
import { Teacher, TeacherBasic, TeacherProfile, TeacherStatus } from "./teacher";
import { UserRole } from "./user_role";
export declare const protobufPackage = "user_service";
export interface GetTeacherRequest {
    context: RequestContext | undefined;
    teacher_id: ObjectId | undefined;
}
export interface GetTeacherByEmailRequest {
    context: RequestContext | undefined;
    email: string;
}
export interface GetTeachersListRequest {
    context: RequestContext | undefined;
    per_page?: number | undefined;
    page?: number | undefined;
    name_search?: string | undefined;
    status?: TeacherStatus | undefined;
}
export interface GetTeachersListResponse {
    teachers: TeacherBasic[];
    teachers_count: number;
}
export interface GetAllTeachersForStagingRequest {
    context: RequestContext | undefined;
}
export interface GetAllTeachersForStagingResponse {
    teachers: Teacher[];
}
export interface GetTeachersByIdsRequest {
    context: RequestContext | undefined;
    teacher_ids: ObjectId[];
}
export interface GetTeachersByIdsResponse {
    teachers: TeacherBasic[];
}
export interface GetFullTeachersByIdsRequest {
    context: RequestContext | undefined;
    teacher_ids: ObjectId[];
}
export interface GetFullTeachersByIdsResponse {
    teachers: Teacher[];
}
export interface GetTeacherSignatureRequest {
    context: RequestContext | undefined;
    teacher_id: ObjectId | undefined;
}
export interface GetTeacherSignatureResponse {
    signature_file_id?: ObjectId | undefined;
}
export interface UpdateTeacherSignatureRequest {
    context: RequestContext | undefined;
    teacher_id: ObjectId | undefined;
    signature_file_id: ObjectId | undefined;
}
export interface DeleteTeacherSignatureRequest {
    context: RequestContext | undefined;
    teacher_id: ObjectId | undefined;
}
export interface UpdateTeacherProfileRequest {
    context: RequestContext | undefined;
    teacher_id: ObjectId | undefined;
    profile: TeacherProfile | undefined;
}
export interface ChangeTeacherPasswordRequest {
    context: RequestContext | undefined;
    teacher_id: ObjectId | undefined;
    password: string;
    change_password_at_next_login: boolean;
}
export interface CreateTeacherRequest {
    context: RequestContext | undefined;
    first_name: string;
    last_name: string;
    gender: string;
    phone_number: PhoneNumber | undefined;
    date_of_birth: Date | undefined;
    personal_email: string;
}
export interface WithdrawTeacherRequest {
    context: RequestContext | undefined;
    teacher_id: ObjectId | undefined;
}
export interface ReactivateTeacherRequest {
    context: RequestContext | undefined;
    teacher_id: ObjectId | undefined;
}
export interface AddTeacherRoleRequest {
    context: RequestContext | undefined;
    teacher_id: ObjectId | undefined;
    role: UserRole;
}
export interface RemoveTeacherRoleRequest {
    context: RequestContext | undefined;
    teacher_id: ObjectId | undefined;
    role: UserRole;
}
export interface UploadTeachersRequest {
    context: RequestContext | undefined;
    /** CSV file content as base64-encoded string */
    csv_file_base64: string;
}
export interface UploadTeachersResponse {
    success_count: number;
    failed_count: number;
    /** Base64 encoded CSV with errors (if any) */
    error_csv_base64?: string | undefined;
}
export interface CheckCanRemoveOrgDomainRequest {
    context: RequestContext | undefined;
    domain: string;
}
export interface CheckCanRemoveOrgDomainResponse {
    can_remove: boolean;
    active_teachers_count: number;
    students_count: number;
}
export declare const GetTeacherRequest: MessageFns<GetTeacherRequest>;
export declare const GetTeacherByEmailRequest: MessageFns<GetTeacherByEmailRequest>;
export declare const GetTeachersListRequest: MessageFns<GetTeachersListRequest>;
export declare const GetTeachersListResponse: MessageFns<GetTeachersListResponse>;
export declare const GetAllTeachersForStagingRequest: MessageFns<GetAllTeachersForStagingRequest>;
export declare const GetAllTeachersForStagingResponse: MessageFns<GetAllTeachersForStagingResponse>;
export declare const GetTeachersByIdsRequest: MessageFns<GetTeachersByIdsRequest>;
export declare const GetTeachersByIdsResponse: MessageFns<GetTeachersByIdsResponse>;
export declare const GetFullTeachersByIdsRequest: MessageFns<GetFullTeachersByIdsRequest>;
export declare const GetFullTeachersByIdsResponse: MessageFns<GetFullTeachersByIdsResponse>;
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
export declare const CheckCanRemoveOrgDomainRequest: MessageFns<CheckCanRemoveOrgDomainRequest>;
export declare const CheckCanRemoveOrgDomainResponse: MessageFns<CheckCanRemoveOrgDomainResponse>;
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
