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
exports.Custom_field_entry = exports.Organization_service = exports.Kms_service = exports.Announcement_service = exports.Announcement = exports.Organization_owner = exports.Organization_profile_settings = exports.Kms_key = exports.Onboarding_settings = exports.Onboarding_settings_service = exports.Campus = exports.Campus_service = exports.Bassem_labs_staff_service = exports.Bassem_labs_staff = exports.Organization = exports.Organization_profile_settings_service = exports.Organization_owner_service = exports.Object_id = exports.Request_context = exports.Aws_file = exports.User_type = exports.Semester_service = exports.Report_layout = exports.Homeroom = exports.Gclass = exports.Course_service = exports.Report_layout_service = exports.Semester = exports.Homeroom_service = exports.Course = exports.Timestamp = exports.Invoice_to_charge = exports.Sample = exports.Invoice = exports.Transaction = exports.Tuition_application = exports.Payment_service = exports.Tuition_invoice = exports.Organization_payment_plan_service = exports.Processing_fees_service = exports.Processing_fees = exports.Organization_payment_plan = exports.Transaction_service = exports.Tuition_service = exports.Tuition = exports.Tuition_application_service = exports.Invoice_service = exports.Tuition_invoice_service = exports.Test = exports.Test_service = void 0;
exports.Action_required_by_parents = exports.Email_template = exports.Custom_fields_template = exports.Family = void 0;
// Auto-generated index.ts
const Test_service = __importStar(require("./template_service/test_service"));
exports.Test_service = Test_service;
const Test = __importStar(require("./template_service/test"));
exports.Test = Test;
const Tuition_invoice_service = __importStar(require("./payment_service/tuition_invoice_service"));
exports.Tuition_invoice_service = Tuition_invoice_service;
const Invoice_service = __importStar(require("./payment_service/invoice_service"));
exports.Invoice_service = Invoice_service;
const Tuition_application_service = __importStar(require("./payment_service/tuition_application_service"));
exports.Tuition_application_service = Tuition_application_service;
const Tuition = __importStar(require("./payment_service/tuition"));
exports.Tuition = Tuition;
const Tuition_service = __importStar(require("./payment_service/tuition_service"));
exports.Tuition_service = Tuition_service;
const Transaction_service = __importStar(require("./payment_service/transaction_service"));
exports.Transaction_service = Transaction_service;
const Organization_payment_plan = __importStar(require("./payment_service/organization_payment_plan"));
exports.Organization_payment_plan = Organization_payment_plan;
const Processing_fees = __importStar(require("./payment_service/processing_fees"));
exports.Processing_fees = Processing_fees;
const Processing_fees_service = __importStar(require("./payment_service/processing_fees_service"));
exports.Processing_fees_service = Processing_fees_service;
const Organization_payment_plan_service = __importStar(require("./payment_service/organization_payment_plan_service"));
exports.Organization_payment_plan_service = Organization_payment_plan_service;
const Tuition_invoice = __importStar(require("./payment_service/tuition_invoice"));
exports.Tuition_invoice = Tuition_invoice;
const Payment_service = __importStar(require("./payment_service/payment_service"));
exports.Payment_service = Payment_service;
const Tuition_application = __importStar(require("./payment_service/tuition_application"));
exports.Tuition_application = Tuition_application;
const Transaction = __importStar(require("./payment_service/transaction"));
exports.Transaction = Transaction;
const Invoice = __importStar(require("./payment_service/invoice"));
exports.Invoice = Invoice;
const Sample = __importStar(require("./rabbitmq_schemas/sample"));
exports.Sample = Sample;
const Invoice_to_charge = __importStar(require("./rabbitmq_schemas/invoice_to_charge"));
exports.Invoice_to_charge = Invoice_to_charge;
const Timestamp = __importStar(require("./google/protobuf/timestamp"));
exports.Timestamp = Timestamp;
const Course = __importStar(require("./class_service/course"));
exports.Course = Course;
const Homeroom_service = __importStar(require("./class_service/homeroom_service"));
exports.Homeroom_service = Homeroom_service;
const Semester = __importStar(require("./class_service/semester"));
exports.Semester = Semester;
const Report_layout_service = __importStar(require("./class_service/report_layout_service"));
exports.Report_layout_service = Report_layout_service;
const Course_service = __importStar(require("./class_service/course_service"));
exports.Course_service = Course_service;
const Gclass = __importStar(require("./class_service/gclass"));
exports.Gclass = Gclass;
const Homeroom = __importStar(require("./class_service/homeroom"));
exports.Homeroom = Homeroom;
const Report_layout = __importStar(require("./class_service/report_layout"));
exports.Report_layout = Report_layout;
const Semester_service = __importStar(require("./class_service/semester_service"));
exports.Semester_service = Semester_service;
const User_type = __importStar(require("./utils/user_type"));
exports.User_type = User_type;
const Aws_file = __importStar(require("./utils/aws_file"));
exports.Aws_file = Aws_file;
const Request_context = __importStar(require("./utils/request_context"));
exports.Request_context = Request_context;
const Object_id = __importStar(require("./utils/object_id"));
exports.Object_id = Object_id;
const Organization_owner_service = __importStar(require("./organization_service/organization_owner_service"));
exports.Organization_owner_service = Organization_owner_service;
const Organization_profile_settings_service = __importStar(require("./organization_service/organization_profile_settings_service"));
exports.Organization_profile_settings_service = Organization_profile_settings_service;
const Organization = __importStar(require("./organization_service/organization"));
exports.Organization = Organization;
const Bassem_labs_staff = __importStar(require("./organization_service/bassem_labs_staff"));
exports.Bassem_labs_staff = Bassem_labs_staff;
const Bassem_labs_staff_service = __importStar(require("./organization_service/bassem_labs_staff_service"));
exports.Bassem_labs_staff_service = Bassem_labs_staff_service;
const Campus_service = __importStar(require("./organization_service/campus_service"));
exports.Campus_service = Campus_service;
const Campus = __importStar(require("./organization_service/campus"));
exports.Campus = Campus;
const Onboarding_settings_service = __importStar(require("./organization_service/onboarding_settings_service"));
exports.Onboarding_settings_service = Onboarding_settings_service;
const Onboarding_settings = __importStar(require("./organization_service/onboarding_settings"));
exports.Onboarding_settings = Onboarding_settings;
const Kms_key = __importStar(require("./organization_service/kms_key"));
exports.Kms_key = Kms_key;
const Organization_profile_settings = __importStar(require("./organization_service/organization_profile_settings"));
exports.Organization_profile_settings = Organization_profile_settings;
const Organization_owner = __importStar(require("./organization_service/organization_owner"));
exports.Organization_owner = Organization_owner;
const Announcement = __importStar(require("./organization_service/announcement"));
exports.Announcement = Announcement;
const Announcement_service = __importStar(require("./organization_service/announcement_service"));
exports.Announcement_service = Announcement_service;
const Kms_service = __importStar(require("./organization_service/kms_service"));
exports.Kms_service = Kms_service;
const Organization_service = __importStar(require("./organization_service/organization_service"));
exports.Organization_service = Organization_service;
const Custom_field_entry = __importStar(require("./user_service/custom_field_entry"));
exports.Custom_field_entry = Custom_field_entry;
const Family = __importStar(require("./user_service/family"));
exports.Family = Family;
const Custom_fields_template = __importStar(require("./user_service/custom_fields_template"));
exports.Custom_fields_template = Custom_fields_template;
const Email_template = __importStar(require("./user_service/email_template"));
exports.Email_template = Email_template;
const Action_required_by_parents = __importStar(require("./user_service/action_required_by_parents"));
exports.Action_required_by_parents = Action_required_by_parents;
