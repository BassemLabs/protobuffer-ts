// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: organization_service/organization.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { OrganizationProfileSettings } from "./organization_profile_settings";

export const protobufPackage = "organization_service";

export interface Organization {
  id: ObjectId | undefined;
  name: string;
  defaultDomain: string;
  domains: string[];
  organizationProfileSettings: OrganizationProfileSettings | undefined;
}

function createBaseOrganization(): Organization {
  return { id: undefined, name: "", defaultDomain: "", domains: [], organizationProfileSettings: undefined };
}

export const Organization: MessageFns<Organization> = {
  encode(message: Organization, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== undefined) {
      ObjectId.encode(message.id, writer.uint32(10).fork()).join();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.defaultDomain !== "") {
      writer.uint32(26).string(message.defaultDomain);
    }
    for (const v of message.domains) {
      writer.uint32(34).string(v!);
    }
    if (message.organizationProfileSettings !== undefined) {
      OrganizationProfileSettings.encode(message.organizationProfileSettings, writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Organization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrganization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = ObjectId.decode(reader, reader.uint32());
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

          message.defaultDomain = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.domains.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.organizationProfileSettings = OrganizationProfileSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Organization {
    return {
      id: isSet(object.id) ? ObjectId.fromJSON(object.id) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      defaultDomain: isSet(object.defaultDomain) ? globalThis.String(object.defaultDomain) : "",
      domains: globalThis.Array.isArray(object?.domains) ? object.domains.map((e: any) => globalThis.String(e)) : [],
      organizationProfileSettings: isSet(object.organizationProfileSettings)
        ? OrganizationProfileSettings.fromJSON(object.organizationProfileSettings)
        : undefined,
    };
  },

  toJSON(message: Organization): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = ObjectId.toJSON(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.defaultDomain !== "") {
      obj.defaultDomain = message.defaultDomain;
    }
    if (message.domains?.length) {
      obj.domains = message.domains;
    }
    if (message.organizationProfileSettings !== undefined) {
      obj.organizationProfileSettings = OrganizationProfileSettings.toJSON(message.organizationProfileSettings);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Organization>, I>>(base?: I): Organization {
    return Organization.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Organization>, I>>(object: I): Organization {
    const message = createBaseOrganization();
    message.id = (object.id !== undefined && object.id !== null) ? ObjectId.fromPartial(object.id) : undefined;
    message.name = object.name ?? "";
    message.defaultDomain = object.defaultDomain ?? "";
    message.domains = object.domains?.map((e) => e) || [];
    message.organizationProfileSettings =
      (object.organizationProfileSettings !== undefined && object.organizationProfileSettings !== null)
        ? OrganizationProfileSettings.fromPartial(object.organizationProfileSettings)
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
