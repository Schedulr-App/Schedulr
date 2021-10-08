import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const WorkerCreate = ({history, URL}) => {

    const [formState, setFormState] = useState({})

    function handleSubmit(event){
        event.preventDefault();
        axios.post(`${URL}/workforce/new`, formState)
            .then(res => console.log(res))
        history.push('/workforce')
    }

    function handleChange(event){
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    return (
        <div>
            <div class='form padding'>
                <h1>Add Worker</h1>
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
                    <button type='submit' class='button update' >Add Worker</button>
                </form>
            </div>
        </div>
    )
}

export default WorkerCreate