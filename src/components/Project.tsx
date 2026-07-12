import React from "react";
import Crypto from '../assets/images/Crypto.png';
import portfolio from '../assets/images/portfolio.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Mini Projects</h1>
        <div className="projects-grid">
            
            <div className="project">
                <a href="https://github.com/Shrikant-AI/CryptoTracker" target="_blank" rel="noreferrer"><img src={Crypto} className="zoom" alt="thumbnail" width="100%" height="55%"/></a>
                <a href="https://github.com/Shrikant-AI/CryptoTracker" target="_blank" rel="noreferrer"><h2>CryptoTracker</h2></a>
                <p>Developed a responsive cryptocurrency tracking web application using ReactJS and Context API for state management, providing real-time data for the top 10 cryptocurrencies.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Shrikant-AI/Portfolio/tree/main" target="_blank" rel="noreferrer"><img src={portfolio} className="zoom" alt="thumbnail" width="100%" height="55%"/></a>
                <a href="https://github.com/Shrikant-AI/Portfolio/tree/main" target="_blank" rel="noreferrer"><h2>Portfolio</h2></a>
                <p>Created a responsive portfolio application using React, TypeScript, SCSS, and Material UI with reusable components, smooth navigation, responsive layouts, and an EmailJS-powered contact form to showcase my work and professional profile.</p>
            </div>

        </div>
    </div>
    );
}

export default Project;