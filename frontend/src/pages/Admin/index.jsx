import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../requests";
import axios from "axios";
import NavbarAdm from "../../components/NavbarAdm";

import "./styles.css";

function Admin() {
  const [destino, setDestino] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/destino/`).then((response) => {
      const data = response.data;
      setDestino(data);
    });
  }, []);
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/hotel/`).then((response) => {
      const data = response.data;
      setHotel(data);
    });
  }, []);
  return (
    <>
      <NavbarAdm />
      <div className="admin--section">
        <div className="card--count--city">
          <h3>Destinos cadastrados</h3>
          <h5>{destino.length}</h5>
        </div>
        <div className="card--count--hotel">
          <h3>Hotéis cadastrados</h3>
          <h5>{hotel.length}</h5>
        </div>
      </div>
    </>
  );
}

export default Admin;
