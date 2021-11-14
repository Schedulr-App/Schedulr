import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const LocationForm = ({ handleCreate, URL, history}) => {

    const [formState, setFormState] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        const addressObj = {
            street: formState.street,
            city: formState.city,
            state: formState.state,
            zip: formState.zip
        }
        const editAddress = () => {
            const address = `${addressObj.street} ${addressObj.city} ${addressObj.state} ${addressObj.zip}`
            const urlConfig = address.replace(/\s+/g, '+')
            // We are failing at the fetch and state handle. Look into ordering of state.
            axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlConfig}&key=${process.env.REACT_APP_API_KEY}`)
                .then(res => setFormState(formState => {
                    return{...formState, lat: res.data.results[0].geometry.location.lat, lng: res.data.results[0].geometry.location.lng}
                    // return{...formState, lat: 123456, lng: 123456}
                })
                )
                .then(handleCreate(formState, 'locations/new'))
            
            }
        editAddress()
        }
    

    // editAddress()

    function handleChange(event) {
        setFormState({...formState, [event.target.id]: event.target.value})
        console.log(formState)
    }
    return (
        <div class='form'>
            <h1>New Location</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Name: </label>
                <br/>
                <input
                    id="name"
                    type="text"
                    onChange={handleChange}
                />
                <br/>
                
                <label htmlFor="street">Street: </label>
                <br/>
                <input
                    id="street"
                    type="text"
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor="city">City: </label>
                <br/>
                <input
                    id="city"
                    type="text"
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor="state">State: </label>
                <br/>
                <input
                    id="state"
                    type="text"
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor="zip">Zip Code: </label>
                <br/>
                <input
                    id="zip"
                    type="text"
                    onChange={handleChange}
                />
                <br/>
                <button type='submit'class='button update' >Create Location</button>
            </form>
        </div>
    )
}

export default LocationForm