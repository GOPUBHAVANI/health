import React from 'react';
import navLinks from '../data/navlinks';

const Sidebar = ({ isOpen }) => {
  const mainNav = navLinks.slice(0, -1);
  const bottomNav = navLinks[navLinks.length - 1];

  return (
    <aside
      className={`sidebar bg-white shadow-sm p-3 d-flex flex-column ${
        isOpen ? 'd-flex' : 'd-none'
      } d-md-flex`}
      style={{ width: '250px', minHeight: '100vh' }}
    >
      <h5 className="pe-3 mb-4">
        <span className="text-primary">Health</span>care
      </h5>

      <div>
        {mainNav.map((group, idx) => (
          <div key={idx} className="mb-4">
            <h6 className="text-muted text-uppercase fw-semibold mt-2 mb-2">
              {group.section}
            </h6>
            <ul className="list-unstyled">
              {group.links.map((link, index) => (
                <li
                  key={index}
                  className="nav-link d-flex align-items-center p-2 rounded text-dark sidebar-link"
                >
                  <i className={`bi ${link.icon} me-2`}></i>
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-3 border-top">
        <ul className="list-unstyled">
          {bottomNav.links.map((link, index) => (
            <li
              key={index}
              className="nav-link d-flex align-items-center p-2 rounded text-dark sidebar-link"
            >
              <i className={`bi ${link.icon} me-2`}></i>
              {link.label}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
