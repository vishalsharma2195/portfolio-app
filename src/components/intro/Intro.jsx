import React from 'react';
import './intro.scss';
import { init } from 'ityped';
import {useEffect, useRef} from "react";

function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, 
            { 
                showCursor: false, 
                backDelay: 1500,
                showCursor: true, 
                strings: ['Developer', 'Designer' ] })
    }, [])
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assests/computer.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Vishal Sharma</h1>
                    <h3>Front-End <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assests/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro
