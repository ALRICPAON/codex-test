import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Home() {
  const navigate = useNavigate();
  const [lang, setLang] = useState("fr");

  const content = {
    fr: {
      title: "Crée ton tunnel de vente en quelques clics",
      subtitle: "Gère tout en moins de 3 minutes, sans compétence technique",
      features: [
        { title: "Landing page automatique", desc: "Page de vente générée par IA." },
        { title: "Script vidéo inclus", desc: "Un texte vidéo adapté à ton produit." },
        { title: "Séquence email fournie", desc: "Emails prêts à l’emploi pour relancer tes prospects." },
        { title: "Bouton de paiement intégré", desc: "Ton tunnel est prêt à encaisser des ventes dès le lancement." }
      ],
      ctaSignup: "Créer un compte",
      ctaLogin: "Se connecter"
    },
    en: {
      title: "Create your sales funnel in just a few clicks",
      subtitle: "Launch in under 3 minutes, no technical skills needed",
      features: [
        { title: "Automatic landing page", desc: "AI-generated sales page." },
        { title: "Video script included", desc: "A video pitch tailored to your product." },
        { title: "Email sequence ready", desc: "Follow-up emails to boost conversions." },
        { title: "Integrated payment button", desc: "Start selling from day one." }
      ],
      ctaSignup: "Sign up",
      ctaLogin: "Log in"
    }
  };

  const t = content[lang];

  return (
    <div className="home">
      <div className="lang-toggle">
        <button onClick={() => setLang("fr")} className={lang === "fr" ? "active" : ""}>FR</button>
        <button onClick={() => setLang("en")} className={lang === "en" ? "active" : ""}>EN</button>
      </div>

      <img src={logo} alt="Sellyo logo" className="logo" />

      <h1>{t.title}</h1>
      <p>{t.subtitle}</p>

      <div className="features">
        {t.features.map((f, i) => (
          <div className="feature-box" key={i}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="home-buttons">
        <button onClick={() => navigate("/signup")}>{t.ctaSignup}</button>
        <button className="secondary" onClick={() => navigate("/login")}>{t.ctaLogin}</button>
      </div>
    </div>
  );
}

export default Home;
