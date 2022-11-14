import "./projects.css";
export default function Projects() {
  function Header() {
    return <div>Header</div>;
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
