import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import AddressForm from './AddressForm';

const ShiftForm = ({shiftState, setShiftState, positionList, formState, setFormState, handleCreate}) => {


    function handleSubmit(event){
        event.preventDefault();
        console.log(formState)
        setShiftState(formState)
    }

    function handleChange(event){
        setFormState({...formState, [event.target.id]: event.target.value})
        console.log(formState)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="position">Select the position: </label>
                <select name="position" id="position" onChange={handleChange}>
                    {positionList.map(item => {
                        return (
                            <option value={item.name} id='position'>{item.name}</option>
                        )
                    })}
                </select>
                <br/>
                <label htmlFor="title">Shift Title: </label>
                <input type="text" id = 'title' onChange={handleChange} />
                <br/>
                <label htmlFor="start_time">Start Time: </label>
                <input type='datetime-local' id='start_time' onChange={handleChange}/>
                <label htmlFor="end_time">End Time: </label>
                <input type='datetime-local' id='end_time' onChange={handleChange}/>
                <br/>
                <label htmlFor="name">Description: </label>
                <textarea type="text" id = 'description' onChange={handleChange} rows='4' cols='50' placeholder='Detail the requirements of the shift' />
                <br/>
                <label htmlFor="name">Uniform: </label>
                <textarea type="text" id = 'uniform' onChange={handleChange} rows='4' cols='50' placeholder='What should they wear.' />
                <br/>
                <label htmlFor="name">Onsite Contact: </label>
                <input type="text" id = 'on_site_contact' onChange={handleChange} />
                <label htmlFor="name">Meeting Location: </label>
                <input type="text" id = 'meeting_location' onChange={handleChange} />
                <label htmlFor="payrate">Payrate per hour: </label>
                <input type="number" min='1' step='any' id = 'payrate' onChange={handleChange} />
                <label htmlFor="billrate">Billrate per hour: </label>
                <input type="number" min='1' step='any' id = 'billrate' onChange={handleChange} />
                {shiftState.billrate ? null : <button type='submit' class='button'>Next</button>}
            </form>
            {shiftState.billrate ? <AddressForm shiftState={shiftState} setShiftState={setShiftState} formState={formState} setFormState={setFormState} handleCreate={handleCreate}/> : null}
        </div>
    )
}

export default ShiftForm
