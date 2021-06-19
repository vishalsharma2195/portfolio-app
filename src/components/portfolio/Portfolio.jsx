import React from 'react'
import './portfolio.scss'

function Portfolio() {
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                <li className='active'>Featured</li>
                {/* <li>Web App</li>
                <li>Design</li> */}
            </ul>
                <div className="container">
                    <div className="item">
                        <img src="assests/dictionary.png" height="200px" width="400px" alt="" />
                        <h3>Dictionary App</h3>
                    </div>
                    <div className="item">
                        <img src="assests/dictionary.png" height="200px" width="400px" alt="" />
                        <h3>Dictionary App</h3>
                    </div>
                    <div className="item">
                        <img src="assests/dictionary.png" height="200px" width="400px" alt="" />
                        <h3>Dictionary App</h3>
                    </div>
                    

                </div>
        </div>
    )
}

export default Portfolio
