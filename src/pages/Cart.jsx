import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import { FaTrash, FaArrowLeft } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/helpers';
import '../styles/Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      toast.success('Order placed successfully!');
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <div className="container">
          <motion.div 
            className="empty-cart-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Your Cart is Empty</h1>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <Link to="/shop" className="btn btn-primary">
              <FaArrowLeft className="icon-left" /> Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <motion.h1 
          className="cart-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Cart
        </motion.h1>
        
        <div className="cart-content">
          <div className="cart-items">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div 
                  key={item.id}
                  className="cart-item"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="item-image">
                    <img src={item.images[0]} alt={item.name} />
                  </div>
                  
                  <div className="item-details">
                    <h3>
                      <Link to={`/product/${item.id}`}>{item.name}</Link>
                    </h3>
                    <p className="item-price">{formatPrice(item.price)}</p>
                    {item.selectedSize && (
                      <p className="item-size">Size: {item.selectedSize}</p>
                    )}
                    
                    <div className="item-controls">
                      <div className="quantity-control">
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                          +
                        </button>
                      </div>
                      
                      <button 
                        className="remove-item" 
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  
                  <div className="item-subtotal">
                    <span>{formatPrice(item.price * item.quantity)}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <motion.div 
            className="cart-summary"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Order Summary</h2>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>{formatPrice(getCartTotal())}</span>
            </div>
            
            <div className="summary-row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            
            <div className="summary-total">
              <span>Total</span>
              <span>{formatPrice(getCartTotal())}</span>
            </div>
            
            <button 
              className="btn btn-primary checkout-btn"
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
            </button>
            
            <Link to="/shop" className="continue-shopping">
              <FaArrowLeft className="icon-left" /> Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;