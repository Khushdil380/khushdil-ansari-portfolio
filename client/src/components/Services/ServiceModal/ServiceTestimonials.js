// Testimonials carousel
import React from "react";
import PropTypes from "prop-types";

const ServiceTestimonials = ({ testimonials, theme }) => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  return (
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
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.client)}&background=random&size=100`
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
  );
};

ServiceTestimonials.propTypes = {
  testimonials: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
};

export default ServiceTestimonials;
