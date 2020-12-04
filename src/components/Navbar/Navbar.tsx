import React, { useState, useEffect } from "react";
import DayLogo from "../../assets/images/naga-capital-logo.png";
import NightLogo from "../../assets/images/night-logo.png";
import moment from "moment";

function Navbar() {
  const [path, setPath] = useState("");
  const [currentLogo, setCurrentLogo] = useState<null | any>(null);

  useEffect(() => {
    const format = "hh:mm";
    const currentTime = moment(new Date(), format);
    const daySeven = moment("07:00:00", format);
    const nightSeven = moment("19:00:00", format);

    if (currentTime.isBetween(daySeven, nightSeven)) {
      setCurrentLogo(DayLogo);
    } else {
      setCurrentLogo(NightLogo);
    }
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
    <nav className="sticky-top navbar navbar-expand-lg navbar-dark bg-dark ">
      <a
        className={path === "/" ? "disabled" : "navbar-brand"}
        href="/"
        onClick={onHomeClick}
      >
        <img src={currentLogo} alt="Naga Capital" className="navbar-logo" />
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
