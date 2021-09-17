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
            <h1>Workforce</h1>
            <Link class = 'button' style={{textDecoration: 'none', color: 'black'}} to={'/workforce/new'}>Add New Worker</Link>
            <div>
            {listState.map(item => {
                return(
                    <Link to={`/workforce/${item.id}`} style={{textDecoration: 'none', color: 'black'}}>
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