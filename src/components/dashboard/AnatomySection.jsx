import React from 'react';
import bodyImg from '../../assets/human-body.jpg';
import healthIndicators from '../../data/healthIndicators';

const AnatomySection = () => {
  return (
    <div className="anatomy-section card p-3">
      <h5>DashBoard</h5>
      <div className="position-relative text-center">
        <img src={bodyImg} alt="Body" className="img-fluid anatomy-img" />
        {healthIndicators.map((item, idx) => (
          <div
            key={idx}
            className={`health-indicator text-${item.status}`}
            style={{ top: item.top, left: item.left }}
          >
            <i className={`bi bi-circle-fill me-1`}></i>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;