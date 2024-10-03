// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: class_service/semester_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { DateTime } from "../utils/datetime";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { Course } from "./course";
import { Homeroom } from "./homeroom";
import { Semester } from "./semester";

export const protobufPackage = "class_service.semester_service";

export interface GetSemesterRequest {
  context: RequestContext | undefined;
  semesterId: ObjectId | undefined;
}

export interface AggregateSemesterRequest {
  context: RequestContext | undefined;
  aggregationDocument: string;
}

export interface AggregateSemesterResponse {
  result: string;
}

export interface GetActiveSemestersRequest {
  /** Always include RequestContext as the first field */
  context: RequestContext | undefined;
}

export interface GetActiveSemestersResponse {
  semesters: Semester[];
}

export interface CoursesRequest {
  /** Always include RequestContext as the first field */
  context: RequestContext | undefined;
  semesterId: ObjectId | undefined;
}

export interface CoursesResponse {
  courses: Course[];
}

export interface HomeroomsRequest {
  /** Always include RequestContext as the first field */
  context: RequestContext | undefined;
  semesterId: ObjectId | undefined;
}

export interface HomeroomsResponse {
  homerooms: Homeroom[];
}

export interface UpdateRequest {
  /** Always include RequestContext as the first field */
  context: RequestContext | undefined;
  semesterId: ObjectId | undefined;
  name: string;
  startDate: DateTime | undefined;
  endDate: DateTime | undefined;
}

export interface ArchiveRequest {
  /** Always include RequestContext as the first field */
  context: RequestContext | undefined;
  semesterId: ObjectId | undefined;
}

export interface CreateRequest {
  /** Always include RequestContext as the first field */
  context: RequestContext | undefined;
  name: string;
  startDate: DateTime | undefined;
  endDate: DateTime | undefined;
}

export interface SemesterResponse {
  semester: Semester | undefined;
}

function createBaseGetSemesterRequest(): GetSemesterRequest {
  return { context: undefined, semesterId: undefined };
}

