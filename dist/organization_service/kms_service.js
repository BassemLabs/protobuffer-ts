"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: organization_service/kms_service.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateKmsKeyRequest = exports.GetOrganizationKmsKeysResponse = exports.GetOrganizationKmsKeysRequest = exports.GetKmsKeyRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const object_id_1 = require("../utils/object_id");
const request_context_1 = require("../utils/request_context");
const kms_key_1 = require("./kms_key");
exports.protobufPackage = "organization_service";
function createBaseGetKmsKeyRequest() {
    return { context: undefined, organizationId: undefined, keyType: kms_key_1.KMSKeyType.GoogelAdminEmail };
}
exports.GetKmsKeyRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.context !== undefined) {
            request_context_1.RequestContext.encode(message.context, writer.uint32(10).fork()).join();
        }
        if (message.organizationId !== undefined) {
            object_id_1.ObjectId.encode(message.organizationId, writer.uint32(18).fork()).join();
        }
        if (message.keyType !== kms_key_1.KMSKeyType.GoogelAdminEmail) {
            writer.uint32(24).int32((0, kms_key_1.kMSKeyTypeToNumber)(message.keyType));
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetKmsKeyRequest();
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
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.keyType = (0, kms_key_1.kMSKeyTypeFromJSON)(reader.int32());
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
            keyType: isSet(object.keyType) ? (0, kms_key_1.kMSKeyTypeFromJSON)(object.keyType) : kms_key_1.KMSKeyType.GoogelAdminEmail,
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
        if (message.keyType !== kms_key_1.KMSKeyType.GoogelAdminEmail) {
            obj.keyType = (0, kms_key_1.kMSKeyTypeToJSON)(message.keyType);
        }
        return obj;
    },
    create(base) {
        return exports.GetKmsKeyRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetKmsKeyRequest();
        message.context = (object.context !== undefined && object.context !== null)
            ? request_context_1.RequestContext.fromPartial(object.context)
            : undefined;
        message.organizationId = (object.organizationId !== undefined && object.organizationId !== null)
            ? object_id_1.ObjectId.fromPartial(object.organizationId)
            : undefined;
        message.keyType = object.keyType ?? kms_key_1.KMSKeyType.GoogelAdminEmail;
        return message;
    },
};
function createBaseGetOrganizationKmsKeysRequest() {
    return { context: undefined, organizationId: undefined };
}
exports.GetOrganizationKmsKeysRequest = {
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
        const message = createBaseGetOrganizationKmsKeysRequest();
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
        return exports.GetOrganizationKmsKeysRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetOrganizationKmsKeysRequest();
        message.context = (object.context !== undefined && object.context !== null)
            ? request_context_1.RequestContext.fromPartial(object.context)
            : undefined;
        message.organizationId = (object.organizationId !== undefined && object.organizationId !== null)
            ? object_id_1.ObjectId.fromPartial(object.organizationId)
            : undefined;
        return message;
    },
};
function createBaseGetOrganizationKmsKeysResponse() {
    return { keys: [] };
}
exports.GetOrganizationKmsKeysResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.keys) {
            kms_key_1.KMSKey.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetOrganizationKmsKeysResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.keys.push(kms_key_1.KMSKey.decode(reader, reader.uint32()));
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
        return { keys: globalThis.Array.isArray(object?.keys) ? object.keys.map((e) => kms_key_1.KMSKey.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.keys?.length) {
            obj.keys = message.keys.map((e) => kms_key_1.KMSKey.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetOrganizationKmsKeysResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetOrganizationKmsKeysResponse();
        message.keys = object.keys?.map((e) => kms_key_1.KMSKey.fromPartial(e)) || [];
        return message;
    },
};
function createBaseUpdateKmsKeyRequest() {
    return { context: undefined, organizationId: undefined, keyType: kms_key_1.KMSKeyType.GoogelAdminEmail, secretMaterial: "" };
}
exports.UpdateKmsKeyRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.context !== undefined) {
            request_context_1.RequestContext.encode(message.context, writer.uint32(10).fork()).join();
        }
        if (message.organizationId !== undefined) {
            object_id_1.ObjectId.encode(message.organizationId, writer.uint32(18).fork()).join();
        }
        if (message.keyType !== kms_key_1.KMSKeyType.GoogelAdminEmail) {
            writer.uint32(24).int32((0, kms_key_1.kMSKeyTypeToNumber)(message.keyType));
        }
        if (message.secretMaterial !== "") {
            writer.uint32(34).string(message.secretMaterial);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateKmsKeyRequest();
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
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.keyType = (0, kms_key_1.kMSKeyTypeFromJSON)(reader.int32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.secretMaterial = reader.string();
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
            keyType: isSet(object.keyType) ? (0, kms_key_1.kMSKeyTypeFromJSON)(object.keyType) : kms_key_1.KMSKeyType.GoogelAdminEmail,
            secretMaterial: isSet(object.secretMaterial) ? globalThis.String(object.secretMaterial) : "",
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
        if (message.keyType !== kms_key_1.KMSKeyType.GoogelAdminEmail) {
            obj.keyType = (0, kms_key_1.kMSKeyTypeToJSON)(message.keyType);
        }
        if (message.secretMaterial !== "") {
            obj.secretMaterial = message.secretMaterial;
        }
        return obj;
    },
    create(base) {
        return exports.UpdateKmsKeyRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateKmsKeyRequest();
        message.context = (object.context !== undefined && object.context !== null)
            ? request_context_1.RequestContext.fromPartial(object.context)
            : undefined;
        message.organizationId = (object.organizationId !== undefined && object.organizationId !== null)
            ? object_id_1.ObjectId.fromPartial(object.organizationId)
            : undefined;
        message.keyType = object.keyType ?? kms_key_1.KMSKeyType.GoogelAdminEmail;
        message.secretMaterial = object.secretMaterial ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
