import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to MBT Consultancy</h1>
      <p>Innovative Robotics & Mechatronics Solutions</p>
      <Link to="/contact" className="contact-link">Contact Us</Link>
    </div>
  );
}

export default Home; 