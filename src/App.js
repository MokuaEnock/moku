import "./App.css";
import Contact from "./components/contact/contact";
import About from "./components/about/About";
import Education from "./components/education/education";
import Landing from "./components/landing/landing";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";

function App() {
  return (
    <>
      <Landing />
      <Projects />
      <Skills />
      <Education />
      <About />
      <Contact />
    </>
  );
}

export default App;
