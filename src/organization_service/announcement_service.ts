// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: organization_service/announcement_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Timestamp } from "../google/protobuf/timestamp";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import { UserType, userTypeFromJSON, userTypeToJSON, userTypeToNumber } from "../utils/user_type";
import { Announcement } from "./announcement";

export const protobufPackage = "organization_service";

export interface ListAnnouncementsRequest {
  context: RequestContext | undefined;
}

export interface ListAnnouncementsResponse {
  announcements: Announcement[];
}

export interface GetAnnouncementRequest {
  context: RequestContext | undefined;
  id: ObjectId | undefined;
}

export interface CreateAnnouncementRequest {
  context: RequestContext | undefined;
  title: string;
  body: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  link?: string | undefined;
  audience: UserType[];
}

export interface UpdateAnnouncementRequest {
  context: RequestContext | undefined;
  id: ObjectId | undefined;
  title: string;
  body: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  link?: string | undefined;
  audience: UserType[];
}

export interface DeleteAnnouncementRequest {
  context: RequestContext | undefined;
  id: ObjectId | undefined;
}

export interface DeleteAnnouncementResponse {
  success: boolean;
}

function createBaseListAnnouncementsRequest(): ListAnnouncementsRequest {
  return { context: undefined };
}

export const ListAnnouncementsRequest: MessageFns<ListAnnouncementsRequest> = {
  encode(message: ListAnnouncementsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListAnnouncementsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAnnouncementsRequest();
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

  fromJSON(object: any): ListAnnouncementsRequest {
    return { context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined };
  },

  toJSON(message: ListAnnouncementsRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListAnnouncementsRequest>, I>>(base?: I): ListAnnouncementsRequest {
    return ListAnnouncementsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListAnnouncementsRequest>, I>>(object: I): ListAnnouncementsRequest {
    const message = createBaseListAnnouncementsRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    return message;
  },
};

function createBaseListAnnouncementsResponse(): ListAnnouncementsResponse {
  return { announcements: [] };
}

export const ListAnnouncementsResponse: MessageFns<ListAnnouncementsResponse> = {
  encode(message: ListAnnouncementsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.announcements) {
      Announcement.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListAnnouncementsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAnnouncementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.announcements.push(Announcement.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListAnnouncementsResponse {
    return {
      announcements: globalThis.Array.isArray(object?.announcements)
        ? object.announcements.map((e: any) => Announcement.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListAnnouncementsResponse): unknown {
    const obj: any = {};
    if (message.announcements?.length) {
      obj.announcements = message.announcements.map((e) => Announcement.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListAnnouncementsResponse>, I>>(base?: I): ListAnnouncementsResponse {
    return ListAnnouncementsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListAnnouncementsResponse>, I>>(object: I): ListAnnouncementsResponse {
    const message = createBaseListAnnouncementsResponse();
    message.announcements = object.announcements?.map((e) => Announcement.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetAnnouncementRequest(): GetAnnouncementRequest {
  return { context: undefined, id: undefined };
}

export const GetAnnouncementRequest: MessageFns<GetAnnouncementRequest> = {
  encode(message: GetAnnouncementRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.id !== undefined) {
      ObjectId.encode(message.id, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetAnnouncementRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAnnouncementRequest();
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

          message.id = ObjectId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAnnouncementRequest {
    return {
      context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined,
      id: isSet(object.id) ? ObjectId.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: GetAnnouncementRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    if (message.id !== undefined) {
      obj.id = ObjectId.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAnnouncementRequest>, I>>(base?: I): GetAnnouncementRequest {
    return GetAnnouncementRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAnnouncementRequest>, I>>(object: I): GetAnnouncementRequest {
    const message = createBaseGetAnnouncementRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    message.id = (object.id !== undefined && object.id !== null) ? ObjectId.fromPartial(object.id) : undefined;
    return message;
  },
};

function createBaseCreateAnnouncementRequest(): CreateAnnouncementRequest {
  return { context: undefined, title: "", body: "", startDate: undefined, endDate: undefined, link: "", audience: [] };
}

export const CreateAnnouncementRequest: MessageFns<CreateAnnouncementRequest> = {
  encode(message: CreateAnnouncementRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(34).fork()).join();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(toTimestamp(message.endDate), writer.uint32(42).fork()).join();
    }
    if (message.link !== undefined && message.link !== "") {
      writer.uint32(50).string(message.link);
    }
    writer.uint32(58).fork();
    for (const v of message.audience) {
      writer.int32(userTypeToNumber(v));
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateAnnouncementRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAnnouncementRequest();
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

          message.title = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.body = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.link = reader.string();
          continue;
        case 7:
          if (tag === 56) {
            message.audience.push(userTypeFromJSON(reader.int32()));

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.audience.push(userTypeFromJSON(reader.int32()));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateAnnouncementRequest {
    return {
      context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined,
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      body: isSet(object.body) ? globalThis.String(object.body) : "",
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      link: isSet(object.link) ? globalThis.String(object.link) : "",
      audience: globalThis.Array.isArray(object?.audience) ? object.audience.map((e: any) => userTypeFromJSON(e)) : [],
    };
  },

  toJSON(message: CreateAnnouncementRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.body !== "") {
      obj.body = message.body;
    }
    if (message.startDate !== undefined) {
      obj.startDate = message.startDate.toISOString();
    }
    if (message.endDate !== undefined) {
      obj.endDate = message.endDate.toISOString();
    }
    if (message.link !== undefined && message.link !== "") {
      obj.link = message.link;
    }
    if (message.audience?.length) {
      obj.audience = message.audience.map((e) => userTypeToJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAnnouncementRequest>, I>>(base?: I): CreateAnnouncementRequest {
    return CreateAnnouncementRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateAnnouncementRequest>, I>>(object: I): CreateAnnouncementRequest {
    const message = createBaseCreateAnnouncementRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.link = object.link ?? "";
    message.audience = object.audience?.map((e) => e) || [];
    return message;
  },
};

function createBaseUpdateAnnouncementRequest(): UpdateAnnouncementRequest {
  return {
    context: undefined,
    id: undefined,
    title: "",
    body: "",
    startDate: undefined,
    endDate: undefined,
    link: "",
    audience: [],
  };
}

export const UpdateAnnouncementRequest: MessageFns<UpdateAnnouncementRequest> = {
  encode(message: UpdateAnnouncementRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.id !== undefined) {
      ObjectId.encode(message.id, writer.uint32(18).fork()).join();
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(34).string(message.body);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(42).fork()).join();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(toTimestamp(message.endDate), writer.uint32(50).fork()).join();
    }
    if (message.link !== undefined && message.link !== "") {
      writer.uint32(58).string(message.link);
    }
    writer.uint32(66).fork();
    for (const v of message.audience) {
      writer.int32(userTypeToNumber(v));
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateAnnouncementRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAnnouncementRequest();
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

          message.id = ObjectId.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.title = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.body = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.link = reader.string();
          continue;
        case 8:
          if (tag === 64) {
            message.audience.push(userTypeFromJSON(reader.int32()));

            continue;
          }

          if (tag === 66) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.audience.push(userTypeFromJSON(reader.int32()));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateAnnouncementRequest {
    return {
      context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined,
      id: isSet(object.id) ? ObjectId.fromJSON(object.id) : undefined,
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      body: isSet(object.body) ? globalThis.String(object.body) : "",
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      link: isSet(object.link) ? globalThis.String(object.link) : "",
      audience: globalThis.Array.isArray(object?.audience) ? object.audience.map((e: any) => userTypeFromJSON(e)) : [],
    };
  },

  toJSON(message: UpdateAnnouncementRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    if (message.id !== undefined) {
      obj.id = ObjectId.toJSON(message.id);
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.body !== "") {
      obj.body = message.body;
    }
    if (message.startDate !== undefined) {
      obj.startDate = message.startDate.toISOString();
    }
    if (message.endDate !== undefined) {
      obj.endDate = message.endDate.toISOString();
    }
    if (message.link !== undefined && message.link !== "") {
      obj.link = message.link;
    }
    if (message.audience?.length) {
      obj.audience = message.audience.map((e) => userTypeToJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateAnnouncementRequest>, I>>(base?: I): UpdateAnnouncementRequest {
    return UpdateAnnouncementRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateAnnouncementRequest>, I>>(object: I): UpdateAnnouncementRequest {
    const message = createBaseUpdateAnnouncementRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    message.id = (object.id !== undefined && object.id !== null) ? ObjectId.fromPartial(object.id) : undefined;
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.link = object.link ?? "";
    message.audience = object.audience?.map((e) => e) || [];
    return message;
  },
};

function createBaseDeleteAnnouncementRequest(): DeleteAnnouncementRequest {
  return { context: undefined, id: undefined };
}

export const DeleteAnnouncementRequest: MessageFns<DeleteAnnouncementRequest> = {
  encode(message: DeleteAnnouncementRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.id !== undefined) {
      ObjectId.encode(message.id, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteAnnouncementRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAnnouncementRequest();
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

          message.id = ObjectId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteAnnouncementRequest {
    return {
      context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined,
      id: isSet(object.id) ? ObjectId.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: DeleteAnnouncementRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    if (message.id !== undefined) {
      obj.id = ObjectId.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteAnnouncementRequest>, I>>(base?: I): DeleteAnnouncementRequest {
    return DeleteAnnouncementRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteAnnouncementRequest>, I>>(object: I): DeleteAnnouncementRequest {
    const message = createBaseDeleteAnnouncementRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    message.id = (object.id !== undefined && object.id !== null) ? ObjectId.fromPartial(object.id) : undefined;
    return message;
  },
};

function createBaseDeleteAnnouncementResponse(): DeleteAnnouncementResponse {
  return { success: false };
}

export const DeleteAnnouncementResponse: MessageFns<DeleteAnnouncementResponse> = {
  encode(message: DeleteAnnouncementResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.success !== false) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteAnnouncementResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAnnouncementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.success = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteAnnouncementResponse {
    return { success: isSet(object.success) ? globalThis.Boolean(object.success) : false };
  },

  toJSON(message: DeleteAnnouncementResponse): unknown {
    const obj: any = {};
    if (message.success !== false) {
      obj.success = message.success;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteAnnouncementResponse>, I>>(base?: I): DeleteAnnouncementResponse {
    return DeleteAnnouncementResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteAnnouncementResponse>, I>>(object: I): DeleteAnnouncementResponse {
    const message = createBaseDeleteAnnouncementResponse();
    message.success = object.success ?? false;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
