// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: user_service/email_template.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { UserType, userTypeFromJSON, userTypeToJSON, userTypeToNumber } from "../utils/user_type";

export const protobufPackage = "user_service";

export enum EmailTemplateKey {
  REJECTION_EMAIL = "REJECTION_EMAIL",
  ENROLLMENT_CONFIRMATION_EMAIL = "ENROLLMENT_CONFIRMATION_EMAIL",
  APPROVAL_EMAIL = "APPROVAL_EMAIL",
  INTERVIEW_EMAIL = "INTERVIEW_EMAIL",
  FIELD_GROUP_REJECTION_EMAIL = "FIELD_GROUP_REJECTION_EMAIL",
  WITHDRAW_EMAIL = "WITHDRAW_EMAIL",
  MOVE_STUDENT_ADMISSION_YEAR_EMAIL = "MOVE_STUDENT_ADMISSION_YEAR_EMAIL",
  REREGISTRATION_INVITATION_EMAIL = "REREGISTRATION_INVITATION_EMAIL",
  NEW_TEACHER_INVITATION_EMAIL = "NEW_TEACHER_INVITATION_EMAIL",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function emailTemplateKeyFromJSON(object: any): EmailTemplateKey {
  switch (object) {
    case 0:
    case "REJECTION_EMAIL":
      return EmailTemplateKey.REJECTION_EMAIL;
    case 1:
    case "ENROLLMENT_CONFIRMATION_EMAIL":
      return EmailTemplateKey.ENROLLMENT_CONFIRMATION_EMAIL;
    case 2:
    case "APPROVAL_EMAIL":
      return EmailTemplateKey.APPROVAL_EMAIL;
    case 3:
    case "INTERVIEW_EMAIL":
      return EmailTemplateKey.INTERVIEW_EMAIL;
    case 4:
    case "FIELD_GROUP_REJECTION_EMAIL":
      return EmailTemplateKey.FIELD_GROUP_REJECTION_EMAIL;
    case 5:
    case "WITHDRAW_EMAIL":
      return EmailTemplateKey.WITHDRAW_EMAIL;
    case 6:
    case "MOVE_STUDENT_ADMISSION_YEAR_EMAIL":
      return EmailTemplateKey.MOVE_STUDENT_ADMISSION_YEAR_EMAIL;
    case 7:
    case "REREGISTRATION_INVITATION_EMAIL":
      return EmailTemplateKey.REREGISTRATION_INVITATION_EMAIL;
    case 8:
    case "NEW_TEACHER_INVITATION_EMAIL":
      return EmailTemplateKey.NEW_TEACHER_INVITATION_EMAIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EmailTemplateKey.UNRECOGNIZED;
  }
}

export function emailTemplateKeyToJSON(object: EmailTemplateKey): string {
  switch (object) {
    case EmailTemplateKey.REJECTION_EMAIL:
      return "REJECTION_EMAIL";
    case EmailTemplateKey.ENROLLMENT_CONFIRMATION_EMAIL:
      return "ENROLLMENT_CONFIRMATION_EMAIL";
    case EmailTemplateKey.APPROVAL_EMAIL:
      return "APPROVAL_EMAIL";
    case EmailTemplateKey.INTERVIEW_EMAIL:
      return "INTERVIEW_EMAIL";
    case EmailTemplateKey.FIELD_GROUP_REJECTION_EMAIL:
      return "FIELD_GROUP_REJECTION_EMAIL";
    case EmailTemplateKey.WITHDRAW_EMAIL:
      return "WITHDRAW_EMAIL";
    case EmailTemplateKey.MOVE_STUDENT_ADMISSION_YEAR_EMAIL:
      return "MOVE_STUDENT_ADMISSION_YEAR_EMAIL";
    case EmailTemplateKey.REREGISTRATION_INVITATION_EMAIL:
      return "REREGISTRATION_INVITATION_EMAIL";
    case EmailTemplateKey.NEW_TEACHER_INVITATION_EMAIL:
      return "NEW_TEACHER_INVITATION_EMAIL";
    case EmailTemplateKey.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function emailTemplateKeyToNumber(object: EmailTemplateKey): number {
  switch (object) {
    case EmailTemplateKey.REJECTION_EMAIL:
      return 0;
    case EmailTemplateKey.ENROLLMENT_CONFIRMATION_EMAIL:
      return 1;
    case EmailTemplateKey.APPROVAL_EMAIL:
      return 2;
    case EmailTemplateKey.INTERVIEW_EMAIL:
      return 3;
    case EmailTemplateKey.FIELD_GROUP_REJECTION_EMAIL:
      return 4;
    case EmailTemplateKey.WITHDRAW_EMAIL:
      return 5;
    case EmailTemplateKey.MOVE_STUDENT_ADMISSION_YEAR_EMAIL:
      return 6;
    case EmailTemplateKey.REREGISTRATION_INVITATION_EMAIL:
      return 7;
    case EmailTemplateKey.NEW_TEACHER_INVITATION_EMAIL:
      return 8;
    case EmailTemplateKey.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface EmailTemplate {
  id: ObjectId | undefined;
  organizationId: ObjectId | undefined;
  templateKey: EmailTemplateKey;
  title: string;
  header: string;
  body: string;
  footer: string;
  receiverUserType: UserType;
}

function createBaseEmailTemplate(): EmailTemplate {
  return {
    id: undefined,
    organizationId: undefined,
    templateKey: EmailTemplateKey.REJECTION_EMAIL,
    title: "",
    header: "",
    body: "",
    footer: "",
    receiverUserType: UserType.None,
  };
}

export const EmailTemplate: MessageFns<EmailTemplate> = {
  encode(message: EmailTemplate, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== undefined) {
      ObjectId.encode(message.id, writer.uint32(10).fork()).join();
    }
    if (message.organizationId !== undefined) {
      ObjectId.encode(message.organizationId, writer.uint32(18).fork()).join();
    }
    if (message.templateKey !== EmailTemplateKey.REJECTION_EMAIL) {
      writer.uint32(24).int32(emailTemplateKeyToNumber(message.templateKey));
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.header !== "") {
      writer.uint32(42).string(message.header);
    }
    if (message.body !== "") {
      writer.uint32(50).string(message.body);
    }
    if (message.footer !== "") {
      writer.uint32(58).string(message.footer);
    }
    if (message.receiverUserType !== UserType.None) {
      writer.uint32(64).int32(userTypeToNumber(message.receiverUserType));
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EmailTemplate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmailTemplate();
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

          message.organizationId = ObjectId.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.templateKey = emailTemplateKeyFromJSON(reader.int32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.title = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.header = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.body = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.footer = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.receiverUserType = userTypeFromJSON(reader.int32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EmailTemplate {
    return {
      id: isSet(object.id) ? ObjectId.fromJSON(object.id) : undefined,
      organizationId: isSet(object.organizationId) ? ObjectId.fromJSON(object.organizationId) : undefined,
      templateKey: isSet(object.templateKey)
        ? emailTemplateKeyFromJSON(object.templateKey)
        : EmailTemplateKey.REJECTION_EMAIL,
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      header: isSet(object.header) ? globalThis.String(object.header) : "",
      body: isSet(object.body) ? globalThis.String(object.body) : "",
      footer: isSet(object.footer) ? globalThis.String(object.footer) : "",
      receiverUserType: isSet(object.receiverUserType) ? userTypeFromJSON(object.receiverUserType) : UserType.None,
    };
  },

  toJSON(message: EmailTemplate): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = ObjectId.toJSON(message.id);
    }
    if (message.organizationId !== undefined) {
      obj.organizationId = ObjectId.toJSON(message.organizationId);
    }
    if (message.templateKey !== EmailTemplateKey.REJECTION_EMAIL) {
      obj.templateKey = emailTemplateKeyToJSON(message.templateKey);
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.header !== "") {
      obj.header = message.header;
    }
    if (message.body !== "") {
      obj.body = message.body;
    }
    if (message.footer !== "") {
      obj.footer = message.footer;
    }
    if (message.receiverUserType !== UserType.None) {
      obj.receiverUserType = userTypeToJSON(message.receiverUserType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EmailTemplate>, I>>(base?: I): EmailTemplate {
    return EmailTemplate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EmailTemplate>, I>>(object: I): EmailTemplate {
    const message = createBaseEmailTemplate();
    message.id = (object.id !== undefined && object.id !== null) ? ObjectId.fromPartial(object.id) : undefined;
    message.organizationId = (object.organizationId !== undefined && object.organizationId !== null)
      ? ObjectId.fromPartial(object.organizationId)
      : undefined;
    message.templateKey = object.templateKey ?? EmailTemplateKey.REJECTION_EMAIL;
    message.title = object.title ?? "";
    message.header = object.header ?? "";
    message.body = object.body ?? "";
    message.footer = object.footer ?? "";
    message.receiverUserType = object.receiverUserType ?? UserType.None;
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
