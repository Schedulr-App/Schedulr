import React from 'react'
import axios from 'axios';

const EditAddress = ({formState, setFormState, shiftState, setShiftState}) => {

    function handleSubmit(event) {
        event.preventDefault();
        const addressObj = {
            street: formState.street,
            city: formState.city,
            state: formState.state,
            zip: formState.zip
        }
        setFormState(formState, addressObj)
        const editAddress = () => {
            const address = `${addressObj.street} ${addressObj.city} ${addressObj.state} ${addressObj.zip}`
            const urlConfig = address.replace(/\s+/g, '+')
            axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlConfig}&key=${process.env.REACT_APP_API_KEY}`)
                .then(res => setFormState(formState => {
                    return{...formState, lat: res.data.results[0].geometry.location.lat, lng: res.data.results[0].geometry.location.lng}
                })
                )
            }
        editAddress()
        setShiftState(formState)
        }
    

    // editAddress()

    function handleChange(event) {
        setFormState({...formState, [event.target.id]: event.target.value})
        console.log(formState)
    }
    console.log(formState)
    return (
        <div>
            <h2>Address Info</h2>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="street">Street: </label>
                <br/>
                <input
                    id="street"
                    type="text"
                    onChange={handleChange}
                    value={formState.street}
                />
                <br/>
                <label htmlFor="city">City: </label>
                <br/>
                <input
                    id="city"
                    type="text"
                    onChange={handleChange}
                    value={formState.city}
                />
                <br/>
                <label htmlFor="state">State: </label>
                <br/>
                <input
                    id="state"
                    type="text"
                    onChange={handleChange}
                    value={formState.state}
                />
                <br/>
                <label htmlFor="zip">Zip Code: </label>
                <br/>
                <input
                    id="zip"
                    type="text"
                    onChange={handleChange}
                    value={formState.zip}
                />
                <br/>
                <button type='submit' class='button'>Save Changes</button>
            </form>
        </div>
    )
}

export default EditAddress
