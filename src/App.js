import "./App.css";
import Contact from "./components/contact/contact";
import About from "./components/about/About";
import Education from "./components/education/education";
import Landing from "./components/landing/landing";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />}>
          <Route path="id" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
