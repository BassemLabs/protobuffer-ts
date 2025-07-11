"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: user_service/action_required_by_parents.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionRequiredByParents = exports.ActionType = exports.protobufPackage = void 0;
exports.actionTypeFromJSON = actionTypeFromJSON;
exports.actionTypeToJSON = actionTypeToJSON;
exports.actionTypeToNumber = actionTypeToNumber;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const object_id_1 = require("../utils/object_id");
exports.protobufPackage = "user_service";
var ActionType;
(function (ActionType) {
    ActionType["PAY_INVOICE"] = "PAY_INVOICE";
    ActionType["FILL_FIELDS"] = "FILL_FIELDS";
    ActionType["CORRECT_FIELDS"] = "CORRECT_FIELDS";
    ActionType["UNRECOGNIZED"] = "UNRECOGNIZED";
})(ActionType || (exports.ActionType = ActionType = {}));
function actionTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "PAY_INVOICE":
            return ActionType.PAY_INVOICE;
        case 1:
        case "FILL_FIELDS":
            return ActionType.FILL_FIELDS;
        case 2:
        case "CORRECT_FIELDS":
            return ActionType.CORRECT_FIELDS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ActionType.UNRECOGNIZED;
    }
}
function actionTypeToJSON(object) {
    switch (object) {
        case ActionType.PAY_INVOICE:
            return "PAY_INVOICE";
        case ActionType.FILL_FIELDS:
            return "FILL_FIELDS";
        case ActionType.CORRECT_FIELDS:
            return "CORRECT_FIELDS";
        case ActionType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function actionTypeToNumber(object) {
    switch (object) {
        case ActionType.PAY_INVOICE:
            return 0;
        case ActionType.FILL_FIELDS:
            return 1;
        case ActionType.CORRECT_FIELDS:
            return 2;
        case ActionType.UNRECOGNIZED:
        default:
            return -1;
    }
}
function createBaseActionRequiredByParents() {
    return { actionType: ActionType.PAY_INVOICE, title: "", invoiceId: undefined, groupId: undefined };
}
exports.ActionRequiredByParents = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.actionType !== ActionType.PAY_INVOICE) {
            writer.uint32(8).int32(actionTypeToNumber(message.actionType));
        }
        if (message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.invoiceId !== undefined) {
            object_id_1.ObjectId.encode(message.invoiceId, writer.uint32(26).fork()).join();
        }
        if (message.groupId !== undefined) {
            object_id_1.ObjectId.encode(message.groupId, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActionRequiredByParents();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.actionType = actionTypeFromJSON(reader.int32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.invoiceId = object_id_1.ObjectId.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.groupId = object_id_1.ObjectId.decode(reader, reader.uint32());
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
            actionType: isSet(object.actionType) ? actionTypeFromJSON(object.actionType) : ActionType.PAY_INVOICE,
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            invoiceId: isSet(object.invoiceId) ? object_id_1.ObjectId.fromJSON(object.invoiceId) : undefined,
            groupId: isSet(object.groupId) ? object_id_1.ObjectId.fromJSON(object.groupId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.actionType !== ActionType.PAY_INVOICE) {
            obj.actionType = actionTypeToJSON(message.actionType);
        }
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.invoiceId !== undefined) {
            obj.invoiceId = object_id_1.ObjectId.toJSON(message.invoiceId);
        }
        if (message.groupId !== undefined) {
            obj.groupId = object_id_1.ObjectId.toJSON(message.groupId);
        }
        return obj;
    },
    create(base) {
        return exports.ActionRequiredByParents.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseActionRequiredByParents();
        message.actionType = object.actionType ?? ActionType.PAY_INVOICE;
        message.title = object.title ?? "";
        message.invoiceId = (object.invoiceId !== undefined && object.invoiceId !== null)
            ? object_id_1.ObjectId.fromPartial(object.invoiceId)
            : undefined;
        message.groupId = (object.groupId !== undefined && object.groupId !== null)
            ? object_id_1.ObjectId.fromPartial(object.groupId)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
