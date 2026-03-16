import React from "react";
import "./ProfileDetails.scss";
import ProfileDetailsForm from "../ProfileDetailsForm/ProfileDetailsForm";


const ProfileDetails = () => {
  return (
    <div className="profile-details">
      <h3>Fill your profile Details</h3>
      <p>
        A professional headshot builds immediate trust and humanizes your
        application, making you more memorable to recruiters. In client-facing
        or creative roles, a polished image reinforces your personal brand and
        signals a high level of professional commitment
      </p>
      <a href="" className="personal-details__policy">
        How we will use your information
      </a>
      <ProfileDetailsForm/>
    </div>
  );
};

export default ProfileDetails;
