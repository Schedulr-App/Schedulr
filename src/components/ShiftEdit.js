import React from 'react'
import { useState } from 'react'
import EditAddress from './Shift/Update/EditAddress'
import EditDetails from './Shift/Update/EditDetails'
import axios from 'axios'

const ShiftEdit = ({shiftState, setShiftState}) => {

    const [formState, setFormState] = useState(shiftState)

    function handleSubmit(event){
        event.preventDefault();
        console.log(formState)
        setShiftState(formState)
        axios.put(`http://localhost:8000/shifts/update`, shiftState)
            .then(res => console.log(res))
    }

    return (
        <div>
            <div class='updateContainer'>
                <div class='col form'>
                    <EditDetails shiftState={shiftState} setShiftState={setShiftState} formState={formState} setFormState={setFormState}/>
                </div>
                <div class='col form'>
                    <EditAddress shiftState={shiftState} setShiftState={setShiftState} formState={formState} setFormState={setFormState}/>
                </div>
            </div>
            <button onClick={handleSubmit}class='button update'>Update Shift</button>
        </div>
    )
}

export default ShiftEdit
