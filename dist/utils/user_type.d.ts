export declare const protobufPackage = "utils";
export declare enum UserType {
    None = "None",
    Student = "Student",
    Teacher = "Teacher",
    Parent = "Parent",
    BassemLabsStaff = "BassemLabsStaff",
    OrganizationOwner = "OrganizationOwner",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function userTypeFromJSON(object: any): UserType;
export declare function userTypeToJSON(object: UserType): string;
export declare function userTypeToNumber(object: UserType): number;
