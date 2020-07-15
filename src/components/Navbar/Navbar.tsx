import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/sample-icon.png";

function Navbar() {
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.pathname);
  }, [path]);

  const onHomeClick = () => {
    if (path === "/") {
      return false;
    }
  };

  const onAboutClick = () => {
    if (path === "/about") {
      return false;
    }
  };

  const onContactUsClick = () => {
    if (path === "/contact-us") {
      return false;
    }
  };

  return (
    <nav className="sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
      <a
        className={path === "/" ? "disabled" : "navbar-brand"}
        href="/"
        onClick={onHomeClick}
      >
        <img src={Logo} alt="Naga Capital" className="navbar-logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className={path === "/about" ? "nav-item active" : "nav-item"}>
            <a className="nav-link" href="/about" onClick={onAboutClick}>
              ABOUT
            </a>
          </li>
          <li
            className={path === "/contact-us" ? "nav-item active" : "nav-item"}
          >
            <a
              className="nav-link"
              href="/contact-us"
              onClick={onContactUsClick}
            >
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
