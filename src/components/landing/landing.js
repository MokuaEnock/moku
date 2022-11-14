import "./landing.css";
export default function Landing() {
  function Header() {
    return <header></header>;
  }

  function Info() {
    return <div className="item-info"></div>;
  }

  function Banner() {
    return <div className="banner">Banner</div>;
  }
  return (
    <main>
      <Header />
      <Banner />
      <Info />
    </main>
  );
}
