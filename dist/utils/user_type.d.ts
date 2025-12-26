export declare const protobufPackage = "utils";
export declare enum UserType {
    NONE = "NONE",
    STUDENT = "STUDENT",
    TEACHER = "TEACHER",
    PARENT = "PARENT",
    BASSEM_LABS_STAFF = "BASSEM_LABS_STAFF",
    ORGANIZATION_OWNER = "ORGANIZATION_OWNER",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function userTypeFromJSON(object: any): UserType;
export declare function userTypeToJSON(object: UserType): string;
export declare function userTypeToNumber(object: UserType): number;
