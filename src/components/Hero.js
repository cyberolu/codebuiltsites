import React from "react";

function Hero({ onContactClick, onServicesClick }) {
  return (
    <section className="hero hero-saaspanel">
      <div className="hero-panel">

        {/* Main Headline */}
        <h1 className="hero-title">
          Custom <span className="gradient-text">Websites</span> Built for Speed,
          SEO and Real Results
        </h1>

        {/* Sub-headline */}
        <p className="hero-subtitle">
          High-performance websites engineered with clean, scalable code — no templates,
          no drag-and-drop builders. Get faster load times, stronger security and higher Google rankings
          that help your business grow.
        </p>

        {/* Call to Actions */}
        <div className="hero-actions">
          <button className="btn primary hero-btn" onClick={onContactClick}>
            Get a Free Quote
          </button>

          <button className="btn secondary hero-btn" onClick={onServicesClick}>
            View Services
          </button>
        </div>

        {/* Micro-trust line */}
        <p className="hero-footnote">
          SEO-ready code • Mobile-first design • Fast delivery • No templates
        </p>

      </div>
    </section>
  );
}

export default Hero;
