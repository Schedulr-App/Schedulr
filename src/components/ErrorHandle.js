import React from 'react'
import { Link } from 'react-router-dom'

const ErrorHandle = () => {
    return (
        <div>
            <p>An Error occurred during shift creation, please try again.</p>
            <Link to='new' refresh='true'> Go Back to Shift Creation</Link>
        </div>
    )
}

export default ErrorHandle
