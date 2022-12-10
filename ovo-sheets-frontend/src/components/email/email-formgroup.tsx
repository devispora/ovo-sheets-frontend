import { FocusEventHandler, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export function EmailFormGroup(submittedEmails: Set<String>, submitEmails:Function) {
    const [desiredEmails, setAmountOfEmails] = useState(1);
    const emailFormEntries = [];
    for (let i = 0; i < desiredEmails; i++) {
        emailFormEntries.push(EmailFormEntries(i, submittedEmails, submitEmails))
    }
    emailFormEntries.push(EmailAlterOptions(desiredEmails, setAmountOfEmails, submittedEmails, submitEmails))

    return emailFormEntries;
}

function onEmailChange(currentEmails: Set<String>, changeCurrentEmailSet: Function): FocusEventHandler{
    return (event) => {
        if ('target' in event) {
            let target = event.target
            if ('value' in target) {
                console.log(target)
                let email = target['value'];  
                if(typeof email === 'string'){
                    if(email !== ''){
                        let result = new Set(currentEmails).add(email);
                        changeCurrentEmailSet(result);
                    }                    
                }
            }
        }
    }   
}

export function EmailFormEntries(groupNumber: number, currentEmails: Set<String>, changeCurrentEmailSet: Function) {
    let groupName = `thatName${groupNumber}`;
    let emailName = `Enter Email #${groupNumber + 1}`
    const handleSelectChange: FocusEventHandler = onEmailChange(currentEmails, changeCurrentEmailSet);
    return (
        <Form.Group className="input-group mb-3" controlId={groupName} key={groupName}>
            <InputGroup.Text>Email</InputGroup.Text>
            <Form.Control type="email" placeholder={emailName} onBlur={handleSelectChange}  />
        </Form.Group>
    )
}

function EmailAlterOptions(
    desiredEmails: number,
    setAmountOfEmails: Function,
    currentEmails: Set<String>, 
    changeCurrentEmailSet: Function
) {
    const [disableRemoveButton, disableRemove] = useState(true);
    const [disableAddButton, disableAdd] = useState(false);
    return (
        <Form.Group className="mb-3" key="keyForExtraEmails">
            <Button variant="success" value="addButton" onClick={onEmailAddClick(desiredEmails, disableRemove, disableAdd, setAmountOfEmails)} disabled={disableAddButton}>+ Email</Button>
            <Button variant="danger" value="removeButton" onClick={onEmailRemoveClick(desiredEmails, disableRemove, disableAdd, setAmountOfEmails, currentEmails, changeCurrentEmailSet)} disabled={disableRemoveButton}>- Email</Button>
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
    setAmountOfEmails: Function,
    currentEmails: Set<String>, 
    changeCurrentEmailSet: Function) {
    return () => {        
        if (desiredEmails > 1) {
            let amount = desiredEmails - 1;
            removeLastFromSet(amount, currentEmails, changeCurrentEmailSet)
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

function removeLastFromSet(desiredEmails: number, currentEmails: Set<String>, changeCurrentEmailSet : Function){
    let newthing = Array.from(currentEmails.values());
    newthing.splice(desiredEmails, 1);
    changeCurrentEmailSet(new Set(newthing));    
}