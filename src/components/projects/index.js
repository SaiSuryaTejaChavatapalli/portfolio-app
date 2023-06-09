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
              <div className="project-card-bottom-container">
                <h2 className="project-card-heading">{item.name}</h2>
                <ul className="project-card-skills">
                  {/* {item?.techUsed?.join("➼")} */}
                  {item.techUsed.map((tech, id) => (
                    <li key={id} className="project-card-skill">
                      ‣{tech}
                    </li>
                  ))}
                </ul>
                <p className="project-card-description">{item.description}</p>
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
