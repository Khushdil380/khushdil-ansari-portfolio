import React, { useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import "../Utility/TechIconStyles.css";
import "./SkillItem.css";

// Import skill icons
import cIcon from "../../assets/techIcons/c.svg";
import cppIcon from "../../assets/techIcons/cpp.svg";
import cssIcon from "../../assets/techIcons/css.svg";
import javaIcon from "../../assets/techIcons/java.svg";
import javascriptIcon from "../../assets/techIcons/javascript.svg";
import pythonIcon from "../../assets/techIcons/python.svg";
import reactIcon from "../../assets/techIcons/react.svg";
import sqlIcon from "../../assets/techIcons/sql.svg";

const SkillItem = ({ skill }) => {
  const { theme } = useTheme();
  const bubbleModuleRef = useRef(null);

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

  const handleIconHover = async () => {
    // Lazy load bubble effect on first hover
    if (!bubbleModuleRef.current) {
      try {
        const module = await import("../Utility/BubbleEffect/index");
        bubbleModuleRef.current = module.createTechBubble;
      } catch (error) {
        console.error("Failed to load bubble effect:", error);
        return;
      }
    }
    bubbleModuleRef.current(skill.name);
  };

  return (
    <div className="skill-item">
      <div className="skill-item__row">
        <div
          className="tech-icon-circle tech-icon-circle--small tech-icon-circle--hoverable"
          style={{
            "--border-color": theme.subheading,
            "--accent-color": theme.accent,
          }}
          onMouseEnter={handleIconHover}
        >
          {skillIcons[skill.name] ? (
            <img
              src={skillIcons[skill.name]}
              alt={skill.name}
              className="tech-icon-img loaded"
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
