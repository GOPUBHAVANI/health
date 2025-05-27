import React from 'react';

const ActivityFeed = () => {
  return (
    <div className="card p-3 mt-3">
      <h5>Activity</h5>
      <p className="mb-1">3 appointments this week</p>
      <div className="activity-chart d-flex gap-2">
        {[40, 80, 60, 30, 90, 50].map((height, idx) => (
          <div key={idx} className="bar" style={{ height: `${height}px` }}></div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;