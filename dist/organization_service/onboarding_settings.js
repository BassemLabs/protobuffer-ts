"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: organization_service/onboarding_settings.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeItem = exports.ItemizedFee = exports.OnboardingSettings_ReregistrationFeesEntry = exports.OnboardingSettings_RegistrationFeesEntry = exports.OnboardingSettings = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const aws_file_1 = require("../utils/aws_file");
exports.protobufPackage = "organization_service";
function createBaseOnboardingSettings() {
    return {
        hasInterviewForNewcomers: false,
        enableGroupApprovalSystem: false,
        waitlistFee: 0,
        registrationFees: {},
        reregistrationFees: {},
        interviewEmailTemplate: "",
        postInterviewEmailTemplate: "",
        rejectionEmailTemplate: "",
        approvalEmailTemplate: "",
        fieldGroupRejectionEmailTemplate: "",
        withdrawEmailTemplate: "",
        moveStudentAdmissionYearEmailTemplate: "",
        schoolHandbook: [],
    };
}
exports.OnboardingSettings = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.hasInterviewForNewcomers !== false) {
            writer.uint32(8).bool(message.hasInterviewForNewcomers);
        }
        if (message.enableGroupApprovalSystem !== false) {
            writer.uint32(16).bool(message.enableGroupApprovalSystem);
        }
        if (message.waitlistFee !== 0) {
            writer.uint32(29).float(message.waitlistFee);
        }
        Object.entries(message.registrationFees).forEach(([key, value]) => {
            exports.OnboardingSettings_RegistrationFeesEntry.encode({ key: key, value }, writer.uint32(34).fork()).join();
        });
        Object.entries(message.reregistrationFees).forEach(([key, value]) => {
            exports.OnboardingSettings_ReregistrationFeesEntry.encode({ key: key, value }, writer.uint32(42).fork()).join();
        });
        if (message.interviewEmailTemplate !== undefined && message.interviewEmailTemplate !== "") {
            writer.uint32(50).string(message.interviewEmailTemplate);
        }
        if (message.postInterviewEmailTemplate !== undefined && message.postInterviewEmailTemplate !== "") {
            writer.uint32(58).string(message.postInterviewEmailTemplate);
        }
        if (message.rejectionEmailTemplate !== "") {
            writer.uint32(66).string(message.rejectionEmailTemplate);
        }
        if (message.approvalEmailTemplate !== "") {
            writer.uint32(74).string(message.approvalEmailTemplate);
        }
        if (message.fieldGroupRejectionEmailTemplate !== "") {
            writer.uint32(82).string(message.fieldGroupRejectionEmailTemplate);
        }
        if (message.withdrawEmailTemplate !== "") {
            writer.uint32(90).string(message.withdrawEmailTemplate);
        }
        if (message.moveStudentAdmissionYearEmailTemplate !== "") {
            writer.uint32(98).string(message.moveStudentAdmissionYearEmailTemplate);
        }
        for (const v of message.schoolHandbook) {
            aws_file_1.AWSFile.encode(v, writer.uint32(106).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOnboardingSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.hasInterviewForNewcomers = reader.bool();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.enableGroupApprovalSystem = reader.bool();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }
                    message.waitlistFee = reader.float();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    const entry4 = exports.OnboardingSettings_RegistrationFeesEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.registrationFees[entry4.key] = entry4.value;
                    }
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    const entry5 = exports.OnboardingSettings_ReregistrationFeesEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.reregistrationFees[entry5.key] = entry5.value;
                    }
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.interviewEmailTemplate = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.postInterviewEmailTemplate = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.rejectionEmailTemplate = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.approvalEmailTemplate = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.fieldGroupRejectionEmailTemplate = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.withdrawEmailTemplate = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.moveStudentAdmissionYearEmailTemplate = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.schoolHandbook.push(aws_file_1.AWSFile.decode(reader, reader.uint32()));
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
            hasInterviewForNewcomers: isSet(object.hasInterviewForNewcomers)
                ? globalThis.Boolean(object.hasInterviewForNewcomers)
                : false,
            enableGroupApprovalSystem: isSet(object.enableGroupApprovalSystem)
                ? globalThis.Boolean(object.enableGroupApprovalSystem)
                : false,
            waitlistFee: isSet(object.waitlistFee) ? globalThis.Number(object.waitlistFee) : 0,
            registrationFees: isObject(object.registrationFees)
                ? Object.entries(object.registrationFees).reduce((acc, [key, value]) => {
                    acc[key] = exports.ItemizedFee.fromJSON(value);
                    return acc;
                }, {})
                : {},
            reregistrationFees: isObject(object.reregistrationFees)
                ? Object.entries(object.reregistrationFees).reduce((acc, [key, value]) => {
                    acc[key] = exports.ItemizedFee.fromJSON(value);
                    return acc;
                }, {})
                : {},
            interviewEmailTemplate: isSet(object.interviewEmailTemplate)
                ? globalThis.String(object.interviewEmailTemplate)
                : "",
            postInterviewEmailTemplate: isSet(object.postInterviewEmailTemplate)
                ? globalThis.String(object.postInterviewEmailTemplate)
                : "",
            rejectionEmailTemplate: isSet(object.rejectionEmailTemplate)
                ? globalThis.String(object.rejectionEmailTemplate)
                : "",
            approvalEmailTemplate: isSet(object.approvalEmailTemplate) ? globalThis.String(object.approvalEmailTemplate) : "",
            fieldGroupRejectionEmailTemplate: isSet(object.fieldGroupRejectionEmailTemplate)
                ? globalThis.String(object.fieldGroupRejectionEmailTemplate)
                : "",
            withdrawEmailTemplate: isSet(object.withdrawEmailTemplate) ? globalThis.String(object.withdrawEmailTemplate) : "",
            moveStudentAdmissionYearEmailTemplate: isSet(object.moveStudentAdmissionYearEmailTemplate)
                ? globalThis.String(object.moveStudentAdmissionYearEmailTemplate)
                : "",
            schoolHandbook: globalThis.Array.isArray(object?.schoolHandbook)
                ? object.schoolHandbook.map((e) => aws_file_1.AWSFile.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.hasInterviewForNewcomers !== false) {
            obj.hasInterviewForNewcomers = message.hasInterviewForNewcomers;
        }
        if (message.enableGroupApprovalSystem !== false) {
            obj.enableGroupApprovalSystem = message.enableGroupApprovalSystem;
        }
        if (message.waitlistFee !== 0) {
            obj.waitlistFee = message.waitlistFee;
        }
        if (message.registrationFees) {
            const entries = Object.entries(message.registrationFees);
            if (entries.length > 0) {
                obj.registrationFees = {};
                entries.forEach(([k, v]) => {
                    obj.registrationFees[k] = exports.ItemizedFee.toJSON(v);
                });
            }
        }
        if (message.reregistrationFees) {
            const entries = Object.entries(message.reregistrationFees);
            if (entries.length > 0) {
                obj.reregistrationFees = {};
                entries.forEach(([k, v]) => {
                    obj.reregistrationFees[k] = exports.ItemizedFee.toJSON(v);
                });
            }
        }
        if (message.interviewEmailTemplate !== undefined && message.interviewEmailTemplate !== "") {
            obj.interviewEmailTemplate = message.interviewEmailTemplate;
        }
        if (message.postInterviewEmailTemplate !== undefined && message.postInterviewEmailTemplate !== "") {
            obj.postInterviewEmailTemplate = message.postInterviewEmailTemplate;
        }
        if (message.rejectionEmailTemplate !== "") {
            obj.rejectionEmailTemplate = message.rejectionEmailTemplate;
        }
        if (message.approvalEmailTemplate !== "") {
            obj.approvalEmailTemplate = message.approvalEmailTemplate;
        }
        if (message.fieldGroupRejectionEmailTemplate !== "") {
            obj.fieldGroupRejectionEmailTemplate = message.fieldGroupRejectionEmailTemplate;
        }
        if (message.withdrawEmailTemplate !== "") {
            obj.withdrawEmailTemplate = message.withdrawEmailTemplate;
        }
        if (message.moveStudentAdmissionYearEmailTemplate !== "") {
            obj.moveStudentAdmissionYearEmailTemplate = message.moveStudentAdmissionYearEmailTemplate;
        }
        if (message.schoolHandbook?.length) {
            obj.schoolHandbook = message.schoolHandbook.map((e) => aws_file_1.AWSFile.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.OnboardingSettings.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOnboardingSettings();
        message.hasInterviewForNewcomers = object.hasInterviewForNewcomers ?? false;
        message.enableGroupApprovalSystem = object.enableGroupApprovalSystem ?? false;
        message.waitlistFee = object.waitlistFee ?? 0;
        message.registrationFees = Object.entries(object.registrationFees ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.ItemizedFee.fromPartial(value);
            }
            return acc;
        }, {});
        message.reregistrationFees = Object.entries(object.reregistrationFees ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.ItemizedFee.fromPartial(value);
            }
            return acc;
        }, {});
        message.interviewEmailTemplate = object.interviewEmailTemplate ?? "";
        message.postInterviewEmailTemplate = object.postInterviewEmailTemplate ?? "";
        message.rejectionEmailTemplate = object.rejectionEmailTemplate ?? "";
        message.approvalEmailTemplate = object.approvalEmailTemplate ?? "";
        message.fieldGroupRejectionEmailTemplate = object.fieldGroupRejectionEmailTemplate ?? "";
        message.withdrawEmailTemplate = object.withdrawEmailTemplate ?? "";
        message.moveStudentAdmissionYearEmailTemplate = object.moveStudentAdmissionYearEmailTemplate ?? "";
        message.schoolHandbook = object.schoolHandbook?.map((e) => aws_file_1.AWSFile.fromPartial(e)) || [];
        return message;
    },
};
function createBaseOnboardingSettings_RegistrationFeesEntry() {
    return { key: "", value: undefined };
}
exports.OnboardingSettings_RegistrationFeesEntry = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.ItemizedFee.encode(message.value, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOnboardingSettings_RegistrationFeesEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.ItemizedFee.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? globalThis.String(object.key) : "",
            value: isSet(object.value) ? exports.ItemizedFee.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = exports.ItemizedFee.toJSON(message.value);
        }
        return obj;
    },
    create(base) {
        return exports.OnboardingSettings_RegistrationFeesEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOnboardingSettings_RegistrationFeesEntry();
        message.key = object.key ?? "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.ItemizedFee.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseOnboardingSettings_ReregistrationFeesEntry() {
    return { key: "", value: undefined };
}
exports.OnboardingSettings_ReregistrationFeesEntry = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.ItemizedFee.encode(message.value, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOnboardingSettings_ReregistrationFeesEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.ItemizedFee.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? globalThis.String(object.key) : "",
            value: isSet(object.value) ? exports.ItemizedFee.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = exports.ItemizedFee.toJSON(message.value);
        }
        return obj;
    },
    create(base) {
        return exports.OnboardingSettings_ReregistrationFeesEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOnboardingSettings_ReregistrationFeesEntry();
        message.key = object.key ?? "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.ItemizedFee.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseItemizedFee() {
    return { title: "", description: "", items: [] };
}
exports.ItemizedFee = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.items) {
            exports.FeeItem.encode(v, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseItemizedFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.items.push(exports.FeeItem.decode(reader, reader.uint32()));
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
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            items: globalThis.Array.isArray(object?.items) ? object.items.map((e) => exports.FeeItem.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.items?.length) {
            obj.items = message.items.map((e) => exports.FeeItem.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ItemizedFee.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseItemizedFee();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.items = object.items?.map((e) => exports.FeeItem.fromPartial(e)) || [];
        return message;
    },
};
function createBaseFeeItem() {
    return { title: "", description: "", price: 0, quantity: 0 };
}
exports.FeeItem = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.price !== 0) {
            writer.uint32(29).float(message.price);
        }
        if (message.quantity !== 0) {
            writer.uint32(32).uint32(message.quantity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }
                    message.price = reader.float();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.quantity = reader.uint32();
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
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            price: isSet(object.price) ? globalThis.Number(object.price) : 0,
            quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.price !== 0) {
            obj.price = message.price;
        }
        if (message.quantity !== 0) {
            obj.quantity = Math.round(message.quantity);
        }
        return obj;
    },
    create(base) {
        return exports.FeeItem.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFeeItem();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.price = object.price ?? 0;
        message.quantity = object.quantity ?? 0;
        return message;
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
