import { SliderOfSertificate } from "@/components/SliderOfSertificate/SladerOfSertificate";
import Link from "next/link";

import "./appCV.css";

import vlad from "@/images/person_photo/vlad_blackAndWhite.webp";
import vladColor from "@/images/person_photo/vlad_warm_color.webp";
import github from "@/images/svg/github.svg";
import github_orange from "@/images/svg/orange_github_icon.svg";
import linkedin from "@/images/svg/linkedin.svg";
import linkedin_orange from "@/images/svg/orange_linkedin_icon.svg";
import telegram from "@/images/svg/telegram.svg";
import telegram_orange from "@/images/svg/orange_telegram_icon.svg";
import envelope from "@/images/svg/envelope.svg";
import envelope_orange from "@/images/svg/orange_envelope_icon.svg";
import student_ticket from "@/images/person_photo/student_ticket.webp";
import student_ticket_backside from "@/images/person_photo/student_ticket_backside.webp";

import { Project } from "@/components/Projects/Projects";
import Image from "next/image";
import MovieButton from "@/components/MovieButton/MovieButton";
import AboutMe from "@/components/AboutMe/about_me";
import WorkExperience from "../WorkExperience/WorkExperience";


export default function AppCV() {
  const softSkills = [
    "Communication Skills",
    "Leadership & Mentoring",
    "Adaptability",
    "Creative Problem Solving",
    "Conflict Resolution",
    "Agile Software Development",
    "Client-Facing Skills",
    "Time Management",
  ];
  const technicalSkills = [
    { "Version Control": "Git, GitHub, GitLab" },
    {
      "Front-End Development":
        "React, Next.js, JavaScript, HTML, CSS, Parcel, Tailwind, MUI, Styled Component",
    },
    { "Back-End Development": "Node.js, Express.js, Python" },
    { "API Design & Development": "RESTful APIs, GraphQL" },
    { "Database Management": "MongoDB, Firebase" },
    { "UI/UX Design": "Prototyping in Figma, User-Centered Design" },
    { "Testing Frameworks": "Jest, Testing Library" },
    { "Cloud Platforms": "Heroku, Firebase" },
    {
      "Continuous Integration/Continuous Deployment (CI/CD)":
        "GitHub Actions, Vercel",
    },
    { "Containerization & Orchestration": "Docker" },
  ];

  const moreDetails = {
    Languages: {
      Ukraine: "Native",
      Russian: "Native",
      English: "Upper Intermediate",
    },
    // Nationality: "Ukrainian",
    // Licenses: ["B", "C"],
  };
  const moreDetailsKeys = Object.keys(moreDetails);

  return (
    <div className="maincontainer">
      <aside className="sidebar">
        <div className="linkOfCV">
          <Link
            href="/Vlad_Popov_Resume_Full_Stack_Web_Developer_Frontend_Web_Developer.pdf"
            target="_blank"
            download
          >
            Download CV
          </Link>
          <MovieButton />
        </div>
        <div className="photo">
          <div className="itemWrap" data-aos="flip-up" data-aos-delay="150">
            <Link href="tel:+31616248358">
              <div className="imgWrap">
                <Image
                  className="imgForTeam"
                  src={vlad}
                  alt="vlad"
                  width="auto"
                  height="auto"
                />
                <Image
                  className="imgForTeamColor"
                  src={vladColor}
                  alt="vlad"
                  width="auto"
                  height="auto"
                />
              </div>
            </Link>
            <h4 className="titleItem">Vlad Popov</h4>
            <h5 className="jobItem">Full-Stack Web Developer</h5>
            <h5 className="jobItem">Frontend Web Developer</h5>
            <ul className="socialsList">
              <li className="socialsListItem">
                <a
                  className="socialsListLink"
                  href="https://github.com/StudentVlad5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div style={{ position: "relative" }}>
                    <Image
                      width="24"
                      height="24"
                      src={github.src}
                      alt="github"
                      className="blackIcon"
                    />
                    <Image
                      width="24"
                      height="24"
                      src={github_orange.src}
                      alt="github"
                      className="colorIcon"
                    />
                  </div>
                </a>
              </li>
              <li className="socialsListItem">
                <a
                  className="socialsListLink"
                  href="https://www.linkedin.com/in/vladyslav-popov-a491232a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div style={{ position: "relative" }}>
                    <Image
                      width="24"
                      height="24"
                      src={linkedin.src}
                      alt="linkedin"
                      className="blackIcon"
                    />
                    <Image
                      width="24"
                      height="24"
                      src={linkedin_orange.src}
                      alt="linkedin"
                      className="colorIcon"
                    />
                  </div>
                </a>
              </li>
              <li className="socialsListItem">
                <a
                  className="socialsListLink"
                  href="https://t.me/Vinforam"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div style={{ position: "relative" }}>
                    <Image
                      width="24"
                      height="24"
                      src={telegram.src}
                      alt="telegram"
                      className="blackIcon"
                    />
                    <Image
                      width="24"
                      height="24"
                      src={telegram_orange.src}
                      alt="telegram"
                      className="colorIcon"
                    />
                  </div>
                </a>
              </li>
              <li className="socialsListItem">
                <a className="socialsListLink" href="mailto:vlad_np@ukr.net">
                  <div style={{ position: "relative" }}>
                    <Image
                      width="24"
                      height="24"
                      src={envelope.src}
                      alt="envelope"
                      className="blackIcon"
                    />
                    <Image
                      width="24"
                      height="24"
                      src={envelope_orange.src}
                      alt="envelope"
                      className="colorIcon"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!--details--> */}
        <div className="techskills section">
          <h3 className="sidebar_title">Details</h3>
          <ul className="techskillslist">
            <li className="skills-item">
              <Image
                className="student-ticket-img"
                src={student_ticket}
                alt="student ticket"
                width={200}
                height="auto"
              />
            </li>
            <li className="skills-item">
              <Image
                className="student-ticket-img"
                src={student_ticket_backside}
                alt="student ticket"
                width={200}
                height="auto"
              />
            </li>
            {/* Languages */}
            <li className="skills-item">
              {moreDetailsKeys &&
                moreDetailsKeys.map((item) => {
                  if (typeof moreDetails[item] === "string") {
                    return (
                      <div key={item}>
                        <h3>{item}</h3>
                        <p className="style_period">
                          <span>{moreDetails[item]}</span>
                        </p>
                      </div>
                    );
                  } else if (Array.isArray(moreDetails[item])) {
                    return (
                      <div key={item}>
                        <h3>{item}</h3>
                        <p className="style_period">
                          {moreDetails[item].map((it) => (
                            <span key={it}>{it + " "}</span>
                          ))}
                        </p>
                      </div>
                    );
                  } else {
                    let keyItem = Object.keys(moreDetails[item]);
                    return (
                      <div key={item}>
                        <b>{item}</b>
                        {keyItem.map((it) => (
                          <p className="style_period" key={it}>
                            <span className="black_color_style_education">
                              {it + ": " + moreDetails[item][it]}
                            </span>
                          </p>
                        ))}
                      </div>
                    );
                  }
                })}
            </li>
          </ul>
        </div>

        {/* <!--tech skills--> */}
        <div className="techskills section">
          <h3 className="sidebar_title">Tech Skills</h3>
          <ul className="techskillslist">
            {technicalSkills &&
              technicalSkills.map((item) => (
                <li className="skills-item" key={Object.keys(item)}>
                  <span className="skills-item-text">
                    {Object.keys(item)}:{" "}
                  </span>
                  <br />
                  <span className="skills-item-subtext">
                    {Object.values(item)}
                  </span>
                </li>
              ))}
          </ul>
        </div>
        {/* <!--soft skills--> */}
        <div className="softskills section">
          <h3 className="sidebar_title">Soft Skills</h3>
          <ul className="techskillslist">
            {softSkills &&
              softSkills.map((item) => {
                return (
                  <li className="skills-item" key={item}>
                    <span className="skills-item-text">{item}</span>
                  </li>
                );
              })}
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
          <h2 className="myjob">
            Full-Stack Web Developer, Frontend Web Developer
          </h2>
          <h1 className="myname">Vlad Popov</h1>
          <ul className="myname-details">
            <li>
              <b>No visa sponsorship required.</b>
              <br />{" "}
              <span className="myname-details-text">
                {" "}
                Holder of residence permit under the EU Temporary Protection
                Directive 2001/55/EC (Council Implementing Decision (EU)
                2022/382), granting the right to live and work in the
                Netherlands without a separate work permit.
              </span>
            </li>
            <li>
              <b>Registered</b> as a <b>Private Entrepreneur</b> (FOP) in
              Ukraine.
              <br />
              <span className="myname-details-text">
                Willing to register as a{" "}
                <b>
                  <i>self-employed entrepreneur</i>
                </b>{" "}
                (ZZP) in the Netherlands if required.
              </span>
            </li>
            <li>
              <strong>Based in Zwaag (Hoorn), the Netherlands</strong>.
            </li>
          </ul>

          {/* <!--more information --> */}

          <AboutMe />

          {/* <!--  my projects     --> */}
          <div className="my_project" style={{ position: "relative" }}>
            <h3 className="main-contact-title">Projects</h3>
            <div className="slideContainer">
              <Project />
            </div>
          </div>
          {/* <!--  my work expierences     --> */}

          <WorkExperience />
          {/* <!-- my education--> */}
          <hr className="section-divider" />
          <div className="education">
            <h3 className="main-contact-title">Education</h3>
            {/* <!--  education_1--> */}
            <div className="education4 educate">
              <p className="style_period">
                <span className="style_education">
                  Master&apos;s degree, Computer Science
                </span>
                <span className="black_color_style_education"> | </span>
                Neoversity | Woolf, IT University, 2025 - 2027
              </p>
            </div>
            {/* <!--  education_2--> */}
            <div className="education4 educate">
              <p className="style_period">
                <span className="style_education">Next JS</span>
                <span className="black_color_style_education"> | </span> diploma
                61488832 | Hillel, 2024
              </p>
            </div>
            {/* <!--  education_3--> */}
            <div className="education3 educate">
              <p className="style_period">
                <span className="style_education">Full Stack Developer</span>
                <span className="black_color_style_education"> | </span> diploma
                FS_12607 | GoIT, 2022 - 2023
              </p>
            </div>
            {/* <!--  education_4--> */}
            <div className="education2 educate">
              <p className="style_period">
                <span className="style_education">
                  International certificate
                </span>
                <span className="black_color_style_education"> | </span>{" "}
                Institute of Certified Financial Managers (ICFM), 2011 - 2012
              </p>
            </div>
            {/* <!--  education_5--> */}
            <div className="education1 educate">
              <p className="style_period">
                <span className="style_education">
                  East European University named after Rauf Ablyazov&nbsp;
                </span>{" "}
                | specialist, Business Accounting and Audit, 1993 - 1998
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
