import React from "react";
import "./index.scss";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { projectsList } from "../../assets/configs/constants";
const Projects = () => {
  return (
    <>
      <div className="projects-page">
        <h1 className="projects-heading">Projects</h1>
        <div className="project-card-container">
          {projectsList.map((item, index) => (
            <div className="project-card" key={index}>
              <img
                src={item.imgUrl}
                alt="project-card-img"
                className="project-card-img"
              />
              <div>
                <h2 className="project-card-heading">{item.name}</h2>
                <h4 className="project-card-skills">
                  HTML,Tailwind CSS,JS,React,React router dom
                </h4>
                <h3 className="project-card-description">{item.description}</h3>
                <div>
                  <a target="_blank" href={item.gitHubLink} rel="noreferrer">
                    <FontAwesomeIcon
                      icon={faGithub}
                      color="#4d4de"
                      className="project-link-icon"
                    />
                  </a>
                  <a target="_blank" href={item.liveLink} rel="noreferrer">
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      color="#4d4de"
                      className="project-link-icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
