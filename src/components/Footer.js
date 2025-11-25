import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} CodeBuiltSites</p>
      <p>Custom websites built from code.</p>

      {/* CSS Validator Badge */}
      <a
        href="https://jigsaw.w3.org/css-validator/check/referer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          style={{ border: 0, width: "88px", height: "31px", marginTop: "10px" }}
          src="https://jigsaw.w3.org/css-validator/images/vcss"
          alt="Valid CSS!"
        />
      </a>
    </footer>
  );
}

export default Footer;
