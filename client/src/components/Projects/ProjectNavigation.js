import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import ArrowButton from "./ArrowButton";
import "./ProjectNavigation.css";

const ProjectNavigation = ({ projects, activeIndex, onProjectChange }) => {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [visibleStart, setVisibleStart] = useState(0);
  const mobileVisibleCount = 3;
  const desktopVisibleCount = 5;
  const shouldUseSliding = projects.length > 5;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update visible window when active index changes
  useEffect(() => {
    const visibleCount = isMobile ? mobileVisibleCount : desktopVisibleCount;
    if (shouldUseSliding || isMobile) {
      if (activeIndex < visibleStart) {
        setVisibleStart(activeIndex);
      } else if (activeIndex >= visibleStart + visibleCount) {
        setVisibleStart(activeIndex - visibleCount + 1);
      }
    }
  }, [activeIndex, isMobile, visibleStart, shouldUseSliding]);

  const handlePrevious = () => {
    if (activeIndex > 0) {
      onProjectChange(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < projects.length - 1) {
      onProjectChange(activeIndex + 1);
    }
  };

  const visibleCount = isMobile ? mobileVisibleCount : desktopVisibleCount;
  const visibleProjects =
    shouldUseSliding || isMobile
      ? projects.slice(visibleStart, visibleStart + visibleCount)
      : projects;

  const getProjectIndex = (project) => {
    return projects.findIndex((p) => p.id === project.id);
  };

  return (
    <div className="project-navigation">
      <ArrowButton
        direction="left"
        onClick={handlePrevious}
        disabled={activeIndex === 0}
      />

      <div className="project-tabs">
        {visibleProjects.map((project) => {
          const index = getProjectIndex(project);
          return (
            <button
              key={project.id}
              className={`project-tab ${
                index === activeIndex ? "project-tab--active" : ""
              }`}
              onClick={() => onProjectChange(index)}
              style={{
                color: index === activeIndex ? theme.heading : theme.content,
                borderBottomColor:
                  index === activeIndex ? "var(--accent-color)" : "transparent",
              }}
            >
              {project.name}
            </button>
          );
        })}
      </div>

      <ArrowButton
        direction="right"
        onClick={handleNext}
        disabled={activeIndex === projects.length - 1}
      />
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
