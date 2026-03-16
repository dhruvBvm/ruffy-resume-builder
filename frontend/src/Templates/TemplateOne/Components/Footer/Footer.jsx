import "./Footer.scss";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../../../../Components/Molecules/Button/Button";
import { TemplateOneContext } from "../../TemplateOne";
import { useContext } from "react";
import { handleNavigation } from "../../Utils/handlenavigation";
import { useNavigate } from "react-router-dom";
import { config } from "../../State/config";
import { uploadResumes } from "../../../../utils/resumes/uploadResumes";

const Footer = ({}) => {
  const navigate = useNavigate();

  const { state, dispatch } = useContext(TemplateOneContext);

  return (
    <div className="footer">
      {state.pageNumber === 1 ? (
        <Button
          onClick={() => {
            navigate("/templates");
          }}
        >
          <FaArrowLeftLong />
          <span>Go to the Home Page</span>
        </Button>
      ) : (
        <Button
          onClick={() => {
            dispatch({
              type: "PREV_PAGE",
            });
          }}
        >
          <FaArrowLeftLong />
          <span>Go Back</span>
        </Button>
      )}

      {state.pageNumber === config.paths.length ? (
        <Button
          onClick={() => {
            dispatch({
              type: "SET_FORM_SUBMITTED",
            });
            if (state.errorStack.length > 0) {
              return;
            } else {
              uploadResumes(state)
                .then((result) => {
                  console.log(result)
                  if (result.data) {
                    navigate("/view-resume", { state: result.data });
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          }}
        >
          View Your Resume
        </Button>
      ) : (
        <Button
          onClick={() => {
            dispatch({
              type: "NEXT_PAGE",
            });
          }}
        >
          <span>
            {state.pageNumber === 1
              ? "Start Building the Resume"
              : "Save & Next  "}
          </span>
          <FaArrowRightLong />
        </Button>
      )}
    </div>
  );
};

export default Footer;
