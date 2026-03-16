import React, { useContext } from "react";
import "./Navbar.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "../../Molecules/Button/Button";
import { AppContext } from "../../../App";

const Navbar = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);
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
        {/* <Button
          onClick={() => {
            navigate("/template-one");
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
        </Button> */}
        {state.isAuthenticated ? (
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
        ) : (
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
