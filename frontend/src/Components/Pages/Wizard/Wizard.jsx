import React, { createContext, useState } from "react";
import "./Wizard.scss";
import WizardHeader from "../../Organism/WizardHeader/WizardHeader";
import WizardFooter from "../../Organism/WizardFooter/WizardFooter";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { editResume, postResume } from "../../../Hooks/fetchUsers";

export const ResumeData = createContext();

const paths = [
  "/wizard",
  "/wizard/optional-details",
  "/wizard/educational-details",
  "/wizard/profile-details",
];

const Wizard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let data = location.state?.formData ? { ...location.state.formData } : {};
  const [resumeData, setResumeData] = useState(data);
  let edit = location.state?.edit;
  const isLastStep = location.pathname === paths[paths.length - 1];
  const isFirstStep = location.pathname === paths[0];

  // HandleNext
  const handleNext = async () => {
    if (isLastStep) {
      if (edit?.isEdit) {
        const response = await editResume(resumeData, edit.editId);
      } else {
        const response = await postResume(resumeData);
      }

      navigate("/resumes");
      return;
    }
    navigate(paths[paths.indexOf(location.pathname) + 1], {
      state: { edit: edit },
    });
  };

  // handle Prev....
  const handlePrev = () => {
    if (isFirstStep) {
      navigate("/", { state: { edit: edit } });
      return;
    }
    navigate(paths[paths.indexOf(location.pathname) - 1], {
      state: { edit: edit },
    });
  };

  // handleChange
  const handleChange = (e) => {
    const { checked, name, value } = e.target;
    setResumeData((prev) => {
      if (e.target.type === "checkbox") {
        const array = checked
          ? prev[name]
            ? [...prev[name], value]
            : [value]
          : prev[name].filter((item) => item !== value);
        const nextData = {
          ...prev,
          [e.target.name]: array,
        };
        return nextData;
      } else {
        const nextData = {
          ...prev,
          [e.target.name]: e.target.value,
        };
        return nextData;
      }
    });
  };

  return (
    <div className="wizard">
      <ResumeData.Provider
        value={{
          data: resumeData,
          setData: setResumeData,
          handleChange,
        }}
      >
        <WizardHeader />
        <Outlet />
        <WizardFooter
          handleNext={handleNext}
          handlePrev={handlePrev}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
        />
      </ResumeData.Provider>
    </div>
  );
};

export default Wizard;
