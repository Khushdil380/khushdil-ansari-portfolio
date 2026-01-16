import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../context/ThemeContext";
import "./ServiceModal.css";

const ServiceModal = ({ service, onClose }) => {
  const { theme } = useTheme();

  if (!service) return null;

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("service-modal")) onClose();
  };

  const duplicatedProjects = [...service.projects, ...service.projects];
  const duplicatedTestimonials = [
    ...service.testimonials,
    ...service.testimonials,
  ];

  return (
    <div className="service-modal" onClick={handleBackdropClick}>
      <div
        className="service-modal__content"
        style={{
          backgroundColor: theme.primaryBg,
          color: theme.content,
          "--accent-color": theme.accent,
          "--border-color": theme.subheading,
        }}
      >
        <button
          className="service-modal__close"
          onClick={onClose}
          style={{ color: theme.content }}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="service-modal__layout">
          {/* Left Side - Service Details */}
          <div className="service-modal__left">
            <div className="service-modal__icon">{service.icon}</div>
            <h2
              className="service-modal__title"
              style={{ color: theme.heading }}
            >
              {service.name}
            </h2>
            <p className="service-modal__description">
              {service.fullDescription}
            </p>

            <p
              className="service-modal__project-count"
              style={{ color: theme.heading }}
            >
              Total Projects: {service.totalProjects}+
            </p>

            <div className="service-modal__buttons">
              {service.githubLink && (
                <a
                  href={service.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-modal__link service-modal__link--github"
                  style={{
                    "--accent-color": theme.accent,
                  }}
                >
                  <span className="service-modal__link-icon">💻</span>
                  GitHub
                </a>
              )}
              {service.liveDemoLink && (
                <a
                  href={service.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-modal__link service-modal__link--demo"
                  style={{
                    "--accent-color": theme.accent,
                  }}
                >
                  <span className="service-modal__link-icon">🚀</span>
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Right Side - Projects and Testimonials */}
          <div className="service-modal__right">
            {/* Projects Section */}
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
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="service-modal__project-btn"
                        style={{
                          "--accent-color": theme.accent,
                        }}
                      >
                        Code
                      </a>
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="service-modal__project-btn service-modal__project-btn--secondary"
                        style={{
                          "--accent-color": theme.accent,
                        }}
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="service-modal__testimonials">
              <div className="service-modal__testimonials-list">
                {duplicatedTestimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="service-modal__testimonial-card"
                    style={{ backgroundColor: theme.secondaryBg }}
                  >
                    <div
                      className="service-modal__testimonial-profile"
                      style={{ backgroundColor: theme.secondaryBg }}
                    >
                      <img
                        src={
                          testimonial.profilePic ||
                          `https://ui-avatars.com/api/?name=${encodeURIComponent(
                            testimonial.client
                          )}&background=random&size=100`
                        }
                        alt={testimonial.client}
                      />
                    </div>
                    <p className="service-modal__testimonial-text">
                      "{testimonial.feedback}"
                    </p>
                    <p
                      className="service-modal__testimonial-client"
                      style={{ color: theme.accent }}
                    >
                      - {testimonial.client}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceModal.propTypes = {
  service: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    fullDescription: PropTypes.string.isRequired,
    totalProjects: PropTypes.number.isRequired,
    githubLink: PropTypes.string,
    liveDemoLink: PropTypes.string,
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tech: PropTypes.string.isRequired,
        codeLink: PropTypes.string.isRequired,
        demoLink: PropTypes.string.isRequired,
      })
    ).isRequired,
    testimonials: PropTypes.arrayOf(
      PropTypes.shape({
        client: PropTypes.string.isRequired,
        feedback: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ServiceModal;
