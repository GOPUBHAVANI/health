import React from 'react';
import healthCards from '../../data/healthCards';

const HealthStatusCards = ({ vertical }) => {
  const renderCard = (card, idx) => (
    <div className="card p-3 shadow-sm d-flex flex-row align-items-center gap-3" key={idx}>
      {/* Left Icon */}
      <div
        className="icon-box bg-light rounded-circle d-flex align-items-center justify-content-center"
        style={{ width: '50px', height: '50px' }}
      >
        <i className={`bi ${card.icon} fs-4 text-primary`}></i>
      </div>

      {/* Right Content */}
      <div>
        <h6 className="mb-1">{card.title}</h6>
        <p className="mb-1 small text-muted">{card.date}</p>
        <span className={`badge bg-${card.status === 'Good' ? 'success' : 'danger'}`}>
          {card.status}
        </span>
      </div>
    </div>
  );

  return vertical ? (
    <div
      className="d-flex flex-column gap-3 overflow-auto"
      style={{ maxHeight: 'calc(100vh - 150px)' }}
    >
      {healthCards.map(renderCard)}
    </div>
  ) : (
    <div className="row mt-3">
      {healthCards.map((card, idx) => (
        <div className="col-12 col-sm-6 col-lg-4 mb-3" key={idx}>
          {renderCard(card, idx)}
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
