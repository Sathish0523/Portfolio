import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

// Animation variants for Contact section
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const contactItemsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const contactItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Contact = () => {
  return (
    <motion.section 
      id="contact" 
      className="contact-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="contact-container">
        <div className="contact-content">
          <motion.h2 
            className="contact-title"
            variants={headerVariants}
          >
            Contact Me
          </motion.h2>
          <motion.div 
            className="contact-description"
            variants={headerVariants}
          >
            <p>
              I'd love to connect! Feel free to reach out for opportunities, collaborations, or just a quick chat.
            </p>
          </motion.div>
          <motion.div 
            className="contact-info"
            variants={contactItemsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              className="contact-item"
              variants={contactItemVariants}
              whileHover={{ 
                scale: 1.05,
                x: 10,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="contact-icon"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.2
                }}
                transition={{ duration: 0.5 }}
              >
                📧
              </motion.div>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <motion.a 
                  href="mailto:sathishmuthuraman2003@gmail.com" 
                  className="contact-link"
                  whileHover={{ 
                    color: "#8a2be2",
                    scale: 1.05
                  }}
                >
                  sathishmuthuraman2003@gmail.com
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div 
              className="contact-item"
              variants={contactItemVariants}
              whileHover={{ 
                scale: 1.05,
                x: 10,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="contact-icon"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.2
                }}
                transition={{ duration: 0.5 }}
              >
                💼
              </motion.div>
              <div className="contact-details">
                <span className="contact-label">LinkedIn</span>
                <motion.a 
                  href="https://www.linkedin.com/in/sathishkumar-muthuraman/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-link"
                  whileHover={{ 
                    color: "#0077b5",
                    scale: 1.05
                  }}
                >
                  linkedin.com/in/sathishkumar-muthuraman
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div 
              className="contact-item"
              variants={contactItemVariants}
              whileHover={{ 
                scale: 1.05,
                x: 10,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="contact-icon"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.2
                }}
                transition={{ duration: 0.5 }}
              >
                🖥️
              </motion.div>
              <div className="contact-details">
                <span className="contact-label">GitHub</span>
                <motion.a 
                  href="https://github.com/Sathish0523" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-link"
                  whileHover={{ 
                    color: "#333",
                    scale: 1.05
                  }}
                >
                  github.com/Sathish0523
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;