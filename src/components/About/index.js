import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Loader from "react-loaders";
import { icons } from "../../assets/icons/icons";
import LaunchIcon from "@mui/icons-material/Launch";
const About = () => {
  // className = 'container about-page'
  // className = 'text-zone'
  return (
    <div className="about-page container">
      <div className="about-container ">
        <h1 className="about-container-heading">
          <AnimatedLetters
            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
            idx={15}
          />
        </h1>
        <div className="about-container-resume-link">
          <span className="about-container-resume-link-description">
            Have a look at my Resume
          </span>
          <a
            href="https://drive.google.com/file/d/15vDER06Y9KmfK9OENI9rBCwpx1yXkkEZ/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <LaunchIcon
              fontSize="large"
              className="about-container-resume-link-icon"
            />
          </a>
        </div>
        <p className="about-container-description">
          <h3>Welcome to my portfolio website!</h3>I am Sai Surya Teja,An
          ambitious Frontend developer specializing in ReactJS, JavaScript, and
          HTML5,CSS3,Redux.js,Tailwind CSS. With a genuine passion for crafting
          exceptional user experiences and building dynamic web applications, I
          invite you to explore my skills and experience. I firmly believe that
          success in development is not just about technical expertise, but also
          effective collaboration and continuous learning. Throughout my
          journey, I've embraced these principles, constantly seeking
          opportunities to enhance my skills and expand my knowledge. By staying
          up to date with the latest industry trends and best practices, I
          ensure that my work remains innovative in the ever-evolving field of
          web development. What truly sets me apart is my unwavering commitment
          to delivering high-quality results. I approach every project with
          meticulous attention to detail, crafting clean and efficient code that
          powers visually appealing and intuitive interfaces. My deep
          understanding of front-end technologies enables me to captivate users
          and provide seamless navigation. In addition to my technical prowess,
          I value effective communication and collaboration. I thrive in team
          environments, where open dialogue and constructive feedback foster
          growth and success. Learning from experienced professionals like you
          is something I greatly look forward to, as I believe it is the key to
          becoming an exceptional developer. Beyond my skills, I bring a strong
          work ethic, a positive attitude, and an unwavering passion for what I
          do. I understand that being a junior developer means constantly
          evolving and learning, and I embrace these challenges with enthusiasm.
          I'm confident that my dedication, adaptability, and hunger for
          knowledge make me an ideal candidate to join your team. Thank you for
          visiting my portfolio website. I would be honored to collaborate with
          professionals like you and contribute to projects that make a
          meaningful impact. Let's work together and create remarkable digital
          experiences.
        </p>
      </div>
      <div className="skill-container ">
        <div className="skill-icon-container">
          <img src={icons?.HTMLIcon} alt="html-icon" className="skill-icon" />
          <h2 className="skill-label">HTML5</h2>
        </div>
        <div className="skill-icon-container">
          <img src={icons?.CSSIcon} alt="css3-icon" className="skill-icon" />
          <h2 className="skill-label">CSS3</h2>
        </div>
        <div className="skill-icon-container">
          <img src={icons?.ReactIcon} alt="react-icon" className="skill-icon" />
          <h2 className="skill-label">React JS</h2>
        </div>
        <div className="skill-icon-container">
          <img
            src={icons?.TailwindIcon}
            alt="tailwind-icon"
            className="skill-icon"
          />
          <h2 className="skill-label">Tailwind CSS</h2>
        </div>
        <div className="skill-icon-container">
          <img
            src={icons?.JavaScriptIcon}
            alt="javascript-icon"
            className="skill-icon"
          />
          <h2 className="skill-label">JavaScript</h2>
        </div>
        <div className="skill-icon-container">
          <img src={icons?.ReduxIcon} alt="redux-icon" className="skill-icon" />
          <h2 className="skill-label">Redux.js</h2>
        </div>
        {/* <div className="skill-icon-container">
            <img
              src={icons?.ReactHookFormIcon}
              alt="react-hook-form-icon"
              className="skill-icon"
            />
            <h2 className="skill-label">Redux.js</h2>
          </div> */}
        <div className="skill-icon-container">
          <img src={icons?.GitIcon} alt="git-icon" className="skill-icon" />
          <h2 className="skill-label">Git</h2>
        </div>

        <div className="skill-icon-container">
          <img
            src={icons?.GitHubIcon}
            alt="github-icon"
            className="skill-icon"
          />
          <h2 className="skill-label">GitHub</h2>
        </div>
        <div className="skill-icon-container">
          <img
            src={icons?.PythonIcon}
            alt="python-icon"
            className="skill-icon"
          />
          <h2 className="skill-label">Python</h2>
        </div>
        <div className="skill-icon-container">
          <img
            src={icons?.DatabaseIcon}
            alt="database-icon"
            className="skill-icon"
          />
          <h2 className="skill-label">SQL</h2>
        </div>
        <div className="skill-icon-container">
          <img
            src={icons?.BootStrapIcon}
            alt="bootstrap-icon"
            className="skill-icon"
          />
          <h2 className="skill-label">Bootstrap</h2>
        </div>
        <div className="skill-icon-container">
          <img src={icons?.MuiIcon} alt="mui-icon" className="skill-icon" />
          <h2 className="skill-label">Material UI</h2>
        </div>
        {/* <div className="skill-icon-container">
            <img
              src={icons?.ReactHookFromIcon}
              alt="mui-icon"
              className="skill-icon"
            />
            <h2 className="skill-label">ReactHookFromIcon</h2>
          </div> */}
      </div>
      <Loader type="pacman" />
    </div>
  );
};
export default About;
