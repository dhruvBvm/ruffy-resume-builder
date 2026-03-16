import React, { useCallback, useEffect, useState } from "react";
import "./RegisterPageForm.scss";

import FormRow from "./../../Molecules/FormRow/FormRow";
import FormInput from "./../../Molecules/FormInput/FormInput";
import Button from "./../../Molecules/Button/Button";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { checkErrorStack } from "../../../utils/helpers/checkErrorStack";
import { handleRegisterFormChange } from "../../../utils/register/handleRegisterFormChange";
import { handleRegister } from "../../../utils/register/handleRegister";

const RegisterPageForm = ({
  data,
  showPassword,
  setShowPassword,
  reTypePassword,
  setReTypePassword,
  terms,
  setTerms,
  setRegisterData,
  errorStack,
  setErrorStack,
  isFormSubmitted,
  setIsFormSubmitted,
}) => {
  const navigate = useNavigate();

  return (
    <form className="register-page__form" autoComplete="off">
      <FormRow>
        <FormInput
          text={"Username"}
          htmlFor={"username"}
          type={"text"}
          onChange={(e) => {
            handleRegisterFormChange(e, setRegisterData);
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
          text={"Email Address"}
          htmlFor={"emailAddress"}
          type={"text"}
          onChange={(e) => {
            handleRegisterFormChange(e, setRegisterData);
          }}
          value={data.emailAddress}
          name={"emailAddress"}
          warn={
            isFormSubmitted
              ? checkErrorStack(errorStack, "emailAddress")
              : false
          }
        />
      </FormRow>

      <FormRow>
        <FormInput
          text={"Firstname"}
          htmlFor={"firstname"}
          type={"text"}
          onChange={(e) => {
            handleRegisterFormChange(e, setRegisterData);
          }}
          value={data.firstname}
          name={"firstname"}
          warn={
            isFormSubmitted ? checkErrorStack(errorStack, "firstname") : false
          }
        />
        <FormInput
          text={"Lastname"}
          htmlFor={"lastname"}
          type={"text"}
          onChange={(e) => {
            handleRegisterFormChange(e, setRegisterData);
          }}
          value={data.lastname}
          name={"lastname"}
          warn={
            isFormSubmitted ? checkErrorStack(errorStack, "lastname") : false
          }
        />
      </FormRow>
      <FormRow>
        <FormInput
          text={"Password"}
          htmlFor={"password"}
          type={showPassword ? "text" : "password"}
          onChange={(e) => {
            handleRegisterFormChange(e, setRegisterData);
          }}
          value={data.password}
          name={"password"}
          emoji={showPassword ? <FaEyeSlash /> : <FaEye />}
          emojiOnClick={() => {
            setShowPassword(!showPassword);
          }}
          warn={
            isFormSubmitted ? checkErrorStack(errorStack, "password") : false
          }
        />
        <FormInput
          text={"Retype Password"}
          htmlFor={"reTypePassword"}
          type={reTypePassword ? "text" : "password"}
          onChange={(e) => {
            handleRegisterFormChange(e, setRegisterData);
          }}
          value={data.reTypePassword}
          name={"reTypePassword"}
          emoji={reTypePassword ? <FaEyeSlash /> : <FaEye />}
          emojiOnClick={() => {
            setReTypePassword(!reTypePassword);
          }}
          warn={
            isFormSubmitted
              ? checkErrorStack(errorStack, "reTypePassword")
              : false
          }
        />
      </FormRow>
      <FormRow>
        <FormInput
          text={"Age"}
          htmlFor={"age"}
          type={"number"}
          onChange={(e) => {
            handleRegisterFormChange(e, setRegisterData);
          }}
          value={data.age}
          name={"age"}
          warn={isFormSubmitted ? checkErrorStack(errorStack, "age") : false}
        />
        <FormInput
          text={"Phone Number"}
          htmlFor={"phoneNumber"}
          type={"number"}
          onChange={(e) => {
            handleRegisterFormChange(e, setRegisterData);
          }}
          value={data.phoneNumber}
          name={"phoneNumber"}
          warn={
            isFormSubmitted ? checkErrorStack(errorStack, "phoneNumber") : false
          }
        />
      </FormRow>
      <FormRow>
        <div className="extra__info">
          <input
            type="checkbox"
            name="termsAndConditions"
            id="termsAndConditions"
            value={"terms-and-conditions"}
            checked={terms}
            onChange={() => {
              setTerms(!terms);
            }}
          />
          <label htmlFor="termsAndConditions">
            Agree to our{" "}
            <a href="/terms-and-conditions">Terms and Conditions</a>
          </label>
        </div>
      </FormRow>
      <Button
        text={"Create Account"}
        onClick={async () => {
          setIsFormSubmitted(true);
          if (errorStack.length === 0) {
            const response = await handleRegister(data);
            if (response.data) {
              navigate("/login");
            } else if (response.errors) {
              // errorStack(response.errors);
            }
          } else {
            // handle the error on Front end Side
            return;
          }
        }}
      />
    </form>
  );
};

export default RegisterPageForm;
