import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav>
                <div class="dropdown">
                    <button class="navItem dropbtn">Shifts
                        {/* <i class="fa fa-caret-down"></i> */}
                    </button>
                    <div class="dropdown-content">
                       <Link class = 'navDrop' to={'/shifts'}>Posted</Link>
                       <br/>
                       <Link class = 'navDrop' to={'/positions'}>Positions</Link>
                    </div>
                </div>
                {/* <Link class='navItem' to={'/shifts'}>Shifts</Link> */}
                <Link class='navItem' to={`/companies`} >Companies</Link>
                <Link class='navItem' to={`/workforce`} >Workers</Link>
                <Link class='navItem' >My Profile</Link>
            </nav>
        </div>
    )
}

export default Nav
