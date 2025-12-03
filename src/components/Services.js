import React from "react";

function Services() {
  return (
    <section className="section">

      {/* PAGE HEADER */}
      <h2 className="section-title">What We Offer</h2>
      <p className="section-subtitle">
        Professional, high-performance websites engineered with clean,
        modern code — built for speed, SEO and long-term growth.
      </p>

      {/* SERVICE CARDS */}
      <div className="cards-grid">

        {/* Static Websites */}
        <div className="card">
          <h3>Static Websites</h3>
          <p>
            Clean, modern and lightning-fast websites built using HTML, CSS and JavaScript. 
            Perfect for businesses that want speed, simplicity and premium design.
          </p>
          <ul className="service-list">
            <li>Business landing pages</li>
            <li>Portfolio & personal sites</li>
            <li>Marketing & event pages</li>
            <li>Fast delivery & optimisation</li>
          </ul>
        </div>

        {/* Dynamic Websites */}
        <div className="card">
          <h3>Dynamic Websites</h3>
          <p>
            Fully interactive websites with backend functionality, user accounts
            and live data — custom built for your business needs.
          </p>
          <ul className="service-list">
            <li>User logins & authentication</li>
            <li>Database-driven content</li>
            <li>API integrations</li>
            <li>Interactive dashboards</li>
          </ul>
        </div>

        {/* Admin Panels */}
        <div className="card">
          <h3>Admin Panels</h3>
          <p>
            Secure, powerful admin systems to manage users, content, analytics
            and business data with ease.
          </p>
          <ul className="service-list">
            <li>Role-based access control</li>
            <li>Secure authentication</li>
            <li>CRUD management tools</li>
            <li>Analytics & activity logs</li>
          </ul>
        </div>

        {/* SEO & Performance */}
        <div className="card">
          <h3>SEO & Performance</h3>
          <p>
            Fully optimised websites that load fast, follow SEO best practices
            and perform exceptionally on Google Lighthouse and Core Web Vitals.
          </p>
          <ul className="service-list">
            <li>SEO metadata & markup</li>
            <li>Page-speed optimisation</li>
            <li>Mobile responsiveness</li>
            <li>Content structure enhancements</li>
          </ul>
        </div>

        {/* Hosting & Domain Setup */}
        <div className="card">
          <h3>Hosting & Domain Setup</h3>
          <p>
            Complete setup for your hosting, domain and security — handled for you 
            with clear guidance every step of the way.
          </p>
          <ul className="service-list">
            <li>Domain & DNS configuration</li>
            <li>Hosting setup & migration</li>
            <li>SSL / HTTPS installation</li>
            <li>Performance-ready deployment</li>
          </ul>
        </div>

        {/* Maintenance */}
        <div className="card">
          <h3>Maintenance & Updates</h3>
          <p>
            Reliable ongoing support to keep your website fast, secure and fully updated
            as your business grows.
          </p>
          <ul className="service-list">
            <li>Monthly updates</li>
            <li>Bug fixes & improvements</li>
            <li>Content & media updates</li>
            <li>Performance monitoring</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default Services;
