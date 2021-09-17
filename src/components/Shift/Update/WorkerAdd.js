import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const WorkerAdd = ({match}) => {

    const [workerList, setWorkerList]  = useState([])

    const [formState, setFormState] = useState({
        shift_id: match.params.id
    })

    useEffect(() => {
        axios.get('http://localhost:8000/workforce')
            .then(res => setWorkerList(res.data))
    }, [])

    function handleSubmit(event){
        event.preventDefault();
        axios.put(`http://localhost:8000/shifts/assign`, formState)
            .then(res => console.log(res))
    }

    function handleChange(event){
        setFormState({...formState, [event.target.id]: event.target.value})
        console.log(formState)
    }

    return (
        <div>
            <h1>Assign Worker</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="company">Select the worker: </label>
                <select name="user" id="user" onChange={handleChange}>
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
