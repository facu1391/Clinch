import React, { useState, useEffect } from "react";
import "./carouselHome.css";
import slidesHome from "./slidesHome";
const CarouselHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const widthImg = 100 / slidesHome.length;

  useEffect(() => {
    const interval = setInterval(() => {
      moveToRight();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const moveToRight = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesHome.length);
  };

  const moveToLeft = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slidesHome.length) % slidesHome.length
    );
  };
  return (
    <div className="container-carousel-home">
      <div className="slide-bars">
        {slidesHome.map((_, index) => (
          <span
            key={index + 5}
            className={index === currentSlide ? "active" : ""}
          ></span>
        ))}
      </div>
      <div
        className="carousel-home"
        style={{
          transform: `translate(-${currentSlide * widthImg}%)`,
        }}
      >
        {slidesHome.map((slide, index) => (
          <section key={index} className="slider-section-home">
            <div className="slide-home">
              <img
                src={slide.icon}
                alt={slide.altIcon}
                loading="lazy"
                title="Designed by Freepik"
              />
              <h4>{slide.title}</h4>
              <p>{slide.description}</p>
            </div>

            <img
              src={slide.background}
              alt={slide.altBackground}
              loading="lazy"
              className="img-slide"
            />
          </section>
        ))}
      </div>
      <div className="btn-left" onClick={moveToLeft}>
        &#10094;
      </div>
      <div className="btn-right" onClick={moveToRight}>
        &#10095;
      </div>
    </div>
  );
};

export default CarouselHome;
