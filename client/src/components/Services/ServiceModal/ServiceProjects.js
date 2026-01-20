// Projects carousel
import React from "react";
import PropTypes from "prop-types";
import Button from "../../Utility/Button";

const ServiceProjects = ({ projects, theme }) => {
  const duplicatedProjects = [...projects, ...projects];
  return (
    <div className="service-modal__projects">
      <div className="service-modal__projects-carousel">
        {duplicatedProjects.map((project, index) => (
          <div
            key={index}
            className="service-modal__project-card"
            style={{ backgroundColor: theme.secondaryBg }}
          >
            <h4
              className="service-modal__project-name"
              style={{ color: theme.heading }}
            >
              {project.name}
            </h4>
            <p className="service-modal__project-description">
              {project.description}
            </p>
            <div className="service-modal__project-buttons">
              <Button href={project.codeLink} variant="primary">
                Code
              </Button>
              <Button href={project.demoLink} variant="secondary">
                Demo
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ServiceProjects.propTypes = {
  projects: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
};

export default ServiceProjects;
