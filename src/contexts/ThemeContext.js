import React, { createContext, useContext, useState } from 'react';

const defaultThemeColors = {
  light: {
    primary: '#3b82f6',
    secondary: '#f43f5e',
    background: '#f8fafc',
    text: '#0f172a',
    card: '#ffffff',
  },
  dark: {
    primary: '#6366f1',
    secondary: '#ec4899',
    background: '#0f172a',
    text: '#f8fafc',
    card: '#1e293b',
  },
  blue: {
    primary: '#1d4ed8',
    secondary: '#0369a1',
    background: '#dbeafe',
    text: '#1e3a8a',
    card: '#bfdbfe',
  },
  green: {
    primary: '#047857',
    secondary: '#059669',
    background: '#d1fae5',
    text: '#064e3b',
    card: '#a7f3d0',
  },
  red: {
    primary: '#b91c1c',
    secondary: '#dc2626',
    background: '#fee2e2',
    text: '#7f1d1d',
    card: '#fecaca',
  },
};

const defaultContextValue = {
  theme: 'light',
  setTheme: () => console.warn('No theme provider'),
  themeColors: defaultThemeColors
};

const ThemeContext = createContext(defaultContextValue);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeColors: defaultThemeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};