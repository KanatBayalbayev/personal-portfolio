import React, { useState } from "react";
import "./qualification.css";
import reactCert from "../../assets/REACT SERTIFICATE.jpg";
import reactCertFile from "../../assets/REACT SERTIFICATE.pdf";

import jsCert from '../../assets/JAVASCRIPT CERTIFICATE.jpg'
import jsFile from '../../assets/JAVASCRIPT CERTIFICATE.pdf'

import oracleCert from '../../assets/ORACLE CERTIFICATE.jpg'
import oracleFile from '../../assets/ORACLE CERTIFICATE.pdf'

import webCert from '../../assets/WEB DEV CERTIFICATE.jpg'
import webFile from '../../assets/WEB DEV CERTIFICATE.pdf'

// import webCert from "../../assets/WEB DEV SERTIFICATE.jpg";
// import webCertFile from "../../assets/WEB DEV SERTIFICATE.pdf";

const Qualification = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggle === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
          <div
            className={
              toggle === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Job
            Experience
          </div>
          <div
            className={
              toggle === 3
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(3)}
          >
            <i className="uil uil-newspaper qualification__icon"></i>
            Certificates
          </div>
          <div
            className={
              toggle === 4
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(4)}
          >
            <i className="uil uil-comment-verify qualification__icon"></i>
            Completed Courses
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Restaurant and hotel business{" "}
                </h3>
                <span className="qualification__subtitle">
                  Bachelor's degree
                </span>
                <span className="subtitle">Turan University</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2015 - 2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  International Enterprise Management
                </h3>
                <span className="qualification__subtitle">Master's degree</span>
                <span className="subtitle">Kazakh-German University</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2021
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Сhief Telemarketing Specialist
                </h3>
                <span className="subtitle">ALFA BANK</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Data Analyst</h3>
                <span className="subtitle">Bank 'CenterCredit'</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Leading Data Analyst</h3>
                <span className="subtitle">JUSAN BANK</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggle === 3
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="certifications__container cert-grid">
              <div className="reactCert">
                <a
                  download=""
                  href={reactCertFile}
                  className="certicate__container "
                >
                  <img src={reactCert} alt="reactCert" />
                </a>
              </div>
              <div className="jsCert">
                <a
                  download=""
                  href={jsFile}
                  className="certicate__container "
                >
                  <img src={jsCert} alt="reactCert" />
                </a>
              </div>
              <div className="oracleCert">
                <a
                  download=""
                  href={oracleFile}
                  className="certicate__container "
                >
                  <img src={oracleCert} alt="Cert" />
                </a>
              </div>
              <div className="webCert">
                <a
                  download=""
                  href={webFile}
                  className="certicate__container "
                >
                  <img src={webCert} alt="Cert" />
                </a>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 4
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="courses__container">
              <ul className="courses__list">
                <li className="course">
                  <i className="uil uil-award"></i>
                  <a
                    href="https://www.udemy.com/course/javascript-zero-to-junior-developer/learn/lecture/27714508?start=45#overview"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4>
                      Современный JavaScript - с Нуля до Junior Специалиста
                    </h4>
                  </a>
                </li>
                <li className="course">
                  <i className="uil uil-award"></i>
                  <a
                    href="https://www.udemy.com/course-dashboard-redirect/?course_id=2619572"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4>SQL для начинающих: с нуля до сертификата Oracle</h4>
                  </a>
                </li>
                <li className="course">
                  <i className="uil uil-award"></i>
                  <a
                    href="https://www.udemy.com/course/javascript_full/learn/lecture/29179522?start=75#overview"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4>
                      Полный курс по JavaScript + React - с нуля до результата
                    </h4>
                  </a>
                </li>
              </ul>
              <ul className="courses__list">
                <li className="course">
                  <i className="uil uil-award"></i>
                  <a
                    href="https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/31673786?start=180#overview"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4>The Complete 2023 Web Development Bootcamp</h4>
                  </a>
                </li>
                <li className="course">
                  <i className="uil uil-award"></i>
                  <a
                    href="https://www.udemy.com/course/react-np/learn/lecture/34690342?start=0#overview"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4>Современный React - с Нуля до Профессионала</h4>
                  </a>
                </li>
                <li className="course">
                  <i className="uil uil-award"></i>
                  <a
                    href="https://www.youtube.com/watch?v=O00FTZDxD0o"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4>GIT - Полный Курс Git и GitHub Для Начинающих</h4>
                  </a>
                </li>
                <li className="course">
                  <i className="uil uil-award"></i>
                  <a
                    href="https://www.youtube.com/watch?v=gieEQFIfgYc&t=3789s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4>
                      TypeScript Full Course for Beginners | Complete All-in-One
                      Tutorial
                    </h4>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
