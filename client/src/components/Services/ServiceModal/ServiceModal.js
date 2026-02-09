// Main modal wrapper and logic
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../../context/ThemeContext";
import UniversalModal from "../../Utility/UniversalModal";
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

  return (
    <UniversalModal
      isOpen={!!service}
      onClose={onClose}
      size="xlarge"
      closeOnBackdropClick={true}
      customClass="service-modal-wrapper"
    >
      <div className="service-modal__layout">
        <ServiceModalLeft service={service} theme={theme} />
        <ServiceModalRight service={service} theme={theme} />
      </div>
    </UniversalModal>
  );
};

ServiceModal.propTypes = {
  service: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default ServiceModal;
