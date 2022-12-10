import { ChangeEvent, ChangeEventHandler, useEffect } from "react";
import { Form } from "react-bootstrap";


export function DropYearOption(
    currentDate: Date,
    adjustStartingMonth: Function,
    adjustRefMonth: Function,
    adjustStartingDay: Function,
    submitYear: Function,
    submitMonth: Function,
    submitDay: Function
    ) {
    const yearFunctionTrigger: ChangeEventHandler = useYearChange(currentDate, adjustStartingMonth, adjustRefMonth, adjustStartingDay, submitYear, submitMonth, submitDay);
    const currentYear = currentDate.getUTCFullYear();
    useEffect(() => submitYear(currentYear), []);
    const nextYear = currentYear + 1
    return (
        <Form.Select defaultValue={currentYear} onChange={yearFunctionTrigger} aria-label='Default select example'>
            <option key={'year_' + currentYear} value={currentYear}>{currentYear}</option>
            <option key={'year_' + nextYear} value={nextYear}>{nextYear}</option>
        </Form.Select>
    )
}

export function useYearChange(
    currentDate: Date,
    adjustStartingMonth: Function,
    adjustRefMonth: Function,
    adjustStartingDay: Function,
    submitYear: Function,
    submitMonth: Function,
    submitDay: Function
    ): ChangeEventHandler {
    return (event: ChangeEvent<HTMLInputElement>) => {
        if ('target' in event) {
            let target = event.target
            if ('value' in target) {
                submitYear(target.value);
                if (Number(target.value) !== currentDate.getUTCFullYear()) {
                    adjustStartingMonth(0);                    
                    adjustRefMonth(0);
                } else {                    
                    adjustStartingDay(currentDate.getDate());
                    adjustStartingMonth(currentDate.getUTCMonth());
                    adjustRefMonth(currentDate.getUTCMonth());
                    submitMonth(currentDate.getUTCMonth());
                    submitDay(currentDate.getDate());
                }
            }
        }
    }
}

