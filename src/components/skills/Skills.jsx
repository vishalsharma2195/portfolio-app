import React from 'react';
import html5 from './images/html5.png';
import css from './images/css.png';
import js from './images/js.png';
import bootstrap from './images/bootstrap.png';
import react from './images/react.png';
import sass from './images/sass.png';
import api from './images/api.png';
import './skills.scss';

function Skills() {
    return (
        <div className='skills' id='skills'>
            <h1>Skill sets</h1>
            <div className="container">
                <div className="item">
                    
                        <p>HTML</p>
                        <img src={html5} alt="" />
                </div>
                <div className="item">
                    
                        <p>CSS 3</p>
                        <img src={css} alt="" />
                </div>
                <div className="item">
                    
                        <p>JavaScript</p>
                        <img src={js} alt="" />
                </div>
                <div className="item">
                    
                        <p>Bootstrap</p>
                        <img src={bootstrap} alt="" />
                </div>
                <div className="item">
                    
                        <p>React</p>
                        <img src={react} alt="" />
                </div>
                <div className="item">
                    
                        <p>SASS</p>
                        <img src={sass} alt="" />
                </div>
                <div className="item">
                    
                        <p>RESTful Api</p>
                        <img src={api} alt="" />
                </div>
            
            </div>
        </div>
    )
}

export default Skills
