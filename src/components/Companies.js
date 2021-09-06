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
           {listState.map(item => {
               return(
                   <div>
                       <Link to={`/companies/${item.id}`}>{item.name}</Link>
                   </div>
               )
           })}
        </div>
    )
}

export default Companies
