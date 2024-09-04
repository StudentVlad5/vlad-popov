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
  const techSkills = [
    "Figma",
    "Next Js",
    "React",
    "Node",
    "JavaScript",
    "Express",
    "HTML",
    "CSS",
    "Parcel",
    "GitHub",
    "MongoDB",
    "Firebase",
  ];
  const softSkills = [
    "Communication Skills",
    "Teamwork",
    "Hard Working",
    "Problem Solving",
    "Project Management Skills",
    "Agile Software Development",
    "Business Operations",
  ];
  const details = [
    "Visa sponsorship is not required",
    "Residents permit",
    "Zaandam, Netherlands",
  ];
  const moreDetails = {
    Nationality: "Ukrainian",
    License: ["B", "C"],
    Languages: {
      Ukraine: "native",
      Russian: "native",
      English: "intermediate",
    },
  };
  const moreDetailsKeys = Object.keys(moreDetails);

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
          <MovieButton />
        </div>
        <div className="photo">
          <div className="itemWrap" data-aos="flip-up" data-aos-delay="150">
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
                  <div styles={{ position: "relative" }}>
                    <Image
                      width="20"
                      height="20"
                      src={github.src}
                      alt="github"
                      className="blackIcon"
                    />
                    <Image
                      width="20"
                      height="20"
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
                  <div styles={{ position: "relative" }}>
                    <Image
                      width="20"
                      height="20"
                      src={linkedin.src}
                      alt="linkedin"
                      className="blackIcon"
                    />
                    <Image
                      width="20"
                      height="20"
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
                  <div styles={{ position: "relative" }}>
                    <Image
                      width="20"
                      height="20"
                      src={telegram.src}
                      alt="telegram"
                      className="blackIcon"
                    />
                    <Image
                      width="20"
                      height="20"
                      src={telegram_orange.src}
                      alt="telegram"
                      className="colorIcon"
                    />
                  </div>
                </a>
              </li>
              <li className="socialsListItem">
                <a className="socialsListLink" href="mailto:vlad_np@ukr.net">
                  <div styles={{ position: "relative" }}>
                    <Image
                      width="20"
                      height="20"
                      src={envelope.src}
                      alt="envelope"
                      className="blackIcon"
                    />
                    <Image
                      width="20"
                      height="20"
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
            {techSkills &&
              techSkills.map((item) => (
                <li className="skills-item" key={item}>
                  <span className="skills-item-text">{item}</span>
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
          <h2 className="myjob">Full-Stack Web Developer</h2>
          <h2 className="myjob">Frontend Web Developer</h2>
          <h1 className="myname">Vlad Popov</h1>
          <p className="about_me_description">
            I am a <b>highly motivated</b> individual with a deep passion for
            web development, and I believe my skills and experiences align well
            with the needs of my new projects. Some months ago I relocated to the Netherlands from war at home. Since then, have permission for the work, found an apartment, and am now seeking a position where I can fully apply and develop my skills in the IT field. <br/>This challenging period has only strengthened my determination to succeed and contribute meaningfully in a professional setting. I bring hands-on experience from a range of projects, including startups and high-responsibility corporate initiatives. Throughout my career, I have successfully delivered projects of varying complexity, consistently meeting or exceeding expectations. My approach to development is user-centric, ensuring that web applications are not only functional but also intuitive and easy to navigate. Although my previous experience is rooted in Ukraine, I am fully prepared and eager to adapt to new challenges and environments. My technical expertise includes <b>JavaScript, HTML, CSS, React, Next.js, Node.js,and Express</b>. I am passionate about staying up-to-date with the latest advancements in programming and am committed to continuous learning and skill development. My enthusiasm for coding drives me to constantly improve, and I am confident that I can bring this dedication to my new role.
          </p>
          {/* <!--more information --> */}
          <div className="moreDetail">
            {moreDetailsKeys &&
              moreDetailsKeys.map((item) => {
                if (typeof moreDetails[item] === "string") {
                  return (
                    <div key={item}>
                      <h4 className="style_education">{item}</h4>
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
                      <h4 className="style_education">{item}</h4>
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
                      <h4 className="style_education">{item}</h4>
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
                Full-Stack Web Developer{" "}
                <span className="text_style_orange">at Brand MAZE</span>
              </h4>
              <p className="text_style_about">
                {" "}
                IT company for website design and development
              </p>
              <p className="style_period">
                2022 - up to now{" "}
                <span className="black_color_style_period"> | </span> Ukraine
              </p>
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
                  Development of web applications with modern, responsive user
                  interface, achieving satisfaction rating of 100%
                </li>
                <li className="duty_item">
                  Collaboration with other developers to ensure code consistency
                  and best practices. More than 60 completed projects (details
                  at the Portfolio links)
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
              <p className="style_period">
                2018 - up to now{" "}
                <span className="black_color_style_period"> | </span> Ukraine
              </p>
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
                  Agile methodology and tools usage to ensure successful product
                  launch, leading to 25% increase in sales
                </li>
                <li className="duty_item">
                  Implementation of payment methods for sellers on the
                  marketplace: payment by Visa & MasterCard, Apple & Google pay
                  and loans
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
              <p className="style_period">
                2017 - 2018{" "}
                <span className="black_color_style_period"> | </span> Ukraine
              </p>
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
              <p className="style_period">
                {" "}
                2004 - 2017{" "}
                <span className="black_color_style_period"> | </span> Ukraine
              </p>
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
                  Implementation of a complex software project with a budget of
                  $15 million/year, completing it on time and within budget
                </li>
                <li className="duty_item">
                  Development and implementation of new tools to increase the
                  company&s sales
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
              <h5 className="style_specialty">
                {" "}
                Master of Business Administration (MBA), Finance, Accounting and
                Audit, Institute of Business Management, Ukraine
              </h5>
              <p className="style_period">
                1993 - 1998{" "}
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
                2011 - 2012{" "}
                <span className="black_color_style_education"> | </span> Ukraine
              </p>
            </div>
            {/* <!--  education_3--> */}
            <div className="education3 educate">
              <h4 className="style_education">GoIT</h4>
              <h5 className="style_specialty">
                diploma FS_12607, Full Stack Developer
              </h5>
              <p className="style_period">
                2022 - 2023{" "}
                <span className="black_color_style_education"> | </span> Ukraine
              </p>
            </div>
            {/* <!--  education_4--> */}
            <div className="education4 educate">
              <h4 className="style_education">Hillel</h4>
              <h5 className="style_specialty">diploma 61488832, Next JS</h5>
              <p className="style_period">
                2024 - 2024{" "}
                <span className="black_color_style_education"> | </span> Ukraine
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
