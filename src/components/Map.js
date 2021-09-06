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

const center = {lat: 41.7462935, lng: -87.7262466}

const position = {lat: 41.7462935, lng: -87.7262466}

const Map = () => {

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_API_KEY
    })

    if (loadError) return 'Error loading map'
    if(!isLoaded) return 'Loading map'
    
    return (
        <div>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={14} center={center}>
                <Marker position={position}/>
            </GoogleMap>
        </div>
    )
}

export default Map
