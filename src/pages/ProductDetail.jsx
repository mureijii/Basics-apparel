import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { useCart } from '../context/CartContext';
import { getProductById } from '../data/products';
import { formatPrice } from '../utils/helpers';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = getProductById(productId);
  
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const { addToCart } = useCart();
  
  if (!product) {
    return (
      <div className="container error-container">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/shop')} className="btn btn-primary">
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.sizes.length > 0 && !selectedSize) {
      toast.error('Please select a size');
      return;
    }
    
    const productWithSize = {
      ...product,
      selectedSize
    };
    
    addToCart(productWithSize, quantity);
    toast.success(`${product.name} added to cart!`);
  };

  const handleQuantityChange = (amount) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-detail-grid">
          <div className="product-images">
            <motion.div 
              className="main-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={currentImageIndex}
            >
              <img src={product.images[currentImageIndex]} alt={product.name} />
            </motion.div>
            
            <div className="image-thumbnails">
              {product.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={image} alt={`${product.name} view ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="product-info"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="product-title">{product.name}</h1>
            <p className="product-price">{formatPrice(product.price)}</p>
            <div className="product-description">
              <p>{product.description}</p>
            </div>
            
            {product.sizes && product.sizes.length > 0 && (
              <div className="product-sizes">
                <h3>Size</h3>
                <div className="size-options">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="product-quantity">
              <h3>Quantity</h3>
              <div className="quantity-selector">
                <button 
                  className="quantity-btn" 
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity === 1}
                >
                  -
                </button>
                <span className="quantity">{quantity}</span>
                <button 
                  className="quantity-btn" 
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="product-actions">
              <button 
                className="btn btn-primary add-to-cart"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;