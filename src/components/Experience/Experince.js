import ExperinceHeader from "./ExperienceHeader";
import Education from "./Education";
import Certification from "./Certiification";
import Events from "./Events";
import "./exp.css";

export default function Experience() {
  function Exp() {
    return (
      <section id="experience-section">
        <div className="experience-header-display">
          <span></span>
          <p>Experience</p>
          <span></span>
        </div>

        <div className="experience-card">
          <div className="experience-card-1">
            <h3>Alphabet Inc.</h3>

            <span className="experince-card-info">
              <p>Machine Learning Engineer</p>
              <p>Start: 01/06/2022</p>
              <p>End: 31/12/2022</p>
              <p>Duration: 6 months</p>
            </span>

            <span className="experience-card-button">
              <button>View Site</button>
            </span>
          </div>

          <div className="experience-card-1">
            <h4>Roles</h4>
            <p>Built a reccomendation engine for alphabet Inc.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <ExperinceHeader />
      <main>
        <Exp />
        <Education />
        <Certification />
        <Events />
      </main>
    </>
  );
}
