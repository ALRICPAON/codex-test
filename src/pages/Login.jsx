import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import logo from "../assets/logo.png"; // 🔄 ton logo depuis assets

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "https://dashboard.sellyo.fr";
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="max-w-md w-full space-y-8 p-8 rounded-2xl bg-zinc-900 shadow-2xl">
        <div className="text-center">
          <img src={logo} alt="Sellyo Logo" className="mx-auto h-12 mb-4" />
          <h2 className="text-2xl font-bold">Se connecter</h2>
          <p className="text-sm text-zinc-400">Accède à ton espace personnel</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
          >
            Se connecter
          </button>
        </form>
        <div className="text-sm text-center text-zinc-400 pt-4">
          Pas encore de compte ?{" "}
          <a
            href="/signup"
            className="text-blue-500 hover:underline"
          >
            Créer un compte
          </a>
        </div>
      </div>
    </div>
  );
}
