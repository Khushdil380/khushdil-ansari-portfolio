// Main modal wrapper and logic
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../../context/ThemeContext";
import Button from "../../Utility/Button";
import CloseButton from "../../Utility/CloseButton";
import "./ServiceModalCommon.css";
import "./ServiceModalLeft.css";
import "./ServiceModalRight.css";
import "./ServiceProjects.css";
import "./ServiceTestimonials.css";
import "./ServiceModalResponsive.css";
import ServiceModalLeft from "./ServiceModalLeft";
import ServiceModalRight from "./ServiceModalRight";

const ServiceModal = ({ service, onClose }) => {
  const { theme } = useTheme();
  if (!service) return null;
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("service-modal")) onClose();
  };
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
        <div className="service-modal__close">
          <CloseButton onClick={onClose} />
        </div>
        <div className="service-modal__layout">
          <ServiceModalLeft service={service} theme={theme} />
          <ServiceModalRight service={service} theme={theme} />
        </div>
      </div>
    </div>
  );
};

ServiceModal.propTypes = {
  service: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default ServiceModal;
