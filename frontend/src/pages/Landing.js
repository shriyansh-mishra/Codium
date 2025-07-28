import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { 
  CodeBracketIcon, 
  SparklesIcon,
  ArrowRightIcon,
  BoltIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';
import { FaGithub, FaJava, FaPython, FaCode, FaCodeBranch } from 'react-icons/fa';

// Add this CSS to your index.css or as a style tag in the component:
// .marquee-container { overflow: hidden; width: 100%; position: relative; height: 3rem; }
// .marquee-text { display: inline-block; white-space: nowrap; font-size: 2rem; font-weight: 600; color: var(--orange); position: absolute; left: 100%; animation: none; }
// .marquee-animate { animation: marquee-left 6s linear 1; }
// @keyframes marquee-left { from { left: 100%; } to { left: -100%; } }

const Landing = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    });
  }, [controls]);

  const features = [
    {
      icon: <BoltIcon style={{ height: '24px', width: '24px' }} />,
      title: 'Lightning Fast',
      description: 'Real-time code execution with instant feedback'
    },
    {
      icon: <CpuChipIcon style={{ height: '24px', width: '24px' }} />,
      title: 'Multi-Language Support',
      description: 'JavaScript, Python, Java, C++, C#, PHP, Ruby, Go, Rust and more'
    },
    {
      icon: <SparklesIcon style={{ height: '24px', width: '24px' }} />,
      title: 'Save & Share',
      description: 'Store your snippets and share with others'
    }
  ];

  // SVG logos for languages (official colors)
  const langList = [
    { name: 'JavaScript', logo: <svg width="24" height="24" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#F7DF1E"/><text x="7" y="22" fontSize="16" fontWeight="bold" fill="#222">JS</text></svg> },
    { name: 'TypeScript', logo: <svg width="24" height="24" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#3178C6"/><text x="4" y="22" fontSize="16" fontWeight="bold" fill="#fff">TS</text></svg> },
    { name: 'Python', logo: <svg width="24" height="24" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#306998"/><g><circle cx="10" cy="12" r="2" fill="#FFD43B"/><circle cx="22" cy="20" r="2" fill="#FFD43B"/></g></svg> },
    { name: 'C#', logo: <svg width="24" height="24" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#512BD4"/><text x="7" y="22" fontSize="16" fontWeight="bold" fill="#fff">C#</text></svg> },
    { name: 'C++', logo: <svg width="24" height="24" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#00599C"/><text x="4" y="22" fontSize="16" fontWeight="bold" fill="#fff">C++</text></svg> },
    { name: 'Java', logo: <svg width="24" height="24" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#fff"/><text x="4" y="22" fontSize="16" fontWeight="bold" fill="#007396">Java</text></svg> },
    { name: 'JSON', logo: <svg width="24" height="24" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#292929"/><text x="7" y="22" fontSize="16" fontWeight="bold" fill="#FFD43B">&#123;&#125;</text></svg> },
    { name: 'HTML', logo: <svg width="24" height="24" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#E44D26"/><text x="4" y="22" fontSize="16" fontWeight="bold" fill="#fff">&lt;/&gt;</text></svg> },
    { name: 'PHP', logo: <svg width="24" height="24" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#777BB4"/><text x="4" y="22" fontSize="16" fontWeight="bold" fill="#fff">PHP</text></svg> },
    { name: 'YAML', logo: <svg width="24" height="24" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#6E6E6E"/><text x="4" y="22" fontSize="16" fontWeight="bold" fill="#fff">!</text></svg> },
    { name: 'Markdown', logo: <svg width="24" height="24" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#24292F"/><text x="4" y="22" fontSize="16" fontWeight="bold" fill="#fff">↓</text></svg> },
    { name: 'Powershell', logo: <svg width="24" height="24" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#012456"/><text x="4" y="22" fontSize="16" fontWeight="bold" fill="#00BFFF">&gt;_</text></svg> },
  ];

  const CLogo = (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="16,3 29,10.5 29,25.5 16,33 3,25.5 3,10.5" fill="#283593"/>
      <text x="16" y="22" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">C</text>
    </svg>
  );
  const CppLogo = (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="16,3 29,10.5 29,25.5 16,33 3,25.5 3,10.5" fill="#00599C"/>
      <text x="16" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">C++</text>
    </svg>
  );
  const mainLangList = [
    {
      name: "C",
      logo: CLogo
    },
    {
      name: "C++",
      logo: CppLogo
    },
    {
      name: "Java",
      logo: <FaJava size={24} color="#007396" />
    },
    {
      name: "Python",
      logo: <FaPython size={24} color="#306998" />
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>

      {/* Hero Section */}
      <section style={{ 
        padding: 'var(--spacing-2xl) var(--spacing-xl)', 
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255, 107, 53, 0.13) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: 0
          }}
        />
        
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(255, 179, 133, 0.13) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: 0
          }}
        />

        {/* Additional Background Ripples */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            top: '30%',
            right: '30%',
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, rgba(255, 107, 53, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: 0
          }}
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            top: '70%',
            left: '20%',
            width: '80px',
            height: '80px',
            background: 'radial-gradient(circle, rgba(255, 179, 133, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: 0
          }}
        />

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            top: '20%',
            right: '5%',
            width: '60px',
            height: '60px',
            background: 'radial-gradient(circle, rgba(255, 107, 53, 0.06) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: 0
          }}
        />

        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: 'var(--spacing-2xl)',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                fontWeight: '800', 
                color: 'var(--text-primary)',
                marginBottom: 'var(--spacing-lg)',
                lineHeight: '1.1'
              }}
            >
              Write, Run, and
              <br />
              <span style={{ 
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Save Code
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ 
                fontSize: '1.25rem', 
                color: 'var(--text-secondary)', 
                marginBottom: 'var(--spacing-xl)',
                lineHeight: '1.6'
              }}
            >
              Experience the power of real-time code execution. Write code in multiple programming-language with instant feedback and professional IDE features.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/register"
                  className="btn btn-primary"
                                  style={{ 
                  fontSize: '1.125rem', 
                  padding: 'var(--spacing-md) var(--spacing-xl)',
                  boxShadow: '0 4px 20px rgba(255, 107, 53, 0.3)'
                }}
                >
                  Start Coding Now
                  <ArrowRightIcon style={{ height: '20px', width: '20px', marginLeft: 'var(--spacing-sm)' }} />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  className="btn btn-secondary"
                  style={{ fontSize: '1.125rem', padding: 'var(--spacing-md) var(--spacing-xl)' }}
                  onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ 
              position: 'relative',
              perspective: '1000px'
            }}
          >
            {/* Big Ripple Behind SVG */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(255, 107, 53, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: -1
              }}
            />
            <motion.div
              animate={controls}
              style={{
                position: 'relative',
                filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
              }}
            >
              {/* Hero Image */}
              <div style={{
                width: '100%',
                height: '400px',
                background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-primary)',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <svg width="100%" height="100%" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Background */}
                  <rect width="600" height="400" fill="#1e1e1e"/>
                  
                  {/* Code Editor Window */}
                  <rect x="50" y="50" width="500" height="300" rx="8" fill="#252526" stroke="#3c3c3c" stroke-width="2"/>
                  
                  {/* Title Bar */}
                  <rect x="50" y="50" width="500" height="30" rx="8" fill="#2d2d30"/>
                  <circle cx="70" cy="65" r="6" fill="#f44747"/>
                  <circle cx="90" cy="65" r="6" fill="#ce9178"/>
                  <circle cx="110" cy="65" r="6" fill="#4ec9b0"/>
                  
                  {/* Sidebar */}
                  <rect x="50" y="80" width="120" height="270" fill="#1e1e1e"/>
                  <rect x="60" y="90" width="100" height="20" rx="4" fill="#007acc"/>
                  <rect x="60" y="120" width="80" height="15" rx="3" fill="#3c3c3c"/>
                  <rect x="60" y="145" width="90" height="15" rx="3" fill="#3c3c3c"/>
                  <rect x="60" y="170" width="70" height="15" rx="3" fill="#3c3c3c"/>
                  
                  {/* Code Area */}
                  <rect x="190" y="80" width="360" height="270" fill="#1e1e1e"/>
                  
                  {/* Line Numbers */}
                  <rect x="190" y="80" width="40" height="270" fill="#1e1e1e"/>
                  <text x="210" y="100" fill="#858585" font-family="monospace" font-size="12">1</text>
                  <text x="210" y="120" fill="#858585" font-family="monospace" font-size="12">2</text>
                  <text x="210" y="140" fill="#858585" font-family="monospace" font-size="12">3</text>
                  <text x="210" y="160" fill="#858585" font-family="monospace" font-size="12">4</text>
                  <text x="210" y="180" fill="#858585" font-family="monospace" font-size="12">5</text>
                  <text x="210" y="200" fill="#858585" font-family="monospace" font-size="12">6</text>
                  <text x="210" y="220" fill="#858585" font-family="monospace" font-size="12">7</text>
                  <text x="210" y="240" fill="#858585" font-family="monospace" font-size="12">8</text>
                  
                  {/* Code Content - Multi Language */}
                  <text x="250" y="100" fill="#569cd6" font-family="monospace" font-size="12"># Python</text>
                  <text x="250" y="120" fill="#d4d4d4" font-family="monospace" font-size="12">print("Hello, World!")</text>
                  
                  <text x="250" y="150" fill="#569cd6" font-family="monospace" font-size="12">// JavaScript</text>
                  <text x="250" y="170" fill="#d4d4d4" font-family="monospace" font-size="12">console.log("Hello");</text>
                  
                  <text x="250" y="200" fill="#569cd6" font-family="monospace" font-size="12">// Java</text>
                  <text x="250" y="220" fill="#d4d4d4" font-family="monospace" font-size="12">System.out.println("Hello");</text>
                  
                  {/* Cursor */}
                  <rect x="520" y="118" width="2" height="16" fill="#007acc">
                    <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
                  </rect>
                  
                  {/* Output Panel */}
                  <rect x="50" y="370" width="500" height="20" fill="#1e1e1e"/>
                  <text x="60" y="385" fill="#4ec9b0" font-family="monospace" font-size="12">Output: Hello, World! (Python/JS/Java)</text>
                  
                  {/* Glowing Effect */}
                  <defs>
                    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
                      <stop offset="0%" stop-color="#007acc" stop-opacity="0.3"/>
                      <stop offset="100%" stop-color="#007acc" stop-opacity="0"/>
                    </radialGradient>
                  </defs>
                  <circle cx="300" cy="200" r="150" fill="url(#glow)">
                    <animate attributeName="r" values="150;160;150" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Floating Elements */}
                  <circle cx="100" cy="150" r="3" fill="#007acc">
                    <animate attributeName="cy" values="150;140;150" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="500" cy="250" r="2" fill="#4ec9b0">
                    <animate attributeName="cy" values="250;240;250" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="450" cy="100" r="2" fill="#ce9178">
                    <animate attributeName="cy" values="100;90;100" dur="1.8s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>
            </motion.div>

            {/* Floating Code Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
                              style={{
                  position: 'absolute',
                  top: '10%',
                  right: '10%',
                  background: 'rgba(255, 107, 53, 0.1)',
                  border: '1px solid rgba(255, 107, 53, 0.3)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--spacing-sm)',
                  fontSize: '0.75rem',
                  color: 'var(--color-primary)',
                  fontFamily: 'monospace'
                }}
            >
              {'{ code }'}
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -3, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
                              style={{
                  position: 'absolute',
                  bottom: '20%',
                  left: '5%',
                  background: 'rgba(0, 212, 170, 0.1)',
                  border: '1px solid rgba(0, 212, 170, 0.3)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--spacing-sm)',
                  fontSize: '0.75rem',
                  color: 'var(--color-success)',
                  fontFamily: 'monospace'
                }}
            >
              {'< / >'}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features"
        style={{ 
          padding: 'var(--spacing-2xl) var(--spacing-xl)',
          backgroundColor: 'var(--bg-secondary)'
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          minHeight: '220px',
          gap: 'var(--spacing-2xl)'
        }}>
          {/* Left: Large Text */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <span style={{
              fontSize: '2.2rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '0.5px',
              lineHeight: 1.2
            }}>
              Supports multiple languages
            </span>
          </div>
          {/* Right: Main Language Badges Grid */}
          <div style={{
            flex: 2,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: 'var(--spacing-lg) var(--spacing-xl)',
            justifyItems: 'start',
            alignItems: 'center',
            padding: 'var(--spacing-lg) 0',
            width: '100%'
          }}>
            {mainLangList.map((lang) => (
              <div key={lang.name} className={`lang-badge ${lang.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`}>
                {lang.logo}
                <span>{lang.name}</span>
              </div>
            ))}
            <div className="lang-badge more">
              <span style={{ fontSize: '1.5rem' }}>...</span>
              <span>and more coming</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: 'var(--spacing-2xl) var(--spacing-xl)',
        textAlign: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '600px', margin: '0 auto' }}
        >
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            color: 'var(--text-primary)',
            marginBottom: 'var(--spacing-lg)'
          }}>
            Ready to Start Coding?
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: 'var(--text-secondary)',
            marginBottom: 'var(--spacing-xl)'
          }}>
            Join thousands of developers who trust CodeEditor for their coding needs
          </p>
          <Link
            to="/register"
            className="btn btn-primary"
            style={{ fontSize: '1.25rem', padding: 'var(--spacing-md) var(--spacing-xl)' }}
          >
            Get Started for Free
            <ArrowRightIcon style={{ height: '24px', width: '24px', marginLeft: 'var(--spacing-sm)' }} />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: 'var(--spacing-xl)', 
        borderTop: '1px solid var(--border-primary)',
        textAlign: 'center',
        color: 'var(--text-tertiary)'
      }}>
        <p>&copy; 2024 CodeEditor. Built with ❤️ for developers.</p>
      </footer>
    </div>
  );
};

const badgeStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5em',
  background: 'var(--bg-tertiary)',
  color: 'var(--color-primary)',
  fontWeight: 600,
  fontSize: '1rem',
  borderRadius: 'var(--radius-lg)',
  padding: '0.5em 1em',
  boxShadow: '0 2px 8px 0 rgba(255,107,53,0.08)',
  letterSpacing: '0.2px',
  minWidth: '70px',
  justifyContent: 'center'
};

export default Landing; 