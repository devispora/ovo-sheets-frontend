
// gotta think if I want to use the class or interface, so leaving both for now;

export class DesiredFormResult {
    groups: string;
    emails: string;
    reservationType: string;
    accountStatus: string;
    year: number;
    month: number;
    day: number;
    hour: number;
    minutes: number;

    constructor(
        submitGroupNames: string,
        submittedEmails: string,
        submittedReservationType: string,
        submittedAccountStatus: string,
        submittedYear: number,
        submittedMonth: number,
        submittedDay: number,
        submittedHour: number,
        submittedMinutes: number
    ) {
        this.groups = submitGroupNames;
        this.emails = submittedEmails;
        this.reservationType = submittedReservationType;
        this.accountStatus = submittedAccountStatus;
        this.month = submittedMonth;
        this.day = submittedDay;
        this.year = submittedYear;
        this.hour = submittedHour;
        this.minutes = submittedMinutes;
    }
}

export interface StaffFormSubmission {
    groups: string;
    emails: string;
    reservationType: string;
    accountStatus: string;
    year: number;
    month: number;
    day: number;
    hour: number;
    minutes: number;
}


export interface OvORequest {
    requestDatetime: Date,
    repEmails: [string],
    sharedStatus: string,
    reservationType: string
    groupName: string
}



export enum AccountStatus {
    NOT_READY = "Not Ready",
    MANUALLY_SHARED = "Manually Shared"
}

export enum ReservationType {
    BASIC_JAEGER_ACCOUNTS = "Basic Jaeger Accounts", 
    OBSERVER_ACCOUNTS = "Observer Accounts"
}