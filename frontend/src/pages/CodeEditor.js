
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MonacoEditor from '@monaco-editor/react';


const CodeEditor = () => {
  const [code, setCode] = useState('// Start coding!\nconsole.log("Hello, Codium!");');

  return (
    <div style={{ width: '100%', maxWidth: 1100, margin: '0 auto', padding: 'var(--spacing-xl) 0' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: 'var(--spacing-lg)' }}
      >
        <h1 style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>Code Editor</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Write, run, and save your code in a real IDE experience</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-xl)', boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)', border: '1.5px solid var(--border-primary)', padding: 0 }}
      >
        <MonacoEditor
          height="500px"
          defaultLanguage="javascript"
          theme="vs-dark"
          value={code}
          onChange={value => setCode(value)}
          options={{
            fontSize: 16,
            minimap: { enabled: false },
            fontFamily: 'Fira Mono, Menlo, monospace',
            smoothScrolling: true,
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            automaticLayout: true,
            lineNumbers: 'on',
            renderLineHighlight: 'all',
            tabSize: 2,
            theme: 'vs-dark',
            scrollbar: { vertical: 'auto', horizontal: 'auto' },
          }}
        />
      </motion.div>
    </div>
  );
};

export default CodeEditor; 