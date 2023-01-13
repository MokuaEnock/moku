import "./skill.css";
import { useState, useEffect } from "react";

export default function Skills() {
  let [data, setData] = useState(null);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let fetchData = async () => {
      setIsLoading(true);
      try {
        let response = await fetch("");
        let data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <section id="skill">
      <header id="skills-head">Skills</header>

      <div id="skills-body">
        <div className="skills-card">
          <span className="skills-card-heading">Languages</span>
          <div className="skills-card-list">
            <span className="skills-card-item">React.Js</span>
            <span className="skills-card-item">React.Js</span>
            <span className="skills-card-item">React.Js</span>
            <span className="skills-card-item">React.Js</span>
          </div>
        </div>

        <div className="skills-card">
          <span className="skills-card-heading">Languages</span>
          <div className="skills-card-list">
            <span className="skills-card-item">React.Js</span>
            <span className="skills-card-item">React.Js</span>
            <span className="skills-card-item">React.Js</span>
            <span className="skills-card-item">React.Js</span>
          </div>
        </div>

        <div className="skills-card">
          <span className="skills-card-heading">Languages</span>
          <div className="skills-card-list">
            <span className="skills-card-item">React.Js</span>
            <span className="skills-card-item">React.Js</span>
            <span className="skills-card-item">React.Js</span>
            <span className="skills-card-item">React.Js</span>
          </div>
        </div>
      </div>

      {/* <button id="view">View All</button> */}
    </section>
  );
}
