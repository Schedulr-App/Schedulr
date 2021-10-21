import React from 'react'
import FillrateVisual from './FillrateVisual'
import ShiftVisual from './ShiftVisual'

const Dashboard = ({URL}) => {
    return (
        <div>
             <div className="headContainer">
                <h1 class='col'>Your Schedulr Dashboard</h1>
            </div>
            <hr/>
            <div class='chartContainer'>
                <div class = 'col chart'>
                    <ShiftVisual URL = {URL}/> 
                </div>
                <div class = 'col chart'>
                    <FillrateVisual URL = {URL}/>
                </div>
                <div class = 'col chart'>
                    <ShiftVisual URL = {URL}/> 
                </div>
            </div>
        </div>
    )
}

export default Dashboard
