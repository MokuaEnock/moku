import "./education.css";
import Cert from "./data";
import Edus from "./edu";

export default function Education() {
  console.log(Edus);

  let Certifications = Cert.map((e) => {
    return (
      <span key={e.id}>
        <span className="span-title">{e.name}</span>
        <span className="orga">
          <i className="slant">{e.institution}</i> <button>View</button>
        </span>
      </span>
    );
  });

  let Education = Edus.map((e) => {
    return (
      <span key={e.id}>
        <span className="span-title">{e.institution}</span>
        <span className="orga">
          <i className="slant">{e.major}</i> <button>View</button>
        </span>
      </span>
    );
  });
  return (
    <section id="edu">
      <header id="edu-header">Experience</header>
      <div id="exp">
        <span className="title">Experience</span>
        <div className="edu-body">{Certifications}</div>
      </div>

      <div id="educ">
        <span className="title">Education</span>
        <div className="edu-body">{Education}</div>
      </div>

      <div id="cert">
        <span className="title">Certifications</span>
        <div className="edu-body">
          <span>
            <span className="span-title">1. Intro to Machine Learning</span>
            <span className="orga">
              <i className="slant">Kaggle</i> <button>View</button>
            </span>
          </span>
          <span>
            <span className="span-title">1. Intro to Machine Learning</span>
            <span className="orga">
              <i className="slant">Kaggle</i> <button>View</button>
            </span>
          </span>
          <span>
            <span className="span-title">1. Intro to Machine Learning</span>
            <span className="orga">
              <i className="slant">Kaggle</i> <button>View</button>
            </span>
          </span>
        </div>
      </div>

      <button id="view-all">View All</button>
    </section>
  );
}
