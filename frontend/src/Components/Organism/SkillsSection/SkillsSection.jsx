import React from "react";
import "./SkillsSection.scss";

const SkillsSection = ({ skillsDetails }) => {
  return (
    <>
      {skillsDetails.map((skill) => {
        return (
          <div className="skill" key={skill._id}>
            <div className="skill__info">
              <div className="skill__circle"></div>
              <div className="skill__field">{skill.skillFieldName} :</div>
              <div className="skill__name">
                {skill.skillsStack.map((skills) => {
                  return <span key={skills._id}>{skills.skillName},</span>;
                })}
              </div>
            </div>
            <div className="skill__summary">{skill.skillSummary}</div>
          </div>
        );
      })}
    </>
  );
};

export default SkillsSection;
