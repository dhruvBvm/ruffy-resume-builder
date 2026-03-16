import React, { useRef, useState, useContext } from "react";
import "./ProfileDetailsForm.scss";
import ProfileImage from "../../Molecules/ProfileImage/ProfileImage";
import FormRow from "../../Molecules/FormRow/FormRow";
import FormFile from "../../Molecules/FormFile/FormFile";
import { ResumeData } from "../../Pages/Wizard/Wizard";

const ProfileDetailsForm = () => {
    const [profileDetails, setProfileDetails] = useState({
      profilePic: null,
    });

  const imageRef = useRef();

  const resumeData = useContext(ResumeData);

  const handleProfilePIc = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileDetails((prev) => ({
          ...prev,
          profilePic: reader.result,
        }));
        resumeData.setData((prev) => {
          return {
            ...prev,
            profilePic: reader.result,
          };
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setProfileDetails((prev) => ({
      ...prev,
      profilePic: null,
    }));
    resumeData.setData((prev) => {
      return {
        ...prev,
        profilePic: null,
      };
    });
    if (imageRef.current) {
      imageRef.current.value = null;
    }
  };
  return (
    <form className="profile-details-form" autoComplete="off">
      <div className="image-input">
        <ProfileImage
          src={resumeData.data.profilePic}
          handleRemoveImage={handleRemoveImage}
        />
        <FormFile onChange={handleProfilePIc} ref={imageRef} />
      </div>
    </form>
  );
};

export default ProfileDetailsForm;
