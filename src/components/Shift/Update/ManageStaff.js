import React from 'react'
import WorkerAdd from './WorkerAdd'
import WorkerRemove from './WorkerRemove'

const ManageStaff = ({match, URL, history, shiftState}) => {
    return (
        <div>
            <h1>Manage Staff</h1>
            <div class='form'>
                <WorkerAdd history={history} URL={URL} match={match}/>
            </div>
            <div class='form'>
                <WorkerRemove history={history} URL={URL} match={match} shiftState={shiftState}/>
            </div>
        </div>
    )
}

export default ManageStaff
