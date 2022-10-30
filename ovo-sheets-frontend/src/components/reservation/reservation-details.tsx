import { Form } from "react-bootstrap"


export function DropReservationType() {
    return (
        <Form.Select aria-label='Default select example'>
            <option key='type_jaeger_accounts' value='type_jaeger_accounts'>Basic Jaeger Accounts</option>
            <option key='type_observer_accounts' value='type_observer_accounts'>Observer Accounts</option>
        </Form.Select>
    )
}

export function DropAccountStatus() {
    return (
        <Form.Select aria-label='Default select example'>
            <option key='status_not_ready' value='not_ready'>Let Edward inspect the sheet for sharing</option>
            <option key='status_manually_shared' value='manually_shared'>I am manually sharing sheet</option>
        </Form.Select>
    )
}
