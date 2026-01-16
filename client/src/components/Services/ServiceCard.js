import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../context/ThemeContext";
import Button from "../Utility/Button";
import "./ServiceCard.css";

const ServiceCard = ({ service, onKnowMore }) => {
  const { theme } = useTheme();

  return (
    <div
      className="service-card"
      style={{
        backgroundColor: theme.secondaryBg,
        borderColor: theme.subheading,
      }}
    >
      <div className="service-card__icon" style={{ color: theme.accent }}>
        {service.icon}
      </div>
      <h3 className="service-card__title" style={{ color: theme.heading }}>
        {service.name}
      </h3>
      <p className="service-card__description" style={{ color: theme.content }}>
        {service.shortDescription}
      </p>
      <Button onClick={() => onKnowMore(service)} variant="primary">
        Know More
      </Button>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
  }).isRequired,
  onKnowMore: PropTypes.func.isRequired,
};

export default ServiceCard;
