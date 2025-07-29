
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register: registerUser, error, clearError } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch('password');

  useEffect(() => {
    clearError();
  }, [clearError]);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await registerUser(data);
      navigate('/editor');
    } catch (error) {
      // Error is handled by the auth context
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)', padding: 'var(--spacing-2xl) var(--spacing-md)' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ width: '100%', maxWidth: 400, background: 'var(--bg-secondary)', borderRadius: 'var(--radius-xl)', boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10)', padding: 'var(--spacing-2xl) var(--spacing-xl)' }}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--spacing-lg)' }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="12" fill="var(--color-primary)" />
            <path d="M18 20h4M20 18v4" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 'var(--spacing-md)' }}
        >
          Create your account
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          style={{ textAlign: 'center', fontSize: '1rem', color: 'var(--text-tertiary)', marginBottom: 'var(--spacing-xl)' }}
        >
          Join us and start coding today
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ background: 'rgba(244, 71, 71, 0.10)', border: '1px solid var(--color-error)', color: 'var(--color-error)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--spacing-lg)', fontSize: '1rem', textAlign: 'center' }}
            >
              {error}
            </motion.div>
          )}
          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <label htmlFor="name" style={{ display: 'block', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 6, fontSize: '1rem' }}>Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              style={{
                width: '100%',
                padding: '0.85em 1em',
                borderRadius: 'var(--radius-lg)',
                border: `1.5px solid ${errors.name ? 'var(--color-error)' : 'var(--border-primary)'}`,
                background: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
                fontSize: '1rem',
                outline: 'none',
                marginBottom: errors.name ? 2 : 0,
                transition: 'border 0.2s',
                boxSizing: 'border-box'
              }}
              placeholder="Enter your full name"
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters',
                },
              })}
            />
            {errors.name && (
              <p style={{ color: 'var(--color-error)', fontSize: '0.95em', marginTop: 2 }}>{errors.name.message}</p>
            )}
          </div>
          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <label htmlFor="email" style={{ display: 'block', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 6, fontSize: '1rem' }}>Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              style={{
                width: '100%',
                padding: '0.85em 1em',
                borderRadius: 'var(--radius-lg)',
                border: `1.5px solid ${errors.email ? 'var(--color-error)' : 'var(--border-primary)'}`,
                background: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
                fontSize: '1rem',
                outline: 'none',
                marginBottom: errors.email ? 2 : 0,
                transition: 'border 0.2s',
                boxSizing: 'border-box'
              }}
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
              <p style={{ color: 'var(--color-error)', fontSize: '0.95em', marginTop: 2 }}>{errors.email.message}</p>
            )}
          </div>
          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <label htmlFor="password" style={{ display: 'block', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 6, fontSize: '1rem' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                style={{
                  width: '100%',
                  padding: '0.85em 1em',
                  borderRadius: 'var(--radius-lg)',
                  border: `1.5px solid ${errors.password ? 'var(--color-error)' : 'var(--border-primary)'}`,
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  outline: 'none',
                  marginBottom: errors.password ? 2 : 0,
                  transition: 'border 0.2s',
                  boxSizing: 'border-box',
                  paddingRight: '2.5em'
                }}
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
                style={{ position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeSlashIcon style={{ height: 20, width: 20, color: 'var(--text-tertiary)' }} />
                ) : (
                  <EyeIcon style={{ height: 20, width: 20, color: 'var(--text-tertiary)' }} />
                )}
              </button>
            </div>
            {errors.password && (
              <p style={{ color: 'var(--color-error)', fontSize: '0.95em', marginTop: 2 }}>{errors.password.message}</p>
            )}
          </div>
          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <label htmlFor="confirmPassword" style={{ display: 'block', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 6, fontSize: '1rem' }}>Confirm Password</label>
            <div style={{ position: 'relative' }}>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                style={{
                  width: '100%',
                  padding: '0.85em 1em',
                  borderRadius: 'var(--radius-lg)',
                  border: `1.5px solid ${errors.confirmPassword ? 'var(--color-error)' : 'var(--border-primary)'}`,
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  outline: 'none',
                  marginBottom: errors.confirmPassword ? 2 : 0,
                  transition: 'border 0.2s',
                  boxSizing: 'border-box',
                  paddingRight: '2.5em'
                }}
                placeholder="Confirm your password"
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (value) => value === password || 'Passwords do not match',
                })}
              />
              <button
                type="button"
                style={{ position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                tabIndex={-1}
              >
                {showConfirmPassword ? (
                  <EyeSlashIcon style={{ height: 20, width: 20, color: 'var(--text-tertiary)' }} />
                ) : (
                  <EyeIcon style={{ height: 20, width: 20, color: 'var(--text-tertiary)' }} />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p style={{ color: 'var(--color-error)', fontSize: '0.95em', marginTop: 2 }}>{errors.confirmPassword.message}</p>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '0.95em 0',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--color-primary)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.1rem',
              border: 'none',
              boxShadow: '0 2px 12px 0 rgba(255,107,53,0.10)',
              marginTop: 'var(--spacing-md)',
              marginBottom: 'var(--spacing-md)',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s, box-shadow 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8
            }}
          >
            {isLoading ? (
              <>
                <div className="spinner" style={{ marginRight: 8 }}></div>
                Creating account...
              </>
            ) : (
              'Create account'
            )}
          </motion.button>
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-md)' }}>
            <span style={{ fontSize: '0.98rem', color: 'var(--text-tertiary)' }}>
              Already have an account?{' '}
              <Link
                to="/login"
                style={{ fontWeight: 600, color: 'var(--color-primary)', textDecoration: 'none', transition: 'color 0.2s' }}
              >
                Sign in
              </Link>
            </span>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Register; 