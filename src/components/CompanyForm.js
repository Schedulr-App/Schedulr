import React from 'react'
import { useState } from 'react'

const CompanyForm = ({handleCreate}) => {

    const [formState, setFormState] = useState({})

    function handleSubmit(event){
        event.preventDefault();
        console.log(formState)
        handleCreate(formState, 'companies')
    }

    function handleChange(event){
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Company Name: </label>
                <input type="text" id = 'name' onChange={handleChange} />
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

export default CompanyForm
