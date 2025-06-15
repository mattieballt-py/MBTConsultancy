<<<<<<< HEAD
import { Link } from 'react-router-dom';
import './Footer.css';
=======

import React from 'react';
>>>>>>> b7aa81965b92a1da9fc41714ad736df98463a09b

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MBT Consultancy</h3>
            <p>
              Leading robotics and mechatronics engineering solutions. 
              Transforming complex challenges into innovative automation systems.
            </p>
            <div className="social-links">
              <a href="https://linkedin.com/in/mattieball" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com/mbtconsultancy" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://github.com/mattieballt-py" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services#robotics">Robotics Engineering</Link></li>
              <li><Link to="/services#mechatronics">Mechatronics Design</Link></li>
              <li><Link to="/services#automation">Automation Solutions</Link></li>
              <li><Link to="/services#ai">AI Integration</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 MBT Consultancy. All rights reserved. | Engineered by Mattie Ball</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
