import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeSelector from '../components/common/ThemeSelector';

const SettingsPage = () => {
  const { theme, themeColors } = useTheme();
  const currentColors = themeColors[theme];

  return (
    <div 
      className="p-6 rounded-lg"
      style={{ backgroundColor: currentColors.card }}
    >
      <h2 
        className="text-2xl font-bold mb-6"
        style={{ color: currentColors.text }}
      >
        Settings
      </h2>
      
      <div className="space-y-6">
        <div className="p-4 rounded-lg" style={{ backgroundColor: theme === 'dark' ? '#1e293b' : '#f1f5f9' }}>
          <h3 className="text-lg font-semibold mb-4" style={{ color: currentColors.text }}>
            Appearance
          </h3>
          <ThemeSelector />
        </div>

        <div className="p-4 rounded-lg" style={{ backgroundColor: theme === 'dark' ? '#1e293b' : '#f1f5f9' }}>
          <h3 className="text-lg font-semibold mb-4" style={{ color: currentColors.text }}>
            Account Settings
          </h3>
          {/* Account settings form would go here */}
        </div>

        <div className="p-4 rounded-lg" style={{ backgroundColor: theme === 'dark' ? '#1e293b' : '#f1f5f9' }}>
          <h3 className="text-lg font-semibold mb-4" style={{ color: currentColors.text }}>
            Notifications
          </h3>
          {/* Notification settings would go here */}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;