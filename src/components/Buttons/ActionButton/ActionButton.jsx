import React from "react";
import { Link } from "react-router-dom";
import "./actionButton.css";
import Arrow from "../../Icons/Arrow";
const ActionButton = ({ textButton, linkTo,ariaLabel}) => {
  return (
    <div className="apply-contact-button">
      <Link to={linkTo} target="_blank" aria-label={ariaLabel}>
        <button>
          {textButton}
          <Arrow cssClass="arrow"/>
        </button>
      </Link>
    </div>
  );
};

export default ActionButton;
