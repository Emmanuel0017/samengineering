import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import AboutSnippet from '../components/AboutSnippet';
import ContactCTA from '../components/ContactCTA';
import CoreValues from '../components/CoreValues';
import VideoSlider from '../components/VideoSlider';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <AboutSnippet />
      <VideoSlider />
      <CoreValues />
      <Services />
      <Projects />
      <ContactCTA />
    </div>
  );
};

export default Home;