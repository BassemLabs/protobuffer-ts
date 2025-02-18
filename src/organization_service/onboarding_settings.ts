// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: organization_service/onboarding_settings.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { AWSFile } from "../utils/aws_file";

export const protobufPackage = "organization_service";

export interface OnboardingSettings {
  hasInterviewForNewcomers: boolean;
  enableGroupApprovalSystem: boolean;
  waitlistFee: number;
  registrationFees: { [key: string]: ItemizedFee };
  reregistrationFees: { [key: string]: ItemizedFee };
  interviewEmailTemplate?: string | undefined;
  postInterviewEmailTemplate?: string | undefined;
  rejectionEmailTemplate: string;
  approvalEmailTemplate: string;
  schoolHandbook: AWSFile[];
}

export interface OnboardingSettings_RegistrationFeesEntry {
  key: string;
  value: ItemizedFee | undefined;
}

export interface OnboardingSettings_ReregistrationFeesEntry {
  key: string;
  value: ItemizedFee | undefined;
}

export interface ItemizedFee {
  title: string;
  description: string;
  items: FeeItem[];
}

export interface FeeItem {
  title: string;
  description: string;
  price: number;
  quantity: number;
}

function createBaseOnboardingSettings(): OnboardingSettings {
  return {
    hasInterviewForNewcomers: false,
    enableGroupApprovalSystem: false,
    waitlistFee: 0,
    registrationFees: {},
    reregistrationFees: {},
    interviewEmailTemplate: "",
    postInterviewEmailTemplate: "",
    rejectionEmailTemplate: "",
    approvalEmailTemplate: "",
    schoolHandbook: [],
  };
}

