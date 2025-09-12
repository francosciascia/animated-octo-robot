import React from 'react';

const Hero = () => {
  return (
    <section className="hero split-bg">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 className="display">
            <span>Charity Is An</span>
            <span>Act Of A Soft</span>
            <span>Heart.</span>
          </h1>
          <p>We've spent the last 5 years helping over 25,00000<br/>teams just like yourself create and sustain<br/>successfull online support</p>
          <div className="hero-actions">
            <a className="btn primary sharp" href="#donate">Donate Now</a>
            <button className="btn ghost sharp" aria-label="Learn about us">▶️</button>
          </div>
          <div className="hero-social with-separators lowered more">
            <a href="#">Youtube</a>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
          </div>
        </div>
        <div className="hero-media">
          <div 
            className="hero-photo" 
            role="img" 
            aria-label="Father and son" 
            style={{
              backgroundImage: "url('images/descargar.jpg')",
              backgroundSize: '100% 100%',
              backgroundPosition: 'left bottom',
              transform: 'translate(-43px, 60px)'
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
