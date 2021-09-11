import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'




const Companies = () => {

    const [listState, setListState] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/companies`)
          .then(res => {
            setListState(res.data)
          })
    }, [])

    console.log(listState)

    return (
        <div>
        <h1>Company List</h1>
        <Link class = 'button' style={{textDecoration: 'none', color: 'black'}} to={'/companies/new'}>Add Company</Link>
           {listState.map(item => {
               return(
                <Link to={`/companies/${item.id}`} style={{textDecoration: 'none', color: 'black'}} >
                   <div class='companyReq'> 
                       <p>{item.name}</p>
                   </div>
                   </Link>
               )
           })}
        </div>
    )
}

export default Companies
