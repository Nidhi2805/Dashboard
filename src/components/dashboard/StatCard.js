import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  FiUsers, 
  FiDollarSign, 
  FiShoppingCart, 
  FiHelpCircle 
} from 'react-icons/fi';

const iconComponents = {
  users: FiUsers,
  dollar: FiDollarSign,
  cart: FiShoppingCart,
  ticket: FiHelpCircle
};

const StatCard = ({ title, value, change, icon, color }) => {
  const { theme, themeColors } = useTheme();
  const currentColors = themeColors[theme];
  const Icon = iconComponents[icon];

  return (
    <div 
      className="p-4 rounded-lg shadow-sm"
      style={{ backgroundColor: currentColors.card }}
    >
      <div className="flex justify-between items-center">
        <div>
          <p 
            className="text-sm font-medium"
            style={{ color: currentColors.text }}
          >
            {title}
          </p>
          <h3 
            className="text-2xl font-bold mt-1"
            style={{ color: currentColors.text }}
          >
            {value}
          </h3>
        </div>
        <div 
          className={`p-3 rounded-full`}
          style={{ 
            backgroundColor: `${currentColors[color]}20`, 
            color: currentColors[color]
          }}
        >
          <Icon size={20} />
        </div>
      </div>
      <p 
        className={`text-sm mt-2 flex items-center ${
          change.startsWith('+') ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {change}
        <span className="ml-1">
          {change.startsWith('+') ? '↑' : '↓'}
        </span>
      </p>
    </div>
  );
};

export default StatCard;