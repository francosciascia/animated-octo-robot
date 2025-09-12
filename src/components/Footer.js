import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        <div className="col newsletter-col">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter to get more information</p>
          <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
            <input type="email" aria-label="Email" placeholder="Email" />
            <button className="btn small sharp">Subscribe</button>
          </form>
        </div>
        <div className="col nav-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#campaign">Campaign</a></li>
            <li><a href="#team">Team</a></li>
          </ul>
        </div>
        <div className="col about-col">
          <h4>About Us</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Address</a></li>
          </ul>
        </div>
        <div className="col help-col">
          <h4>Help</h4>
          <ul>
            <li><a href="#">Donor Guide</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">We Are Hiring</a></li>
            <li><a href="#">Returns</a></li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="section-divider"></div>
      </div>
    </footer>
  );
};

export default Footer;
