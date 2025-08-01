// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: payment_service/processing_fees_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { RequestContext } from "../utils/request_context";
import {
  FeeType,
  feeTypeFromJSON,
  feeTypeToJSON,
  feeTypeToNumber,
  InvoiceType,
  invoiceTypeFromJSON,
  invoiceTypeToJSON,
  invoiceTypeToNumber,
  ProcessingFee,
} from "./processing_fees";
import {
  DiscountValueType,
  discountValueTypeFromJSON,
  discountValueTypeToJSON,
  discountValueTypeToNumber,
} from "./tuition";

export const protobufPackage = "payment_service";

/** single processing fee */
export interface ListProcessingFeesRequest {
  context: RequestContext | undefined;
  archived: boolean;
}

export interface ListProcessingFeesResponse {
  fees: ProcessingFee[];
}

export interface CreateProcessingFeeRequest {
  context: RequestContext | undefined;
  invoiceType: InvoiceType;
  feeType: FeeType;
  valueType: DiscountValueType;
  value: number;
  capAmount?: number | undefined;
}

export interface GetProcessingFeeRequest {
  context: RequestContext | undefined;
  id: ObjectId | undefined;
}

export interface UpdateProcessingFeeRequest {
  context: RequestContext | undefined;
  id: ObjectId | undefined;
  invoiceType: InvoiceType;
  feeType: FeeType;
  valueType: DiscountValueType;
  value: number;
  capAmount?: number | undefined;
}

export interface ArchiveProcessingFeeRequest {
  context: RequestContext | undefined;
  id: ObjectId | undefined;
}

export interface UnarchiveProcessingFeeRequest {
  context: RequestContext | undefined;
  id: ObjectId | undefined;
}

export interface GetActiveProcessingFeesRequest {
  context: RequestContext | undefined;
  invoiceType: InvoiceType;
}

/** organization level */
export interface GetOrganizationProcessingFeeRequest {
  context: RequestContext | undefined;
}

export interface UpdateOrganizationProcessingFeeRequest {
  context: RequestContext | undefined;
  tuitionInvoiceFeesEnabled: boolean;
  nonTuitionInvoiceFeesEnabled: boolean;
}

function createBaseListProcessingFeesRequest(): ListProcessingFeesRequest {
  return { context: undefined, archived: false };
}

