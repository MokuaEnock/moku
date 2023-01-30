import "./App.css";
import Contact from "./components/contact/contact";
import About from "./components/about/About";
import Education from "./components/education/education";
import Landing from "./components/landing/landing";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import MainSkill from "./components/skills/MainSkill";
import SkillHeader from "./components/skills/SkillHeader";
import Footer from "./components/footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Project from "./components/Project/project";
import Experience from "./components/Experience/Experince";
function App() {
  function Home() {
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

  function SkillSection() {
    return (
      <>
        <SkillHeader />
        <MainSkill />
      </>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />}>
          <Route path="id" element={Project} />
        </Route>

        <Route path="skills" element={<SkillSection />}></Route>

        <Route path="experience" element={<Experience />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
