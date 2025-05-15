import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="about">
      <div className="about-hero">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Basics
          </motion.h1>
        </div>
      </div>
      
      <div className="container">
        <div className="about-content">
          <motion.section className="about-section" {...fadeIn}>
            <h2>Our Story</h2>
            <p>
              Basics is a clothing brand that embraces laid-back looks with loud intent. Our designs revolve around meaningful words and clean visuals — not to follow trends, but to reflect mood, mindset, and individuality. It's casual wear that speaks for itself: easy to style, comfortable to wear, and always real. Every piece is made to feel like your favorite from day one.
            </p>
          </motion.section>
          
          <motion.section className="about-section" {...fadeIn} transition={{ delay: 0.1 }}>
            <h2>Our Philosophy</h2>
            <p>
              We believe that clothing should be an extension of who you are, not a costume. That's why we focus on creating pieces that feel authentic and personal. Our designs are minimal but meaningful, with just enough detail to make them special.
            </p>
            <p>
              We're not interested in fast fashion or fleeting trends. Instead, we create timeless pieces that you'll want to wear again and again. Quality over quantity. Substance over style. That's the Basics way.
            </p>
          </motion.section>
          
          <motion.section className="about-section" {...fadeIn} transition={{ delay: 0.2 }}>
            <h2>Our Process</h2>
            <p>
              Each design begins with a word or phrase that resonates with us. Something that captures a feeling, a mindset, or a way of being. We then translate that into a visual that's clean, minimal, and impactful.
            </p>
            <p>
              We use high-quality materials and ethical manufacturing processes to ensure that our products are not only beautiful but also built to last. We work with local suppliers and manufacturers whenever possible to reduce our carbon footprint and support our community.
            </p>
          </motion.section>
          
          <motion.section className="about-section" {...fadeIn} transition={{ delay: 0.3 }}>
            <h2>Our Commitment</h2>
            <p>
              We're committed to creating products that are not only beautiful and meaningful but also made with respect for people and the planet. We're constantly looking for ways to reduce our environmental impact and improve our practices.
            </p>
            <p>
              We believe in transparency and honesty in everything we do. We're not perfect, but we're always striving to be better. We welcome feedback and suggestions from our community and are always open to new ideas.
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;