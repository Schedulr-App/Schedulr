import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ShiftForm from './ShiftForm'

const CompanySelect = () => {

    const [listState, setListState] = useState([])
    const [formState, setFormState] = useState()
    const [shiftState, setShiftState]= useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/companies`)
          .then(res => {
            setListState(res.data)
            setShiftState({})
          })
    }, [])

    console.log(listState)

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
            <h1>Create a new shift</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="company">Select the company: </label>
                <select name="company" id="company" onChange={handleChange}>
                    {listState.map(item => {
                        return (
                            <option value={item.name} id='company'>{item.name}</option>
                        )
                    })}
                </select>
                <br/>
                <button type='submit' class='button'>Next</button>
                {shiftState.company ? <ShiftForm shiftState={shiftState} setShiftState={setShiftState} /> : null}
            </form>
        </div>
    )
}

export default CompanySelect
