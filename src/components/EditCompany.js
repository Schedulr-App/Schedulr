import React from 'react'
import { useState } from 'react'

const EditCompany = ({handleUpdate, companyState, history}) => {

    const [formState, setFormState] = useState(companyState)

    function handleSubmit(event){
        event.preventDefault();
        console.log(formState)
        handleUpdate(formState, 'companies', companyState.id)
        history.push(`/company/${companyState.id}`)
    }

    function handleChange(event){
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    return (
        <div class='form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Company Name: </label>
                <br/>
                <input type="text" id = 'name' onChange={handleChange} value={formState.name}/>
                <br/>
                <label htmlFor="name">Company Contact: </label>
                <br/>
                <input type="text" id = 'contact_name' onChange={handleChange} value={formState.contact_name}/>
                <br/>
                <label htmlFor="name">Contact Email: </label>
                <br/>
                <input type="text" id = 'contact_email' onChange={handleChange} value={formState.contact_email}/>
                <br/>
                <label htmlFor="name">Contact Phone: </label>
                <br/>
                <input type="text" id = 'contact_phone' onChange={handleChange} value={formState.contact_phone}/>
                <br/>
                <label htmlFor="name">Contact Position: </label>
                <br/>
                <input type="text" id = 'contact_position' onChange={handleChange} value={formState.contact_position}/>
                <br/>
                <button type='submit' class='button update' >Update Company</button>
            </form>
        </div>
    )
}

export default EditCompany