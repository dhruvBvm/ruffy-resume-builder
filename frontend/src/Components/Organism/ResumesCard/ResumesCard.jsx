import "./ResumesCard.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { AppContext } from "../../../App";
import TemplateOneImage from "./../../../Assests/Images/templateOneImage.jpg";
import Button from "../../Molecules/Button/Button";
import { deleteResume } from "../../../utils/resumes/deleteResume";
import { editResume } from "../../../utils/resumes/editResume";

const ResumesCard = ({ resumes = [], title, isActions }) => {
  const { state } = useContext(AppContext);
  const navigate = useNavigate();

  useGSAP(() => {
    if (resumes.length === 0) return;

    const tl = gsap.timeline();
    tl.from(
      ".user-resumes__recent-resumes__card",
      {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
      },
      "start",
    );

    tl.from(
      ".user-resumes__recent-resumes__card .bar",
      {
        width: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power1.inOut",
      },
      "start+=0.3",
    );
  }, [resumes.length]);

  const handleViewResume = useCallback(
    async (e, resumeId) => {
      e.stopPropagation();
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/resume/${resumeId}`,
        );
        const resumeData = await response.json();
        if (resumeData.data) {
          navigate("/view-resume", { state: resumeData.data });
        }
      } catch (error) {
        console.error("Failed to fetch resume:", error);
      }
    },
    [navigate],
  );

  const countTime = (time) => {
    const date = new Date(time);
    const deltaSeconds = Math.round((Date.now() - date.getTime()) / 1000);
    const cutoffs = [60, 3600, 86400, 604800, 2592000, 31536000, Infinity];
    const units = ["second", "minute", "hour", "day", "week", "month", "year"];

    const unitIndex = cutoffs.findIndex((cutoff) => cutoff > deltaSeconds);
    const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;
    const count = Math.floor(deltaSeconds / divisor);

    return `${count} ${units[unitIndex]}${count !== 1 ? "s" : ""} ago`;
  };

  const handleResumeDelete = async (id) => {
    deleteResume(id)
      .then((result) => {
        if (result.data && result.success && result.statusCode === 600) {
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEditResume = async (id) => {
    editResume(id)
      .then((result) => {
        if (result.data && result.success && result.statusCode === 600) {
          navigate("/template-one");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h2 className="user-resumes__header">{title || "Resumes"}</h2>
      <div className="user-resumes__recent-resumes">
        {resumes.length > 0 ? (
          resumes.map((resume) => (
            <div
              className="user-resumes__recent-resumes__card"
              key={resume._id}
              onClick={(e) => handleViewResume(e, resume.resumeId)}
            >
              <div className="image-div">
                <img
                  src={resume.image || TemplateOneImage}
                  alt={resume.resumeName}
                />
              </div>

              <div className="infos">
                <h2>{resume.resumeName || "Untitled Template"}</h2>
                <h2 className="username">
                  {resume?.userId?.username || "Guest"}
                </h2>
              </div>

              <div className="status">
                <h4>{resume.style || "Developer"}</h4>
                <h4>{countTime(resume.updatedAt)}</h4>
              </div>

              <div className="progress">
                <div className="progress__info status">
                  <h4>Completion</h4>
                  <h4>{resume.completion_percentage || 0}%</h4>
                </div>
                <div className="progress__bar">
                  <div
                    className="bar"
                    style={{ width: `${resume.completion_percentage || 0}%` }}
                  ></div>
                </div>
              </div>

              <div className="actions">
                <Button onClick={(e) => handleViewResume(e, resume.resumeId)}>
                  View Resume
                </Button>

                {isActions &&
                  (state.user?.id === resume.userId?._id ||
                    state.user?.role === "Super Admin") && (
                    <div className="extra-actions">
                      <Button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditResume(resume._id);
                        }}
                      >
                        <CiEdit />
                      </Button>
                      <Button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleResumeDelete(resume._id);
                        }}
                      >
                        <MdDeleteOutline />
                      </Button>
                    </div>
                  )}
              </div>
            </div>
          ))
        ) : (
          <p className="no-data">No resumes found.</p>
        )}
      </div>
    </>
  );
};

export default ResumesCard;
