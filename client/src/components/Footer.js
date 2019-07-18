import React from 'react';

const Footer = () => (
  <footer className="page-footer p-2 brown darken-3 white-text">
    <div className="container center">
      <div className="row">
        <div className="col l6 s12 white-text">
          &lt;/&gt; by <a href="https://aaronmassey.pro">Aaron Massey</a>
        </div>
        <div className="col l6 s12">
          View this project's code on{' '}
          <a
            href="https://github.com/aaronmassey45/personal-library"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
