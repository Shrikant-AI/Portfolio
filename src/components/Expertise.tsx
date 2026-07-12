import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSalesforce, faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const salesforceStack = [
    "Salesforce Administration",
    "Flow Builder",
    "Validation Rules",
    "Reports & Dashboards",
    "SOQL",
    "Apex",
    "Triggers",
    "Integration (REST/SOAP)",
    "Lightning Web Components (LWC)"
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
                    <p> Experienced in building scalable Salesforce solutions   using both declarative 
                        and programmatic approaches. Skilled in automating business processes, 
                        developing Apex logic, creating Lightning components, and integrating 
                        external systems to deliver efficient enterprise applications.</p>
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
                    <p> Passionate about creating modern, responsive, and user-friendly interfaces 
                        using React and contemporary web technologies. Focused on performance, 
                        clean UI/UX, and building seamless user experiences across devices.</p>
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
                    <p>Currently learning the after application built process, how to set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
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