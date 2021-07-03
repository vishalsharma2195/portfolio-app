import React from 'react'
import dictionary from './images/dictionary.png';
import news from './images/news.png';
import covid_tracker from './images/covid_tracker.png';
import './projects.scss';

function Projects() {
    return (
        <div className='projects' id='projects'>
            <h1>Projects</h1>
            <div className="container">
                <div className="item-container">
                    <a href="https://github.com/vishalsharma2195/dictionary-app" target="_blank" rel="noopener noreferrer">
                        <img src={dictionary} alt="" />
                    </a>
                    <p>Dictionary</p>
                </div>
                <div className="item-container">
                    
                    <a href="https://github.com/vishalsharma2195/news-app" target="_blank" rel="noopener noreferrer">
                    <img src={news} alt="" />
                    </a>
                    <p>News App</p>
                </div>
                <div className="item-container">
                    <a href="https://github.com/vishalsharma2195/covid-tracker" target="_blank" rel="noopener noreferrer">
                    <img src={covid_tracker} alt="" />
                    </a>
                    <p>Covid Tracker</p>
                </div>
            </div>
        </div>
    )
}

export default Projects
