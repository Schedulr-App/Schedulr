import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Workforce = () => {

    useEffect(() => {
        axios.get(`http://localhost:8000/workforce`)
          .then(res => {
            setListState(res.data)
          })
    }, [])

    const [listState, setListState] = useState([])

    return (
        <div>
            <div className="headContainer">
                <h1 class='col'>Workforce</h1>
                <p class="col bold">{listState.length} Total Workers</p>
            </div>
            <hr/>
            <div>
            {listState.map(item => {
                return(
                    <Link to={`/workforce/${item.id}/detail`} style={{textDecoration: 'none', color: 'black'}}>
                        <div class='shiftReq'>
                            <p>Name: {item.first_name} {item.last_name} </p>
                            <p>Email: {item.email}</p>
                        </div>
                    </Link>
                        )
                    })
                }
                </div>
        </div>
    )
}

export default Workforce