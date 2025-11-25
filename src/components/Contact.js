import React, { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      }),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert("Error submitting form: " + error));
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Us</h2>
      <p className="section-subtitle">Send us a message and we’ll get back to you.</p>

      {!submitted ? (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="contact-form"
        >
          {/* Required hidden field */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows="5" required></textarea>
          </div>

          <button className="btn primary contact-btn" type="submit">
            Send Message
          </button>
        </form>
      ) : (
        <div className="contact-success">
          <h3>Thank you!</h3>
          <p>Your message has been sent successfully.</p>
        </div>
      )}
    </section>
  );
}

export default Contact;
