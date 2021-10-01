import React from 'react'
import axios from 'axios'

const Reporting = ({URL}) => {

    const FileDownload = require('js-file-download');

    const pullReport = () => {
        axios({
            url: `${URL}/export`,
            method: 'GET',
            responseType: 'blob',
        }).then((response) => {
            FileDownload(response.data, 'shift_detail.csv')
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
                    <p class="reportReq">Shift Detail Export</p>
                    <button class ='button' onClick={pullReport}>Export</button>
                </div>
            </div>
        </div>
    )
}

export default Reporting
