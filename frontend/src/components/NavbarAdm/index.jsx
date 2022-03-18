import React from "react";
import "./styles.css";

function NavbarAdm() {
  return (
    <nav class="navbar navbar--admin navbar-expand-lg navbar-light">
      <div class="nav--container container-fluid">
        <i class="bi bi-graph-up-arrow"></i>
        <a class="navbar-brand adm-logo" href="/admin" rel="noreferrer">
          Painel Administrativo
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav navbar-nav-adm">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/admin/destinos"
                rel="noreferrer"
              >
                Destinos
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/admin/hoteis"
                rel="noreferrer"
              >
                Hoteis
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarAdm;
