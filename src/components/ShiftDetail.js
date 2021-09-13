import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Map from './Map'

const ShiftDetail = ({match}) => {

    const [shiftState, setShiftState] = useState({})
    const [locationState, setLocationState] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/shifts/${match.params.id}`)
          .then(res => {
            setShiftState(res.data[0])
            console.log(res.data[0])
            setLocationState({
                lat: parseFloat(res.data[0].lat),
                lng: parseFloat(res.data[0].lng)
            })
          })
    }, [])

    console.log(shiftState)
    console.log(locationState)

    return (
        <div>
           {shiftState.company ?  
           <div>
                <p>{shiftState.company__name} - {shiftState.title}</p>
                <button>Edit</button>
                <div className="shiftContainer">
                    <div class='times col'>
                        <p>Date: {shiftState.start_time.split('T', 1)}</p>
                        <p>Start Time: {shiftState.start_time.split('T')[1].split('Z')}</p>
                        <p>End Time: {shiftState.end_time.split('T')[1].split('Z')}</p>
                    </div>
                    <div class = 'shiftDetails col'>
                        <p>Description: {shiftState.description}</p>
                        <p>Uniform: {shiftState.uniform}</p>
                        <p>Meeting Location: {shiftState.meeting_location}</p>
                        <p>On-site Contact: {shiftState.on_site_contact}</p>
                    </div>
                </div>
                <hr/>
                <p>Shift Location</p>
                <div class='mapBorder'>
                    <Map location={locationState} />
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

export default ShiftDetail
