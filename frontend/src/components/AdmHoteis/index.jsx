import React, { Component } from "react";
import PubSub from "pubsub-js";

import "./styles.css";

class FormHotel extends Component {
  state = { model: { id: 0, hotel: "", cidade: "", pais: "", diaria: 0 } };

  setValues = (e, field) => {
    const { model } = this.state;
    model[field] = e.target.value;
    this.setState({ model });
    console.log(this.state.model);
  };

  create = (e) => {
    this.setState({ model: { id: 0, hotel: "", cidade: "", pais: "", valor: 0 } });
    this.props.hotelCreate(this.state.model);
  };

  componentWillMount() {
    PubSub.subscribe("edit-hotel", (topic, hotel) => {
      this.setState({ model: hotel });
    });
  }

  render() {
    return (
      <div className="content--form--destino">
        <h2 className="text-center">Cadastro de Hoteis</h2>
        <div className="form">
          <form className="form-destino-action col-sm-12">
            <div className="mb-3">
              <label htmlFor="hotel" className="form-label">
                Hotel
              </label>
              <input
                type="text"
                value={this.state.model.hotel}
                onChange={(e) => this.setValues(e, "hotel")}
                className="form-control"
                id="hotel"
                placeholder="Digite o nome do Hotel"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                Cidade
              </label>
              <input
                type="text"
                value={this.state.model.cidade}
                onChange={(e) => this.setValues(e, "cidade")}
                className="form-control"
                id="city"
                placeholder="Digite o nome da cidade"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pais" className="form-label">
                País
              </label>
              <input
                type="text"
                value={this.state.model.pais}
                onChange={(e) => this.setValues(e, "pais")}
                className="form-control"
                id="pais"
                placeholder="Digite o nome da país"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="diaria" className="form-label">
                Valor
              </label>
              <input
                type="text"
                value={this.state.model.diaria}
                onChange={(e) => this.setValues(e, "diaria")}
                className="form-control"
                id="diaria"
                placeholder="Digite o valor da passagem"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.create}
            >
              Gravar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

class ListHotel extends Component {
  delete = (id) => {
    this.props.deleteHotel(id);
  };

  onEdit = (hotel) => {
    PubSub.publish("edit-hotel", hotel);
  };

  render() {
    const { hoteis } = this.props;

    return (
      <div>
        <h2 className="text-center mb-4">Lista de Hoteis</h2>
        <div className="table-wrapper">
          <table className="fl-table">
            <thead>
              <tr>
                <th>Hotel</th>
                <th>Cidade</th>
                <th>País</th>
                <th>Valor</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {hoteis.map((hotel) => (
                <tr key={hotel.id}>
                  <td>{hotel.hotel}</td>
                  <td>{hotel.cidade}</td>
                  <td>{hotel.pais}</td>
                  <td>{`R$ ${hotel.diaria}`}</td>
                  <td className="pt-2">
                    <button
                      className="btn btn-info text-white"
                      onClick={(e) => this.onEdit(hotel)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={(e) => this.delete(hotel.id)}
                    >
                      <i className="bi bi-trash3-fill"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default class ProductBox extends Component {
  Url = "http://localhost:8080/hotel/";

  state = {
    hoteis: [],
  };

  componentDidMount() {
    fetch(this.Url)
      .then((response) => response.json())
      .then((hoteis) => this.setState({ hoteis }))
      .catch((e) => console.log(e));
  }

  create = (hotel) => {
    let data = {
      id: parseInt(hotel.id),
      hotel: hotel.hotel,
      cidade: hotel.cidade,
      pais: hotel.pais,
      diaria: parseFloat(hotel.diaria),
    };
    const requestInfo = {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-type": "application/json",
      }),
    };
    if (data.diaria !== 0 && data.hotel !== "" && data.cidade !== "" && data.pais !== "") {
      fetch("http://localhost:8080/hotel/salvar", requestInfo)
        .then((response) => response.json())
        .then((newHotel) => console.log(newHotel))
        .catch((e) => console.log(e));
    } else {
        alert("Favor informar todos os campos!")
      return;
    }
  };

  delete = (id) => {
    fetch(`http://localhost:8080/hotel/deletar/${id}`, { method: "DELETE" })
      .then((rows) => {
        const hoteis = this.state.hoteis.filter(
          (hotel) => hotel.id !== id
        );
        this.setState({ hoteis });
      })
      .catch((e) => console.log(e));
  };

  render() {
    return (
      <div className="row destinos-action-container">
        <div className="">
          <FormHotel hotelCreate={this.create} />
        </div>
        <div className="">
          <ListHotel
            hoteis={this.state.hoteis}
            deleteHotel={this.delete}
          />
        </div>
      </div>
    );
  }
}
