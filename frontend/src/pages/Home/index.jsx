import React from "react";
import "./styles.css";

import FundoInternacional from "../../assets/img/fundo-internacional.jpg";
import FundoNacional from "../../assets/img/fundo-nacional.jpg";
import FundoHotel from "../../assets/img/fundo-hotel.jpg";
import FundoPacote from "../../assets/img/fundo-pacote.jpg";
import HomemImg from "../../assets/img/homem.jpg";
import { ReactComponent as Logo } from "../../assets/img/Logo.svg";

function Home() {
  return (
    <>
      <main>
        <section id="hero--section">
          <div className="hero--content">
            <p>
              O seu próximo destino está aqui! Os melhores destinos, melhores
              hotéis e melhores pacotes e condições!
            </p>
            <a href="/pacotes" rel="noreferrer">
              Conhecer Promoções!
            </a>
          </div>
        </section>
        <section id="service--section">
          <h2 className="home--title">SERVIÇOS</h2>
          <div className="services--container container">
            <div className="card-service">
              <div className="img">
                <img src={FundoInternacional} alt="" />
              </div>
              <div className="description">
                <h4>Destinos Internacionais</h4>
                <p>
                  Os melhores destinos internacionais a sua espera, acesse nossa
                  página de destinos, verifique as opções disponíveis e confira
                  se está disponível nos próximos pacotes
                </p>
              </div>
            </div>
            <div className="card-service flex-row-reverse">
              <div className="img">
                <img src={FundoNacional} alt="" />
              </div>
              <div className="description">
                <h4>Destinos Nacionais</h4>
                <p>
                  Os melhores destinos Nacionais a sua espera, acesse nossa
                  página de destinos, verifique as opções disponíveis e confira
                  se está disponível nos próximos pacotes
                </p>
              </div>
            </div>
            <div className="card-service">
              <div className="img">
                <img src={FundoHotel} alt="" />
              </div>
              <div className="description">
                <h4>Os Melhores Hotéis</h4>
                <p>
                  Os mais variados hotéis, prontos para acomodar você e sua
                  família. Hotéis de 3 a 5 estrelas, com serviços inclusos de
                  acordo com o pacote contratado.
                </p>
              </div>
            </div>
            <div className="card-service flex-row-reverse">
              <div className="img">
                <img src={FundoPacote} alt="" />
              </div>
              <div className="description">
                <h4>Pacotes incríveis</h4>
                <p>
                  Promoções imperdíveis que cabem no seu bolso. Selecionamos os
                  melhores destinos e as melhores instalações para proporcionar
                  a melhor viagem possível.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="about--section">
          <h2 className="home--title">SOBRE A SIMBORA</h2>
          <div className="about--container container">
            <div className="about--content">
              <div className="img">
                <Logo />
              </div>
              <div className="about--description">
                <p>
                  A SimboraViagem foi fundada no ano de 2019 pelo empresário
                  Rafael Moura. A empresa nasceu com o intuito de criar um modo
                  mais exclusivo de viajar, de modo que a empresa oferta apenas
                  pacotes de viagens incluindo nos pacotes destino, hotéis e
                  recursos inclusos de acordo com os pacotes. A Simbora é
                  idealizada sob a forte crença de que "O mundo é grande demais
                  para não conhecermos por completo"
                </p>
              </div>
            </div>
            <h2 className="home--title">POR QUE NOS ESCOLHER?</h2>
            <div className="choice--content row">
              <div className="card--choices col-sm-6 col-lg-4 col-xl-3">
                <i className="bi bi-cash-coin"></i>
                <p>Melhores Preços e Condições! Aqui seu dinheiro vale mais</p>
              </div>
              <div className="card--choices col-sm-6 col-lg-4 col-xl-3">
                <i className="bi bi-headset"></i>
                <p>
                  Atendimento de qualidade. Suporte 24h de seg a sex para te
                  auxliar!
                </p>
              </div>
              <div className="card--choices col-sm-6 col-lg-4 col-xl-3">
                <i className="bi bi-hourglass-bottom"></i>
                <p>Agilidade e praticidade!</p>
              </div>
              <div className="card--choices col-sm-6 col-lg-4 col-xl-3">
                <i className="bi bi-house-door-fill"></i>
                <p>Os melhores e mais aconxegantes hotéis a sua espera!</p>
              </div>
              <div className="card--choices col-sm-6 col-lg-4 col-xl-3">
                <i className="bi bi-cash-coin"></i>
                <p>Melhores Preços e Condições! Aqui seu dinheiro vale mais</p>
              </div>
              <div className="card--choices col-sm-6 col-lg-4 col-xl-3">
                <i className="bi bi-cash-coin"></i>
                <p>Melhores Preços e Condições! Aqui seu dinheiro vale mais</p>
              </div>
            </div>
            <h2 className="home--title">DEPOIMENTOS</h2>
            <div className="depoiments--content row">
              <div className="card--depoiments col-sm-6 col-lg-4 col-xl-3">
                <div className="img">
                  <img src={HomemImg} alt="" />
                </div>
                <div className="depoiment">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    aut esse dolorum obcaecati ipsum.
                  </p>
                  <h6>Roberto Moreira</h6>
                </div>
              </div>
              <div className="card--depoiments col-sm-6 col-lg-4 col-xl-3">
                <div className="img">
                  <img src={HomemImg} alt="" />
                </div>
                <div className="depoiment">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    aut esse dolorum obcaecati ipsum.
                  </p>
                  <h6>Roberto Moreira</h6>
                </div>
              </div>
              <div className="card--depoiments col-sm-6 col-lg-4 col-xl-3">
                <div className="img">
                  <img src={HomemImg} alt="" />
                </div>
                <div className="depoiment">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    aut esse dolorum obcaecati ipsum.
                  </p>
                  <h6>Roberto Moreira</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
