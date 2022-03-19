import React, {useEffect, useState} from "react";
import axios from 'axios'
import {BASE_URL} from '../../requests'

import './styles.css'

import CardPacote from "../../components/CardPacote";

function Pacotes() {
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
            <div key={item.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3 card--pacote">
              <CardPacote
                cidade={item.cidade}
                pais={item.pais}
                valor={item.valor}
                promocional={(item.valor - (item.valor / 100) * 25).toFixed(2)}
                id={item.id}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pacotes;
