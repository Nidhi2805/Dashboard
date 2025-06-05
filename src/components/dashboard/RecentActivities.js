import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  FiCheckCircle, 
  FiAlertCircle, 
  FiClock, 
  FiDollarSign 
} from 'react-icons/fi';

const activities = [
  {
    id: 1,
    type: 'success',
    title: 'Payment received',
    description: '#INV-12345 completed',
    time: '2 min ago',
    icon: FiCheckCircle
  },
  {
    id: 2,
    type: 'error',
    title: 'Failed login attempt',
    description: 'From 192.168.1.1',
    time: '5 min ago',
    icon: FiAlertCircle
  },
  {
    id: 3,
    type: 'info',
    title: 'New order placed',
    description: 'Order #123-4567',
    time: '1 hour ago',
    icon: FiDollarSign
  },
  {
    id: 4,
    type: 'warning',
    title: 'Server maintenance',
    description: 'Scheduled for 3:00 AM',
    time: '3 hours ago',
    icon: FiClock
  },
];

const RecentActivities = () => {
  const { theme, themeColors } = useTheme();
  const currentColors = themeColors[theme];

  const getActivityColor = (type) => {
    switch (type) {
      case 'success':
        return 'text-green-500';
      case 'error':
        return 'text-red-500';
      case 'warning':
        return 'text-yellow-500';
      default:
        return 'text-blue-500';
    }
  };

  return (
    <div>
      <h3 
        className="text-lg font-semibold mb-4"
        style={{ color: currentColors.text }}
      >
        Recent Activities
      </h3>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div 
              key={activity.id} 
              className="flex items-start"
            >
              <div className={`p-2 rounded-full mr-3 ${getActivityColor(activity.type)}`}>
                <Icon size={18} />
              </div>
              <div className="flex-1">
                <h4 
                  className="font-medium"
                  style={{ color: currentColors.text }}
                >
                  {activity.title}
                </h4>
                <p 
                  className="text-sm"
                  style={{ color: currentColors.text }}
                >
                  {activity.description}
                </p>
                <p 
                  className="text-xs mt-1"
                  style={{ color: currentColors.text }}
                >
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivities;