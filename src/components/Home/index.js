import LogoTitle from "../../assets/images/logo-s.png";
import { Link } from "react-router-dom";
import "./index.scss";
import Loader from "react-loaders";
import { icons } from "../../assets/icons/icons";
const Home = () => {
  return (
    <div>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi, <br /> I'm
            <img src={LogoTitle} alt="developer" />
            ai Surya Teja
            <br />
            Web developer
          </h1>
          <h2>Frontend Developer /React Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Loader type="pacman" />
      </div>
      <img
        src={icons.HomeFaceIcon}
        alt="home-face-icon"
        className="home-face-img"
      />
    </div>
  );
};
export default Home;
