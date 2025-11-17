import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

// Animation variants for About section
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

const cardVariants = {
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="about-container">
        <div className="about-content">
          <motion.div 
            className="about-header"
            variants={cardVariants}
          >
            <h2 className="about-title">
              About <span className="title-highlight">Me</span>
            </h2>
            <div className="title-underline"></div>
          </motion.div>

          {/* Two Column Layout: Professional Journey & Education */}
          <motion.div 
            className="two-column-section"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Professional Journey - Left */}
            <motion.div 
              className="about-section-card column-left"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="section-header">
                <motion.div 
                  className="section-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  💼
                </motion.div>
                <h3 className="section-title">Professional Journey</h3>
              </div>
              <div className="current-role">
                <span className="role-text">Currently, I'm a </span>
                <span className="role-highlight">Software Development Engineer II</span>
                <span className="role-text"> at </span>
                <span className="company-highlight">
                  {/* <img 
                    src={require('../images/companylogo.png')} 
                    alt="Company Logo" 
                    className="company-logo"
                  /> */}
                  FluentX
                </span>
              </div>
              <div className="skills-badges">
                <span className="skill-badge">Django Rest Framework</span>
                <span className="skill-badge">Python</span>
                <span className="skill-badge">REST APIs</span>
                <span className="skill-badge">Backend Systems</span>
              </div>
              <p className="section-description">
                What excites me most about coding is solving scalability challenges and designing efficient APIs 
                that can handle millions of requests. I love building robust backend systems that power 
                exceptional user experiences.
              </p>
            </motion.div>

            {/* Education - Right */}
            <motion.div 
              className="about-section-card column-right"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="section-header">
                <motion.div 
                  className="section-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  🎓
                </motion.div>
                <h3 className="section-title">Education</h3>
              </div>
              <div className="education-item">
                <div className="education-degree">B.E Electronics And Communication Engineering</div>
                <div className="education-institution">SRM Easwari Engineering College</div>
                <div className="education-achievement">Graduated with First-Class Distinction</div>
              </div>
              <p className="section-description">
                My engineering foundation has been instrumental in my software career, providing me with 
                strong problem-solving skills, logical thinking, and analytical abilities that I apply 
                daily in backend development.
              </p>
            </motion.div>
          </motion.div>

          {/* Beyond Work
          <motion.div 
            className="about-section-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <div className="section-header">
              <motion.div 
                className="section-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                ⚽
              </motion.div>
              <h3 className="section-title">Beyond Work</h3>
            </div>
            <div className="sports-section">
              <motion.div 
                className="sports-item"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="sport-icon">🏐</span>
                <span className="sport-name">Handball</span>
              </motion.div>
              <motion.div 
                className="sports-item"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="sport-icon">⚽</span>
                <span className="sport-name">Football</span>
              </motion.div>
            </div>
            <p className="section-description">
              Sports have taught me invaluable lessons in teamwork, leadership, and discipline. The 
              strategic thinking and persistence I've developed on the field translate directly into 
              my approach to software engineering challenges.
            </p>
          </motion.div> */}

          {/* Personal Touch */}
          <motion.div 
            className="about-section-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <div className="section-header">
              <motion.div 
                className="section-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                ✨
              </motion.div>
              <h3 className="section-title">Personal Touch</h3>
            </div>
            <p className="section-description">
              I believe in continuous learning, building efficient systems, and collaborating to bring 
              impactful ideas to life. When I'm not coding or playing sports, I enjoy reading about 
              new technologies, exploring different places, and discovering new music.
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="about-cta"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <div className="cta-content">
              <motion.div 
                className="cta-icon"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🤝
              </motion.div>
              <p className="cta-text">
                I'm always open to collaborating on exciting projects or discussing backend engineering 
                challenges. Let's connect and build something amazing together!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
