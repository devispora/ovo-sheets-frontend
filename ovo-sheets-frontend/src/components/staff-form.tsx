import { Button, Form, InputGroup } from "react-bootstrap";
import { DateFormGroup } from "./date/date-formgroup";
import { EmailFormGroup } from "./email/email-formgroup";
import { DropAccountStatus, DropReservationType } from "./reservation/reservation-details";
import { TimeFormGroup } from "./time/time-formgroup";


export function OvOStaffForm() {
    return (
        <Form>
            {EmailFormGroup()}
            {DateFormGroup()}
            {TimeFormGroup()}
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
