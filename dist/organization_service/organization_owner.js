"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: organization_service/organization_owner.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationOwner = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const object_id_1 = require("../utils/object_id");
exports.protobufPackage = "organization_service";
function createBaseOrganizationOwner() {
    return { id: undefined, name: "", email: "", organization: undefined, mainAddress: "", phoneNumber: "" };
}
exports.OrganizationOwner = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== undefined) {
            object_id_1.ObjectId.encode(message.id, writer.uint32(10).fork()).join();
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.email !== "") {
            writer.uint32(26).string(message.email);
        }
        if (message.organization !== undefined) {
            object_id_1.ObjectId.encode(message.organization, writer.uint32(34).fork()).join();
        }
        if (message.mainAddress !== undefined && message.mainAddress !== "") {
            writer.uint32(42).string(message.mainAddress);
        }
        if (message.phoneNumber !== undefined && message.phoneNumber !== "") {
            writer.uint32(50).string(message.phoneNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrganizationOwner();
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
                    message.email = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.organization = object_id_1.ObjectId.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.mainAddress = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.phoneNumber = reader.string();
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
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            organization: isSet(object.organization) ? object_id_1.ObjectId.fromJSON(object.organization) : undefined,
            mainAddress: isSet(object.mainAddress) ? globalThis.String(object.mainAddress) : "",
            phoneNumber: isSet(object.phoneNumber) ? globalThis.String(object.phoneNumber) : "",
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
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.organization !== undefined) {
            obj.organization = object_id_1.ObjectId.toJSON(message.organization);
        }
        if (message.mainAddress !== undefined && message.mainAddress !== "") {
            obj.mainAddress = message.mainAddress;
        }
        if (message.phoneNumber !== undefined && message.phoneNumber !== "") {
            obj.phoneNumber = message.phoneNumber;
        }
        return obj;
    },
    create(base) {
        return exports.OrganizationOwner.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOrganizationOwner();
        message.id = (object.id !== undefined && object.id !== null) ? object_id_1.ObjectId.fromPartial(object.id) : undefined;
        message.name = object.name ?? "";
        message.email = object.email ?? "";
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? object_id_1.ObjectId.fromPartial(object.organization)
            : undefined;
        message.mainAddress = object.mainAddress ?? "";
        message.phoneNumber = object.phoneNumber ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
