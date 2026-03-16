import React from "react";
import "./ProjectsSection.scss";
import { generateId } from "../../../Templates/TemplateOne/Utils/generateId";

const ProjectsSection = ({ projectsDetails }) => {
  return (
    <>
      {projectsDetails.map((project) => {
        return (
          <div className="project" key={project._id}>
            <div className="project__info">
              <div className="project__circle"></div>
              <div className="project__field">{project.projectName} :</div>
              <div className="project__name">
                {project.techStack.map((stack, index) => {
                  return <span key={generateId()}>{stack},</span>;
                })}
              </div>
            </div>
            <div className="project__timeline">{project.projectRole}</div>
            <div className="project__timeline">
              {project.projectStartYear}-{project.projectEndYear}
              {"             "}
              <span>({project.projectDuration} Months)</span>
            </div>
            <div className="project__summary">{project.projectSummary}</div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectsSection;
