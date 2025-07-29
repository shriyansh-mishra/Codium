import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { LANGUAGES } from '../../pages/CodeEditor';
import LanguageSelector from './LanguageSelector';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0].value);
  const location = useLocation();

  const isEditorRoute = location.pathname === '/editor';
  
  // Handle language selection
  const handleLanguageSelect = React.useCallback((langValue) => {
    setSelectedLanguage(langValue);
    setSidebarOpen(false); // Close mobile sidebar after selection
  }, []);
  
  // Toggle mobile sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="h-screen bg-code-dark flex">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleSidebar} />
        <div className="fixed inset-y-0 left-0 w-64 bg-code-darker shadow-xl">
          <div className="flex items-center justify-between h-14 px-4 border-b border-code-light">
            <div className="text-sm text-gray-400">Language Selection</div>
            <button
              onClick={toggleSidebar}
              className="text-gray-400 hover:text-white"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <nav className="px-4 py-6 space-y-2">
            {isEditorRoute && (
              <LanguageSelector
                languages={LANGUAGES}
                selectedLanguage={selectedLanguage}
                onLanguageSelect={setSelectedLanguage}
              />
            )}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      {isEditorRoute && (
        <div className="hidden lg:flex lg:w-64 lg:flex-col bg-code-darker border-r border-code-light">
          <div className="flex flex-col h-full">
            <div className="flex items-center h-14 px-4 border-b border-code-light">
              <div className="text-sm text-gray-400">Language Selection</div>
            </div>
            <nav className="flex-1 overflow-y-auto">
              <LanguageSelector
                languages={LANGUAGES}
                selectedLanguage={selectedLanguage}
                onLanguageSelect={handleLanguageSelect}
              />
            </nav>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className={`flex-1 overflow-hidden ${isEditorRoute ? 'lg:ml-64' : ''}`}>
        {React.cloneElement(children, { sidebarLanguage: selectedLanguage })}
      </div>
    </div>
  );
};

export default Layout; 