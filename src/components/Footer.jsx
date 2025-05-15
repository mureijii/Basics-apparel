import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3>Basics</h3>
          <p className="footer-description">
            Laid-Back Looks. Loud Intent. Casual wear that speaks for itself: easy to style, comfortable to wear, and always real.
          </p>
        </div>
        
        <div className="footer-section">
          <h3>Shop</h3>
          <ul className="footer-links">
            <li><Link to="/category/t-shirts">T-Shirts</Link></li>
            <li><Link to="/category/sweatshirts">Sweatshirts</Link></li>
            <li><Link to="/category/hoodies">Hoodies</Link></li>
            <li><Link to="/category/caps">Caps</Link></li>
            <li><Link to="/category/phone-cases">Phone Cases</Link></li>
            <li><Link to="/category/tote-bags">Tote Bags</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Company</h3>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/shipping">Shipping & Returns</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <div className="contact-info">
            <p><FaPhone /> <a href="tel:+254719478955">+254 719 478 955</a></p>
            <p>
              <FaEnvelope /> 
              <a href="mailto:basicsapparelke@gmail.com">basicsapparelke@gmail.com</a>
            </p>
          </div>
          <div className="social-links">
            <a href="https://instagram.com/basicsapparel" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/basicsapparel" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://facebook.com/basicsapparel" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Basics Apparel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;