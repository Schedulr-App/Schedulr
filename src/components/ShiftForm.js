import React from 'react'
import { useState, useEffect } from 'react';

const ShiftForm = ({createShift}) => {

    const [formState, setFormState] = useState({})

    function handleSubmit(event){
        event.preventDefault();
        console.log(formState)
        createShift(formState)
    }

    function handleChange(event){
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Shift Title: </label>
                <input type="text" id = 'title' onChange={handleChange} />
                <label htmlFor="name">Company Contact: </label>
                <input type="text" id = 'contact_name' onChange={handleChange} />
                <label htmlFor="name">Contact Email: </label>
                <input type="text" id = 'contact_email' onChange={handleChange} />
                <label htmlFor="name">Contact Phone: </label>
                <input type="text" id = 'contact_phone' onChange={handleChange} />
                <label htmlFor="name">Contact Position: </label>
                <input type="text" id = 'contact_position' onChange={handleChange} />
                <button type='submit' >Create Company</button>
            </form>
        </div>
    )
}

export default ShiftForm
