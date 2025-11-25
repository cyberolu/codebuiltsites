import React from "react";

function Pricing({ onChoosePlan }) {
  return (
    <section className="section pricing-section">
      <h2 className="section-title">Pricing Plans</h2>
      <p className="section-subtitle">
        Clear and affordable plans for static and dynamic websites.
      </p>

      <div className="pricing-grid">

        {/* STARTER */}
        <div className="price-card">
          <h3 className="price-title">Starter (Static Website)</h3>
          <p className="price-amount">£199</p>

          <ul className="price-features">
            <li>1–3 page static website</li>
            <li>Responsive mobile-friendly design</li>
            <li>Basic contact form</li>
            <li>Delivery in 3–5 days</li>
            <li><strong>Domain not included</strong></li>
            <li>Client purchases domain separately</li>
            <li>I connect the domain for you</li>
          </ul>

          <button className="btn primary price-btn" onClick={onChoosePlan}>
            Choose Plan
          </button>
        </div>

        {/* PRO */}
        <div className="price-card featured">
          <h3 className="price-title">Pro (Business Static Website)</h3>
          <p className="price-amount">£499</p>

          <ul className="price-features">
            <li>5–10 page professional static website</li>
            <li>Custom design + advanced layout</li>
            <li>SEO optimisation</li>
            <li>Improved forms + integrations</li>
            <li><strong>Domain setup included</strong></li>
            <li>Client still pays for the domain</li>
            <li>Full DNS + hosting configuration handled for you</li>
          </ul>

          <button className="btn primary price-btn" onClick={onChoosePlan}>
            Choose Plan
          </button>
        </div>

        {/* ULTIMATE */}
        <div className="price-card">
          <h3 className="price-title">Ultimate (Dynamic Website)</h3>
          <p className="price-amount">£999</p>

          <ul className="price-features">
            <li>Full dynamic website</li>
            <li>Login + user accounts</li>
            <li>Admin dashboard</li>
            <li>Database + API setup</li>
            <li><strong>Domain + DNS + SSL setup included</strong></li>
            <li>Domain cost billed separately</li>
            <li>Complete backend configuration</li>
          </ul>

          <button className="btn primary price-btn" onClick={onChoosePlan}>
            Choose Plan
          </button>
        </div>

      </div>
    </section>
  );
}

export default Pricing;
