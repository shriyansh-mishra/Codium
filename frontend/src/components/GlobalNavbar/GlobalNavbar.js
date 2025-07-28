import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  UserIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const GlobalNavbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <motion.nav 
      className="navbar-glass"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ 
        padding: 'var(--spacing-md) var(--spacing-xl)', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        fontFamily: 'var(--font-family)',
        height: '80px'
      }}
    >
      {/* Logo and Brand */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <div style={{ 
          height: '40px', 
          width: '40px', 
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', 
          borderRadius: 'var(--radius-lg)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginRight: 'var(--spacing-sm)'
        }}>
          <CodeBracketIcon style={{ height: '24px', width: '24px', color: 'var(--text-primary)' }} />
        </div>
        <span style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-primary)', fontFamily: 'var(--font-family)', letterSpacing: '1px' }}>
          Codium
        </span>
      </motion.div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
        {!isAuthenticated ? (
          // Public navigation
          <>
            <a href="#" className="nav-link active">Home</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="https://github.com/shriyansh-mishra/Codium" className="nav-github" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub style={{ fontSize: '1.7rem', verticalAlign: 'middle' }} />
            </a>
            <Link
              to="/login"
              className="btn btn-secondary navbar-cta-btn"
              style={{ marginLeft: 'var(--spacing-lg)' }}
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="btn btn-primary navbar-cta-btn"
              style={{ marginLeft: 'var(--spacing-md)' }}
            >
              Get Started
            </Link>
          </>
        ) : (
          // Authenticated navigation
          <>
            <Link to="/editor" className="nav-link" style={{ color: location.pathname === '/editor' ? 'var(--color-success)' : 'var(--text-secondary)' }}>
              Codium Editor
            </Link>
            <Link to="/snippets" className="nav-link" style={{ color: location.pathname === '/snippets' ? 'var(--color-success)' : 'var(--text-secondary)' }}>
              My Snippets
            </Link>
            <a href="https://github.com/shriyansh-mishra/Codium" className="nav-github" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub style={{ fontSize: '1.7rem', verticalAlign: 'middle' }} />
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginLeft: 'var(--spacing-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                <UserIcon style={{ height: '16px', width: '16px' }} />
                <span>{user?.name || 'User'}</span>
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-secondary"
                style={{ fontSize: '0.875rem', padding: 'var(--spacing-xs) var(--spacing-md)' }}
              >
                <ArrowRightOnRectangleIcon style={{ height: '16px', width: '16px', marginRight: 'var(--spacing-xs)' }} />
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </motion.nav>
  );
};

export default GlobalNavbar; 