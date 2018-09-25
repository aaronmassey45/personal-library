import React from 'react';

export default () => {
  return (
    <nav className="nav-extended amber lighten-1">
      <div className="nav-wrapper ">
        <span className="brand-logo grey-text text-darken-4">
          Personal Library
        </span>
      </div>
      <div className="nav-content">
        <ul className="tabs tabs-transparent">
          <li className="tab hoverable">
            <a
              href="https://aaronmassey.pro/projects"
              className="grey-text text-darken-4"
            >
              Portfolio
            </a>
          </li>
          <li className="tab hoverable">
            <a
              href="https://github.com/aaronmassey45/personal-library"
              target="_blank"
              rel="noopener noreferrer"
              className="grey-text text-darken-4"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
