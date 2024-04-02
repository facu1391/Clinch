import React from "react";
import "../Hero.css";
import ActionButton from "../../Buttons/ActionButton/ActionButton";

const HeroHome = () => {
  return (
    <section className="hero home">
      <div className="hero-container">
        <div className="content home">
          <h1>
            <span>Contratá</span>
            <span>Personal</span>
            <span>Verificado</span>
          </h1>
          <p>
            Búsquedas permanentes abiertas, para presentar candidatos altamente
            calificados en <span>tiempo récord</span>, sin comprometer la
            calidad.
          </p>
          <ActionButton
            textButton="Contactar"
            linkTo="https://calendly.com/julibait/bait-meet"
            ariaLabel="Agendar una reunión"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
