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
                <div className="companyInfo">
                    <p> <span className="bold">Contact:</span> {companyState.contact_name}</p>
                    <p> <span className="bold">Position:</span> {companyState.contact_position}</p>
                    <p> <span className="bold">Email:</span> {companyState.contact_email}</p>
                    <p> <span className="bold">Phone:</span> {companyState.contact_phone}</p>
                </div>
            <Link to={`/companies/${companyState.id}/edit`} style={{textDecoration: 'none', color: 'black'}} class='button' >Edit</Link>
        </div>
    )
}

export default CompanyDetail
