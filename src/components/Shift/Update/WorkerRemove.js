import React from 'react'
import axios from 'axios'
import { useState} from 'react'

const WorkerRemove = ({match, URL, history, shiftState}) => {
    
    const assignedList = shiftState.staff_info

    const [formState, setFormState] = useState({
        shift_id: match.params.id
    })

    // console.log(assignedList)

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.put(`${URL}/shifts/remove`, formState)
            .then(res => {
                console.log(res)
                history.push(`/shift/${match.params.id}`)
            })
    }

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    return (
        <div>
            <h1>Remove Worker</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user">Select the assigned staff: </label>
                <select name="user" id="user" onChange={handleChange}>
                    <option value='starter'> - choose staff - </option>
                    {assignedList.map(item => {
                        return(
                        <option value={item.id}>{item.firstname} {item.lastname}</option>
                        )
                    })}
                </select>
                <br/>
                <button type='submit' class='button'> Remove Staff </button>
            </form>
        </div>
    )
}

export default WorkerRemove
