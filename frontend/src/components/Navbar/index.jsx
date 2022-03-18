import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoNavbar } from "../../assets/img/LogoNavbar.svg";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/">
          <LogoNavbar />
        </Link>
        <a className="navbar-brand m-0" href="/" rel="noreferrer">
          SimboraViagem
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Melhores Destinos, Melhores Oportunidades
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  rel="noreferrer"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/destinos" rel="noreferrer">
                  Destinos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/hoteis" rel="noreferrer">
                  Hotéis
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pacotes" rel="noreferrer">
                  Pacotes
                </a>
              </li>
            </ul>
            <a
              className="btn btn-outline-primary"
              type="submit"
              href="/login"
              rel="noreferrer"
            >
              Entrar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