export const GetSemesterRequest: MessageFns<GetSemesterRequest> = {
  encode(message: GetSemesterRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.semesterId !== undefined) {
      ObjectId.encode(message.semesterId, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetSemesterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSemesterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.context = RequestContext.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.semesterId = ObjectId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetSemesterRequest {
    return {
      context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined,
      semesterId: isSet(object.semesterId) ? ObjectId.fromJSON(object.semesterId) : undefined,
    };
  },

  toJSON(message: GetSemesterRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    if (message.semesterId !== undefined) {
      obj.semesterId = ObjectId.toJSON(message.semesterId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSemesterRequest>, I>>(base?: I): GetSemesterRequest {
    return GetSemesterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetSemesterRequest>, I>>(object: I): GetSemesterRequest {
    const message = createBaseGetSemesterRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    message.semesterId = (object.semesterId !== undefined && object.semesterId !== null)
      ? ObjectId.fromPartial(object.semesterId)
      : undefined;
    return message;
  },
};

function createBaseAggregateSemesterRequest(): AggregateSemesterRequest {
  return { context: undefined, aggregationDocument: "" };
}

export const AggregateSemesterRequest: MessageFns<AggregateSemesterRequest> = {
  encode(message: AggregateSemesterRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.aggregationDocument !== "") {
      writer.uint32(18).string(message.aggregationDocument);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AggregateSemesterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregateSemesterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.context = RequestContext.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.aggregationDocument = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AggregateSemesterRequest {
    return {
      context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined,
      aggregationDocument: isSet(object.aggregationDocument) ? globalThis.String(object.aggregationDocument) : "",
    };
  },

  toJSON(message: AggregateSemesterRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    if (message.aggregationDocument !== "") {
      obj.aggregationDocument = message.aggregationDocument;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AggregateSemesterRequest>, I>>(base?: I): AggregateSemesterRequest {
    return AggregateSemesterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AggregateSemesterRequest>, I>>(object: I): AggregateSemesterRequest {
    const message = createBaseAggregateSemesterRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    message.aggregationDocument = object.aggregationDocument ?? "";
    return message;
  },
};

function createBaseAggregateSemesterResponse(): AggregateSemesterResponse {
  return { result: "" };
}

export const AggregateSemesterResponse: MessageFns<AggregateSemesterResponse> = {
  encode(message: AggregateSemesterResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.result !== "") {
      writer.uint32(10).string(message.result);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AggregateSemesterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregateSemesterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AggregateSemesterResponse {
    return { result: isSet(object.result) ? globalThis.String(object.result) : "" };
  },

  toJSON(message: AggregateSemesterResponse): unknown {
    const obj: any = {};
    if (message.result !== "") {
      obj.result = message.result;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AggregateSemesterResponse>, I>>(base?: I): AggregateSemesterResponse {
    return AggregateSemesterResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AggregateSemesterResponse>, I>>(object: I): AggregateSemesterResponse {
    const message = createBaseAggregateSemesterResponse();
    message.result = object.result ?? "";
    return message;
  },
};

function createBaseGetActiveSemestersRequest(): GetActiveSemestersRequest {
  return { context: undefined };
}

export const GetActiveSemestersRequest: MessageFns<GetActiveSemestersRequest> = {
  encode(message: GetActiveSemestersRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetActiveSemestersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetActiveSemestersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.context = RequestContext.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetActiveSemestersRequest {
    return { context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined };
  },

  toJSON(message: GetActiveSemestersRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetActiveSemestersRequest>, I>>(base?: I): GetActiveSemestersRequest {
    return GetActiveSemestersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetActiveSemestersRequest>, I>>(object: I): GetActiveSemestersRequest {
    const message = createBaseGetActiveSemestersRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    return message;
  },
};

function createBaseGetActiveSemestersResponse(): GetActiveSemestersResponse {
  return { semesters: [] };
}

export const GetActiveSemestersResponse: MessageFns<GetActiveSemestersResponse> = {
  encode(message: GetActiveSemestersResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.semesters) {
      Semester.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetActiveSemestersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetActiveSemestersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.semesters.push(Semester.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetActiveSemestersResponse {
    return {
      semesters: globalThis.Array.isArray(object?.semesters)
        ? object.semesters.map((e: any) => Semester.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetActiveSemestersResponse): unknown {
    const obj: any = {};
    if (message.semesters?.length) {
      obj.semesters = message.semesters.map((e) => Semester.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetActiveSemestersResponse>, I>>(base?: I): GetActiveSemestersResponse {
    return GetActiveSemestersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetActiveSemestersResponse>, I>>(object: I): GetActiveSemestersResponse {
    const message = createBaseGetActiveSemestersResponse();
    message.semesters = object.semesters?.map((e) => Semester.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCoursesRequest(): CoursesRequest {
  return { context: undefined, semesterId: undefined };
}

export const CoursesRequest: MessageFns<CoursesRequest> = {
  encode(message: CoursesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.semesterId !== undefined) {
      ObjectId.encode(message.semesterId, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CoursesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoursesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.context = RequestContext.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.semesterId = ObjectId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CoursesRequest {
    return {
      context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined,
      semesterId: isSet(object.semesterId) ? ObjectId.fromJSON(object.semesterId) : undefined,
    };
  },

  toJSON(message: CoursesRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    if (message.semesterId !== undefined) {
      obj.semesterId = ObjectId.toJSON(message.semesterId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CoursesRequest>, I>>(base?: I): CoursesRequest {
    return CoursesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CoursesRequest>, I>>(object: I): CoursesRequest {
    const message = createBaseCoursesRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    message.semesterId = (object.semesterId !== undefined && object.semesterId !== null)
      ? ObjectId.fromPartial(object.semesterId)
      : undefined;
    return message;
  },
};

function createBaseCoursesResponse(): CoursesResponse {
  return { courses: [] };
}

export const CoursesResponse: MessageFns<CoursesResponse> = {
  encode(message: CoursesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.courses) {
      Course.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CoursesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoursesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.courses.push(Course.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CoursesResponse {
    return {
      courses: globalThis.Array.isArray(object?.courses) ? object.courses.map((e: any) => Course.fromJSON(e)) : [],
    };
  },

  toJSON(message: CoursesResponse): unknown {
    const obj: any = {};
    if (message.courses?.length) {
      obj.courses = message.courses.map((e) => Course.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CoursesResponse>, I>>(base?: I): CoursesResponse {
    return CoursesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CoursesResponse>, I>>(object: I): CoursesResponse {
    const message = createBaseCoursesResponse();
    message.courses = object.courses?.map((e) => Course.fromPartial(e)) || [];
    return message;
  },
};

function createBaseHomeroomsRequest(): HomeroomsRequest {
  return { context: undefined, semesterId: undefined };
}

export const HomeroomsRequest: MessageFns<HomeroomsRequest> = {
  encode(message: HomeroomsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.semesterId !== undefined) {
      ObjectId.encode(message.semesterId, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HomeroomsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHomeroomsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.context = RequestContext.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.semesterId = ObjectId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HomeroomsRequest {
    return {
      context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined,
      semesterId: isSet(object.semesterId) ? ObjectId.fromJSON(object.semesterId) : undefined,
    };
  },

  toJSON(message: HomeroomsRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    if (message.semesterId !== undefined) {
      obj.semesterId = ObjectId.toJSON(message.semesterId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HomeroomsRequest>, I>>(base?: I): HomeroomsRequest {
    return HomeroomsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HomeroomsRequest>, I>>(object: I): HomeroomsRequest {
    const message = createBaseHomeroomsRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    message.semesterId = (object.semesterId !== undefined && object.semesterId !== null)
      ? ObjectId.fromPartial(object.semesterId)
      : undefined;
    return message;
  },
};

function createBaseHomeroomsResponse(): HomeroomsResponse {
  return { homerooms: [] };
}

export const HomeroomsResponse: MessageFns<HomeroomsResponse> = {
  encode(message: HomeroomsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.homerooms) {
      Homeroom.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HomeroomsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHomeroomsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.homerooms.push(Homeroom.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HomeroomsResponse {
    return {
      homerooms: globalThis.Array.isArray(object?.homerooms)
        ? object.homerooms.map((e: any) => Homeroom.fromJSON(e))
        : [],
    };
  },

  toJSON(message: HomeroomsResponse): unknown {
    const obj: any = {};
    if (message.homerooms?.length) {
      obj.homerooms = message.homerooms.map((e) => Homeroom.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HomeroomsResponse>, I>>(base?: I): HomeroomsResponse {
    return HomeroomsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HomeroomsResponse>, I>>(object: I): HomeroomsResponse {
    const message = createBaseHomeroomsResponse();
    message.homerooms = object.homerooms?.map((e) => Homeroom.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateRequest(): UpdateRequest {
  return { context: undefined, semesterId: undefined, name: "", startDate: undefined, endDate: undefined };
}

export const UpdateRequest: MessageFns<UpdateRequest> = {
  encode(message: UpdateRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.semesterId !== undefined) {
      ObjectId.encode(message.semesterId, writer.uint32(18).fork()).join();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.startDate !== undefined) {
      DateTime.encode(message.startDate, writer.uint32(34).fork()).join();
    }
    if (message.endDate !== undefined) {
      DateTime.encode(message.endDate, writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.context = RequestContext.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.semesterId = ObjectId.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.startDate = DateTime.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.endDate = DateTime.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateRequest {
    return {
      context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined,
      semesterId: isSet(object.semesterId) ? ObjectId.fromJSON(object.semesterId) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      startDate: isSet(object.startDate) ? DateTime.fromJSON(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? DateTime.fromJSON(object.endDate) : undefined,
    };
  },

  toJSON(message: UpdateRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    if (message.semesterId !== undefined) {
      obj.semesterId = ObjectId.toJSON(message.semesterId);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.startDate !== undefined) {
      obj.startDate = DateTime.toJSON(message.startDate);
    }
    if (message.endDate !== undefined) {
      obj.endDate = DateTime.toJSON(message.endDate);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateRequest>, I>>(base?: I): UpdateRequest {
    return UpdateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateRequest>, I>>(object: I): UpdateRequest {
    const message = createBaseUpdateRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    message.semesterId = (object.semesterId !== undefined && object.semesterId !== null)
      ? ObjectId.fromPartial(object.semesterId)
      : undefined;
    message.name = object.name ?? "";
    message.startDate = (object.startDate !== undefined && object.startDate !== null)
      ? DateTime.fromPartial(object.startDate)
      : undefined;
    message.endDate = (object.endDate !== undefined && object.endDate !== null)
      ? DateTime.fromPartial(object.endDate)
      : undefined;
    return message;
  },
};

function createBaseArchiveRequest(): ArchiveRequest {
  return { context: undefined, semesterId: undefined };
}

export const ArchiveRequest: MessageFns<ArchiveRequest> = {
  encode(message: ArchiveRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.semesterId !== undefined) {
      ObjectId.encode(message.semesterId, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ArchiveRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArchiveRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.context = RequestContext.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.semesterId = ObjectId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ArchiveRequest {
    return {
      context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined,
      semesterId: isSet(object.semesterId) ? ObjectId.fromJSON(object.semesterId) : undefined,
    };
  },

  toJSON(message: ArchiveRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    if (message.semesterId !== undefined) {
      obj.semesterId = ObjectId.toJSON(message.semesterId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ArchiveRequest>, I>>(base?: I): ArchiveRequest {
    return ArchiveRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ArchiveRequest>, I>>(object: I): ArchiveRequest {
    const message = createBaseArchiveRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    message.semesterId = (object.semesterId !== undefined && object.semesterId !== null)
      ? ObjectId.fromPartial(object.semesterId)
      : undefined;
    return message;
  },
};

function createBaseCreateRequest(): CreateRequest {
  return { context: undefined, name: "", startDate: undefined, endDate: undefined };
}

export const CreateRequest: MessageFns<CreateRequest> = {
  encode(message: CreateRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.startDate !== undefined) {
      DateTime.encode(message.startDate, writer.uint32(26).fork()).join();
    }
    if (message.endDate !== undefined) {
      DateTime.encode(message.endDate, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.context = RequestContext.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.startDate = DateTime.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.endDate = DateTime.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateRequest {
    return {
      context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      startDate: isSet(object.startDate) ? DateTime.fromJSON(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? DateTime.fromJSON(object.endDate) : undefined,
    };
  },

  toJSON(message: CreateRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.startDate !== undefined) {
      obj.startDate = DateTime.toJSON(message.startDate);
    }
    if (message.endDate !== undefined) {
      obj.endDate = DateTime.toJSON(message.endDate);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateRequest>, I>>(base?: I): CreateRequest {
    return CreateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateRequest>, I>>(object: I): CreateRequest {
    const message = createBaseCreateRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    message.name = object.name ?? "";
    message.startDate = (object.startDate !== undefined && object.startDate !== null)
      ? DateTime.fromPartial(object.startDate)
      : undefined;
    message.endDate = (object.endDate !== undefined && object.endDate !== null)
      ? DateTime.fromPartial(object.endDate)
      : undefined;
    return message;
  },
};

function createBaseSemesterResponse(): SemesterResponse {
  return { semester: undefined };
}

export const SemesterResponse: MessageFns<SemesterResponse> = {
  encode(message: SemesterResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.semester !== undefined) {
      Semester.encode(message.semester, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SemesterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSemesterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.semester = Semester.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SemesterResponse {
    return { semester: isSet(object.semester) ? Semester.fromJSON(object.semester) : undefined };
  },

  toJSON(message: SemesterResponse): unknown {
    const obj: any = {};
    if (message.semester !== undefined) {
      obj.semester = Semester.toJSON(message.semester);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SemesterResponse>, I>>(base?: I): SemesterResponse {
    return SemesterResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SemesterResponse>, I>>(object: I): SemesterResponse {
    const message = createBaseSemesterResponse();
    message.semester = (object.semester !== undefined && object.semester !== null)
      ? Semester.fromPartial(object.semester)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
