import React, { useEffect } from "react";
import "./clientList.css";
const ClientList = ({ clients }) => {
  const clientsList = [...clients, ...clients];
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--client-length",
      clients.length
    );
  }, [clients.length]);
  return (
    <div className="slider-client">
      <div className="slide-track">
        {clientsList.map((client, index) => (
          <div key={index} className="slide-client">
            <img src={client} loading="lazy" width="250px" height="auto" alt="Empresa que confía en Clinch"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientList;
