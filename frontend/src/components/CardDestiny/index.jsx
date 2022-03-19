import React from "react";
import "./styles.css";

function CardDestiny(props) {
  return (
    <div className="card--content">
      <img
        src="https://images.pexels.com/photos/5673835/pexels-photo-5673835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="description">
        <div className="icon--city">
          <i className="bi bi-geo-alt-fill"></i>
          <h5>{props.cidade}</h5>
        </div>
        <p>{props.pais}</p>
        <p>{`Valor passagem: R$ ${props.valor}`}</p>
      </div>
    </div>
  );
}

export default CardDestiny;
