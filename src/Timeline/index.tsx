import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import config from './config'
import 'react-vertical-timeline-component/style.min.css';
import './overrides.css'
import style from './Timeline.module.scss'

const Timeline: React.FC = () => {
  return (
    <VerticalTimeline>
      {
        config.map(({ iconSrc, title, company, start, end, description, link }) => (
          <VerticalTimelineElement
            key={title + company}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(135deg, #1e5799 0%,#2989d8 50%,#207cca 100%,#7db9e8 100%)', color: '#fff', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '7px solid #1e5799' }}
            date={`${start} - ${end}`}
            icon={
              <a
                target="_blank"
                rel="noopener noreferrer" href={link} className={style.Timeline__icon}>
                <img alt={company} src={iconSrc} />
              </a>}
          >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{company}</h4>
            {
              description && <p>
                {description}
              </p>
            }
          </VerticalTimelineElement>
        ))
      }
    </VerticalTimeline>
  )
}

export default Timeline