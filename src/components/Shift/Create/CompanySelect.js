import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ShiftForm from './ShiftForm'
import ErrorHandle from '../../ErrorHandle'

const CompanySelect = ({handleCreate, URL, history}) => {

    const [companyList, setCompanyList] = useState([])
    const [positionList, setPositionList] = useState([])
    const [formState, setFormState] = useState()
    const [shiftState, setShiftState]= useState({})
    const [error, setError] = useState(false)

    useEffect(() => {
        axios.get(`${URL}/companies`)
          .then(res => {
            setCompanyList(res.data)
            setShiftState({})
          })
          axios.get(`${URL}/positions`)
          .then(res => {
            setPositionList(res.data)
          })
          setError(false)
    }, [])

    function handleSubmit(event){
        event.preventDefault();
        try {
            if (!formState.company){
        }
        setShiftState(formState)
        } catch {
            setError(true);
        }
    }

    function handleChange(event){
        setFormState({...formState, [event.target.id]: event.target.value})
    }


        return (
            <div>
                {!error && (
                <div class='form'>
                    <h1>Create a new shift</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="company">Select the company: </label>
                        <select name="company" id="company" onChange={handleChange}>
                            <option value='starter'> - choose a company - </option>
                            {companyList.map(item => {
                                return (
                                    <option value={item.name} id='company'>{item.name}</option>
                                )
                            })}
                        </select>
                        <br/>
                        {shiftState.company ? null : <button type='submit' class='button' >Next</button>}
                    </form>
                    {shiftState.company ? <ShiftForm shiftState={shiftState} setShiftState={setShiftState} positionList={positionList} formState={formState} setFormState={setFormState} handleCreate={handleCreate} URL={URL} history={history}/> : null}
                </div>
            )}
            {error && <ErrorHandle />}
            </div>
        )
}

export default CompanySelect
