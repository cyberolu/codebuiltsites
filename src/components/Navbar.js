import React from "react";

function Navbar({ currentPage, onNavigate }) {
  return (
    <header className="navbar">
      <div className="navbar-brand">
  <img src="/logo.png" alt="Logo" className="site-logo" />
  <span className="site-name">CodeBuiltSites</span>
</div>

      <nav className="navbar-menu">
        <button
          className={currentPage === "home" ? "nav-link active" : "nav-link"}
          onClick={() => onNavigate("home")}
        >
          Home
        </button>
        <button
          className={currentPage === "services" ? "nav-link active" : "nav-link"}
          onClick={() => onNavigate("services")}
        >
          Services
        </button>
        <button
          className={currentPage === "portfolio" ? "nav-link active" : "nav-link"}
          onClick={() => onNavigate("portfolio")}
        >
          Portfolio
        </button>
        <button
  className={currentPage === "whycode" ? "nav-link active" : "nav-link"}
  onClick={() => onNavigate("whycode")}
>
  Why Code?
</button>

        <button
          className={currentPage === "about" ? "nav-link active" : "nav-link"}
          onClick={() => onNavigate("about")}
        >
          About
        </button>
        <button
  className={currentPage === "pricing" ? "nav-link active" : "nav-link"}
  onClick={() => onNavigate("pricing")}
>
  Pricing
</button>

        <button
          className={currentPage === "contact" ? "nav-link active" : "nav-link primary"}
          onClick={() => onNavigate("contact")}
        >
          Contact
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
