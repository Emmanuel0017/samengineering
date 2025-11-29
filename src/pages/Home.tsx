import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import AboutSnippet from '../components/AboutSnippet';
import Testimonials from '../components/Testimonials';
import ContactCTA from '../components/ContactCTA';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <Services />
      <Projects />
      <AboutSnippet />
      <Testimonials />
      <ContactCTA />
    </div>
  );
};

export default Home;