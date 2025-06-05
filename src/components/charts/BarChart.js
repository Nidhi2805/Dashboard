import React from 'react';
import { 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';

const data = [
  { name: 'Jan', revenue: 4000, expenses: 2400 },
  { name: 'Feb', revenue: 3000, expenses: 1398 },
  { name: 'Mar', revenue: 2000, expenses: 9800 },
  { name: 'Apr', revenue: 2780, expenses: 3908 },
  { name: 'May', revenue: 1890, expenses: 4800 },
  { name: 'Jun', revenue: 2390, expenses: 3800 },
  { name: 'Jul', revenue: 3490, expenses: 4300 },
];

const BarChart = () => {
  const { theme, themeColors } = useTheme();
  const currentColors = themeColors[theme];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart data={data}>
        <CartesianGrid 
          strokeDasharray="3 3" 
          stroke={theme === 'dark' ? '#475569' : '#cbd5e1'} 
        />
        <XAxis 
          dataKey="name" 
          stroke={currentColors.text} 
        />
        <YAxis 
          stroke={currentColors.text} 
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: currentColors.card,
            borderColor: currentColors.primary,
            color: currentColors.text,
          }}
        />
        <Legend />
        <Bar 
          dataKey="revenue" 
          fill={currentColors.primary} 
          radius={[4, 4, 0, 0]}
        />
        <Bar 
          dataKey="expenses" 
          fill={currentColors.secondary} 
          radius={[4, 4, 0, 0]}
        />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;