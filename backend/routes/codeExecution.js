const express = require('express');
const { spawn } = require('child_process');
const { body, validationResult } = require('express-validator');
const fs = require('fs').promises;
const path = require('path');
const os = require('os');

const router = express.Router();

// Execute JavaScript code
router.post('/', [
  body('code').isLength({ min: 1, max: 10000 }),
  body('language').isIn(['javascript', 'react', 'html'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { code, language } = req.body;

    // Create temporary directory for execution
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'code-exec-'));
    const scriptPath = path.join(tempDir, 'script.js');

    let processedCode = code;
    let executionCommand = 'node';
    let executionArgs = [scriptPath];

    // Process code based on language
    switch (language) {
      case 'javascript':
        processedCode = code;
        break;
      
      case 'react':
        // Wrap React component in a simple execution context
        processedCode = `
const React = require('react');
const ReactDOM = require('react-dom');

${code}

// Try to render if it's a component
if (typeof App !== 'undefined') {
  console.log('React component defined:', App.name || 'Anonymous');
} else {
  console.log('Code executed successfully');
}
        `;
        break;
      
      case 'html':
        // For HTML, we'll just log it as a string
        processedCode = `
console.log('HTML Code:');
console.log(\`${code.replace(/`/g, '\\`')}\`);
        `;
        break;
      
      default:
        processedCode = code;
    }

    // Write code to temporary file
    await fs.writeFile(scriptPath, processedCode);

    // Execute code with timeout and memory limits
    const childProcess = spawn(executionCommand, executionArgs, {
      cwd: tempDir,
      timeout: 10000, // 10 seconds timeout
      maxBuffer: 1024 * 1024 // 1MB output limit
    });

    let stdout = '';
    let stderr = '';

    childProcess.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    childProcess.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    childProcess.on('error', (error) => {
      console.error('Execution error:', error);
      res.status(500).json({
        error: 'Execution failed',
        output: error.message
      });
    });

    childProcess.on('close', async (code) => {
      try {
        // Clean up temporary files
        await fs.rm(tempDir, { recursive: true, force: true });

        const result = {
          success: code === 0,
          output: stdout.trim(),
          error: stderr.trim(),
          exitCode: code
        };

        res.json(result);
      } catch (cleanupError) {
        console.error('Cleanup error:', cleanupError);
        res.json({
          success: code === 0,
          output: stdout.trim(),
          error: stderr.trim(),
          exitCode: code
        });
      }
    });

  } catch (error) {
    console.error('Code execution error:', error);
    res.status(500).json({
      error: 'Server error',
      output: error.message
    });
  }
});

module.exports = router; 