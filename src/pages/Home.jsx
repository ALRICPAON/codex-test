// Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../assets/logo.png";
import landingIcon from "../assets/landing.png";
import videoIcon from "../assets/video.png";
import emailIcon from "../assets/email.png";
import paymentIcon from "../assets/payment.png";

function Home() {
  const [lang, setLang] = useState("fr");
  const navigate = useNavigate();

  const content = {
    fr: {
      title: "Crée ton tunnel de vente en quelques clics",
      subtitle: "Gère tout en moins de 3 minutes, sans compétence technique",
      features: [
        { img: landingIcon, title: "Landing page automatique", desc: "Page de vente générée par IA." },
        { img: videoIcon, title: "Script vidéo inclus", desc: "Un texte vidéo adapté à ton produit." },
        { img: emailIcon, title: "Séquence email fournie", desc: "Emails prêts à l'emploi pour relancer tes prospects." },
        { img: paymentIcon, title: "Bouton de paiement intégré", desc: "Ton tunnel est prêt à encaisser des ventes dès le lancement." },
      ],
      cta1: "Créer un compte",
      cta2: "Se connecter"
    },
    en: {
      title: "Create your sales funnel in a few clicks",
      subtitle: "Manage everything in under 3 minutes, no tech skills needed",
      features: [
        { img: landingIcon, title: "Auto-generated landing page", desc: "Sales page created by AI." },
        { img: videoIcon, title: "Video script included", desc: "Tailored video script for your product." },
        { img: emailIcon, title: "Email sequence provided", desc: "Ready-to-use emails to follow up leads." },
        { img: paymentIcon, title: "Integrated payment button", desc: "Your funnel is ready to collect payments." },
      ],
      cta1: "Create account",
      cta2: "Login"
    }
  };

  const t = content[lang];

  return (
    <div className="home">
      <img src={logo} alt="Sellyo" className="home-logo" />
      <div className="lang-switch">
        <button onClick={() => setLang("fr")} className={lang === "fr" ? "active" : ""}>FR</button>
        <button onClick={() => setLang("en")} className={lang === "en" ? "active" : ""}>EN</button>
      </div>
      <h1>{t.title}</h1>
      <p className="subtitle">{t.subtitle}</p>
      <div className="features">
        {t.features.map((feat, i) => (
          <div className="feature-box" key={i}>
            <img src={feat.img} alt="" className="feature-icon" />
            <h3>{feat.title}</h3>
            <p>{feat.desc}</p>
          </div>
        ))}
      </div>
      <div className="home-buttons">
        <button onClick={() => navigate("/signup")}>{t.cta1}</button>
        <button className="secondary" onClick={() => navigate("/login")}>{t.cta2}</button>
      </div>
    </div>
  );
}

export default Home;
