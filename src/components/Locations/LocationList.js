import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios'

function LocationList({URL}) {

    const [listState, setListState] = useState([])

    useEffect(() => {
        axios.get(`${URL}/locations`).then(res =>{
            console.log(res)
            setListState(res.data)
        })
    }, [])

    return (
        <div>
             <div className="headContainer">
                <h1 class='col'>Location List</h1>
                <p class="col bold">{listState.length} Total Locations</p>
            </div>
            <hr/>
            {listState.map(item => {
                return(
                    // <Link to={`/company/${item.id}`} style={{textDecoration: 'none', color: 'black'}} >
                    <div class='companyReq'> 
                        <p>{item.name}</p>
                        <p class='dropInfo'>{item.street}, {item.city}, {item.state}</p>
                    </div>
                    // </Link>
                )
            })}
        </div>
    );
}

export default LocationList;