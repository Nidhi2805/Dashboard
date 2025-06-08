import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import StatCard from '../components/dashboard/StatCard';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import RecentActivities from '../components/dashboard/RecentActivities';

const DashboardPage = () => {
  const { theme, themeColors } = useTheme();
  const currentColors = themeColors[theme];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard Overview</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard 
        title="Total Users" 
        value="2,456" 
        change="+12%" 
        icon="users" 
        color="primary"
         trend="up" 
      />
      <StatCard 
        title="Total Revenue" 
        value="$34,545" 
        change="+8%" 
        icon="dollar" 
        color="secondary" 
      />
      <StatCard 
        title="Pending Orders" 
        value="156" 
        change="-4%" 
        icon="cart" 
        color="primary" 
      />
      <StatCard 
        title="Support Tickets" 
        value="42" 
        change="+6%" 
        icon="ticket" 
        color="secondary" 
      />

      <div className="lg:col-span-3 p-4 rounded-lg" style={{ backgroundColor: currentColors.card }}>
        <h3 className="text-lg font-semibold mb-4" style={{ color: currentColors.text }}>
          Sales Overview
        </h3>
        <LineChart />
      </div>

      <div className="p-4 rounded-lg" style={{ backgroundColor: currentColors.card }}>
        <h3 className="text-lg font-semibold mb-4" style={{ color: currentColors.text }}>
          Revenue Sources
        </h3>
        <BarChart />
      </div>

      <div className="lg:col-span-2 p-4 rounded-lg" style={{ backgroundColor: currentColors.card }}>
        <RecentActivities />
      </div>

      <div className="lg:col-span-2 p-4 rounded-lg" style={{ backgroundColor: currentColors.card }}>
        <h3 className="text-lg font-semibold mb-4" style={{ color: currentColors.text }}>
          Quick Actions
        </h3>
      </div>
    </div>
    </div>
  );
};

export default DashboardPage;