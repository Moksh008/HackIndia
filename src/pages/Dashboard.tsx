import React from 'react';
import Dashboard from '@/components/dash/dashboard';
import ConditionalNavigation from '@/components/ConditionalNavigation';

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <ConditionalNavigation />
      
      <div className="ml-16">
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardPage;