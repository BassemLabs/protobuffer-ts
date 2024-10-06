"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: utils/datetime.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeZone = exports.DateTime = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const duration_1 = require("../google/protobuf/duration");
exports.protobufPackage = "utils";
function createBaseDateTime() {
    return {
        year: 0,
        month: 0,
        day: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        nanos: 0,
        utcOffset: undefined,
        timeZone: undefined,
    };
}
exports.DateTime = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.year !== 0) {
            writer.uint32(8).int32(message.year);
        }
        if (message.month !== 0) {
            writer.uint32(16).int32(message.month);
        }
        if (message.day !== 0) {
            writer.uint32(24).int32(message.day);
        }
        if (message.hours !== 0) {
            writer.uint32(32).int32(message.hours);
        }
        if (message.minutes !== 0) {
            writer.uint32(40).int32(message.minutes);
        }
        if (message.seconds !== 0) {
            writer.uint32(48).int32(message.seconds);
        }
        if (message.nanos !== 0) {
            writer.uint32(56).int32(message.nanos);
        }
        if (message.utcOffset !== undefined) {
            duration_1.Duration.encode(message.utcOffset, writer.uint32(66).fork()).join();
        }
        if (message.timeZone !== undefined) {
            exports.TimeZone.encode(message.timeZone, writer.uint32(74).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDateTime();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.year = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.month = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.day = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.hours = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.minutes = reader.int32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.seconds = reader.int32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.nanos = reader.int32();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.utcOffset = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.timeZone = exports.TimeZone.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            year: isSet(object.year) ? globalThis.Number(object.year) : 0,
            month: isSet(object.month) ? globalThis.Number(object.month) : 0,
            day: isSet(object.day) ? globalThis.Number(object.day) : 0,
            hours: isSet(object.hours) ? globalThis.Number(object.hours) : 0,
            minutes: isSet(object.minutes) ? globalThis.Number(object.minutes) : 0,
            seconds: isSet(object.seconds) ? globalThis.Number(object.seconds) : 0,
            nanos: isSet(object.nanos) ? globalThis.Number(object.nanos) : 0,
            utcOffset: isSet(object.utcOffset) ? duration_1.Duration.fromJSON(object.utcOffset) : undefined,
            timeZone: isSet(object.timeZone) ? exports.TimeZone.fromJSON(object.timeZone) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.year !== 0) {
            obj.year = Math.round(message.year);
        }
        if (message.month !== 0) {
            obj.month = Math.round(message.month);
        }
        if (message.day !== 0) {
            obj.day = Math.round(message.day);
        }
        if (message.hours !== 0) {
            obj.hours = Math.round(message.hours);
        }
        if (message.minutes !== 0) {
            obj.minutes = Math.round(message.minutes);
        }
        if (message.seconds !== 0) {
            obj.seconds = Math.round(message.seconds);
        }
        if (message.nanos !== 0) {
            obj.nanos = Math.round(message.nanos);
        }
        if (message.utcOffset !== undefined) {
            obj.utcOffset = duration_1.Duration.toJSON(message.utcOffset);
        }
        if (message.timeZone !== undefined) {
            obj.timeZone = exports.TimeZone.toJSON(message.timeZone);
        }
        return obj;
    },
    create(base) {
        return exports.DateTime.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDateTime();
        message.year = object.year ?? 0;
        message.month = object.month ?? 0;
        message.day = object.day ?? 0;
        message.hours = object.hours ?? 0;
        message.minutes = object.minutes ?? 0;
        message.seconds = object.seconds ?? 0;
        message.nanos = object.nanos ?? 0;
        message.utcOffset = (object.utcOffset !== undefined && object.utcOffset !== null)
            ? duration_1.Duration.fromPartial(object.utcOffset)
            : undefined;
        message.timeZone = (object.timeZone !== undefined && object.timeZone !== null)
            ? exports.TimeZone.fromPartial(object.timeZone)
            : undefined;
        return message;
    },
};
function createBaseTimeZone() {
    return { id: "", version: "" };
}
exports.TimeZone = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimeZone();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.version = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            version: isSet(object.version) ? globalThis.String(object.version) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.version !== "") {
            obj.version = message.version;
        }
        return obj;
    },
    create(base) {
        return exports.TimeZone.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTimeZone();
        message.id = object.id ?? "";
        message.version = object.version ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}