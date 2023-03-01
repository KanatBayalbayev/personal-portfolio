import React, { useState } from "react";
import "./header.css";

const Header = () => {
  // Changing background of header
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY >= 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });
  // Toggle Menu
  const [toggle, showMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Kanat Bayalbayev
        </a>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveLink("#home")}
                className={
                  activeLink === "#home"
                    ? "nav__link active-link underline"
                    : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveLink("#about")}
                className={
                  activeLink === "#about"
                    ? "nav__link active-link underline"
                    : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> About me
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveLink("#skills")}
                className={
                  activeLink === "#skills"
                    ? "nav__link active-link underline"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                onClick={() => setActiveLink("#projects")}
                className={
                  activeLink === "#projects"
                    ? "nav__link active-link underline"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveLink("#contact")}
                className={
                  activeLink === "#contact"
                    ? "nav__link active-link underline"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i> Contact me
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
