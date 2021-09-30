import React from 'react'
import { useState } from 'react'
import EditAddress from './Shift/Update/EditAddress'
import EditDetails from './Shift/Update/EditDetails'
import axios from 'axios'

const ShiftEdit = ({shiftState, setShiftState, history, URL}) => {

    const [formState, setFormState] = useState(shiftState)

    function tempAlert(msg,duration){
            var el = document.createElement("div");
            el.classList.add('alert');
            el.innerHTML = msg;
            setTimeout(function(){
            el.parentNode.removeChild(el);
            },duration);
            document.body.appendChild(el);
        }

    function handleSubmit(event){
        event.preventDefault();
        setShiftState(formState)
        axios.put(`${URL}/shifts/update`, shiftState)
            .then(res => tempAlert(res.data, 1000))
        history.push(`/shift/${shiftState.id}`)
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
            <button onClick={handleSubmit}class='button update padding'>Update Shift</button>
        </div>
    )
}

export default ShiftEdit
