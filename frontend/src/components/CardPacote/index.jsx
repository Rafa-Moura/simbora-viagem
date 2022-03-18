import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function CardPacote(props) {
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
      <p><s>{`Valor passagem: R$ ${props.valor}`}</s></p>
      <p className="text-success">{`Valor promocional: R$ ${props.promocional}`}</p>
    </div>
    <div className="btn--action">
      <Link to={`/destino/${props.id}`}>
        <div className="btn dsmovie-btn-edit">
          <i className="bi bi-pencil-square"></i>Editar
        </div>
      </Link>
      <Link to={`/destino/${props.id}`}>
        <div className="btn dsmovie-btn-delete">
          <i className="bi bi-trash"></i>
          Excluir
        </div>
      </Link>
    </div>
  </div>
  );
}

export default CardPacote;
