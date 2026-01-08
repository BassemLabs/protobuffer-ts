import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { StudentIncident, StudentIncidentSeverity, StudentIncidentStatus } from "./student_incident";
export declare const protobufPackage = "user_service";
export interface CreateStudentIncidentRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
    title: string;
    date: Date | undefined;
}
export interface UpdateStudentIncidentRequest {
    context: RequestContext | undefined;
    incident_id: ObjectId | undefined;
    title: string;
    date: Date | undefined;
    description: string;
    status: StudentIncidentStatus;
    severity: StudentIncidentSeverity;
    police_officer_name: string;
    police_case_id: string;
    action_taken: string;
    police_date_contact?: Date | undefined;
    police_date_investigation?: Date | undefined;
}
export interface GetStudentIncidentsRequest {
    context: RequestContext | undefined;
    student_id: ObjectId | undefined;
}
export interface StudentIncidentResponse {
    incident: StudentIncident | undefined;
}
export interface GetStudentIncidentsResponse {
    incidents: StudentIncident[];
}
export declare const CreateStudentIncidentRequest: MessageFns<CreateStudentIncidentRequest>;
export declare const UpdateStudentIncidentRequest: MessageFns<UpdateStudentIncidentRequest>;
export declare const GetStudentIncidentsRequest: MessageFns<GetStudentIncidentsRequest>;
export declare const StudentIncidentResponse: MessageFns<StudentIncidentResponse>;
export declare const GetStudentIncidentsResponse: MessageFns<GetStudentIncidentsResponse>;
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
