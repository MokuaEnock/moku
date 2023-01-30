import ExperinceHeader from "./ExperienceHeader";
import Education from "./Education";
import Certification from "./Certiification";
import Events from "./Events";
import "./exp.css"
export default function Experience() {
  function Exp() {
    return <section>Experinces</section>;
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
