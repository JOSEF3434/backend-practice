import React from "react";
import { useNavigate } from "react-router-dom";
import Navebar from "../components/navebar";

const Hompage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navebar />

      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h1>Welcome to Admin Panel</h1>

        <button
          onClick={() => navigate("/dashboard")}
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Hompage;
