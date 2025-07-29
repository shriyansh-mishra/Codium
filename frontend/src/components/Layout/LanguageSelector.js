import React from 'react';
import { 
  DiJavascript,
  DiPython,
  DiJava,
  DiCss3,
  DiCode,
  DiTerminal,
  DiHtml5,
  DiMarkdown
} from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';

const languageIcons = {
  javascript: { icon: DiJavascript, color: '#F7DF1E' },
  python: { icon: DiPython, color: '#3776AB' },
  java: { icon: DiJava, color: '#007396' },
  cpp: { icon: DiCode, color: '#00599C' },
  c: { icon: DiTerminal, color: '#A8B9CC' },
  typescript: { icon: SiTypescript, color: '#3178C6' },
  json: { icon: DiCode, color: '#000000' },
  html: { icon: DiHtml5, color: '#E34F26' },
  markdown: { icon: DiMarkdown, color: '#000000' }
};

const LanguageSelector = ({ languages, selectedLanguage, onLanguageSelect }) => {
  return (
    <div className="space-y-1">
      <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3 pl-2">
        Select Language
      </h2>
      <div className="space-y-1">
        {languages.map((lang) => {
          const iconConfig = languageIcons[lang.value];
          const Icon = iconConfig?.icon;
          return (
            <button
              key={lang.value}
              onClick={() => onLanguageSelect(lang.value)}
              className={`w-full flex items-center px-2 py-2 text-sm rounded-md transition-colors ${
                selectedLanguage === lang.value
                  ? 'bg-code-blue text-white'
                  : 'text-gray-300 hover:bg-code-light hover:text-white'
              }`}
            >
              {Icon && (
                <span className="mr-2" style={{ color: iconConfig.color }}>
                  <Icon className="w-5 h-5" />
                </span>
              )}
              {lang.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSelector;
