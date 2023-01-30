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
          <span>Experience</span>
          <span></span>
        </div>

        <div className="experience-card"></div>
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
