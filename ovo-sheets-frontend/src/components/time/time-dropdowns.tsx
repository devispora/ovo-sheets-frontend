import { Form } from "react-bootstrap";

export function DropHourOption() {
    const hours = [];
    for (let hour: number = 0; hour < 24; hour++) {
        hours.push(<option key={'hour_' + hour} value={hour}>{hour}</option>)
    }
    return (
        <Form.Select defaultValue="0" aria-label='Default select example'>
            {hours}
        </Form.Select>
    )
}

export function DropMinuteOption() {
    const minutes = []
    for (let minute: number = 0; minute < 60; minute += 15) {
        minutes.push(<option key={'minutes_' + minute} value={minute}>{minute}</option>)
    }
    return (
        <Form.Select defaultValue="0" aria-label='Default select example'>
            {minutes}
        </Form.Select>
    )
}