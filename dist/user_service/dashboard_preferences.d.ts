import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ObjectId } from "../utils/object_id";
import { UserType } from "../utils/user_type";
export declare const protobufPackage = "user_service";
export declare enum DashboardWidgetName {
    DASHBOARD_WIDGET_ACTION_ITEMS = "DASHBOARD_WIDGET_ACTION_ITEMS",
    DASHBOARD_WIDGET_SCHOOL_CALENDAR = "DASHBOARD_WIDGET_SCHOOL_CALENDAR",
    DASHBOARD_WIDGET_FINANCIAL_SNAPSHOT = "DASHBOARD_WIDGET_FINANCIAL_SNAPSHOT",
    DASHBOARD_WIDGET_ENROLLMENT_PIPELINE = "DASHBOARD_WIDGET_ENROLLMENT_PIPELINE",
    DASHBOARD_WIDGET_REPORT_CARDS = "DASHBOARD_WIDGET_REPORT_CARDS",
    DASHBOARD_WIDGET_TEACHER_ACTIVITY = "DASHBOARD_WIDGET_TEACHER_ACTIVITY",
    DASHBOARD_WIDGET_KPI_SUMMARY = "DASHBOARD_WIDGET_KPI_SUMMARY",
    DASHBOARD_WIDGET_WEEKLY_ATTENDANCE_TREND = "DASHBOARD_WIDGET_WEEKLY_ATTENDANCE_TREND",
    DASHBOARD_WIDGET_ATTENDANCE_NEEDED_TODAY = "DASHBOARD_WIDGET_ATTENDANCE_NEEDED_TODAY",
    DASHBOARD_WIDGET_GRADE_DISTRIBUTION = "DASHBOARD_WIDGET_GRADE_DISTRIBUTION",
    DASHBOARD_WIDGET_LOWEST_CLASS_AVERAGES = "DASHBOARD_WIDGET_LOWEST_CLASS_AVERAGES",
    DASHBOARD_WIDGET_LOWEST_STUDENT_AVERAGES = "DASHBOARD_WIDGET_LOWEST_STUDENT_AVERAGES",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function dashboardWidgetNameFromJSON(object: any): DashboardWidgetName;
export declare function dashboardWidgetNameToJSON(object: DashboardWidgetName): string;
export declare function dashboardWidgetNameToNumber(object: DashboardWidgetName): number;
export declare enum DashboardWidgetWidth {
    DASHBOARD_WIDGET_WIDTH_HALF = "DASHBOARD_WIDGET_WIDTH_HALF",
    DASHBOARD_WIDGET_WIDTH_FULL = "DASHBOARD_WIDGET_WIDTH_FULL",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function dashboardWidgetWidthFromJSON(object: any): DashboardWidgetWidth;
export declare function dashboardWidgetWidthToJSON(object: DashboardWidgetWidth): string;
export declare function dashboardWidgetWidthToNumber(object: DashboardWidgetWidth): number;
export declare enum DashboardColumnCount {
    DASHBOARD_COLUMN_COUNT_ONE = "DASHBOARD_COLUMN_COUNT_ONE",
    DASHBOARD_COLUMN_COUNT_TWO = "DASHBOARD_COLUMN_COUNT_TWO",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function dashboardColumnCountFromJSON(object: any): DashboardColumnCount;
export declare function dashboardColumnCountToJSON(object: DashboardColumnCount): string;
export declare function dashboardColumnCountToNumber(object: DashboardColumnCount): number;
export interface DashboardWidgetLayout {
    widget_name?: DashboardWidgetName | undefined;
    order?: number | undefined;
    width?: DashboardWidgetWidth | undefined;
    is_visible?: boolean | undefined;
}
export interface DashboardLayoutPreferences {
    column_count?: DashboardColumnCount | undefined;
    widgets: DashboardWidgetLayout[];
}
export interface DashboardPreferences {
    id: ObjectId | undefined;
    organization: ObjectId | undefined;
    user_id: ObjectId | undefined;
    user_type?: UserType | undefined;
    layout: DashboardLayoutPreferences | undefined;
}
export declare const DashboardWidgetLayout: MessageFns<DashboardWidgetLayout>;
export declare const DashboardLayoutPreferences: MessageFns<DashboardLayoutPreferences>;
export declare const DashboardPreferences: MessageFns<DashboardPreferences>;
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
