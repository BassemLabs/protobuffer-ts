import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { Semester } from "./semester";
export declare const protobufPackage = "class_service";
export declare enum SchedulingPreparationStep {
    SCHEDULING_PREPARATION_STEP_SEMESTERS = "SCHEDULING_PREPARATION_STEP_SEMESTERS",
    SCHEDULING_PREPARATION_STEP_PERIOD_TIMES = "SCHEDULING_PREPARATION_STEP_PERIOD_TIMES",
    SCHEDULING_PREPARATION_STEP_CLASSES = "SCHEDULING_PREPARATION_STEP_CLASSES",
    SCHEDULING_PREPARATION_STEP_TEACHERS = "SCHEDULING_PREPARATION_STEP_TEACHERS",
    SCHEDULING_PREPARATION_STEP_CLASS_ASSIGNMENTS = "SCHEDULING_PREPARATION_STEP_CLASS_ASSIGNMENTS",
    SCHEDULING_PREPARATION_STEP_REVIEW = "SCHEDULING_PREPARATION_STEP_REVIEW",
    SCHEDULING_PREPARATION_STEP_GENERATION = "SCHEDULING_PREPARATION_STEP_GENERATION",
    SCHEDULING_PREPARATION_STEP_PREVIEW_EXPORT = "SCHEDULING_PREPARATION_STEP_PREVIEW_EXPORT",
    SCHEDULING_PREPARATION_STEP_ADJUSTMENTS = "SCHEDULING_PREPARATION_STEP_ADJUSTMENTS",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingPreparationStepFromJSON(object: any): SchedulingPreparationStep;
export declare function schedulingPreparationStepToJSON(object: SchedulingPreparationStep): string;
export declare function schedulingPreparationStepToNumber(object: SchedulingPreparationStep): number;
export declare enum SchedulingPreparationStepStatus {
    SCHEDULING_PREPARATION_STEP_STATUS_BLOCKED = "SCHEDULING_PREPARATION_STEP_STATUS_BLOCKED",
    SCHEDULING_PREPARATION_STEP_STATUS_READY = "SCHEDULING_PREPARATION_STEP_STATUS_READY",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function schedulingPreparationStepStatusFromJSON(object: any): SchedulingPreparationStepStatus;
export declare function schedulingPreparationStepStatusToJSON(object: SchedulingPreparationStepStatus): string;
export declare function schedulingPreparationStepStatusToNumber(object: SchedulingPreparationStepStatus): number;
export interface SchedulingWorkspace {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    school_year: ObjectId | undefined;
    completed_steps: SchedulingPreparationStep[];
}
export interface SchedulingPreparationIssue {
    message?: string | undefined;
}
export interface SchedulingPreparationStepState {
    step?: SchedulingPreparationStep | undefined;
    status?: SchedulingPreparationStepStatus | undefined;
    issues: SchedulingPreparationIssue[];
    completed?: boolean | undefined;
}
export interface SchedulingPreparation {
    workspace?: SchedulingWorkspace | undefined;
    semesters: Semester[];
    step_states: SchedulingPreparationStepState[];
}
export declare const SchedulingWorkspace: MessageFns<SchedulingWorkspace>;
export declare const SchedulingPreparationIssue: MessageFns<SchedulingPreparationIssue>;
export declare const SchedulingPreparationStepState: MessageFns<SchedulingPreparationStepState>;
export declare const SchedulingPreparation: MessageFns<SchedulingPreparation>;
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
