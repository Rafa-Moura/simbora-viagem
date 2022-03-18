import React from "react";
import "./styles.css";

import { ReactComponent as LogoFooter } from "../../assets/img/LogoFooter.svg";

function Footer() {
  return (
    <footer>
      <div className="left--side col-sm-12 col-lg-6">
        <LogoFooter />
        <h5>SimboraViagem</h5>
      </div>
      <div className="right--side col-sm-12 col-lg-6">
        <div className="social--content">
          <a href="/" rel="noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="/" rel="noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="/" rel="noreferrer">
            <i className="bi bi-whatsapp"></i>
          </a>
          <a href="/" rel="noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
        <p> &copy; Desenvolvido por Rafael Moura</p>
      </div>
    </footer>
  );
}

export default Footer;
