import React from 'react'
import { useState } from 'react'

const CompanyForm = ({handleCreate, history}) => {

    const [formState, setFormState] = useState({})

    function handleSubmit(event){
        event.preventDefault();
        handleCreate(formState, 'companies')
        history.push('/companies')
    }

    function handleChange(event){
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    return (
        <div class='form'>
            <h1>New Company</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Company Name: </label>
                <br/>
                <input type="text" id = 'name' onChange={handleChange} />
                <br/>
                <label htmlFor="name">Company Contact: </label>
                <br/>
                <input type="text" id = 'contact_name' onChange={handleChange} />
                <br/>
                <label htmlFor="name">Contact Email: </label>
                <br/>
                <input type="text" id = 'contact_email' onChange={handleChange} />
                <br/>
                <label htmlFor="name">Contact Phone: </label>
                <br/>
                <input type="text" id = 'contact_phone' onChange={handleChange} />
                <br/>
                <label htmlFor="name">Contact Position: </label>
                <br/>
                <input type="text" id = 'contact_position' onChange={handleChange} />
                <br/>
                <button type='submit'class='button update' >Create Company</button>
            </form>
        </div>
    )
}

export default CompanyForm
