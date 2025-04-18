// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: utils/aws_file.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "utils";

export interface AWSFile {
  fileName: string;
  preSignedUrl: string;
}

function createBaseAWSFile(): AWSFile {
  return { fileName: "", preSignedUrl: "" };
}

export const AWSFile: MessageFns<AWSFile> = {
  encode(message: AWSFile, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.fileName !== "") {
      writer.uint32(10).string(message.fileName);
    }
    if (message.preSignedUrl !== "") {
      writer.uint32(18).string(message.preSignedUrl);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AWSFile {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAWSFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fileName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.preSignedUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AWSFile {
    return {
      fileName: isSet(object.fileName) ? globalThis.String(object.fileName) : "",
      preSignedUrl: isSet(object.preSignedUrl) ? globalThis.String(object.preSignedUrl) : "",
    };
  },

  toJSON(message: AWSFile): unknown {
    const obj: any = {};
    if (message.fileName !== "") {
      obj.fileName = message.fileName;
    }
    if (message.preSignedUrl !== "") {
      obj.preSignedUrl = message.preSignedUrl;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AWSFile>, I>>(base?: I): AWSFile {
    return AWSFile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AWSFile>, I>>(object: I): AWSFile {
    const message = createBaseAWSFile();
    message.fileName = object.fileName ?? "";
    message.preSignedUrl = object.preSignedUrl ?? "";
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
