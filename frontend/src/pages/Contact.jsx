import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* Header */}
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have questions or suggestions?  
          Feel free to reach out — we’d love to hear from you.
        </p>
      </section>

      {/* Content */}
      <section className="contact-content">

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Email: support@taskmanager.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: India</p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>

          <form>
            <input  type="text" placeholder="Your Name" />
            <input  type="email" placeholder="Your Email" />
            <textarea  placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </section>
    </div>
  );
};

export default Contact;
