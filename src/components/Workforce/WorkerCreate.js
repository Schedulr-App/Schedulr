import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const WorkerCreate = () => {

    const [formState, setFormState] = useState({})

    function handleSubmit(event){
        event.preventDefault();
        console.log(formState)
        axios.post('http://localhost:8000/workforce/new', formState)
        .then(res => console.log(res))
    }

    function handleChange(event){
        setFormState({...formState, [event.target.id]: event.target.value})
        console.log(formState)
    }

    return (
        <div>
            <h1>Create New Worker</h1>
            <div class='form padding'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="first_name">First Name: </label>
                    <br/>
                    <input type="text" id = 'first_name' onChange={handleChange} />
                    <br/>
                    <label htmlFor="last_name">Last Name: </label>
                    <br/>
                    <input type="text" id = 'last_name' onChange={handleChange} />
                    <br/>
                    <label htmlFor="email">Email: </label>
                    <br/>
                    <input type="text" id = 'email' onChange={handleChange} />
                    <br/>
                    <label htmlFor="username">Username: </label>
                    <br/>
                    <input type="text" id = 'username' onChange={handleChange} />
                    <br/>
                    <label htmlFor="password">Password: </label>
                    <br/>
                    <input type="text" id = 'password' onChange={handleChange} />
                    <br/>
                    <button type='submit' class='button' >Add Worker</button>
                </form>
            </div>
        </div>
    )
}

export default WorkerCreate