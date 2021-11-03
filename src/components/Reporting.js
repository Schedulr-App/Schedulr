import React from 'react'
import axios from 'axios'

const Reporting = ({URL}) => {

    const FileDownload = require('js-file-download');

    const pullShifts = () => {
        axios({
            url: `${URL}/export/shifts`,
            method: 'GET',
            responseType: 'blob',
        }).then((response) => {
            FileDownload(response.data, 'shift_detail.csv')
        });
    }

    const pullStaff = () => {
        axios({
            url: `${URL}/export/staff`,
            method: 'GET',
            responseType: 'blob',
        }).then((response) => {
            FileDownload(response.data, 'staff_list.csv')
        });
    }

    return (
        <div>
            <div class="headContainer">
                <h1 class='col'>Reporting</h1>
            </div>
            <hr/>
            <div class="reportContainer">
                <div class="reportRow">
                    <div class="reportInfo">
                        <p class="reportReq col bold">Shift Detail Export</p>
                        <p class="dropInfo reportSummary">Report showing all information on shifts including company info, position info, and worker info. Report is granular to shift level.</p>
                        <button class ='button col export update' onClick={pullShifts}>Export</button>
                    </div>
                </div>
                <div class="reportRow">
                    <div class="reportInfo">
                        <p class="reportReq col bold">Staff List Export</p>
                        <p class="dropInfo reportSummary">Report showing all information on staff.</p>
                        <button class ='button col export update' onClick={pullStaff}>Export</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reporting
