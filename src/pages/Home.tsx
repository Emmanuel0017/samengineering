import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import AboutSnippet from '../components/AboutSnippet';
import ContactCTA from '../components/ContactCTA';
import CoreValues from '../components/CoreValues';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <CoreValues />
      <Services />
      <Projects />
      <AboutSnippet />
      <ContactCTA />
    </div>
  );
};

export default Home;