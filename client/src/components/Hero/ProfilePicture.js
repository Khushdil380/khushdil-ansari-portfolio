import React from "react";
import "./ProfilePicture.css";

const ProfilePicture = () => {
  return (
    <div className="profile-picture-container">
      <div className="profile-picture">
        <img
          src="/profile/profile-on-hero.gif"
          alt="Profile"
          className="profile-image"
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
