import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Chart, ChartSeries, ChartSeriesItem, ChartArea, ChartTitle, ChartTooltip, ChartSeriesLabels, ChartLegend} from '@progress/kendo-react-charts'
import 'hammerjs'

const FillrateVisual = ({URL}) => {

    const [shiftCount, setShiftCount] = useState({})

    useEffect(() => {
        axios.get(`${URL}/dashboard/fillrate`)
            .then(res => {
                setShiftCount(res.data)
                console.log(res.data)
                
            })
    }, [])

    const seriesData= [
        {
            kind: 'Open',
            share: shiftCount.open
        },
        {
            kind: 'Full',
            share: shiftCount.full
        },
        
    ]

    return (
        <div>
            {shiftCount.total > 0 ?
              <Chart>
                <ChartArea background="#eee" width={500} margin={50}/>
                <ChartTitle text="Shift Fill Rate" />
                <ChartTooltip />
                <ChartLegend position="bottom" orientation="horizontal" />
                    <ChartSeries>
                        <ChartSeriesItem
                            type="donut"
                            data={seriesData}
                            categoryField="kind"
                            field="share"
                        >
                            <ChartSeriesLabels
                            color="#fff"
                            background="none"
                            />
                    </ChartSeriesItem>
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

export default FillrateVisual
