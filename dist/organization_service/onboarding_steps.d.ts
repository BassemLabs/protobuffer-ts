import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
export declare const protobufPackage = "organization_service";
export declare enum OnboardingStepStatus {
    ONGOING = "ONGOING",
    COMPLETED = "COMPLETED",
    LOCKED = "LOCKED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function onboardingStepStatusFromJSON(object: any): OnboardingStepStatus;
export declare function onboardingStepStatusToJSON(object: OnboardingStepStatus): string;
export declare function onboardingStepStatusToNumber(object: OnboardingStepStatus): number;
export declare enum OnboardingStepName {
    ORG_OWNER_PROFILE = "ORG_OWNER_PROFILE",
    ORGANIZATION_SETTINGS = "ORGANIZATION_SETTINGS",
    ORGANIZATION_KEYS = "ORGANIZATION_KEYS",
    PAYMENTS = "PAYMENTS",
    STAFF_MANAGEMENT = "STAFF_MANAGEMENT",
    CAMPUS_MANAGEMENT = "CAMPUS_MANAGEMENT",
    RESOURCE_ACCESS_SETTINGS = "RESOURCE_ACCESS_SETTINGS",
    STUDENT_FIELDS = "STUDENT_FIELDS",
    PARENT_FIELDS = "PARENT_FIELDS",
    TEACHER_FIELDS = "TEACHER_FIELDS",
    STUDENT_UPLOAD = "STUDENT_UPLOAD",
    ONBOARDING_SETTINGS = "ONBOARDING_SETTINGS",
    EMAIL_TEMPLATES = "EMAIL_TEMPLATES",
    PROCESSING_FEES = "PROCESSING_FEES",
    CALENDAR = "CALENDAR",
    SEMESTERS = "SEMESTERS",
    PAYMENT_PLAN = "PAYMENT_PLAN",
    CUSTOM_FIELDS_TEMPLATES = "CUSTOM_FIELDS_TEMPLATES",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function onboardingStepNameFromJSON(object: any): OnboardingStepName;
export declare function onboardingStepNameToJSON(object: OnboardingStepName): string;
export declare function onboardingStepNameToNumber(object: OnboardingStepName): number;
export interface OnboardingStepData {
    step_name: OnboardingStepName;
    status: OnboardingStepStatus;
}
export interface OnboardingStepsStatus {
    id: ObjectId | undefined;
    organization_id: ObjectId | undefined;
    steps: OnboardingStepData[];
    all_steps_done: boolean;
}
export declare const OnboardingStepData: MessageFns<OnboardingStepData>;
export declare const OnboardingStepsStatus: MessageFns<OnboardingStepsStatus>;
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
