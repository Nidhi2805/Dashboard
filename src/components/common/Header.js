import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FiSun, FiMoon, FiBell, FiUser, FiSearch } from 'react-icons/fi';

const Header = () => {
  const { theme, setTheme, themeColors } = useTheme();
  const currentColors = themeColors[theme];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header 
      className="flex items-center justify-between p-4 shadow-sm"
      style={{ backgroundColor: currentColors.card }}
    >
      <div className="flex items-center">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
            style={{
              backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
              borderColor: currentColors.primary,
              color: currentColors.text,
            }}
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full"
          style={{ color: currentColors.text }}
        >
          {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>

        <button className="relative p-2 rounded-full" style={{ color: currentColors.text }}>
          <FiBell size={20} />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full flex items-center justify-center" 
            style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}>
            <FiUser size={16} />
          </div>
          <span style={{ color: currentColors.text }}>Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;