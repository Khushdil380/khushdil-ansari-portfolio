// Left side: icon, title, description, buttons
import React from "react";
import PropTypes from "prop-types";
import Button from "../../Utility/Button";

const ServiceModalLeft = ({ service, theme }) => {
  return (
    <div className="service-modal__left">
      <div className="service-modal__icon">{service.icon}</div>
      <h2 className="service-modal__title" style={{ color: theme.heading }}>
        {service.name}
      </h2>
      <p className="service-modal__description">{service.fullDescription}</p>
      <p
        className="service-modal__project-count"
        style={{ color: theme.heading }}
      >
        Total Projects: {service.totalProjects}+
      </p>
      <div className="service-modal__buttons">
        {service.githubLink && (
          <Button href={service.githubLink} variant="primary">
            <span className="service-modal__link-icon">💻</span>
            GitHub
          </Button>
        )}
        {service.liveDemoLink && (
          <Button href={service.liveDemoLink} variant="primary">
            <span className="service-modal__link-icon">🚀</span>
            Live Demo
          </Button>
        )}
      </div>
    </div>
  );
};

ServiceModalLeft.propTypes = {
  service: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default ServiceModalLeft;
