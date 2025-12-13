import React from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import "./TechIcon.css";

const TechIcon = ({ techName }) => {
  const { theme } = useTheme();

  // Get first letter or two for the icon placeholder
  const getIconText = (name) => {
    const words = name.split(/[\s.-]/);
    if (words.length > 1) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <div className="tech-icon">
      <div
        className="tech-icon__circle"
        style={{
          borderColor: theme.subheading,
          color: theme.subheading,
        }}
        title={techName}
      >
        {getIconText(techName)}
      </div>
    </div>
  );
};

TechIcon.propTypes = {
  techName: PropTypes.string.isRequired,
};

export default TechIcon;
