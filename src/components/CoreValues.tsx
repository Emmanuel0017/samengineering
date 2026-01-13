import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faShieldAlt,
  faHandshake,
  faCogs,
  faBullseye,
  faLeaf,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import './CoreValues.css';

const coreValues = [
  {
    title: 'Safety First, Always',
    description:
      'No project is successful unless it is safe. Every installation follows strict safety, regulatory, and professional standards.',
    icon: faShieldAlt,
  },
  {
    title: 'Reliability Builds Trust',
    description:
      'We design, install, and maintain systems that perform when they are needed most — from power lines to production plants.',
    icon: faCogs,
  },
  {
    title: 'Engineering With Purpose',
    description:
      'We solve real problems by reducing downtime, improving efficiency, and supporting long-term performance.',
    icon: faBullseye,
  },
  {
    title: 'Sustainability For The Future',
    description:
      'We integrate solar and energy-efficient systems that reduce costs while protecting the environment.',
    icon: faLeaf,
  },
  {
    title: 'Innovation That Serves People',
    description:
      'We implement smart, user-friendly technologies that are practical, scalable, and reliable.',
    icon: faLightbulb,
  },
  {
    title: 'Excellence in Execution',
    description:
      'Skilled workmanship, quality materials, attention to detail, and professional project management define our work.',
    icon: faCheckCircle,
  },
  {
    title: 'Partnership Over Transactions',
    description:
      'We build long-term relationships through continuous support, maintenance, and system optimization.',
    icon: faHandshake,
  },
];


const CoreValues: React.FC = () => {
    const featuredValue = coreValues[0];
    const otherValues = coreValues.slice(1);
  return (

    <section className="core-values-section">
        <h1 className="core-values-title">Our Core Values</h1>
      <div className="core-values-layout">
        
  <div className="core-value-featured">
    <span className="core-value-icon featured-icon">
      <FontAwesomeIcon icon={featuredValue.icon} />
    </span>

    <div className="core-value-content">
      <h3>{featuredValue.title}</h3>
      <p>{featuredValue.description}</p>
    </div>
  </div>

  <div className="core-values-grid">
    {otherValues.map((value) => (
      <div className="core-value-card" key={value.title}>
        <span className="core-value-icon">
          <FontAwesomeIcon icon={value.icon} />
        </span>

        <div className="core-value-content">
          <h3>{value.title}</h3>
          <p>{value.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

    </section>
  );
};

export default CoreValues;
