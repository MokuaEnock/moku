import "./landing.css";
import ban from "../images/Full-Stack.svg";
export default function Landing() {
  function Header() {
    return <header></header>;
  }

  function Info() {
    return (
      <div className="item-info">
        <span className="intro">
          <span>
            Hey There,
            <br />
            I'm Mokua
          </span>
          <button>Developer</button>
        </span>
        <span>
          A full-stack developer with over one year of industrial experience in
          various domains. Worked on multiple projects in Finance, Education and
          Medicine fields.
        </span>
      </div>
    );
  }

  function Banner() {
    return (
      <div className="banner">
        <img src={ban} alt="banner" />
      </div>
    );
  }
  return (
    <main>
      <Header />
      <Banner />
      <Info />
    </main>
  );
}
