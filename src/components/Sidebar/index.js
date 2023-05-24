import './index.scss'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons'

import {
  faFacebook,
  faGithub,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        {/* <img className="sub-logo" src={LogoSubtitle} alt="logoSubtitle" /> */}
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="projects-link"
          to="/projects"
        >
          <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sai-surya-teja-chavatapalli-342aa418b/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4de" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/SaiSuryaTejaChavatapalli"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4de" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCFUOmfDWG71zXxObK5Iw90g"
          >
            <FontAwesomeIcon icon={faYoutube} color="#4d4de" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebook} color="#4d4de" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
