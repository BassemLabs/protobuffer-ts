import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Duration } from "../google/protobuf/duration";
export declare const protobufPackage = "utils";
export interface DateTime {
    /**
     * Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a
     * datetime without a year.
     */
    year: number;
    /** Required. Month of year. Must be from 1 to 12. */
    month: number;
    /**
     * Required. Day of month. Must be from 1 to 31 and valid for the year and
     * month.
     */
    day: number;
    /**
     * Required. Hours of day in 24 hour format. Should be from 0 to 23. An API
     * may choose to allow the value "24:00:00" for scenarios like business
     * closing time.
     */
    hours: number;
    /** Required. Minutes of hour of day. Must be from 0 to 59. */
    minutes: number;
    /**
     * Required. Seconds of minutes of the time. Must normally be from 0 to 59. An
     * API may allow the value 60 if it allows leap-seconds.
     */
    seconds: number;
    /**
     * Required. Fractions of seconds in nanoseconds. Must be from 0 to
     * 999,999,999.
     */
    nanos: number;
    /**
     * UTC offset. Must be whole seconds, between -18 hours and +18 hours.
     * For example, a UTC offset of -4:00 would be represented as
     * { seconds: -14400 }.
     */
    utcOffset?: Duration | undefined;
    /** Time zone. */
    timeZone?: TimeZone | undefined;
}
/**
 * Represents a time zone from the
 * [IANA Time Zone Database](https://www.iana.org/time-zones).
 */
export interface TimeZone {
    /** IANA Time Zone Database time zone, e.g. "America/New_York". */
    id: string;
    /** Optional. IANA Time Zone Database version number, e.g. "2019a". */
    version: string;
}
export declare const DateTime: MessageFns<DateTime>;
export declare const TimeZone: MessageFns<TimeZone>;
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
