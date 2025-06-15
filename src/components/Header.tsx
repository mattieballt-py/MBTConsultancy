import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <div className="logo-icon">MB</div>
          <span className="logo-text">MBT Consultancy</span>
        </Link>
        
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/contact" className="nav-link contact-button">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
