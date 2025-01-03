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
exports.Gclass = exports.Semester = exports.Report_layout = exports.Semester_service = exports.Report_layout_service = exports.Course = exports.Homeroom = exports.Homeroom_service = exports.Course_service = exports.Request_context = exports.Object_id = exports.Timestamp = exports.Test = exports.Test_service = void 0;
// Auto-generated index.ts
const Test_service = __importStar(require("./template_service/test_service"));
exports.Test_service = Test_service;
const Test = __importStar(require("./template_service/test"));
exports.Test = Test;
const Timestamp = __importStar(require("./google/protobuf/timestamp"));
exports.Timestamp = Timestamp;
const Object_id = __importStar(require("./utils/object_id"));
exports.Object_id = Object_id;
const Request_context = __importStar(require("./utils/request_context"));
exports.Request_context = Request_context;
const Course_service = __importStar(require("./class_service/course_service"));
exports.Course_service = Course_service;
const Homeroom_service = __importStar(require("./class_service/homeroom_service"));
exports.Homeroom_service = Homeroom_service;
const Homeroom = __importStar(require("./class_service/homeroom"));
exports.Homeroom = Homeroom;
const Course = __importStar(require("./class_service/course"));
exports.Course = Course;
const Report_layout_service = __importStar(require("./class_service/report_layout_service"));
exports.Report_layout_service = Report_layout_service;
const Semester_service = __importStar(require("./class_service/semester_service"));
exports.Semester_service = Semester_service;
const Report_layout = __importStar(require("./class_service/report_layout"));
exports.Report_layout = Report_layout;
const Semester = __importStar(require("./class_service/semester"));
exports.Semester = Semester;
const Gclass = __importStar(require("./class_service/gclass"));
exports.Gclass = Gclass;
