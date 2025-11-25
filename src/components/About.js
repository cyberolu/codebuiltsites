import React from "react";


function About() {
  return (
    <section className="about-section">
      <h2>About</h2>

      <p>
        We specialise in building high–quality websites engineered directly from clean,
        hand-written code. No templates, no drag-and-drop builders — just modern,
        secure and scalable web solutions built the right way.
      </p>

      <p>
        Our approach focuses on performance, long-term reliability and full
        customisation. Every project is built to match your brand, your goals and
        your users — without any of the limitations that come with generic site builders.
      </p>

      <ul className="about-list">
        <li>HTML, CSS, JavaScript</li>
        <li>React for fast, interactive front-end experiences</li>
        <li>Node + Express for secure backend systems</li>
        <li>MySQL & structured database design</li>
        <li>API development & custom integrations</li>
      </ul>
    </section>
  );
}

export default About;
