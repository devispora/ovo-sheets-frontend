import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { DropDayOption } from "./date/day-dropdown";
import { DropMonthOption } from "./date/month-dropdown";
import { DropYearOption } from "./date/year-dropdown";
import { EmailFormGroup } from "./email/email-formgroup";
import { DropAccountStatus, DropReservationType } from "./reservation/reservation-details";
import { DropHourOption, DropMinuteOption } from "./time/time-dropdowns";


export function OvOStaffForm() {
    const currentDate = new Date();
    const [startingMonth, adjustStartingMonth] = useState(currentDate.getUTCMonth());
    const [refMonth, adjustRefMonth] = useState(currentDate.getUTCMonth());
    const [startingDay, adjustStartingDay] = useState(currentDate.getDate());

    return (
        <Form>
            {EmailFormGroup()}
            <Form.Group className="input-group mb-3" controlId="formDateTime">
                <InputGroup.Text>Year</InputGroup.Text>
                {DropYearOption(currentDate, adjustStartingMonth, adjustRefMonth, adjustStartingDay)}
                <InputGroup.Text>Month</InputGroup.Text>
                {DropMonthOption(currentDate, startingMonth, adjustStartingDay, adjustRefMonth)}
                <InputGroup.Text>Day</InputGroup.Text>
                {DropDayOption(currentDate, startingDay, refMonth)}
            </Form.Group>

            <Form.Group className="input-group mb-3" controlId="formHour">
                <InputGroup.Text>Hour</InputGroup.Text>
                {DropHourOption()}
                <InputGroup.Text>Minutes</InputGroup.Text>
                {DropMinuteOption()}
            </Form.Group>
            <Form.Group className="input-group mb-3">
                <InputGroup.Text>Account Type</InputGroup.Text>
                {DropReservationType()}
            </Form.Group>
            <Form.Group className="input-group mb-3">
                <InputGroup.Text>Share Type</InputGroup.Text>
                {DropAccountStatus()}
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
