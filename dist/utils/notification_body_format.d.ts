export declare const protobufPackage = "utils";
export declare enum NotificationBodyFormat {
    PLAIN = "PLAIN",
    HTML = "HTML",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function notificationBodyFormatFromJSON(object: any): NotificationBodyFormat;
export declare function notificationBodyFormatToJSON(object: NotificationBodyFormat): string;
export declare function notificationBodyFormatToNumber(object: NotificationBodyFormat): number;
