import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { Organization, SchoolYear } from "./organization";
export declare const protobufPackage = "organization_service";
/** Request to fetch an organization by its ID */
export interface GetOrganizationRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
}
/** Request to fetch an organization by domain */
export interface GetOrganizationByDomainRequest {
    context: RequestContext | undefined;
    domain: string;
}
/** Request to unsafely fetch an organization by ID */
export interface UnsafeGetOrganizationByOrganizationIdRequest {
    organizationId: ObjectId | undefined;
}
/** Request to unsafely fetch an organization by domain */
export interface UnsafeGetOrganizationByDomainRequest {
    domain: string;
}
/** Request to rename an organization */
export interface RenameOrganizationRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
    newName: string;
}
/** Request to update the default domain of an organization */
export interface UpdateDefaultDomainRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
    newDefaultDomain: string;
}
/** Request to add a domain to an organization */
export interface AddDomainRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
    newDomain: string;
}
/** Request to remove a domain from an organization */
export interface RemoveDomainRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
    removeDomain: string;
}
/** Request to fetch all organizations */
export interface GetOrganizationsRequest {
    context: RequestContext | undefined;
}
/** Response containing a list of organizations */
export interface GetOrganizationsResponse {
    organizations: Organization[];
}
export interface GetSchoolYearsRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
}
export interface GetSchoolYearRequest {
    context: RequestContext | undefined;
    schoolYearId: ObjectId | undefined;
}
export interface GetSchoolYearsResponse {
    schoolYears: SchoolYear[];
}
export interface CreateSchoolYearRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
    name: string;
    startDate: Date | undefined;
    endDate: Date | undefined;
}
export interface CreateSchoolYearResponse {
    schoolYears: SchoolYear[];
}
export interface StartSchoolYearRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
}
export interface StartReregistrationRequest {
    context: RequestContext | undefined;
    organizationId: ObjectId | undefined;
}
export declare const GetOrganizationRequest: MessageFns<GetOrganizationRequest>;
export declare const GetOrganizationByDomainRequest: MessageFns<GetOrganizationByDomainRequest>;
export declare const UnsafeGetOrganizationByOrganizationIdRequest: MessageFns<UnsafeGetOrganizationByOrganizationIdRequest>;
export declare const UnsafeGetOrganizationByDomainRequest: MessageFns<UnsafeGetOrganizationByDomainRequest>;
export declare const RenameOrganizationRequest: MessageFns<RenameOrganizationRequest>;
export declare const UpdateDefaultDomainRequest: MessageFns<UpdateDefaultDomainRequest>;
export declare const AddDomainRequest: MessageFns<AddDomainRequest>;
export declare const RemoveDomainRequest: MessageFns<RemoveDomainRequest>;
export declare const GetOrganizationsRequest: MessageFns<GetOrganizationsRequest>;
export declare const GetOrganizationsResponse: MessageFns<GetOrganizationsResponse>;
export declare const GetSchoolYearsRequest: MessageFns<GetSchoolYearsRequest>;
export declare const GetSchoolYearRequest: MessageFns<GetSchoolYearRequest>;
export declare const GetSchoolYearsResponse: MessageFns<GetSchoolYearsResponse>;
export declare const CreateSchoolYearRequest: MessageFns<CreateSchoolYearRequest>;
export declare const CreateSchoolYearResponse: MessageFns<CreateSchoolYearResponse>;
export declare const StartSchoolYearRequest: MessageFns<StartSchoolYearRequest>;
export declare const StartReregistrationRequest: MessageFns<StartReregistrationRequest>;
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
