import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export function DropEmailOptions(groupNumber: number) {
    let groupName = `thatName${groupNumber}`;
    let emailName = `Enter Email #${groupNumber + 1}`
    return (
        <Form.Group className="input-group mb-3" controlId={groupName} key={groupName}>
            <InputGroup.Text>Email</InputGroup.Text>
            <Form.Control type="email" placeholder={emailName} />
        </Form.Group>
    )
}


export function EmailFormGroup( 
    desiredEmails: number,
    setAmountOfEmails: Function){
    const [disableRemoveButton, disableRemove] = useState(true);
    const [disableAddButton, disableAdd] = useState(false);
    const emailFormEntries = [];
    for (let i = 0; i < desiredEmails; i++) {
        emailFormEntries.push(DropEmailOptions(i))
    }

    const onEmailAddClick = () => {
        if (desiredEmails < 8) {
            let amount = desiredEmails + 1;
            if (amount === 8) {
                disableAdd(true);
            }
            setAmountOfEmails(amount);
            if (desiredEmails === 1) {
                disableRemove(false);
            }
        }
    }
    const onEmailRemoveClick = () => {
        if (desiredEmails > 1) {
            let amount = desiredEmails - 1;
            setAmountOfEmails(amount);
            if (amount < 8) {
                disableAdd(false);
            }
            if (amount < 2) {
                disableRemove(true);
            }
        }
    }
    return (
    
    (<Form.Group className="mb-3">
        <Button variant="success" value="addButton" onClick={onEmailAddClick} disabled={disableAddButton}>+ Email</Button>
        <Button variant="danger" value="removeButton" onClick={onEmailRemoveClick} disabled={disableRemoveButton}>- Email</Button>
    </Form.Group>)
    )
}