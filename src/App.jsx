import React from 'react';
import Sidebar from './components/sidebar/Sidebar'
import './App.css'
import ThemeToggle from './components/toggles/ThemeToggle'
import ScrollUpToggle from './components/toggles/ScrollUpToggle'
import { ThemeProvider } from './context/ThemeContext';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <ScrollUpToggle />
      <Sidebar />
      <div className="main">
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
