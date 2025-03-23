"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = exports.Test_service = exports.Report_layout = exports.Semester_service = exports.Homeroom = exports.Report_layout_service = exports.Semester = exports.Homeroom_service = exports.Gclass = exports.Course = exports.Course_service = exports.Custom_field_entry = exports.Timestamp = exports.Organization_profile_settings_service = exports.Organization = exports.Bassem_labs_staff = exports.Onboarding_settings_service = exports.Onboarding_settings = exports.Kms_key = exports.Organization_service = exports.Kms_service = exports.Organization_profile_settings = exports.Bassem_labs_staff_service = exports.Object_id = exports.Aws_file = exports.Request_context = void 0;
// Auto-generated index.ts
const Request_context = __importStar(require("./utils/request_context"));
exports.Request_context = Request_context;
const Aws_file = __importStar(require("./utils/aws_file"));
exports.Aws_file = Aws_file;
const Object_id = __importStar(require("./utils/object_id"));
exports.Object_id = Object_id;
const Bassem_labs_staff_service = __importStar(require("./organization_service/bassem_labs_staff_service"));
exports.Bassem_labs_staff_service = Bassem_labs_staff_service;
const Organization_profile_settings = __importStar(require("./organization_service/organization_profile_settings"));
exports.Organization_profile_settings = Organization_profile_settings;
const Kms_service = __importStar(require("./organization_service/kms_service"));
exports.Kms_service = Kms_service;
const Organization_service = __importStar(require("./organization_service/organization_service"));
exports.Organization_service = Organization_service;
const Kms_key = __importStar(require("./organization_service/kms_key"));
exports.Kms_key = Kms_key;
const Onboarding_settings = __importStar(require("./organization_service/onboarding_settings"));
exports.Onboarding_settings = Onboarding_settings;
const Onboarding_settings_service = __importStar(require("./organization_service/onboarding_settings_service"));
exports.Onboarding_settings_service = Onboarding_settings_service;
const Bassem_labs_staff = __importStar(require("./organization_service/bassem_labs_staff"));
exports.Bassem_labs_staff = Bassem_labs_staff;
const Organization = __importStar(require("./organization_service/organization"));
exports.Organization = Organization;
const Organization_profile_settings_service = __importStar(require("./organization_service/organization_profile_settings_service"));
exports.Organization_profile_settings_service = Organization_profile_settings_service;
const Timestamp = __importStar(require("./google/protobuf/timestamp"));
exports.Timestamp = Timestamp;
const Custom_field_entry = __importStar(require("./user_service/custom_field_entry"));
exports.Custom_field_entry = Custom_field_entry;
const Course_service = __importStar(require("./class_service/course_service"));
exports.Course_service = Course_service;
const Course = __importStar(require("./class_service/course"));
exports.Course = Course;
const Gclass = __importStar(require("./class_service/gclass"));
exports.Gclass = Gclass;
const Homeroom_service = __importStar(require("./class_service/homeroom_service"));
exports.Homeroom_service = Homeroom_service;
const Semester = __importStar(require("./class_service/semester"));
exports.Semester = Semester;
const Report_layout_service = __importStar(require("./class_service/report_layout_service"));
exports.Report_layout_service = Report_layout_service;
const Homeroom = __importStar(require("./class_service/homeroom"));
exports.Homeroom = Homeroom;
const Semester_service = __importStar(require("./class_service/semester_service"));
exports.Semester_service = Semester_service;
const Report_layout = __importStar(require("./class_service/report_layout"));
exports.Report_layout = Report_layout;
const Test_service = __importStar(require("./template_service/test_service"));
exports.Test_service = Test_service;
const Test = __importStar(require("./template_service/test"));
exports.Test = Test;
