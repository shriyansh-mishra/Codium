const express = require('express');
const { spawn } = require('child_process');
const { body, validationResult } = require('express-validator');
const fs = require('fs').promises;
const path = require('path');
const os = require('os');

const router = express.Router();

// Execute code in multiple languages
router.post('/', [
  body('code').isLength({ min: 1, max: 10000 }),
  body('language').isIn(['javascript', 'react', 'html', 'python', 'java', 'cpp', 'csharp', 'php', 'ruby', 'go', 'rust'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { code, language } = req.body;

    // Create temporary directory for execution
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'code-exec-'));
    
    let processedCode = code;
    let executionCommand = '';
    let executionArgs = [];
    let fileExtension = '';
    
    const scriptPath = path.join(tempDir, `script${fileExtension}`);

    // Process code based on language
    switch (language) {
      case 'javascript':
        processedCode = code;
        executionCommand = 'node';
        executionArgs = [scriptPath];
        fileExtension = '.js';
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
        executionCommand = 'node';
        executionArgs = [scriptPath];
        fileExtension = '.js';
        break;
      
      case 'html':
        // For HTML, we'll just log it as a string
        processedCode = `
console.log('HTML Code:');
console.log(\`${code.replace(/`/g, '\\`')}\`);
        `;
        executionCommand = 'node';
        executionArgs = [scriptPath];
        fileExtension = '.js';
        break;

      case 'python':
        processedCode = code;
        executionCommand = 'python';
        executionArgs = [scriptPath];
        fileExtension = '.py';
        break;

      case 'java':
        // Java requires class name to match file name
        const className = 'Main';
        processedCode = `public class ${className} {
    public static void main(String[] args) {
        ${code}
    }
}`;
        executionCommand = 'java';
        executionArgs = ['-cp', tempDir, className];
        fileExtension = '.java';
        break;

      case 'cpp':
        processedCode = `#include <iostream>
using namespace std;

int main() {
    ${code}
    return 0;
}`;
        executionCommand = 'g++';
        executionArgs = ['-o', path.join(tempDir, 'program'), scriptPath, '&&', 'g++', '-o', path.join(tempDir, 'program'), scriptPath, '&&', path.join(tempDir, 'program')];
        fileExtension = '.cpp';
        break;

      case 'csharp':
        processedCode = `using System;

class Program {
    static void Main() {
        ${code}
    }
}`;
        executionCommand = 'dotnet';
        executionArgs = ['run', '--project', tempDir];
        fileExtension = '.cs';
        break;

      case 'php':
        processedCode = `<?php
${code}
?>`;
        executionCommand = 'php';
        executionArgs = [scriptPath];
        fileExtension = '.php';
        break;

      case 'ruby':
        processedCode = code;
        executionCommand = 'ruby';
        executionArgs = [scriptPath];
        fileExtension = '.rb';
        break;

      case 'go':
        processedCode = `package main

import "fmt"

func main() {
    ${code}
}`;
        executionCommand = 'go';
        executionArgs = ['run', scriptPath];
        fileExtension = '.go';
        break;

      case 'rust':
        processedCode = `fn main() {
    ${code}
}`;
        executionCommand = 'rustc';
        executionArgs = [scriptPath, '-o', path.join(tempDir, 'program'), '&&', path.join(tempDir, 'program')];
        fileExtension = '.rs';
        break;
      
      default:
        processedCode = code;
        executionCommand = 'node';
        executionArgs = [scriptPath];
        fileExtension = '.js';
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