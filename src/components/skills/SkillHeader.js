import { Link } from "react-router-dom";
import "./mainskill.css";

export default function SkillHeader() {
  return (
    <header id="skill-header">
      <Link to="/">Home</Link>
dds
      <form id="skill-search">
        <input type="text" placeholder="Search Skill" />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
