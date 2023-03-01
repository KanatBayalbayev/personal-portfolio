import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Kanat Bayalbayev</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>
        <div className="footer__social">
          {" "}
          <a href="https://github.com/KanatBayalbayev" className='home__social-icon' target="_blank" rel="noopener noreferrer">
            <i className="uil uil-github-alt"></i>
          </a>
          <a href="https://www.instagram.com/kbayalbayev/?next=%2F" className='home__social-icon' target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/kanat-bayalbayev/" className='home__social-icon' target="_blank" rel="noopener noreferrer">
            <i className="uil uil-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; KanatBayalbayev. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
