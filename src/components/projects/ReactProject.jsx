import React, { useState } from "react";

const ReactProject = (props) => {
  const [toggle, setToggle] = useState(0);

  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <>
      <div className="projects__content">
        <div>
          <h3 className="projects__title">{props.name}</h3>
        </div>
        <span className="projects__button" onClick={() => toggleTab(1)}>
          View More{" "}
          <i className="uil uil-arrow-right projects__button-icon"></i>
        </span>
        <div
          className={
            toggle === 1 ? "projects__modal active-modal" : "projects__modal"
          }
        >
          <div className="projects__modal-content">
            <i
              onClick={() => toggleTab(0)}
              className="uil uil-times projects__modal-close"
            ></i>
            <div className="detailProject">
              <img src={props.img} alt="img" className="imgProject" />
              <a
                href={props.url}
                className="button button--flex buttonProject"
                target="_blank"
                rel="noopener noreferrer"
              >
                View the project
              </a>
            </div>

            <h3 className="projects__modal-title">{props.name}</h3>
            <p className="projects__modal-description">{props.description}</p>
            <h4>The project is made using:</h4>
            <p className="projects__modal-description">{props.stek}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReactProject;
