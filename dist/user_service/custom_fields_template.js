"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: user_service/custom_fields_template.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.organizationUsedTemplates = exports.TemplateFieldDefinition = exports.TemplateGroupDefinition = exports.CustomFieldsTemplate = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const organization_profile_settings_1 = require("../organization_service/organization_profile_settings");
const object_id_1 = require("../utils/object_id");
const user_type_1 = require("../utils/user_type");
exports.protobufPackage = "user_service";
function createBaseCustomFieldsTemplate() {
    return {
        templateId: undefined,
        templateName: "",
        templateDescription: "",
        templateIsActive: false,
        templateGroups: [],
    };
}
exports.CustomFieldsTemplate = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.templateId !== undefined) {
            object_id_1.ObjectId.encode(message.templateId, writer.uint32(10).fork()).join();
        }
        if (message.templateName !== "") {
            writer.uint32(18).string(message.templateName);
        }
        if (message.templateDescription !== "") {
            writer.uint32(26).string(message.templateDescription);
        }
        if (message.templateIsActive !== false) {
            writer.uint32(32).bool(message.templateIsActive);
        }
        for (const v of message.templateGroups) {
            exports.TemplateGroupDefinition.encode(v, writer.uint32(42).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCustomFieldsTemplate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.templateId = object_id_1.ObjectId.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.templateName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.templateDescription = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.templateIsActive = reader.bool();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.templateGroups.push(exports.TemplateGroupDefinition.decode(reader, reader.uint32()));
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
            templateId: isSet(object.templateId) ? object_id_1.ObjectId.fromJSON(object.templateId) : undefined,
            templateName: isSet(object.templateName) ? globalThis.String(object.templateName) : "",
            templateDescription: isSet(object.templateDescription) ? globalThis.String(object.templateDescription) : "",
            templateIsActive: isSet(object.templateIsActive) ? globalThis.Boolean(object.templateIsActive) : false,
            templateGroups: globalThis.Array.isArray(object?.templateGroups)
                ? object.templateGroups.map((e) => exports.TemplateGroupDefinition.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.templateId !== undefined) {
            obj.templateId = object_id_1.ObjectId.toJSON(message.templateId);
        }
        if (message.templateName !== "") {
            obj.templateName = message.templateName;
        }
        if (message.templateDescription !== "") {
            obj.templateDescription = message.templateDescription;
        }
        if (message.templateIsActive !== false) {
            obj.templateIsActive = message.templateIsActive;
        }
        if (message.templateGroups?.length) {
            obj.templateGroups = message.templateGroups.map((e) => exports.TemplateGroupDefinition.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.CustomFieldsTemplate.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCustomFieldsTemplate();
        message.templateId = (object.templateId !== undefined && object.templateId !== null)
            ? object_id_1.ObjectId.fromPartial(object.templateId)
            : undefined;
        message.templateName = object.templateName ?? "";
        message.templateDescription = object.templateDescription ?? "";
        message.templateIsActive = object.templateIsActive ?? false;
        message.templateGroups = object.templateGroups?.map((e) => exports.TemplateGroupDefinition.fromPartial(e)) || [];
        return message;
    },
};
function createBaseTemplateGroupDefinition() {
    return {
        groupId: undefined,
        groupName: "",
        groupUserType: user_type_1.UserType.None,
        groupProfileSection: organization_profile_settings_1.ProfileSection.OVERVIEW,
        groupHints: [],
        groupFieldDefinitions: [],
        groupVisibleToParentsForStatuses: [],
        groupVisibleToTeachersForStatuses: [],
    };
}
exports.TemplateGroupDefinition = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.groupId !== undefined) {
            object_id_1.ObjectId.encode(message.groupId, writer.uint32(10).fork()).join();
        }
        if (message.groupName !== "") {
            writer.uint32(18).string(message.groupName);
        }
        if (message.groupUserType !== user_type_1.UserType.None) {
            writer.uint32(24).int32((0, user_type_1.userTypeToNumber)(message.groupUserType));
        }
        if (message.groupProfileSection !== organization_profile_settings_1.ProfileSection.OVERVIEW) {
            writer.uint32(32).int32((0, organization_profile_settings_1.profileSectionToNumber)(message.groupProfileSection));
        }
        for (const v of message.groupHints) {
            writer.uint32(42).string(v);
        }
        for (const v of message.groupFieldDefinitions) {
            exports.TemplateFieldDefinition.encode(v, writer.uint32(50).fork()).join();
        }
        for (const v of message.groupVisibleToParentsForStatuses) {
            writer.uint32(58).string(v);
        }
        for (const v of message.groupVisibleToTeachersForStatuses) {
            writer.uint32(66).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTemplateGroupDefinition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.groupId = object_id_1.ObjectId.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.groupName = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.groupUserType = (0, user_type_1.userTypeFromJSON)(reader.int32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.groupProfileSection = (0, organization_profile_settings_1.profileSectionFromJSON)(reader.int32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.groupHints.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.groupFieldDefinitions.push(exports.TemplateFieldDefinition.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.groupVisibleToParentsForStatuses.push(reader.string());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.groupVisibleToTeachersForStatuses.push(reader.string());
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
            groupId: isSet(object.groupId) ? object_id_1.ObjectId.fromJSON(object.groupId) : undefined,
            groupName: isSet(object.groupName) ? globalThis.String(object.groupName) : "",
            groupUserType: isSet(object.groupUserType) ? (0, user_type_1.userTypeFromJSON)(object.groupUserType) : user_type_1.UserType.None,
            groupProfileSection: isSet(object.groupProfileSection)
                ? (0, organization_profile_settings_1.profileSectionFromJSON)(object.groupProfileSection)
                : organization_profile_settings_1.ProfileSection.OVERVIEW,
            groupHints: globalThis.Array.isArray(object?.groupHints)
                ? object.groupHints.map((e) => globalThis.String(e))
                : [],
            groupFieldDefinitions: globalThis.Array.isArray(object?.groupFieldDefinitions)
                ? object.groupFieldDefinitions.map((e) => exports.TemplateFieldDefinition.fromJSON(e))
                : [],
            groupVisibleToParentsForStatuses: globalThis.Array.isArray(object?.groupVisibleToParentsForStatuses)
                ? object.groupVisibleToParentsForStatuses.map((e) => globalThis.String(e))
                : [],
            groupVisibleToTeachersForStatuses: globalThis.Array.isArray(object?.groupVisibleToTeachersForStatuses)
                ? object.groupVisibleToTeachersForStatuses.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.groupId !== undefined) {
            obj.groupId = object_id_1.ObjectId.toJSON(message.groupId);
        }
        if (message.groupName !== "") {
            obj.groupName = message.groupName;
        }
        if (message.groupUserType !== user_type_1.UserType.None) {
            obj.groupUserType = (0, user_type_1.userTypeToJSON)(message.groupUserType);
        }
        if (message.groupProfileSection !== organization_profile_settings_1.ProfileSection.OVERVIEW) {
            obj.groupProfileSection = (0, organization_profile_settings_1.profileSectionToJSON)(message.groupProfileSection);
        }
        if (message.groupHints?.length) {
            obj.groupHints = message.groupHints;
        }
        if (message.groupFieldDefinitions?.length) {
            obj.groupFieldDefinitions = message.groupFieldDefinitions.map((e) => exports.TemplateFieldDefinition.toJSON(e));
        }
        if (message.groupVisibleToParentsForStatuses?.length) {
            obj.groupVisibleToParentsForStatuses = message.groupVisibleToParentsForStatuses;
        }
        if (message.groupVisibleToTeachersForStatuses?.length) {
            obj.groupVisibleToTeachersForStatuses = message.groupVisibleToTeachersForStatuses;
        }
        return obj;
    },
    create(base) {
        return exports.TemplateGroupDefinition.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTemplateGroupDefinition();
        message.groupId = (object.groupId !== undefined && object.groupId !== null)
            ? object_id_1.ObjectId.fromPartial(object.groupId)
            : undefined;
        message.groupName = object.groupName ?? "";
        message.groupUserType = object.groupUserType ?? user_type_1.UserType.None;
        message.groupProfileSection = object.groupProfileSection ?? organization_profile_settings_1.ProfileSection.OVERVIEW;
        message.groupHints = object.groupHints?.map((e) => e) || [];
        message.groupFieldDefinitions = object.groupFieldDefinitions?.map((e) => exports.TemplateFieldDefinition.fromPartial(e)) ||
            [];
        message.groupVisibleToParentsForStatuses = object.groupVisibleToParentsForStatuses?.map((e) => e) || [];
        message.groupVisibleToTeachersForStatuses = object.groupVisibleToTeachersForStatuses?.map((e) => e) || [];
        return message;
    },
};
function createBaseTemplateFieldDefinition() {
    return {
        fieldId: undefined,
        fieldName: "",
        fieldType: "",
        fieldIsRequired: false,
        fieldDescription: "",
        fieldRegexPattern: "",
        fieldOptions: [],
    };
}
exports.TemplateFieldDefinition = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.fieldId !== undefined) {
            object_id_1.ObjectId.encode(message.fieldId, writer.uint32(10).fork()).join();
        }
        if (message.fieldName !== "") {
            writer.uint32(18).string(message.fieldName);
        }
        if (message.fieldType !== "") {
            writer.uint32(26).string(message.fieldType);
        }
        if (message.fieldIsRequired !== false) {
            writer.uint32(32).bool(message.fieldIsRequired);
        }
        if (message.fieldDescription !== "") {
            writer.uint32(42).string(message.fieldDescription);
        }
        if (message.fieldRegexPattern !== undefined && message.fieldRegexPattern !== "") {
            writer.uint32(50).string(message.fieldRegexPattern);
        }
        for (const v of message.fieldOptions) {
            writer.uint32(58).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTemplateFieldDefinition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fieldId = object_id_1.ObjectId.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.fieldName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.fieldType = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.fieldIsRequired = reader.bool();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.fieldDescription = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.fieldRegexPattern = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.fieldOptions.push(reader.string());
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
            fieldId: isSet(object.fieldId) ? object_id_1.ObjectId.fromJSON(object.fieldId) : undefined,
            fieldName: isSet(object.fieldName) ? globalThis.String(object.fieldName) : "",
            fieldType: isSet(object.fieldType) ? globalThis.String(object.fieldType) : "",
            fieldIsRequired: isSet(object.fieldIsRequired) ? globalThis.Boolean(object.fieldIsRequired) : false,
            fieldDescription: isSet(object.fieldDescription) ? globalThis.String(object.fieldDescription) : "",
            fieldRegexPattern: isSet(object.fieldRegexPattern) ? globalThis.String(object.fieldRegexPattern) : "",
            fieldOptions: globalThis.Array.isArray(object?.fieldOptions)
                ? object.fieldOptions.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fieldId !== undefined) {
            obj.fieldId = object_id_1.ObjectId.toJSON(message.fieldId);
        }
        if (message.fieldName !== "") {
            obj.fieldName = message.fieldName;
        }
        if (message.fieldType !== "") {
            obj.fieldType = message.fieldType;
        }
        if (message.fieldIsRequired !== false) {
            obj.fieldIsRequired = message.fieldIsRequired;
        }
        if (message.fieldDescription !== "") {
            obj.fieldDescription = message.fieldDescription;
        }
        if (message.fieldRegexPattern !== undefined && message.fieldRegexPattern !== "") {
            obj.fieldRegexPattern = message.fieldRegexPattern;
        }
        if (message.fieldOptions?.length) {
            obj.fieldOptions = message.fieldOptions;
        }
        return obj;
    },
    create(base) {
        return exports.TemplateFieldDefinition.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTemplateFieldDefinition();
        message.fieldId = (object.fieldId !== undefined && object.fieldId !== null)
            ? object_id_1.ObjectId.fromPartial(object.fieldId)
            : undefined;
        message.fieldName = object.fieldName ?? "";
        message.fieldType = object.fieldType ?? "";
        message.fieldIsRequired = object.fieldIsRequired ?? false;
        message.fieldDescription = object.fieldDescription ?? "";
        message.fieldRegexPattern = object.fieldRegexPattern ?? "";
        message.fieldOptions = object.fieldOptions?.map((e) => e) || [];
        return message;
    },
};
function createBaseorganizationUsedTemplates() {
    return { id: undefined, organizationId: undefined, templates: [] };
}
exports.organizationUsedTemplates = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== undefined) {
            object_id_1.ObjectId.encode(message.id, writer.uint32(10).fork()).join();
        }
        if (message.organizationId !== undefined) {
            object_id_1.ObjectId.encode(message.organizationId, writer.uint32(18).fork()).join();
        }
        for (const v of message.templates) {
            object_id_1.ObjectId.encode(v, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseorganizationUsedTemplates();
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
                    message.organizationId = object_id_1.ObjectId.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.templates.push(object_id_1.ObjectId.decode(reader, reader.uint32()));
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
            organizationId: isSet(object.organizationId) ? object_id_1.ObjectId.fromJSON(object.organizationId) : undefined,
            templates: globalThis.Array.isArray(object?.templates)
                ? object.templates.map((e) => object_id_1.ObjectId.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== undefined) {
            obj.id = object_id_1.ObjectId.toJSON(message.id);
        }
        if (message.organizationId !== undefined) {
            obj.organizationId = object_id_1.ObjectId.toJSON(message.organizationId);
        }
        if (message.templates?.length) {
            obj.templates = message.templates.map((e) => object_id_1.ObjectId.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.organizationUsedTemplates.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseorganizationUsedTemplates();
        message.id = (object.id !== undefined && object.id !== null) ? object_id_1.ObjectId.fromPartial(object.id) : undefined;
        message.organizationId = (object.organizationId !== undefined && object.organizationId !== null)
            ? object_id_1.ObjectId.fromPartial(object.organizationId)
            : undefined;
        message.templates = object.templates?.map((e) => object_id_1.ObjectId.fromPartial(e)) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
