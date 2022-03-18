import React from "react";

import ProductBox from "../../components/AdmDestinos";
import NavbarAdm from "../../components/NavbarAdm";
import "./styles.css";

function AdmDestino() {
  return (
    <>
      <NavbarAdm />
      <div className="destinos--admin-container">
        <ProductBox />
      </div>
    </>
  );
}

export default AdmDestino;
