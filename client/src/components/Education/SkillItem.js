import React from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import "./SkillItem.css";

// Import skill icons
import cIcon from "../../assets/skillicon/c.svg";
import cppIcon from "../../assets/skillicon/cpp.svg";
import cssIcon from "../../assets/skillicon/css.svg";
import javaIcon from "../../assets/skillicon/java.svg";
import javascriptIcon from "../../assets/skillicon/javascript.svg";
import pythonIcon from "../../assets/skillicon/python.svg";
import reactIcon from "../../assets/skillicon/react.svg";
import sqlIcon from "../../assets/skillicon/sql.svg";

const SkillItem = ({ skill }) => {
  const { theme } = useTheme();

  // Map skill names to icons
  const skillIcons = {
    C: cIcon,
    "C++": cppIcon,
    CSS: cssIcon,
    Java: javaIcon,
    JavaScript: javascriptIcon,
    Python: pythonIcon,
    React: reactIcon,
    SQL: sqlIcon,
  };

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
          }}
        >
          {skillIcons[skill.name] ? (
            <img
              src={skillIcons[skill.name]}
              alt={skill.name}
              className="skill-item__icon-img"
            />
          ) : (
            <span style={{ color: theme.subheading }}>
              {skill.name.substring(0, 2).toUpperCase()}
            </span>
          )}
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
