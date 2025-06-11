import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>{t("welcome")}</h1>
      <div>
        <button onClick={() => i18n.changeLanguage("fr")}>FR</button>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link to="/signup">
          <button>{t("signup")}</button>
        </Link>
        <Link to="/login" style={{ marginLeft: "10px" }}>
          <button>{t("login")}</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
