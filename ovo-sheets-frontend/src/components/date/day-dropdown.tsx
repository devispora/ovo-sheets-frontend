import { ChangeEventHandler, useEffect } from "react";
import { Form } from "react-bootstrap";
import { applyFormInputToState } from "../submissions/submit-processor";


export function DropDayOption(currentDate: Date, currentDay: number, refMonth: number, submitDay: Function) {
    let referenceMonth: Number;
    const handleSelectChange: ChangeEventHandler = applyFormInputToState(submitDay);
    useEffect(() => submitDay(currentDay), []);
    if (currentDate.getMonth() !== refMonth) {
        referenceMonth = refMonth;
    } else {
        referenceMonth = currentDate.getMonth();
    }
    let nextMonth = Number(referenceMonth) + 1; // casts to number
    let lastDayOfMonth = new Date(currentDate.getFullYear(), nextMonth, 0);
    const days = [];
    for (let day: number = currentDay; day <= lastDayOfMonth.getDate(); day++) {
        days.push(<option key={'day_' + day} value={day}>{day}</option>)
    }
    return (
        <Form.Select defaultValue={currentDay} aria-label='Default select example' onChange={handleSelectChange}>
            {days}
        </Form.Select>
    )
}
