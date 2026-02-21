import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { AbstractCategory } from "./abstract_category";
import { AbstractCategoryGroup } from "./abstract_category_group";
import { AbstractCourse } from "./abstract_course";
export declare const protobufPackage = "class_service.abstract_catalog_service";
export interface ListAbstractCategoriesRequest {
    context: RequestContext | undefined;
}
export interface ListAbstractCategoriesResponse {
    abstract_categories: AbstractCategory[];
}
export interface ListAbstractCategoryGroupsRequest {
    context: RequestContext | undefined;
}
export interface ListAbstractCategoryGroupsResponse {
    abstract_category_groups: AbstractCategoryGroup[];
}
export interface ListAbstractCoursesRequest {
    context: RequestContext | undefined;
    per_page?: number | undefined;
    page?: number | undefined;
    search?: string | undefined;
}
export interface ListAbstractCoursesResponse {
    abstract_courses: AbstractCourse[];
    total: number;
}
export interface GetAbstractCourseRequest {
    context: RequestContext | undefined;
    abstract_course_id: ObjectId | undefined;
}
export interface CreateAbstractCategoryRequest {
    context: RequestContext | undefined;
    name: string;
    credits_required: number;
}
export interface UpdateAbstractCategoryRequest {
    context: RequestContext | undefined;
    abstract_category_id: ObjectId | undefined;
    name: string;
    credits_required: number;
}
export interface DeleteAbstractCategoryRequest {
    context: RequestContext | undefined;
    abstract_category_id: ObjectId | undefined;
}
export interface CreateAbstractCategoryGroupRequest {
    context: RequestContext | undefined;
    name: string;
    credits_required: number;
    category_ids: ObjectId[];
}
export interface UpdateAbstractCategoryGroupRequest {
    context: RequestContext | undefined;
    abstract_category_group_id: ObjectId | undefined;
    name: string;
    credits_required: number;
    category_ids: ObjectId[];
}
export interface CreateAbstractCourseRequest {
    context: RequestContext | undefined;
    course_code: string;
    official_name: string;
    credit: number;
    mandatory: boolean;
    category_ids: ObjectId[];
}
export interface UpdateAbstractCourseRequest {
    context: RequestContext | undefined;
    abstract_course_id: ObjectId | undefined;
    course_code: string;
    official_name: string;
    credit: number;
    mandatory: boolean;
    category_ids: ObjectId[];
}
export interface DeleteAbstractCourseRequest {
    context: RequestContext | undefined;
    abstract_course_id: ObjectId | undefined;
}
export declare const ListAbstractCategoriesRequest: MessageFns<ListAbstractCategoriesRequest>;
export declare const ListAbstractCategoriesResponse: MessageFns<ListAbstractCategoriesResponse>;
export declare const ListAbstractCategoryGroupsRequest: MessageFns<ListAbstractCategoryGroupsRequest>;
export declare const ListAbstractCategoryGroupsResponse: MessageFns<ListAbstractCategoryGroupsResponse>;
export declare const ListAbstractCoursesRequest: MessageFns<ListAbstractCoursesRequest>;
export declare const ListAbstractCoursesResponse: MessageFns<ListAbstractCoursesResponse>;
export declare const GetAbstractCourseRequest: MessageFns<GetAbstractCourseRequest>;
export declare const CreateAbstractCategoryRequest: MessageFns<CreateAbstractCategoryRequest>;
export declare const UpdateAbstractCategoryRequest: MessageFns<UpdateAbstractCategoryRequest>;
export declare const DeleteAbstractCategoryRequest: MessageFns<DeleteAbstractCategoryRequest>;
export declare const CreateAbstractCategoryGroupRequest: MessageFns<CreateAbstractCategoryGroupRequest>;
export declare const UpdateAbstractCategoryGroupRequest: MessageFns<UpdateAbstractCategoryGroupRequest>;
export declare const CreateAbstractCourseRequest: MessageFns<CreateAbstractCourseRequest>;
export declare const UpdateAbstractCourseRequest: MessageFns<UpdateAbstractCourseRequest>;
export declare const DeleteAbstractCourseRequest: MessageFns<DeleteAbstractCourseRequest>;
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
