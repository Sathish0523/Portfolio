import React from 'react';
import './App.css';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Contact from './components/Contact';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};


// Animated background particles component
const AnimatedParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);
  
  return (
    <div className="animated-particles">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
};

// Scroll progress indicator component
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div 
      className="scroll-progress"
      style={{
        width: `${scrollProgress}%`
      }}
      initial={{ width: 0 }}
      animate={{ width: `${scrollProgress}%` }}
      transition={{ duration: 0.1 }}
    />
  );
};

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <AnimatedParticles />
        <ScrollProgress />
        <Navbar />
        <main className="main-content">
          <motion.section 
            id="home" 
            className="home-section"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="home-container">
              <div className="hero-content">
                <motion.div className="hero-text" variants={itemVariants}>
                  <div className="greeting">
                    <span className="hello">Hello! I Am </span>
                    <span className="name">Sathish Kumar</span>
                  </div>
                  <div className="role">
                    <span className="role-text">Software Development Engineer II at</span>
                    <span className="company-name">FluentX</span>
                  </div>
                  <div className="main-headline">
                    <span className="headline-text">Building robust backend systems...</span>
                  </div>
                  <div className="sub-headline">
                    <span className="sub-text">Expert in Django Rest Framework</span>
                  </div>
                </motion.div>
                <motion.div 
                  className="hero-avatar" 
                  variants={itemVariants}
                  animate="animate"
                >
                  <div className="avatar-glow"></div>
                  <div className="avatar-container">
                    <div className="profile-image-container">
                      <img 
                        src={require('./images/mewith.png')} 
                        alt="Sathish Kumar M - Software Development Engineer" 
                        className="profile-image"
                      />
                      {/* <div className="image-overlay"></div> */}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
          <About />
          <WorkExperience />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
