import React from "react";

function Hero({ onContactClick, onServicesClick }) {
  return (
    <section className="hero hero-saaspanel">
      <div className="hero-panel">
        <h1 className="hero-title">
          High-Quality <span className="gradient-text">Websites</span> Built
          From Real Code
        </h1>

        <p className="hero-subtitle">
          Fast, secure and scalable websites engineered using clean code —
          no templates, no drag-and-drop builders. Just performance, security
          and long-term growth.
        </p>

        <div className="hero-actions">
          <button className="btn primary hero-btn" onClick={onContactClick}>
            Start a Project
          </button>

          <button className="btn secondary hero-btn" onClick={onServicesClick}>
            View Services
          </button>
        </div>

        <p className="hero-footnote">
          Static websites, dashboards, admin systems, custom apps and more.
        </p>
      </div>
    </section>
  );
}

export default Hero;
