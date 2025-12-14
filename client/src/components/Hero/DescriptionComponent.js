import React from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import "./DescriptionComponent.css";

const DescriptionComponent = ({ currentRole = "Software Engineer" }) => {
  const { theme } = useTheme();

  const descriptions = {
    "Software Engineer":
      "Passionate about crafting scalable and efficient software solutions using modern technologies and best practices.",
    "Web Developer":
      "Creating responsive and user-friendly web applications that deliver exceptional user experiences across all devices.",
    "Full Stack Developer":
      "Building end-to-end applications with expertise in both frontend and backend technologies, ensuring seamless integration.",
    Programmer:
      "Writing clean, maintainable code and solving complex problems with elegant algorithmic solutions.",
    "Problem Solver":
      "Analyzing challenges from multiple angles and developing innovative solutions that drive business value.",
  };

  const currentDescription =
    descriptions[currentRole] || descriptions["Software Engineer"];

  return (
    <div className="description-component">
      <p className="description-text" style={{ color: theme.content }}>
        {currentDescription}
      </p>
    </div>
  );
};

DescriptionComponent.propTypes = {
  currentRole: PropTypes.string,
};

export default DescriptionComponent;
