// Testimonials carousel
import React from "react";
import PropTypes from "prop-types";

const testimonialImages = [
  require("../../../assets/Testimonials/1.png"),
  require("../../../assets/Testimonials/2.png"),
  require("../../../assets/Testimonials/3.png"),
  require("../../../assets/Testimonials/4.png"),
  require("../../../assets/Testimonials/5.png"),
  require("../../../assets/Testimonials/6.png"),
  require("../../../assets/Testimonials/7.png"),
  require("../../../assets/Testimonials/8.png"),
  require("../../../assets/Testimonials/9.png"),
  require("../../../assets/Testimonials/10.png"),
  require("../../../assets/Testimonials/11.png"),
  require("../../../assets/Testimonials/12.png"),
  require("../../../assets/Testimonials/13.png"),
  require("../../../assets/Testimonials/14.png"),
  require("../../../assets/Testimonials/15.png"),
  require("../../../assets/Testimonials/16.png"),
  require("../../../assets/Testimonials/17.png"),
  require("../../../assets/Testimonials/18.png"),
  require("../../../assets/Testimonials/19.png"),
  require("../../../assets/Testimonials/20.png"),
  require("../../../assets/Testimonials/21.png"),
];

function getRandomImage(index) {
  // Use index to keep the same image for the same testimonial in both loops
  return testimonialImages[index % testimonialImages.length];
}

const ServiceTestimonials = ({ testimonials, theme }) => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  return (
    <div className="service-modal__testimonials">
      <div className="service-modal__testimonials-list">
        {duplicatedTestimonials.map((testimonial, index) => {
          // Use provided profilePic, otherwise assign a random image from assets
          const imgSrc = testimonial.profilePic || getRandomImage(index);
          return (
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
                  src={imgSrc}
                  alt={testimonial.client}
                  style={{ background: "transparent" }}
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
          );
        })}
      </div>
    </div>
  );
};

ServiceTestimonials.propTypes = {
  testimonials: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
};

export default ServiceTestimonials;
