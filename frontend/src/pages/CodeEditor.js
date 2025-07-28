import React from 'react';
import { motion } from 'framer-motion';

const CodeEditor = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Code Editor</h1>
        <p className="text-gray-400">Write, run, and save your JavaScript code</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-code-darker rounded-lg p-6 border border-code-light"
      >
        <div className="text-center py-12">
          <div className="text-code-blue text-6xl mb-4">🚀</div>
          <h2 className="text-xl font-semibold text-white mb-2">Coming Soon!</h2>
          <p className="text-gray-400">
            The professional code editor with Monaco Editor is being built...
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CodeEditor; 