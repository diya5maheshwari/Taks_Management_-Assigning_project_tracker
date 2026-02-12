import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-brand">
          <h2>TaskManager</h2>
          <p>
            A simple task management application to help individuals
            and small teams stay organized and productive.
          </p>
        </div>

        {/* Center */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: support@taskmanager.com</p>
          <p>Location: India</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 TaskManager. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
