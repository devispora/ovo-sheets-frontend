import { MouseEventHandler, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export function EmailFormEntries(groupNumber: number) {
    let groupName = `thatName${groupNumber}`;
    let emailName = `Enter Email #${groupNumber + 1}`
    return (
        <Form.Group className="input-group mb-3" controlId={groupName} key={groupName}>
            <InputGroup.Text>Email</InputGroup.Text>
            <Form.Control type="email" placeholder={emailName} />
        </Form.Group>
    )
}

function onEmailAddClick(
    desiredEmails: number,
    disableRemove: Function,
    disableAdd: Function,
    setAmountOfEmails: Function) {
    return () => {
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
}

function onEmailRemoveClick(
    desiredEmails: number,
    disableRemove: Function,
    disableAdd: Function,
    setAmountOfEmails: Function) {
    return () => {
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
}


function EmailAlterOptions(
    desiredEmails: number,
    setAmountOfEmails: Function
) {
    const [disableRemoveButton, disableRemove] = useState(true);
    const [disableAddButton, disableAdd] = useState(false);
    return (
        <Form.Group className="mb-3">
            <Button variant="success" value="addButton" onClick={onEmailAddClick(desiredEmails, disableRemove, disableAdd, setAmountOfEmails)} disabled={disableAddButton}>+ Email</Button>
            <Button variant="danger" value="removeButton" onClick={onEmailRemoveClick(desiredEmails, disableRemove, disableAdd, setAmountOfEmails)} disabled={disableRemoveButton}>- Email</Button>
        </Form.Group>
    )
}


export function EmailFormGroup(
    desiredEmails: number,
    setAmountOfEmails: Function) {

    const emailFormEntries = [];
    for (let i = 0; i < desiredEmails; i++) {
        emailFormEntries.push(EmailFormEntries(i))
    }
    emailFormEntries.push(EmailAlterOptions(desiredEmails, setAmountOfEmails))

    return emailFormEntries;
}