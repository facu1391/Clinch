import React from "react";
import { Link } from "react-router-dom";
import "./whatsappButton.css";
import Whatsapp from "../../Icons/SocialMedia/Whatsapp";
const WhatsappButton = () => {
  return (
    <div className="floating-button">
      <Link 
      to="https://wa.me/+972585910854" 
      aria-label="Contactar a través de Whatsapp"
      target="_blank">
        <Whatsapp className="whatsapp"/>
      </Link>
    </div>
  )
}

export default WhatsappButton
