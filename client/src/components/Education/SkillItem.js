import React, { useRef, useState, useEffect } from "react";
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

const SkillItem = ({ skill, triggerAnimation, onSkillClick }) => {
  const { theme } = useTheme();
  const bubbleModuleRef = useRef(null);
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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
    // If onSkillClick is provided, use it to open modal
    // Otherwise, fallback to opening GitHub repo
    if (onSkillClick) {
      onSkillClick(skill);
    } else {
      window.open(skill.githubRepo, "_blank", "noopener,noreferrer");
    }
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

  // Initial animation on mount - wait 1 second then animate
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setIsAnimating(true);
      setAnimatedWidth(skill.proficiency);
    }, 1000);

    return () => clearTimeout(initialTimer);
  }, [skill.proficiency]);

  // Handle random animation triggers from parent
  useEffect(() => {
    if (triggerAnimation > 0) {
      // First, disable transition and reset to 0 instantly
      setIsAnimating(false);
      setAnimatedWidth(0);

      // After a short delay, enable transition and animate to target
      const animateTimer = setTimeout(() => {
        setIsAnimating(true);
        setAnimatedWidth(skill.proficiency);
      }, 100);

      return () => clearTimeout(animateTimer);
    }
  }, [triggerAnimation, skill.proficiency]);

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
          className="skill-item__bar-wrapper"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {showTooltip && (
            <div className="skill-item__tooltip">{skill.proficiency}%</div>
          )}
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
              className={`skill-item__bar-fill ${isAnimating ? "skill-item__bar-fill--animated" : ""}`}
              style={{
                width: `${animatedWidth}%`,
              }}
            />
          </div>
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
  triggerAnimation: PropTypes.number,
};

export default SkillItem;
