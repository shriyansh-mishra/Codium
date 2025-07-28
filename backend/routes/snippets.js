const express = require('express');
const { body, validationResult } = require('express-validator');
const { pool } = require('../config/database');
const auth = require('../middleware/auth');

const router = express.Router();

// Get all snippets for authenticated user
router.get('/', auth, async (req, res) => {
  try {
    const [snippets] = await pool.execute(
      'SELECT id, title, code, language, output, created_at FROM snippets WHERE user_id = ? ORDER BY created_at DESC',
      [req.user.userId]
    );

    res.json(snippets);
  } catch (error) {
    console.error('Get snippets error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single snippet by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const [snippets] = await pool.execute(
      'SELECT id, title, code, language, output, created_at FROM snippets WHERE id = ? AND user_id = ?',
      [req.params.id, req.user.userId]
    );

    if (snippets.length === 0) {
      return res.status(404).json({ error: 'Snippet not found' });
    }

    res.json(snippets[0]);
  } catch (error) {
    console.error('Get snippet error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create new snippet
router.post('/', [
  auth,
  body('title').trim().isLength({ min: 1, max: 100 }),
  body('code').isLength({ min: 1 }),
  body('language').isIn(['javascript', 'react', 'html'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, code, language, output = '' } = req.body;

    const [result] = await pool.execute(
      'INSERT INTO snippets (user_id, title, code, language, output) VALUES (?, ?, ?, ?, ?)',
      [req.user.userId, title, code, language, output]
    );

    const [newSnippet] = await pool.execute(
      'SELECT id, title, code, language, output, created_at FROM snippets WHERE id = ?',
      [result.insertId]
    );

    res.status(201).json(newSnippet[0]);
  } catch (error) {
    console.error('Create snippet error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update snippet
router.put('/:id', [
  auth,
  body('title').trim().isLength({ min: 1, max: 100 }),
  body('code').isLength({ min: 1 }),
  body('language').isIn(['javascript', 'react', 'html'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, code, language, output = '' } = req.body;

    const [result] = await pool.execute(
      'UPDATE snippets SET title = ?, code = ?, language = ?, output = ? WHERE id = ? AND user_id = ?',
      [title, code, language, output, req.params.id, req.user.userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Snippet not found' });
    }

    const [updatedSnippet] = await pool.execute(
      'SELECT id, title, code, language, output, created_at FROM snippets WHERE id = ?',
      [req.params.id]
    );

    res.json(updatedSnippet[0]);
  } catch (error) {
    console.error('Update snippet error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete snippet
router.delete('/:id', auth, async (req, res) => {
  try {
    const [result] = await pool.execute(
      'DELETE FROM snippets WHERE id = ? AND user_id = ?',
      [req.params.id, req.user.userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Snippet not found' });
    }

    res.json({ message: 'Snippet deleted successfully' });
  } catch (error) {
    console.error('Delete snippet error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 