export declare const protobufPackage = "utils";
/** Notification channel types */
export declare enum NotificationType {
    EMAIL = "EMAIL",
    SMS = "SMS",
    PHONE_CALL = "PHONE_CALL",
    PUSH = "PUSH",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function notificationTypeFromJSON(object: any): NotificationType;
export declare function notificationTypeToJSON(object: NotificationType): string;
export declare function notificationTypeToNumber(object: NotificationType): number;
