import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import QuoteComponent from "./QuoteComponent";
import ProfilePicture from "./ProfilePicture";
import HeadlineComponent from "./HeadlineComponent";
import DescriptionComponent from "./DescriptionComponent";
import Button from "../Utility/Button";
import "./HeroSection.css";

const HeroSection = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [currentRole, setCurrentRole] = useState("Software Engineer");

  const handleRoleChange = (role) => {
    setCurrentRole(role);
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <section
      className="hero-section"
      style={{
        "--primary-bg": theme.primaryBg,
      }}
    >
      {/* Quote centered at top */}
      <div className="hero-quote-wrapper">
        <QuoteComponent />
      </div>

      <div className="hero-container">
        {/* Mobile: Photo first */}
        <div className="hero-image-mobile">
          <ProfilePicture />
        </div>

        <div className="hero-content">
          <HeadlineComponent onRoleChange={handleRoleChange} />
          <DescriptionComponent currentRole={currentRole} />

          <div className="hero-buttons">
            <Button onClick={handleContactClick}>Contact me</Button>
            <Button onClick={handleAboutClick} variant="secondary">
              About me
            </Button>
          </div>
        </div>

        {/* Desktop: Photo on right */}
        <div className="hero-image-desktop">
          <ProfilePicture />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
