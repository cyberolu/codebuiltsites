import React from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Coach David",
      role: "Athletics Team Coach",
      rating: 5,
      text:
        "Working with you has been exceptional. The athlete performance website dramatically improved how we track stats, videos and progress. Outstanding work.",
    },
    {
      name: "Sarah Jenkins",
      role: "Physiotherapy Business Owner",
      rating: 5,
      text:
        "The physiotherapy platform design elevated our brand instantly. Clean, fast and super professional. Highly recommended.",
    },
    {
      name: "Mark Thompson",
      role: "Small Business Owner",
      rating: 5,
      text:
        "The landing page you built has helped us convert more clients and boosted our online presence. Amazing quality and attention to detail.",
    }
  ];

  return (
    <section className="section testimonials-section fade-up">
      <h2 className="section-title">What Clients Say</h2>

      <p className="section-subtitle">
        Real feedback from clients who trusted me with their projects.
      </p>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card upgraded" key={i}>
            
            {/* Floating Quote Icon */}
            <div className="quote-icon">“</div>

            <p className="testimonial-text">{t.text}</p>

            {/* Star Rating */}
            <div className="testimonial-stars">
              {"★".repeat(t.rating)}
            </div>

            <div className="testimonial-footer">
              <h3 className="testimonial-name">{t.name}</h3>
              <p className="testimonial-role">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
