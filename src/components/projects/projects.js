import "./projects.css";
import Search from "../images/search.svg";
import Vector from "../images/Vector.svg";
import Github from "../images/Vector (1).svg";

export default function Projects() {
  function Header() {
    return (
      <div className="projects-header">
        <span>Latest</span>
        <form>
          <button type="submit">
            <img src={Search} alt="search" />
          </button>
          <input type="text" placeholder="Search" />
        </form>
      </div>
    );
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

  function List() {
    return (
      <div className="projects-list">
        <div className="project-card">
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

        <div className="project-card">
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

        <div className="project-card">
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
    <section id="projects">
      <Header />
      <Body />
      <span className="project-title">End to End</span>
      <List />
      <button id="view-all">View All</button>
    </section>
  );
}
