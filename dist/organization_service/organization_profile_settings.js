"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: organization_service/organization_profile_settings.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationProfileSettings = exports.ProfileSection = exports.protobufPackage = void 0;
exports.profileSectionFromJSON = profileSectionFromJSON;
exports.profileSectionToJSON = profileSectionToJSON;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "organization_service";
var ProfileSection;
(function (ProfileSection) {
    ProfileSection[ProfileSection["OVERVIEW"] = 0] = "OVERVIEW";
    ProfileSection[ProfileSection["PROFILE"] = 1] = "PROFILE";
    ProfileSection[ProfileSection["FAMILY"] = 2] = "FAMILY";
    ProfileSection[ProfileSection["HEALTH"] = 3] = "HEALTH";
    ProfileSection[ProfileSection["HISTORY"] = 4] = "HISTORY";
    ProfileSection[ProfileSection["DOCUMENTS"] = 5] = "DOCUMENTS";
    ProfileSection[ProfileSection["FINANCIAL"] = 6] = "FINANCIAL";
    ProfileSection[ProfileSection["DONATION"] = 7] = "DONATION";
    ProfileSection[ProfileSection["MISC"] = 8] = "MISC";
    ProfileSection[ProfileSection["INCIDENTS"] = 9] = "INCIDENTS";
    ProfileSection[ProfileSection["TRANSACTIONS"] = 10] = "TRANSACTIONS";
    ProfileSection[ProfileSection["FORMS"] = 11] = "FORMS";
    ProfileSection[ProfileSection["ROLES"] = 12] = "ROLES";
    ProfileSection[ProfileSection["SCHEDULE"] = 13] = "SCHEDULE";
    ProfileSection[ProfileSection["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProfileSection || (exports.ProfileSection = ProfileSection = {}));
function profileSectionFromJSON(object) {
    switch (object) {
        case 0:
        case "OVERVIEW":
            return ProfileSection.OVERVIEW;
        case 1:
        case "PROFILE":
            return ProfileSection.PROFILE;
        case 2:
        case "FAMILY":
            return ProfileSection.FAMILY;
        case 3:
        case "HEALTH":
            return ProfileSection.HEALTH;
        case 4:
        case "HISTORY":
            return ProfileSection.HISTORY;
        case 5:
        case "DOCUMENTS":
            return ProfileSection.DOCUMENTS;
        case 6:
        case "FINANCIAL":
            return ProfileSection.FINANCIAL;
        case 7:
        case "DONATION":
            return ProfileSection.DONATION;
        case 8:
        case "MISC":
            return ProfileSection.MISC;
        case 9:
        case "INCIDENTS":
            return ProfileSection.INCIDENTS;
        case 10:
        case "TRANSACTIONS":
            return ProfileSection.TRANSACTIONS;
        case 11:
        case "FORMS":
            return ProfileSection.FORMS;
        case 12:
        case "ROLES":
            return ProfileSection.ROLES;
        case 13:
        case "SCHEDULE":
            return ProfileSection.SCHEDULE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProfileSection.UNRECOGNIZED;
    }
}
function profileSectionToJSON(object) {
    switch (object) {
        case ProfileSection.OVERVIEW:
            return "OVERVIEW";
        case ProfileSection.PROFILE:
            return "PROFILE";
        case ProfileSection.FAMILY:
            return "FAMILY";
        case ProfileSection.HEALTH:
            return "HEALTH";
        case ProfileSection.HISTORY:
            return "HISTORY";
        case ProfileSection.DOCUMENTS:
            return "DOCUMENTS";
        case ProfileSection.FINANCIAL:
            return "FINANCIAL";
        case ProfileSection.DONATION:
            return "DONATION";
        case ProfileSection.MISC:
            return "MISC";
        case ProfileSection.INCIDENTS:
            return "INCIDENTS";
        case ProfileSection.TRANSACTIONS:
            return "TRANSACTIONS";
        case ProfileSection.FORMS:
            return "FORMS";
        case ProfileSection.ROLES:
            return "ROLES";
        case ProfileSection.SCHEDULE:
            return "SCHEDULE";
        case ProfileSection.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseOrganizationProfileSettings() {
    return { studentProfileSections: [], parentProfileSections: [], teacherProfileSections: [] };
}
exports.OrganizationProfileSettings = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        writer.uint32(10).fork();
        for (const v of message.studentProfileSections) {
            writer.int32(v);
        }
        writer.join();
        writer.uint32(18).fork();
        for (const v of message.parentProfileSections) {
            writer.int32(v);
        }
        writer.join();
        writer.uint32(26).fork();
        for (const v of message.teacherProfileSections) {
            writer.int32(v);
        }
        writer.join();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrganizationProfileSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag === 8) {
                        message.studentProfileSections.push(reader.int32());
                        continue;
                    }
                    if (tag === 10) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.studentProfileSections.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 2:
                    if (tag === 16) {
                        message.parentProfileSections.push(reader.int32());
                        continue;
                    }
                    if (tag === 18) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.parentProfileSections.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 3:
                    if (tag === 24) {
                        message.teacherProfileSections.push(reader.int32());
                        continue;
                    }
                    if (tag === 26) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.teacherProfileSections.push(reader.int32());
                        }
                        continue;
                    }
                    break;
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
            studentProfileSections: globalThis.Array.isArray(object?.studentProfileSections)
                ? object.studentProfileSections.map((e) => profileSectionFromJSON(e))
                : [],
            parentProfileSections: globalThis.Array.isArray(object?.parentProfileSections)
                ? object.parentProfileSections.map((e) => profileSectionFromJSON(e))
                : [],
            teacherProfileSections: globalThis.Array.isArray(object?.teacherProfileSections)
                ? object.teacherProfileSections.map((e) => profileSectionFromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.studentProfileSections?.length) {
            obj.studentProfileSections = message.studentProfileSections.map((e) => profileSectionToJSON(e));
        }
        if (message.parentProfileSections?.length) {
            obj.parentProfileSections = message.parentProfileSections.map((e) => profileSectionToJSON(e));
        }
        if (message.teacherProfileSections?.length) {
            obj.teacherProfileSections = message.teacherProfileSections.map((e) => profileSectionToJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.OrganizationProfileSettings.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOrganizationProfileSettings();
        message.studentProfileSections = object.studentProfileSections?.map((e) => e) || [];
        message.parentProfileSections = object.parentProfileSections?.map((e) => e) || [];
        message.teacherProfileSections = object.teacherProfileSections?.map((e) => e) || [];
        return message;
    },
};
