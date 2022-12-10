import { ChangeEvent, ChangeEventHandler } from "react"



// Note: defaults are set in the upper OvOStaffForm function so onChange is enough.


export function applyFormInputToState(submitFunction: Function): ChangeEventHandler{
    return (event: ChangeEvent<HTMLInputElement>) => {
        if ('target' in event) {
            let target = event.target
            if ('value' in target) {
                submitFunction(target.value)
            }
        }
    }
}
