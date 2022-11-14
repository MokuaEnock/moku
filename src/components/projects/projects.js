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
    return <div>Body</div>;
  }

  function Footer() {
    return <div>Footer</div>;
  }
  return (
    <section id="projects">
      <Header />
      <Body />
      <Footer />
    </section>
  );
}
