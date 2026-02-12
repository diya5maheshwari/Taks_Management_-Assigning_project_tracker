import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div className="about-page">

      <section className="about-header">
        <h1>About TaskManager</h1>
        <p>
          A simple and powerful task management solution designed
          to improve productivity for individuals and small teams.
        </p>
      </section>

      <section className="about-content">

        <div className="about-block">
          <h2>What is TaskManager?</h2>
          <p>
            TaskManager is a web-based task management application that helps
            users organize their work, manage tasks efficiently, and track
            progress in a structured way. It focuses on clarity, simplicity,
            and ease of use.
          </p>
        </div>

        <div className="about-block">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide a clean and user-friendly platform
            where users can manage their tasks without complexity.
            TaskManager is built to support productivity and collaboration
            for small teams.
          </p>
        </div>

        <div className="about-block">
          <h2>Key Features</h2>
          <ul>
            <li>Create and manage tasks easily</li>
            <li>Assign tasks to team members</li>
            <li>Track task progress in real time</li>
            <li>Secure authentication and personal dashboards</li>
          </ul>
        </div>

        <div className="about-block">
          <h2>Technology Stack</h2>
          <p>
            This project is built using modern web technologies including
            React for the frontend, Node.js and Express for the backend,
            and MongoDB for database management.
          </p>
        </div>

      </section>
    </div>
  );
};

export default About;
