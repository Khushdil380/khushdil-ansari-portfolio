import React, { useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import "./ProjectNavigation.css";

const ProjectNavigation = ({ projects, activeIndex, onProjectChange }) => {
  const { theme } = useTheme();
  const tabsRef = useRef(null);

  const handlePrevious = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (activeIndex > 0) {
      onProjectChange(activeIndex - 1);
    }
    // Also scroll on mobile
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (activeIndex < projects.length - 1) {
      onProjectChange(activeIndex + 1);
    }
    // Also scroll on mobile
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div
      className="project-navigation"
      style={{ backgroundColor: theme.secondaryBg }}
    >
      <button
        className="project-navigation__arrow project-navigation__arrow--prev"
        onClick={handlePrevious}
        style={{
          color: theme.heading,
        }}
        aria-label="Previous project"
        type="button"
      >
        ◀
      </button>

      <div className="project-navigation__tabs" ref={tabsRef}>
        {projects.map((project, index) => (
          <button
            key={project.id}
            className={`project-navigation__tab ${
              activeIndex === index ? "project-navigation__tab--active" : ""
            }`}
            onClick={() => onProjectChange(index)}
            style={{
              color: activeIndex === index ? theme.heading : theme.content,
              backgroundColor:
                activeIndex === index ? theme.primaryBg : "transparent",
              borderColor: activeIndex === index ? theme.accent : "transparent",
            }}
          >
            {project.name}
          </button>
        ))}
      </div>

      <button
        className="project-navigation__arrow project-navigation__arrow--next"
        onClick={handleNext}
        style={{
          color: theme.heading,
        }}
        aria-label="Next project"
        type="button"
      >
        ▶
      </button>
    </div>
  );
};

ProjectNavigation.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeIndex: PropTypes.number.isRequired,
  onProjectChange: PropTypes.func.isRequired,
};

export default ProjectNavigation;
