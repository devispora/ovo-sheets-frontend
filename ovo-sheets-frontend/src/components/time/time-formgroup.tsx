import { Form, InputGroup } from "react-bootstrap";
import { DropHourOption, DropMinuteOption } from "./time-dropdowns";

export function TimeFormGroup() {
    return (
        <Form.Group className="input-group mb-3" controlId="formHour">
            <InputGroup.Text>Hour</InputGroup.Text>
            {DropHourOption()}
            <InputGroup.Text>Minutes</InputGroup.Text>
            {DropMinuteOption()}
        </Form.Group>
    )
}