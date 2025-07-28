import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login, error, clearError } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    clearError();
  }, [clearError]);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await login(data);
      navigate('/editor');
    } catch (error) {
      // Error is handled by the auth context
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-primary)', padding: 'var(--spacing-2xl) var(--spacing-md)' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ maxWidth: '400px', width: '100%' }}
      >
        <div>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            style={{ margin: '0 auto', height: '48px', width: '48px', backgroundColor: 'var(--color-primary)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <svg style={{ height: '32px', width: '32px', color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            style={{ marginTop: 'var(--spacing-lg)', textAlign: 'center', fontSize: '1.875rem', fontWeight: '800', color: 'var(--text-primary)' }}
          >
            Welcome back
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            style={{ marginTop: 'var(--spacing-sm)', textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-tertiary)' }}
          >
            Sign in to your account to continue coding
          </motion.p>
        </div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          style={{ marginTop: 'var(--spacing-xl)' }}
          onSubmit={handleSubmit(onSubmit)}
        >
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ backgroundColor: 'rgba(244, 71, 71, 0.1)', border: '1px solid var(--color-error)', color: 'var(--color-error)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--spacing-lg)' }}
            >
              {error}
            </motion.div>
          )}

          <div style={{ marginBottom: 'var(--spacing-md)' }}>
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <div style={{ marginTop: 'var(--spacing-xs)' }}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="Enter your email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className="form-error">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div style={{ marginTop: 'var(--spacing-xs)', position: 'relative' }}>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  className={`form-input ${errors.password ? 'error' : ''}`}
                  style={{ paddingRight: '2.5rem' }}
                  placeholder="Enter your password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                  })}
                />
                <button
                  type="button"
                  style={{ position: 'absolute', top: '50%', right: 'var(--spacing-sm)', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center' }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon style={{ height: '20px', width: '20px', color: 'var(--text-tertiary)' }} />
                  ) : (
                    <EyeIcon style={{ height: '20px', width: '20px', color: 'var(--text-tertiary)' }} />
                  )}
                </button>
                {errors.password && (
                  <p className="form-error">{errors.password.message}</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {isLoading ? (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div className="spinner" style={{ marginRight: 'var(--spacing-sm)' }}></div>
                  Signing in...
                </div>
              ) : (
                'Sign in'
              )}
            </motion.button>
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-lg)' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>
              Don't have an account?{' '}
              <Link
                to="/register"
                style={{ fontWeight: '500', color: 'var(--color-primary)', textDecoration: 'none' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-primary-hover)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-primary)'}
              >
                Sign up
              </Link>
            </p>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Login; 