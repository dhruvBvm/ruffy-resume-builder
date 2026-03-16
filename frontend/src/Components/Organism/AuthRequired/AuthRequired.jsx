import React from "react";
import "./AuthRequired.scss";
import Button from "../../Molecules/Button/Button";
import { useNavigate } from "react-router-dom";

const AuthRequired = () => {
  const navigate = useNavigate();
  return (
    <div className="auth-required">
      <h1>You need to Login first to Use Users Dashboard</h1>
      <div className="auth-required__actions">
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Go to The HomePage{" "}
        </Button>
        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
          Log in{" "}
        </Button>
        <Button
          onClick={() => {
            navigate("/register");
          }}
        >
          Register{" "}
        </Button>
      </div>
    </div>
  );
};

export default AuthRequired;
