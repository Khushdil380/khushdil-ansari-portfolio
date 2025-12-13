import React from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import Button from "../Utility/Button";
import "./AboutIntro.css";

const AboutIntro = ({ onKnowMore }) => {
  const { theme } = useTheme();

  return (
    <div className="about-intro">
      {/* Left Section - Photo and Details */}
      <div className="about-left">
        <div className="about-profile-pic">
          <div className="about-profile-placeholder">KA</div>
        </div>
        <h2 className="about-name" style={{ color: theme.heading }}>
          KHUSHDIL ANSARI (HE)
        </h2>
        <p className="about-degree" style={{ color: theme.subheading }}>
          Computer Science Engineer
        </p>
      </div>

      {/* Right Section - About Content */}
      <div className="about-right">
        <h3 className="about-heading" style={{ color: theme.heading }}>
          Here a 4-5 line about me
        </h3>
        <div className="about-content" style={{ color: theme.content }}>
          <p>
            I am a passionate Computer Science Engineer with a deep love for
            technology and innovation. My journey in software development has
            been driven by curiosity and a constant desire to learn and grow.
          </p>
          <p>
            I thrive on solving complex problems and building solutions that
            make a real difference. Whether it's crafting elegant code,
            designing intuitive user experiences, or exploring new technologies,
            I'm always excited to push the boundaries of what's possible.
          </p>
          <p>
            Beyond coding, I believe in continuous learning and staying updated
            with the latest trends in technology. I'm committed to writing
            clean, maintainable code and following best practices in software
            development.
          </p>
        </div>
        <div className="about-button-wrapper">
          <Button onClick={onKnowMore}>Know more</Button>
        </div>
      </div>
    </div>
  );
};

AboutIntro.propTypes = {
  onKnowMore: PropTypes.func.isRequired,
};

export default AboutIntro;
