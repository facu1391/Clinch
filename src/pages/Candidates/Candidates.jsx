import React from "react";

import "./candidates.css";

import Layout from "../../components/Layout/Layout";
import HeroCandidates from "../../components/Heros/HeroCandidates/HeroCandidates";
import ApplicationCard from "../../components/Cards/ApplicationCard/ApplicationCard";
import ProcessCard from "../../components/Cards/ProcessCard/ProcessCard";
import CategoriesCard from "../../components/Cards/CategoriesCard/CategoriesCard";
import WhatsappButton from "../../components/Buttons/WhatsappButton/WhatsappButton";

const Candidatos = () => {
  return (
    <Layout>
      <HeroCandidates />
      <ApplicationCard />
      <div className="mobile-position">
        <ProcessCard />
        <CategoriesCard />
      </div>
    </Layout>
  );
};

export default Candidatos;
