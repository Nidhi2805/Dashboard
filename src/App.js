import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import DashboardPage from './pages/DashboardPage';
import TablesPage from './pages/TablesPage';
import ChartsPage from './pages/ChartsPage';
import CalendarPage from './pages/CalendarPage';
import KanbanPage from './pages/KanbanPage';
import Sidebar from './components/common/Sidebar';
import Header from './components/common/Header';
import SettingsPage from './pages/SettingsPage';
import { Toaster } from 'sonner';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
          <Sidebar />
          <div className="flex flex-col flex-1 overflow-hidden">
            <Header />
            <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex-1 overflow-x-hidden overflow-y-auto p-6"
          >
            <div className="max-w-7xl mx-auto">
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/tables" element={<TablesPage />} />
                <Route path="/charts" element={<ChartsPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/kanban" element={<KanbanPage />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Routes>
            </div>
          </motion.main>
          </div>
          <Toaster position="top-right" richColors expand={true} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;