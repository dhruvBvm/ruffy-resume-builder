import React, { useContext } from "react";
import "./Navbar.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "../../Molecules/Button/Button";


const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <div className="nav__logo">
        <h2
          onClick={() => {
            navigate("/");
          }}
        >
          Ruffy
        </h2>
      </div>
      <div className="nav__links">
        <Button
          onClick={() => {
            navigate("/template-one", {
              state: {
                formData: location.state?.formData
                  ? { ...location.state.formData }
                  : null,
              },
            });
          }}
        >
          Build Your Template
        </Button>
        <Button
          onClick={() => {
            navigate("/templates");
          }}
        >
          See all Templates
        </Button>
        {1 === 1   ? (
          <>
            <Button
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
            <Button
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Dashboard
            </Button>
            <Button
              onClick={() => {
                navigate("/logout");
              }}
            >
              Logout
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
