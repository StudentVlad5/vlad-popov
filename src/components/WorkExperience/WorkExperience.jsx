import React from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
  return (
    <div className="work-experience-container">
      <hr className="section-divider" />
      <h3 className="main-title">Work Experience</h3>

      {/* Company 1 */}
      <div className="job-entry">
        <h4 className="job-title">
          Production Operator <span className="company-name">at Gaia B.V.</span>
        </h4>
        <p className="job-description">Textile company in the Netherland</p>
        <p className="job-period">2026 (7 months contract)</p>
        <p className="job-link">
          <a
            href="https://www.telefoonboek.nl/bedrijven/t3029407/hem/gaia-b.v./"
            target="_blank"
            rel="noopener noreferrer"
          >
            gaia-b.v.
          </a>
        </p>
        <ul className="job-duties">
          <li>
            Architected and deployed an internal web dashboard using React,
            Node.js, and PostgreSQL to track daily operational throughput and
            analyze real-time performance metrics.
          </li>
          <li>
            Coordinated cross-functional order fulfillment processes with plant
            leadership, successfully reducing operational delays and eliminating
            workflow bottlenecks.
          </li>
          <li>
            Managed high-volume automated sorting and packaging operations
            handling up to 10 tons per day using gravity-based systems, ensuring
            full compliance and efficient warehouse dispatch handling.
          </li>
        </ul>
      </div>

      {/* Company 2 */}
      <div className="job-entry">
        <h4 className="job-title">
          Project Manager <span className="company-name">at RozetkaUa LTD</span>
        </h4>
        <p className="job-description">Leading Ukrainian online marketplace</p>
        <p className="job-period">2018 – 2026</p>
        <p className="job-link">
          <a
            href="https://rozetka.com.ua/ua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            rozetka.com.ua
          </a>
        </p>
        <ul className="job-duties">
          <li>
            Implemented online payment systems, increasing seller sales by 25%.
          </li>
          <li>
            Led Agile sprints to deliver features on time and meet stakeholder
            expectations.
          </li>
          <li>
            Collaborated across teams to enhance both backend workflows and
            frontend UX.
          </li>
        </ul>
      </div>

      {/* Company 3 */}
      <div className="job-entry">
        <h4 className="job-title">
          Full-Stack Web Developer{" "}
          <span className="company-name">at Brand MAZE</span>
        </h4>
        <p className="job-description">
          IT company specializing in web design and development
        </p>
        <p className="job-period">2022 – 2026</p>
        <p className="job-link">
          <a
            href="https://brand-maze-agency.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            brand-maze-agency.vercel.app
          </a>
        </p>
        <ul className="job-duties">
          <li>
            Developed modern, responsive web applications with a 100% client
            satisfaction rate.
          </li>
          <li>
            Worked on 120+ projects ensuring code quality, performance, and
            UI/UX best practices.
          </li>
          <li>
            Hands-on development across the stack using React, Node.js, MongoDB,
            Firebase, and more.
          </li>
        </ul>
      </div>

      {/* Company 3 */}
      <div className="job-entry">
        <h4 className="job-title">
          Project Manager <span className="company-name">at ALFA LLC</span>
        </h4>
        <p className="job-description">
          Manufacturer of boats and polyester products
        </p>
        <p className="job-period">2017 – 2018</p>
        <ul className="job-duties">
          <li>
            Led a sales team that doubled revenue by exceeding targets by 100%.
          </li>
          <li>
            Launched a new sales channel that boosted sales by 50% in the first
            year.
          </li>
        </ul>
      </div>

      {/* Company 4 */}
      <div className="job-entry">
        <h4 className="job-title">
          Project Manager <span className="company-name">at Foxtrot LTD</span>
        </h4>
        <p className="job-description">
          Retail chain of electronics and appliances
        </p>
        <p className="job-period">2004 – 2017</p>
        <p className="job-link">
          <a
            href="https://www.foxtrot.com.ua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            foxtrot.com.ua
          </a>
        </p>
        <ul className="job-duties">
          <li>Managed a $15M software project from concept to completion.</li>
          <li>
            Introduced tools and systems that significantly increased company
            sales.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
