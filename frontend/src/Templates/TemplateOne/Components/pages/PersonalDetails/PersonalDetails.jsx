import "./PersonalDetails.scss";
import PersonalDetailsForm from "../../Form/PersonalDetailsForm/PersonalDetailsForm";

const PersonalDetails = () => {
  return (
    <div className="personal-details">
      <h3>Fill your Personal Details</h3>
      <p>
        To Generate Resume you have to fill some information first. So we can
        add it in Your Resume.
      </p>
      <a href="" className="personal-details__policy">
        How we will use your information
      </a>
      <PersonalDetailsForm />
    </div>
  );
};

export default PersonalDetails;
