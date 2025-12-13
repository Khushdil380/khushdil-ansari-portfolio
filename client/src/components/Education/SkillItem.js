import React from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import "./SkillItem.css";

const SkillItem = ({ skill }) => {
  const { theme } = useTheme();

  const handleSkillClick = () => {
    window.open(skill.githubRepo, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="skill-item">
      <div className="skill-item__row">
        <div
          className="skill-item__icon"
          style={{
            borderColor: theme.subheading,
            color: theme.subheading,
          }}
        >
          {skill.name.substring(0, 2).toUpperCase()}
        </div>
        <div
          className="skill-item__bar-container"
          onClick={handleSkillClick}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === "Enter" && handleSkillClick()}
          style={{
            borderColor: theme.subheading,
          }}
        >
          <div
            className="skill-item__bar-fill"
            style={{
              width: `${skill.proficiency}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

SkillItem.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    proficiency: PropTypes.number.isRequired,
    githubRepo: PropTypes.string.isRequired,
  }).isRequired,
};

export default SkillItem;
