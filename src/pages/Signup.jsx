import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import logo from "../assets/logo.png";

export default function SignUp() {
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
    <div className="min-h-screen bg-black flex items-center justify-center px-4 text-white">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Sellyo Logo" className="h-16 w-auto mb-4" />
          <h2 className="text-2xl font-bold">Créer un compte</h2>
          <p className="text-sm text-zinc-400">Rejoins Sellyo en quelques secondes</p>
        </div>
        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-zinc-800 rounded-md border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full px-4 py-3 bg-zinc-800 rounded-md border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition"
          >
            S’inscrire
          </button>
        </form>
        <div className="text-sm text-zinc-400 mt-6 text-center">
          Déjà un compte ?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Se connecter
          </a>
        </div>
      </div>
    </div>
  );
}
