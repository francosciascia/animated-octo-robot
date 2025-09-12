import React from 'react';

const Header = () => {
  return (
    <header className="site-header split-bg">
      <div className="container header-inner">
        <a className="brand" href="#" aria-label="Inicio">Ta</a>
        <nav className="nav with-dots">
          <a href="#about">About Us</a>
          <a href="#campaign">Campaign</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
