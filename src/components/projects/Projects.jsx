import React, { useState } from "react";
import "./project.css";
import "../qualification/qualification.css";
const Projects = () => {
  const [toggle, setToggle] = useState(17);
  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      {/* Tabs start */}
      <div className="qualification__tabs qtabs">
        <div
          className={
            toggle === "javascript"
              ? "qualification__button qualification__active button--flex"
              : "qualification__button button--flex"
          }
          onClick={() => toggleTab(17)}
        >
          <i className="uil uil-java-script qualification__icon"></i> Vanilla
          Javascript
        </div>
        <div
          className={
            toggle === "react"
              ? "qualification__button qualification__active button--flex"
              : "qualification__button button--flex"
          }
          onClick={() => toggleTab(18)}
        >
          <i className="uil uil-react qualification__icon"></i>
          React
        </div>
      </div>
      {/* Tabs end */}
      {/* ------------------------------------------------------------------------------------- */}
      {/* Javascript Container start */}
      <div
        className={
          toggle === 17
            ? "javascript__container javascript__content-active"
            : "javascript__container"
        }
      >
        <div className="projects__container container grid">
          <div className="projects__content">
            <div>
              <i className="uil uil-web-grid projects__icon"></i>
              <h3 className="projects__title">Text Editor</h3>
            </div>
            <span className="projects__button" onClick={() => toggleTab(1)}>
              View More{" "}
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
            <div
              className={
                toggle === 1
                  ? "projects__modal active-modal"
                  : "projects__modal"
              }
            >
              <div className="projects__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects__modal-close"
                ></i>
                <h3 className="projects__modal-title">
                  Lorem ipsum dolor sdfdfdfdit.
                </h3>
                <p className="projects__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti ratione tempora libero illum rerum ipsa.
                </p>
                <ul className="projects__modal-projects grid">
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="projects__content">
            <div>
              <i className="uil uil-web-grid projects__icon"></i>
              <h3 className="projects__title">Movia App</h3>
            </div>
            <span className="projects__button" onClick={() => toggleTab(2)}>
              View More{" "}
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
            <div
              className={
                toggle === 2
                  ? "projects__modal active-modal"
                  : "projects__modal"
              }
            >
              <div className="projects__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects__modal-close"
                ></i>
                <h3 className="projects__modal-title">
                  Lorem ipsum dolor sdfdfdfdit.
                </h3>
                <p className="projects__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti ratione tempora libero illum rerum ipsa.
                </p>
                <ul className="projects__modal-projects grid">
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="projects__content">
            <div>
              <i className="uil uil-web-grid projects__icon"></i>
              <h3 className="projects__title">Lorem ipsum dolor sit amet.</h3>
            </div>
            <span className="projects__button" onClick={() => toggleTab(3)}>
              View More{" "}
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
            <div
              className={
                toggle === 3
                  ? "projects__modal active-modal"
                  : "projects__modal"
              }
            >
              <div className="projects__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects__modal-close"
                ></i>
                <h3 className="projects__modal-title">
                  Lorem ipsum dolor sdfdfdfdit.
                </h3>
                <p className="projects__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti ratione tempora libero illum rerum ipsa.
                </p>
                <ul className="projects__modal-projects grid">
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="projects__content">
            <div>
              <i className="uil uil-web-grid projects__icon"></i>
              <h3 className="projects__title">Lorem ipsum dolor sit amet.</h3>
            </div>
            <span className="projects__button" onClick={() => toggleTab(3)}>
              View More{" "}
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
            <div
              className={
                toggle === 3
                  ? "projects__modal active-modal"
                  : "projects__modal"
              }
            >
              <div className="projects__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects__modal-close"
                ></i>
                <h3 className="projects__modal-title">
                  Lorem ipsum dolor sdfdfdfdit.
                </h3>
                <p className="projects__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti ratione tempora libero illum rerum ipsa.
                </p>
                <ul className="projects__modal-projects grid">
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="projects__content">
            <div>
              <i className="uil uil-web-grid projects__icon"></i>
              <h3 className="projects__title">Lorem ipsum dolor sit amet.</h3>
            </div>
            <span className="projects__button" onClick={() => toggleTab(3)}>
              View More{" "}
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
            <div
              className={
                toggle === 3
                  ? "projects__modal active-modal"
                  : "projects__modal"
              }
            >
              <div className="projects__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects__modal-close"
                ></i>
                <h3 className="projects__modal-title">
                  Lorem ipsum dolor sdfdfdfdit.
                </h3>
                <p className="projects__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti ratione tempora libero illum rerum ipsa.
                </p>
                <ul className="projects__modal-projects grid">
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="projects__content">
            <div>
              <i className="uil uil-web-grid projects__icon"></i>
              <h3 className="projects__title">Lorem ipsum dolor sit amet.</h3>
            </div>
            <span className="projects__button" onClick={() => toggleTab(3)}>
              View More{" "}
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
            <div
              className={
                toggle === 3
                  ? "projects__modal active-modal"
                  : "projects__modal"
              }
            >
              <div className="projects__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects__modal-close"
                ></i>
                <h3 className="projects__modal-title">
                  Lorem ipsum dolor sdfdfdfdit.
                </h3>
                <p className="projects__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti ratione tempora libero illum rerum ipsa.
                </p>
                <ul className="projects__modal-projects grid">
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="projects__content">
            <div>
              <i className="uil uil-web-grid projects__icon"></i>
              <h3 className="projects__title">Lorem ipsum dolor sit amet.</h3>
            </div>
            <span className="projects__button" onClick={() => toggleTab(3)}>
              View More{" "}
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
            <div
              className={
                toggle === 3
                  ? "projects__modal active-modal"
                  : "projects__modal"
              }
            >
              <div className="projects__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects__modal-close"
                ></i>
                <h3 className="projects__modal-title">
                  Lorem ipsum dolor sdfdfdfdit.
                </h3>
                <p className="projects__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti ratione tempora libero illum rerum ipsa.
                </p>
                <ul className="projects__modal-projects grid">
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="projects__content">
            <div>
              <i className="uil uil-web-grid projects__icon"></i>
              <h3 className="projects__title">Lorem ipsum dolor sit amet.</h3>
            </div>
            <span className="projects__button" onClick={() => toggleTab(3)}>
              View More{" "}
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
            <div
              className={
                toggle === 3
                  ? "projects__modal active-modal"
                  : "projects__modal"
              }
            >
              <div className="projects__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects__modal-close"
                ></i>
                <h3 className="projects__modal-title">
                  Lorem ipsum dolor sdfdfdfdit.
                </h3>
                <p className="projects__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti ratione tempora libero illum rerum ipsa.
                </p>
                <ul className="projects__modal-projects grid">
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="projects__content">
            <div>
              <i className="uil uil-web-grid projects__icon"></i>
              <h3 className="projects__title">Lorem ipsum dolor sit amet.</h3>
            </div>
            <span className="projects__button" onClick={() => toggleTab(3)}>
              View More{" "}
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
            <div
              className={
                toggle === 3
                  ? "projects__modal active-modal"
                  : "projects__modal"
              }
            >
              <div className="projects__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects__modal-close"
                ></i>
                <h3 className="projects__modal-title">
                  Lorem ipsum dolor sdfdfdfdit.
                </h3>
                <p className="projects__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti ratione tempora libero illum rerum ipsa.
                </p>
                <ul className="projects__modal-projects grid">
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="projects__content">
            <div>
              <i className="uil uil-web-grid projects__icon"></i>
              <h3 className="projects__title">Lorem ipsum dolor sit amet.</h3>
            </div>
            <span className="projects__button" onClick={() => toggleTab(3)}>
              View More{" "}
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
            <div
              className={
                toggle === 3
                  ? "projects__modal active-modal"
                  : "projects__modal"
              }
            >
              <div className="projects__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects__modal-close"
                ></i>
                <h3 className="projects__modal-title">
                  Lorem ipsum dolor sdfdfdfdit.
                </h3>
                <p className="projects__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti ratione tempora libero illum rerum ipsa.
                </p>
                <ul className="projects__modal-projects grid">
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      {/* Javascript Container end */}

      {/* ------------------------------------------------------------------------------------- */}

      {/* React Container start */}
      <div
        className={
          toggle === 18
            ? "javascript__container javascript__content-active"
            : "javascript__container"
        }
      >
        <div className="projects__container container grid">
          <div className="projects__content">
            <div>
              <i className="uil uil-web-grid projects__icon"></i>
              <h3 className="projects__title">Lorem ipsum dolor sit amet.</h3>
            </div>
            <span className="projects__button" onClick={() => toggleTab(1)}>
              View More{" "}
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
            <div
              className={
                toggle === 1
                  ? "projects__modal active-modal"
                  : "projects__modal"
              }
            >
              <div className="projects__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects__modal-close"
                ></i>
                <h3 className="projects__modal-title">
                  Lorem ipsum dolor sdfdfdfdit.
                </h3>
                <p className="projects__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti ratione tempora libero illum rerum ipsa.
                </p>
                <ul className="projects__modal-projects grid">
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="projects__content">
            <div>
              <i className="uil uil-web-grid projects__icon"></i>
              <h3 className="projects__title">Lorem ipsum dolor sit amet.</h3>
            </div>
            <span className="projects__button" onClick={() => toggleTab(2)}>
              View More{" "}
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
            <div
              className={
                toggle === 2
                  ? "projects__modal active-modal"
                  : "projects__modal"
              }
            >
              <div className="projects__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects__modal-close"
                ></i>
                <h3 className="projects__modal-title">
                  Lorem ipsum dolor sdfdfdfdit.
                </h3>
                <p className="projects__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti ratione tempora libero illum rerum ipsa.
                </p>
                <ul className="projects__modal-projects grid">
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="projects__content">
            <div>
              <i className="uil uil-web-grid projects__icon"></i>
              <h3 className="projects__title">Lorem ipsum dolor sit amet.</h3>
            </div>
            <span className="projects__button" onClick={() => toggleTab(3)}>
              View More{" "}
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
            <div
              className={
                toggle === 3
                  ? "projects__modal active-modal"
                  : "projects__modal"
              }
            >
              <div className="projects__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects__modal-close"
                ></i>
                <h3 className="projects__modal-title">
                  Lorem ipsum dolor sdfdfdfdit.
                </h3>
                <p className="projects__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti ratione tempora libero illum rerum ipsa.
                </p>
                <ul className="projects__modal-projects grid">
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="projects__content">
            <div>
              <i className="uil uil-web-grid projects__icon"></i>
              <h3 className="projects__title">Lorem ipsum dolor sit amet.</h3>
            </div>
            <span className="projects__button" onClick={() => toggleTab(3)}>
              View More{" "}
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
            <div
              className={
                toggle === 3
                  ? "projects__modal active-modal"
                  : "projects__modal"
              }
            >
              <div className="projects__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects__modal-close"
                ></i>
                <h3 className="projects__modal-title">
                  Lorem ipsum dolor sdfdfdfdit.
                </h3>
                <p className="projects__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti ratione tempora libero illum rerum ipsa.
                </p>
                <ul className="projects__modal-projects grid">
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="projects__content">
            <div>
              <i className="uil uil-web-grid projects__icon"></i>
              <h3 className="projects__title">Lorem ipsum dolor sit amet.</h3>
            </div>
            <span className="projects__button" onClick={() => toggleTab(3)}>
              View More{" "}
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
            <div
              className={
                toggle === 3
                  ? "projects__modal active-modal"
                  : "projects__modal"
              }
            >
              <div className="projects__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects__modal-close"
                ></i>
                <h3 className="projects__modal-title">
                  Lorem ipsum dolor sdfdfdfdit.
                </h3>
                <p className="projects__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti ratione tempora libero illum rerum ipsa.
                </p>
                <ul className="projects__modal-projects grid">
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="projects__content">
            <div>
              <i className="uil uil-web-grid projects__icon"></i>
              <h3 className="projects__title">Lorem ipsum dolor sit amet.</h3>
            </div>
            <span className="projects__button" onClick={() => toggleTab(3)}>
              View More{" "}
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
            <div
              className={
                toggle === 3
                  ? "projects__modal active-modal"
                  : "projects__modal"
              }
            >
              <div className="projects__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects__modal-close"
                ></i>
                <h3 className="projects__modal-title">
                  Lorem ipsum dolor sdfdfdfdit.
                </h3>
                <p className="projects__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti ratione tempora libero illum rerum ipsa.
                </p>
                <ul className="projects__modal-projects grid">
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="projects__content">
            <div>
              <i className="uil uil-web-grid projects__icon"></i>
              <h3 className="projects__title">Lorem ipsum dolor sit amet.</h3>
            </div>
            <span className="projects__button" onClick={() => toggleTab(3)}>
              View More{" "}
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
            <div
              className={
                toggle === 3
                  ? "projects__modal active-modal"
                  : "projects__modal"
              }
            >
              <div className="projects__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects__modal-close"
                ></i>
                <h3 className="projects__modal-title">
                  Lorem ipsum dolor sdfdfdfdit.
                </h3>
                <p className="projects__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti ratione tempora libero illum rerum ipsa.
                </p>
                <ul className="projects__modal-projects grid">
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="projects__content">
            <div>
              <i className="uil uil-web-grid projects__icon"></i>
              <h3 className="projects__title">Lorem ipsum dolor sit amet.</h3>
            </div>
            <span className="projects__button" onClick={() => toggleTab(3)}>
              View More{" "}
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
            <div
              className={
                toggle === 3
                  ? "projects__modal active-modal"
                  : "projects__modal"
              }
            >
              <div className="projects__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects__modal-close"
                ></i>
                <h3 className="projects__modal-title">
                  Lorem ipsum dolor sdfdfdfdit.
                </h3>
                <p className="projects__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti ratione tempora libero illum rerum ipsa.
                </p>
                <ul className="projects__modal-projects grid">
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="projects__content">
            <div>
              <i className="uil uil-web-grid projects__icon"></i>
              <h3 className="projects__title">Lorem ipsum dolor sit amet.</h3>
            </div>
            <span className="projects__button" onClick={() => toggleTab(3)}>
              View More{" "}
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
            <div
              className={
                toggle === 3
                  ? "projects__modal active-modal"
                  : "projects__modal"
              }
            >
              <div className="projects__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects__modal-close"
                ></i>
                <h3 className="projects__modal-title">
                  Lorem ipsum dolor sdfdfdfdit.
                </h3>
                <p className="projects__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti ratione tempora libero illum rerum ipsa.
                </p>
                <ul className="projects__modal-projects grid">
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="projects__content">
            <div>
              <i className="uil uil-web-grid projects__icon"></i>
              <h3 className="projects__title">Lorem ipsum dolor sit amet.</h3>
            </div>
            <span className="projects__button" onClick={() => toggleTab(3)}>
              View More{" "}
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
            <div
              className={
                toggle === 3
                  ? "projects__modal active-modal"
                  : "projects__modal"
              }
            >
              <div className="projects__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times projects__modal-close"
                ></i>
                <h3 className="projects__modal-title">
                  Lorem ipsum dolor sdfdfdfdit.
                </h3>
                <p className="projects__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti ratione tempora libero illum rerum ipsa.
                </p>
                <ul className="projects__modal-projects grid">
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                  <li className="projects__modal-project">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      {/* React Container end */}
    </section>
  );
};

export default Projects;
