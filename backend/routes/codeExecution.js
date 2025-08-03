const express = require('express');
const { body, validationResult } = require('express-validator');
const axios = require('axios');

const router = express.Router();

// Execute code using Docker-based service
router.post('/', [
  body('code').isLength({ min: 1, max: 10000 }),
  body('language').isIn(['javascript', 'react', 'html', 'python', 'java', 'cpp', 'c', 'typescript', 'php', 'ruby', 'go', 'rust'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { code, language } = req.body;

    // Call Docker-based code execution service
    const executorUrl = process.env.CODE_EXECUTOR_URL || 'http://localhost:3001';
    
    try {
      const response = await axios.post(`${executorUrl}/execute`, {
        code,
        language
      }, {
        timeout: 15000 // 15 seconds timeout
      });

      res.json(response.data);
    } catch (executorError) {
      console.error('Code executor service error:', executorError);
      
      if (executorError.response) {
        // Forward error from executor service
        res.status(executorError.response.status).json(executorError.response.data);
      } else {
        res.status(500).json({
          error: 'Code execution service unavailable',
          output: 'Please try again later'
        });
      }
    }

  } catch (error) {
    console.error('Code execution error:', error);
    res.status(500).json({
      error: 'Server error',
      output: error.message
    });
  }
});

module.exports = router; 