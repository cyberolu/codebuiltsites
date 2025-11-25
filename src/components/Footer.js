import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} CodeBuiltSites</p>
      <p>Custom websites built from code.</p>

      {/* CSS Validator Badge */}
      <a href="https://jigsaw.w3.org/css-validator/validator?uri=https://www.codebuiltsites.com&profile=css3svg&usermedium=all&warning=1&vextwarning=">
 <img
  style={{ border: 0, width: "88px", height: "31px" }}
  src="https://jigsaw.w3.org/css-validator/images/vcss"
  alt="Valid CSS!"
/>
</a>

    </footer>
  );
}

export default Footer;
