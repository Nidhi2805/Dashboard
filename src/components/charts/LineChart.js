import React from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';

const data = [
  { name: 'Jan', sales: 4000, revenue: 2400 },
  { name: 'Feb', sales: 3000, revenue: 1398 },
  { name: 'Mar', sales: 2000, revenue: 9800 },
  { name: 'Apr', sales: 2780, revenue: 3908 },
  { name: 'May', sales: 1890, revenue: 4800 },
  { name: 'Jun', sales: 2390, revenue: 3800 },
  { name: 'Jul', sales: 3490, revenue: 4300 },
];

const LineChart = () => {
  const { theme, themeColors } = useTheme();
  const currentColors = themeColors[theme];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsLineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#475569' : '#cbd5e1'} />
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
        <Line 
          type="monotone" 
          dataKey="sales" 
          stroke={currentColors.primary} 
          activeDot={{ r: 8 }} 
        />
        <Line 
          type="monotone" 
          dataKey="revenue" 
          stroke={currentColors.secondary} 
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;