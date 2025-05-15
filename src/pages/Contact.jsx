import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="contact">
      <div className="contact-hero">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
        </div>
      </div>
      
      <div className="container">
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Get In Touch</h2>
            <p>
              Have a question about our products? Want to collaborate with us? 
              Or just want to say hello? We'd love to hear from you!
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <FaPhone className="contact-icon" />
                <div>
                  <h3>Phone</h3>
                  <p><a href="tel:+254719478955">+254 719 478 955</a></p>
                </div>
              </div>
              
              <div className="contact-method">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h3>Email</h3>
                  <p><a href="mailto:basicsapparelke@gmail.com">basicsapparelke@gmail.com</a></p>
                </div>
              </div>
              
              <div className="contact-method">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h3>Location</h3>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="contact-method">
                <FaInstagram className="contact-icon" />
                <div>
                  <h3>Instagram</h3>
                  <p><a href="https://instagram.com/basicsapparel" target="_blank" rel="noopener noreferrer">@basicsapparel</a></p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary send-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;