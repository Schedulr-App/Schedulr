import React from 'react'
import axios from 'axios';

const StaffForm = ({handleRequest, formState, setFormState, shiftState, setShiftState, handleCreate}) => {

    function handleSubmit(event){
        event.preventDefault();
        console.log(formState)
        setShiftState(formState)
        axios.post(`http://localhost:8000/shifts/`, shiftState)
            .then(res => console.log(res))
    }

    function handleChange(event){
        setFormState({...formState, [event.target.id]: event.target.value})
        console.log(formState)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                
            <label htmlFor="street">Staff needed: </label>
            <input
                id="staff_needed"
                type="number"
                min='1'
                onChange={handleChange}
            />
            <br/>
           <button type='submit' class='button'>Create Shift</button>
            </form>
        </div>
    )
}
export default StaffForm
