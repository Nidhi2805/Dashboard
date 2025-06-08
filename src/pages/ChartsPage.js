import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';

const ChartsPage = () => {
  const { theme, themeColors } = useTheme();
  const currentColors = themeColors[theme];

  return (
    <div className="space-y-6 p-4">
      <div 
        className="p-6 rounded-lg shadow-sm"
        style={{ backgroundColor: currentColors.card }}
      >
        <h2 
          className="text-xl font-semibold mb-4"
          style={{ color: currentColors.text }}
        >
          Analytics Dashboard
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg">
            <h3 
              className="text-lg font-medium mb-3"
              style={{ color: currentColors.text }}
            >
              Sales Trend
            </h3>
            <div className="h-80">
              <LineChart />
            </div>
          </div>

          <div className="p-4 rounded-lg">
            <h3 
              className="text-lg font-medium mb-3"
              style={{ color: currentColors.text }}
            >
              Revenue Breakdown
            </h3>
            <div className="h-80">
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsPage;