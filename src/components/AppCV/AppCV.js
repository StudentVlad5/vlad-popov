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

import { Project } from "@/components/Projects/Projects";
import Image from "next/image";
import MovieButton from "../MovieButton/MovieButton";

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
        "React, Next.js, JavaScript (ES6+), HTML, CSS, Parcel",
    },
    { "Back-End Development": "Node.js, Express.js" },
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
  const details = [
    "Visa sponsorship is not required",
    "Residence permit",
    "Zwaag (Hoorn), The Netherlands",
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
            {details &&
              details.map((item) => (
                <li className="skills-item" key={item}>
                  <span className="skills-item-text">{item}</span>
                </li>
              ))}
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
          <div className="about_me_description">
            <p>
              In the past few years, my life has changed a lot. Due to the war
              in Ukraine, I had to leave behind everything I had — including my
              savings — and start from zero in a new country.
            </p>
            <p>
              {" "}
              Right now, I’m working two jobs to support myself. My full-time
              role is in compliance, which gives me a stable income. But my real
              passion is software development, which I currently do part-time as
              a web developer. I truly enjoy building tech products and solving
              real problems with code.
            </p>{" "}
            <p>
              {" "}
              I’m also studying <b>Computer Science at Woolf</b>, a European
              university, and I’m constantly improving my English. Every day, I
              work hard to grow as a developer and prepare for a full-time role
              in the IT industry.
            </p>
            <p>
              I’m now looking for a full-time software development position
              where I can fully focus on one role, continue learning, and
              contribute to a great team. I’m open to a probation period or test
              tasks — I’m ready to prove my skills and dedication, as long as
              the compensation supports a basic standard of living.
            </p>
            <p>
              Over the years, I’ve worked on many projects — from early-stage
              startups to large-scale enterprise applications. I focus on clean
              code, good architecture, and great user experience. My main tech
              stack includes:
            </p>
            <ul>
              <li>
                <b>Frontend:</b> React, Next.js, TypeScript, Redux, Zustand
              </li>
              <li>
                <b>Backend:</b> Node.js, Express, GraphQL, REST APIs
              </li>
              <li>
                <b>Databases:</b> MongoDB, PostgreSQL, Firebase
              </li>
              <li>
                <b>Cloud & Deployment:</b> AWS, Vercel, Netlify
              </li>
              <li>
                <b>Auth:</b> JWT, OAuth
              </li>
            </ul>
            <p>
              I enjoy working in teams that value collaboration, learning, and
              building products that make a difference. I’m especially
              interested in areas like{" "}
              <b>fintech, healthcare, gaming, e-commerce, or blockchain.</b>
            </p>
            <p>
              Thanks for reading my story. I’m truly grateful to anyone willing
              to give me a chance to grow and contribute as a full-time
              developer. Feel free to reach out — I’d love to connect and talk
              about opportunities.
            </p>
          </div>

          {/* <!--  my projects     --> */}
          <div className="my_project" style={{ position: "relative" }}>
            <h3 className="main-contact-title">Projects</h3>
            <div className="slideContainer">
              <Project />
            </div>
          </div>
          {/* <!--  my work expierences     --> */}
          <div className="workexpiriens">
            <h3 className="main-contact-title">Work Experience</h3>
            {/* <!--  company_1--> */}
            <div className="company1 job">
              <h4 className="style_job">
                Full-Stack Web Developer{" "}
                <span className="text_style_orange">at Brand MAZE</span>
              </h4>
              <p className="text_style_about">
                {" "}
                IT company for website design and development
              </p>
              <p className="style_period">2022 - up to now </p>
              <p className="text_style_blue">
                <Link
                  href="https://brand-maze.com/"
                  alt="Brand Maze"
                  target="_blank"
                >
                  https://brand-maze-agency.vercel.app/
                </Link>
              </p>

              <ul className="description-of-duties">
                <li className="duty_item">
                  Developed modern, responsive web applications, achieving a
                  100% customer satisfaction rating.
                </li>
                <li className="duty_item">
                  Collaborated with a team of developers to maintain code
                  consistency and ensure best practices across over 60 completed
                  projects.
                </li>
                <li className="duty_item">
                  Hands-on experience in both front-end and back-end development
                  using technologies such as React, Node.js, Express, MongoDB,
                  and Firebase.
                </li>
              </ul>
            </div>
            {/* <!--  company_2--> */}
            <div className="company2 job">
              <h4 className="style_job">
                Project manager{" "}
                <span className="text_style_orange">at RozetkaUa LTD</span>
              </h4>
              <p className="text_style_about"> online marketplace</p>
              <p className="style_period">2018 - up to now </p>
              <p className="text_style_blue">
                <Link
                  href="https://rozetka.com.ua/ua/"
                  alt="Rozetka"
                  target="_blank"
                >
                  https://rozetka.com.ua/ua/
                </Link>
              </p>
              <ul className="description-of-duties">
                <li className="duty_item">
                  Led the implementation of payment systems for sellers,
                  including Visa & MasterCard, Apple & Google Pay, and loans,
                  leading to a 25% increase in sales.
                </li>
                <li className="duty_item">
                  Utilized Agile methodology to drive successful product
                  launches.
                </li>
                <li className="duty_item">
                  Worked cross-functionally with teams to optimize user
                  experience and backend integration.
                </li>
              </ul>
            </div>
            {/* <!--  company_3--> */}
            <div className="company3 job">
              <h4 className="style_job">
                Project manager{" "}
                <span className="text_style_orange"> at ALFA LLC</span>{" "}
              </h4>
              <p className="text_style_about">
                {" "}
                production of boats and polyester products
              </p>
              <p className="style_period">2017 - 2018 </p>
              <ul className="description-of-duties">
                <li className="duty_item">
                  Team of sales representatives leading to exceed sales targets
                  by 100%, resulting in increased profits for the company
                </li>
                <li className="duty_item">
                  Establishment of a new sales channel that increased sales by
                  50% within the first year of implementation
                </li>
              </ul>
            </div>
            {/* <!--  company_4--> */}
            <div className="company4 job">
              <h4 className="style_job">
                Project Manager{" "}
                <span className="text_style_orange">at Foxtrot LTD</span>{" "}
              </h4>
              <p className="text_style_about">
                {" "}
                retail network of sales of electronics and household appliances
              </p>
              <p className="style_period"> 2004 - 2017 </p>
              <p className="text_style_blue">
                <Link
                  href="https://www.foxtrot.com.ua/"
                  alt="Foxtrot"
                  target="_blank"
                >
                  https://www.foxtrot.com.ua/
                </Link>
              </p>
              <ul className="description-of-duties">
                <li className="duty_item">
                  Managed a complex software project with an annual budget of
                  $15 million, ensuring delivery on time and within budget.
                </li>
                <li className="duty_item">
                  Spearheaded the development and implementation of new tools,
                  contributing significantly to increased sales.
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- my education--> */}
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
          {/* <!--more information --> */}
          <div className="moreDetail">
            {moreDetailsKeys &&
              moreDetailsKeys.map((item) => {
                if (typeof moreDetails[item] === "string") {
                  return (
                    <div key={item}>
                      <h3 className="main-contact-title">{item}</h3>
                      <p className="style_period">
                        <span className="black_color_style_education">
                          {moreDetails[item]}
                        </span>
                      </p>
                    </div>
                  );
                } else if (Array.isArray(moreDetails[item])) {
                  return (
                    <div key={item}>
                      <h3 className="main-contact-title">{item}</h3>
                      <p className="style_period">
                        {moreDetails[item].map((it) => (
                          <span
                            key={it}
                            className="black_color_style_education"
                          >
                            {it + " "}
                          </span>
                        ))}
                      </p>
                    </div>
                  );
                } else {
                  let keyItem = Object.keys(moreDetails[item]);
                  return (
                    <div key={item}>
                      <h3 className="main-contact-title">{item}</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
}
