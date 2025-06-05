import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  FiHome, 
  FiGrid, 
  FiCalendar, 
  FiPieChart, 
  FiTrello,
  FiSettings
} from 'react-icons/fi';

const Sidebar = () => {
  const { theme, themeColors } = useTheme();
  const currentColors = themeColors[theme];
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', icon: FiHome, label: 'Dashboard' },
    { path: '/tables', icon: FiGrid, label: 'Tables' },
    { path: '/charts', icon: FiPieChart, label: 'Charts' },
    { path: '/calendar', icon: FiCalendar, label: 'Calendar' },
    { path: '/kanban', icon: FiTrello, label: 'Kanban' },
    { path: '/settings', icon: FiSettings, label: 'Settings' },
  ];

  return (
    <div 
      className="w-64 border-r hidden md:block"
      style={{ 
        backgroundColor: currentColors.card,
        borderColor: theme === 'dark' ? '#334155' : '#e2e8f0'
      }}
    >
      <div className="p-4">
        <h1 
          className="text-xl font-bold"
          style={{ color: currentColors.primary }}
        >
          Admin Dashboard
        </h1>
      </div>
      <nav className="mt-6">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={`flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 ${
              location.pathname === item.path 
                ? 'border-r-4' 
                : 'opacity-70 hover:opacity-100'
            }`}
            style={{
              borderRightColor: currentColors.primary,
              color: location.pathname === item.path 
                ? currentColors.primary 
                : currentColors.text,
            }}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;