import { useEffect, useState } from "react";
import "./Register.scss";
import RegisterPageForm from "../../Organism/RegisterPageForm/RegisterPageForm";
import { validateRegistrationForm } from "../../../utils/register/validateRegistrationForm";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    firstname: "",
    age: "",
    lastname: "",
    emailAddress: "",
    phoneNumber: "",
    password: "",
    reTypePassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [reTypePassword, setReTypePassword] = useState(false);
  const [terms, setTerms] = useState(false);
  const [errorStack, setErrorStack] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    setErrorStack(validateRegistrationForm(registerData));
  }, [registerData]);

  return (
    <div className="register-page">
      <div className="register-page__left">
        <div className="register-page__left__wrapper">
          <h1 className="register-page__tagline">Join Ruffy Resume Builder</h1>
          <p className="register-page__paragraph">
            Build a professional, recruiter-approved resume in minutes. Join
            thousands of job seekers who have landed interviews using our
            AI-powered templates and expert tips. Register now to unlock
            ATS-friendly designs and career-boosting features. Your next big
            opportunity is just a few clicks away—start today!
          </p>
          <h4>
            Already have have an account? <a href="/login">Log in</a>
          </h4>
          <RegisterPageForm
            data={registerData}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            reTypePassword={reTypePassword}
            setReTypePassword={setReTypePassword}
            terms={terms}
            setTerms={setTerms}
            setRegisterData={setRegisterData}
            errorStack={errorStack}
            setErrorStack={setErrorStack}
            isFormSubmitted={isFormSubmitted}
            setIsFormSubmitted={setIsFormSubmitted}
          />
        </div>
      </div>
      <div className="register-page__right"></div>
    </div>
  );
};

export default Register;
