import React from "react";
import ExperienceTimer from "./ExperienceTimer";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Career() {
  return (
    <div id="career">
      <div className="items-container">
        <h1>Career History</h1>
        <h4>Total Experience : <ExperienceTimer startDate="2025-01-20T10:00:00" /></h4>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work current-job"
            date="Aug 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Associate Software Professional</h3>
            <h4 className="vertical-timeline-element-subtitle">Dentsu (Pune, India)</h4>
            <p>
              Salesforce Administrator, Developer
            </p>
            <p className="experience">
              <strong>Experience:</strong>{" "}
              <ExperienceTimer startDate="2025-08-01T09:00:00" />
          </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2025 - July 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Apprentice</h3>
            <h4 className="vertical-timeline-element-subtitle">Extentia (Pune, India)</h4>
            <p>
              Salesforce Administrator, Developer Training 
            </p>
            <p className="experience">
              <strong>Experience:</strong> 7 months
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2024 - Feb 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Prodigy Infotech (Remote)</h4>
            <p>
              Front End Developement 
            </p>
            <p className="experience">
              <strong>Experience:</strong> 1 month
            </p>
            
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Career;