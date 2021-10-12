import React from 'react'
import WorkerAdd from './WorkerAdd'
import WorkerRemove from './WorkerRemove'

const ManageStaff = ({match, URL, history, shiftState}) => {
    return (
        <div>
            <h1>Manage Staff</h1>
            <WorkerAdd history={history} URL={URL} match={match}/>
            <WorkerRemove history={history} URL={URL} match={match} shiftState={shiftState}/>
        </div>
    )
}

export default ManageStaff
