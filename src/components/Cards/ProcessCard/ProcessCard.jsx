import React from "react";
import "./processCard.css";
import useIntersection from "../../../CustomHooks/useIntersection";
const ProcessCard = () => {
  const [refElement, isIntersecting] = useIntersection({ threshold: 0.1 });
  return (
    <section className="process-card-container">
      <div className="process-card">
        <h3>
          Formar parte de <span>CLINCH</span> es <span>muy fácil</span>
        </h3>
        <div
          ref={refElement}
          style={{
            animation: isIntersecting ? "fade-in 2s ease" : "",
            opacity: isIntersecting ? "1" : "0",
          }}
          className="cards"
        >
          <div>
            <h4>
              Completa tus datos, <br />
              sube tu CV
            </h4>
            <p>
              Déjanos tu información y el puesto donde te gustaría trabajar.
            </p>
          </div>
          <hr />
          <div>
            <h4>
              Agenda una <br />
              llamada
            </h4>
            <p>
              Concertaremos una llamada para conocerte mejor y completar tu
              perfil profesional.
            </p>
          </div>
          <hr />
          <div>
            <h4>
              Ahora formas parte de <br /> <span>CLINCH</span>
            </h4>
            <p>
              Te informaremos cuando hayan oportunidades acordes a tus
              expectativas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessCard;
