import React from 'react'
import {
    GoogleMap,
    useLoadScript,
    Marker, 
    InfoWindow,
} from '@react-google-maps/api'

const mapContainerStyle = {
    width: '50vw',
    height: '50vh'
}

const Map = ({location}) => {

    console.log(location)

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_API_KEY
    })

    if (loadError) return 'Error loading map'
    if(!isLoaded) return 'Loading map'
    
    return (
        <div>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={14} center={location}>
                <Marker position={location}/>
            </GoogleMap>
        </div>
    )
}

export default Map
