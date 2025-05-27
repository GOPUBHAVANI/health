import React from 'react';
import scheduleData from '../../data/scheduleData';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => {
  return (
    <div className="card p-3 mb-4">
      <h5 className="mb-3">The Upcoming Schedule</h5>
      {scheduleData.map((group, index) => (
        <div key={index} className="mb-4">
          <h6 className="text-muted">{group.day}</h6>
          <div className="d-flex flex-wrap gap-3 mt-2">
            {group.appointments.map((appt, idx) => (
              <SimpleAppointmentCard key={idx} {...appt} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
