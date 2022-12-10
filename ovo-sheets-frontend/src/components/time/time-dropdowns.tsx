import { ChangeEventHandler } from "react";
import { Form } from "react-bootstrap";
import { applyFormInputToState } from "../submissions/submit-processor";


export function DropHourOption(submitHour: Function) {
    const hours = [];
    const handleSelectChange: ChangeEventHandler = applyFormInputToState(submitHour);
    for (let hour: number = 0; hour < 24; hour++) {
        hours.push(<option key={'hour_' + hour} value={hour}>{hour}</option>)
    }
    return (
        <Form.Select aria-label='Default select example' onChange={handleSelectChange}>
            {hours}
        </Form.Select>
    )
}

export function DropMinuteOption(submitMinutes: Function) {
    const minutes = []
    const handleSelectChange: ChangeEventHandler = applyFormInputToState(submitMinutes);
    for (let minute: number = 0; minute < 60; minute += 15) {
        minutes.push(<option key={'minutes_' + minute} value={minute}>{minute}</option>)
    }
    return (
        <Form.Select aria-label='Default select example' onChange={handleSelectChange}>
            {minutes}
        </Form.Select>
    )
}
