import React from "react";

function Portfolio() {
  const projects = [
    {
      title: "Dynamic Athletics Sports",
      type: "Dynamic Website",
      tech: "Node, Express, MySQL",
      description:
        "Sports results platform with admin login, file uploads and database storage.",
    },
    {
      title: "Business Landing Page",
      type: "Static Website",
      tech: "HTML, CSS, JS",
      description:
        "Clean, fast and modern website built from scratch for a local business.",
    },
  ];

  return (
    <section className="section">
      <h2 className="section-title">Portfolio</h2>

      <div className="cards-grid">
        {projects.map((p, i) => (
          <article className="card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p>
              <strong>Tech:</strong> {p.tech}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
