import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <motion.div 
          className="not-found-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for doesn't exist or has been moved.</p>
          <Link to="/" className="btn btn-primary">Return to Homepage</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;