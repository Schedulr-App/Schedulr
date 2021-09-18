import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Map from './Map'
import { Link } from 'react-router-dom'

const ShiftDetail = ({match, shiftState, setShiftState}) => {

    const [locationState, setLocationState] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/shifts/${match.params.id}`)
          .then(res => {
            const array = []
            for (const [key, value] of Object.entries(res.data)){
                array.push(value)
            }
            setShiftState(array[0])
            console.log(res.data)
            setLocationState({
                lat: parseFloat(array[0].lat),
                lng: parseFloat(array[0].lng)
            })
          })
    }, [])

    return (
        <div>
           {shiftState.company ?  
           <div>
                <p>{shiftState.company__name} | {shiftState.title}</p>
                <Link to={`/shifts/${shiftState.id}/edit`} style={{textDecoration: 'none', color: 'black'}} class='button' >Edit</Link>
                <Link to={`/shifts/${shiftState.id}/add`} style={{textDecoration: 'none', color: 'black'}} class='button' >Assign Worker</Link>
                <div className="shiftContainer">
                    <div class='times '>
                        <p class ='bold'>Date & Time</p>
                        <hr/>
                        <p>{shiftState.start_time.split('T', 1)}</p>
                        <p><span class='bold'>Start:</span> {shiftState.start_time.split('T')[1].split('Z')}</p>
                        <p><span class='bold'>End:</span> {shiftState.end_time.split('T')[1].split('Z')}</p>
                    </div>
                    <div class = 'shiftDetails '>
                        <p>Details</p>
                        <hr/>
                        <p><span class='bold'>Description:</span> {shiftState.description}</p>
                        <p><span class='bold'>Uniform:</span> {shiftState.uniform}</p>
                        <p><span class='bold'>Meeting Location:</span> {shiftState.meeting_location}</p>
                        <p><span class='bold'>Onsite Contact:</span> {shiftState.on_site_contact}</p>
                        <p> <span class='bold'>Current Fill Rate:</span> {shiftState.staff_count} / {shiftState.staff_needed} </p>
                        <p> <span class='bold'>Pay / Bill:</span> ${shiftState.payrate} / ${shiftState.billrate} </p>
                    </div>
                </div>
                <hr/>
                <p class='bold'>Shift Location</p>
                <p class='minor'>{shiftState.street} {shiftState.city}, {shiftState.state} {shiftState.zip}</p>
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
