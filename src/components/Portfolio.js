import React, { useState, useEffect } from "react";

const projects = [
  {
    title: "Annabelle Fasuba Athletics",
    type: "Dynamic Website",
    image: "/portfolio/annabelles-website.jpg",
    tech: ["React", "Node", "Express", "MySQL"],
    description:
      "A dynamic sports performance website with athlete profiles, race statistics, and media content. Fully responsive and custom built."
  },
  {
    title: "Online Physiotherapy Platform",
    type: "Prototype Template",
    image: "/portfolio/online-physiotherapy.jpg",
    tech: ["React", "API-Ready Layout"],
    description:
      "A professional physiotherapy booking interface design with session scheduling, service pages and contact forms."
  },
  {
    title: "TrustMark Business Landing",
    type: "Static Template",
    image: "/portfolio/trustmark.jpg",
    tech: ["HTML", "CSS"],
    description:
      "A dark-themed landing page for service-based businesses. Optimised for clarity, conversions and mobile-first performance."
  }
];

function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  // Keyboard controls
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKey = (e) => {
      if (e.key === "Escape") {
        closeLightbox();
      }

      if (e.key === "ArrowRight") {
        setCurrentIndex((i) => (i + 1) % projects.length);
      }

      if (e.key === "ArrowLeft") {
        setCurrentIndex((i) => (i - 1 + projects.length) % projects.length);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen]);

  return (
    <section className="section">
      <h2 className="section-title">Portfolio</h2>

      <p className="section-subtitle">
        A collection of real projects and modern templates designed and built
        with clean, scalable code.
      </p>

      <div className="cards-grid">
        {projects.map((p, i) => (
          <article className="portfolio-card fade-up" key={i}>
            <div className="project-thumb" onClick={() => openLightbox(i)}>
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
              ></img>
            </div>

            <h3 className="project-title">{p.title}</h3>

            <p className="project-description">{p.description}</p>

            <div className="tech-list">
              {p.tech.map((t, index) => (
                <span className="tech-pill" key={index}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div
        className={`lightbox-modal ${lightboxOpen ? "active" : ""}`}
        onClick={closeLightbox}
      >
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
          ></img>

          <p className="lightbox-caption">
            {projects[currentIndex].title}
          </p>
        </div>

        <button
          className="lightbox-nav"
          id="lightboxPrev"
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex((i) => (i - 1 + projects.length) % projects.length);
          }}
        >
          ‹
        </button>

        <button
          className="lightbox-nav"
          id="lightboxNext"
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex((i) => (i + 1) % projects.length);
          }}
        >
          ›
        </button>

        <span
          className="lightbox-close"
          onClick={closeLightbox}
        >
          ×
        </span>
      </div>
    </section>
  );
}

export default Portfolio;
