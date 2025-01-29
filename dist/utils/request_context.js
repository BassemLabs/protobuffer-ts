"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: utils/request_context.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContext = exports.RequestContext = exports.UserType = exports.protobufPackage = void 0;
exports.userTypeFromJSON = userTypeFromJSON;
exports.userTypeToJSON = userTypeToJSON;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const object_id_1 = require("./object_id");
exports.protobufPackage = "utils";
var UserType;
(function (UserType) {
    UserType[UserType["None"] = 0] = "None";
    UserType[UserType["Student"] = 1] = "Student";
    UserType[UserType["Teacher"] = 2] = "Teacher";
    UserType[UserType["Parent"] = 3] = "Parent";
    UserType[UserType["BassemLabsStaff"] = 4] = "BassemLabsStaff";
    UserType[UserType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserType || (exports.UserType = UserType = {}));
function userTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "None":
            return UserType.None;
        case 1:
        case "Student":
            return UserType.Student;
        case 2:
        case "Teacher":
            return UserType.Teacher;
        case 3:
        case "Parent":
            return UserType.Parent;
        case 4:
        case "BassemLabsStaff":
            return UserType.BassemLabsStaff;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserType.UNRECOGNIZED;
    }
}
function userTypeToJSON(object) {
    switch (object) {
        case UserType.None:
            return "None";
        case UserType.Student:
            return "Student";
        case UserType.Teacher:
            return "Teacher";
        case UserType.Parent:
            return "Parent";
        case UserType.BassemLabsStaff:
            return "BassemLabsStaff";
        case UserType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseRequestContext() {
    return { userContext: undefined, isTesting: false };
}
exports.RequestContext = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userContext !== undefined) {
            exports.UserContext.encode(message.userContext, writer.uint32(10).fork()).join();
        }
        if (message.isTesting !== false) {
            writer.uint32(16).bool(message.isTesting);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestContext();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userContext = exports.UserContext.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.isTesting = reader.bool();
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
            userContext: isSet(object.userContext) ? exports.UserContext.fromJSON(object.userContext) : undefined,
            isTesting: isSet(object.isTesting) ? globalThis.Boolean(object.isTesting) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userContext !== undefined) {
            obj.userContext = exports.UserContext.toJSON(message.userContext);
        }
        if (message.isTesting !== false) {
            obj.isTesting = message.isTesting;
        }
        return obj;
    },
    create(base) {
        return exports.RequestContext.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequestContext();
        message.userContext = (object.userContext !== undefined && object.userContext !== null)
            ? exports.UserContext.fromPartial(object.userContext)
            : undefined;
        message.isTesting = object.isTesting ?? false;
        return message;
    },
};
function createBaseUserContext() {
    return {
        userId: undefined,
        userType: 0,
        userAuthToken: "",
        organizationId: undefined,
        roles: [],
        parentFamilyIds: [],
        fullName: "",
        firebaseToken: "",
        exp: 0,
    };
}
exports.UserContext = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== undefined) {
            object_id_1.ObjectId.encode(message.userId, writer.uint32(10).fork()).join();
        }
        if (message.userType !== 0) {
            writer.uint32(16).int32(message.userType);
        }
        if (message.userAuthToken !== "") {
            writer.uint32(26).string(message.userAuthToken);
        }
        if (message.organizationId !== undefined) {
            object_id_1.ObjectId.encode(message.organizationId, writer.uint32(34).fork()).join();
        }
        for (const v of message.roles) {
            writer.uint32(42).string(v);
        }
        for (const v of message.parentFamilyIds) {
            object_id_1.ObjectId.encode(v, writer.uint32(50).fork()).join();
        }
        if (message.fullName !== "") {
            writer.uint32(58).string(message.fullName);
        }
        if (message.firebaseToken !== "") {
            writer.uint32(66).string(message.firebaseToken);
        }
        if (message.exp !== 0) {
            writer.uint32(72).uint64(message.exp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserContext();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = object_id_1.ObjectId.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.userType = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.userAuthToken = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.organizationId = object_id_1.ObjectId.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.roles.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.parentFamilyIds.push(object_id_1.ObjectId.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.fullName = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.firebaseToken = reader.string();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.exp = longToNumber(reader.uint64());
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
            userId: isSet(object.userId) ? object_id_1.ObjectId.fromJSON(object.userId) : undefined,
            userType: isSet(object.userType) ? userTypeFromJSON(object.userType) : 0,
            userAuthToken: isSet(object.userAuthToken) ? globalThis.String(object.userAuthToken) : "",
            organizationId: isSet(object.organizationId) ? object_id_1.ObjectId.fromJSON(object.organizationId) : undefined,
            roles: globalThis.Array.isArray(object?.roles) ? object.roles.map((e) => globalThis.String(e)) : [],
            parentFamilyIds: globalThis.Array.isArray(object?.parentFamilyIds)
                ? object.parentFamilyIds.map((e) => object_id_1.ObjectId.fromJSON(e))
                : [],
            fullName: isSet(object.fullName) ? globalThis.String(object.fullName) : "",
            firebaseToken: isSet(object.firebaseToken) ? globalThis.String(object.firebaseToken) : "",
            exp: isSet(object.exp) ? globalThis.Number(object.exp) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== undefined) {
            obj.userId = object_id_1.ObjectId.toJSON(message.userId);
        }
        if (message.userType !== 0) {
            obj.userType = userTypeToJSON(message.userType);
        }
        if (message.userAuthToken !== "") {
            obj.userAuthToken = message.userAuthToken;
        }
        if (message.organizationId !== undefined) {
            obj.organizationId = object_id_1.ObjectId.toJSON(message.organizationId);
        }
        if (message.roles?.length) {
            obj.roles = message.roles;
        }
        if (message.parentFamilyIds?.length) {
            obj.parentFamilyIds = message.parentFamilyIds.map((e) => object_id_1.ObjectId.toJSON(e));
        }
        if (message.fullName !== "") {
            obj.fullName = message.fullName;
        }
        if (message.firebaseToken !== "") {
            obj.firebaseToken = message.firebaseToken;
        }
        if (message.exp !== 0) {
            obj.exp = Math.round(message.exp);
        }
        return obj;
    },
    create(base) {
        return exports.UserContext.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserContext();
        message.userId = (object.userId !== undefined && object.userId !== null)
            ? object_id_1.ObjectId.fromPartial(object.userId)
            : undefined;
        message.userType = object.userType ?? 0;
        message.userAuthToken = object.userAuthToken ?? "";
        message.organizationId = (object.organizationId !== undefined && object.organizationId !== null)
            ? object_id_1.ObjectId.fromPartial(object.organizationId)
            : undefined;
        message.roles = object.roles?.map((e) => e) || [];
        message.parentFamilyIds = object.parentFamilyIds?.map((e) => object_id_1.ObjectId.fromPartial(e)) || [];
        message.fullName = object.fullName ?? "";
        message.firebaseToken = object.firebaseToken ?? "";
        message.exp = object.exp ?? 0;
        return message;
    },
};
function longToNumber(int64) {
    const num = globalThis.Number(int64.toString());
    if (num > globalThis.Number.MAX_SAFE_INTEGER) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    if (num < globalThis.Number.MIN_SAFE_INTEGER) {
        throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
    }
    return num;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
