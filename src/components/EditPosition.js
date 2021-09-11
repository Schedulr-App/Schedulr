import React from 'react'
import { useState } from 'react'

const EditPosition = ({handleUpdate, positionState}) => {

    const [formState, setFormState] = useState(positionState)

    function handleSubmit(event){
        event.preventDefault();
        console.log(formState)
        handleUpdate(formState, 'positions', positionState.id)
    }

    function handleChange(event){
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Position Name: </label>
                <input type="text" id = 'name' onChange={handleChange} value={formState.name}/>
                <br/>
                <label htmlFor="name">Position Description: </label>
                <textarea type="text" id = 'description' onChange={handleChange} rows='4' cols='50' value={formState.description} />
                <br/>
                <button type='submit' >Update Position</button>
            </form>
        </div>
    )
}

export default EditPosition
