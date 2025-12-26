import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { Family, FamilyInformation } from "./family";
import { Parent } from "./parent";
import { Student, StudentStatus } from "./student";
export declare const protobufPackage = "user_service";
export interface GetFamilyRequest {
    context: RequestContext | undefined;
    familyId: ObjectId | undefined;
}
export interface GetAllFamiliesRequest {
    context: RequestContext | undefined;
}
export interface GetAllFamiliesResponse {
    families: Family[];
}
export interface GetFamiliesByIdsRequest {
    context: RequestContext | undefined;
    familyIds: ObjectId[];
}
export interface GetFamiliesByIdsResponse {
    families: Family[];
}
export interface GetFamiliesByParentRequest {
    context: RequestContext | undefined;
    parentId: ObjectId | undefined;
}
export interface GetFamiliesByParentResponse {
    families: Family[];
}
export interface GetFamilyGuardiansRequest {
    context: RequestContext | undefined;
    familyId: ObjectId | undefined;
}
export interface GetFamilyGuardiansResponse {
    /** All guardians in the family */
    guardians: Parent[];
}
export interface GetContactGuardiansRequest {
    context: RequestContext | undefined;
    familyId: ObjectId | undefined;
}
export interface GetContactGuardiansResponse {
    /** Guardians excluding those in guardians_to_not_contact */
    guardians: Parent[];
}
export interface GetFamilyStudentsRequest {
    context: RequestContext | undefined;
    familyId: ObjectId | undefined;
}
export interface GetFamilyStudentsResponse {
    /** All students in the family */
    students: Student[];
}
export interface GetEnrolledStudentsForFamilyRequest {
    context: RequestContext | undefined;
    familyId: ObjectId | undefined;
    schoolYearId: ObjectId | undefined;
}
export interface GetEnrolledStudentsForFamilyResponse {
    /** Enrolled students for the specified school year */
    students: Student[];
}
export interface GetFamiliesByStudentStatusRequest {
    context: RequestContext | undefined;
    studentStatuses: StudentStatus[];
    schoolYearId: ObjectId | undefined;
}
/** Family with student count (used in bulk queries) */
export interface FamilyWithStudentCount {
    family: Family | undefined;
    studentCount: number;
}
export interface GetFamiliesByStudentStatusResponse {
    /** Families with their student counts */
    families: FamilyWithStudentCount[];
}
export interface CreateFamilyRequest {
    context: RequestContext | undefined;
    name: string;
    /** Parent ObjectIds */
    guardians: ObjectId[];
    information: FamilyInformation | undefined;
}
export interface UpdateFamilyRequest {
    context: RequestContext | undefined;
    familyId: ObjectId | undefined;
    name: string;
    guardians: ObjectId[];
    guardiansToNotContact: ObjectId[];
    information: FamilyInformation | undefined;
}
export interface UpdateFamilyNameRequest {
    context: RequestContext | undefined;
    familyId: ObjectId | undefined;
    name: string;
}
export interface UpdateFamilyAutoPayRequest {
    context: RequestContext | undefined;
    familyId: ObjectId | undefined;
    autoPayDisabled: boolean;
}
export declare const GetFamilyRequest: MessageFns<GetFamilyRequest>;
export declare const GetAllFamiliesRequest: MessageFns<GetAllFamiliesRequest>;
export declare const GetAllFamiliesResponse: MessageFns<GetAllFamiliesResponse>;
export declare const GetFamiliesByIdsRequest: MessageFns<GetFamiliesByIdsRequest>;
export declare const GetFamiliesByIdsResponse: MessageFns<GetFamiliesByIdsResponse>;
export declare const GetFamiliesByParentRequest: MessageFns<GetFamiliesByParentRequest>;
export declare const GetFamiliesByParentResponse: MessageFns<GetFamiliesByParentResponse>;
export declare const GetFamilyGuardiansRequest: MessageFns<GetFamilyGuardiansRequest>;
export declare const GetFamilyGuardiansResponse: MessageFns<GetFamilyGuardiansResponse>;
export declare const GetContactGuardiansRequest: MessageFns<GetContactGuardiansRequest>;
export declare const GetContactGuardiansResponse: MessageFns<GetContactGuardiansResponse>;
export declare const GetFamilyStudentsRequest: MessageFns<GetFamilyStudentsRequest>;
export declare const GetFamilyStudentsResponse: MessageFns<GetFamilyStudentsResponse>;
export declare const GetEnrolledStudentsForFamilyRequest: MessageFns<GetEnrolledStudentsForFamilyRequest>;
export declare const GetEnrolledStudentsForFamilyResponse: MessageFns<GetEnrolledStudentsForFamilyResponse>;
export declare const GetFamiliesByStudentStatusRequest: MessageFns<GetFamiliesByStudentStatusRequest>;
export declare const FamilyWithStudentCount: MessageFns<FamilyWithStudentCount>;
export declare const GetFamiliesByStudentStatusResponse: MessageFns<GetFamiliesByStudentStatusResponse>;
export declare const CreateFamilyRequest: MessageFns<CreateFamilyRequest>;
export declare const UpdateFamilyRequest: MessageFns<UpdateFamilyRequest>;
export declare const UpdateFamilyNameRequest: MessageFns<UpdateFamilyNameRequest>;
export declare const UpdateFamilyAutoPayRequest: MessageFns<UpdateFamilyAutoPayRequest>;
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
