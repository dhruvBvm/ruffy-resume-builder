import React from "react";
import "./ProfileImage.scss";
import profile from "./../../../Assests/Images/profile.jpg";
import Button from "../Button/Button";

const ProfileImage = ({ src, handleRemoveImage }) => {
  return (
    <>
      <div className="profile__container">
        <div className="profile__image">
          <img src={src ? src : profile} alt="" />
        </div>
        <Button text={"Remove Image"} onClick={handleRemoveImage} />
      </div>
    </>
  );
};

export default ProfileImage;
