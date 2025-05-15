import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/helpers';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleQuickAdd = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <motion.div 
      className="product-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.images[0]} alt={product.name} />
          <button 
            className="quick-add" 
            onClick={handleQuickAdd}
            aria-label="Add to cart"
          >
            Quick Add
          </button>
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;