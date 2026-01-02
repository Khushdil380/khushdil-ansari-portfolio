import React from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import "./TechIcon.css";

const TechIcon = ({ techName, iconPath }) => {
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
        }}
        title={techName}
      >
        {iconPath ? (
          <img src={iconPath} alt={techName} className="tech-icon__img" />
        ) : (
          <span style={{ color: theme.subheading }}>
            {getIconText(techName)}
          </span>
        )}
      </div>
    </div>
  );
};

TechIcon.propTypes = {
  techName: PropTypes.string.isRequired,
  iconPath: PropTypes.string,
};

export default TechIcon;
