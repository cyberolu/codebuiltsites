import React, { useState } from "react";

function Navbar({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (page) => {
    onNavigate(page);
    setMenuOpen(false); // close mobile dropdown
  };

  return (
    <nav className="navbar">
      {/* Branding */}
      <div className="navbar-brand" onClick={() => handleNavigation("home")}>
        <img src="/logo.png" alt="CodeBuiltSites Logo" className="site-logo" />
        <span className="site-name">CodeBuiltSites</span>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="hamburger"
        aria-label="Toggle Menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Navigation Links */}
      <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <button
          className={`nav-link ${currentPage === "home" ? "active" : ""}`}
          onClick={() => handleNavigation("home")}
        >
          Home
        </button>

        <button
          className={`nav-link ${currentPage === "services" ? "active" : ""}`}
          onClick={() => handleNavigation("services")}
        >
          Services
        </button>

        <button
          className={`nav-link ${currentPage === "portfolio" ? "active" : ""}`}
          onClick={() => handleNavigation("portfolio")}
        >
          Portfolio
        </button>

        <button
          className={`nav-link ${currentPage === "whycode" ? "active" : ""}`}
          onClick={() => handleNavigation("whycode")}
        >
          Why Code?
        </button>

        <button
          className={`nav-link ${currentPage === "about" ? "active" : ""}`}
          onClick={() => handleNavigation("about")}
        >
          About
        </button>

        <button
          className={`nav-link ${currentPage === "pricing" ? "active" : ""}`}
          onClick={() => handleNavigation("pricing")}
        >
          Pricing
        </button>

        {/* NEW: High-conversion primary CTA */}
        <button
          className="nav-link primary-cta"
          onClick={() => handleNavigation("contact")}
        >
          Get a Free Quote
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
