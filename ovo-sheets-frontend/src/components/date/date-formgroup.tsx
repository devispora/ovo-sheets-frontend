import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { DropDayOption } from "./day-dropdown";
import { DropMonthOption } from "./month-dropdown";
import { DropYearOption } from "./year-dropdown";




export function DateFormGroup() {
    const currentDate = new Date();
    const [startingMonth, adjustStartingMonth] = useState(currentDate.getUTCMonth());
    const [refMonth, adjustRefMonth] = useState(currentDate.getUTCMonth());
    const [startingDay, adjustStartingDay] = useState(currentDate.getDate());
    return (
        <Form.Group className="input-group mb-3" controlId="formDateTime">
            <InputGroup.Text>Year</InputGroup.Text>
            {DropYearOption(currentDate, adjustStartingMonth, adjustRefMonth, adjustStartingDay)}
            <InputGroup.Text>Month</InputGroup.Text>
            {DropMonthOption(currentDate, startingMonth, adjustStartingDay, adjustRefMonth)}
            <InputGroup.Text>Day</InputGroup.Text>
            {DropDayOption(currentDate, startingDay, refMonth)}
        </Form.Group>
    )
}