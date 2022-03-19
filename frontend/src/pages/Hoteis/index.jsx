import React, { useState, useEffect } from "react";
import CardHotel from "../../components/CardHotel";
import axios from "axios";
import { BASE_URL } from "../../requests";

import "./styles.css";

function Hoteis() {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/hotel/`).then((response) => {
      const data = response.data;
      setHotel(data);
    });
  }, []);

  return (
    <section id="hotel--section">
      <div className="hotel--content container">
        <div className="row">
          {hotel.map((item) => (
            <div key={item.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3 card-hotel">
              <CardHotel
                hotel={item.hotel}
                cidade={item.cidade}
                pais={item.pais}
                diaria={item.diaria}
                id={item.id}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hoteis;
