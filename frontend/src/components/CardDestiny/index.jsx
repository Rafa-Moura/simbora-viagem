import React from "react";
import "./styles.css";

function CardDestiny(props) {
  return (
    <div className="card--destiny">
      <img src={props.image} alt={props.cityName} />
      <div className="description">
        <i class="bi bi-geo-alt-fill"></i>
        <h5>{props.cityName}</h5>
      </div>
    </div>
  );
}

export default CardDestiny;
