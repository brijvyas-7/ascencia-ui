function Contact() {
  return (
    <div className="container">
      <h1>Get in Touch</h1>

      <form className="contact-box">
        <input placeholder="Full Name" />
        <input placeholder="Email Address" />
        <textarea placeholder="Your Message"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;