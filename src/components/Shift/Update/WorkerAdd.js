import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const WorkerAdd = ({match, URL, history}) => {

    const [workerList, setWorkerList]  = useState([])

    const [formState, setFormState] = useState({
        shift_id: match.params.id
    })

    useEffect(() => {
        axios.get(`${URL}/workforce`)
            .then(res => {
                setWorkerList(res.data)
            })
    }, [])

    function handleSubmit(event){
        event.preventDefault();
        axios.put(`${URL}/shifts/assign`, formState)
            .then(res => {
                console.log(res)
                history.push(`/shift/${match.params.id}`)
            })
    }

    function handleChange(event){
        setFormState({...formState, [event.target.id]: event.target.value})
        console.log(formState)
    }

    return (
        <div>
            <h2>Assign Worker</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user">Select the staff member: </label>
                <select name="user" id="user" onChange={handleChange}>
                    <option value='starter'> - choose staff - </option>
                    {workerList.map(item => {
                        return (
                            <option value={item.id} id='user'>{item.first_name} {item.last_name}</option>
                        )
                    })}
                </select>
                <br/>
                <button type='submit' class='button'>Assign</button>
            </form>
        </div>
    )
}

export default WorkerAdd
