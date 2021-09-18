import React from 'react'
import { useState } from 'react'

const EditPosition = ({handleUpdate, positionState, history}) => {

    const [formState, setFormState] = useState(positionState)

    function handleSubmit(event){
        event.preventDefault();
        handleUpdate(formState, 'positions', positionState.id)
        history.push(`/position/${positionState.id}`)
    }

    function handleChange(event){
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    return (
        <div class ='form'>
            <h1>Edit Position</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Position Name: </label>
                <br/>
                <input type="text" id = 'name' onChange={handleChange} value={formState.name}/>
                <br/>
                <label htmlFor="name">Position Description: </label>
                <br/>
                <textarea type="text" id = 'description' onChange={handleChange} rows='4' cols='50' value={formState.description} />
                <br/>
                <button type='submit' class='button update'>Update Position</button>
            </form>
        </div>
    )
}

export default EditPosition
