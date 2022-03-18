import React, { useState, useEffect } from "react";
import CardDestiny from "../../components/CardDestiny";
import axios from "axios";
import { BASE_URL } from "../../requests";

import "./styles.css";

function Destinos() {
  const [destino, setDestino] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/destino/`).then((response) => {
      const data = response.data;
      setDestino(data);
    });
  }, []);

  return (
    <section id="destinos--section">
      <div className="destiny--content container">
        <div className="row">
          {destino.map((item) => (
            <div key={item.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <CardDestiny
                cidade={item.cidade}
                pais={item.pais}
                valor={item.valor}
                id={item.id}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinos;
