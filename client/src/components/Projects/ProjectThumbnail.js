import React from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import "./ProjectThumbnail.css";

const ProjectThumbnail = ({ project }) => {
  const { theme } = useTheme();

  return (
    <div className="project-thumbnail">
      <div className="project-thumbnail__image-container">
        <img
          src={project.thumbnail}
          alt={`${project.name} thumbnail`}
          className="project-thumbnail__image"
        />
      </div>

      <div className="project-thumbnail__metadata">
        <div
          className="project-thumbnail__duration"
          style={{ color: theme.content }}
        >
          {project.startDate} - {project.endDate}
        </div>

        <div className="project-thumbnail__info-row">
          <div
            className="info-badge category-badge"
            style={{
              borderColor: theme.subheading,
              color: theme.content,
            }}
          >
            {project.category}
          </div>

          <div
            className="info-badge duration-badge"
            style={{
              borderColor: theme.subheading,
              color: theme.content,
            }}
          >
            {project.duration}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectThumbnail.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectThumbnail;
