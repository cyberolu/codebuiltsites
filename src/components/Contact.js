import React, { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    const form = e.target;

    const payload = {
      "form-name": "contact",
      name: form.name.value,
      email: form.email.value,
      projectType: form.projectType.value,
      budget: form.budget.value,
      message: form.message.value
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(payload)
    })
      .then(() => {
        setSubmitted(true);
        setSubmitting(false);
      })
      .catch((error) => {
        console.error(error);
        setErrorMsg("Something went wrong. Please try again.");
        setSubmitting(false);
      });
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Us</h2>
      <p className="section-subtitle">
        Tell us a bit about your project and we’ll get back to you.
      </p>

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
          <input type="hidden" name="form-name" value="contact"></input>
          <input type="hidden" name="bot-field"></input>

          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" required></input>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" required></input>
          </div>

          <div className="form-group">
            <label>Project type (optional)</label>
            <select name="projectType">
              <option value="">Select a project type</option>
              <option value="portfolio">Personal portfolio</option>
              <option value="business-site">Business website</option>
              <option value="web-app">Web application</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Estimated budget (optional)</label>
            <input
              type="text"
              name="budget"
              placeholder="e.g. £500 – £1500"
            ></input>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows="5" required></textarea>
          </div>

          {errorMsg && (
            <p style={{ color: "#fca5a5", fontSize: "0.9rem" }}>{errorMsg}</p>
          )}

          <button
            className="btn primary contact-btn"
            type="submit"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      ) : (
        <div className="contact-success">
          <h3>Thank you!</h3>
          <p>Your message has been sent successfully. I’ll be in touch soon.</p>
        </div>
      )}
    </section>
  );
}

export default Contact;
