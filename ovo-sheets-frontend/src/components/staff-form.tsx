import { useState } from "react";
import { Button, Form } from "react-bootstrap";




function DropFormGroup(groupNumber: number) {
    console.log(groupNumber);
    let groupName = `thatName${groupNumber}` ;
    let emailName = `Enter Email #${groupNumber +1}`
    if(groupNumber > 0){
        return (
            <Form.Group className="mb-3" controlId={groupName} key={groupName}>
                <Form.Control type="email" placeholder={emailName} />
            </Form.Group>
        )
    }else{
        return (
            <Form.Group className="mb-3" controlId={groupName} key={groupName}>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
        )
    }
}


export function OvOStaffForm() {
    const [desiredEmails, setAmountOfEmails] = useState(1);
    const [disableRemoveButton, disableRemove] = useState(true);
    const [disableAddButton, disableAdd] = useState(false);
    const emailFormEntries = [];
    for (let i = 0; i < desiredEmails; i++) {
        emailFormEntries.push(DropFormGroup(i))
    }
    const onEmailAddClick = () => {
        console.log(desiredEmails);
        if (desiredEmails < 8) {
            let amount = desiredEmails + 1;
            if( amount == 8){
                disableAdd(true);
            }
            setAmountOfEmails(amount);
            if(desiredEmails == 1){
                disableRemove(false);
            }            

        }
    }
    const onEmailRemoveClick = () => {
        console.log(desiredEmails);
        if (desiredEmails > 1) {
            let amount = desiredEmails - 1;
            setAmountOfEmails(amount);
            console.log(amount);
            if(amount < 2){
                disableRemove(true);
            }
        }
    }

    return (
        <Form>
            {emailFormEntries}
            <Button variant="info" value="addButton" onClick={onEmailAddClick} disabled={disableAddButton}>+ Email</Button>
            <Button variant="info" value="removeButton" onClick={onEmailRemoveClick} disabled={disableRemoveButton}>- Email</Button>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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