import React from 'react';
import { motion } from 'framer-motion';
import './WorkExperience.css';

// Animation variants for Work Experience
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

const titleVariants = {
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

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const timelineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const techTagVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const WorkExperience = () => {
  const experiences = [
    {
      company: 'FluentX',
      position: 'Software Development Engineer II',
      duration: 'Mar 2025 – Present',
      location: 'Chennai, Tamil Nadu, India (Remote)',
      employmentType: 'Full-time',
      description: [
        'Designed and developed scalable backend architectures using Django and Django REST Framework, ensuring reliability and performance in production systems.',
        'Built and integrated RESTful APIs, enabling seamless communication between microservices and client applications.',
        'Led a team of developers, driving timely delivery while maintaining high code quality and best practices.',
        'Collaborated with cross-functional teams to translate business requirements into technical solutions.',
        'Focused on code optimization, testing, and deployment automation, improving maintainability and reducing system downtime.',
        'Leveraged Python and Java expertise to solve complex engineering challenges and deliver impactful solutions.'
      ],
      technologies: ['Python', 'Django', 'Django REST Framework', 'Java', 'SQL', 'Git', 'Docker', 'RESTful APIs', 'Microservices'],
      logo: require('../images/companylogo.png')
    }
  ];

  return (
    <motion.section 
      id="experience" 
      className="experience-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="experience-container">
        <div className="experience-content">
          <motion.h2 
            className="experience-title"
            variants={titleVariants}
          >
            💼 Work Experience
          </motion.h2>
          <div className="timeline-container">
            <motion.div 
              className="timeline-line"
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            ></motion.div>
            <div className="experience-list">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="experience-card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="timeline-dot"
                    variants={dotVariants}
                    whileHover={{ 
                      scale: 1.3,
                      boxShadow: "0 0 20px rgba(138, 43, 226, 0.8)"
                    }}
                  ></motion.div>
                  <div className="experience-content-wrapper">
                    <div className="company-info">
                      <motion.img 
                        src={exp.logo} 
                        alt={`${exp.company} Logo`} 
                        className="company-logo"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="company-details">
                        <h3 className="company-name">{exp.company}</h3>
                        <p className="position">{exp.position}</p>
                        <div className="job-meta">
                          <motion.p 
                            className="employment-type"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="icon">💻</span>
                            {exp.employmentType}
                          </motion.p>
                          <motion.p 
                            className="location"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="icon">📍</span>
                            {exp.location}
                          </motion.p>
                          <motion.p 
                            className="duration"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="icon">⏳</span>
                            {exp.duration}
                          </motion.p>
                        </div>
                      </div>
                    </div>
                    <div className="experience-description">
                      <ul className="achievements-list">
                        {exp.description.map((achievement, achIndex) => (
                          <motion.li 
                            key={achIndex} 
                            className="achievement-item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.4,
                              delay: achIndex * 0.1
                            }}
                            whileHover={{ 
                              x: 10,
                              color: "#8a2be2"
                            }}
                          >
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                      <div className="technologies">
                        <h4 className="tech-title">Tech Stack:</h4>
                        <div className="tech-badges">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span 
                              key={techIndex} 
                              className="tech-tag"
                              variants={techTagVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              transition={{ 
                                duration: 0.4,
                                delay: techIndex * 0.05
                              }}
                              whileHover={{ 
                                scale: 1.1,
                                y: -5,
                                boxShadow: "0 5px 15px rgba(138, 43, 226, 0.3)"
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkExperience;
