import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./ProfilePicture.css";

const ProfilePicture = () => {
  const { theme } = useTheme();

  return (
    <div
      className="profile-picture-container"
      style={{
        "--accent-color": theme.accent,
        "--heading-color": theme.heading,
        "--subheading-color": theme.subheading,
      }}
    >
      <div className="profile-picture">
        <div className="profile-placeholder">KA</div>
      </div>
      <div className="profile-glow"></div>
    </div>
  );
};

export default ProfilePicture;
