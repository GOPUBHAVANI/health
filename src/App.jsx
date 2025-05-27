import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="app-container d-flex">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-grow-1">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;
