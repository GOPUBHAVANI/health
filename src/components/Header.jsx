import React from 'react';
import profileImg from '../assets/ava.jpg';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 shadow-sm">
      <button className="btn btn-outline-primary d-md-none me-2" onClick={toggleSidebar}>
        <i className="bi bi-list"></i>
      </button>

      <div className="flex-grow-1 mx-2">
        <input
          type="text"
          className="form-control search-input text-center"
          placeholder="Search..."
        />
      </div>

      <div className="d-flex align-items-center gap-3">
        <i className="bi bi-bell fs-5"></i>
        <img
          src={profileImg}
          alt="Profile"
          className="rounded-circle"
          style={{ width: 32, height: 32, objectFit: 'cover' }}
        />
        <button
          className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: 36, height: 36 }}
        >
          <i className="bi bi-plus"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
