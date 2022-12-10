import { ChangeEvent, ChangeEventHandler, useEffect } from "react";
import { Form } from "react-bootstrap";
import { applyFormInputToState } from "../submissions/submit-processor";


function MonthOptions() {
    // using JS date non human month numbers
    const months = new Map<number, string>();
    months.set(0, "January")
    months.set(1, "February")
    months.set(2, "March")
    months.set(3, "April")
    months.set(4, "May")
    months.set(5, "June")
    months.set(6, "July")
    months.set(7, "August")
    months.set(8, "September")
    months.set(9, "October")
    months.set(10, "November")
    months.set(11, "December")
    return months;
}

function determineMonths(startingMonth: number) {
    const maxMonth = 11;
    const months: Map<number, string> = MonthOptions();
    let options = [];
    for (let month = startingMonth; month <= maxMonth; month++) {
        let monthValue = months.get(month);
        options.push(<option key={'month_' + month} value={month}>{monthValue}</option>)
    }
    return options;
}

export function DropMonthOption(
    currentDate: Date,
    startingMonth: number,
    adjustStartingDay: Function,
    adjustRefMonth: Function,    
    submitMonth: Function,
    submitDay: Function
    ) {
    const monthFunctionTrigger: ChangeEventHandler = useMonthChange(currentDate, adjustStartingDay, adjustRefMonth, submitMonth, submitDay);
    useEffect(() => submitMonth(startingMonth), []);
    return (
        <Form.Select onChange={monthFunctionTrigger} aria-label='Default select example'>
            {determineMonths(startingMonth)}
        </Form.Select>
    )
}

export function useMonthChange(
    currentDate: Date,
    adjustStartingDay: Function,
    adjustRefMonth: Function,
    submitMonth: Function,
    submitDay: Function): ChangeEventHandler{
    return (event: ChangeEvent<HTMLInputElement>) => {
        if ('target' in event) {
            let target = event.target
            if ('value' in target) {
                if (Number(target.value) !== currentDate.getUTCMonth()) {
                    adjustStartingDay(1);
                    submitDay(1);
                } else {
                    adjustStartingDay(currentDate.getDate());
                }
                adjustRefMonth(target.value);
                submitMonth(target.value);
            }
        }
    }
}

