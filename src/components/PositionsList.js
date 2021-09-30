import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const PositionsList = ({URL}) => {

    useEffect(() => {
        axios.get(`${URL}/positions`)
          .then(res => {
            setListState(res.data)
          })
    }, [])

    const [listState, setListState] = useState([])

    return (
        <div>
            <div className="headContainer">
                <h1 class='col'>Position List</h1>
                <p className="col bold">{listState.length} Total Positions</p>
            </div>
            <Link class = 'button' style={{textDecoration: 'none', color: 'black'}} to={'/positions/new'}>Add New Position</Link>
            <hr/>
            <div className="positionContainer">
            {listState.map(item => {
                return(
                    <Link to={`/position/${item.id}`} style={{textDecoration: 'none', color: 'black'}}>
                        <div class='col positionReq'>
                            <p>Name: {item.name}</p>
                            <p>Description: {item.description}</p>
                            {/* Fill rate is not counting the number of workers, it is grabbing the id of one worker */}
                        </div>
                    </Link>
                        )
                    })
                }
                </div>
        </div>
    )
}

export default PositionsList
