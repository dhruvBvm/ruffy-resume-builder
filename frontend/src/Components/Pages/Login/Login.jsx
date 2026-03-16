import React, { useCallback, useContext, useEffect, useState } from "react";
import "./Login.scss";
import LoginPageForm from "../../Organism/LoginPageForm/LoginPageForm";
import { validateLoginForm } from "../../../utils/login/validateLoginForm";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../App";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [showPassward, setShowPasword] = useState(false);
  const [errorStack, setErrorStack] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const { state } = useContext(AppContext);

  useEffect(() => {
    setErrorStack(validateLoginForm(loginData));
  }, [loginData]);

  useEffect(() => {
    if (state.isAuthenticated) {
      navigate("/dashboard");
    }
  }, [state.isAuthenticated]);

  return (
    <>
      {!state.isAuthenticated ? (
        <div className="login-page">
          <div className="login-page__left"></div>
          <div className="login-page__right">
            <div className="login-page__right__wrapper">
              <h1 className="login-page__tagline">
                Login to Ruffy Resume Builder
              </h1>
              <p className="login-page__paragraph">
                "Build your career with confidence using our encrypted,
                bank-grade secure platform. We prioritize your data privacy,
                offering a seamless, user-friendly experience to create
                professional, job-winning resumes safely and effortlessly
                today."
              </p>
              <h4>
                Don't have have an account? <a href="/register">Sign up</a>
              </h4>
              <LoginPageForm
                data={loginData}
                showPassward={showPassward}
                setShowPassword={setShowPasword}
                setLoginData={setLoginData}
                errorStack={errorStack}
                setErrorStack={setErrorStack}
                isFormSubmitted={isFormSubmitted}
                setIsFormSubmitted={setIsFormSubmitted}
              />
            </div>
          </div>
        </div>
      ) : (
        "hello"
      )}
    </>
  );
};

export default Login;
