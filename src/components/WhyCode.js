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
      <div className="why-header">
        <h2>Why Choose a Hand-Coded Website?</h2>
        <p>
          Websites built from real code are faster, more secure,
          more customisable and built to last.
        </p>
      </div>

      {/* Feature cards */}
      <div className="why-grid">
        <div className="why-card">
          <FaFeather className="why-icon" />
          <h3>Full Customisation</h3>
          <p>
            Every part of your site is tailored exactly to your needs
            with zero layout restrictions.
          </p>
        </div>

        <div className="why-card">
          <FaBolt className="why-icon" />
          <h3>Faster Performance</h3>
          <p>
            No heavy templates or unnecessary scripts – just clean,
            efficient code.
          </p>
        </div>

        <div className="why-card">
          <FaChartLine className="why-icon" />
          <h3>Better SEO</h3>
          <p>
            Clean structure and optimised code help your website rank
            higher in search engines.
          </p>
        </div>

        <div className="why-card">
          <FaShieldAlt className="why-icon" />
          <h3>Stronger Security</h3>
          <p>
            Custom builds avoid common weaknesses found in shared
            templates and plugin-based systems.
          </p>
        </div>

        <div className="why-card">
          <FaCogs className="why-icon" />
          <h3>Scalable & Future-Proof</h3>
          <p>
            Add new features, databases, dashboards or tools at any time.
            Your site grows with your business.
          </p>
        </div>

        <div className="why-card">
          <FaUnlockAlt className="why-icon" />
          <h3>Real Ownership</h3>
          <p>
            You own your code, hosting and domain — no lock-in to a
            single page-builder platform.
          </p>
        </div>
      </div>

      {/* Comparison block */}
      <section className="why-compare">
        <h3>Hand-Coded Website vs Template Builder</h3>
        <p>
          Here is how a custom coded site compares to a typical
          drag-and-drop template builder.
        </p>

        <div className="why-compare-table">

          {/* Header row */}
          <div className="why-compare-row why-compare-head">
            <div></div>
            <div>Hand-Coded Website</div>
            <div>Template Builder</div>
          </div>

          {/* ROW 1 */}
          <div className="why-compare-row">
            <div>Design freedom</div>
            <div>Unlimited – built exactly for your brand.</div>
            <div>Limited to pre-made blocks and themes.</div>
          </div>

          {/* ROW 2 */}
          <div className="why-compare-row">
            <div>Performance</div>
            <div>Lightweight, optimised and fast.</div>
            <div>Often heavier with unused scripts.</div>
          </div>

          {/* ROW 3 */}
          <div className="why-compare-row">
            <div>SEO control</div>
            <div>Full control over structure and metadata.</div>
            <div>Basic SEO tools, limited control.</div>
          </div>

          {/* ROW 4 */}
          <div className="why-compare-row">
            <div>Scalability</div>
            <div>Add logins, dashboards or advanced features easily.</div>
            <div>Advanced features may need plugins or platform upgrades.</div>
          </div>

          {/* ROW 5 */}
          <div className="why-compare-row">
            <div>Ownership</div>
            <div>You own everything — code, hosting and domain.</div>
            <div>Locked into the builder and its pricing model.</div>
          </div>

          {/* ROW 6 */}
          <div className="why-compare-row">
            <div>Ongoing cost</div>
            <div>One-off build + normal hosting & domain fees.</div>
            <div>Ongoing monthly subscription + add-ons.</div>
          </div>

        </div>
      </section>
    </section>
  );
}

export default WhyCode;
