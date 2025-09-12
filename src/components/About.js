import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-photo" role="img" aria-label="Happy donors"></div>
        <div className="about-copy raised fit">
          <h2>About Us</h2>
          <p>
            The legal definition of a charitable organization varies between countries and states. 
            The regulation, the tax treatment, and the way in which charity law affects charitable 
            organizations also vary.
          </p>
          <a className="btn link dark" href="#">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default About;
