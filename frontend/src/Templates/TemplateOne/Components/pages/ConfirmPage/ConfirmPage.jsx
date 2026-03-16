import { useContext } from "react";
import "./ConfirmPage.scss";
import ConfirmPageForm from "../../Form/ConfrmPageForm/ConfirmPageForm";

const ConfirmPage = () => {
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
