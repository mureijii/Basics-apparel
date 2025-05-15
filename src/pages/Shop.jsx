import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';
import { formatCategory } from '../utils/helpers';
import '../styles/Shop.css';

const Shop = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(categoryName || 'all');
  
  const categories = [
    { name: 'All Products', slug: 'all' },
    { name: 'T-Shirts', slug: 't-shirts' },
    { name: 'Sweatshirts', slug: 'sweatshirts' },
    { name: 'Hoodies', slug: 'hoodies' },
    { name: 'Caps', slug: 'caps' },
    { name: 'Phone Cases', slug: 'phone-cases' },
    { name: 'Tote Bags', slug: 'tote-bags' },
  ];

  useEffect(() => {
    if (categoryName) {
      setActiveCategory(categoryName);
      setProducts(getProductsByCategory(categoryName));
    } else {
      setActiveCategory('all');
      setProducts(getProductsByCategory());
    }
  }, [categoryName]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      setProducts(getProductsByCategory());
    } else {
      setProducts(getProductsByCategory(category));
    }
  };

  return (
    <div className="shop">
      <div className="container">
        <motion.div 
          className="shop-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>{activeCategory === 'all' ? 'Shop All Products' : formatCategory(activeCategory)}</h1>
        </motion.div>
        
        <div className="category-filter">
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category.slug}
                className={`category-button ${activeCategory === category.slug ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.slug)}
              >
                {category.name}
                {activeCategory === category.slug && (
                  <motion.div 
                    className="active-indicator" 
                    layoutId="activeCategory"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="products-container"
          >
            {products.length > 0 ? (
              <div className="products-grid">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="no-products">
                <p>No products found in this category.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Shop;