// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: payment_service/invoice.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Timestamp } from "../google/protobuf/timestamp";
import { ObjectId } from "../utils/object_id";
import { RefundTransaction, Transaction } from "./transaction";
import {
  DiscountValueType,
  discountValueTypeFromJSON,
  discountValueTypeToJSON,
  discountValueTypeToNumber,
} from "./tuition";

export const protobufPackage = "payment_service";

export enum InvoiceStatus {
  Paid = "Paid",
  NotPaid = "NotPaid",
  Overdue = "Overdue",
  Refunded = "Refunded",
  Processing = "Processing",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function invoiceStatusFromJSON(object: any): InvoiceStatus {
  switch (object) {
    case 1:
    case "Paid":
      return InvoiceStatus.Paid;
    case 2:
    case "NotPaid":
      return InvoiceStatus.NotPaid;
    case 3:
    case "Overdue":
      return InvoiceStatus.Overdue;
    case 4:
    case "Refunded":
      return InvoiceStatus.Refunded;
    case 5:
    case "Processing":
      return InvoiceStatus.Processing;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InvoiceStatus.UNRECOGNIZED;
  }
}

export function invoiceStatusToJSON(object: InvoiceStatus): string {
  switch (object) {
    case InvoiceStatus.Paid:
      return "Paid";
    case InvoiceStatus.NotPaid:
      return "NotPaid";
    case InvoiceStatus.Overdue:
      return "Overdue";
    case InvoiceStatus.Refunded:
      return "Refunded";
    case InvoiceStatus.Processing:
      return "Processing";
    case InvoiceStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function invoiceStatusToNumber(object: InvoiceStatus): number {
  switch (object) {
    case InvoiceStatus.Paid:
      return 1;
    case InvoiceStatus.NotPaid:
      return 2;
    case InvoiceStatus.Overdue:
      return 3;
    case InvoiceStatus.Refunded:
      return 4;
    case InvoiceStatus.Processing:
      return 5;
    case InvoiceStatus.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** TODO: this is was fetched automatically from user-service */
export enum StudentStatus {
  Waitlist = "Waitlist",
  Interview = "Interview",
  Applicant = "Applicant",
  Rejected = "Rejected",
  Enrolled = "Enrolled",
  ReRegistration = "ReRegistration",
  Withdrawn = "Withdrawn",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function studentStatusFromJSON(object: any): StudentStatus {
  switch (object) {
    case 1:
    case "Waitlist":
      return StudentStatus.Waitlist;
    case 2:
    case "Interview":
      return StudentStatus.Interview;
    case 3:
    case "Applicant":
      return StudentStatus.Applicant;
    case 4:
    case "Rejected":
      return StudentStatus.Rejected;
    case 5:
    case "Enrolled":
      return StudentStatus.Enrolled;
    case 6:
    case "ReRegistration":
      return StudentStatus.ReRegistration;
    case 7:
    case "Withdrawn":
      return StudentStatus.Withdrawn;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StudentStatus.UNRECOGNIZED;
  }
}

export function studentStatusToJSON(object: StudentStatus): string {
  switch (object) {
    case StudentStatus.Waitlist:
      return "Waitlist";
    case StudentStatus.Interview:
      return "Interview";
    case StudentStatus.Applicant:
      return "Applicant";
    case StudentStatus.Rejected:
      return "Rejected";
    case StudentStatus.Enrolled:
      return "Enrolled";
    case StudentStatus.ReRegistration:
      return "ReRegistration";
    case StudentStatus.Withdrawn:
      return "Withdrawn";
    case StudentStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function studentStatusToNumber(object: StudentStatus): number {
  switch (object) {
    case StudentStatus.Waitlist:
      return 1;
    case StudentStatus.Interview:
      return 2;
    case StudentStatus.Applicant:
      return 3;
    case StudentStatus.Rejected:
      return 4;
    case StudentStatus.Enrolled:
      return 5;
    case StudentStatus.ReRegistration:
      return 6;
    case StudentStatus.Withdrawn:
      return 7;
    case StudentStatus.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum AutoPaymentStatus {
  /** AutoPayPending - Pending to be paid, not yet queued */
  AutoPayPending = "AutoPayPending",
  /** AutoPayQueued - Queued to be charged by the payment consumer */
  AutoPayQueued = "AutoPayQueued",
  /** AutoPayQueueFailed - Failed to queue */
  AutoPayQueueFailed = "AutoPayQueueFailed",
  /** AutoPayProcessing - The auto payment is processing */
  AutoPayProcessing = "AutoPayProcessing",
  /** AutoPaySucceeded - The auto payment succeeded */
  AutoPaySucceeded = "AutoPaySucceeded",
  /** AutoPayFailed - The auto payment failed */
  AutoPayFailed = "AutoPayFailed",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function autoPaymentStatusFromJSON(object: any): AutoPaymentStatus {
  switch (object) {
    case 1:
    case "AutoPayPending":
      return AutoPaymentStatus.AutoPayPending;
    case 2:
    case "AutoPayQueued":
      return AutoPaymentStatus.AutoPayQueued;
    case 3:
    case "AutoPayQueueFailed":
      return AutoPaymentStatus.AutoPayQueueFailed;
    case 4:
    case "AutoPayProcessing":
      return AutoPaymentStatus.AutoPayProcessing;
    case 5:
    case "AutoPaySucceeded":
      return AutoPaymentStatus.AutoPaySucceeded;
    case 6:
    case "AutoPayFailed":
      return AutoPaymentStatus.AutoPayFailed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AutoPaymentStatus.UNRECOGNIZED;
  }
}

export function autoPaymentStatusToJSON(object: AutoPaymentStatus): string {
  switch (object) {
    case AutoPaymentStatus.AutoPayPending:
      return "AutoPayPending";
    case AutoPaymentStatus.AutoPayQueued:
      return "AutoPayQueued";
    case AutoPaymentStatus.AutoPayQueueFailed:
      return "AutoPayQueueFailed";
    case AutoPaymentStatus.AutoPayProcessing:
      return "AutoPayProcessing";
    case AutoPaymentStatus.AutoPaySucceeded:
      return "AutoPaySucceeded";
    case AutoPaymentStatus.AutoPayFailed:
      return "AutoPayFailed";
    case AutoPaymentStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function autoPaymentStatusToNumber(object: AutoPaymentStatus): number {
  switch (object) {
    case AutoPaymentStatus.AutoPayPending:
      return 1;
    case AutoPaymentStatus.AutoPayQueued:
      return 2;
    case AutoPaymentStatus.AutoPayQueueFailed:
      return 3;
    case AutoPaymentStatus.AutoPayProcessing:
      return 4;
    case AutoPaymentStatus.AutoPaySucceeded:
      return 5;
    case AutoPaymentStatus.AutoPayFailed:
      return 6;
    case AutoPaymentStatus.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface InvoiceItem {
  title: string;
  description: string;
  price: number;
  quantity: number;
  isBassemLabsFee?: boolean | undefined;
}

export interface Coupon {
  title: string;
  valueType: DiscountValueType;
  /** percentage or amount value */
  value: number;
}

export interface Invoice {
  id: ObjectId | undefined;
  organization: ObjectId | undefined;
  invoiceNumber: number;
  title: string;
  description: string;
  showHst: boolean;
  disableTax: boolean;
  archived: boolean;
  user?: ObjectId | undefined;
  family?: ObjectId | undefined;
  items: InvoiceItem[];
  coupons: Coupon[];
  dueDate?: Date | undefined;
  invoiceStudentRegistrationPipelineStatus?: StudentStatus | undefined;
  schoolYear:
    | ObjectId
    | undefined;
  /**
   * Auto pay fields
   * If autopay is enabled for this invoice
   */
  autoPayEnabled?:
    | boolean
    | undefined;
  /** Date when this invoice must be automatically charged one */
  chargeOnDate?: Date | undefined;
  autoPaymentStatus?:
    | AutoPaymentStatus
    | undefined;
  /** determine if this invoice is a tuition invoice */
  isTuition: boolean;
}

export interface InvoiceResponse {
  invoice: Invoice | undefined;
  transactions: Transaction[];
  /** Total amount of the invoice */
  totalAmount: number;
  /** Total amount paid towards the invoice, excludes refunds, processing fees, (includes bassemlabs fees) */
  grossAmountPaid: number;
  status: InvoiceStatus;
  billToName?: string | undefined;
  refundTransactions: RefundTransaction[];
  /** Total amount refunded */
  totalAmountRefunded: number;
  /** total_amount_paid - total_amount_refunded */
  netAmountPaid: number;
}

export interface InvoiceFilter {
  perPage?: number | undefined;
  page?: number | undefined;
  title?: string | undefined;
  status?: InvoiceStatus | undefined;
  archived?: boolean | undefined;
}

function createBaseInvoiceItem(): InvoiceItem {
  return { title: "", description: "", price: 0, quantity: 0, isBassemLabsFee: false };
}

export const InvoiceItem: MessageFns<InvoiceItem> = {
  encode(message: InvoiceItem, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.price !== 0) {
      writer.uint32(25).double(message.price);
    }
    if (message.quantity !== 0) {
      writer.uint32(32).int32(message.quantity);
    }
    if (message.isBassemLabsFee !== undefined && message.isBassemLabsFee !== false) {
      writer.uint32(40).bool(message.isBassemLabsFee);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InvoiceItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceItem();
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
          if (tag !== 25) {
            break;
          }

          message.price = reader.double();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.quantity = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isBassemLabsFee = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InvoiceItem {
    return {
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      price: isSet(object.price) ? globalThis.Number(object.price) : 0,
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
      isBassemLabsFee: isSet(object.isBassemLabsFee) ? globalThis.Boolean(object.isBassemLabsFee) : false,
    };
  },

  toJSON(message: InvoiceItem): unknown {
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
    if (message.isBassemLabsFee !== undefined && message.isBassemLabsFee !== false) {
      obj.isBassemLabsFee = message.isBassemLabsFee;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvoiceItem>, I>>(base?: I): InvoiceItem {
    return InvoiceItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InvoiceItem>, I>>(object: I): InvoiceItem {
    const message = createBaseInvoiceItem();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.price = object.price ?? 0;
    message.quantity = object.quantity ?? 0;
    message.isBassemLabsFee = object.isBassemLabsFee ?? false;
    return message;
  },
};

function createBaseCoupon(): Coupon {
  return { title: "", valueType: DiscountValueType.AMOUNT, value: 0 };
}

export const Coupon: MessageFns<Coupon> = {
  encode(message: Coupon, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.valueType !== DiscountValueType.AMOUNT) {
      writer.uint32(16).int32(discountValueTypeToNumber(message.valueType));
    }
    if (message.value !== 0) {
      writer.uint32(25).double(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Coupon {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoupon();
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
          if (tag !== 16) {
            break;
          }

          message.valueType = discountValueTypeFromJSON(reader.int32());
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.value = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Coupon {
    return {
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      valueType: isSet(object.valueType) ? discountValueTypeFromJSON(object.valueType) : DiscountValueType.AMOUNT,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: Coupon): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.valueType !== DiscountValueType.AMOUNT) {
      obj.valueType = discountValueTypeToJSON(message.valueType);
    }
    if (message.value !== 0) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Coupon>, I>>(base?: I): Coupon {
    return Coupon.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Coupon>, I>>(object: I): Coupon {
    const message = createBaseCoupon();
    message.title = object.title ?? "";
    message.valueType = object.valueType ?? DiscountValueType.AMOUNT;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseInvoice(): Invoice {
  return {
    id: undefined,
    organization: undefined,
    invoiceNumber: 0,
    title: "",
    description: "",
    showHst: false,
    disableTax: false,
    archived: false,
    user: undefined,
    family: undefined,
    items: [],
    coupons: [],
    dueDate: undefined,
    invoiceStudentRegistrationPipelineStatus: StudentStatus.Waitlist,
    schoolYear: undefined,
    autoPayEnabled: false,
    chargeOnDate: undefined,
    autoPaymentStatus: AutoPaymentStatus.AutoPayPending,
    isTuition: false,
  };
}

export const Invoice: MessageFns<Invoice> = {
  encode(message: Invoice, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== undefined) {
      ObjectId.encode(message.id, writer.uint32(10).fork()).join();
    }
    if (message.organization !== undefined) {
      ObjectId.encode(message.organization, writer.uint32(18).fork()).join();
    }
    if (message.invoiceNumber !== 0) {
      writer.uint32(24).int32(message.invoiceNumber);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.showHst !== false) {
      writer.uint32(48).bool(message.showHst);
    }
    if (message.disableTax !== false) {
      writer.uint32(56).bool(message.disableTax);
    }
    if (message.archived !== false) {
      writer.uint32(64).bool(message.archived);
    }
    if (message.user !== undefined) {
      ObjectId.encode(message.user, writer.uint32(74).fork()).join();
    }
    if (message.family !== undefined) {
      ObjectId.encode(message.family, writer.uint32(82).fork()).join();
    }
    for (const v of message.items) {
      InvoiceItem.encode(v!, writer.uint32(90).fork()).join();
    }
    for (const v of message.coupons) {
      Coupon.encode(v!, writer.uint32(98).fork()).join();
    }
    if (message.dueDate !== undefined) {
      Timestamp.encode(toTimestamp(message.dueDate), writer.uint32(106).fork()).join();
    }
    if (
      message.invoiceStudentRegistrationPipelineStatus !== undefined &&
      message.invoiceStudentRegistrationPipelineStatus !== StudentStatus.Waitlist
    ) {
      writer.uint32(112).int32(studentStatusToNumber(message.invoiceStudentRegistrationPipelineStatus));
    }
    if (message.schoolYear !== undefined) {
      ObjectId.encode(message.schoolYear, writer.uint32(122).fork()).join();
    }
    if (message.autoPayEnabled !== undefined && message.autoPayEnabled !== false) {
      writer.uint32(128).bool(message.autoPayEnabled);
    }
    if (message.chargeOnDate !== undefined) {
      Timestamp.encode(toTimestamp(message.chargeOnDate), writer.uint32(138).fork()).join();
    }
    if (message.autoPaymentStatus !== undefined && message.autoPaymentStatus !== AutoPaymentStatus.AutoPayPending) {
      writer.uint32(144).int32(autoPaymentStatusToNumber(message.autoPaymentStatus));
    }
    if (message.isTuition !== false) {
      writer.uint32(152).bool(message.isTuition);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Invoice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoice();
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

          message.organization = ObjectId.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.invoiceNumber = reader.int32();
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

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.showHst = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.disableTax = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.archived = reader.bool();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.user = ObjectId.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.family = ObjectId.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.items.push(InvoiceItem.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.coupons.push(Coupon.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.dueDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.invoiceStudentRegistrationPipelineStatus = studentStatusFromJSON(reader.int32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.schoolYear = ObjectId.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.autoPayEnabled = reader.bool();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.chargeOnDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.autoPaymentStatus = autoPaymentStatusFromJSON(reader.int32());
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.isTuition = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Invoice {
    return {
      id: isSet(object.id) ? ObjectId.fromJSON(object.id) : undefined,
      organization: isSet(object.organization) ? ObjectId.fromJSON(object.organization) : undefined,
      invoiceNumber: isSet(object.invoiceNumber) ? globalThis.Number(object.invoiceNumber) : 0,
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      showHst: isSet(object.showHst) ? globalThis.Boolean(object.showHst) : false,
      disableTax: isSet(object.disableTax) ? globalThis.Boolean(object.disableTax) : false,
      archived: isSet(object.archived) ? globalThis.Boolean(object.archived) : false,
      user: isSet(object.user) ? ObjectId.fromJSON(object.user) : undefined,
      family: isSet(object.family) ? ObjectId.fromJSON(object.family) : undefined,
      items: globalThis.Array.isArray(object?.items) ? object.items.map((e: any) => InvoiceItem.fromJSON(e)) : [],
      coupons: globalThis.Array.isArray(object?.coupons) ? object.coupons.map((e: any) => Coupon.fromJSON(e)) : [],
      dueDate: isSet(object.dueDate) ? fromJsonTimestamp(object.dueDate) : undefined,
      invoiceStudentRegistrationPipelineStatus: isSet(object.invoiceStudentRegistrationPipelineStatus)
        ? studentStatusFromJSON(object.invoiceStudentRegistrationPipelineStatus)
        : StudentStatus.Waitlist,
      schoolYear: isSet(object.schoolYear) ? ObjectId.fromJSON(object.schoolYear) : undefined,
      autoPayEnabled: isSet(object.autoPayEnabled) ? globalThis.Boolean(object.autoPayEnabled) : false,
      chargeOnDate: isSet(object.chargeOnDate) ? fromJsonTimestamp(object.chargeOnDate) : undefined,
      autoPaymentStatus: isSet(object.autoPaymentStatus)
        ? autoPaymentStatusFromJSON(object.autoPaymentStatus)
        : AutoPaymentStatus.AutoPayPending,
      isTuition: isSet(object.isTuition) ? globalThis.Boolean(object.isTuition) : false,
    };
  },

  toJSON(message: Invoice): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = ObjectId.toJSON(message.id);
    }
    if (message.organization !== undefined) {
      obj.organization = ObjectId.toJSON(message.organization);
    }
    if (message.invoiceNumber !== 0) {
      obj.invoiceNumber = Math.round(message.invoiceNumber);
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.showHst !== false) {
      obj.showHst = message.showHst;
    }
    if (message.disableTax !== false) {
      obj.disableTax = message.disableTax;
    }
    if (message.archived !== false) {
      obj.archived = message.archived;
    }
    if (message.user !== undefined) {
      obj.user = ObjectId.toJSON(message.user);
    }
    if (message.family !== undefined) {
      obj.family = ObjectId.toJSON(message.family);
    }
    if (message.items?.length) {
      obj.items = message.items.map((e) => InvoiceItem.toJSON(e));
    }
    if (message.coupons?.length) {
      obj.coupons = message.coupons.map((e) => Coupon.toJSON(e));
    }
    if (message.dueDate !== undefined) {
      obj.dueDate = message.dueDate.toISOString();
    }
    if (
      message.invoiceStudentRegistrationPipelineStatus !== undefined &&
      message.invoiceStudentRegistrationPipelineStatus !== StudentStatus.Waitlist
    ) {
      obj.invoiceStudentRegistrationPipelineStatus = studentStatusToJSON(
        message.invoiceStudentRegistrationPipelineStatus,
      );
    }
    if (message.schoolYear !== undefined) {
      obj.schoolYear = ObjectId.toJSON(message.schoolYear);
    }
    if (message.autoPayEnabled !== undefined && message.autoPayEnabled !== false) {
      obj.autoPayEnabled = message.autoPayEnabled;
    }
    if (message.chargeOnDate !== undefined) {
      obj.chargeOnDate = message.chargeOnDate.toISOString();
    }
    if (message.autoPaymentStatus !== undefined && message.autoPaymentStatus !== AutoPaymentStatus.AutoPayPending) {
      obj.autoPaymentStatus = autoPaymentStatusToJSON(message.autoPaymentStatus);
    }
    if (message.isTuition !== false) {
      obj.isTuition = message.isTuition;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Invoice>, I>>(base?: I): Invoice {
    return Invoice.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Invoice>, I>>(object: I): Invoice {
    const message = createBaseInvoice();
    message.id = (object.id !== undefined && object.id !== null) ? ObjectId.fromPartial(object.id) : undefined;
    message.organization = (object.organization !== undefined && object.organization !== null)
      ? ObjectId.fromPartial(object.organization)
      : undefined;
    message.invoiceNumber = object.invoiceNumber ?? 0;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.showHst = object.showHst ?? false;
    message.disableTax = object.disableTax ?? false;
    message.archived = object.archived ?? false;
    message.user = (object.user !== undefined && object.user !== null) ? ObjectId.fromPartial(object.user) : undefined;
    message.family = (object.family !== undefined && object.family !== null)
      ? ObjectId.fromPartial(object.family)
      : undefined;
    message.items = object.items?.map((e) => InvoiceItem.fromPartial(e)) || [];
    message.coupons = object.coupons?.map((e) => Coupon.fromPartial(e)) || [];
    message.dueDate = object.dueDate ?? undefined;
    message.invoiceStudentRegistrationPipelineStatus = object.invoiceStudentRegistrationPipelineStatus ??
      StudentStatus.Waitlist;
    message.schoolYear = (object.schoolYear !== undefined && object.schoolYear !== null)
      ? ObjectId.fromPartial(object.schoolYear)
      : undefined;
    message.autoPayEnabled = object.autoPayEnabled ?? false;
    message.chargeOnDate = object.chargeOnDate ?? undefined;
    message.autoPaymentStatus = object.autoPaymentStatus ?? AutoPaymentStatus.AutoPayPending;
    message.isTuition = object.isTuition ?? false;
    return message;
  },
};

function createBaseInvoiceResponse(): InvoiceResponse {
  return {
    invoice: undefined,
    transactions: [],
    totalAmount: 0,
    grossAmountPaid: 0,
    status: InvoiceStatus.Paid,
    billToName: "",
    refundTransactions: [],
    totalAmountRefunded: 0,
    netAmountPaid: 0,
  };
}

export const InvoiceResponse: MessageFns<InvoiceResponse> = {
  encode(message: InvoiceResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.invoice !== undefined) {
      Invoice.encode(message.invoice, writer.uint32(10).fork()).join();
    }
    for (const v of message.transactions) {
      Transaction.encode(v!, writer.uint32(18).fork()).join();
    }
    if (message.totalAmount !== 0) {
      writer.uint32(25).double(message.totalAmount);
    }
    if (message.grossAmountPaid !== 0) {
      writer.uint32(33).double(message.grossAmountPaid);
    }
    if (message.status !== InvoiceStatus.Paid) {
      writer.uint32(40).int32(invoiceStatusToNumber(message.status));
    }
    if (message.billToName !== undefined && message.billToName !== "") {
      writer.uint32(50).string(message.billToName);
    }
    for (const v of message.refundTransactions) {
      RefundTransaction.encode(v!, writer.uint32(58).fork()).join();
    }
    if (message.totalAmountRefunded !== 0) {
      writer.uint32(65).double(message.totalAmountRefunded);
    }
    if (message.netAmountPaid !== 0) {
      writer.uint32(73).double(message.netAmountPaid);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InvoiceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.invoice = Invoice.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.transactions.push(Transaction.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.totalAmount = reader.double();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.grossAmountPaid = reader.double();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = invoiceStatusFromJSON(reader.int32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.billToName = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.refundTransactions.push(RefundTransaction.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 65) {
            break;
          }

          message.totalAmountRefunded = reader.double();
          continue;
        case 9:
          if (tag !== 73) {
            break;
          }

          message.netAmountPaid = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InvoiceResponse {
    return {
      invoice: isSet(object.invoice) ? Invoice.fromJSON(object.invoice) : undefined,
      transactions: globalThis.Array.isArray(object?.transactions)
        ? object.transactions.map((e: any) => Transaction.fromJSON(e))
        : [],
      totalAmount: isSet(object.totalAmount) ? globalThis.Number(object.totalAmount) : 0,
      grossAmountPaid: isSet(object.grossAmountPaid) ? globalThis.Number(object.grossAmountPaid) : 0,
      status: isSet(object.status) ? invoiceStatusFromJSON(object.status) : InvoiceStatus.Paid,
      billToName: isSet(object.billToName) ? globalThis.String(object.billToName) : "",
      refundTransactions: globalThis.Array.isArray(object?.refundTransactions)
        ? object.refundTransactions.map((e: any) => RefundTransaction.fromJSON(e))
        : [],
      totalAmountRefunded: isSet(object.totalAmountRefunded) ? globalThis.Number(object.totalAmountRefunded) : 0,
      netAmountPaid: isSet(object.netAmountPaid) ? globalThis.Number(object.netAmountPaid) : 0,
    };
  },

  toJSON(message: InvoiceResponse): unknown {
    const obj: any = {};
    if (message.invoice !== undefined) {
      obj.invoice = Invoice.toJSON(message.invoice);
    }
    if (message.transactions?.length) {
      obj.transactions = message.transactions.map((e) => Transaction.toJSON(e));
    }
    if (message.totalAmount !== 0) {
      obj.totalAmount = message.totalAmount;
    }
    if (message.grossAmountPaid !== 0) {
      obj.grossAmountPaid = message.grossAmountPaid;
    }
    if (message.status !== InvoiceStatus.Paid) {
      obj.status = invoiceStatusToJSON(message.status);
    }
    if (message.billToName !== undefined && message.billToName !== "") {
      obj.billToName = message.billToName;
    }
    if (message.refundTransactions?.length) {
      obj.refundTransactions = message.refundTransactions.map((e) => RefundTransaction.toJSON(e));
    }
    if (message.totalAmountRefunded !== 0) {
      obj.totalAmountRefunded = message.totalAmountRefunded;
    }
    if (message.netAmountPaid !== 0) {
      obj.netAmountPaid = message.netAmountPaid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvoiceResponse>, I>>(base?: I): InvoiceResponse {
    return InvoiceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InvoiceResponse>, I>>(object: I): InvoiceResponse {
    const message = createBaseInvoiceResponse();
    message.invoice = (object.invoice !== undefined && object.invoice !== null)
      ? Invoice.fromPartial(object.invoice)
      : undefined;
    message.transactions = object.transactions?.map((e) => Transaction.fromPartial(e)) || [];
    message.totalAmount = object.totalAmount ?? 0;
    message.grossAmountPaid = object.grossAmountPaid ?? 0;
    message.status = object.status ?? InvoiceStatus.Paid;
    message.billToName = object.billToName ?? "";
    message.refundTransactions = object.refundTransactions?.map((e) => RefundTransaction.fromPartial(e)) || [];
    message.totalAmountRefunded = object.totalAmountRefunded ?? 0;
    message.netAmountPaid = object.netAmountPaid ?? 0;
    return message;
  },
};

function createBaseInvoiceFilter(): InvoiceFilter {
  return { perPage: 0, page: 0, title: "", status: InvoiceStatus.Paid, archived: false };
}

export const InvoiceFilter: MessageFns<InvoiceFilter> = {
  encode(message: InvoiceFilter, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.perPage !== undefined && message.perPage !== 0) {
      writer.uint32(8).int32(message.perPage);
    }
    if (message.page !== undefined && message.page !== 0) {
      writer.uint32(16).int32(message.page);
    }
    if (message.title !== undefined && message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.status !== undefined && message.status !== InvoiceStatus.Paid) {
      writer.uint32(32).int32(invoiceStatusToNumber(message.status));
    }
    if (message.archived !== undefined && message.archived !== false) {
      writer.uint32(40).bool(message.archived);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InvoiceFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvoiceFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.perPage = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.page = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.title = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.status = invoiceStatusFromJSON(reader.int32());
          continue;
        case 5:
          if (tag !== 40) {
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

  fromJSON(object: any): InvoiceFilter {
    return {
      perPage: isSet(object.perPage) ? globalThis.Number(object.perPage) : 0,
      page: isSet(object.page) ? globalThis.Number(object.page) : 0,
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      status: isSet(object.status) ? invoiceStatusFromJSON(object.status) : InvoiceStatus.Paid,
      archived: isSet(object.archived) ? globalThis.Boolean(object.archived) : false,
    };
  },

  toJSON(message: InvoiceFilter): unknown {
    const obj: any = {};
    if (message.perPage !== undefined && message.perPage !== 0) {
      obj.perPage = Math.round(message.perPage);
    }
    if (message.page !== undefined && message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    if (message.title !== undefined && message.title !== "") {
      obj.title = message.title;
    }
    if (message.status !== undefined && message.status !== InvoiceStatus.Paid) {
      obj.status = invoiceStatusToJSON(message.status);
    }
    if (message.archived !== undefined && message.archived !== false) {
      obj.archived = message.archived;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvoiceFilter>, I>>(base?: I): InvoiceFilter {
    return InvoiceFilter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InvoiceFilter>, I>>(object: I): InvoiceFilter {
    const message = createBaseInvoiceFilter();
    message.perPage = object.perPage ?? 0;
    message.page = object.page ?? 0;
    message.title = object.title ?? "";
    message.status = object.status ?? InvoiceStatus.Paid;
    message.archived = object.archived ?? false;
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
