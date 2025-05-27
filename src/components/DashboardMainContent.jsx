import React from 'react';
import AnatomySection from './dashboard/AnatomySection';
import HealthStatusCards from './dashboard/HealthStatusCards';
import CalendarView from './dashboard/CalendarView';
import UpcomingSchedule from './dashboard/UpcomingSchedule';
import ActivityFeed from './dashboard/ActivityFeed';

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main p-3 p-md-4">
      <div className="row g-4">
        {/* Left Column */}
        <div className="col-12 col-md-7">
          <div className="d-flex flex-column flex-lg-row gap-3 mb-4">
            <div className="flex-grow-1">
              <AnatomySection />
            </div>
            <div className="d-flex flex-column gap-3">
              <HealthStatusCards vertical />
            </div>
          </div>
          <ActivityFeed />
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-5 d-flex flex-column gap-3">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;
