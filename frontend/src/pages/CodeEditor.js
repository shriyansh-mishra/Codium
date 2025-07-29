

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MonacoEditor from '@monaco-editor/react';
import { PlayIcon, ShareIcon, BookmarkIcon } from '@heroicons/react/24/solid';

export const LANGUAGES = [
  { label: 'JavaScript', value: 'javascript', sample: '// Start coding!\nconsole.log("Hello, Codium!");' },
  { label: 'Python', value: 'python', sample: '# Start coding!\nprint("Hello, Codium!")' },
  { label: 'Java', value: 'java', sample: '// Start coding!\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, Codium!");\n  }\n}' },
  { label: 'C++', value: 'cpp', sample: '// Start coding!\n#include <iostream>\nint main() {\n  std::cout << "Hello, Codium!" << std::endl;\n  return 0;\n}' },
  { label: 'C', value: 'c', sample: '// Start coding!\n#include <stdio.h>\nint main() {\n  printf("Hello, Codium!\\n");\n  return 0;\n}' },
  { label: 'TypeScript', value: 'typescript', sample: '// Start coding!\nconsole.log("Hello, Codium!");' },
  { label: 'JSON', value: 'json', sample: '{\n  "hello": "Codium"\n}' },
  { label: 'HTML', value: 'html', sample: '<!-- Start coding! -->\n<h1>Hello, Codium!</h1>' },
  { label: 'Markdown', value: 'markdown', sample: '# Start coding!\nHello, **Codium**!' },
];

const CodeEditor = () => {
  const [code, setCode] = useState(LANGUAGES[0].sample);

  const handleRunCode = () => {
    // TODO: Implement code execution
    console.log('Running code...');
  };

  const handleSaveSnippet = () => {
    // TODO: Implement save functionality
    console.log('Saving snippet...');
  };

  const handleShareCode = () => {
    // TODO: Implement share functionality
    console.log('Sharing code...');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{ 
        position: 'fixed',
        top: '80px',
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg-primary)',
        padding: 'var(--spacing-md)'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          flex: 1,
          minHeight: 0,
          background: 'var(--bg-tertiary)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 4px 32px 0 rgba(0,0,0,0.13)',
          border: '1px solid var(--border-primary)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Editor */}
        <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
          <MonacoEditor
            height="100%"
            language="javascript"
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
              scrollbar: { vertical: 'auto', horizontal: 'auto' },
              cursorSmoothCaretAnimation: true,
              cursorBlinking: 'expand',
              renderWhitespace: 'all',
              renderIndentGuides: true,
              roundedSelection: true,
              selectionHighlight: true,
              scrollBeyondLastColumn: 2,
              quickSuggestions: true,
              suggestOnTriggerCharacters: true,
              fixedOverflowWidgets: true,
            }}
          />

          {/* Action Buttons */}
          <div style={{
            position: 'absolute',
            bottom: 'var(--spacing-md)',
            right: 'var(--spacing-md)',
            display: 'flex',
            gap: 'var(--spacing-sm)',
            zIndex: 10
          }}>
            <button
              onClick={handleSaveSnippet}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-xs)',
                padding: 'var(--spacing-sm) var(--spacing-md)',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-primary)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              <BookmarkIcon style={{ width: 16, height: 16 }} />
              Save
            </button>
            
            <button
              onClick={handleShareCode}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-xs)',
                padding: 'var(--spacing-sm) var(--spacing-md)',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-primary)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              <ShareIcon style={{ width: 16, height: 16 }} />
              Share
            </button>

            <button
              onClick={handleRunCode}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-xs)',
                padding: 'var(--spacing-sm) var(--spacing-md)',
                background: 'var(--color-primary)',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                color: 'white',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 500
              }}
            >
              <PlayIcon style={{ width: 16, height: 16 }} />
              Run
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CodeEditor;