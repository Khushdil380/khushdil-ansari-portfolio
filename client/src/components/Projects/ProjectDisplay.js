import React from "react";
import PropTypes from "prop-types";
import ProjectThumbnail from "./ProjectThumbnail";
import ProjectDetails from "./ProjectDetails";
import "./ProjectDisplay.css";

const ProjectDisplay = ({ project }) => {
  return (
    <div className="project-display">
      <ProjectThumbnail project={project} />
      <ProjectDetails project={project} />
    </div>
  );
};

ProjectDisplay.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectDisplay;
