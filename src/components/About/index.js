import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJs,
  faBootstrap,
  faReact,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
const About = () => {
  // className = 'container about-page'
  // className = 'text-zone'
  return (
    <>
      <div className="about-page">
        <div className="about-container">
          <h1 className="about-container-heading">
            <AnimatedLetters
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <div className="about-container-description">
            <p className="">
              Sarah’s “About me” page is an example of how individualized the
              approach to creating such a website section can be!
            </p>
            <p>
              rank and convincing copy, credible reviews, high-quality natural
              photos, calm shades, and an abstract background that does not
              distract you from the essence – this is the formula for the
              success
            </p>
            <p>
              you can modify any blocks, completely change the design of every
              tiniest element of your future website. That’s it, you will get
              your unique website for absolutely free!
            </p>
          </div>
        </div>
        <div className="skill-container">
          <div className="skill-icon-container">
            <FontAwesomeIcon
              icon={faHtml5}
              color="#F06529"
              className="skill-icon"
            />
            <h2 className="skill-label">HTML</h2>
          </div>
          <div className="skill-icon-container">
            <FontAwesomeIcon
              icon={faCss3}
              color="#28A4D9"
              className="skill-icon"
            />
            <h2 className="skill-label">CSS</h2>
          </div>

          <div className="skill-icon-container">
            <FontAwesomeIcon
              icon={faJs}
              color="#EFD81D"
              className="skill-icon"
            />
            <h2 className="skill-label">JavaScript</h2>
          </div>
          <div className="skill-icon-container">
            <FontAwesomeIcon
              icon={faReact}
              color="#DD0031"
              className="skill-icon"
            />
            <h2 className="skill-label">React JS</h2>
          </div>
          <div className="skill-icon-container">
            <FontAwesomeIcon
              icon={faGitAlt}
              color="#5ED4F4"
              className="skill-icon"
            />
            <h2 className="skill-label">Git</h2>
          </div>
          <div className="skill-icon-container">
            <FontAwesomeIcon
              icon={faBootstrap}
              color="#5ED4F4"
              className="skill-icon"
            />
            <h2 className="skill-label">Bootstrap</h2>
          </div>
          <div className="skill-icon-container">
            <FontAwesomeIcon
              icon={faPython}
              color="#5ED4F4"
              className="skill-icon"
            />
            <h2 className="skill-label">Python</h2>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default About;
