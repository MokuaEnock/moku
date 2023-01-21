import "./projects.css";
import Search from "../images/search.svg";
import Vector from "../images/Vector.svg";
import Github from "../images/Vector (1).svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  let [height, setHeight] = useState("max-content");
  function handleButton(e) {
    e.preventDefault();
    console.log("clicked");
    setHeight("max-content");
  }

  // function Navigation() {
  //   return (
  //     <header className="bg-gray-800 p-3 flex justify-evenly items-center">
  //       <h1 className="text-white font-bold">My App</h1>
  //       <nav>
  //         <a href="#" className="text-white hover:text-gray-500 mr-4">
  //           Home
  //         </a>
  //         <a href="#" className="text-white hover:text-gray-500">
  //           About
  //         </a>
  //       </nav>
  //     </header>
  //   );
  // }

  // function Header() {
  //   return (
  //     <div className="projects-header">
  //       <span>Latest</span>
  //       <form>
  //         <button type="submit">
  //           <img src={Search} alt="search" />
  //         </button>
  //         <input type="text" placeholder="Search" />
  //       </form>
  //     </div>
  //   );
  // }

  function Header() {
    return (
      <nav className="projects-header">
        <Link to="/" className="projects-header-home">
          Home
        </Link>

        <form>
          <button type="submit">
            <img src={Search} alt="search" />
          </button>
          <input type="text" placeholder="Search" />
        </form>
      </nav>
    );
  }

  function Bar() {
    return <div className="projects-bar">Projects</div>;
  }
  function Body() {
    return (
      <div id="projects-body">
        <div className="project-card" id="card1">
          <span className="project-card-image">
            <img src="" />
          </span>
          <span className="project-card-title">Machine Learning</span>
          <span className="project-card-details">
            <button>Python </button>
            <button>SciKit</button>
            <button>Classifier</button>
          </span>
          <span className="project-card-info">
            Sentiment analysis modelling.
          </span>
          <span className="project-card-buttons">
            <button>
              Live <img src={Vector} alt="" />
            </button>
            <button>
              GitHub <img src={Github} alt="github" />
            </button>
          </span>
        </div>

        <div className="project-card" id="card2">
          <span className="project-card-image">
            <img src="" />
          </span>
          <span className="project-card-title">Machine Learning</span>
          <span className="project-card-details">
            <button>Python </button>
            <button>SciKit</button>
            <button>Classifier</button>
          </span>
          <span className="project-card-info">
            Sentiment analysis modelling.
          </span>
          <span className="project-card-buttons">
            <button>
              Live <img src={Vector} alt="" />
            </button>
            <button>
              GitHub <img src={Github} alt="github" />
            </button>
          </span>
        </div>

        <div className="project-card" id="card3">
          <span className="project-card-image">
            <img src="" />
          </span>
          <span className="project-card-title">Machine Learning</span>
          <span className="project-card-details">
            <button>Python </button>
            <button>SciKit</button>
            <button>Classifier</button>
          </span>
          <span className="project-card-info">
            Sentiment analysis modelling.
          </span>
          <span className="project-card-buttons">
            <button>
              Live <img src={Vector} alt="" />
            </button>
            <button>
              GitHub <img src={Github} alt="github" />
            </button>
          </span>
        </div>
      </div>
    );
  }

  return (
    <section id="projects" style={{ height: `${height}` }}>
      {/* <Navigation /> */}
      <Header />
      <Bar />
      <Body />
      <button id="view-all" onClick={handleButton}>
        View All
      </button>
    </section>
  );
}
