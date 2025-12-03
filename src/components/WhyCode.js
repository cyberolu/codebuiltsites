import React from "react";
import {
  FaBolt,
  FaShieldAlt,
  FaCogs,
  FaChartLine,
  FaFeather,
  FaUnlockAlt,
} from "react-icons/fa";

function WhyCode() {
  return (
    <section className="why-section">

      {/* Header */}
      <div className="why-header">
        <h2>Why Choose a Hand-Coded Website?</h2>
        <p>
          Custom-coded websites deliver better performance, greater security and full
          creative freedom. Unlike template builders, your site is engineered for
          long-term growth and tailored precisely to your business.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="why-grid">

        <div className="why-card">
          <FaFeather className="why-icon" />
          <h3>Unlimited Customisation</h3>
          <p>
            Every pixel is crafted around your brand and goals — no template
            limitations, no fixed layouts, no generic designs.
          </p>
        </div>

        <div className="why-card">
          <FaBolt className="why-icon" />
          <h3>Lightning-Fast Performance</h3>
          <p>
            Clean, lightweight code without bloated plugins means faster load
            times and a smoother user experience across all devices.
          </p>
        </div>

        <div className="why-card">
          <FaChartLine className="why-icon" />
          <h3>Stronger SEO Results</h3>
          <p>
            A hand-coded structure gives you maximum control over metadata,
            indexing and technical SEO — helping you rank higher on Google.
          </p>
        </div>

        <div className="why-card">
          <FaShieldAlt className="why-icon" />
          <h3>Enterprise-Level Security</h3>
          <p>
            Custom builds eliminate the vulnerabilities commonly found in
            template systems and plugin-heavy platforms.
          </p>
        </div>

        <div className="why-card">
          <FaCogs className="why-icon" />
          <h3>Scalable & Future-Proof</h3>
          <p>
            Add dashboards, databases, user logins or custom features at any
            time. Your website evolves with your business — no rebuild required.
          </p>
        </div>

        <div className="why-card">
          <FaUnlockAlt className="why-icon" />
          <h3>Full Ownership</h3>
          <p>
            You own your code, your hosting and your domain. No subscriptions,
            no lock-in, no platform limitations.
          </p>
        </div>

      </div>

      {/* Comparison Table */}
      <section className="why-compare">
        <h3>Hand-Coded Website vs Template Builder</h3>
        <p>
          A quick look at how a custom-coded site compares to drag-and-drop
          builders like Wix, Squarespace or WordPress templates.
        </p>

        <div className="why-compare-table">

          {/* Header */}
          <div className="why-compare-row why-compare-head">
            <div></div>
            <div>Hand-Coded Website</div>
            <div>Template Builder</div>
          </div>

          <div className="why-compare-row">
            <div>Design freedom</div>
            <div>Unlimited. Built precisely for your brand.</div>
            <div>Restricted to preset blocks and themes.</div>
          </div>

          <div className="why-compare-row">
            <div>Performance</div>
            <div>Fast, optimized and lightweight.</div>
            <div>Often slow and code-heavy.</div>
          </div>

          <div className="why-compare-row">
            <div>SEO control</div>
            <div>Complete technical SEO control.</div>
            <div>Basic SEO settings only.</div>
          </div>

          <div className="why-compare-row">
            <div>Scalability</div>
            <div>Easily add advanced, custom features.</div>
            <div>Limited by platform capabilities.</div>
          </div>

          <div className="why-compare-row">
            <div>Ownership</div>
            <div>You own everything: code, domain, hosting.</div>
            <div>Platform-dependent and subscription-based.</div>
          </div>

          <div className="why-compare-row">
            <div>Ongoing cost</div>
            <div>One-off build + normal hosting/domain fees.</div>
            <div>Recurring monthly fees + add-on charges.</div>
          </div>

        </div>
      </section>
    </section>
  );
}

export default WhyCode;
