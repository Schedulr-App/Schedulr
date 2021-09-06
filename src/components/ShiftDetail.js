import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const ShiftDetail = ({match}) => {

    const [shiftState, setShiftState] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/shifts/${match.params.id}`)
          .then(res => {
            setShiftState(res.data)
          })
    }, [])

    console.log(shiftState)

    return (
        <div>
            <h1>{shiftState.title}</h1>
        </div>
    )
}

export default ShiftDetail
