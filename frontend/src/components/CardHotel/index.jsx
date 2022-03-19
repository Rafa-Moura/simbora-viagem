import React from "react";
import "./styles.css";

function CardHotel(props) {
  return (
    <div className="card--content">
      <img
        src="https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="description">
        <div className="icon--city">
          <i className="bi bi-geo-alt-fill"></i>
          <h5>{props.hotel}</h5>
        </div>
        <p>{`${props.cidade}, ${props.pais}`}</p>
        <p>{`Diária: R$ ${props.diaria}`}</p>
      </div>
    </div>
  );
}

export default CardHotel;
