import React from 'react'
import './topbar.scss'
import {Home, LinkedIn, Mail, GitHub} from '@material-ui/icons';

function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar  " + (menuOpen && "active")} >
            <div className="wrapper">
            <div className="left">
                <a href='#intro'><Home className='logo-icon'/></a>
                <div className="itemContainer">
                    <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <LinkedIn className='icon' />
                    </a>
                    {/* <span>+91 252525</span> */}
                </div>
                <div className="itemContainer">
                    <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
                    <Mail className='icon'/>
                    </a>
                </div><div className="itemContainer">
                    <a href="https://github.com/vishalsharma2195?tab=repositories" target='_blank' rel="noopener noreferrer">
                    <GitHub className='icon'/>
                    </a>
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
