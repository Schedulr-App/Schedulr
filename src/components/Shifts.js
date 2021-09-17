import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Shifts = () => {

    const [listState, setListState] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/shifts`)
          .then(res => {
              console.log(res.data)
            setListState(res.data)
          })
    }, [])

    console.log(listState)

    return (
        <div>
        <h1>Posted Shifts
        <Link class = 'button addShift' style={{textDecoration: 'none', color: 'black'}} to={'/shifts/new'}>Add Shift</Link>
        </h1>
           {listState.map(item => {
               return(
                    <div  class='shiftReq'>
                        <Link to={`/shift/${item.id}`} style={{textDecoration: 'none', color: 'black'}}>
                            <p>Title: {item.title}</p>
                            <p>Date: {item.start_time.split('T', 1)}</p>
                            <p>Fill Rate: {item.staff_claimed} / {item.staff_needed}</p>
                        </Link>
                    </div>
               )
           })}
        </div>
    )
}

export default Shifts
