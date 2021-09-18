import React from 'react'
import {
    GoogleMap,
    useLoadScript,
    Marker, 
    InfoWindow,
} from '@react-google-maps/api'

const mapContainerStyle = {
    width: '50vw',
    height: '50vh',
    border: '4px solid teal'
}

const Map = ({location}) => {

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_API_KEY
    })

    if (loadError) return 'Error loading map'
    if(!isLoaded) return 'Loading map'
    
    return (
        <div class='mapContainer'>
            <div class='map'>
                <GoogleMap mapContainerStyle={mapContainerStyle} zoom={14} center={location} class='map'>
                    <Marker position={location}/>
                </GoogleMap>
            </div>
        </div>
    )
}

export default Map
