import React from 'react'
import { useState } from 'react'

const EditCompany = ({updateCompany, companyState}) => {

    const [formState, setFormState] = useState(companyState)

    function handleSubmit(event){
        event.preventDefault();
        console.log(formState)
        updateCompany(formState, companyState.id)
    }

    function handleChange(event){
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Company Name: </label>
                <input type="text" id = 'name' onChange={handleChange} value={formState.name}/>
                <label htmlFor="name">Company Contact: </label>
                <input type="text" id = 'contact_name' onChange={handleChange} value={formState.contact_name}/>
                <label htmlFor="name">Contact Email: </label>
                <input type="text" id = 'contact_email' onChange={handleChange} value={formState.contact_email}/>
                <label htmlFor="name">Contact Phone: </label>
                <input type="text" id = 'contact_phone' onChange={handleChange} value={formState.contact_phone}/>
                <label htmlFor="name">Contact Position: </label>
                <input type="text" id = 'contact_position' onChange={handleChange} value={formState.contact_position}/>
                <button type='submit' >Update Company</button>
            </form>
        </div>
    )
}

export default EditCompany