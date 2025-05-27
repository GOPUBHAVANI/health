import React from 'react';
import calendarData from '../../data/calendarData';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CalendarView = () => {
  return (
    <div className="calendar-view bg-white rounded shadow-sm p-3 mb-4">
      <h5 className="mb-3 fw-bold">Activity</h5>
      <div className="row row-cols-7 g-2 text-center">
        {daysOfWeek.map((day, index) => {
          const dayData = calendarData[index] || { date: '-', times: [] };

          return (
            <div className="col" key={index}>
              <div className="calendar-cell p-2 border rounded bg-light h-100">
                <div className="fw-semibold text-secondary">{day}</div>
                <div className="text-dark">{dayData.date}</div>
                <div className="mt-1 small text-muted">
                  {dayData.times.length > 0 ? (
                    dayData.times.map((time, i) => (
                      <div key={i} className="badge bg-primary-subtle text-primary fw-normal me-1 mb-1">
                        {time}
                      </div>
                    ))
                  ) : (
                    <div className="text-muted small">No slots</div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarView;
