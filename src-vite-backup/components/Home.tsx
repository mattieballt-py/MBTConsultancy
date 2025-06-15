import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Innovative Robotics & Mechatronics Solutions</h1>
          <p>Transforming complex challenges into elegant automation systems</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
            <Link to="/projects" className="btn btn-secondary">View Projects</Link>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Robotics Engineering</h3>
              <p>Custom robotic solutions for industrial and commercial applications</p>
            </div>
            <div className="service-card">
              <h3>Mechatronics Design</h3>
              <p>Integrated mechanical and electronic systems for optimal performance</p>
            </div>
            <div className="service-card">
              <h3>Automation Solutions</h3>
              <p>End-to-end automation systems to streamline your operations</p>
            </div>
            <div className="service-card">
              <h3>AI Integration</h3>
              <p>Smart systems powered by cutting-edge artificial intelligence</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About MBT Consultancy</h2>
              <p>
                We specialize in creating innovative robotics and mechatronics solutions 
                that drive efficiency and productivity. Our team of experts combines 
                technical expertise with creative problem-solving to deliver 
                cutting-edge automation systems.
              </p>
              <Link to="/about" className="btn btn-secondary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Transform Your Operations?</h2>
          <p>Let's discuss how our solutions can benefit your business</p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 