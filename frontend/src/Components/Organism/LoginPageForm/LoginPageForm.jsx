import React, { useContext } from "react";
import "./LoginPageForm.scss";
import FormRow from "../../Molecules/FormRow/FormRow";
import FormInput from "../../Molecules/FormInput/FormInput";
import Button from "../../Molecules/Button/Button";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { varifyLogin } from "../../../utils/login/varifyLogin";
import { handleLoginFormChange } from "../../../utils/login/handleLoginFormChange";
import { checkErrorStack } from "../../../utils/helpers/checkErrorStack";
import { handleLogin } from "../../../utils/login/handleLogin";
import { AppContext } from "../../../App";

const LoginPageForm = ({
  data,
  showPassward,
  setShowPassword,
  setLoginData,
  errorStack,
  setErrorStack,
  isFormSubmitted,
  setIsFormSubmitted,
}) => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);
  return (
    <form className="login-page__form" autoComplete="off">
      <FormRow>
        <FormInput
          text={"Username"}
          htmlFor={"username"}
          type={"text"}
          onChange={(e) => {
            handleLoginFormChange(e, setLoginData);
          }}
          value={data.username}
          name={"username"}
          warn={
            isFormSubmitted ? checkErrorStack(errorStack, "username") : false
          }
        />
      </FormRow>

      <FormRow>
        <FormInput
          text={"Password"}
          htmlFor={"username"}
          type={showPassward ? "text" : "password"}
          onChange={(e) => {
            handleLoginFormChange(e, setLoginData);
          }}
          value={data.password}
          name={"password"}
          emoji={showPassward ? <FaEyeSlash /> : <FaEye />}
          emojiOnClick={() => {
            setShowPassword(!showPassward);
          }}
          warn={
            isFormSubmitted ? checkErrorStack(errorStack, "password") : false
          }
        />
      </FormRow>
      <FormRow>
        <div className="extra__info">
          <input type="checkbox" name="remember" id="remember-me" />
          <label htmlFor="remember-me">Remember Me</label>
        </div>
        <h2>
          <a href="/forgot-password">Forgot Password</a>
        </h2>
      </FormRow>

      <Button
        text={"Log in"}
        onClick={async () => {
          setIsFormSubmitted(true);
          if (errorStack.length <= 0) {
            const response = await handleLogin(data);
            if (response.errors.length > 0) {
              setErrorStack(response.errors);
              return;
            }
            

            if (response.success && response.data) {
              dispatch({
                type: "SET_AUTH_STATUS",
                payload: {
                  status: true,
                  info: response.data,
                },
              });
              navigate("/dashboard");
            }
          }
        }}
      />
    </form>
  );
};

export default LoginPageForm;
