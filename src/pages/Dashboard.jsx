import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Bienvenue dans votre dashboard</h2>
      <button onClick={() => auth.signOut()}>Se déconnecter</button>
    </div>
  );
};

export default Dashboard;
