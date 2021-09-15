import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Shifts = () => {

    const [listState, setListState] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/shifts`)
          .then(res => {
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
                        <Link to={`/shifts/${item.id}`} style={{textDecoration: 'none', color: 'black'}}>
                            <p>Title: {item.title}</p>
                            <p>Date: {item.start_time.split('T', 1)}</p>
                            <p>Fill Rate: {item.staff_claimed} / {item.staff_needed}</p>
                            {/* Fill rate is not counting the number of workers, it is grabbing the id of one worker */}
                        </Link>
                    </div>
               )
           })}
        </div>
    )
}

export default Shifts
