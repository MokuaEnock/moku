import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-header">
        <p>Subscribe to my weekly newsletter</p>
        <form className="footer-form">
          <input type="text" placeholder="Enter your Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-main">
      <span></span>

        <span>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/experience">Experience</Link>
        </span>
        <span></span>
      </div>
      <p>Developed and maintained by Enock Mokua</p>
    </footer>
  );
}
