import React from "react";
import "./EducationSection.scss";

const EducationSection = ({ educationalDetails }) => {
  return (
    <>
      {educationalDetails.map((education) => {
        return (
          <div className="education" key={education._id}>
            <div className="education__header">
              <div className="degree-name">{education.degreeName}</div>
              <div className="timeline">
                <span>{education.startYear}</span>-
                <span>{education.endYear}</span>
              </div>
            </div>
            <div className="education__info">
              <div className="college-name">{education.collegeName}</div>
              <div className="college-cgpa">CGPA : {education.CGPA}</div>
            </div>
            <p className="education__summary">{education.summary}</p>
          </div>
        );
      })}
    </>
  );
};

export default EducationSection;
