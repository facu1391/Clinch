import React from "react";
import "../Hero.css";
import ActionButton from "../../Buttons/ActionButton/ActionButton";
const HeroCandidates = () => {
  return (
    <section className="hero candidates">
      <div className="hero-container">
        <div className="content candidates">
          <h1>
            <span>Trabajá</span>
            <span>Con</span>
            <span>Nosotros</span>
          </h1>
          <p>
            Aplica a cientos de trabajos con unos pocos clics. Únete a nuestra{" "}
            <span>exclusiva comunidad</span> de talentos y te informaremos sobre
            nuevas oportunidades.
          </p>
          <ActionButton
            textButton="Aplicar"
            linkTo="https://airtable.com/appk4D8VR2qbX7YkJ/shrjCoz9JbpztBlM7"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroCandidates;
