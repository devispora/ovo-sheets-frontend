import { Form } from "react-bootstrap";


export function DropDayOption(currentDate: Date, currentDay: number, refMonth: number) {
    let referenceMonth: Number;
    if (currentDate.getMonth() !== refMonth) {
        referenceMonth = refMonth;
    } else {
        referenceMonth = currentDate.getMonth();
    }
    let nextMonth = Number(referenceMonth) + 1; // casts to number
    let lastDayOfMonth = new Date(currentDate.getFullYear(), nextMonth, 0);
    const days = [];
    for (let day: number = currentDay; day <= lastDayOfMonth.getDate(); day++) {
        days.push(<option key={'day_' + day} value={day}>{day}</option>)
    }
    return (
        <Form.Select defaultValue={currentDay} aria-label='Default select example'>
            {days}
        </Form.Select>
    )
}
