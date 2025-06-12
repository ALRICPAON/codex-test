import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";

export default function SignUp() {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      window.location.href = "https://dashboard.sellyo.fr";
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-white relative">
      <div className="absolute top-4 right-4">
        <button
          onClick={() => i18n.changeLanguage("fr")}
          className={`px-3 py-1 text-sm rounded-l-md ${
            i18n.language === "fr" ? "bg-blue-600 text-white" : "bg-zinc-800 text-zinc-300"
          }`}
        >
          FR
        </button>
        <button
          onClick={() => i18n.changeLanguage("en")}
          className={`px-3 py-1 text-sm rounded-r-md ${
            i18n.language === "en" ? "bg-blue-600 text-white" : "bg-zinc-800 text-zinc-300"
          }`}
        >
          EN
        </button>
      </div>

      <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Sellyo Logo" className="h-12 w-auto" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-2">{t("signup.title")}</h2>
        <p className="text-sm text-zinc-400 text-center mb-6">{t("signup.subtitle")}</p>

        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            type="email"
            placeholder={t("signup.email")}
            className="w-full px-4 py-3 bg-zinc-800 rounded-md border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder={t("signup.password")}
            className="w-full px-4 py-3 bg-zinc-800 rounded-md border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition"
          >
            {t("signup.button")}
          </button>
        </form>

        <div className="text-sm text-zinc-400 text-center mt-6">
          {t("signup.alreadyAccount")}{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            {t("signup.connect")}
          </a>
        </div>
      </div>
    </div>
  );
}
