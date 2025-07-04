"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: payment_service/tuition_invoice_service.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateTuitionInvoiceRequest = exports.StudentObj = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const object_id_1 = require("../utils/object_id");
const request_context_1 = require("../utils/request_context");
exports.protobufPackage = "payment_service";
function createBaseStudentObj() {
    return { id: undefined, name: "", grade: "" };
}
exports.StudentObj = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== undefined) {
            object_id_1.ObjectId.encode(message.id, writer.uint32(10).fork()).join();
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.grade !== "") {
            writer.uint32(26).string(message.grade);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStudentObj();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = object_id_1.ObjectId.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.grade = reader.string();
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
            id: isSet(object.id) ? object_id_1.ObjectId.fromJSON(object.id) : undefined,
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            grade: isSet(object.grade) ? globalThis.String(object.grade) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== undefined) {
            obj.id = object_id_1.ObjectId.toJSON(message.id);
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.grade !== "") {
            obj.grade = message.grade;
        }
        return obj;
    },
    create(base) {
        return exports.StudentObj.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStudentObj();
        message.id = (object.id !== undefined && object.id !== null) ? object_id_1.ObjectId.fromPartial(object.id) : undefined;
        message.name = object.name ?? "";
        message.grade = object.grade ?? "";
        return message;
    },
};
function createBaseGenerateTuitionInvoiceRequest() {
    return { context: undefined, family: undefined, schoolYear: undefined, tuitionPlan: undefined, students: [] };
}
exports.GenerateTuitionInvoiceRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.context !== undefined) {
            request_context_1.RequestContext.encode(message.context, writer.uint32(10).fork()).join();
        }
        if (message.family !== undefined) {
            object_id_1.ObjectId.encode(message.family, writer.uint32(18).fork()).join();
        }
        if (message.schoolYear !== undefined) {
            object_id_1.ObjectId.encode(message.schoolYear, writer.uint32(26).fork()).join();
        }
        if (message.tuitionPlan !== undefined) {
            object_id_1.ObjectId.encode(message.tuitionPlan, writer.uint32(34).fork()).join();
        }
        for (const v of message.students) {
            exports.StudentObj.encode(v, writer.uint32(42).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenerateTuitionInvoiceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.context = request_context_1.RequestContext.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.family = object_id_1.ObjectId.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.schoolYear = object_id_1.ObjectId.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.tuitionPlan = object_id_1.ObjectId.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.students.push(exports.StudentObj.decode(reader, reader.uint32()));
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
            context: isSet(object.context) ? request_context_1.RequestContext.fromJSON(object.context) : undefined,
            family: isSet(object.family) ? object_id_1.ObjectId.fromJSON(object.family) : undefined,
            schoolYear: isSet(object.schoolYear) ? object_id_1.ObjectId.fromJSON(object.schoolYear) : undefined,
            tuitionPlan: isSet(object.tuitionPlan) ? object_id_1.ObjectId.fromJSON(object.tuitionPlan) : undefined,
            students: globalThis.Array.isArray(object?.students)
                ? object.students.map((e) => exports.StudentObj.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.context !== undefined) {
            obj.context = request_context_1.RequestContext.toJSON(message.context);
        }
        if (message.family !== undefined) {
            obj.family = object_id_1.ObjectId.toJSON(message.family);
        }
        if (message.schoolYear !== undefined) {
            obj.schoolYear = object_id_1.ObjectId.toJSON(message.schoolYear);
        }
        if (message.tuitionPlan !== undefined) {
            obj.tuitionPlan = object_id_1.ObjectId.toJSON(message.tuitionPlan);
        }
        if (message.students?.length) {
            obj.students = message.students.map((e) => exports.StudentObj.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GenerateTuitionInvoiceRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenerateTuitionInvoiceRequest();
        message.context = (object.context !== undefined && object.context !== null)
            ? request_context_1.RequestContext.fromPartial(object.context)
            : undefined;
        message.family = (object.family !== undefined && object.family !== null)
            ? object_id_1.ObjectId.fromPartial(object.family)
            : undefined;
        message.schoolYear = (object.schoolYear !== undefined && object.schoolYear !== null)
            ? object_id_1.ObjectId.fromPartial(object.schoolYear)
            : undefined;
        message.tuitionPlan = (object.tuitionPlan !== undefined && object.tuitionPlan !== null)
            ? object_id_1.ObjectId.fromPartial(object.tuitionPlan)
            : undefined;
        message.students = object.students?.map((e) => exports.StudentObj.fromPartial(e)) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
