import { Form, InputGroup } from "react-bootstrap";
import { DropHourOption, DropMinuteOption } from "./time-dropdowns";


export function TimeFormGroup(submitHour: Function, submitMinutes: Function) {
    return (
        <Form.Group className="input-group mb-3" controlId="formHour">
            <InputGroup.Text>Hour</InputGroup.Text>
            {DropHourOption(submitHour)}
            <InputGroup.Text>Minutes</InputGroup.Text>
            {DropMinuteOption(submitMinutes)}
        </Form.Group>
    )
}
