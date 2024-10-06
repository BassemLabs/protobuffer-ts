"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: class_service/homeroom.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.Homeroom = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const object_id_1 = require("../utils/object_id");
const semester_1 = require("./semester");
exports.protobufPackage = "class_service";
function createBaseHomeroom() {
    return {
        id: undefined,
        archived: false,
        semester: undefined,
        name: "",
        grade: "",
        teacherIds: [],
        studentIds: [],
        gclassId: "",
    };
}
exports.Homeroom = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== undefined) {
            object_id_1.ObjectId.encode(message.id, writer.uint32(10).fork()).join();
        }
        if (message.archived !== false) {
            writer.uint32(16).bool(message.archived);
        }
        if (message.semester !== undefined) {
            semester_1.Semester.encode(message.semester, writer.uint32(26).fork()).join();
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.grade !== undefined && message.grade !== "") {
            writer.uint32(42).string(message.grade);
        }
        for (const v of message.teacherIds) {
            object_id_1.ObjectId.encode(v, writer.uint32(50).fork()).join();
        }
        for (const v of message.studentIds) {
            object_id_1.ObjectId.encode(v, writer.uint32(58).fork()).join();
        }
        if (message.gclassId !== undefined && message.gclassId !== "") {
            writer.uint32(66).string(message.gclassId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHomeroom();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.archived = reader.bool();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.semester = semester_1.Semester.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.grade = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.teacherIds.push(object_id_1.ObjectId.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.studentIds.push(object_id_1.ObjectId.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.gclassId = reader.string();
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
            archived: isSet(object.archived) ? globalThis.Boolean(object.archived) : false,
            semester: isSet(object.semester) ? semester_1.Semester.fromJSON(object.semester) : undefined,
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            grade: isSet(object.grade) ? globalThis.String(object.grade) : "",
            teacherIds: globalThis.Array.isArray(object?.teacherIds)
                ? object.teacherIds.map((e) => object_id_1.ObjectId.fromJSON(e))
                : [],
            studentIds: globalThis.Array.isArray(object?.studentIds)
                ? object.studentIds.map((e) => object_id_1.ObjectId.fromJSON(e))
                : [],
            gclassId: isSet(object.gclassId) ? globalThis.String(object.gclassId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== undefined) {
            obj.id = object_id_1.ObjectId.toJSON(message.id);
        }
        if (message.archived !== false) {
            obj.archived = message.archived;
        }
        if (message.semester !== undefined) {
            obj.semester = semester_1.Semester.toJSON(message.semester);
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.grade !== undefined && message.grade !== "") {
            obj.grade = message.grade;
        }
        if (message.teacherIds?.length) {
            obj.teacherIds = message.teacherIds.map((e) => object_id_1.ObjectId.toJSON(e));
        }
        if (message.studentIds?.length) {
            obj.studentIds = message.studentIds.map((e) => object_id_1.ObjectId.toJSON(e));
        }
        if (message.gclassId !== undefined && message.gclassId !== "") {
            obj.gclassId = message.gclassId;
        }
        return obj;
    },
    create(base) {
        return exports.Homeroom.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseHomeroom();
        message.id = (object.id !== undefined && object.id !== null) ? object_id_1.ObjectId.fromPartial(object.id) : undefined;
        message.archived = object.archived ?? false;
        message.semester = (object.semester !== undefined && object.semester !== null)
            ? semester_1.Semester.fromPartial(object.semester)
            : undefined;
        message.name = object.name ?? "";
        message.grade = object.grade ?? "";
        message.teacherIds = object.teacherIds?.map((e) => object_id_1.ObjectId.fromPartial(e)) || [];
        message.studentIds = object.studentIds?.map((e) => object_id_1.ObjectId.fromPartial(e)) || [];
        message.gclassId = object.gclassId ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
