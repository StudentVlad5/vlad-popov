"use client";
import { SliderOfSertificate } from "@/components/SliderOfSertificate/SladerOfSertificate";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { BiCameraMovie } from "react-icons/bi";

import "./appCV.css";

import vlad from "@/images/person_photo/vlad_blackAndWhite.webp";
import vladColor from "@/images/person_photo/vlad_warm_color.webp";
import github from "@/images/svg/github.svg";
import linkedin from "@/images/svg/linkedin.svg";
import telegram from "@/images/svg/telegram.svg";
import envelope from "@/images/svg/envelope.svg";

import { Project } from "@/components/Projects/Projects";
import Image from "next/image";
// import { openModalWindow } from "hooks/ModalWindow";
// import { ModalWindow } from "../ModalWindow/ModalWindow";
// import { useState } from "react";

export default function AppCV() {
  Aos.init();
  // const [isPlaying, setPlaying] = useState(false);

  const hendleOpenModalWindow = (e) => {
    // setPlaying(true);
    // openModalWindow(e);
  };

  return (
    <div className="maincontainer">
      <aside className="sidebar">
        <div className="linkOfCV">
          <Link
            href="/src/images/Vladyslav_Popov_-_Full_Stack_Web_Developer,_Frontend_Web_Developer.pdf"
            target="_blank"
            download
          >
            Download CV
          </Link>
          <button
            className="buttonMovie"
            type="button"
            onClick={(e) => hendleOpenModalWindow(e)}
          >
            <BiCameraMovie />
          </button>
        </div>
        <div className="photo">
          <div className="itemWrap" data-aos="flip-up" data-aos-delay="150">
            <div className="imgWrap">
              <Image className="imgForTeam" src={vlad} alt="vlad" />
              <Image className="imgForTeamColor" src={vladColor} alt="vlad" />
            </div>
            <h4 className="titleItem">Vlad Popov</h4>
            <h5 className="jobItem">Full-Stack Developer</h5>
            <h5 className="jobItem">Project Manager</h5>
            <ul className="socialsList">
              <li className="socialsListItem">
                <a
                  className="socialsListLink"
                  href="https://github.com/StudentVlad5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg width="20" height="20">
                    <use href={github}></use>
                  </svg>
                </a>
              </li>
              <li className="socialsListItem">
                <a
                  className="socialsListLink"
                  href="https://www.linkedin.com/in/vladyslav-popov-a491232a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg width="20" height="20">
                    <use href={linkedin}></use>
                  </svg>
                </a>
              </li>
              <li className="socialsListItem">
                <a
                  className="socialsListLink"
                  href="https://t.me/Vinforam"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg width="20" height="20">
                    <use href={telegram}></use>
                  </svg>
                </a>
              </li>
              <li className="socialsListItem">
                <a className="socialsListLink" href="mailto:vlad_np@ukr.net">
                  <svg width="20" height="20">
                    <use href={envelope}></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!--tech skills--> */}
        <div className="techskills section">
          <h3 className="sidebar_title">Tech Skills</h3>
          <ul className="techskillslist">
            <li className="skills-item">
              <span className="skills-item-text">HTML5</span>
            </li>
            <li className="skills-item">
              <span className="skills-item-text">CSS3</span>
            </li>
            <li className="skills-item">
              <span className="skills-item-text">GIT</span>
            </li>
            <li className="skills-item">
              <span className="skills-item-text">JAVASCRIPT</span>
            </li>
            <li className="skills-item">
              <span className="skills-item-text">REACT</span>
            </li>
            <li className="skills-item">
              <span className="skills-item-text">NODE JS</span>
            </li>
            <li className="skills-item">
              <span className="skills-item-text">REACT-NATIVE</span>
            </li>
            <li className="skills-item">
              <span className="skills-item-text">TYPESCRIPT</span>
            </li>
          </ul>
        </div>
        {/* <!--soft skills--> */}
        <div className="softskills section">
          <h3 className="sidebar_title">Soft Skills</h3>
          <ul className="techskillslist">
            <li className="skills-item">
              <span className="skills-item-text">Scrum</span>
            </li>
            <li className="skills-item">
              <span className="skills-item-text">Agile</span>
            </li>
            <li className="skills-item">
              <span className="skills-item-text">Communication</span>
            </li>
            <li className="skills-item">
              <span className="skills-item-text">Teamwork</span>
            </li>
            <li className="skills-item">
              <span className="skills-item-text">
                Ability to concede deadlines
              </span>
            </li>
            <li className="skills-item">
              <span className="skills-item-text">Time management</span>
            </li>
            <li className="skills-item">
              <span className="skills-item-text">Stress management</span>
            </li>
          </ul>
        </div>
        {/* <!--sertificates--> */}
        <div className="sliderOfSertification section">
          <h3 className="sidebar_title">Sertificates</h3>
          <SliderOfSertificate />
        </div>
      </aside>
      <div className="right_side">
        {/* <!--  about_me_section     --> */}
        <div className="aboutme">
          <h2 className="myjob">Full-Stack-Developer</h2>
          <h2 className="myjob">Project Manager</h2>
          <h1 className="myname">Vlad Popov</h1>
          <p className="about_me_description">
            Project-owner, usiness analyst.Financial management. Organization of
            ccounting and reporting, internal financial control. Development of
            business plans, audit, analysis of results. Operational component of
            the department, control of team schedule.
          </p>
          {/* <!--  my projects     --> */}
          <div className="my_project" style={{ position: "relative" }}>
            <h3 className="main-contact-title">Projects</h3>
            <Project />
          </div>
          {/* <!--  my work expierences     --> */}
          <div className="workexpiriens">
            <h3 className="main-contact-title">Work Experience</h3>
            {/* <!--  company_1--> */}
            <div className="company1 job">
              <h4 className="style_job">
                Front-End Developer{" "}
                <span className="text_style_orange">Freelance</span>
              </h4>
              <p className="style_period">
                January 2022 - up to now{" "}
                <span className="black_color_style_period"> | </span> Ukraine
              </p>
              <ul className="description-of-duties">
                <li className="duty_item">Help in social projects</li>
                <li className="duty_item">Improve the level of programming</li>
                <li className="duty_item">Implementing own projects</li>
              </ul>
            </div>
            {/* <!--  company_2--> */}
            <div className="company2 job">
              <h4 className="style_job">
                Manager <span className="text_style_orange">RozetkaUa LTD</span>
              </h4>
              <p className="style_period">
                May 2016 - up to now{" "}
                <span className="black_color_style_period"> | </span> Ukraine
              </p>
              <ul className="description-of-duties">
                <li className="duty_item">Development of a strategic plan</li>
                <li className="duty_item">Projects of increase sales</li>
                <li className="duty_item">
                  Communication with project customers
                </li>
                <li className="duty_item">Analysis of results</li>
              </ul>
            </div>
            {/* <!--  company_3--> */}
            <div className="company3 job">
              <h4 className="style_job">
                Manager{" "}
                <span className="text_style_orange">UMS Polyester LTD</span>{" "}
              </h4>
              <p className="style_period">
                September 2015 - May 2016{" "}
                <span className="black_color_style_period"> | </span> Ukraine
              </p>
              <ul className="description-of-duties">
                <li className="duty_item">Searching for new partners</li>
                <li className="duty_item">
                  Organization of the operational process of ordering
                </li>
                <li className="duty_item">Coordination of cooperation</li>
              </ul>
            </div>
            {/* <!--  company_4--> */}
            <div className="company4 job">
              <h4 className="style_job">
                Manager <span className="text_style_orange">Foxtrot LTD</span>{" "}
              </h4>
              <p className="style_period">
                {" "}
                april 2004 - september 2015{" "}
                <span className="black_color_style_period"> | </span> Ukraine
              </p>
              <ul className="description-of-duties">
                <li className="duty_item">Development of credit sales</li>
                <li className="duty_item">Development of credit programs</li>
                <li className="duty_item">
                  Simplifying the process of buying on credit
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- my education--> */}
          <div className="education">
            <h3 className="main-contact-title">Education</h3>
            {/* <!--  education_1--> */}
            <div className="education1 educate">
              <h4 className="style_education">
                Institute of Business Management
              </h4>
              <h5 className="style_specialty">Audit, economics, accounting</h5>
              <p className="style_period">
                September 1993 - June 1998{" "}
                <span className="black_color_style_education"> | </span> Ukraine
              </p>
            </div>
            {/* <!--  education_2--> */}
            <div className="education2 educate">
              <h4 className="style_education">ICFM</h4>
              <h5 className="style_specialty">
                ICFM. International certificate of the Institute of Certified
                Financial Managers
              </h5>
              <p className="style_period">
                March 2011 - September 2012{" "}
                <span className="black_color_style_education"> | </span> Ukraine
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <ModalWindow isPlaying={isPlaying} setPlaying={setPlaying} /> */}
    </div>
    //   </body>
    // </html>
  );
}
