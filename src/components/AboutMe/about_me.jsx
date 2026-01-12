import React from "react";
import "./about_me.css"; // не забудьте створити та імпортувати файл CSS

const AboutMe = () => {
  return (
    <div className="profile-container">
      {/* Title */}
      <hr className="section-divider" />
      {/* Section: Professional Summary */}
      <section>
        <h2 className="section-subtitle">Professional Summary</h2>
        <ul>
          <li>
            Motivated and resilient software developer with a strong foundation
            in full-stack web development and a background in compliance. After
            relocating due to the war, I’ve successfully rebuilt my career in a
            new country while working two jobs and studying Computer Science at
            <strong> Woolf University</strong>.
          </li>
          <li>
            I’m now seeking a{" "}
            <strong> full-time software engineering position</strong> where I
            can dedicate my full focus, grow professionally, and contribute to a
            mission-driven team.
          </li>
          <li>
            Over the past few years, I’ve contributed to various projects: from
            early-stage startups to enterprise-scale applications, always
            prioritizing <strong>clean code</strong>,
            <strong> solid architecture</strong>, and{" "}
            <strong>great user experience</strong>. I bring high motivation,
            adaptability, and a deep commitment to ongoing learning.
          </li>
        </ul>
      </section>

      <hr className="section-divider" />

      {/* Section: Tech Stack */}
      <section>
        <h2 className="section-subtitle">Tech Stack</h2>
        <ul>
          <li>
            <strong>Frontend:</strong> React, Next.js, TypeScript, JavaScript,
            HTML/CSS, SCSS, Tailwind CSS, Styled Components, MUI, Redux, Zustand
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express, Python, REST APIs,
            GraphQL
          </li>
          <li>
            <strong>Databases:</strong> MongoDB, PostgreSQL, Firebase
          </li>
          <li>
            <strong>DevOps & Deployment:</strong> AWS, Vercel, Netlify, Vite
          </li>
          <li>
            <strong>Authentication & Security:</strong> JWT, OAuth
          </li>
          <li>
            <strong>Other Tools:</strong> Git, GitHub, Figma, Jira, Docker
            (basic), Webpack
          </li>
        </ul>
      </section>

      <hr className="section-divider" />

      {/* Section: Soft Skills */}
      <section>
        <h2 className="section-subtitle">Soft Skills & Work Ethic</h2>
        <ul>
          <li>
            Highly self-motivated with a proven ability to learn quickly and
            adapt under pressure
          </li>
          <li>
            Strong communication skills (Upper-Intermediate English; fluent
            Ukrainian and Russian)
          </li>
          <li>
            Experience working in international, remote, and cross-functional
            teams
          </li>
          <li>
            Focused on delivering measurable results and meeting individual and
            team KPIs
          </li>
          <li>
            Open to{" "}
            <strong>
              feedback, flexible collaboration formats, and ready for test tasks
              or probation periods
            </strong>
          </li>
        </ul>
      </section>

      <hr className="section-divider" />

      {/* Section: What I'm Looking For */}
      <section>
        <h2 className="section-subtitle">What I’m Looking For</h2>
        <ul>
          <li>Focus on one role and contribute long-term</li>
          <li>
            Collaborate with a team that values clean code, user experience, and
            continuous learning
          </li>
          <li>
            Work in a product-focused environment - especially in industries
            like <strong>fintech</strong>, <strong>healthcare</strong>,{" "}
            <strong>e-commerce</strong>, <strong>gaming</strong>, or{" "}
            <strong>blockchain</strong>
          </li>
          <li>
            Be challenged, mentored, and given space to grow as a professional
          </li>
        </ul>
      </section>

      <hr className="section-divider" />

      {/* Section: Why Hire Me */}
      <section>
        <h2 className="section-subtitle">Why Hire Me</h2>
        <ul>
          <li>
            I bring not only technical skills but also life experience that
            shaped my mindset: I’m disciplined, resilient, and deeply committed
            to achieving goals no matter the challenge. I’m ready to prove my
            value and eager to make a meaningful contribution to your team.
          </li>
          <li>
            Let’s connect - I’m open to test tasks, probation periods, and
            interviews.
          </li>
        </ul>
      </section>
      <hr className="section-divider" />
    </div>
  );
};

export default AboutMe;
