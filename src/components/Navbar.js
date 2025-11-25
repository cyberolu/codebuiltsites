import React, { useState } from "react";

function Navbar({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (page) => {
    onNavigate(page);
    setMenuOpen(false); // close dropdown when clicking a link
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/logo.png" alt="Logo" className="site-logo" />
        <span className="site-name">CodeBuiltSites</span>
      </div>

      {/* Hamburger for mobile */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Nav menu */}
      <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <button className={`nav-link ${currentPage === "home" ? "active" : ""}`}
          onClick={() => handleNavigation("home")}
        >
          Home
        </button>

        <button className={`nav-link ${currentPage === "services" ? "active" : ""}`}
          onClick={() => handleNavigation("services")}
        >
          Services
        </button>

        <button className={`nav-link ${currentPage === "portfolio" ? "active" : ""}`}
          onClick={() => handleNavigation("portfolio")}
        >
          Portfolio
        </button>

        <button className={`nav-link ${currentPage === "whycode" ? "active" : ""}`}
          onClick={() => handleNavigation("whycode")}
        >
          Why Code?
        </button>

        <button className={`nav-link ${currentPage === "about" ? "active" : ""}`}
          onClick={() => handleNavigation("about")}
        >
          About
        </button>

        <button className={`nav-link ${currentPage === "pricing" ? "active" : ""}`}
          onClick={() => handleNavigation("pricing")}
        >
          Pricing
        </button>

        <button className="nav-link primary"
          onClick={() => handleNavigation("contact")}
        >
          Contact
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
