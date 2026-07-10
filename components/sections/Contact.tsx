"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const mailtoLink = `mailto:nayanthiweerasuriya@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(String(name))}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;

    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="container section-padding">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Let&apos;s Connect</h3>
          <p>
            I am actively seeking internship opportunities in Security
            Operations (SOC) and Cyber Threat Intelligence. Whether you have a
            position available or just want to discuss cybersecurity, I&apos;d
            love to hear from you!
          </p>

          <div className="contact-highlights">
            <div className="contact-highlight">
              <i className="fas fa-briefcase" />
              <div>
                <strong>Seeking</strong>
                <span>SOC / CTI Internships</span>
              </div>
            </div>
            <div className="contact-highlight">
              <i className="fas fa-map-marker-alt" />
              <div>
                <strong>Based in</strong>
                <span>Sri Lanka · Open to Remote</span>
              </div>
            </div>
            <div className="contact-highlight">
              <i className="fas fa-clock" />
              <div>
                <strong>Response time</strong>
                <span>Within 24 hours</span>
              </div>
            </div>
          </div>

          <div className="contact-details">
            <a href="mailto:nayanthiweerasuriya@gmail.com" className="contact-link">
              <i className="fas fa-envelope" /> nayanthiweerasuriya@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/nayanthi-weerasuriya-457560268"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <i className="fab fa-linkedin" /> LinkedIn Profile
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && (
            <div className="form-toast" role="status">
              <i className="fas fa-check-circle" />
              Opening your email client — message ready to send!
            </div>
          )}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="How can I help you?"
            />
          </div>
          <button type="submit" className="btn-primary">
            Send Message <i className="fas fa-paper-plane" />
          </button>
        </form>
      </div>
    </section>
  );
}
