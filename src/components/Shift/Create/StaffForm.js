import React from 'react'
import axios from 'axios';

const StaffForm = ({handleRequest, formState, setFormState, shiftState, setShiftState, handleCreate, URL, history}) => {

    function handleSubmit(event){
        event.preventDefault();
        setShiftState(formState)
        axios.post(`${URL}/shifts/new`, shiftState)
            .then(res => {
                console.log(res)
                history.push('/shifts')
            })
    }

    function handleChange(event){
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    return (
        <div>
            <hr/>
            <h1>Staff Needed</h1>
            <form onSubmit={handleSubmit}>
                
            <input
                id="staff_needed"
                type="number"
                min='1'
                onChange={handleChange}
            />
            <br/>
           <button type='submit' class='button update'>Create Shift</button>
            </form>
        </div>
    )
}
export default StaffForm
