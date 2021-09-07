import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CompanyDetail = ({match, setCompanyState, companyState}) => {

    

    useEffect(() => {
        axios.get(`http://localhost:8000/companies/${match.params.id}`)
          .then(res => {
            setCompanyState(res.data)
          })
    }, [])

    console.log(companyState)

    return (
        <div>
            <h1>{companyState.name}</h1>
            <Link to={`/companies/${companyState.id}/edit`} style={{textDecoration: 'none', color: 'black'}} class='button' >Edit</Link>
            <div className="companyContainer">
                <div className="contact col">
                    <p>{companyState.contact_name}</p>
                    <p>{companyState.contact_position}</p>
                    <p>{companyState.contact_email}</p>
                    <p>{companyState.contact_phone}</p>
                </div>

                <div class ='col'>
                    <p>Shifts</p>
                </div>


            </div>
        </div>
    )
}

export default CompanyDetail
