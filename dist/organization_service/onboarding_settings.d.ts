import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { StudentGrade } from "../user_service/student";
import { AWSFile } from "../utils/aws_file";
export declare const protobufPackage = "organization_service";
export interface OnboardingSettings {
    hasInterviewForNewcomers: boolean;
    enableGroupApprovalSystem: boolean;
    waitlistFee: number;
    registrationFees: GradeFeeMapping[];
    reregistrationFees: GradeFeeMapping[];
    schoolHandbook: AWSFile[];
    interviewFee: number;
}
export interface GradeFeeMapping {
    grade: StudentGrade;
    fee: ItemizedFee | undefined;
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
export declare const OnboardingSettings: MessageFns<OnboardingSettings>;
export declare const GradeFeeMapping: MessageFns<GradeFeeMapping>;
export declare const ItemizedFee: MessageFns<ItemizedFee>;
export declare const FeeItem: MessageFns<FeeItem>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
    fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
export {};
