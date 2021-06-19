import React from 'react'
import './topbar.scss'
import {Home, LinkedIn, Mail, GitHub} from '@material-ui/icons';

function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar  " + (menuOpen && "active")} >
            <div className="wrapper">
            <div className="left">
                <a href='#intro'className='logo'><Home className='logo-icon'/></a>
                <div className="itemContainer">
                    <LinkedIn className='icon' />
                    {/* <span>+91 252525</span> */}
                </div>
                <div className="itemContainer">
                    <Mail className='icon'/>
                </div><div className="itemContainer">
                    <GitHub className='icon'/>
                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Topbar
