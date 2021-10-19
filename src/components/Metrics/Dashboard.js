import React from 'react'
import ShiftVisual from './ShiftVisual'

const Dashboard = ({URL}) => {
    return (
        <div>
             <div className="headContainer">
                <h1 class='col'>Schedulr Dashboard</h1>
            </div>
            <hr/>
            <ShiftVisual URL = {URL}/>
        </div>
    )
}

export default Dashboard
