import { Button, Form, InputGroup } from "react-bootstrap";
import { DateFormGroup } from "./date/date-formgroup";
import { EmailFormGroup } from "./email/email-formgroup";
import { GroupName } from "./group/groupname";
import { DropAccountStatus, DropReservationType } from "./reservation/reservation-details";
import { TimeFormGroup } from "./time/time-formgroup";
import { useState } from 'react';
import { AccountStatus, ReservationType } from "../models/staff-form-submission";


export function OvOStaffForm() {

    const [submittedGroupNames, submitGroupNames] = useState('');
    const [submittedEmails, submitEmails] = useState(new Set<string>());
    const [submittedReservationType, submitReservationType] = useState(ReservationType.BASIC_JAEGER_ACCOUNTS);
    const [submittedAccountStatus, submitAccountStatus] = useState(AccountStatus.NOT_READY);
    const [submittedYear, submitYear] = useState(0);
    const [submittedMonth, submitMonth] = useState(0);
    const [submittedDay, submitDay] = useState(0);
    const [submittedHour, submitHour] = useState(0);
    const [submittedMinutes, submitMinutes] = useState(0);

    //process:
    // hand out the submitted function to each FormGroup
    // let each of them fill it on change
    // on submit we'll be able to use the handleSubmit stuff

    async function handleSubmit(e: any) {
        e.preventDefault();
        console.log(submittedGroupNames);
        console.log(submittedReservationType);
        console.log(submittedAccountStatus);
        console.log(submittedHour);
        console.log(submittedMinutes);
        console.log(submittedDay);
        console.log(submittedMonth);
        console.log(submittedYear);
        console.log(submittedEmails);
    }

    return (
        <Form onSubmit={handleSubmit}>
            {GroupName(submitGroupNames)}
            {EmailFormGroup(submittedEmails, submitEmails)}
            {DateFormGroup(submitYear, submitMonth, submitDay)}
            {TimeFormGroup(submitHour, submitMinutes)}
            <Form.Group className="input-group mb-3">
                <InputGroup.Text>Account Type</InputGroup.Text>
                {DropReservationType(submitReservationType)}
            </Form.Group>
            <Form.Group className="input-group mb-3">
                <InputGroup.Text>Share Type</InputGroup.Text>
                {DropAccountStatus(submitAccountStatus)}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}
