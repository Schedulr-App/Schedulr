import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav class='sticky'>
                <div class="dropdown">
                    <button class="navItem dropbtn">Shifts
                        {/* <i class="fa fa-caret-down"></i> */}
                    </button>
                    <div class="dropdown-content">
                       <Link class = 'navDrop' to={'/shifts'}>Posted</Link>
                       <br/>
                       <Link class = 'navDrop' to={'/shifts/new'}>Add Shift</Link>
                       <br/>
                       <Link class = 'navDrop' to={'/positions'}>Positions</Link>
                    </div>
                </div>
                {/* <Link class='navItem' to={'/shifts'}>Shifts</Link> */}
                <div class="dropdown">
                    <button class="navItem dropbtn">Companies
                        {/* <i class="fa fa-caret-down"></i> */}
                    </button>
                    <div class="dropdown-content">
                       <Link class = 'navDrop' to={'/companies'}>Company List</Link>
                       <br/>
                       <Link class = 'navDrop' to={'/companies/new'}>Add Company</Link>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="navItem dropbtn">Workforce
                        {/* <i class="fa fa-caret-down"></i> */}
                    </button>
                    <div class="dropdown-content">
                       <Link class = 'navDrop' to={'/workforce'}>Worker List</Link>
                       <br/>
                       <Link class = 'navDrop' to={'/workforce/new'}>Add Worker</Link>
                    </div>
                </div>
                {/* <Link class='navItem' >My Profile</Link> */}
            </nav>
        </div>
    )
}

export default Nav
