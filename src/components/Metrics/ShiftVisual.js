import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Chart, ChartSeries, ChartSeriesItem, ChartArea, ChartTitle, ChartTooltip} from '@progress/kendo-react-charts'
import 'hammerjs'

const ShiftVisual = ({URL}) => {

    const [shiftCount, setShiftCount] = useState(0)

    useEffect(() => {
        axios.get(`${URL}/dashboard/shifts`)
            .then(res => {
                setShiftCount(res.data)
                console.log(res.data)
                
            })
    }, [])

    const seriesData= [
        {
            timeframe: 'Past 30 Days',
            shifts: shiftCount.monthCount
        },
        {
            timeframe: 'Past 14 Days',
            shifts: shiftCount.twoWeekCount
        },
        {
            timeframe: 'Past 7 Days',
            shifts: shiftCount.weekCount
        },
        
    ]

    return (
        <div>
            {shiftCount.monthCount >  0 ?  
           
            
            <Chart>
                
                <ChartArea background="#eee" width={500} margin={50} />
                <ChartTitle text="Historical Shift Information" />
                <ChartTooltip />
                <ChartSeries>
                    <ChartSeriesItem data={seriesData} type="column" field="shifts" categoryField="timeframe" />
                </ChartSeries>
            </Chart>
            :
            <div>
                <p>Loading Items</p>
            </div>
            }
        </div>
    )
}

export default ShiftVisual
