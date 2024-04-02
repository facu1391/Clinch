import React from "react";
import "./experienceCard.css";
const ExperienceCard = () => {
  return (
    <div className="experience-card-container">
      <section className="experience-card">
        <h4>
          Tu experiencia en <span>CLINCH</span> es importante
        </h4>
        <div className="card-list-container">
          <div className="card-list">
            <div className="card">
              <div className="info">
                <h5>"Confiable y sin complicaciones"</h5>
                <h6>
                  Gerente administrativa de <span>Grupo Alas</span>
                </h6>
                <p>
                  Llevo usando esta herramienta varios años y ha sido
                  fundamental para formar nuestro equípo de profesionales.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="info">
                <h5>"La manera mas efectiva para encontrar talentos"</h5>
                <h6>
                  Gerente de <span>Farmacity</span>
                </h6>

                <p>
                  Me impresiona la calidad de los candidatos que hemos
                  encontrado a través de esta plataforma. Cada uno de ellos ha
                  demostrado ser un activo valioso para nuestro equipo.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="info">
                <h5>"El lugar indicado para buscar personal"</h5>
                <h6>Directora de Recursos Humanos en Billabong</h6>

                <p>
                  Desde que incorporamos esta plataforma, hemos agilizado
                  significativamente nuestro proceso de contratación y hemos
                  encontrado talento excepcional en cada contratación.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="info">
                <h5>"Transparente y eficiente"</h5>
                <h6>Jefe del departamento de personal en Cero es Tres</h6>
                <p>
                  Destaco la transparencia en todo el proceso de reclutamiento.
                  Desde la búsqueda hasta la contratación final, todo se realiza
                  de manera clara y eficiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceCard;
