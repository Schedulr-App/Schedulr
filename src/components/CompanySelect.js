import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ShiftForm from './ShiftForm'

const CompanySelect = () => {

    const [companyList, setCompanyList] = useState([])
    const [positionList, setPositionList] = useState([])
    const [formState, setFormState] = useState()
    const [shiftState, setShiftState]= useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/companies`)
          .then(res => {
            setCompanyList(res.data)
            setShiftState({})
          })
          axios.get(`http://localhost:8000/positions`)
          .then(res => {
            setPositionList(res.data)
          })
    }, [])

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
                    {companyList.map(item => {
                        return (
                            <option value={item.name} id='company'>{item.name}</option>
                        )
                    })}
                </select>
                <br/>
                {shiftState.company ? null : <button type='submit' class='button'>Next</button>}
            </form>
            {shiftState.company ? <ShiftForm shiftState={shiftState} setShiftState={setShiftState} positionList={positionList} formState={formState} setFormState={setFormState}/> : null}
        </div>
    )
}

export default CompanySelect
