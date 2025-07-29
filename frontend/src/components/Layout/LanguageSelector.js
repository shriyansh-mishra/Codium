import React, { useCallback } from 'react';

const LanguageSelector = ({ languages, selectedLanguage, onLanguageSelect }) => {
  const handleLanguageSelect = useCallback((langValue) => {
    if (langValue !== selectedLanguage) {
      onLanguageSelect(langValue);
    }
  }, [selectedLanguage, onLanguageSelect]);

  return (
    <div className="space-y-2 p-2">
      {languages.map((lang) => (
        <button
          key={lang.value}
          onClick={() => handleLanguageSelect(lang.value)}
          className={`w-full px-4 py-2.5 text-sm text-left rounded-lg transition-all duration-200 flex items-center gap-2 ${
            selectedLanguage === lang.value
              ? 'bg-code-primary text-white font-medium shadow-sm'
              : 'text-gray-300 hover:bg-code-light hover:text-white'
          }`}
        >
          <span className="flex-1">{lang.label}</span>
          {selectedLanguage === lang.value && (
            <span className="text-xs bg-white bg-opacity-20 px-2 py-0.5 rounded">
              active
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
