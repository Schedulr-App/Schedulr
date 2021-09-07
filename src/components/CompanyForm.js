import React from 'react'
import { useState } from 'react'

const CompanyForm = ({createCompany}) => {

    const [formState, setFormState] = useState({})

    function handleSubmit(event){
        event.preventDefault();
        console.log(formState)
        createCompany(formState)
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
                <button type='submit' >Create Restaurant</button>
            </form>
        </div>
    )
}

export default CompanyForm
