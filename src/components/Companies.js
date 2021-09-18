import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'




const Companies = ({URL}) => {

    const [listState, setListState] = useState([])

    useEffect(() => {
        axios.get(`${URL}/companies`)
          .then(res => {
            setListState(res.data)
          })
    }, [])

    console.log(listState)

    return (
        <div>
            <div className="headContainer">
                <h1 class='col'>Company List</h1>
                <p class="col bold">{listState.length} Total Companies</p>
            </div>
            <hr/>
            {listState.map(item => {
                return(
                    <Link to={`/company/${item.id}`} style={{textDecoration: 'none', color: 'black'}} >
                    <div class='companyReq'> 
                        <p>{item.name}</p>
                        <p class='dropInfo'>{item.contact_name} | {item.contact_phone} | {item.contact_email}</p>
                    </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Companies
