import React from "react";
import ServicesSection from "../components/Services/ServicesSection";

const ServicePage = () => {
  return (
    <section
      className="page-section"
      style={{ minHeight: "100vh", padding: "5rem 0 1rem" }}
    >
      <ServicesSection />
    </section>
  );
};

export default ServicePage;
