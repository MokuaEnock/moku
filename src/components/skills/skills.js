import "./skill.css";
// import { useState, useEffect } from "react";
import skillData from "./data";

export default function Skills() {
  // let [data, setData] = useState(null);
  // let [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   let fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       let response = await fetch("");
  //       let data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  let all = skillData.map((e) => {
    return (
      <div className="skills-card" key={e.id}>
        <span className="skills-card-heading">{e.name}</span>
        <div className="skills-card-list">
          {e.all.map((k, index) => {
            return (
              <span className="skills-card-item" key={index}>
                {k}
              </span>
            );
          })}
        </div>
      </div>
    );
  });

  console.log(all);

  return (
    <section id="skill">
      <header id="skills-head">Skills</header>

      <div id="skills-body">
        {all}
        {/* <div className="skills-card">
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
        </div> */}
      </div>

      {/* <button id="view">View All</button> */}
    </section>
  );
}
