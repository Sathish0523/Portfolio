import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

// Animation variants for Skills section
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

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const skillItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skillCategories = [
    {
      id: "programming",
      title: "Programming & Scripting",
      skills: ["Python", "Java", "JavaScript", "TypeScript"],
      color: "#00ff88",
      icon: "💻"
    },
    {
      id: "frameworks",
      title: "Frameworks & Libraries", 
      skills: ["Django", "Django REST Framework", "React", "Node.js"],
      color: "#8a2be2",
      icon: "⚛️"
    },
    {
      id: "databases",
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
      color: "#ff6b6b",
      icon: "🗄️"
    },
    {
      id: "devops",
      title: "DevOps & Tools",
      skills: ["Git / GitHub", "Docker", "Postman", "Swagger"],
      color: "#4ecdc4",
      icon: "🔧"
    },
    {
      id: "practices",
      title: "Software Engineering",
      skills: ["RESTful API Design", "Scalable Backend", "Unit Testing", "Agile"],
      color: "#ffd93d",
      icon: "⚙️"
    },
    {
      id: "soft",
      title: "Soft Skills",
      skills: ["Team Leadership", "Collaboration", "Problem Solving", "Communication"],
      color: "#ff9ff3",
      icon: "🤝"
    }
  ];

  return (
    <motion.section 
      id="skills" 
      className="skills-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="skills-container">
        <motion.div 
          className="skills-header"
          variants={headerVariants}
        >
          <h2 className="skills-title">Skills & Technologies</h2>
          <p className="skills-subtitle">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </motion.div>
        
        <motion.div 
          className="skills-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.id}
              className={`skill-card ${activeSkill === category.id ? 'active' : ''}`}
              variants={cardVariants}
              onMouseEnter={() => setActiveSkill(category.id)}
              onMouseLeave={() => setActiveSkill(null)}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="skill-card-header">
                <motion.div 
                  className="skill-icon"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="category-title" style={{ color: category.color }}>
                  {category.title}
                </h3>
              </div>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex} 
                    className="skill-item"
                    variants={skillItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4,
                      delay: skillIndex * 0.1
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      x: 10,
                      color: category.color
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="skill-card-glow" 
                style={{ '--category-color': category.color }}
                animate={activeSkill === category.id ? {
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.1, 1]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: activeSkill === category.id ? Infinity : 0,
                  ease: "easeInOut"
                }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
