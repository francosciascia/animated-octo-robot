import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Support from './components/Support';
import About from './components/About';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Stats />
      <Support />
      <About />
      <Team />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
