import "./projects.css";
import Search from "../images/search.svg";
export default function Projects() {
  function Header() {
    return (
      <div className="projects-header">
        <span>Latest</span>
        <form>
          <button type="submit">
            <img src={Search} alt="search" />
          </button>
          <input type="text" placeholder="Search" />
        </form>
      </div>
    );
  }
  function Body() {
    return <div id="projects-body">Body</div>;
  }

  function Footer() {
    return <div id="projects-footer">Footer</div>;
  }
  return (
    <section id="projects">
      <Header />
      <Body />
      <Footer />
    </section>
  );
}
