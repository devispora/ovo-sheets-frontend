import { ChangeEventHandler, useState } from "react";
import { Button, Form } from "react-bootstrap";




function DropFormGroup(groupNumber: number) {
    let groupName = `thatName${groupNumber}`;
    let emailName = `Enter Email #${groupNumber + 1}`
    if (groupNumber > 0) {
        return (
            <Form.Group className="mb-3" controlId={groupName} key={groupName}>
                <Form.Control type="email" placeholder={emailName} />
            </Form.Group>
        )
    } else {
        return (
            <Form.Group className="mb-3" controlId={groupName} key={groupName}>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
        )
    }
}

function MonthOptions() {
    // using JS date non human month numbers
    const months = new Map<number, string>();
    months.set(0,   "January")
    months.set(1,   "February")
    months.set(2,   "March")
    months.set(3,   "April")
    months.set(4,   "May")
    months.set(5,   "June")
    months.set(6,   "July")
    months.set(7,   "August")
    months.set(8,   "September")
    months.set(9,   "October")
    months.set(10,  "November")
    months.set(11,  "December")
    return months;
}

function determineMonths(startingMonth: number){
    const maxMonth = 11;
    const months: Map<number, string> = MonthOptions();
    let options = [];
    for(let month = startingMonth; month <= maxMonth; month++){        
        let monthValue = months.get(month);
        options.push(<option key={'month_'+month} value={month}>{monthValue}</option>)
    }
    return options;
}    


function DropDayOption(currentDate: Date, currentDay: number, startingMonth: number){
    let referenceMonth: Number;
    if(currentDate.getMonth() !== startingMonth){
        referenceMonth = startingMonth;
    }else{
        referenceMonth = currentDate.getMonth();
    }
    let nextMonth = Number(referenceMonth) + 1; // casts to number
    let lastDayOfMonth = new Date(currentDate.getFullYear(), nextMonth, 0);
    const days = [];
    for(let day: number = currentDay; day <= lastDayOfMonth.getDate(); day++){
        days.push(<option key={'day_'+day} value={day}>{day}</option>)
    }
    return (
        <Form.Select defaultValue={currentDay} aria-label='Default select example'>
            {days}
        </Form.Select>
    )
}


function DropMonthOption(startingMonth: number, monthFunctionTrigger: ChangeEventHandler) {
    return (
        <Form.Select defaultValue={startingMonth} onChange={monthFunctionTrigger} aria-label='Default select example'>
            {determineMonths(startingMonth)}
        </Form.Select>
    )
}



function DropYearOption(currentDate: Date, yearFunctionTrigger: ChangeEventHandler){
    const currentYear = currentDate.getUTCFullYear();
    const nextYear = currentYear+1
    return (
        <Form.Select defaultValue={currentYear} onChange={yearFunctionTrigger} aria-label='Default select example'>
            <option key={'year_'+currentYear} value={currentYear}>{currentYear}</option>
            <option key={'year_'+nextYear} value={nextYear}>{nextYear}</option>
        </Form.Select>
    )
}




export function OvOStaffForm() {
    const currentDate = new Date();
    const currentMonth = currentDate.getUTCMonth();
    const currentDay = currentDate.getDate();

    const [desiredEmails, setAmountOfEmails] = useState(1);
    const [disableRemoveButton, disableRemove] = useState(true);
    const [disableAddButton, disableAdd] = useState(false);
    const [startingMonth, adjustStartingMonth] = useState(currentMonth);
    const [refMonth, adjustRefMonth] = useState(currentMonth);
    const [startingDay, adjustStartingDay] = useState(currentDay);

    const emailFormEntries = [];
    for (let i = 0; i < desiredEmails; i++) {
        emailFormEntries.push(DropFormGroup(i))
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

    const onYearChange = (event: any) => {
        if('target' in event){
            let target = event.target
            if('value' in target){
                if(Number(target.value) !== currentDate.getUTCFullYear()){
                    adjustStartingMonth(0)
                    adjustRefMonth(0);
                }else{
                    adjustStartingDay(currentDay);
                    adjustStartingMonth(currentMonth);
                    adjustRefMonth(currentMonth);
                }
            }            
        }
    }

    const onMonthChange = (event: any) => {
        if('target' in event){
            let target = event.target
            if('value' in target){
                if(Number(target.value) !== currentDate.getUTCMonth()){
                    adjustStartingDay(1);
                    adjustRefMonth(target.value);
                }else{
                    adjustStartingDay(currentDay);
                    adjustRefMonth(target.value);
                }
            }            
        }
    }

    return (
        <Form>
            {emailFormEntries}
            <Form.Group className="mb-3">
            <Button variant="info" value="addButton" onClick={onEmailAddClick} disabled={disableAddButton}>+ Email</Button>
            <Button variant="info" value="removeButton" onClick={onEmailRemoveClick} disabled={disableRemoveButton}>- Email</Button>
            </Form.Group>

            <Form.Group className="input-group mb-3" controlId="formMonth">
            {DropYearOption(currentDate, onYearChange)}
            {DropMonthOption(startingMonth, onMonthChange)}
            {DropDayOption(currentDate, startingDay, refMonth)}
            
            </Form.Group>
            
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