import { ChangeEvent, ChangeEventHandler } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { applyFormInputToState } from "../submissions/submit-processor";



export function GroupName(submitGroupNames: Function) {

    const handleGroupChanges: ChangeEventHandler = applyFormInputToState(submitGroupNames);
    return (
        <Form.Group className="input-group mb-3" controlId="formGroupNames" key="groupNamey" >
            <InputGroup.Text >Group(s)</InputGroup.Text>
            <Form.Control onChange={handleGroupChanges} type="text" placeholder="Group Name(s)"/>
        </Form.Group>
    )
}