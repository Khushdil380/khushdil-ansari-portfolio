import React, { useState, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import QuoteComponent from "./QuoteComponent";
import ProfilePicture from "./ProfilePicture";
import HeadlineComponent from "./HeadlineComponent";
import DescriptionComponent from "./DescriptionComponent";
import AnimatedBackground from "./AnimatedBackground";
import Button from "../Utility/Button";
import RequestResumeButton from "../Utility/RequestResumeButton";
import "./HeroSection.css";

// Lazy load the modal - only loads when user clicks the button
const RequestResumeModal = lazy(() => import("../Utility/RequestResumeModal"));

const HeroSection = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [currentRole, setCurrentRole] = useState("Software Engineer");
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleRoleChange = (role) => {
    setCurrentRole(role);
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <section
      className="hero-section"
      style={{
        "--primary-bg": theme.primaryBg,
      }}
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Quote centered at top */}
      <div className="hero-quote-wrapper">
        <QuoteComponent />
      </div>

      <div className="hero-container">
        {/* Mobile: Photo first */}
        <div className="hero-image-mobile">
          <ProfilePicture />
        </div>

        <div className="hero-content">
          <HeadlineComponent onRoleChange={handleRoleChange} />
          <DescriptionComponent currentRole={currentRole} />

          <div className="hero-buttons">
            <Button onClick={handleContactClick}>Contact me</Button>
            <Button onClick={handleAboutClick} variant="secondary">
              About me
            </Button>
          </div>

          <div className="hero-resume-request">
            <RequestResumeButton onClick={() => setIsResumeModalOpen(true)} />
          </div>
        </div>

        {/* Desktop: Photo on right */}
        <div className="hero-image-desktop">
          <ProfilePicture />
        </div>
      </div>

      {/* Resume Request Modal - Lazy loaded */}
      {isResumeModalOpen && (
        <Suspense fallback={null}>
          <RequestResumeModal
            isOpen={isResumeModalOpen}
            onClose={() => setIsResumeModalOpen(false)}
          />
        </Suspense>
      )}
    </section>
  );
};

export default HeroSection;
