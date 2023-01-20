import "./App.css";
import Contact from "./components/contact/contact";
import About from "./components/about/About";
import Education from "./components/education/education";
import Landing from "./components/landing/landing";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        {/* <Landing />
        <Projects />
        <Skills />
        <Education />
        <About />
        <Contact /> */}
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
