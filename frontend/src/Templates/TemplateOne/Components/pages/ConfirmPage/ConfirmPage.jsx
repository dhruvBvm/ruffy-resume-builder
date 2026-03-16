import { useContext } from "react";
import "./ConfirmPage.scss";
import Button from "../../../../../Components/Molecules/Button/Button";
import { useNavigate } from "react-router-dom";
import { TemplateOneContext } from "../../../TemplateOne";
import ConfirmPageForm from "../../Form/ConfrmPageForm/ConfirmPageForm";
import { config } from "../../../State/config";

const ConfirmPage = () => {
  const navigate = useNavigate();
  const { state } = useContext(TemplateOneContext);

  return (
    <div className="confirm-details">
      <h3>Confirm Your Resume Details</h3>
      <p>
        Finalizing your resume details ensures your profile is organized and
        ready for applications. Selecting a specific name and format helps you
        manage multiple versions and bypass ATS filters with the right technical
        structure for the role.
      </p>
      <a href="" className="confirm-details__policy">
        How we will use your information
      </a>
      <ConfirmPageForm />
    </div>
  );
};

export default ConfirmPage;
