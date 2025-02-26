// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: organization_service/organization_profile_settings.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";

export const protobufPackage = "organization_service";

export enum ProfileSection {
  OVERVIEW = "OVERVIEW",
  PROFILE = "PROFILE",
  FAMILY = "FAMILY",
  HEALTH = "HEALTH",
  HISTORY = "HISTORY",
  DOCUMENTS = "DOCUMENTS",
  FINANCIAL = "FINANCIAL",
  DONATION = "DONATION",
  MISC = "MISC",
  INCIDENTS = "INCIDENTS",
  TRANSACTIONS = "TRANSACTIONS",
  FORMS = "FORMS",
  ROLES = "ROLES",
  SCHEDULE = "SCHEDULE",
  INTERVIEW = "INTERVIEW",
  WAITLIST = "WAITLIST",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function profileSectionFromJSON(object: any): ProfileSection {
  switch (object) {
    case 0:
    case "OVERVIEW":
      return ProfileSection.OVERVIEW;
    case 1:
    case "PROFILE":
      return ProfileSection.PROFILE;
    case 2:
    case "FAMILY":
      return ProfileSection.FAMILY;
    case 3:
    case "HEALTH":
      return ProfileSection.HEALTH;
    case 4:
    case "HISTORY":
      return ProfileSection.HISTORY;
    case 5:
    case "DOCUMENTS":
      return ProfileSection.DOCUMENTS;
    case 6:
    case "FINANCIAL":
      return ProfileSection.FINANCIAL;
    case 7:
    case "DONATION":
      return ProfileSection.DONATION;
    case 8:
    case "MISC":
      return ProfileSection.MISC;
    case 9:
    case "INCIDENTS":
      return ProfileSection.INCIDENTS;
    case 10:
    case "TRANSACTIONS":
      return ProfileSection.TRANSACTIONS;
    case 11:
    case "FORMS":
      return ProfileSection.FORMS;
    case 12:
    case "ROLES":
      return ProfileSection.ROLES;
    case 13:
    case "SCHEDULE":
      return ProfileSection.SCHEDULE;
    case 14:
    case "INTERVIEW":
      return ProfileSection.INTERVIEW;
    case 15:
    case "WAITLIST":
      return ProfileSection.WAITLIST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProfileSection.UNRECOGNIZED;
  }
}

export function profileSectionToJSON(object: ProfileSection): string {
  switch (object) {
    case ProfileSection.OVERVIEW:
      return "OVERVIEW";
    case ProfileSection.PROFILE:
      return "PROFILE";
    case ProfileSection.FAMILY:
      return "FAMILY";
    case ProfileSection.HEALTH:
      return "HEALTH";
    case ProfileSection.HISTORY:
      return "HISTORY";
    case ProfileSection.DOCUMENTS:
      return "DOCUMENTS";
    case ProfileSection.FINANCIAL:
      return "FINANCIAL";
    case ProfileSection.DONATION:
      return "DONATION";
    case ProfileSection.MISC:
      return "MISC";
    case ProfileSection.INCIDENTS:
      return "INCIDENTS";
    case ProfileSection.TRANSACTIONS:
      return "TRANSACTIONS";
    case ProfileSection.FORMS:
      return "FORMS";
    case ProfileSection.ROLES:
      return "ROLES";
    case ProfileSection.SCHEDULE:
      return "SCHEDULE";
    case ProfileSection.INTERVIEW:
      return "INTERVIEW";
    case ProfileSection.WAITLIST:
      return "WAITLIST";
    case ProfileSection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function profileSectionToNumber(object: ProfileSection): number {
  switch (object) {
    case ProfileSection.OVERVIEW:
      return 0;
    case ProfileSection.PROFILE:
      return 1;
    case ProfileSection.FAMILY:
      return 2;
    case ProfileSection.HEALTH:
      return 3;
    case ProfileSection.HISTORY:
      return 4;
    case ProfileSection.DOCUMENTS:
      return 5;
    case ProfileSection.FINANCIAL:
      return 6;
    case ProfileSection.DONATION:
      return 7;
    case ProfileSection.MISC:
      return 8;
    case ProfileSection.INCIDENTS:
      return 9;
    case ProfileSection.TRANSACTIONS:
      return 10;
    case ProfileSection.FORMS:
      return 11;
    case ProfileSection.ROLES:
      return 12;
    case ProfileSection.SCHEDULE:
      return 13;
    case ProfileSection.INTERVIEW:
      return 14;
    case ProfileSection.WAITLIST:
      return 15;
    case ProfileSection.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface OrganizationProfileSettings {
  studentProfileSections: ProfileSection[];
  parentProfileSections: ProfileSection[];
  teacherProfileSections: ProfileSection[];
  studentPrimaryIdCustomField?: ObjectId | undefined;
}

function createBaseOrganizationProfileSettings(): OrganizationProfileSettings {
  return {
    studentProfileSections: [],
    parentProfileSections: [],
    teacherProfileSections: [],
    studentPrimaryIdCustomField: undefined,
  };
}

export const OrganizationProfileSettings: MessageFns<OrganizationProfileSettings> = {
  encode(message: OrganizationProfileSettings, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.studentProfileSections) {
      writer.int32(profileSectionToNumber(v));
    }
    writer.join();
    writer.uint32(18).fork();
    for (const v of message.parentProfileSections) {
      writer.int32(profileSectionToNumber(v));
    }
    writer.join();
    writer.uint32(26).fork();
    for (const v of message.teacherProfileSections) {
      writer.int32(profileSectionToNumber(v));
    }
    writer.join();
    if (message.studentPrimaryIdCustomField !== undefined) {
      ObjectId.encode(message.studentPrimaryIdCustomField, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OrganizationProfileSettings {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrganizationProfileSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.studentProfileSections.push(profileSectionFromJSON(reader.int32()));

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.studentProfileSections.push(profileSectionFromJSON(reader.int32()));
            }

            continue;
          }

          break;
        case 2:
          if (tag === 16) {
            message.parentProfileSections.push(profileSectionFromJSON(reader.int32()));

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.parentProfileSections.push(profileSectionFromJSON(reader.int32()));
            }

            continue;
          }

          break;
        case 3:
          if (tag === 24) {
            message.teacherProfileSections.push(profileSectionFromJSON(reader.int32()));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.teacherProfileSections.push(profileSectionFromJSON(reader.int32()));
            }

            continue;
          }

          break;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.studentPrimaryIdCustomField = ObjectId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OrganizationProfileSettings {
    return {
      studentProfileSections: globalThis.Array.isArray(object?.studentProfileSections)
        ? object.studentProfileSections.map((e: any) => profileSectionFromJSON(e))
        : [],
      parentProfileSections: globalThis.Array.isArray(object?.parentProfileSections)
        ? object.parentProfileSections.map((e: any) => profileSectionFromJSON(e))
        : [],
      teacherProfileSections: globalThis.Array.isArray(object?.teacherProfileSections)
        ? object.teacherProfileSections.map((e: any) => profileSectionFromJSON(e))
        : [],
      studentPrimaryIdCustomField: isSet(object.studentPrimaryIdCustomField)
        ? ObjectId.fromJSON(object.studentPrimaryIdCustomField)
        : undefined,
    };
  },

  toJSON(message: OrganizationProfileSettings): unknown {
    const obj: any = {};
    if (message.studentProfileSections?.length) {
      obj.studentProfileSections = message.studentProfileSections.map((e) => profileSectionToJSON(e));
    }
    if (message.parentProfileSections?.length) {
      obj.parentProfileSections = message.parentProfileSections.map((e) => profileSectionToJSON(e));
    }
    if (message.teacherProfileSections?.length) {
      obj.teacherProfileSections = message.teacherProfileSections.map((e) => profileSectionToJSON(e));
    }
    if (message.studentPrimaryIdCustomField !== undefined) {
      obj.studentPrimaryIdCustomField = ObjectId.toJSON(message.studentPrimaryIdCustomField);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OrganizationProfileSettings>, I>>(base?: I): OrganizationProfileSettings {
    return OrganizationProfileSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OrganizationProfileSettings>, I>>(object: I): OrganizationProfileSettings {
    const message = createBaseOrganizationProfileSettings();
    message.studentProfileSections = object.studentProfileSections?.map((e) => e) || [];
    message.parentProfileSections = object.parentProfileSections?.map((e) => e) || [];
    message.teacherProfileSections = object.teacherProfileSections?.map((e) => e) || [];
    message.studentPrimaryIdCustomField =
      (object.studentPrimaryIdCustomField !== undefined && object.studentPrimaryIdCustomField !== null)
        ? ObjectId.fromPartial(object.studentPrimaryIdCustomField)
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
