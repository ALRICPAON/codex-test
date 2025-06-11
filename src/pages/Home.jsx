import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Le logo que tu as validé

function Home() {
  const navigate = useNavigate();
  const [lang, setLang] = React.useState("fr");

  const content = {
    fr: {
      title: "Crée ton tunnel de vente en quelques clics",
      subtitle: "Gère tout en moins de 3 minutes, sans compétence technique.",
      features: [
        { title: "Landing page automatique", desc: "Page de vente générée par IA" },
        { title: "Script vidéo inclus", desc: "Un texte vidéo adapté à ton produit" },
        { title: "Paiement intégré", desc: "Connecte Stripe et commence à vendre" },
        { title: "Statistiques & relances", desc: "Visualise les leads et réactive-les" },
      ],
      create: "Créer un compte",
      login: "Se connecter",
    },
    en: {
      title: "Create your sales funnel in just a few clicks",
      subtitle: "Manage everything in under 3 minutes, no tech skills required.",
      features: [
        { title: "Auto-generated landing page", desc: "AI-crafted for your offer" },
        { title: "Video script included", desc: "Custom-written video sales text" },
        { title: "Integrated payments", desc: "Connect Stripe and start selling" },
        { title: "Stats & follow-up", desc: "Track leads and re-engage them" },
      ],
      create: "Create an account",
      login: "Login",
    },
  };

  const t = content[lang];

  return (
    <div className="home-container">
      <header>
        <img src={logo} alt="Sellyo logo" className="logo" />
        <button className="lang-switch" onClick={() => setLang(lang === "fr" ? "en" : "fr")}>{lang === "fr" ? "EN" : "FR"}</button>
      </header>
      <main>
        <h1>{t.title}</h1>
        <p className="subtitle">{t.subtitle}</p>
        <div className="features">
          {t.features.map((f, index) => (
            <div key={index} className="feature-card">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="cta-buttons">
          <button onClick={() => navigate("/signup")}>{t.create}</button>
          <button onClick={() => navigate("/login")} className="secondary">{t.login}</button>
        </div>
      </main>
    </div>
  );
}

export default Home;
