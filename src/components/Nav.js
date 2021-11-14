import React from 'react'
import {Link} from 'react-router-dom'
import ReactTooltip from 'react-tooltip';

const Nav = () => {
    return (
        <div>
            <nav class='sticky'>
                <a data-tip="View your dashboard">

                <Link to={'/dashboard'}>
                    <img src="/calendar.png" alt="Calendar" className="navLogo" />
                </Link>
                </a>
                <ReactTooltip place="top" type="dark" effect="solid"/>
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
                <div class="dropdown">
                    <button class="navItem dropbtn">Locations
                        {/* <i class="fa fa-caret-down"></i> */}
                    </button>
                    <div class="dropdown-content">
                       <Link class = 'navDrop' to={'/locations'}>Location List</Link>
                       <br/>
                       <Link class = 'navDrop' to={'/locations/new'}>Add Location</Link>
                    </div>
                </div>
                <Link class='navItem' to={'/reporting'}>Reporting</Link>
                {/* <Link class='navItem' >My Profile</Link> */}
            </nav>
        </div>
    )
}

export default Nav
