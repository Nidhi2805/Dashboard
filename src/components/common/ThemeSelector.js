import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeSelector = () => {
  const { theme, setTheme, themeColors } = useTheme();
  const themes = [
    { name: 'light', label: 'Light' },
    { name: 'dark', label: 'Dark' },
    { name: 'blue', label: 'Blue' },
    { name: 'green', label: 'Green' },
    { name: 'red', label: 'Red' },
  ];

  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold mb-2">Theme</h3>
      <div className="flex space-x-2">
        {themes.map((t) => (
          <button
            key={t.name}
            onClick={() => setTheme(t.name)}
            className={`h-8 w-8 rounded-full flex items-center justify-center ${
              theme === t.name ? 'ring-2 ring-offset-2' : ''
            }`}
            style={{
              backgroundColor: themeColors[t.name].primary,
              color: '#ffffff',
              ringColor: themeColors[t.name].secondary,
            }}
            title={t.label}
          >
            {theme === t.name && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;