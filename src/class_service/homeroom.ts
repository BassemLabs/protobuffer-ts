// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: class_service/homeroom.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { Semester } from "./semester";

export const protobufPackage = "class_service";

export interface Homeroom {
  id: ObjectId | undefined;
  archived: boolean;
  semester: Semester | undefined;
  name: string;
  /** Option<String> is represented as a regular string */
  grade?: string | undefined;
  teacherIds: ObjectId[];
  studentIds: ObjectId[];
  gclassId?: string | undefined;
}

function createBaseHomeroom(): Homeroom {
  return {
    id: undefined,
    archived: false,
    semester: undefined,
    name: "",
    grade: "",
    teacherIds: [],
    studentIds: [],
    gclassId: "",
  };
}

export const Homeroom: MessageFns<Homeroom> = {
  encode(message: Homeroom, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== undefined) {
      ObjectId.encode(message.id, writer.uint32(10).fork()).join();
    }
    if (message.archived !== false) {
      writer.uint32(16).bool(message.archived);
    }
    if (message.semester !== undefined) {
      Semester.encode(message.semester, writer.uint32(26).fork()).join();
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.grade !== undefined && message.grade !== "") {
      writer.uint32(42).string(message.grade);
    }
    for (const v of message.teacherIds) {
      ObjectId.encode(v!, writer.uint32(50).fork()).join();
    }
    for (const v of message.studentIds) {
      ObjectId.encode(v!, writer.uint32(58).fork()).join();
    }
    if (message.gclassId !== undefined && message.gclassId !== "") {
      writer.uint32(66).string(message.gclassId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Homeroom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHomeroom();
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
          if (tag !== 16) {
            break;
          }

          message.archived = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.semester = Semester.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.grade = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.teacherIds.push(ObjectId.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.studentIds.push(ObjectId.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.gclassId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Homeroom {
    return {
      id: isSet(object.id) ? ObjectId.fromJSON(object.id) : undefined,
      archived: isSet(object.archived) ? globalThis.Boolean(object.archived) : false,
      semester: isSet(object.semester) ? Semester.fromJSON(object.semester) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      grade: isSet(object.grade) ? globalThis.String(object.grade) : "",
      teacherIds: globalThis.Array.isArray(object?.teacherIds)
        ? object.teacherIds.map((e: any) => ObjectId.fromJSON(e))
        : [],
      studentIds: globalThis.Array.isArray(object?.studentIds)
        ? object.studentIds.map((e: any) => ObjectId.fromJSON(e))
        : [],
      gclassId: isSet(object.gclassId) ? globalThis.String(object.gclassId) : "",
    };
  },

  toJSON(message: Homeroom): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = ObjectId.toJSON(message.id);
    }
    if (message.archived !== false) {
      obj.archived = message.archived;
    }
    if (message.semester !== undefined) {
      obj.semester = Semester.toJSON(message.semester);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.grade !== undefined && message.grade !== "") {
      obj.grade = message.grade;
    }
    if (message.teacherIds?.length) {
      obj.teacherIds = message.teacherIds.map((e) => ObjectId.toJSON(e));
    }
    if (message.studentIds?.length) {
      obj.studentIds = message.studentIds.map((e) => ObjectId.toJSON(e));
    }
    if (message.gclassId !== undefined && message.gclassId !== "") {
      obj.gclassId = message.gclassId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Homeroom>, I>>(base?: I): Homeroom {
    return Homeroom.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Homeroom>, I>>(object: I): Homeroom {
    const message = createBaseHomeroom();
    message.id = (object.id !== undefined && object.id !== null) ? ObjectId.fromPartial(object.id) : undefined;
    message.archived = object.archived ?? false;
    message.semester = (object.semester !== undefined && object.semester !== null)
      ? Semester.fromPartial(object.semester)
      : undefined;
    message.name = object.name ?? "";
    message.grade = object.grade ?? "";
    message.teacherIds = object.teacherIds?.map((e) => ObjectId.fromPartial(e)) || [];
    message.studentIds = object.studentIds?.map((e) => ObjectId.fromPartial(e)) || [];
    message.gclassId = object.gclassId ?? "";
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
