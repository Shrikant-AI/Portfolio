import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Education() {
  return (
    <div id="education">
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2021 - June 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">MET's Institute of Engineering, Nashik</h4>
            <p>
              Specialization in Artificial Intelligence & Data Science<br></br>(Uni - SPPU)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2019 - June 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">11<sup>th</sup> - 12<sup>th</sup></h3>
            <h4 className="vertical-timeline-element-subtitle">KTHM Collage Nashik, Maharashtra</h4>
            <p>
              Physics, Chemistry, Mathematics, Biology <br></br>(MSBSHSE - HSC)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2014 - June 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">5<sup>th</sup> to 10<sup>th</sup></h3>
            <h4 className="vertical-timeline-element-subtitle">K. K. Wagh Vidhyabhavan Niphad, Maharashtra</h4>
            <p>
              Preliminary Education - Semi English Medium <br></br>(MSBSHSE - SSC)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2010 - May 2014"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">1<sup>st</sup> to 4<sup>th</sup></h3>
            <h4 className="vertical-timeline-element-subtitle">Z. P. School Shinde, Maharashtra</h4>
            <p>
              Preliminary Education
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;