export const ListProcessingFeesRequest: MessageFns<ListProcessingFeesRequest> = {
  encode(message: ListProcessingFeesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.archived !== false) {
      writer.uint32(16).bool(message.archived);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListProcessingFeesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProcessingFeesRequest();
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
          if (tag !== 16) {
            break;
          }

          message.archived = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListProcessingFeesRequest {
    return {
      context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined,
      archived: isSet(object.archived) ? globalThis.Boolean(object.archived) : false,
    };
  },

  toJSON(message: ListProcessingFeesRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    if (message.archived !== false) {
      obj.archived = message.archived;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListProcessingFeesRequest>, I>>(base?: I): ListProcessingFeesRequest {
    return ListProcessingFeesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListProcessingFeesRequest>, I>>(object: I): ListProcessingFeesRequest {
    const message = createBaseListProcessingFeesRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    message.archived = object.archived ?? false;
    return message;
  },
};

function createBaseListProcessingFeesResponse(): ListProcessingFeesResponse {
  return { fees: [] };
}

export const ListProcessingFeesResponse: MessageFns<ListProcessingFeesResponse> = {
  encode(message: ListProcessingFeesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.fees) {
      ProcessingFee.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListProcessingFeesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProcessingFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fees.push(ProcessingFee.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListProcessingFeesResponse {
    return {
      fees: globalThis.Array.isArray(object?.fees) ? object.fees.map((e: any) => ProcessingFee.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListProcessingFeesResponse): unknown {
    const obj: any = {};
    if (message.fees?.length) {
      obj.fees = message.fees.map((e) => ProcessingFee.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListProcessingFeesResponse>, I>>(base?: I): ListProcessingFeesResponse {
    return ListProcessingFeesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListProcessingFeesResponse>, I>>(object: I): ListProcessingFeesResponse {
    const message = createBaseListProcessingFeesResponse();
    message.fees = object.fees?.map((e) => ProcessingFee.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateProcessingFeeRequest(): CreateProcessingFeeRequest {
  return {
    context: undefined,
    invoiceType: InvoiceType.TUITION,
    feeType: FeeType.CARD_FEE,
    valueType: DiscountValueType.AMOUNT,
    value: 0,
    capAmount: 0,
  };
}

export const CreateProcessingFeeRequest: MessageFns<CreateProcessingFeeRequest> = {
  encode(message: CreateProcessingFeeRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.invoiceType !== InvoiceType.TUITION) {
      writer.uint32(16).int32(invoiceTypeToNumber(message.invoiceType));
    }
    if (message.feeType !== FeeType.CARD_FEE) {
      writer.uint32(24).int32(feeTypeToNumber(message.feeType));
    }
    if (message.valueType !== DiscountValueType.AMOUNT) {
      writer.uint32(32).int32(discountValueTypeToNumber(message.valueType));
    }
    if (message.value !== 0) {
      writer.uint32(41).double(message.value);
    }
    if (message.capAmount !== undefined && message.capAmount !== 0) {
      writer.uint32(49).double(message.capAmount);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateProcessingFeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProcessingFeeRequest();
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
          if (tag !== 16) {
            break;
          }

          message.invoiceType = invoiceTypeFromJSON(reader.int32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.feeType = feeTypeFromJSON(reader.int32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.valueType = discountValueTypeFromJSON(reader.int32());
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.value = reader.double();
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.capAmount = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProcessingFeeRequest {
    return {
      context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined,
      invoiceType: isSet(object.invoiceType) ? invoiceTypeFromJSON(object.invoiceType) : InvoiceType.TUITION,
      feeType: isSet(object.feeType) ? feeTypeFromJSON(object.feeType) : FeeType.CARD_FEE,
      valueType: isSet(object.valueType) ? discountValueTypeFromJSON(object.valueType) : DiscountValueType.AMOUNT,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
      capAmount: isSet(object.capAmount) ? globalThis.Number(object.capAmount) : 0,
    };
  },

  toJSON(message: CreateProcessingFeeRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    if (message.invoiceType !== InvoiceType.TUITION) {
      obj.invoiceType = invoiceTypeToJSON(message.invoiceType);
    }
    if (message.feeType !== FeeType.CARD_FEE) {
      obj.feeType = feeTypeToJSON(message.feeType);
    }
    if (message.valueType !== DiscountValueType.AMOUNT) {
      obj.valueType = discountValueTypeToJSON(message.valueType);
    }
    if (message.value !== 0) {
      obj.value = message.value;
    }
    if (message.capAmount !== undefined && message.capAmount !== 0) {
      obj.capAmount = message.capAmount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProcessingFeeRequest>, I>>(base?: I): CreateProcessingFeeRequest {
    return CreateProcessingFeeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateProcessingFeeRequest>, I>>(object: I): CreateProcessingFeeRequest {
    const message = createBaseCreateProcessingFeeRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    message.invoiceType = object.invoiceType ?? InvoiceType.TUITION;
    message.feeType = object.feeType ?? FeeType.CARD_FEE;
    message.valueType = object.valueType ?? DiscountValueType.AMOUNT;
    message.value = object.value ?? 0;
    message.capAmount = object.capAmount ?? 0;
    return message;
  },
};

function createBaseGetProcessingFeeRequest(): GetProcessingFeeRequest {
  return { context: undefined, id: undefined };
}

export const GetProcessingFeeRequest: MessageFns<GetProcessingFeeRequest> = {
  encode(message: GetProcessingFeeRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.id !== undefined) {
      ObjectId.encode(message.id, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetProcessingFeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProcessingFeeRequest();
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

  fromJSON(object: any): GetProcessingFeeRequest {
    return {
      context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined,
      id: isSet(object.id) ? ObjectId.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: GetProcessingFeeRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    if (message.id !== undefined) {
      obj.id = ObjectId.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProcessingFeeRequest>, I>>(base?: I): GetProcessingFeeRequest {
    return GetProcessingFeeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetProcessingFeeRequest>, I>>(object: I): GetProcessingFeeRequest {
    const message = createBaseGetProcessingFeeRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    message.id = (object.id !== undefined && object.id !== null) ? ObjectId.fromPartial(object.id) : undefined;
    return message;
  },
};

function createBaseUpdateProcessingFeeRequest(): UpdateProcessingFeeRequest {
  return {
    context: undefined,
    id: undefined,
    invoiceType: InvoiceType.TUITION,
    feeType: FeeType.CARD_FEE,
    valueType: DiscountValueType.AMOUNT,
    value: 0,
    capAmount: 0,
  };
}

export const UpdateProcessingFeeRequest: MessageFns<UpdateProcessingFeeRequest> = {
  encode(message: UpdateProcessingFeeRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.id !== undefined) {
      ObjectId.encode(message.id, writer.uint32(18).fork()).join();
    }
    if (message.invoiceType !== InvoiceType.TUITION) {
      writer.uint32(24).int32(invoiceTypeToNumber(message.invoiceType));
    }
    if (message.feeType !== FeeType.CARD_FEE) {
      writer.uint32(32).int32(feeTypeToNumber(message.feeType));
    }
    if (message.valueType !== DiscountValueType.AMOUNT) {
      writer.uint32(40).int32(discountValueTypeToNumber(message.valueType));
    }
    if (message.value !== 0) {
      writer.uint32(49).double(message.value);
    }
    if (message.capAmount !== undefined && message.capAmount !== 0) {
      writer.uint32(57).double(message.capAmount);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateProcessingFeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProcessingFeeRequest();
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
          if (tag !== 24) {
            break;
          }

          message.invoiceType = invoiceTypeFromJSON(reader.int32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.feeType = feeTypeFromJSON(reader.int32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.valueType = discountValueTypeFromJSON(reader.int32());
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.value = reader.double();
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.capAmount = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateProcessingFeeRequest {
    return {
      context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined,
      id: isSet(object.id) ? ObjectId.fromJSON(object.id) : undefined,
      invoiceType: isSet(object.invoiceType) ? invoiceTypeFromJSON(object.invoiceType) : InvoiceType.TUITION,
      feeType: isSet(object.feeType) ? feeTypeFromJSON(object.feeType) : FeeType.CARD_FEE,
      valueType: isSet(object.valueType) ? discountValueTypeFromJSON(object.valueType) : DiscountValueType.AMOUNT,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
      capAmount: isSet(object.capAmount) ? globalThis.Number(object.capAmount) : 0,
    };
  },

  toJSON(message: UpdateProcessingFeeRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    if (message.id !== undefined) {
      obj.id = ObjectId.toJSON(message.id);
    }
    if (message.invoiceType !== InvoiceType.TUITION) {
      obj.invoiceType = invoiceTypeToJSON(message.invoiceType);
    }
    if (message.feeType !== FeeType.CARD_FEE) {
      obj.feeType = feeTypeToJSON(message.feeType);
    }
    if (message.valueType !== DiscountValueType.AMOUNT) {
      obj.valueType = discountValueTypeToJSON(message.valueType);
    }
    if (message.value !== 0) {
      obj.value = message.value;
    }
    if (message.capAmount !== undefined && message.capAmount !== 0) {
      obj.capAmount = message.capAmount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateProcessingFeeRequest>, I>>(base?: I): UpdateProcessingFeeRequest {
    return UpdateProcessingFeeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateProcessingFeeRequest>, I>>(object: I): UpdateProcessingFeeRequest {
    const message = createBaseUpdateProcessingFeeRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    message.id = (object.id !== undefined && object.id !== null) ? ObjectId.fromPartial(object.id) : undefined;
    message.invoiceType = object.invoiceType ?? InvoiceType.TUITION;
    message.feeType = object.feeType ?? FeeType.CARD_FEE;
    message.valueType = object.valueType ?? DiscountValueType.AMOUNT;
    message.value = object.value ?? 0;
    message.capAmount = object.capAmount ?? 0;
    return message;
  },
};

function createBaseArchiveProcessingFeeRequest(): ArchiveProcessingFeeRequest {
  return { context: undefined, id: undefined };
}

export const ArchiveProcessingFeeRequest: MessageFns<ArchiveProcessingFeeRequest> = {
  encode(message: ArchiveProcessingFeeRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.id !== undefined) {
      ObjectId.encode(message.id, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ArchiveProcessingFeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArchiveProcessingFeeRequest();
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

  fromJSON(object: any): ArchiveProcessingFeeRequest {
    return {
      context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined,
      id: isSet(object.id) ? ObjectId.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: ArchiveProcessingFeeRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    if (message.id !== undefined) {
      obj.id = ObjectId.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ArchiveProcessingFeeRequest>, I>>(base?: I): ArchiveProcessingFeeRequest {
    return ArchiveProcessingFeeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ArchiveProcessingFeeRequest>, I>>(object: I): ArchiveProcessingFeeRequest {
    const message = createBaseArchiveProcessingFeeRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    message.id = (object.id !== undefined && object.id !== null) ? ObjectId.fromPartial(object.id) : undefined;
    return message;
  },
};

function createBaseUnarchiveProcessingFeeRequest(): UnarchiveProcessingFeeRequest {
  return { context: undefined, id: undefined };
}

export const UnarchiveProcessingFeeRequest: MessageFns<UnarchiveProcessingFeeRequest> = {
  encode(message: UnarchiveProcessingFeeRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.id !== undefined) {
      ObjectId.encode(message.id, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UnarchiveProcessingFeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnarchiveProcessingFeeRequest();
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

  fromJSON(object: any): UnarchiveProcessingFeeRequest {
    return {
      context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined,
      id: isSet(object.id) ? ObjectId.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: UnarchiveProcessingFeeRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    if (message.id !== undefined) {
      obj.id = ObjectId.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UnarchiveProcessingFeeRequest>, I>>(base?: I): UnarchiveProcessingFeeRequest {
    return UnarchiveProcessingFeeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UnarchiveProcessingFeeRequest>, I>>(
    object: I,
  ): UnarchiveProcessingFeeRequest {
    const message = createBaseUnarchiveProcessingFeeRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    message.id = (object.id !== undefined && object.id !== null) ? ObjectId.fromPartial(object.id) : undefined;
    return message;
  },
};

function createBaseGetActiveProcessingFeesRequest(): GetActiveProcessingFeesRequest {
  return { context: undefined, invoiceType: InvoiceType.TUITION };
}

export const GetActiveProcessingFeesRequest: MessageFns<GetActiveProcessingFeesRequest> = {
  encode(message: GetActiveProcessingFeesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.invoiceType !== InvoiceType.TUITION) {
      writer.uint32(16).int32(invoiceTypeToNumber(message.invoiceType));
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetActiveProcessingFeesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetActiveProcessingFeesRequest();
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
          if (tag !== 16) {
            break;
          }

          message.invoiceType = invoiceTypeFromJSON(reader.int32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetActiveProcessingFeesRequest {
    return {
      context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined,
      invoiceType: isSet(object.invoiceType) ? invoiceTypeFromJSON(object.invoiceType) : InvoiceType.TUITION,
    };
  },

  toJSON(message: GetActiveProcessingFeesRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    if (message.invoiceType !== InvoiceType.TUITION) {
      obj.invoiceType = invoiceTypeToJSON(message.invoiceType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetActiveProcessingFeesRequest>, I>>(base?: I): GetActiveProcessingFeesRequest {
    return GetActiveProcessingFeesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetActiveProcessingFeesRequest>, I>>(
    object: I,
  ): GetActiveProcessingFeesRequest {
    const message = createBaseGetActiveProcessingFeesRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    message.invoiceType = object.invoiceType ?? InvoiceType.TUITION;
    return message;
  },
};

function createBaseGetOrganizationProcessingFeeRequest(): GetOrganizationProcessingFeeRequest {
  return { context: undefined };
}

export const GetOrganizationProcessingFeeRequest: MessageFns<GetOrganizationProcessingFeeRequest> = {
  encode(message: GetOrganizationProcessingFeeRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetOrganizationProcessingFeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrganizationProcessingFeeRequest();
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

  fromJSON(object: any): GetOrganizationProcessingFeeRequest {
    return { context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined };
  },

  toJSON(message: GetOrganizationProcessingFeeRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetOrganizationProcessingFeeRequest>, I>>(
    base?: I,
  ): GetOrganizationProcessingFeeRequest {
    return GetOrganizationProcessingFeeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetOrganizationProcessingFeeRequest>, I>>(
    object: I,
  ): GetOrganizationProcessingFeeRequest {
    const message = createBaseGetOrganizationProcessingFeeRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    return message;
  },
};

function createBaseUpdateOrganizationProcessingFeeRequest(): UpdateOrganizationProcessingFeeRequest {
  return { context: undefined, tuitionInvoiceFeesEnabled: false, nonTuitionInvoiceFeesEnabled: false };
}

export const UpdateOrganizationProcessingFeeRequest: MessageFns<UpdateOrganizationProcessingFeeRequest> = {
  encode(message: UpdateOrganizationProcessingFeeRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      RequestContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.tuitionInvoiceFeesEnabled !== false) {
      writer.uint32(16).bool(message.tuitionInvoiceFeesEnabled);
    }
    if (message.nonTuitionInvoiceFeesEnabled !== false) {
      writer.uint32(24).bool(message.nonTuitionInvoiceFeesEnabled);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateOrganizationProcessingFeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOrganizationProcessingFeeRequest();
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
          if (tag !== 16) {
            break;
          }

          message.tuitionInvoiceFeesEnabled = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.nonTuitionInvoiceFeesEnabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateOrganizationProcessingFeeRequest {
    return {
      context: isSet(object.context) ? RequestContext.fromJSON(object.context) : undefined,
      tuitionInvoiceFeesEnabled: isSet(object.tuitionInvoiceFeesEnabled)
        ? globalThis.Boolean(object.tuitionInvoiceFeesEnabled)
        : false,
      nonTuitionInvoiceFeesEnabled: isSet(object.nonTuitionInvoiceFeesEnabled)
        ? globalThis.Boolean(object.nonTuitionInvoiceFeesEnabled)
        : false,
    };
  },

  toJSON(message: UpdateOrganizationProcessingFeeRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = RequestContext.toJSON(message.context);
    }
    if (message.tuitionInvoiceFeesEnabled !== false) {
      obj.tuitionInvoiceFeesEnabled = message.tuitionInvoiceFeesEnabled;
    }
    if (message.nonTuitionInvoiceFeesEnabled !== false) {
      obj.nonTuitionInvoiceFeesEnabled = message.nonTuitionInvoiceFeesEnabled;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateOrganizationProcessingFeeRequest>, I>>(
    base?: I,
  ): UpdateOrganizationProcessingFeeRequest {
    return UpdateOrganizationProcessingFeeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateOrganizationProcessingFeeRequest>, I>>(
    object: I,
  ): UpdateOrganizationProcessingFeeRequest {
    const message = createBaseUpdateOrganizationProcessingFeeRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? RequestContext.fromPartial(object.context)
      : undefined;
    message.tuitionInvoiceFeesEnabled = object.tuitionInvoiceFeesEnabled ?? false;
    message.nonTuitionInvoiceFeesEnabled = object.nonTuitionInvoiceFeesEnabled ?? false;
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
