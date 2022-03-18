import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../requests";
import axios from "axios";

import "./styles.css";

function Formlogin() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  let login = "";
  let senha = "";

  useEffect(() => {
    axios.get(`${BASE_URL}/usuario/1`).then((response) => {
      const data = response.data;
      setUser(data);
    });
  }, []);

  login = user.email;
  senha = user.senha;

  function handleSubmit(event) {
    event.preventDefault();
    const emailUsuario = event.target.email.value;
    const senhaUsuario = event.target.password.value;

    if (emailUsuario === login && senhaUsuario === senha) {
      alert("Logado com sucesso")
      navigate("/admin");
    } else {
      alert("Dados incorretos")
      return;
    }
  }

  return (
    <section id="form-section" className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Digite seu email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Senha
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Digite sua senha"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Entrar
        </button>
      </form>
    </section>
  );
}

export default Formlogin;
