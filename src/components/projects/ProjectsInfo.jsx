import React, { useState } from "react";
import Javascript from "./Javascript";
import ReactProject from "./ReactProject";
import projects from "./projectsDetails";
import reactDetails from "./reactDetails";
import "./project.css";

const ProjectsInfo = () => {
  const [toggleSection, setToggleSection] = useState("javascript");

  const toggleTabSection = (index) => {
    setToggleSection(index);
  };
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Pet Projects</h2>
      <p className="section__subtitle">
        A collection of projects on GitHub are added, those projects that are on
        github may not be on this portfolio website, so please also visit my{" "}
        <a
          href="https://github.com/KanatBayalbayev"
          target="_blank"
          rel="noopener noreferrer"
        >
         <p>GitHub account</p> 
        </a>
      </p>
      {/* Tabs start */}
      <div className="qualification__tabs">
        <div
          className={
            toggleSection === "javascript"
              ? "qualification__button qualification__active button--flex"
              : "qualification__button button--flex "
          }
          onClick={() => toggleTabSection("javascript")}
        >
          <i className="uil uil-java-script qualification__icon"></i> Vanilla
          Javascript
        </div>
        <div
          className={
            toggleSection === "react"
              ? "qualification__button qualification__active button--flex"
              : "qualification__button button--flex"
          }
          onClick={() => toggleTabSection("react")}
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
          toggleSection === "javascript"
            ? "chosen__content-active"
            : "chosen__container"
        }
      >
        <div className="projects__container container grid">
          {projects.map((project) => (
            <Javascript
              key={project.id}
              name={project.name}
              description={project.description}
              stek={project.stek}
              img={project.img}
              url={project.url}
            />
          ))}
        </div>
      </div>
      {/* Javascript Container end */}
      {/* ------------------------------------------------------------------------------------- */}
      {/* React Container start */}

      <div
        className={
          toggleSection === "react"
            ? "chosen__content-active"
            : "chosen__container"
        }
      >
        <div className="projects__container container grid">
          {reactDetails.map((project) => (
            <ReactProject
              key={project.id}
              name={project.name}
              description={project.description}
              stek={project.stek}
              img={project.img}
              url={project.url}
            />
          ))}
        </div>
      </div>

      {/* React Container end */}
    </section>
  );
};

export default ProjectsInfo;
