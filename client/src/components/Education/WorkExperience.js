import React from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import "./WorkExperience.css";

const WorkExperience = ({ experience }) => {
  const { theme } = useTheme();

  return (
    <div className="work-experience">
      <div className="work-experience__header">
        <div
          className="work-experience__period"
          style={{
            borderColor: theme.subheading,
            color: theme.content,
          }}
        >
          {experience.period}
        </div>
        <div className="work-experience__company">
          <h3
            className="work-experience__company-name"
            style={{ color: theme.heading }}
          >
            {experience.companyName}
          </h3>
          <div
            className="work-experience__details"
            style={{ color: theme.content }}
          >
            <span className="work-experience__role">{experience.role}</span>
            <span className="work-experience__separator">•</span>
            <span className="work-experience__location">
              {experience.location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

WorkExperience.propTypes = {
  experience: PropTypes.shape({
    period: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorkExperience;
