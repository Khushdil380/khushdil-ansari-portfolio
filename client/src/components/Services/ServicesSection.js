import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import servicesData from "./servicesData";
import "./ServicesSection.css";

const ServicesSection = () => {
  const { theme } = useTheme();
  const [selectedService, setSelectedService] = useState(null);

  const handleKnowMore = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="services-section">
      <div className="services-section__grid">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onKnowMore={() => handleKnowMore(service)}
          />
        ))}
      </div>

      {selectedService && (
        <ServiceModal service={selectedService} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default ServicesSection;
