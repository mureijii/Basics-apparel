import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getFeaturedProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';

const Home = () => {
  const featuredProducts = getFeaturedProducts();
  
  const categories = [
    { name: 'T-Shirts', slug: 't-shirts', image: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Sweatshirts', slug: 'sweatshirts', image: 'https://images.pexels.com/photos/5698844/pexels-photo-5698844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Hoodies', slug: 'hoodies', image: 'https://images.pexels.com/photos/7691919/pexels-photo-7691919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Caps', slug: 'caps', image: 'https://images.pexels.com/photos/844867/pexels-photo-844867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Phone Cases', slug: 'phone-cases', image: 'https://images.pexels.com/photos/4841572/pexels-photo-4841572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Tote Bags', slug: 'tote-bags', image: 'https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Laid-Back Looks. Loud Intent.</h1>
            <p>Clean designs that reflect mood, mindset, and individuality.</p>
            <Link to="/shop" className="btn btn-primary">Shop Now</Link>
          </motion.div>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <h2>Shop by Category</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <motion.div 
                className="category-card"
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link to={`/category/${category.slug}`}>
                  <div className="category-image">
                    <img src={category.image} alt={category.name} />
                  </div>
                  <h3>{category.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          <div className="view-all">
            <Link to="/shop" className="btn btn-secondary">View All Products</Link>
          </div>
        </div>
      </section>

      <section className="about-brief">
        <div className="container">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our Story</h2>
            <p>Basics is a clothing brand that embraces laid-back looks with loud intent. Our designs revolve around meaningful words and clean visuals — not to follow trends, but to reflect mood, mindset, and individuality.</p>
            <Link to="/about" className="btn btn-outline">Learn More</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;