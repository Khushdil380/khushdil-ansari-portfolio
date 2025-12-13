import React from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import "./EducationItem.css";

const EducationItem = ({ education }) => {
  const { theme } = useTheme();

  return (
    <div
      className="education-item"
      style={{
        borderColor: theme.subheading,
      }}
    >
      <h3
        className="education-item__institute"
        style={{ color: theme.heading }}
      >
        {education.instituteName}
      </h3>
      <div className="education-item__details" style={{ color: theme.content }}>
        <span className="education-item__course">{education.course}</span>
        <span className="education-item__separator">•</span>
        <span className="education-item__year">{education.year}</span>
        <span className="education-item__separator">•</span>
        <span className="education-item__score">{education.score}</span>
      </div>
    </div>
  );
};

EducationItem.propTypes = {
  education: PropTypes.shape({
    instituteName: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    score: PropTypes.string.isRequired,
  }).isRequired,
};

export default EducationItem;
