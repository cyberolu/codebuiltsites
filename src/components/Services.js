import React from "react";

function Services() {
  return (
    <section className="section">

      {/* PAGE HEADER */}
      <h2 className="section-title">What We Offer</h2>
      <p className="section-subtitle">
        Professional website development services built from pure code.
      </p>

      {/* SERVICE CARDS */}
      <div className="cards-grid">

        <div className="card">
          <h3>Static Websites</h3>
          <p>Clean, fast and modern sites built using HTML, CSS and JavaScript.</p>
          <ul className="service-list">
            <li>Business landing pages</li>
            <li>Portfolio websites</li>
            <li>Event / personal websites</li>
            <li>Fast delivery</li>
          </ul>
        </div>

        <div className="card">
          <h3>Dynamic Websites</h3>
          <p>Full-stack websites with backend functionality and user interaction.</p>
          <ul className="service-list">
            <li>Login & user accounts</li>
            <li>Database integration</li>
            <li>API functionality</li>
            <li>Custom dashboards</li>
          </ul>
        </div>

        <div className="card">
          <h3>Admin Panels</h3>
          <p>Secure admin systems for managing data, users and content.</p>
          <ul className="service-list">
            <li>Secure authentication</li>
            <li>Roles & permissions</li>
            <li>CRUD management tools</li>
            <li>Analytics & logs</li>
          </ul>
        </div>

        <div className="card">
          <h3>SEO & Performance</h3>
          <p>Optimised websites designed to rank higher on Google.</p>
          <ul className="service-list">
            <li>SEO setup & metadata</li>
            <li>Page-speed optimisation</li>
            <li>Mobile improvements</li>
            <li>Content structure optimisation</li>
          </ul>
        </div>

        <div className="card">
          <h3>Hosting & Domain Setup</h3>
          <p>We help you set up your domain, hosting and security properly.</p>
          <ul className="service-list">
            <li>Domain configuration</li>
            <li>DNS setup</li>
            <li>HTTPS / SSL installation</li>
            <li>Reliable hosting guidance</li>
          </ul>
        </div>

        <div className="card">
          <h3>Maintenance & Updates</h3>
          <p>Ongoing support so your website stays updated and secure.</p>
          <ul className="service-list">
            <li>Monthly updates</li>
            <li>Bug fixes</li>
            <li>Content updates</li>
            <li>Performance monitoring</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default Services;
