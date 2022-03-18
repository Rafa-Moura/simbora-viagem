import React, { Component } from "react";
import PubSub from "pubsub-js";

import "./styles.css";

class FormDestino extends Component {
  state = { model: { id: 0, cidade: "", pais: "", valor: 0 } };

  setValues = (e, field) => {
    const { model } = this.state;
    model[field] = e.target.value;
    this.setState({ model });
    console.log(this.state.model);
  };

  create = (e) => {
    this.setState({ model: { id: 0, cidade: "", pais: "", valor: 0 } });
    this.props.destinoCreate(this.state.model);
  };

  componentWillMount() {
    PubSub.subscribe("edit-destino", (topic, destino) => {
      this.setState({ model: destino });
    });
  }

  render() {
    return (
      <div className="content--form--destino">
        <h2 className="text-center">Cadastro de Destinos</h2>
        <div className="form">
          <form className="form-destino-action col-sm-12">
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
              <label htmlFor="valor" className="form-label">
                Valor
              </label>
              <input
                type="text"
                value={this.state.model.valor}
                onChange={(e) => this.setValues(e, "valor")}
                className="form-control"
                id="valor"
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

class ListDestino extends Component {
  delete = (id) => {
    this.props.deleteDestino(id);
  };

  onEdit = (destino) => {
    PubSub.publish("edit-destino", destino);
  };

  render() {
    const { destinos } = this.props;

    return (
      <div>
        <h2 className="text-center mb-4">Lista de Destinos</h2>
        <div className="table-wrapper">
          <table className="fl-table">
            <thead>
              <tr>
                <th>Cidade</th>
                <th>País</th>
                <th>Valor</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {destinos.map((destino) => (
                <tr key={destino.id}>
                  <td>{destino.cidade}</td>
                  <td>{destino.pais}</td>
                  <td>{`R$ ${destino.valor}`}</td>
                  <td className="pt-2">
                    <button
                      className="btn btn-info text-white"
                      onClick={(e) => this.onEdit(destino)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={(e) => this.delete(destino.id)}
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
  Url = "http://localhost:8080/destino/";

  state = {
    destinos: [],
  };

  componentDidMount() {
    fetch(this.Url)
      .then((response) => response.json())
      .then((destinos) => this.setState({ destinos }))
      .catch((e) => console.log(e));
  }

  create = (destino) => {
    let data = {
      id: parseInt(destino.id),
      cidade: destino.cidade,
      pais: destino.pais,
      valor: parseFloat(destino.valor),
    };
    const requestInfo = {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-type": "application/json",
      }),
    };
    if (data.valor !== 0 && data.cidade !== "" && data.pais !== "") {
      fetch("http://localhost:8080/destino/salvar", requestInfo)
        .then((response) => response.json())
        .then((newDestino) => console.log(newDestino))
        .catch((e) => console.log(e));
    } else {
        alert("Favor informar todos os campos!")
      return;
    }
  };

  delete = (id) => {
    fetch(`http://localhost:8080/destino/deletar/${id}`, { method: "DELETE" })
      .then((rows) => {
        const destinos = this.state.destinos.filter(
          (destino) => destino.id !== id
        );
        this.setState({ destinos });
      })
      .catch((e) => console.log(e));
  };

  render() {
    return (
      <div className="row destinos-action-container">
        <div className="">
          <FormDestino destinoCreate={this.create} />
        </div>
        <div className="">
          <ListDestino
            destinos={this.state.destinos}
            deleteDestino={this.delete}
          />
        </div>
      </div>
    );
  }
}
