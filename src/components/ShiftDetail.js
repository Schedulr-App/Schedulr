import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Map from './Map'
import { Link } from 'react-router-dom'

const ShiftDetail = ({match, shiftState, setShiftState}) => {

    const [locationState, setLocationState] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/shifts/${match.params.id}`)
          .then(res => {
            setShiftState(res.data[0])
            console.log(res.data)
            setLocationState({
                lat: parseFloat(res.data[0].lat),
                lng: parseFloat(res.data[0].lng)
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
                        <p>Date & Time</p>
                        <hr/>
                        <p>{shiftState.start_time.split('T', 1)}</p>
                        <p>Start: {shiftState.start_time.split('T')[1].split('Z')}</p>
                        <p>End: {shiftState.end_time.split('T')[1].split('Z')}</p>
                    </div>
                    <div class = 'shiftDetails '>
                        <p>Details</p>
                        <hr/>
                        <p>Description: {shiftState.description}</p>
                        <p>Uniform: {shiftState.uniform}</p>
                        <p>Meeting Location: {shiftState.meeting_location}</p>
                        <p>On-site Contact: {shiftState.on_site_contact}</p>
                        <p> {shiftState.staff_claimed__first_name} </p>
                    </div>
                </div>
                <hr/>
                <p>Shift Location</p>
                <div class='mapBorder'>
                    {/* <Map location={locationState} /> */}
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
