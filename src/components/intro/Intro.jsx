import React from 'react';
import './intro.scss';
import computer from './computer.png';
import down from './down.png';

function Intro() {
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src={computer} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Vishal Sharma</h1>
                    <h3><span>Front-End Web Developer </span>and</h3>
                    <h3>A Computer Application Graduate.</h3>
                </div>
                <a href="#skills">
                    <img src={down} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro
