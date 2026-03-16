import React, { useCallback, useContext, useEffect } from "react";

import "./Logout.scss";
import Button from "../../Molecules/Button/Button";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../../utils/logout/logoutUser";
import { AppContext } from "../../../App";

const Logout = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  console.log(state.isAuthenticated);

  const handleLogout = useCallback(async () => {
    if (state.isAuthenticated) {
      const data = await logoutUser();
      if (data.statusCode === 200 || data.statusCode === 401) {
        dispatch({
          type: "SET_AUTH_STATUS",
          payload: false,
        });
        navigate("/login");
      }
      return;
    }
    dispatch({
      type: "SET_AUTH_STATUS",
      payload: false,
    });
    navigate("/login");
    window.location.reload();
  }, []);

  const handleRedirect = useCallback(() => {
    navigate("/dashboard");
  }, []);

  useEffect(() => {
    if (!state.isAuthenticated) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="logout">
      <h1>Are you sure you want to logout?</h1>
      <div className="logout__actions">
        <Button onClick={handleLogout}>Yes, I want to Logout</Button>
        <Button onClick={handleRedirect}>No, Take me to the Dashboard</Button>
      </div>
    </div>
  );
};

export default Logout;
