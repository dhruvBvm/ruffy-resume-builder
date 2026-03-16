import React, { useRef, useState } from "react";
import "./ViewResume.scss";
import { useLocation, useNavigate } from "react-router-dom";
import EducationSection from "../../Organism/EducationSection/EducationSection";
import SkillsSection from "../../Organism/SkillsSection/SkillsSection";
import ProjectsSection from "../../Organism/ProjectsSection/ProjectsSection";
import Button from "../../Molecules/Button/Button";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ViewResume = () => {
  const location = useLocation();
  const resumeRef = useRef();
  const [data, setData] = useState(location.state || null);
  localStorage.removeItem("resumeData");

  const handleDownload = async () => {
    const element = resumeRef.current;

    // Use a higher scale for better PDF text clarity
    const canvas = await html2canvas(element, {
      scale: 1,
      useCORS: true,
      logging: false,
    });

    console.log(canvas);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`${data.personalsDetails.firstName}_Resume.pdf`);
  };

  const navigate = useNavigate();

  return (
    <div className="resume_page">
      <div className="button">
        <Button onClick={handleDownload}>Download the Resume</Button>
        <Button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Go to the Dashboard
        </Button>
      </div>
      {data && (
        <div className="resume_page__card" ref={resumeRef}>
          <h1 className="resume_page__header">
            <span>{data.personalsDetails.firstName}</span>{" "}
            <span>{data.personalsDetails.lastName}</span>
          </h1>
          <h1 className="resume_page__header second">
            <span>{data.personalsDetails.jobTarget}</span>{" "}
          </h1>

          <div className="resume_page__contacts">
            <span className="email">
              <a href={`mailto:${data.personalsDetails.emailAddress}`}>
                {data.personalsDetails.emailAddress}
              </a>
            </span>
            <span>
              <a href={`tel:${data.personalsDetails.phoneNumber}`}>
                +91 {data.personalsDetails.phoneNumber}
              </a>
            </span>
            <span>
              <a href={`tel:${data.personalsDetails.optionalNumber}`}>
                +91 {data.personalsDetails.optionalNumber}
              </a>
            </span>
            <div>
              <span>{data.optionalsDetails.city},</span>
              <span>{data.optionalsDetails.state},</span>
              <span>{data.optionalsDetails.country}</span>
            </div>
            <span>
              <a href={data.personalsDetails.githubUrl}>Github</a>
            </span>
            <span>
              <a href={data.personalsDetails.linkedInUrl}>Linkedin</a>
            </span>
          </div>

          <div className="resume_page__summary section">
            <div className="section-header">Summary</div>
            <hr />
            <p>{data.optionalsDetails.summary}</p>
          </div>
          <div className="resume_page__education">
            <div className="section-header">Education</div>
            <hr />
            <EducationSection educationalDetails={data.educationalDetails} />
          </div>
          <div className="resume_page__skills">
            <div className="section-header">Skills</div>
            <hr />
            <SkillsSection skillsDetails={data.skillsDetails} />
          </div>
          <div className="resume_page__projects">
            <div className="section-header">Projects</div>
            <hr />
            <ProjectsSection projectsDetails={data.projectsDetails} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewResume;
