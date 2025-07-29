
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MonacoEditor from '@monaco-editor/react';

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

const CodeEditor = ({ sidebarLanguage }) => {
  const [language, setLanguage] = useState(sidebarLanguage || LANGUAGES[0].value);
  const [code, setCode] = useState(LANGUAGES.find(l => l.value === (sidebarLanguage || LANGUAGES[0].value)).sample);

  React.useEffect(() => {
    if (sidebarLanguage && sidebarLanguage !== language) {
      setLanguage(sidebarLanguage);
      const langObj = LANGUAGES.find(l => l.value === sidebarLanguage);
      if (langObj && code === '') {
        setCode(langObj.sample);
      }
    }
  }, [sidebarLanguage, language, code]);

  return (
    <div className="h-full w-full bg-code-dark">
      <div className="h-full">
        <MonacoEditor
          height="100vh"
          language={language}
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
      </div>
    </div>
  );
};

export default CodeEditor;