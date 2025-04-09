"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: organization_service/campus_service.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrganizationCampusesResponse = exports.GetOrganizationCampusesRequest = exports.GetCampusRequest = exports.UpdateLogoRequest = exports.UpdateCampusRequest = exports.CreateCampusRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const object_id_1 = require("../utils/object_id");
const request_context_1 = require("../utils/request_context");
const campus_1 = require("./campus");
exports.protobufPackage = "organization_service";
function createBaseCreateCampusRequest() {
    return {
        context: undefined,
        name: "",
        address: undefined,
        email: "",
        phone: "",
        principalId: undefined,
        supervisorId: undefined,
    };
}
exports.CreateCampusRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.context !== undefined) {
            request_context_1.RequestContext.encode(message.context, writer.uint32(10).fork()).join();
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.address !== undefined) {
            campus_1.Address.encode(message.address, writer.uint32(26).fork()).join();
        }
        if (message.email !== "") {
            writer.uint32(34).string(message.email);
        }
        if (message.phone !== "") {
            writer.uint32(42).string(message.phone);
        }
        if (message.principalId !== undefined) {
            object_id_1.ObjectId.encode(message.principalId, writer.uint32(50).fork()).join();
        }
        if (message.supervisorId !== undefined) {
            object_id_1.ObjectId.encode(message.supervisorId, writer.uint32(58).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateCampusRequest();
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
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.address = campus_1.Address.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.phone = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.principalId = object_id_1.ObjectId.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.supervisorId = object_id_1.ObjectId.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            address: isSet(object.address) ? campus_1.Address.fromJSON(object.address) : undefined,
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            phone: isSet(object.phone) ? globalThis.String(object.phone) : "",
            principalId: isSet(object.principalId) ? object_id_1.ObjectId.fromJSON(object.principalId) : undefined,
            supervisorId: isSet(object.supervisorId) ? object_id_1.ObjectId.fromJSON(object.supervisorId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.context !== undefined) {
            obj.context = request_context_1.RequestContext.toJSON(message.context);
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.address !== undefined) {
            obj.address = campus_1.Address.toJSON(message.address);
        }
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.phone !== "") {
            obj.phone = message.phone;
        }
        if (message.principalId !== undefined) {
            obj.principalId = object_id_1.ObjectId.toJSON(message.principalId);
        }
        if (message.supervisorId !== undefined) {
            obj.supervisorId = object_id_1.ObjectId.toJSON(message.supervisorId);
        }
        return obj;
    },
    create(base) {
        return exports.CreateCampusRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateCampusRequest();
        message.context = (object.context !== undefined && object.context !== null)
            ? request_context_1.RequestContext.fromPartial(object.context)
            : undefined;
        message.name = object.name ?? "";
        message.address = (object.address !== undefined && object.address !== null)
            ? campus_1.Address.fromPartial(object.address)
            : undefined;
        message.email = object.email ?? "";
        message.phone = object.phone ?? "";
        message.principalId = (object.principalId !== undefined && object.principalId !== null)
            ? object_id_1.ObjectId.fromPartial(object.principalId)
            : undefined;
        message.supervisorId = (object.supervisorId !== undefined && object.supervisorId !== null)
            ? object_id_1.ObjectId.fromPartial(object.supervisorId)
            : undefined;
        return message;
    },
};
function createBaseUpdateCampusRequest() {
    return {
        context: undefined,
        id: undefined,
        name: "",
        address: undefined,
        email: "",
        phone: "",
        principalId: undefined,
        supervisorId: undefined,
    };
}
exports.UpdateCampusRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.context !== undefined) {
            request_context_1.RequestContext.encode(message.context, writer.uint32(10).fork()).join();
        }
        if (message.id !== undefined) {
            object_id_1.ObjectId.encode(message.id, writer.uint32(18).fork()).join();
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.address !== undefined) {
            campus_1.Address.encode(message.address, writer.uint32(34).fork()).join();
        }
        if (message.email !== "") {
            writer.uint32(42).string(message.email);
        }
        if (message.phone !== "") {
            writer.uint32(50).string(message.phone);
        }
        if (message.principalId !== undefined) {
            object_id_1.ObjectId.encode(message.principalId, writer.uint32(58).fork()).join();
        }
        if (message.supervisorId !== undefined) {
            object_id_1.ObjectId.encode(message.supervisorId, writer.uint32(66).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateCampusRequest();
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
                    message.id = object_id_1.ObjectId.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.address = campus_1.Address.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.phone = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.principalId = object_id_1.ObjectId.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.supervisorId = object_id_1.ObjectId.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? object_id_1.ObjectId.fromJSON(object.id) : undefined,
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            address: isSet(object.address) ? campus_1.Address.fromJSON(object.address) : undefined,
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            phone: isSet(object.phone) ? globalThis.String(object.phone) : "",
            principalId: isSet(object.principalId) ? object_id_1.ObjectId.fromJSON(object.principalId) : undefined,
            supervisorId: isSet(object.supervisorId) ? object_id_1.ObjectId.fromJSON(object.supervisorId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.context !== undefined) {
            obj.context = request_context_1.RequestContext.toJSON(message.context);
        }
        if (message.id !== undefined) {
            obj.id = object_id_1.ObjectId.toJSON(message.id);
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.address !== undefined) {
            obj.address = campus_1.Address.toJSON(message.address);
        }
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.phone !== "") {
            obj.phone = message.phone;
        }
        if (message.principalId !== undefined) {
            obj.principalId = object_id_1.ObjectId.toJSON(message.principalId);
        }
        if (message.supervisorId !== undefined) {
            obj.supervisorId = object_id_1.ObjectId.toJSON(message.supervisorId);
        }
        return obj;
    },
    create(base) {
        return exports.UpdateCampusRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateCampusRequest();
        message.context = (object.context !== undefined && object.context !== null)
            ? request_context_1.RequestContext.fromPartial(object.context)
            : undefined;
        message.id = (object.id !== undefined && object.id !== null) ? object_id_1.ObjectId.fromPartial(object.id) : undefined;
        message.name = object.name ?? "";
        message.address = (object.address !== undefined && object.address !== null)
            ? campus_1.Address.fromPartial(object.address)
            : undefined;
        message.email = object.email ?? "";
        message.phone = object.phone ?? "";
        message.principalId = (object.principalId !== undefined && object.principalId !== null)
            ? object_id_1.ObjectId.fromPartial(object.principalId)
            : undefined;
        message.supervisorId = (object.supervisorId !== undefined && object.supervisorId !== null)
            ? object_id_1.ObjectId.fromPartial(object.supervisorId)
            : undefined;
        return message;
    },
};
function createBaseUpdateLogoRequest() {
    return { context: undefined, campusId: undefined, fileName: "", awsS3FileLocation: "" };
}
exports.UpdateLogoRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.context !== undefined) {
            request_context_1.RequestContext.encode(message.context, writer.uint32(10).fork()).join();
        }
        if (message.campusId !== undefined) {
            object_id_1.ObjectId.encode(message.campusId, writer.uint32(18).fork()).join();
        }
        if (message.fileName !== "") {
            writer.uint32(26).string(message.fileName);
        }
        if (message.awsS3FileLocation !== "") {
            writer.uint32(34).string(message.awsS3FileLocation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateLogoRequest();
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
                    message.campusId = object_id_1.ObjectId.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.fileName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.awsS3FileLocation = reader.string();
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
            campusId: isSet(object.campusId) ? object_id_1.ObjectId.fromJSON(object.campusId) : undefined,
            fileName: isSet(object.fileName) ? globalThis.String(object.fileName) : "",
            awsS3FileLocation: isSet(object.awsS3FileLocation) ? globalThis.String(object.awsS3FileLocation) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.context !== undefined) {
            obj.context = request_context_1.RequestContext.toJSON(message.context);
        }
        if (message.campusId !== undefined) {
            obj.campusId = object_id_1.ObjectId.toJSON(message.campusId);
        }
        if (message.fileName !== "") {
            obj.fileName = message.fileName;
        }
        if (message.awsS3FileLocation !== "") {
            obj.awsS3FileLocation = message.awsS3FileLocation;
        }
        return obj;
    },
    create(base) {
        return exports.UpdateLogoRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateLogoRequest();
        message.context = (object.context !== undefined && object.context !== null)
            ? request_context_1.RequestContext.fromPartial(object.context)
            : undefined;
        message.campusId = (object.campusId !== undefined && object.campusId !== null)
            ? object_id_1.ObjectId.fromPartial(object.campusId)
            : undefined;
        message.fileName = object.fileName ?? "";
        message.awsS3FileLocation = object.awsS3FileLocation ?? "";
        return message;
    },
};
function createBaseGetCampusRequest() {
    return { context: undefined, campusId: undefined };
}
exports.GetCampusRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.context !== undefined) {
            request_context_1.RequestContext.encode(message.context, writer.uint32(10).fork()).join();
        }
        if (message.campusId !== undefined) {
            object_id_1.ObjectId.encode(message.campusId, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCampusRequest();
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
                    message.campusId = object_id_1.ObjectId.decode(reader, reader.uint32());
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
            campusId: isSet(object.campusId) ? object_id_1.ObjectId.fromJSON(object.campusId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.context !== undefined) {
            obj.context = request_context_1.RequestContext.toJSON(message.context);
        }
        if (message.campusId !== undefined) {
            obj.campusId = object_id_1.ObjectId.toJSON(message.campusId);
        }
        return obj;
    },
    create(base) {
        return exports.GetCampusRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetCampusRequest();
        message.context = (object.context !== undefined && object.context !== null)
            ? request_context_1.RequestContext.fromPartial(object.context)
            : undefined;
        message.campusId = (object.campusId !== undefined && object.campusId !== null)
            ? object_id_1.ObjectId.fromPartial(object.campusId)
            : undefined;
        return message;
    },
};
function createBaseGetOrganizationCampusesRequest() {
    return { context: undefined, organizationId: undefined };
}
exports.GetOrganizationCampusesRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.context !== undefined) {
            request_context_1.RequestContext.encode(message.context, writer.uint32(10).fork()).join();
        }
        if (message.organizationId !== undefined) {
            object_id_1.ObjectId.encode(message.organizationId, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetOrganizationCampusesRequest();
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
                    message.organizationId = object_id_1.ObjectId.decode(reader, reader.uint32());
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
            organizationId: isSet(object.organizationId) ? object_id_1.ObjectId.fromJSON(object.organizationId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.context !== undefined) {
            obj.context = request_context_1.RequestContext.toJSON(message.context);
        }
        if (message.organizationId !== undefined) {
            obj.organizationId = object_id_1.ObjectId.toJSON(message.organizationId);
        }
        return obj;
    },
    create(base) {
        return exports.GetOrganizationCampusesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetOrganizationCampusesRequest();
        message.context = (object.context !== undefined && object.context !== null)
            ? request_context_1.RequestContext.fromPartial(object.context)
            : undefined;
        message.organizationId = (object.organizationId !== undefined && object.organizationId !== null)
            ? object_id_1.ObjectId.fromPartial(object.organizationId)
            : undefined;
        return message;
    },
};
function createBaseGetOrganizationCampusesResponse() {
    return { campuses: [] };
}
exports.GetOrganizationCampusesResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.campuses) {
            campus_1.Campus.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetOrganizationCampusesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.campuses.push(campus_1.Campus.decode(reader, reader.uint32()));
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
            campuses: globalThis.Array.isArray(object?.campuses) ? object.campuses.map((e) => campus_1.Campus.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.campuses?.length) {
            obj.campuses = message.campuses.map((e) => campus_1.Campus.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetOrganizationCampusesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetOrganizationCampusesResponse();
        message.campuses = object.campuses?.map((e) => campus_1.Campus.fromPartial(e)) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
