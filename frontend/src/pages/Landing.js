import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  PlayIcon, 
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Landing = () => {
  const features = [
    {
      icon: <CodeBracketIcon style={{ height: '24px', width: '24px' }} />,
      title: 'Real-time Code Execution',
      description: 'Write JavaScript code and see results instantly'
    },
    {
      icon: <PlayIcon style={{ height: '24px', width: '24px' }} />,
      title: 'Multiple Languages',
      description: 'Support for JavaScript, React, and HTML'
    },
    {
      icon: <SparklesIcon style={{ height: '24px', width: '24px' }} />,
      title: 'Save & Share',
      description: 'Save your code snippets and access them anytime'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* Navigation */}
      <nav style={{ 
        padding: 'var(--spacing-md) var(--spacing-xl)', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: '1px solid var(--border-primary)'
      }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <div style={{ 
            height: '40px', 
            width: '40px', 
            backgroundColor: 'var(--color-primary)', 
            borderRadius: 'var(--radius-md)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            marginRight: 'var(--spacing-sm)'
          }}>
            <CodeBracketIcon style={{ height: '24px', width: '24px', color: 'var(--text-primary)' }} />
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>
            CodeEditor
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'flex', gap: 'var(--spacing-md)' }}
        >
          <Link
            to="/login"
            className="btn btn-secondary"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="btn btn-primary"
          >
            Get Started
          </Link>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section style={{ 
        padding: 'var(--spacing-2xl) var(--spacing-xl)', 
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: '800', 
            color: 'var(--text-primary)',
            marginBottom: 'var(--spacing-lg)',
            lineHeight: '1.2'
          }}>
            Write, Run, and
            <span style={{ color: 'var(--color-primary)' }}> Save Code</span>
          </h1>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-secondary)', 
            marginBottom: 'var(--spacing-xl)',
            maxWidth: '600px',
            margin: '0 auto var(--spacing-xl)'
          }}>
            Experience the power of real-time code execution. Write JavaScript, React, and HTML code with instant feedback and professional IDE features.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link
              to="/register"
              className="btn btn-primary"
              style={{ fontSize: '1.125rem', padding: 'var(--spacing-md) var(--spacing-xl)' }}
            >
              Start Coding Now
              <ArrowRightIcon style={{ height: '20px', width: '20px', marginLeft: 'var(--spacing-sm)' }} />
            </Link>
            
            <button
              className="btn btn-secondary"
              style={{ fontSize: '1.125rem', padding: 'var(--spacing-md) var(--spacing-xl)' }}
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section 
        id="features"
        style={{ 
          padding: 'var(--spacing-2xl) var(--spacing-xl)',
          backgroundColor: 'var(--bg-secondary)'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}
          >
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: 'var(--text-primary)',
              marginBottom: 'var(--spacing-lg)'
            }}>
              Why Choose CodeEditor?
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Professional-grade code editor with powerful features for developers
            </p>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: 'var(--spacing-xl)',
            marginTop: 'var(--spacing-xl)'
          }}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
                style={{ textAlign: 'center' }}
              >
                <div style={{ 
                  height: '60px', 
                  width: '60px', 
                  backgroundColor: 'var(--color-primary)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto var(--spacing-lg)',
                  color: 'var(--text-primary)'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '600', 
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--spacing-md)'
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
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

export default Landing; 