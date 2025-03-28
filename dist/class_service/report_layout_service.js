"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: class_service/report_layout_service.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReportLayoutRequest = exports.GetByCourseRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const object_id_1 = require("../utils/object_id");
const request_context_1 = require("../utils/request_context");
const report_layout_1 = require("./report_layout");
exports.protobufPackage = "class_service.report_layout_service";
function createBaseGetByCourseRequest() {
    return { context: undefined, courseId: undefined };
}
exports.GetByCourseRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.context !== undefined) {
            request_context_1.RequestContext.encode(message.context, writer.uint32(10).fork()).join();
        }
        if (message.courseId !== undefined) {
            object_id_1.ObjectId.encode(message.courseId, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetByCourseRequest();
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
                    message.courseId = object_id_1.ObjectId.decode(reader, reader.uint32());
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
            courseId: isSet(object.courseId) ? object_id_1.ObjectId.fromJSON(object.courseId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.context !== undefined) {
            obj.context = request_context_1.RequestContext.toJSON(message.context);
        }
        if (message.courseId !== undefined) {
            obj.courseId = object_id_1.ObjectId.toJSON(message.courseId);
        }
        return obj;
    },
    create(base) {
        return exports.GetByCourseRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetByCourseRequest();
        message.context = (object.context !== undefined && object.context !== null)
            ? request_context_1.RequestContext.fromPartial(object.context)
            : undefined;
        message.courseId = (object.courseId !== undefined && object.courseId !== null)
            ? object_id_1.ObjectId.fromPartial(object.courseId)
            : undefined;
        return message;
    },
};
function createBaseUpdateReportLayoutRequest() {
    return { context: undefined, reportCardLayoutId: undefined, updatedReportCardLayout: undefined };
}
exports.UpdateReportLayoutRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.context !== undefined) {
            request_context_1.RequestContext.encode(message.context, writer.uint32(10).fork()).join();
        }
        if (message.reportCardLayoutId !== undefined) {
            object_id_1.ObjectId.encode(message.reportCardLayoutId, writer.uint32(18).fork()).join();
        }
        if (message.updatedReportCardLayout !== undefined) {
            report_layout_1.ReportLayout.encode(message.updatedReportCardLayout, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateReportLayoutRequest();
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
                    message.reportCardLayoutId = object_id_1.ObjectId.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.updatedReportCardLayout = report_layout_1.ReportLayout.decode(reader, reader.uint32());
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
            reportCardLayoutId: isSet(object.reportCardLayoutId) ? object_id_1.ObjectId.fromJSON(object.reportCardLayoutId) : undefined,
            updatedReportCardLayout: isSet(object.updatedReportCardLayout)
                ? report_layout_1.ReportLayout.fromJSON(object.updatedReportCardLayout)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.context !== undefined) {
            obj.context = request_context_1.RequestContext.toJSON(message.context);
        }
        if (message.reportCardLayoutId !== undefined) {
            obj.reportCardLayoutId = object_id_1.ObjectId.toJSON(message.reportCardLayoutId);
        }
        if (message.updatedReportCardLayout !== undefined) {
            obj.updatedReportCardLayout = report_layout_1.ReportLayout.toJSON(message.updatedReportCardLayout);
        }
        return obj;
    },
    create(base) {
        return exports.UpdateReportLayoutRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateReportLayoutRequest();
        message.context = (object.context !== undefined && object.context !== null)
            ? request_context_1.RequestContext.fromPartial(object.context)
            : undefined;
        message.reportCardLayoutId = (object.reportCardLayoutId !== undefined && object.reportCardLayoutId !== null)
            ? object_id_1.ObjectId.fromPartial(object.reportCardLayoutId)
            : undefined;
        message.updatedReportCardLayout =
            (object.updatedReportCardLayout !== undefined && object.updatedReportCardLayout !== null)
                ? report_layout_1.ReportLayout.fromPartial(object.updatedReportCardLayout)
                : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
