import React from "react";

import { Link } from "react-router-dom";
import Clinch from "../../Icons/Clinch/Clinch";
import Linkedin from "../../Icons/SocialMedia/Linkedin";
import Facebook from "../../Icons/SocialMedia/Facebook";
import Instagram from "../../Icons/SocialMedia/Instagram";

import "./footer.css";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer>
      <div className="top-footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#124e6e"
            d="M0,160L40,154.7C80,149,160,139,240,117.3C320,96,400,64,480,85.3C560,107,640,181,720,186.7C800,192,880,128,960,128C1040,128,1120,192,1200,186.7C1280,181,1360,107,1400,69.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="bottom-footer-container">
        <div className="bottom-footer">
          <div className="logo">
            <Link to="/" aria-label="Volver a la página principal">
              <Clinch fill="white" width="clamp(9.375rem, 8.75rem + 3.125vw, 12.5rem)" id="clinch-logo" />
            </Link>
          </div>
          <ul>
            <li>
              <Link
                to="https://www.linkedin.com/company/hireclinch/"
                aria-label="Ir al linkedin de Clinch"
                target="_blank"
              >
                <Linkedin className="linkedin" />
              </Link>
            </li>
            <li>
              <Link 
              to="https://www.instagram.com/clinch.hr/"
              aria-label="Ir al instagram de Clinch" 
              target="_blank">
                <Instagram className="instagram" />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.facebook.com/profile.php?id=100090246983237"
                aria-label="Ir al facebook de Clinch"
                target="_blank"
              >
                <Facebook className="facebook" />
              </Link>
            </li>
          </ul>
        </div>
        <small className="copyright">
          2014 - {currentYear} Todos los derechos reservados. Hire Clinch
        </small>
      </div>
    </footer>
  );
};

export default Footer;
