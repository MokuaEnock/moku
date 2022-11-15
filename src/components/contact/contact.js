import "./contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <div id="contact1">
        <h2>
          Contact <br />
          Me.
        </h2>
      </div>
      <form id="contact2">
        <label id="name">
          <span>Your Name</span>
          <input type="text" />
        </label>

        <label id="email">
          <span>Your Email</span>
          <input type="text" />
        </label>

        <label id="message">
          <textarea placeholder="Your Message" />
        </label>

        <button type="submit" id="submit-contact">
          Send
        </button>
      </form>
    </section>
  );
}
