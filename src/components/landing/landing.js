import { Link } from "react-router-dom";

import "./landing.css";
import ban from "../images/Full-Stack.svg";
import logo from "../images/Logo.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";
import github from "../images/github.svg";
import download from "../images/download.svg";
export default function Landing() {
  function Header() {
    return (
      <header>
        <div id="sects">
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/blog">Blog</Link>
          {/* <a href="#">About</a> */}
        </div>

        <Link id="logo">
          <img src={logo} alt="logo" />
        </Link>

        <div id="socials">
          <a href="#">
            <img src={download} alt="download" />
          </a>
          <a href="#">
            <img src={github} alt="github" />
          </a>
          <a href="#">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </header>
    );
  }

  function Info() {
    return (
      <div className="item-info">
        <span className="intro">
          <span>
            Hey There,
            <br />
            I'm Mokua
          </span>
          <button>Developer</button>
        </span>
        <span className="smallAbout">
          A full-stack developer with over one year of industrial experience in
          various domains. Worked on multiple projects in Finance, Education and
          Medicine fields.
        </span>
      </div>
    );
  }

  function Banner() {
    return (
      <div className="banner">
        <img src={ban} alt="banner" />
      </div>
    );
  }
  return (
    <main id="landing">
      <Header />
      <Banner />
      <Info />
    </main>
  );
}
