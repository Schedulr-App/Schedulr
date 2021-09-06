import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const CompanyDetail = ({match}) => {

    const [companyState, setCompanyState] = useState({})

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
        </div>
    )
}

export default CompanyDetail
