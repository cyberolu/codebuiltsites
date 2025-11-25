import React, { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Us</h2>
      <p className="section-subtitle">
        Have a project in mind? We’d love to help turn it into reality.
      </p>

      {!submitted ? (
        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={() => setSubmitted(true)}
        >
          {/* Required hidden input */}
          <input type="hidden" name="form-name" value="contact" />

          <div className="form-group">
            <label>Your Name</label>
            <input type="text" name="name" required placeholder="John Doe" />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="example@email.com"
            />
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Tell us about your project..."
            />
          </div>

          <button type="submit" className="btn primary contact-btn">
            Send Message
          </button>
        </form>
      ) : (
        <div className="contact-success">
          <h3>Message Sent!</h3>
          <p>We’ve received your message and will respond shortly.</p>
        </div>
      )}
    </section>
  );
}

export default Contact;
