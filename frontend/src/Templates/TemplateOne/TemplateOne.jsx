import { createContext, useEffect, useReducer, useState } from "react";
import "./TemplateOne.scss";

import { Routes, Route, useNavigate } from "react-router-dom";
import TemplateIntro from "./Components/Form/TemplateIntro/TemplateIntro";
import TemplateLayout from "./Components/Layout/TemplateLayout/TemplateLayout";
import PersonalDetails from "./Components/pages/PersonalDetails/PersonalDetails";
import OptionalDetails from "./Components/pages/OptionalDetails/OptionalDetails";
import EducationalDetails from "./Components/pages/EducationalDetails/EducationalDetails";
import SkillsDetails from "./Components/pages/SkillsDetails/SkillsDetails";
import ProjectsDetails from "./Components/pages/ProjectsDetails/ProjectsDetails";
import ConfirmPage from "./Components/pages/ConfirmPage/ConfirmPage";
import { initialState } from "./State/initialState";
import { templateOneReducer } from "./State/templateOneReducer";
import { config } from "./State/config";

export const TemplateOneContext = createContext();

const TemplateOne = () => {
  const [state, dispatch] = useReducer(
    templateOneReducer,
    JSON.parse(localStorage.getItem("resumeData")) || initialState,
  );
  const navigate = useNavigate();

  useEffect(() => {
    navigate(config.paths[state.pageNumber - 1]);
    dispatch({
      type: "UPDATE_PAGE_SUBMITTED",
    });
  }, [state.pageNumber]);

  useEffect(() => {
    dispatch({
      type: "CHECK_ERROR",
      payload: { formName: config.pagesName[state.pageNumber - 1] },
    });
  }, [state[config.pagesName[state.pageNumber - 1]]]);

  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(state));
  }, [state]);

  return (
    <TemplateOneContext value={{ state, dispatch }}>
      <div className="template-one">
        <Routes>
          <Route path="/" element={<TemplateLayout />}>
            <Route index element={<TemplateIntro />} />
            <Route path="personal-details" element={<PersonalDetails />} />
            <Route path="optional-details" element={<OptionalDetails />} />
            <Route
              path="educational-details"
              element={<EducationalDetails />}
            />
            <Route path="skills-details" element={<SkillsDetails />} />
            <Route path="projects-details" element={<ProjectsDetails />} />
            <Route path="confirm" element={<ConfirmPage />} />
            <Route path="view-resume" element={<ConfirmPage />} />
          </Route>
        </Routes>
      </div>
    </TemplateOneContext>
  );
};

export default TemplateOne;
