import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const PositionDetail = ({match, positionState, setPositionState}) => {

    useEffect(() => {
        axios.get(`http://localhost:8000/positions/${match.params.id}`)
          .then(res => {
            setPositionState(res.data)
          })
    }, [])

    return (
        <div>
            <h1>{positionState.name}</h1>
            <div className="companyInfo">
                <p>{positionState.description}</p>
            </div>
            <Link to={`/positions/${positionState.id}/edit`} style={{textDecoration: 'none', color: 'black'}} 
            class='button' >Edit</Link>
        </div>
    )
}

export default PositionDetail
