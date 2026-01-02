import React from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import TechIcon from "./TechIcon";
import Button from "../Utility/Button";
import "./ProjectDetails.css";

const ProjectDetails = ({ project }) => {
  const { theme } = useTheme();

  const handleLiveDemo = () => {
    window.open(project.liveDemo, "_blank", "noopener,noreferrer");
  };

  const handleCode = () => {
    window.open(project.codeRepo, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="project-details">
      <div className="project-details__section">
        <div className="project-details__tech-icons">
          {project.technologies.map((tech, index) => {
            // Handle both string format (old) and object format (new with icons)
            const techName = typeof tech === "string" ? tech : tech.name;
            const techIcon = typeof tech === "object" ? tech.icon : null;
            return (
              <TechIcon key={index} techName={techName} iconPath={techIcon} />
            );
          })}
        </div>
      </div>

      <div className="project-details__section">
        <p
          className="project-details__abstract"
          style={{ color: theme.content }}
        >
          {project.abstract}
        </p>
      </div>

      <div className="project-details__actions">
        <Button onClick={handleLiveDemo} variant="primary">
          Live Demo
        </Button>
        <Button onClick={handleCode} variant="secondary">
          Code
        </Button>
      </div>
    </div>
  );
};

ProjectDetails.propTypes = {
  project: PropTypes.shape({
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    abstract: PropTypes.string.isRequired,
    liveDemo: PropTypes.string.isRequired,
    codeRepo: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectDetails;
