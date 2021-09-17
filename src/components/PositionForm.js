import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const PositionForm = ({handleCreate}) => {

    const [formState, setFormState] = useState({})

    function handleSubmit(event){
        event.preventDefault();
        console.log(formState)
        handleCreate(formState, 'positions')
    }

    function handleChange(event){
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    return (
        <div class='form padding'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Position Name: </label>
                <input type="text" id = 'name' onChange={handleChange} />
                <br/>
                <label htmlFor="name">Give the position a detailed description: </label>
                <br/>
                <textarea type="text" id = 'description' onChange={handleChange} rows='4' cols='50' placeholder='Detail the experience and skills required to be qualified for the position' />
                <br/>
                <button type='submit' class='button' >Create Position</button>
            </form>
        </div>
    )
}

export default PositionForm
