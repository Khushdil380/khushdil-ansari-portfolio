// Right side: projects and testimonials
import React from "react";
import PropTypes from "prop-types";
import ServiceProjects from "./ServiceProjects";
import ServiceTestimonials from "./ServiceTestimonials";

const ServiceModalRight = ({ service, theme }) => {
  return (
    <div className="service-modal__right">
      <ServiceProjects projects={service.projects} theme={theme} />
      <ServiceTestimonials testimonials={service.testimonials} theme={theme} />
    </div>
  );
};

ServiceModalRight.propTypes = {
  service: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default ServiceModalRight;
