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
                <div class = 'col chartKey'>
                    <p class='bold'>Data Empowers Your Team</p>
                    <p class='keyItem'> - Our goal is to provide your team with metrics to enable deeper insight into the health and trends of your marketplace.</p>
                    <p class='keyItem'> - We are always building upon and analyzing our data pipeline to ensure you are receving metrics that matter to you.</p>
                    <p class='keyItem'> - If there are metrics you wish to see, please let us know <a href='https://schedulrapp.herokuapp.com/dashboard' target='_blank' rel='noreferrer'>here</a>.</p>
                </div>

                <div class = 'col chart'>
                    <FillrateVisual URL = {URL}/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
