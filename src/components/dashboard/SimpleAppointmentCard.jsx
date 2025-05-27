import React from 'react';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="d-flex align-items-center p-2 border rounded bg-light shadow-sm mb-2" style={{ minWidth: '180px' }}>
      <i className={`bi ${icon} me-3 fs-5 text-primary`}></i>
      <div>
        <div className="fw-bold">{title}</div>
        <div className="text-muted small">{time}</div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
