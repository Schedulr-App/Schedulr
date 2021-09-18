import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const WorkerDetail = ({workerState, setWorkerState, match, URL}) => {

    useEffect(() => {
        axios.get(`${URL}/workforce/${match.params.id}`)
          .then(res => {
            setWorkerState(res.data[0])
          })
    }, [])

    return (
        <div>
           {workerState.id ?  
           <div>
               <h1>Worker Detail</h1>
       
                    <div class='workerInfo'>
                        <p><span class='bold'>Name:</span>  {workerState.first_name} {workerState.last_name}</p>
                        <p><span class='bold'>Email:</span>  {workerState.email}</p>
                        <p><span class='bold'>Username:</span>  {workerState.username}</p>
                    </div>

            </div>
            :
            <div>
                <p>Loading Items</p>
            </div>
            }
        </div>
    )
}


export default WorkerDetail
