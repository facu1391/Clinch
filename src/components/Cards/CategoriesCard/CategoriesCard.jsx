import React from "react";

import "./categoriesCard.css";

import Design from "../../Icons/Design";
import Box from "../../Icons/Box";
import DataDisplay from "../../Icons/DataDisplay";
import Bank from "../../Icons/Bank";

import useIntersection from "../../../CustomHooks/useIntersection";
const CategoriesCard = () => {
  const [refElement, isIntersecting] = useIntersection({ threshold: 0.1 });
  return (
    <section className="categories-card-container">
      <div className="categories-card">
        <h3>
          Descubre <span>oportunidades laborales</span> en estas y otras áreas:
        </h3>
        <div
          ref={refElement}
          style={{
            animation: isIntersecting ? "fade-in 2s ease" : "",
            opacity: isIntersecting ? "1" : "0",
          }}
          className="categories"
        >
          <div>
            <Box fill="black" className="icon-card" />
            <h4>
              Comercial <br />& Logística
            </h4>
          </div>
          <div>
            <Design fill="black" className="icon-card" />
            <h4>
              {" "}
              Marketing <br />& Diseño
            </h4>
          </div>
          <div>
            <DataDisplay fill="none" stroke="black" className="icon-card" />
            <h4>
              {" "}
              Tecnología <br />& Datos
            </h4>
          </div>
          <div>
            <Bank fill="black" className="icon-card" />
            <h4>
              {" "}
              Contabilidad <br />& Finanzas
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesCard;
