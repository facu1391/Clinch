import React from "react";
import "./homeCard.css";
import useIntersection from "../../../CustomHooks/useIntersection";
import ActionButton from "../../Buttons/ActionButton/ActionButton";
import CarouselHome from "../../Carousels/CarouselHome/CarouselHome";
const HomeCard = () => {
  const [refElement, isIntersecting] = useIntersection({ threshold: 0.2 });
  const isMobile = window.matchMedia("(max-width: 991px)").matches;
  const animationStyle =
    isIntersecting && !isMobile ? "slide-in-down-text 900ms ease" : "";
  return (
    <section className="home-card-container">
      <div className="home-card">
        <div className="text-content">
          <h3
            ref={refElement}
            style={{
              animation: animationStyle,
            }}
          >
            Bienvenidos a <span>CLINCH</span>
          </h3>
          <p>
            Somos expertos en reclutamiento de alta exigencia. Empresas del
            rubro textil, real estate, ciberseguridad, consumo masivo y retail
            de primera línea internacional <span>confían en CLINCH</span> para
            formar sus equipos diariamente. 
          </p>
          <ActionButton
            textButton="Contactanos"
            linkTo="https://calendly.com/julibait/bait-meet"
          />
        </div>
        <div className="slider-content">
          <CarouselHome />
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
