import React from 'react';
import { Moon, Sun } from './Icons';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-white/30 transition-all duration-300 focus:outline-none"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-4 h-4">
        <Sun 
          className={`w-4 h-4 absolute inset-0 transition-all duration-500 transform ${
            theme === 'light' ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'
          }`} 
        />
        <Moon 
          className={`w-4 h-4 absolute inset-0 transition-all duration-500 transform ${
            theme === 'dark' ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-50'
          }`} 
        />
      </div>
    </button>
  );
};

export default ThemeToggle;