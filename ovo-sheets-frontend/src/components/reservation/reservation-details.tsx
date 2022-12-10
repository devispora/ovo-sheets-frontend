import { ChangeEventHandler } from "react"
import { Form } from "react-bootstrap"
import { AccountStatus, ReservationType } from "../../models/staff-form-submission";
import { applyFormInputToState } from "../submissions/submit-processor"



// Note: defaults are set in the upper OvOStaffForm function so onChange is enough.


export function DropReservationType(submitReservationType: Function) {

    const handleSelectChange: ChangeEventHandler = applyFormInputToState(submitReservationType);
    return (
        <Form.Select aria-label='Default select example' onChange={handleSelectChange}>
            <option key='type_jaeger_accounts' value={ReservationType.BASIC_JAEGER_ACCOUNTS}>Basic Jaeger Accounts</option>
            <option key='type_observer_accounts' value={ReservationType.OBSERVER_ACCOUNTS}>Observer Accounts</option>
        </Form.Select>
    )
}

export function DropAccountStatus(submitAccountStatus: Function) {
    
    const handleSelectChange: ChangeEventHandler = applyFormInputToState(submitAccountStatus);
    return (
        <Form.Select aria-label='Default select example' onChange={handleSelectChange}>
            <option key='status_not_ready' value={AccountStatus.NOT_READY}>Let Edward inspect the sheet for sharing</option>
            <option key='status_manually_shared' value={AccountStatus.MANUALLY_SHARED}>I am manually sharing sheet</option>
        </Form.Select>
    )
}
