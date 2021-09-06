import React from 'react'
import { useState } from 'react'

const AddressForm = ({addressState, setAddressState, handleRequest}) => {

    const [formState, setFormState] = useState()

    function handleSubmit(event) {
        event.preventDefault();
        const addressObj = {
            street: formState.street,
            city: formState.city,
            state: formState.state,
            zip: formState.zip
        }
        setAddressState(addressObj)
        setFormState(formState, addressObj)
        console.log(addressObj)
    }

    function editAddress(){
        const address = `${addressState.street} ${addressState.city} ${addressState.state} ${addressState.zip}`
        console.log(address)
        const urlConfig = address.replace(/\s+/g, '+')
        console.log(urlConfig)
        handleRequest(urlConfig)
        
    }

    // editAddress()

    function handleChange(event) {
        setFormState({...formState, [event.target.id]: event.target.value})
        console.log(formState)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                
            <label htmlFor="street">Street: </label>
            <input
                id="street"
                type="text"
                onChange={handleChange}
            />
            <label htmlFor="city">City: </label>
            <input
                id="city"
                type="text"
                onChange={handleChange}
            />
            <label htmlFor="state">State: </label>
            <input
                id="state"
                type="text"
                onChange={handleChange}
            />
            <label htmlFor="zip">Zip Code: </label>
            <input
                id="zip"
                type="text"
                onChange={handleChange}
            />
              
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddressForm
