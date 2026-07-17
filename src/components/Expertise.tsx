import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSalesforce, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const salesforceStack = [
    "Salesforce Administration",
    "Apex",
    "Lightning Web Components (LWC)",
    "SOQL",
    "Triggers",
    "Integration (REST/SOAP)"
];

const frontendStack = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Responsive Design",
    "REST APIs",
    "GitHub",
    "Git"
];

const devOps = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faSalesforce} size="3x"/>
                    <h3>Salesforce Admin / Developer</h3>
                    <p> Experienced in designing and developing scalable Salesforce solutions using both declarative and programmatic approaches. Skilled in Apex, Lightning Web Components (LWC), Flows, SOQL, integrations, and automation to deliver efficient enterprise CRM solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {salesforceStack.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Front End Developer</h3>
                    <p> Passionate about building responsive, accessible, and user-friendly web applications using React and modern frontend technologies, with a focus on clean UI, performance, and maintainable code.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {frontendStack.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Currently exploring DevOps practices, including CI/CD pipelines, Docker, cloud deployment, and automation to support efficient application delivery and production releases.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {devOps.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;