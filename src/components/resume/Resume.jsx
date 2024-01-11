import React from 'react';
import './resume.scss';

const Resume = () => {
  return (
    <div>
      <div className="resume row">
      <div className="container">
        <div className="row" style={{ justifyContent: 'center', position: 'relative' }}>
          <a href="/MohamedKharma_Resume.pdf" target="_blank" className="btn btn-primary">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
            </svg>
            &nbsp;Download CV
          </a>
        </div>
      </div>
        <div className="resume-left col-md-6">
          <h3 className="resume-title">Experience</h3>
          <div className="resume-item">
            <h5 className="resume-company">CodePath</h5>
            <h5 className="resume-title">Web Developer</h5>
            <p><em>Feb 2023 - May 2023</em></p>
            <ul>
              <li> ‣ Completed an Intermediate Web Development course covering HTML, CSS, JavaScript, React, and Supabase database.</li>
              <li> ‣ Developed full-stack web applications and worked collaboratively with a team of fellow students.</li>
              <li> ‣ Made use of various APIs, including weather and crypto APIs, to build functional web applications.</li>
            </ul>
          </div>
          <div className="resume-item">
            <h5 className="resume-company">CodePath</h5>
            <h5 className="resume-title">Android Developer</h5>
            <p><em>Aug 2021 - Dec 2021</em></p>
            <ul>
              <li> ‣ Participated in 12 weeks of intense, project-based Android training.</li>
              <li> ‣ Built skills through labs and coding sessions using the APIs of popular apps such as Twitter.</li>
              <li> ‣ Applied new experiences in building an original app with a team.</li>
            </ul>
          </div>
        </div>

        <div className="resume-right col-md-6">
          <h3 className="resume-title">Certifications and Achievements</h3>
          <div className="resume-item">
            <h5 className="resume-no-company"></h5>
            <h5 className="resume-no-title"></h5>
            <p><em></em></p>
            <ul>
              <li> ‣ CodePath Certification in Android Development</li>
              <li> ‣ Advanced Java Programming</li>
              <li> ‣ Advanced Python: Working with Databases</li>
              <li> ‣ CodePath Certification in Web Development</li>
            </ul>
          </div>
          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h5 className="resume-company">The City College of New York</h5>
            <h5 className="resume-title">Bachelor of Science in Computer Science</h5>
            <p><em>2019 - 2023</em></p>
            <ul></ul>
          </div>

          <h3 className="resume-title">Languages</h3>
          <div className="resume-item">
            <h5 className="resume-company">Fluent in both</h5>
            <h5 className="resume-title">English & Arabic</h5>
            <ul></ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
