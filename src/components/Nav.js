import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav>
                <Link class='navItem' >Shifts</Link>
                <Link class='navItem' to={`/companies`} >Companies</Link>
                <Link class='navItem' >Workers</Link>
                <Link class='navItem' >My Profile</Link>
            </nav>
        </div>
    )
}

export default Nav
