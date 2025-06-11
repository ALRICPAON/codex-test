import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Tu peux créer ce fichier pour un peu plus de style

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Sellyo</h1>
      <p>
        Crée ton tunnel de vente complet <strong>en moins de 3 minutes</strong>,
        sans aucune compétence technique.
      </p>
      <div className="home-buttons">
        <button onClick={() => navigate("/signup")}>Créer un compte</button>
        <button onClick={() => navigate("/login")} className="secondary">
          Se connecter
        </button>
      </div>
    </div>
  );
};

export default Home;
