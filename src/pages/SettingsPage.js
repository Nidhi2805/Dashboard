import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeSelector from '../components/common/ThemeSelector';
import { FiUser, FiMail, FiLock, FiBell, FiMoon, FiSun } from 'react-icons/fi';
import { Switch } from '@headlessui/react';

const SettingsPage = () => {
  const { theme, themeColors } = useTheme();
  const currentColors = themeColors[theme];

  const [formData, setFormData] = React.useState({
    name: 'John Doe',
    email: 'john@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [notifications, setNotifications] = React.useState({
    email: true,
    push: false,
    newsletter: true
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNotificationChange = (name) => {
    setNotifications(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div 
      className="p-6 rounded-lg transition-all duration-300"
      style={{ backgroundColor: currentColors.card }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-3xl font-bold mb-8 flex items-center gap-3"
          style={{ color: currentColors.text }}
        >
          <FiUser className="text-blue-500" />
          Account Settings
        </h2>
        
        <div className="space-y-8">
          <div 
            className="p-6 rounded-xl shadow-sm transition-all duration-300"
            style={{ 
              backgroundColor: theme === 'dark' ? '#1e293b' : '#f8fafc',
              border: `1px solid ${theme === 'dark' ? '#334155' : '#e2e8f0'}`
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              {theme === 'dark' ? (
                <FiMoon className="text-purple-500 text-xl" />
              ) : (
                <FiSun className="text-yellow-500 text-xl" />
              )}
              <h3 
                className="text-xl font-semibold"
                style={{ color: currentColors.text }}
              >
                Appearance
              </h3>
            </div>
            <ThemeSelector />
          </div>

          <div 
            className="p-6 rounded-xl shadow-sm transition-all duration-300"
            style={{ 
              backgroundColor: theme === 'dark' ? '#1e293b' : '#f8fafc',
              border: `1px solid ${theme === 'dark' ? '#334155' : '#e2e8f0'}`
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FiUser className="text-blue-500 text-xl" />
              <h3 
                className="text-xl font-semibold"
                style={{ color: currentColors.text }}
              >
                Profile Information
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium mb-1"
                  style={{ color: currentColors.text }}
                >
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 pl-10 rounded-lg border focus:ring-2 focus:outline-none transition-all"
                    style={{
                      backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                      borderColor: theme === 'dark' ? '#334155' : '#cbd5e1',
                      color: currentColors.text,
                      focusRingColor: currentColors.primary
                    }}
                  />
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium mb-1"
                  style={{ color: currentColors.text }}
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 pl-10 rounded-lg border focus:ring-2 focus:outline-none transition-all"
                    style={{
                      backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                      borderColor: theme === 'dark' ? '#334155' : '#cbd5e1',
                      color: currentColors.text,
                      focusRingColor: currentColors.primary
                    }}
                  />
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg font-medium transition-colors duration-300"
                  style={{
                    backgroundColor: currentColors.primary,
                    color: '#ffffff',
                    hoverBackgroundColor: currentColors.secondary
                  }}
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>

          <div 
            className="p-6 rounded-xl shadow-sm transition-all duration-300"
            style={{ 
              backgroundColor: theme === 'dark' ? '#1e293b' : '#f8fafc',
              border: `1px solid ${theme === 'dark' ? '#334155' : '#e2e8f0'}`
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FiLock className="text-blue-500 text-xl" />
              <h3 
                className="text-xl font-semibold"
                style={{ color: currentColors.text }}
              >
                Change Password
              </h3>
            </div>
            
            <form className="space-y-4">
              <div>
                <label 
                  htmlFor="currentPassword" 
                  className="block text-sm font-medium mb-1"
                  style={{ color: currentColors.text }}
                >
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 pl-10 rounded-lg border focus:ring-2 focus:outline-none transition-all"
                    style={{
                      backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                      borderColor: theme === 'dark' ? '#334155' : '#cbd5e1',
                      color: currentColors.text
                    }}
                  />
                  <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="newPassword" 
                  className="block text-sm font-medium mb-1"
                  style={{ color: currentColors.text }}
                >
                  New Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 pl-10 rounded-lg border focus:ring-2 focus:outline-none transition-all"
                    style={{
                      backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                      borderColor: theme === 'dark' ? '#334155' : '#cbd5e1',
                      color: currentColors.text
                    }}
                  />
                  <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="confirmPassword" 
                  className="block text-sm font-medium mb-1"
                  style={{ color: currentColors.text }}
                >
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 pl-10 rounded-lg border focus:ring-2 focus:outline-none transition-all"
                    style={{
                      backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                      borderColor: theme === 'dark' ? '#334155' : '#cbd5e1',
                      color: currentColors.text
                    }}
                  />
                  <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  className="px-6 py-2 rounded-lg font-medium transition-colors duration-300"
                  style={{
                    backgroundColor: currentColors.primary,
                    color: '#ffffff'
                  }}
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>

          <div 
            className="p-6 rounded-xl shadow-sm transition-all duration-300"
            style={{ 
              backgroundColor: theme === 'dark' ? '#1e293b' : '#f8fafc',
              border: `1px solid ${theme === 'dark' ? '#334155' : '#e2e8f0'}`
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FiBell className="text-blue-500 text-xl" />
              <h3 
                className="text-xl font-semibold"
                style={{ color: currentColors.text }}
              >
                Notification Preferences
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium" style={{ color: currentColors.text }}>Email Notifications</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Receive updates via email</p>
                </div>
                <Switch
                  checked={notifications.email}
                  onChange={() => handleNotificationChange('email')}
                  className={`${
                    notifications.email ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-600'
                  } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                >
                  <span
                    className={`${
                      notifications.email ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                  />
                </Switch>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium" style={{ color: currentColors.text }}>Push Notifications</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Receive browser notifications</p>
                </div>
                <Switch
                  checked={notifications.push}
                  onChange={() => handleNotificationChange('push')}
                  className={`${
                    notifications.push ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-600'
                  } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                >
                  <span
                    className={`${
                      notifications.push ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                  />
                </Switch>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium" style={{ color: currentColors.text }}>Newsletter</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Receive our monthly newsletter</p>
                </div>
                <Switch
                  checked={notifications.newsletter}
                  onChange={() => handleNotificationChange('newsletter')}
                  className={`${
                    notifications.newsletter ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-600'
                  } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                >
                  <span
                    className={`${
                      notifications.newsletter ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;