import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Shifts = ({shiftState}) => {

    const [listState, setListState] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/shifts`)
          .then(res => {
              console.log(res)
              const array = []
              for (const [key, value] of Object.entries(res.data)){
                  array.push(value)
              }
            //   console.log(array)
            //   console.log(res_array)
            setListState(array)
          })
    }, [])

    console.log(listState)

    return (
        <div>
            <div class='headContainer'>
                <h1 class = 'col'>Posted Shifts</h1>
                <p class = 'col bold'>{listState.length} Total Shifts </p>
            </div>
            <hr/>
            {listState.map(item => {
                return(
                        <div  class='shiftReq'>
                            <Link to={`/shift/${item.id}`} style={{textDecoration: 'none', color: 'black'}}>
                                <div className="shiftInfo">
                                    <div className="shiftReqDate">
                                        <p><span class='bold'>Date:</span>  {item.start_time.split('T', 1)}</p>
                                    </div>
                                    <div className="shiftReqDetails">
                                        <p><span class='bold'>Title:</span> {item.title}</p>
                                        <p><span class='bold'>Company:</span> {item.company__name}</p>
                                    </div>
                                    <div className="shiftReqRate">
                                        <p class='rate'><span class='bold'>Fill Rate:</span>  {item.staff_count} / {item.staff_needed}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                )
            })}
        </div>
    )
}

export default Shifts