export const OnboardingSettings: MessageFns<OnboardingSettings> = {
  encode(message: OnboardingSettings, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.hasInterviewForNewcomers !== false) {
      writer.uint32(8).bool(message.hasInterviewForNewcomers);
    }
    if (message.enableGroupApprovalSystem !== false) {
      writer.uint32(16).bool(message.enableGroupApprovalSystem);
    }
    if (message.waitlistFee !== 0) {
      writer.uint32(29).float(message.waitlistFee);
    }
    Object.entries(message.registrationFees).forEach(([key, value]) => {
      OnboardingSettings_RegistrationFeesEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    Object.entries(message.reregistrationFees).forEach(([key, value]) => {
      OnboardingSettings_ReregistrationFeesEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).join();
    });
    if (message.interviewEmailTemplate !== undefined && message.interviewEmailTemplate !== "") {
      writer.uint32(50).string(message.interviewEmailTemplate);
    }
    if (message.postInterviewEmailTemplate !== undefined && message.postInterviewEmailTemplate !== "") {
      writer.uint32(58).string(message.postInterviewEmailTemplate);
    }
    if (message.rejectionEmailTemplate !== "") {
      writer.uint32(66).string(message.rejectionEmailTemplate);
    }
    if (message.approvalEmailTemplate !== "") {
      writer.uint32(74).string(message.approvalEmailTemplate);
    }
    for (const v of message.schoolHandbook) {
      AWSFile.encode(v!, writer.uint32(82).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OnboardingSettings {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOnboardingSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.hasInterviewForNewcomers = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.enableGroupApprovalSystem = reader.bool();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.waitlistFee = reader.float();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = OnboardingSettings_RegistrationFeesEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.registrationFees[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = OnboardingSettings_ReregistrationFeesEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.reregistrationFees[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.interviewEmailTemplate = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.postInterviewEmailTemplate = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.rejectionEmailTemplate = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.approvalEmailTemplate = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.schoolHandbook.push(AWSFile.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OnboardingSettings {
    return {
      hasInterviewForNewcomers: isSet(object.hasInterviewForNewcomers)
        ? globalThis.Boolean(object.hasInterviewForNewcomers)
        : false,
      enableGroupApprovalSystem: isSet(object.enableGroupApprovalSystem)
        ? globalThis.Boolean(object.enableGroupApprovalSystem)
        : false,
      waitlistFee: isSet(object.waitlistFee) ? globalThis.Number(object.waitlistFee) : 0,
      registrationFees: isObject(object.registrationFees)
        ? Object.entries(object.registrationFees).reduce<{ [key: string]: ItemizedFee }>((acc, [key, value]) => {
          acc[key] = ItemizedFee.fromJSON(value);
          return acc;
        }, {})
        : {},
      reregistrationFees: isObject(object.reregistrationFees)
        ? Object.entries(object.reregistrationFees).reduce<{ [key: string]: ItemizedFee }>((acc, [key, value]) => {
          acc[key] = ItemizedFee.fromJSON(value);
          return acc;
        }, {})
        : {},
      interviewEmailTemplate: isSet(object.interviewEmailTemplate)
        ? globalThis.String(object.interviewEmailTemplate)
        : "",
      postInterviewEmailTemplate: isSet(object.postInterviewEmailTemplate)
        ? globalThis.String(object.postInterviewEmailTemplate)
        : "",
      rejectionEmailTemplate: isSet(object.rejectionEmailTemplate)
        ? globalThis.String(object.rejectionEmailTemplate)
        : "",
      approvalEmailTemplate: isSet(object.approvalEmailTemplate) ? globalThis.String(object.approvalEmailTemplate) : "",
      schoolHandbook: globalThis.Array.isArray(object?.schoolHandbook)
        ? object.schoolHandbook.map((e: any) => AWSFile.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OnboardingSettings): unknown {
    const obj: any = {};
    if (message.hasInterviewForNewcomers !== false) {
      obj.hasInterviewForNewcomers = message.hasInterviewForNewcomers;
    }
    if (message.enableGroupApprovalSystem !== false) {
      obj.enableGroupApprovalSystem = message.enableGroupApprovalSystem;
    }
    if (message.waitlistFee !== 0) {
      obj.waitlistFee = message.waitlistFee;
    }
    if (message.registrationFees) {
      const entries = Object.entries(message.registrationFees);
      if (entries.length > 0) {
        obj.registrationFees = {};
        entries.forEach(([k, v]) => {
          obj.registrationFees[k] = ItemizedFee.toJSON(v);
        });
      }
    }
    if (message.reregistrationFees) {
      const entries = Object.entries(message.reregistrationFees);
      if (entries.length > 0) {
        obj.reregistrationFees = {};
        entries.forEach(([k, v]) => {
          obj.reregistrationFees[k] = ItemizedFee.toJSON(v);
        });
      }
    }
    if (message.interviewEmailTemplate !== undefined && message.interviewEmailTemplate !== "") {
      obj.interviewEmailTemplate = message.interviewEmailTemplate;
    }
    if (message.postInterviewEmailTemplate !== undefined && message.postInterviewEmailTemplate !== "") {
      obj.postInterviewEmailTemplate = message.postInterviewEmailTemplate;
    }
    if (message.rejectionEmailTemplate !== "") {
      obj.rejectionEmailTemplate = message.rejectionEmailTemplate;
    }
    if (message.approvalEmailTemplate !== "") {
      obj.approvalEmailTemplate = message.approvalEmailTemplate;
    }
    if (message.schoolHandbook?.length) {
      obj.schoolHandbook = message.schoolHandbook.map((e) => AWSFile.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OnboardingSettings>, I>>(base?: I): OnboardingSettings {
    return OnboardingSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OnboardingSettings>, I>>(object: I): OnboardingSettings {
    const message = createBaseOnboardingSettings();
    message.hasInterviewForNewcomers = object.hasInterviewForNewcomers ?? false;
    message.enableGroupApprovalSystem = object.enableGroupApprovalSystem ?? false;
    message.waitlistFee = object.waitlistFee ?? 0;
    message.registrationFees = Object.entries(object.registrationFees ?? {}).reduce<{ [key: string]: ItemizedFee }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = ItemizedFee.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.reregistrationFees = Object.entries(object.reregistrationFees ?? {}).reduce<{ [key: string]: ItemizedFee }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = ItemizedFee.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.interviewEmailTemplate = object.interviewEmailTemplate ?? "";
    message.postInterviewEmailTemplate = object.postInterviewEmailTemplate ?? "";
    message.rejectionEmailTemplate = object.rejectionEmailTemplate ?? "";
    message.approvalEmailTemplate = object.approvalEmailTemplate ?? "";
    message.schoolHandbook = object.schoolHandbook?.map((e) => AWSFile.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOnboardingSettings_RegistrationFeesEntry(): OnboardingSettings_RegistrationFeesEntry {
  return { key: "", value: undefined };
}

export const OnboardingSettings_RegistrationFeesEntry: MessageFns<OnboardingSettings_RegistrationFeesEntry> = {
  encode(message: OnboardingSettings_RegistrationFeesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ItemizedFee.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OnboardingSettings_RegistrationFeesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOnboardingSettings_RegistrationFeesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = ItemizedFee.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OnboardingSettings_RegistrationFeesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? ItemizedFee.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: OnboardingSettings_RegistrationFeesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = ItemizedFee.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OnboardingSettings_RegistrationFeesEntry>, I>>(
    base?: I,
  ): OnboardingSettings_RegistrationFeesEntry {
    return OnboardingSettings_RegistrationFeesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OnboardingSettings_RegistrationFeesEntry>, I>>(
    object: I,
  ): OnboardingSettings_RegistrationFeesEntry {
    const message = createBaseOnboardingSettings_RegistrationFeesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ItemizedFee.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseOnboardingSettings_ReregistrationFeesEntry(): OnboardingSettings_ReregistrationFeesEntry {
  return { key: "", value: undefined };
}

export const OnboardingSettings_ReregistrationFeesEntry: MessageFns<OnboardingSettings_ReregistrationFeesEntry> = {
  encode(message: OnboardingSettings_ReregistrationFeesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ItemizedFee.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OnboardingSettings_ReregistrationFeesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOnboardingSettings_ReregistrationFeesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = ItemizedFee.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OnboardingSettings_ReregistrationFeesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? ItemizedFee.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: OnboardingSettings_ReregistrationFeesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = ItemizedFee.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OnboardingSettings_ReregistrationFeesEntry>, I>>(
    base?: I,
  ): OnboardingSettings_ReregistrationFeesEntry {
    return OnboardingSettings_ReregistrationFeesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OnboardingSettings_ReregistrationFeesEntry>, I>>(
    object: I,
  ): OnboardingSettings_ReregistrationFeesEntry {
    const message = createBaseOnboardingSettings_ReregistrationFeesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ItemizedFee.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseItemizedFee(): ItemizedFee {
  return { title: "", description: "", items: [] };
}

export const ItemizedFee: MessageFns<ItemizedFee> = {
  encode(message: ItemizedFee, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.items) {
      FeeItem.encode(v!, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ItemizedFee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItemizedFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.items.push(FeeItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ItemizedFee {
    return {
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      items: globalThis.Array.isArray(object?.items) ? object.items.map((e: any) => FeeItem.fromJSON(e)) : [],
    };
  },

  toJSON(message: ItemizedFee): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.items?.length) {
      obj.items = message.items.map((e) => FeeItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ItemizedFee>, I>>(base?: I): ItemizedFee {
    return ItemizedFee.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ItemizedFee>, I>>(object: I): ItemizedFee {
    const message = createBaseItemizedFee();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.items = object.items?.map((e) => FeeItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFeeItem(): FeeItem {
  return { title: "", description: "", price: 0, quantity: 0 };
}

export const FeeItem: MessageFns<FeeItem> = {
  encode(message: FeeItem, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.price !== 0) {
      writer.uint32(29).float(message.price);
    }
    if (message.quantity !== 0) {
      writer.uint32(32).uint32(message.quantity);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FeeItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.price = reader.float();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.quantity = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeeItem {
    return {
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      price: isSet(object.price) ? globalThis.Number(object.price) : 0,
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
    };
  },

  toJSON(message: FeeItem): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.price !== 0) {
      obj.price = message.price;
    }
    if (message.quantity !== 0) {
      obj.quantity = Math.round(message.quantity);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FeeItem>, I>>(base?: I): FeeItem {
    return FeeItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FeeItem>, I>>(object: I): FeeItem {
    const message = createBaseFeeItem();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.price = object.price ?? 0;
    message.quantity = object.quantity ?? 0;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
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
