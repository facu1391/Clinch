import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import "./navbar.css";
import BurgerButton from "./BurgerButton";
import Clinch from "../../Icons/Clinch/Clinch";

const Navbar = () => {
  const { pathname } = useLocation();

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavExpanded = () => {
    setIsNavExpanded(!isNavExpanded);
  };
  useEffect(() => {
    const titleMap = {
      '/': 'Empresas',
      '/candidatos': 'Candidatos',
    };
    document.title = titleMap[pathname] || 'Clinch';
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="container-logo">
          <Link to="/" aria-label="Volver a la página principal">
            <Clinch width="120px" fill="#356ed1" />
          </Link>
        </div>
        <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
          <ul className="nav-links">
            <li>
              <NavLink to="/">Empresas</NavLink>
            </li>
            <li>
              <NavLink to="/candidatos">Candidatos</NavLink>
            </li>
          </ul>
          <div className="nav-buttons">
            <Link
              to="https://calendly.com/julibait/bait-meet?month=2024-02"
              target="_blank"
            >
              <button className="btn-contact">Contactanos</button>
            </Link>
          </div>
        </div>
        <div className="burger-button">
          <BurgerButton
            isNavExpanded={isNavExpanded}
            handleNavExpanded={handleNavExpanded}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
