// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: organization_service/organization_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";

export const protobufPackage = "organization_service";

/** Request to fetch an organization by its ID */
export interface GetOrganizationRequest {
  /** Context of the request */
  context:
    | RequestContext
    | undefined;
  /** ID of the organization to fetch */
  organizationId: ObjectId | undefined;
}

/** Request to fetch an organization by domain */
export interface GetOrganizationByDomainRequest {
  /** Context of the request */
  context:
    | RequestContext
    | undefined;
  /** Domain name of the organization to fetch */
  domain: string;
}

/** Request to fetch profile settings of an organization by ID */
export interface GetOrganizationProfileSettingsRequest {
  /** Context of the request */
  context:
    | RequestContext
    | undefined;
  /** ID of the organization for which to fetch profile settings */
  organizationId: ObjectId | undefined;
}

function createBaseGetOrganizationRequest(): GetOrganizationRequest {
  return { context: undefined, organizationId: undefined };
}

export const GetOrganizationRequest: MessageFns<GetOrganizationRequest> = {
  encode(message: GetOrganizationRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.organizationId !== undefined) {
      ObjectId.encode(message.organizationId, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetOrganizationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrganizationRequest();
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

          message.organizationId = ObjectId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOrganizationRequest {
    return {
      context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined,
      organizationId: isSet(object.organizationId) ? ObjectId.fromJSON(object.organizationId) : undefined,
    };
  },

  toJSON(message: GetOrganizationRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    if (message.organizationId !== undefined) {
      obj.organizationId = ObjectId.toJSON(message.organizationId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetOrganizationRequest>, I>>(base?: I): GetOrganizationRequest {
    return GetOrganizationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetOrganizationRequest>, I>>(object: I): GetOrganizationRequest {
    const message = createBaseGetOrganizationRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    message.organizationId = (object.organizationId !== undefined && object.organizationId !== null)
      ? ObjectId.fromPartial(object.organizationId)
      : undefined;
    return message;
  },
};

function createBaseGetOrganizationByDomainRequest(): GetOrganizationByDomainRequest {
  return { context: undefined, domain: "" };
}

export const GetOrganizationByDomainRequest: MessageFns<GetOrganizationByDomainRequest> = {
  encode(message: GetOrganizationByDomainRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.domain !== "") {
      writer.uint32(18).string(message.domain);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetOrganizationByDomainRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrganizationByDomainRequest();
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

          message.domain = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOrganizationByDomainRequest {
    return {
      context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined,
      domain: isSet(object.domain) ? globalThis.String(object.domain) : "",
    };
  },

  toJSON(message: GetOrganizationByDomainRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    if (message.domain !== "") {
      obj.domain = message.domain;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetOrganizationByDomainRequest>, I>>(base?: I): GetOrganizationByDomainRequest {
    return GetOrganizationByDomainRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetOrganizationByDomainRequest>, I>>(
    object: I,
  ): GetOrganizationByDomainRequest {
    const message = createBaseGetOrganizationByDomainRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    message.domain = object.domain ?? "";
    return message;
  },
};

function createBaseGetOrganizationProfileSettingsRequest(): GetOrganizationProfileSettingsRequest {
  return { context: undefined, organizationId: undefined };
}

export const GetOrganizationProfileSettingsRequest: MessageFns<GetOrganizationProfileSettingsRequest> = {
  encode(message: GetOrganizationProfileSettingsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.organizationId !== undefined) {
      ObjectId.encode(message.organizationId, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetOrganizationProfileSettingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrganizationProfileSettingsRequest();
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

          message.organizationId = ObjectId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOrganizationProfileSettingsRequest {
    return {
      context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined,
      organizationId: isSet(object.organizationId) ? ObjectId.fromJSON(object.organizationId) : undefined,
    };
  },

  toJSON(message: GetOrganizationProfileSettingsRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    if (message.organizationId !== undefined) {
      obj.organizationId = ObjectId.toJSON(message.organizationId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetOrganizationProfileSettingsRequest>, I>>(
    base?: I,
  ): GetOrganizationProfileSettingsRequest {
    return GetOrganizationProfileSettingsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetOrganizationProfileSettingsRequest>, I>>(
    object: I,
  ): GetOrganizationProfileSettingsRequest {
    const message = createBaseGetOrganizationProfileSettingsRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    message.organizationId = (object.organizationId !== undefined && object.organizationId !== null)
      ? ObjectId.fromPartial(object.organizationId)
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
