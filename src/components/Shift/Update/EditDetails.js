import React from 'react'

const EditDetails = ({shiftState, setShiftState, formState, setFormState}) => {


    function handleSubmit(event){
        event.preventDefault();
        console.log(formState)
        setShiftState(formState)
    }

    function handleChange(event){
        setFormState({...formState, [event.target.id]: event.target.value})
        console.log(formState)
    }

    return (
        <div>
            <h2>Shift Details</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Shift Title: </label>
                <br/>
                <input type="text" id = 'title' onChange={handleChange} value={formState.title}/>
                <br/>
                <label htmlFor="start_time">Start Time: </label>
                <input type='datetime-local' id='start_time' onChange={handleChange} value={formState.start_time}/>
                <label htmlFor="end_time">End Time: </label>
                <input type='datetime-local' id='end_time' onChange={handleChange} value={formState.end_time}/>
                <br/>
                <label htmlFor="name">Description: </label>
                <br/>
                <textarea type="text" id = 'description' onChange={handleChange} rows='4' cols='50' placeholder='Detail the requirements of the shift' value={formState.description}/>
                <br/>
                <label htmlFor="name">Uniform: </label>
                <br/>
                <textarea type="text" id = 'uniform' onChange={handleChange} rows='4' cols='50' placeholder='What should they wear.' value={formState.uniform}/>
                <br/>
                <label htmlFor="name">Onsite Contact: </label>
                <input type="text" id = 'on_site_contact' onChange={handleChange} value={formState.on_site_contact}/>
                <br/>
                <label htmlFor="name">Meeting Location: </label>
                <input type="text" id = 'meeting_location' onChange={handleChange} value={formState.meeting_location}/>
                <br/>
                <label htmlFor="payrate">Payrate per hour: </label>
                <input type="number" min='1' step='any' id = 'payrate' onChange={handleChange} value={formState.payrate}/>
                <br/>
                <label htmlFor="billrate">Billrate per hour: </label>
                <input type="number" min='1' step='any' id = 'billrate' onChange={handleChange} value={formState.billrate}/>
                <br/>
                <button type='submit' class='button'>Save Changes</button>
            </form>
        </div>
    )
}

export default EditDetails
